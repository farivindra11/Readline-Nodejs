// procces.argv[2]
// procces.exit[1] keluar tidak baik

// c12.js

const readline = require('readline');
const fs = require('fs')

if (!process.argv[2]) {
    console.log('Tolong sertakan nama file sebagai inputan soalnya');      //jika tidak disertai nama file 'data.json' [2]=generate output.
    process.exit(1);
}

let data = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban: '
});

let lanjut = 0;     // next index
let salah = 0;      //menghitung kesalahan

console.log("Selamat datang di permainan tebak-tebakan,kamu akan diberikan pertanyaan dari file ini 'data.json'.\nUntuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan di tanyakan lagi.\n");

console.log(`pertanyaan: ${data[lanjut].definition}`);

rl.prompt();

rl.on('line', (line) => {
    if (line == 'skip') {
        data.push(data[lanjut])
        lanjut++
        console.log(`pertanyaan: ${data[lanjut].definition}`);

    } else {
        if (line == data[lanjut].term) {
            console.log('Anda Beruntung!\n');
            lanjut++
            salah = 0;  //reset

            if (lanjut == data.length) {
                rl.close()
            }
            console.log(`pertanyaan: ${data[lanjut].definition}`);
        } else {
            // console.log('wkwkwkwk, Anda kurang beruntung\n');
            salah++
            console.log(`Anda kurang beruntung! anda telah salah ${salah} kali, silahkan coba lagi.`);

        }

    }
    // console.log(lanjut);
    rl.prompt();
}).on('close', () => {
    console.log('Hore Anda Menang!');
    process.exit(0);
});

