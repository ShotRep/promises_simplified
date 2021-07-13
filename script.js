/* PROMISES are here to save us from callback hell.
   A PROMISE is an Object that gives us back the result of an async operation.
   on success or on failure by using the RESOLVE REJECT functions.

   Create a new promise object like this:  new Promise((resolve, reject)=>{})
 */

/* PROMISE BUILDING BLOCKS */

//simple example of creating a Promise
// const willGetHappiness1 = new Promise((resolve,reject)=>{
//   reject()
// }
// )
// /* in the console we will see that the promise has been rejected.*/

// // example creating a Promise with random resolve and reject
// const willGetHappiness2 = new Promise((resolve,reject)=>{
//   const randomNum = Math.random()
//   if (randomNum < 0.5) {
//     resolve()
//   } else {
//     reject()
//   }
// })
// //every Promise has a .then method that runs only if the Promise is resolved.
// willGetHappiness2.then(()=>{
//   console.log('I found happiness!')
// })
// //every Promise has a .catch method that runs only if the Promise is rejected.
// willGetHappiness2.catch(()=>{
//   console.log('No happiness to be found.')
// })
//.catch can just be chained on at the end of .then like }).catch(()=>{})

/* Add time parameters, the real reason we use Promises for async operation */
// Now add it to a function (getHappiness) to call
// The only thing we dont have is "WHY" this function
// resolved or more importantly was rejected.

// const getHappiness = ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       const randomNum = Math.random()
//       if (randomNum < 0.5) {
//         resolve()
//       } else {
//         reject()
//       }
//     },3000)
//   })
// }
// getHappiness()
// .then(()=>{
//   console.log('I found happiness!')
// }).catch(()=>{
//   console.log('No happiness to be found.')
// })

//Lets introduce the 'WHY'

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataPages = {
        "/users": [
          {id: 1, username: "Nept"},
          {id: 2, username: "Exxo"},
          {id: 3, username: "Shot"},
        ],
        "/about": "This is the about page.",
      }
      const data = dataPages[url]
      if (data) {
        resolve({status: 200, data})
      } else {
        reject({status: 404})
      }
    }, 3000)
  })
}

fakeRequest("/users")
  .then((res) => {
    console.log("Resolved Request Status Code:", res.status)
    console.log("Resolved Request Data:", res.data)
    console.log("Request Succesful")
  })
  .catch((res) => {
    console.log(res.status)
    console.log("Rejected Request")
  })

fakeRequest("/players")
  .then((res) => {
    console.log("Resolved Request Status Code:", res.status)
    console.log("Resolved Request Data:", res.data)
    console.log("Request Succesful")
  })
  .catch((res) => {
    console.log(res.status)
    console.log("Rejected Request")
  })
