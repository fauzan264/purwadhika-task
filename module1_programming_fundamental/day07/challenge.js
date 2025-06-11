// Challenge.
/**
 * Lakukan pemanggilan ke API berikut dengan menggunakan function promise yaitu fetch:
 * https://jsonplaceholder.typicode.com/users
 * 
 * Tampilkan hasil resolve datanya di console
 * - pakai 2 cara promise dan async await
 */
const url = "https://jsonplaceholder.typicode.com/users"
async function getData() {
    try {
        const res = await fetch(url)
        // console.log(res.json())
        const data = res.json()
        console.log(data)
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const json = await res.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}

// getData()

const getDataWithPromise = () => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .data()
        // if (data.length > 0) {
        //     resolve(data)
        // } else {
        //     reject("Data failed")
        // }
    })
}
// besok kemungkinan akan ada kuis, persiapan exam pertama
// pelajari kuisnya
getDataWithPromise()
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json()
    })
    .then((data) => {
        // const json = res.json()
        console.log(data)
    })
    .catch((error) => console.log(error))