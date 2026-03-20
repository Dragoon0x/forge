#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, 'source', 'skills');
const PROVIDERS = [
  { dir: '.claude/skills' },
  { dir: '.cursor/skills' },
  { dir: '.agents/skills' },
  { dir: '.gemini/skills' },
  { dir: '.codex/prompts' }
];

const skills = fs.readdirSync(SOURCE).filter(f =>
  fs.statSync(path.join(SOURCE, f)).isDirectory()
);

console.log(`Building ${skills.length} skills for ${PROVIDERS.length} providers...\n`);
let total = 0;

for (const provider of PROVIDERS) {
  for (const skill of skills) {
    const src = path.join(SOURCE, skill, 'SKILL.md');
    if (!fs.existsSync(src)) continue;
    const dest = path.join(__dirname, provider.dir, skill);
    fs.mkdirSync(dest, { recursive: true });
    fs.copyFileSync(src, path.join(dest, 'SKILL.md'));
    total++;
  }
  console.log(`  ${provider.dir}: ${skills.length} skills`);
}

console.log(`\nTotal: ${total} files across ${PROVIDERS.length} providers`);
console.log('Build complete.');
