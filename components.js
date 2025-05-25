const components = [
  {
    name: "Modern White Hero Section",
  html: `
  <section class="bg-white text-gray-900 py-20 px-6">
    <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div class="text-center md:text-left">
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-6">
          Build Faster with <span class="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">xUI Components</span>
        </h1>
        <p class="text-lg text-gray-600 mb-6 max-w-xl">
          A collection of pre-designed, responsive UI components made with Tailwind CSS and JavaScript — ready to copy and use.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</button>
          <button class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">Browse Components</button>
        </div>
      </div>
      <div>
        <img src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.png" alt="Hero Image" class="w-full max-w-md mx-auto md:mx-0">
      </div>
    </div>
  </section>
  `,
  js: `// No JavaScript needed for this hero section`
  },
  {
    name: "Button",
    html: `
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
  Click Me
</button>`,
    js: `// No JavaScript needed for basic button`
  },
{
  name: "Premium Footer",
  html: `
  <footer class="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300 pt-12 pb-6 px-6 sm:px-12">
    <div class="max-w-7xl mx-auto grid gap-10 md:grid-cols-5">
      <!-- Logo & Newsletter -->
      <div class="md:col-span-2">
        <h2 class="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">xUI</h2>
        <p class="mt-2 text-sm text-gray-400">Modern UI components made simple. Supercharge your development with clean, responsive building blocks.</p>
        <form class="mt-4 flex flex-col sm:flex-row gap-2">
          <input type="email" placeholder="Your email" class="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400" />
          <button class="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded font-medium transition">Subscribe</button>
        </form>
      </div>

      <!-- Links Column 1 -->
      <div>
        <h4 class="text-lg font-semibold mb-2">Product</h4>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="hover:text-white">Components</a></li>
          <li><a href="#" class="hover:text-white">Templates</a></li>
          <li><a href="#" class="hover:text-white">Integrations</a></li>
        </ul>
      </div>

      <!-- Links Column 2 -->
      <div>
        <h4 class="text-lg font-semibold mb-2">Company</h4>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="hover:text-white">About</a></li>
          <li><a href="#" class="hover:text-white">Careers</a></li>
          <li><a href="#" class="hover:text-white">Contact</a></li>
        </ul>
      </div>

      <!-- Links Column 3 -->
      <div>
        <h4 class="text-lg font-semibold mb-2">Support</h4>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="hover:text-white">Help Center</a></li>
          <li><a href="#" class="hover:text-white">Documentation</a></li>
          <li><a href="#" class="hover:text-white">Status</a></li>
        </ul>
      </div>
    </div>

    <!-- Socials + Bottom -->
    <div class="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm">
      <p class="text-gray-500">&copy; 2025 xUI. All rights reserved.</p>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-white">Twitter</a>
        <a href="#" class="hover:text-white">GitHub</a>
        <a href="#" class="hover:text-white">Discord</a>
      </div>
    </div>
  </footer>
  `,
  js: `// No JavaScript needed for this advanced footer`
},
  {
    name: "Navbar",
    html: `
<nav class="bg-gray-800 p-4 flex items-center justify-between flex-wrap">
  <div class="text-white font-bold text-xl">xUI Navbar</div>
  <button id="nav-toggle" class="block sm:hidden text-white focus:outline-none">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
        d="M4 6h16M4 12h16M4 18h16"></path></svg>
  </button>
  <div id="nav-menu" class="w-full sm:flex sm:items-center sm:w-auto hidden sm:block">
    <a href="#" class="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-400 mr-4">Home</a>
    <a href="#" class="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-400 mr-4">About</a>
    <a href="#" class="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-gray-400">Contact</a>
  </div>
</nav>`,
    js: `
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});
`
  },
{
  name: "Cyan Gradient Hero (No Image)",
  html: `
  <section class="bg-white text-gray-900 py-24 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl font-extrabold mb-6 leading-tight">
        Build faster with <br />
        <span class="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">ready-made UI components</span>
      </h1>
      <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        xUI offers a sleek, developer-friendly library of components crafted with Tailwind CSS and JavaScript — perfect for rapid UI building.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button class="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition">
          Get Started
        </button>
        <button class="px-6 py-3 border border-cyan-500 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition">
          Explore Components
        </button>
      </div>
    </div>
  </section>
  `,
  js: `// No JavaScript required for this Hero`
},
  {
    name: "Footer",
    html: `
<footer class="bg-gray-900 text-gray-300 p-6 text-center">
  <h2 class="text-2xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
    xUI Library
  </h2>
  <p>© 2025 xUI. All rights reserved.</p>
</footer>`,
    js: `// No JS needed for footer`
  },
  {
    name: "Gradient Button",
  html: `
  <button class="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 transition-all duration-300 shadow-lg">
    Click Me
  </button>
  `,
  js: `// No JavaScript needed for this button
  `
  },
  {
    name: "Advanced Footer",
  html: `
  <footer class="bg-gray-900 text-gray-300 py-10 px-6 sm:px-12">
    <div class="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      <!-- Logo & About -->
      <div>
        <h2 class="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">xUI</h2>
        <p class="mt-2 text-sm text-gray-400">A modern UI library built with Tailwind CSS & JavaScript. Speed up your development with beautifully crafted components.</p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Navigation</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="hover:text-white">Home</a></li>
          <li><a href="#" class="hover:text-white">How to Use</a></li>
          <li><a href="#" class="hover:text-white">Components</a></li>
          <li><a href="#" class="hover:text-white">Blog</a></li>
        </ul>
      </div>

      <!-- Useful Links -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Resources</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="hover:text-white">Documentation</a></li>
          <li><a href="#" class="hover:text-white">GitHub</a></li>
          <li><a href="#" class="hover:text-white">Support</a></li>
          <li><a href="#" class="hover:text-white">Community</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Contact</h3>
        <p class="text-sm text-gray-400">Email: <a href="mailto:support@xui.com" class="hover:text-white">support@xui.com</a></p>
        <div class="mt-3 flex space-x-3">
          <a href="#" class="hover:text-white">Twitter</a>
          <a href="#" class="hover:text-white">Discord</a>
          <a href="#" class="hover:text-white">YouTube</a>
        </div>
      </div>
    </div>

    <div class="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
      © 2025 xUI. All rights reserved.
    </div>
  </footer>
  `,
  js: `// No JavaScript needed for this footer`
  },
  {
    name: "Cool Hero Section",
  html: `
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 px-6 sm:px-12">
    <div class="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-800/20 pointer-events-none"></div>
    
    <div class="relative max-w-4xl mx-auto text-center">
      <h1 class="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Build UI Faster with xUI
      </h1>
      <p class="mt-6 text-lg sm:text-xl text-gray-300">
        A Tailwind-based UI kit with ready-to-use, responsive components to accelerate your development workflow.
      </p>
      <div class="mt-8 flex justify-center gap-4 flex-wrap">
        <button class="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded shadow transition">
          Get Started
        </button>
        <button class="px-6 py-3 border border-white hover:bg-white hover:text-black text-white font-semibold rounded transition">
          Browse Components
        </button>
      </div>
    </div>
  </section>
  `,
  js: `// No JavaScript needed for this hero section`
  },
  {
    name: "Animated Glowing Button",
  html: `
  <button class="relative px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg overflow-hidden group shadow-lg">
    <span class="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></span>
    <span class="relative z-10">Click Me</span>
  </button>
  `,
  js: `// No JS needed for this glowing button`
  },
  {
   name: "Responsive Navbar",
  html: `
  <header class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">xUI</h1>
      <button id="nav-toggle" class="md:hidden text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav id="nav-menu" class="hidden md:flex space-x-6 text-sm font-medium md:items-center">
        <a href="#" class="hover:text-cyan-400">Home</a>
        <a href="#" class="hover:text-cyan-400">Components</a>
        <a href="#" class="hover:text-cyan-400">Docs</a>
        <a href="#" class="hover:text-cyan-400">Contact</a>
      </nav>
    </div>
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden px-4 pb-4 hidden flex-col space-y-2">
      <a href="#" class="block text-sm hover:text-cyan-400">Home</a>
      <a href="#" class="block text-sm hover:text-cyan-400">Components</a>
      <a href="#" class="block text-sm hover:text-cyan-400">Docs</a>
      <a href="#" class="block text-sm hover:text-cyan-400">Contact</a>
    </div>
  </header>
  `,
  js: `
  // Delay toggle attachment to ensure DOM is ready
  setTimeout(() => {
    const toggle = document.getElementById("nav-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (toggle && mobileMenu) {
      toggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  }, 0);
  `
  }
];
