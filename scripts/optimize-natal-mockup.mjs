import sharp from 'sharp';
// Rebuild from the original PNG, never from a previously compressed WebP.
const source = process.argv[2];
if (!source) throw new Error('Usage: node scripts/optimize-natal-mockup.mjs <source.png>');
const output = process.argv[3] || 'public/images/natal-chart-hand.webp';
const {data,info} = await sharp(source).trim().ensureAlpha().raw().toBuffer({resolveWithObject:true});
const {width,height}=info;
// Contract only the alpha mask to remove the dark fringe. Keep RGB untouched.
const radius=4;
const horizontal=Buffer.alloc(width*height);
const inset=Buffer.alloc(width*height);
for(let y=0;y<height;y++) for(let x=0;x<width;x++) {
  let a=255;
  for(let d=-radius;d<=radius;d++) a=Math.min(a,data[(y*width+Math.max(0,Math.min(width-1,x+d)))*4+3]);
  horizontal[y*width+x]=a;
}
for(let y=0;y<height;y++) for(let x=0;x<width;x++) {
  let a=255;
  for(let d=-radius;d<=radius;d++) a=Math.min(a,horizontal[Math.max(0,Math.min(height-1,y+d))*width+x]);
  inset[y*width+x]=a;
}
for(let y=0;y<height;y++) for(let x=0;x<width;x++) {
  let total=0;
  for(let dy=-1;dy<=1;dy++) for(let dx=-1;dx<=1;dx++) total+=inset[Math.max(0,Math.min(height-1,y+dy))*width+Math.max(0,Math.min(width-1,x+dx))];
  data[(y*width+x)*4+3]=Math.round(total/9);
}
console.log(await sharp(data,{raw:{width,height,channels:4}}).resize({width:1080}).webp({quality:86,alphaQuality:100,effort:6}).toFile(output));
