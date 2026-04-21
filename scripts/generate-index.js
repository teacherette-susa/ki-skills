// scripts/generate-index.js
// Liest alle SKILL.md-Dateien aus dem skills/-Ordner
// und erzeugt docs/skills-index.json für die Suchoberfläche.

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { globSync } = require('glob');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');
const OUTPUT_FILE = path.join(__dirname, '..', 'docs', 'skills-index.json');
const DOWNLOADS_DIR = path.join(__dirname, '..', 'docs', 'downloads');

// Downloads-Verzeichnis sicherstellen
if (!fs.existsSync(DOWNLOADS_DIR)) {
  fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
}

// Alle SKILL.md-Dateien finden
const skillFiles = globSync('*/SKILL.md', { cwd: SKILLS_DIR });

const skills = skillFiles.map((relPath) => {
  const fullPath = path.join(SKILLS_DIR, relPath);
  const folderName = relPath.split('/')[0];
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(raw);

  // Knowledge-Dateien auflisten
  const knowledgeDir = path.join(SKILLS_DIR, folderName, 'knowledge');
  let knowledgeFiles = [];
  if (fs.existsSync(knowledgeDir)) {
    knowledgeFiles = fs.readdirSync(knowledgeDir)
      .filter(f => !f.startsWith('.'))
      .map(f => ({
        name: f,
        size: fs.statSync(path.join(knowledgeDir, f)).size,
      }));
  }

  // Suchtext aufbauen (für clientseitige Volltextsuche)
  const searchText = [
    frontmatter.title || '',
    frontmatter.description || '',
    frontmatter.category || '',
    frontmatter.level || '',
    (frontmatter.tags || []).join(' '),
    content.replace(/[#*`]/g, ' '),
  ].join(' ').toLowerCase();

  return {
    id: folderName,
    name: frontmatter.name || folderName,
    title: frontmatter.title || folderName,
    description: frontmatter.description || '',
    category: frontmatter.category || 'Sonstiges',
    level: frontmatter.level || '',
    tags: frontmatter.tags || [],
    author: frontmatter.author || '',
    school: frontmatter.school || '',
    license: frontmatter.license || 'CC BY 4.0',
    version: frontmatter.version || '1.0',
    created: frontmatter.created || '',
    knowledgeFiles,
    hasKnowledge: knowledgeFiles.length > 0,
    downloadUrl: `downloads/${folderName}.zip`,
    searchText,
  };
});

// Nach Erstellungsdatum sortieren (neueste zuerst)
skills.sort((a, b) => {
  if (a.created && b.created) return b.created.localeCompare(a.created);
  return a.title.localeCompare(b.title);
});

const index = {
  generated: new Date().toISOString(),
  count: skills.length,
  skills,
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2), 'utf8');
console.log(`✅ Index generiert: ${skills.length} Skills → ${OUTPUT_FILE}`);
