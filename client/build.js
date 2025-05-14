const { execSync } = require('child_process');
const path = require('path');

// Set environment variables
process.env.CI = 'false';
process.env.GENERATE_SOURCEMAP = 'false';

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Run build
  console.log('Building client...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 