import {build} from 'esbuild';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const appDir=path.join(root,'app');
const workDir=path.join(root,'work');
const outputDir=path.join(root,'outputs');
fs.mkdirSync(workDir,{recursive:true});
fs.mkdirSync(outputDir,{recursive:true});

const localModules={
  name:'local-assessment-modules',
  setup(context){
    context.onResolve({filter:/^\.\.?\//},args=>{
      for(const extension of ['', '.ts', '.tsx', '.js', '.mjs', '.cjs']){
        const candidate=path.resolve(args.resolveDir,args.path+extension);
        if(fs.existsSync(candidate)&&fs.statSync(candidate).isFile())return {path:candidate};
      }
      return null;
    });
  },
};

await build({
  absWorkingDir:root,
  stdin:{
    contents:fs.readFileSync(path.join(appDir,'data.ts'),'utf8'),
    resolveDir:appDir,
    sourcefile:'app/data.ts',
    loader:'ts',
  },
  bundle:true,
  platform:'node',
  format:'cjs',
  outfile:path.join(workDir,'engine-v2.cjs'),
  packages:'external',
  plugins:[localModules],
  tsconfigRaw:{compilerOptions:{}},
});

const result=spawnSync(process.execPath,[path.join(root,'tests','assessment.test.cjs')],{
  cwd:root,
  stdio:'inherit',
});
process.exit(result.status??1);
