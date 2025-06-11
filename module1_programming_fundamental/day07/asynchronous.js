// > ASYNCHRONOUS
console.log("First")
setTimeout(() => {
    console.log("Second")
}, 1000) // akan dijalankan terakhir, karena ada delay 1000
console.log("Third")

// fetch => untuk http request, untuk berkomunikasi dengan api
// ajax
// dll