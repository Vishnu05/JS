

/** Asynchronos call to update or post something in database 
 * promise and xml ajax also other options to make but fetch is more effiecent and most of the browser supports it
*/

fetch('http://www.fb.com')
    .then( (res, req) => {
        console.log('success')
        console.log(res.status)
        console.log(req)
    })
    .catch((err, hi)=> {
        console.log(err)
        console.log('failed')
        console.log(hi)
    })


/** Request and Response */

const request = new Request('https://www.google.com')

console.log(request.url)
console.log(request.body)
console.log(request.headers)
console.log(request.method + request.destination + request.json())
console.log(request.json())

console.log(Request)
console.log(Response)