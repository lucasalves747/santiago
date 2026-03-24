const fs = require('fs');

let html = fs.readFileSync('website_completo.html', 'utf8');

// Replace visibility hidden classes from React IntersectionObserver initial states
const before = html.length;

html = html.replace(/opacity-0/g, 'opacity-100');
html = html.replace(/translate-y-8/g, 'translate-y-0');
html = html.replace(/-translate-x-12/g, 'translate-x-0');
html = html.replace(/translate-x-12/g, 'translate-x-0');
html = html.replace(/translate-y-12/g, 'translate-y-0');
html = html.replace(/translate-y-16/g, 'translate-y-0');
html = html.replace(/scale-95/g, 'scale-100');

fs.writeFileSync('website_completo.html', html);
console.log('Visibility fixed. Replacements made if any.');
