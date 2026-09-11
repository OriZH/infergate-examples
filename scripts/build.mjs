import {mkdir,readdir,cp} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const dist=new URL('dist/',root);
await mkdir(dist,{recursive:true});
for(const entry of await readdir(root,{withFileTypes:true})) {
 if(entry.name.startsWith('.')||['dist','node_modules','scripts','package.json','package-lock.json'].includes(entry.name))continue;
 await cp(new URL(entry.name,root),new URL(entry.name,dist),{recursive:true});
}
console.log('InferGate static site ready in dist');
