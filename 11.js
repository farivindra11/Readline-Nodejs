// c11.js

const readline = require('readline');
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
// change use JSON.parse (string to objek)
// console.log(data);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tebakan: '
});

let lanjut = 0;     // next index

console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban yang benar ya!\n');

console.log(`pertanyaan: ${data[lanjut].definition}`);

rl.prompt();

rl.on('line', (line) => {

// line to .tolowerCase
    if (line == data[lanjut].term) {
        console.log('Selamat anda benar!\n');
        lanjut++
        if (lanjut == data.length) {
            rl.close()
        }
        console.log(`pertanyaan: ${data[lanjut].definition}`);
    } else {
        console.log('wkwkwkwk, Anda kurang beruntung\n');
    }


    // console.log(lanjut);
    rl.prompt();
}).on('close', () => {
    console.log('Hore Anda Menang!');
    process.exit(0);
});

