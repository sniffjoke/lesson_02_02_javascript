// promises .than .catch .finally

// callbackFetch(`https://books-store.com/authors/${data.id}`, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         callbackFetch(`https://books-store.com/authors/authorId/${data.books}`, (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 callbackFetch(`https://books-store.com/authors/authorId/books/${data.booksId}`, (err, data) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         callbackFetch(`https://books-store.com/authors/${data.id}`, (err, data) =>
//                     }
//                 })
//             }
//         })
//     }
// })

// promise --> pending, fulfilled, rejected

// const promise = new Promise((resolve, reject) => {})

// function Promise(executor) {
//     const resolve = (data) => {
//         return {
//             state: 'fulfilled',
//             result: data
//         }
//     }
//     const rejected = (err) => {
//         return {
//             state: 'rejected',
//             error: err
//         }
//     }
//     executor(resolve, rejected)
// }

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         const data = 'hello'
//         const err = 'something wrong'
//         res(data)
//         // rej(err)
//     }, 2000)
// })
//
// console.log(promise)

const fs = require('fs')

function readFileByPromise(url) {
    return new Promise((res, rej) => {
        fs.readFile(url, (err, data) => {
            if (err) {
                rej(err)
            } else {
                res(data)
            }
        })
    })
}

export default readFileByPromise
