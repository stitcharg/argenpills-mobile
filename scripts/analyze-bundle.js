const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Analyzing bundle size...\n');

try {
	// Run Next.js bundle analyzer
	execSync('bun run build', { stdio: 'inherit' });

} catch (error) {
	console.error('❌ Bundle analysis failed:', error.message);
	process.exit(1);
} 