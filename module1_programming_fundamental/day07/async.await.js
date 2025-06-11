// > ASYNC AWAIT
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

async function ExecutePromise() {
    try {
        // const response = await DeleteNumber()
        // console.log(response)
        await DeleteNumber()
        await DeleteNumber()
        await DeleteNumber()
        await DeleteNumber()
        await DeleteNumber()
        await DeleteNumber()
    } catch (error) {
        console.log(error)
    }
}

ExecutePromise()
// fungsinya seakan akan synchronous