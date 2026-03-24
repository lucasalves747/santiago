const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Load raw DOM
const rawHtml = fs.readFileSync('website_completo_raw.html', 'utf-8');
const $ = cheerio.load(rawHtml);

// Remove Vite scripts and elements
$('script[src*="__manus__"]').remove();
$('script[type="module"]').remove();
$('link[rel="modulepreload"]').remove();
$('#radius-vite-plugin-radix').remove(); // any vite overlays

// Inline the CSS and remove external links
$('link[rel="stylesheet"]').each((i, el) => {
  const href = $(el).attr('href');
  if (href && href.includes('assets/') && href.endsWith('.css')) {
    const filename = href.split('/').pop();
    const cssPath = path.join(__dirname, 'dist', 'public', 'assets', filename);
    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      $(el).replaceWith(`<style>\n/* Inlined from ${filename} */\n${cssContent}\n</style>`);
    } else {
      console.warn("CSS NOT FOUND:", cssPath);
    }
  }
});

// Load quiz.html to extract the logic
const quizHtmlFile = fs.readFileSync('quiz.html', 'utf-8');
const quiz$ = cheerio.load(quizHtmlFile);

// Extract the quiz <script> at the bottom
let quizScriptContent = '';
quiz$('script').each((i, el) => {
  const src = quiz$(el).attr('src');
  if (!src) {
    // inline script
    const content = quiz$(el).html();
    if (content.includes('const PILARES')) {
      quizScriptContent = content;
    }
  }
});

// Inject html-to-image and jspdf CDNs
$('head').append(`
  <script src="https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/dist/html-to-image.min.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js" crossorigin="anonymous"></script>
`);

// Replace the #quiz section contents
const newQuizSection = quiz$('#quiz').html();
if ($('#quiz').length) {
  $('#quiz').html(newQuizSection || '<div id="app-root"></div>');
} else {
  console.warn("Section #quiz not found in DOM");
}

// Ensure the #quiz section has correct classes (same as quiz.html)
$('#quiz').attr('class', quiz$('#quiz').attr('class'));
$('#quiz').attr('style', quiz$('#quiz').attr('style'));

// Add interactive Vanilla JS block
const vanillaJsBlock = `
<script>
// --- Quiz Logic ---
${quizScriptContent}

// --- Vanilla JS Interactivity (Navbar & Accordions) ---
document.addEventListener('DOMContentLoaded', () => {

  // Navbar Scroll Effect
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.classList.remove('bg-transparent', 'py-5');
        nav.classList.add('bg-[oklch(0.08_0.005_285/0.97)]', 'backdrop-blur-md', 'border-b', 'border-[oklch(0.72_0.12_75/0.2)]', 'py-3');
      } else {
        nav.classList.add('bg-transparent', 'py-5');
        nav.classList.remove('bg-[oklch(0.08_0.005_285/0.97)]', 'backdrop-blur-md', 'border-b', 'border-[oklch(0.72_0.12_75/0.2)]', 'py-3');
      }
    });
  }

  // Mobile Menu Logic
  const mobileBtn = nav ? nav.querySelector('button.lg\\\\:hidden') : null;
  // We need to inject the mobile menu if it wasn't rendered.
  if (mobileBtn) {
    const mobileMenuRaw = \`
      <div id="vanilla-mobile-menu" class="hidden lg:hidden bg-[oklch(0.08_0.005_285/0.98)] backdrop-blur-md border-t border-[oklch(0.72_0.12_75/0.2)] py-6 w-full absolute top-full left-0">
        <div class="container flex flex-col gap-4 px-6 mx-auto">
          <button onclick="document.querySelector('#hero')?.scrollIntoView({behavior:'smooth'})" class="text-left text-[oklch(0.75_0.008_285)] hover:text-gold transition-colors duration-300 text-sm tracking-[0.15em] uppercase font-semibold py-2 border-b border-[oklch(0.22_0.008_285)]">Início</button>
          <button onclick="document.querySelector('#sobre')?.scrollIntoView({behavior:'smooth'})" class="text-left text-[oklch(0.75_0.008_285)] hover:text-gold transition-colors duration-300 text-sm tracking-[0.15em] uppercase font-semibold py-2 border-b border-[oklch(0.22_0.008_285)]">Sobre</button>
          <button onclick="document.querySelector('#pilares')?.scrollIntoView({behavior:'smooth'})" class="text-left text-[oklch(0.75_0.008_285)] hover:text-gold transition-colors duration-300 text-sm tracking-[0.15em] uppercase font-semibold py-2 border-b border-[oklch(0.22_0.008_285)]">Os 5 Pilares</button>
          <button onclick="document.querySelector('#livros')?.scrollIntoView({behavior:'smooth'})" class="text-left text-[oklch(0.75_0.008_285)] hover:text-gold transition-colors duration-300 text-sm tracking-[0.15em] uppercase font-semibold py-2 border-b border-[oklch(0.22_0.008_285)]">Livros</button>
          <button onclick="document.querySelector('#premiacoes')?.scrollIntoView({behavior:'smooth'})" class="text-left text-[oklch(0.75_0.008_285)] hover:text-gold transition-colors duration-300 text-sm tracking-[0.15em] uppercase font-semibold py-2 border-b border-[oklch(0.22_0.008_285)]">Premiações</button>
          <button onclick="document.querySelector('#quiz')?.scrollIntoView({behavior:'smooth'})" class="text-left text-[oklch(0.75_0.008_285)] hover:text-gold transition-colors duration-300 text-sm tracking-[0.15em] uppercase font-semibold py-2 border-b border-[oklch(0.22_0.008_285)]">Diagnóstico</button>
          <button onclick="document.querySelector('#mentoria')?.scrollIntoView({behavior:'smooth'})" class="text-left text-[oklch(0.75_0.008_285)] hover:text-gold transition-colors duration-300 text-sm tracking-[0.15em] uppercase font-semibold py-2 border-b border-[oklch(0.22_0.008_285)]">Mentoria</button>
          <button onclick="document.querySelector('#contato')?.scrollIntoView({behavior:'smooth'})" class="btn-gold mt-2 text-center">Contato</button>
        </div>
      </div>
    \`;
    if (!document.getElementById('vanilla-mobile-menu')) {
      nav.insertAdjacentHTML('beforeend', mobileMenuRaw);
    }
    const mobileMenu = document.getElementById('vanilla-mobile-menu');
    
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Smooth Scroll mapping
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const tgt = document.querySelector(targetId);
        if (tgt) tgt.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Accordion Logic (Radix / Tailwind)
  document.querySelectorAll('button[aria-controls]').forEach(btn => {
    btn.addEventListener('click', function() {
      const contentId = this.getAttribute('aria-controls');
      const content = document.getElementById(contentId);
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      this.setAttribute('aria-expanded', !isExpanded);
      
      if (content) {
        if (isExpanded) {
          content.setAttribute('data-state', 'closed');
          content.setAttribute('hidden', '');
        } else {
          content.setAttribute('data-state', 'open');
          content.removeAttribute('hidden');
        }
      }
    });
  });
});
</script>
`;

$('body').append(vanillaJsBlock);

// Write to final file
fs.writeFileSync('website_completo.html', $.html());
console.log('Successfully created website_completo.html');
