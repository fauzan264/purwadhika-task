// > PROMISE
// akan memunculkan value berupa objek
// Parameter
// 1. Resolve: Ketika berhasil meng-eksekusi proses async
// 2. Reject: Ketika gagal meng-eksekusi proses async
const numbers = [1, 2, 3, 4, 5]

function DeleteNumber() {
    return new Promise((resolve, reject) => {
        // akan menjalankan fungsi asynchronous
        // ketika numbers.length di atas 0, maka dia response success atau resolve
        if (numbers.length > 0) {
            setTimeout(() => {
                numbers.pop()
                resolve('Delete Success')
            }, 5000)

        // di reject ketika numbers.length 0
        } else {
            reject('Delete Failed')
        }
    });
}

function showNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numbers)
        }, 3000);
    })
}

// untuk menangkap dengan .then atau .catch atau bisa menampilkan keduanya
DeleteNumber()
    .then((res) => {  return DeleteNumber() })
    .then((res) => { return DeleteNumber() } ) // promise chaining, ketika mau delete lebih dari 1, akan jadi sulit dibaca
    .then((res) => { return showNumber() })
    .then((res) => { console.log(res) })
    .catch((error) => { console.log(error) })

// promise dengan handling error .then .catch
// kekurangan, ketika mendelete sebanyak 3 kali