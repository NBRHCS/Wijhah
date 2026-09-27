import {build} from 'esbuild';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
fs.mkdirSync('work',{recursive:true});fs.mkdirSync('outputs',{recursive:true});
await build({entryPoints:['app/data.ts'],bundle:true,platform:'node',format:'cjs',outfile:'work/engine-v2.cjs'});
const result=spawnSync(process.execPath,['tests/assessment.test.cjs'],{stdio:'inherit'});process.exit(result.status??1);
