const fs = require('fs');
const path = require('path');
const olPath = '/home/ahsan/Documents/fetch/al-Quran';
const filePath = '/home/ahsan/al-quran';

const files = fs.readdirSync(olPath).filter((file) => file.endsWith('.mp3'));
// const files =fs.readdirSync(filePath).filter((file)=>file.endsWith('.mp3'));
let cound = 0;
const al = ['a', 'b', 'c', 'd', 'e', 'f'];

files.forEach((file) => {
  const oldPath = path.join(olPath, file);
  const newpath = path.join(filePath, al[cound] + '.mp3');

  fs.renameSync(
    oldPath,
    newpath,
    (err) => {
      console.log({ massege: err });
    },
    console.log(`success first : ${cound}`)
  );

  ++cound;

  if (cound === al.length - 1) {
    return brack;
  } else {
    console.log(`success send file : ${cound}`);
  }
});
