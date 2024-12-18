---
layout: post
title: You're up and running!
---

# File Concatenation Script for PHP, JS, CSS, and HTML

## This script scans a specified directory for .php, .js, .css, and .html files, concatenates their contents into a single output file, and appends each file's name as a header.

### Implementation
```javascript
Copy code
const fs = require('fs');
const path = require('path');
const globby = require('globby');

// Directory to search for .php, .js, .css, and .html files
const inputDir = './path-to-your-directory'; // Change this to your directory
const outputFile = './concatenated-files.txt'; // Output file path

(async () => {
  try {
    console.log(`Scanning directory: ${inputDir}`);

    // Find all .php, .js, .css, and .html files in the directory
    const files = await globby([
      `${inputDir}/**/*.php`,
      `${inputDir}/**/*.js`,
      `${inputDir}/**/*.css`,
      `${inputDir}/**/*.html`
    ]);

    console.log(`Found ${files.length} files matching the specified extensions.`);
files.forEach(file => console.log(`- ${file}`));

    // Concatenate file contents with file names as headers
    let output = '';
    for (const file of files) {
      const fileName = path.basename(file);
      const content = fs.readFileSync(file, 'utf-8');
      output += `// File: ${fileName}\n\n${content}\n\n`;
    }

    // Write the concatenated contents to the output file
    fs.writeFileSync(outputFile, output, 'utf-8');
    console.log(`Concatenated file created at: ${outputFile}`);
  } catch (error) {
    console.error('Error processing files:', error);
  }
})();
```

## How It Works

# Dependencies:

fs: Handles file operations (read/write).

path: Provides utilities for working with file paths.

globby: Enables flexible pattern matching for file search.

Input Directory:

Update the inputDir variable to the directory containing your files.

Output File:

The concatenated result will be saved as concatenated-files.txt.

File Search:

Uses globby to recursively find files matching the specified extensions.

Output Formatting:

Each file’s content is prefixed with a comment header that includes the file name.

Error Handling:

Logs errors to the console if any issues occur during file processing.

Common errors include:

Permission Denied: Ensure you have read and write permissions for the specified directories.

Directory Not Found: Verify that the inputDir path exists and is correct.

File Encoding Issues: Check that all files use a compatible encoding, such as UTF-8.

Address these errors by reviewing file permissions, paths, or file formats and making the necessary corrections.

Logs errors to the console if any issues occur during file processing.

Usage

Ensure that Node.js is installed on your system. You can download it from nodejs.org.

Replace ./path-to-your-directory with the directory you want to scan.

Save the script to a file, e.g., concatenate-files.js.

Run the script using Node.js:

node concatenate-files.js

The script is efficient due to its use of globby for flexible and fast file matching and its straightforward structure, which requires minimal configuration to work seamlessly for organizing and processing files across multiple types.

