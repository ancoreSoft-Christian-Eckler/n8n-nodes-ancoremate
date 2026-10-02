// Generated from catalog/ by tools/AncoreMate.CatalogGenerator. Do not edit.
import { cpSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function copyAssets(directory) {
	for (const entry of readdirSync(directory)) {
		const path = join(directory, entry);
		if (statSync(path).isDirectory()) {
			copyAssets(path);
		} else if (entry.endsWith('.svg') || entry.endsWith('.node.json')) {
			cpSync(path, join('dist', path));
		}
	}
}

copyAssets('credentials');
copyAssets('nodes');
