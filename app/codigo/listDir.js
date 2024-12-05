const fs = require("fs");
const path = require("path");

/**
 * Recursively reads the directory structure and returns a formatted string.
 * @param {string} dirPath - The path to the directory.
 * @param {string} prefix - The prefix for the current level (used for formatting).
 * @param {string} separator - The character(s) used to separate levels.
 * @param {string[]} exclude - List of folder or file names to exclude.
 * @returns {string} - The formatted directory structure.
 */
function listDir(dirPath, prefix = "", separator = "|", exclude = []) {
  let output = "";

  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  items.forEach((item, index) => {
    if (exclude.includes(item.name)) return; // Skip excluded items

    const isLastItem = index === items.length - 1;
    const branch = isLastItem ? "└─" : "├─";

    output += `${prefix}${branch}${separator} ${item.name}\n`;

    if (item.isDirectory()) {
      const newPrefix = prefix + (isLastItem ? "   " : "|  ");
      output += listDir(
        path.join(dirPath, item.name),
        newPrefix,
        separator,
        exclude
      );
    }
  });

  return output;
}

// Main script
function main() {
  const rawPath = process.argv[2] || ".";
  const projectPath = path.normalize(rawPath); // Normalize the path
  const excludeArg = process.argv[3] || ""; // Names to exclude (comma-separated)
  const excludeList = excludeArg.split(",").map((name) => name.trim()); // Convert to array
  const separator = ">"; // Default separator

  if (!fs.existsSync(projectPath)) {
    console.error(`Error: The path "${projectPath}" does not exist.`);
    process.exit(1);
  }

  console.log(`\nListing structure of: ${projectPath}`);
  console.log(`Excluding: ${excludeList.join(", ") || "none"}`);
  const rootFolderName = path.basename(projectPath);
  console.log("\n", rootFolderName);

  console.log(listDir(projectPath, "", separator, excludeList));
}

main();
