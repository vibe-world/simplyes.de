(function () {
  // Inject pb-safe utility (used in nav, undefined on home/services pages)
  var style = document.createElement('style');
  style.textContent = '.pb-safe { padding-bottom: env(safe-area-inset-bottom); }';
  document.head.appendChild(style);

  // Active page detection — handles /index.html, /, /services.html, /contact.html
  var path = window.location.pathname;
  var active = path.endsWith('services.html') ? 'services'
             : path.endsWith('contact.html')  ? 'contact'
             : 'home';

  var TABS = [
    { id: 'home',     href: 'index.html',    label: 'Home',     icon: 'home' },
    { id: 'services', href: 'services.html', label: 'Services', icon: 'settings_suggest' },
    { id: 'contact',  href: 'contact.html',  label: 'Contact',  icon: 'chat_bubble' }
  ];

  function renderHeader() {
    return '<header class="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-sm dark:shadow-none transition-all duration-300">' +
      '<div class="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">' +
        '<button id="menu-btn" aria-label="Menu" class="text-lime-600 dark:text-lime-400 hover:opacity-80 transition-opacity active:scale-95 duration-200">' +
          '<span class="material-symbols-outlined" style="font-variation-settings: \'FILL\' 0;">menu</span>' +
        '</button>' +
        '<a href="index.html" class="text-2xl font-black text-lime-600 dark:text-lime-400 tracking-tighter font-[\'Manrope\'] flex-grow text-center">SIMPLYES</a>' +
        '<div class="w-6"></div>' + // Spacer to keep title centered
      '</div>' +
    '</header>' +
    '<div id="mobile-menu" class="fixed inset-0 bg-surface z-[100] transform -translate-y-full transition-transform duration-300 flex flex-col pt-20 px-6 pb-6">' +
      '<button id="close-menu-btn" class="absolute top-6 right-6 text-on-surface hover:opacity-80 transition-opacity">' +
        '<span class="material-symbols-outlined text-3xl">close</span>' +
      '</button>' +
      '<div class="flex flex-col gap-6 text-2xl font-headline font-bold mt-12">' +
        '<a href="index.html" class="text-on-surface hover:text-primary transition-colors">Home</a>' +
        '<a href="services.html" class="text-on-surface hover:text-primary transition-colors">Services</a>' +
        '<a href="contact.html" class="text-on-surface hover:text-primary transition-colors">Contact</a>' +
      '</div>' +
    '</div>';
  }

  function renderBottomNav() {
    var tabs = TABS.map(function (tab) {
      var isActive = tab.id === active;
      var cls = isActive
        ? 'flex flex-col items-center justify-center bg-lime-100 dark:bg-lime-900/30 text-lime-800 dark:text-lime-200 rounded-full px-6 py-1.5 transition-all'
        : 'flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all';
      var fill = isActive ? 1 : 0;
      return '<a class="' + cls + '" href="' + tab.href + '">' +
        '<span class="material-symbols-outlined mb-1" style="font-variation-settings: \'FILL\' ' + fill + ';">' + tab.icon + '</span>' +
        '<span class="font-[\'Manrope\'] text-[10px] font-medium uppercase tracking-widest">' + tab.label + '</span>' +
      '</a>';
    }).join('');

    return '<nav class="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-t border-zinc-100 dark:border-zinc-800 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] fixed bottom-0 w-full z-50 md:hidden flex justify-around items-center px-4 py-3 pb-safe">' +
      tabs +
    '</nav>';
  }

  var headerEl = document.getElementById('site-header');
  var navEl    = document.getElementById('site-nav');
  if (headerEl) headerEl.innerHTML = renderHeader();
  if (navEl)    navEl.innerHTML    = renderBottomNav();

  // Phase 1: Interactive Audit & Activation
  document.addEventListener('DOMContentLoaded', function() {
    // Header Buttons
    var menuBtn = document.getElementById('menu-btn');
    var closeMenuBtn = document.getElementById('close-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mobileMenu.classList.remove('-translate-y-full');
      });
    }
    
    if (closeMenuBtn && mobileMenu) {
      closeMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mobileMenu.classList.add('-translate-y-full');
      });
    }

    // Contact Form Intercept
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var btn = contactForm.querySelector('button[type="submit"]');
        var originalText = btn.textContent;
        btn.textContent = 'Message Sent!';
        btn.classList.replace('from-[#3e6a00]', 'from-green-600');
        btn.classList.replace('to-[#8bc34a]', 'to-green-400');
        console.log('Form submitted successfully via frontend bypass.');
        setTimeout(function() {
          btn.textContent = originalText;
          btn.classList.replace('from-green-600', 'from-[#3e6a00]');
          btn.classList.replace('to-green-400', 'to-[#8bc34a]');
          contactForm.reset();
        }, 3000);
      });
    }

    // Global Presence Buttons
    var presenceBtns = document.querySelectorAll('.group.cursor-pointer');
    presenceBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var location = btn.querySelector('.font-headline').textContent;
        console.log('Routing to ' + location + ' office details.');
        alert('Navigating to ' + location + ' office info.');
      });
    });
  });
})();
