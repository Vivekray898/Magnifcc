import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, "project-map.md");

const IGNORE = new Set([
  "node_modules",
  ".git",
  ".astro",
  "dist",
  ".vercel",
  ".vscode",
  ".idea",
  ".DS_Store",
]);

let totalFiles = 0;
let totalFolders = 0;

function generateTree(dir, prefix = "") {
  const items = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(item => !IGNORE.has(item.name))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

  let tree = "";

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const connector = isLast ? "└── " : "├── ";

    tree += `${prefix}${connector}${item.name}\n`;

    if (item.isDirectory()) {
      totalFolders++;
      tree += generateTree(
        path.join(dir, item.name),
        prefix + (isLast ? "    " : "│   ")
      );
    } else {
      totalFiles++;
    }
  });

  return tree;
}

function getFolderSize(dir) {
  let size = 0;

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (IGNORE.has(item.name)) continue;

    const full = path.join(dir, item.name);

    if (item.isDirectory()) {
      size += getFolderSize(full);
    } else {
      size += fs.statSync(full).size;
    }
  }

  return size;
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0;

  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }

  return `${bytes.toFixed(2)} ${units[i]}`;
}

const size = getFolderSize(ROOT);

const markdown = `# Astro Project Map

Generated: ${new Date().toLocaleString()}

## Statistics

- **Folders:** ${totalFolders}
- **Files:** ${totalFiles}
- **Size:** ${formatBytes(size)}

---

## Folder Structure

\`\`\`
${path.basename(ROOT)}
${generateTree(ROOT)}
\`\`\`
`;

fs.writeFileSync(OUTPUT, markdown);

console.log(`✅ Created ${OUTPUT}`);
console.log(`📁 ${totalFolders} folders`);
console.log(`📄 ${totalFiles} files`);
console.log(`💾 ${formatBytes(size)}`);