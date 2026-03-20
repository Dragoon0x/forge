#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, '..', 'source', 'skills');
let passed = 0, failed = 0;

function assert(ok, msg) {
  if (ok) { passed++; process.stdout.write('.'); }
  else { failed++; console.error(`\n  FAIL: ${msg}`); }
}

const skills = fs.readdirSync(SOURCE).filter(f =>
  fs.statSync(path.join(SOURCE, f)).isDirectory()
);

console.log(`Testing ${skills.length} skills...\n`);

// Every directory has SKILL.md
for (const s of skills) {
  assert(fs.existsSync(path.join(SOURCE, s, 'SKILL.md')), `${s}/SKILL.md exists`);
}

// Valid frontmatter
for (const s of skills) {
  const f = path.join(SOURCE, s, 'SKILL.md');
  if (!fs.existsSync(f)) continue;
  const c = fs.readFileSync(f, 'utf-8');
  assert(c.startsWith('---'), `${s}: starts with frontmatter`);
  assert(c.includes('name:'), `${s}: has name`);
  assert(c.includes('description:'), `${s}: has description`);
  const nm = c.match(/name:\s*(.+)/);
  if (nm) assert(nm[1].trim().length > 0, `${s}: name not empty`);
  const desc = c.match(/description:\s*(.+)/);
  if (desc) assert(desc[1].trim().length >= 20, `${s}: description >= 20 chars`);
}

// Core skill is not user-invokable
const core = fs.readFileSync(path.join(SOURCE, 'forge-design', 'SKILL.md'), 'utf-8');
assert(core.includes('user-invokable: false'), 'forge-design not user-invokable');

// Command skills are user-invokable
const cmds = skills.filter(s => s !== 'forge-design');
for (const s of cmds) {
  const c = fs.readFileSync(path.join(SOURCE, s, 'SKILL.md'), 'utf-8');
  assert(c.includes('user-invokable: true'), `${s}: user-invokable`);
}

// Substantial content
for (const s of skills) {
  const c = fs.readFileSync(path.join(SOURCE, s, 'SKILL.md'), 'utf-8');
  const parts = c.split('---');
  if (parts.length >= 3) {
    const body = parts.slice(2).join('---').trim();
    assert(body.length > 50, `${s}: has content (${body.length} chars)`);
  }
}

// Expected count
assert(skills.length === 44, `Expected 44 skills, found ${skills.length}`);

// Key commands exist
const expected = [
  'forge-init','forge-update','forge-audit','forge-score','forge-fix',
  'forge-palette','forge-semantic','forge-dark','forge-contrast',
  'forge-type','forge-pair','forge-type-audit','forge-type-fix',
  'forge-spacing','forge-grid','forge-spacing-audit','forge-spacing-fix',
  'forge-shadow','forge-radius','forge-elevation',
  'forge-export-css','forge-export-tw','forge-export-scss','forge-export-json','forge-export-figma',
  'forge-a11y','forge-focus','forge-touch','forge-motion',
  'forge-polish','forge-bolder','forge-quieter','forge-normalize','forge-harden'
];
for (const e of expected) assert(skills.includes(e), `Expected '${e}' exists`);

// Landing page
const lp = path.join(__dirname, '..', 'docs', 'index.html');
assert(fs.existsSync(lp), 'Landing page exists');
if (fs.existsSync(lp)) {
  const html = fs.readFileSync(lp, 'utf-8');
  assert(html.includes('FORGE'), 'Landing page contains FORGE');
  assert(html.includes('aria-label'), 'Landing page has a11y attributes');
  assert(html.includes('prefers-reduced-motion'), 'Landing page respects reduced motion');
  assert(html.includes('skip-link'), 'Landing page has skip link');
  assert(html.includes('generatePalette'), 'Landing page has palette generator');
  assert(html.includes('exportCSS'), 'Landing page has CSS export');
  assert(html.includes('exportTailwind'), 'Landing page has Tailwind export');
  assert(html.includes('exportJSON'), 'Landing page has JSON export');
  assert(html.includes('prefers-color-scheme'), 'Landing page has dark mode');
}

// Build script
assert(fs.existsSync(path.join(__dirname, '..', 'build.js')), 'Build script exists');

// Package.json
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8'));
assert(pkg.name === 'useforge', 'Package name correct');
assert(pkg.version === '1.0.0', 'Version 1.0.0');
assert(pkg.license === 'Apache-2.0', 'License Apache-2.0');

console.log(`\n\n${passed} passed, ${failed} failed (${passed + failed} total)`);
process.exit(failed > 0 ? 1 : 0);
