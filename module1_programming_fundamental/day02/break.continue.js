// > BREAK & CONTINUE
// Break: untuk menghentikan langsung
// 1-5: Bilangan genap yang pertama
for (let i = 1; i <= 5; i++) {
    if(i % 2 === 0) {
        console.log(i)
        break;
    }
}

// Continue: Untuk men-skip 1x looping
// menampilkan angka 1-5 kecuali angka 3
for(let i=0; i<=5; i++) {
    if(i === 3) continue;
    console.log(i)
}

// perhitungan waktu lebih efisien contoh break;