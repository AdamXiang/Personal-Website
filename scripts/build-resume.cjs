// Renders scripts/resume.html to public/resume/Ching-Hsiang_Chang_Resume.pdf.
// Edit resume.html, then run: npm run resume
// Needs Playwright once: npm i -D playwright && npx playwright install chromium
const { chromium } = require('playwright');
const path = require('node:path');

const out = path.join(__dirname, '..', 'public', 'resume', 'Ching-Hsiang_Chang_Resume.pdf');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'resume.html'));
  await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log('Wrote', out);
})();
