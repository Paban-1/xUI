const components = [
  {
    name: "Button",
    html: `
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
  Click Me
</button>`,
    js: `// No JavaScript needed for basic button`
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
  }
];