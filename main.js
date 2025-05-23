// Constants for DOM elements
const DOM = {
  main: document.querySelector("main"),
  template: document.getElementById("component-template"),
  search: document.getElementById("search"),
};

// Utility to safely render HTML in the preview (prevents script execution)
const renderSafeHTML = (html, targetElement) => {
  // Create a temporary container to parse the HTML
  const temp = document.createElement("div");
  temp.innerHTML = html;

  // Remove <script> tags and dangerous attributes (e.g., on* event handlers)
  const scripts = temp.querySelectorAll("script");
  scripts.forEach(script => script.remove());

  const elements = temp.querySelectorAll("*");
  elements.forEach(element => {
    const attrs = element.attributes;
    for (let i = attrs.length - 1; i >= 0; i--) {
      const attrName = attrs[i].name;
      if (attrName.startsWith("on")) {
        element.removeAttribute(attrName); // Remove event handlers like onclick, onmouseover, etc.
      }
    }
  });

  // Clear the target element and append the sanitized DOM nodes
  targetElement.innerHTML = "";
  targetElement.append(...temp.childNodes);
};

// Utility to show temporary feedback
const showFeedback = (element, message) => {
  const originalText = element.textContent;
  element.textContent = message;
  element.classList.add("bg-opacity-80");
  setTimeout(() => {
    element.textContent = originalText;
    element.classList.remove("bg-opacity-80");
  }, 1000);
};

// Debounce utility to limit frequent search calls
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Render components with filter
const renderComponents = (filter = "") => {
  if (!DOM.main || !DOM.template) {
    console.error("Required DOM elements are missing.");
    return;
  }

  // Clear previous content
  DOM.main.innerHTML = "";

  try {
    // Normalize filter by removing spaces
    const normalizedFilter = filter.replace(/\s+/g, "").toLowerCase();

    // Filter components or show first 4 if no filter
    const toDisplay = filter
      ? (components || []).filter(c =>
          c.name && c.name.replace(/\s+/g, "").toLowerCase().includes(normalizedFilter)
        )
      : (components || []).slice(0, 4);

    if (!toDisplay.length) {
      DOM.main.innerHTML = '<p class="text-gray-400 text-center p-4">No components found.</p>';
      return;
    }

    toDisplay.forEach(component => {
      if (!component.html || !component.js) {
        console.warn(`Component ${component.name} is missing HTML or JS.`);
        return;
      }

      const clone = DOM.template.content.cloneNode(true);

      // Safely render HTML in the preview section
      const preview = clone.querySelector(".preview");
      if (preview) {
        renderSafeHTML(component.html, preview);
      }

      // Set code snippets (raw text, not rendered)
      const htmlCode = clone.querySelector(".html-code");
      const jsCode = clone.querySelector(".js-code");
      if (htmlCode) htmlCode.textContent = component.html;
      if (jsCode) jsCode.textContent = component.js;

      // Copy HTML button
      const copyHtmlBtn = clone.querySelector(".copy-html");
      if (copyHtmlBtn) {
        copyHtmlBtn.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(component.html);
            showFeedback(copyHtmlBtn, "Copied!");
          } catch (err) {
            console.error("Failed to copy HTML:", err);
            showFeedback(copyHtmlBtn, "Error!");
          }
        });
      }

      // Copy JS button
      const copyJsBtn = clone.querySelector(".copy-js");
      if (copyJsBtn) {
        copyJsBtn.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(component.js);
            showFeedback(copyJsBtn, "Copied!");
          } catch (err) {
            console.error("Failed to copy JS:", err);
            showFeedback(copyJsBtn, "Error!");
          }
        });
      }

      DOM.main.appendChild(clone);
    });
  } catch (err) {
    console.error("Error rendering components:", err);
    DOM.main.innerHTML = '<p class="text-red-400 text-center p-4">Error loading components.</p>';
  }
};

// Debounced search handler
const handleSearch = debounce((value) => {
  renderComponents(value);
}, 300);

// Initialize search event listener
if (DOM.search) {
  DOM.search.setAttribute("aria-label", "Search components");
  DOM.search.addEventListener("input", (e) => handleSearch(e.target.value));
} else {
  console.error("Search input element not found.");
}

// Initial render
renderComponents();