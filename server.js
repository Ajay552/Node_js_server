const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
//  console.log("request made");
// console.log(req.url,req.method);

// set responce header content type
res.setHeader("Content-Type", "text/html");

// res.write("<p>Hello, Developers<p>"); // write the content we need to send the browser
// res.write("<p>I love node js<p>"); // write the content we need to send the browser

let path = "./views/";
switch(req.url){
    case "/" :
        path += "index.html";
        res.statusCode = 200;
        break;
    case "/about":
        path = path + "about.html";
        res.statusCode = 200;
        break;
    case "/about-us":  // redirecting to about when typed about-me
        res.statusCode = 301;
        res.setHeader("Location", "/about");
        res.end();
        break;
    default:
        path += "404.html";
        res.statusCode = 404;
        break;
}

// send a html file when requested
fs.readFile(path, (err, data) => {
    if(err){
        console.log(err);
        res.end();
    } else {
        // res.write(data); // if we are sending multiple thing use this
        res.end(data);
    }
});

// res.end(); // ending the responce

}); // method to create server

// localhost is loop back address (127.0.0.1)
// port number are like doors into computer common for webdev is 3000
server.listen(3000,"localhost", () => {  
    // 3000 is port number and bu default 2nd arg is localhost but can be mentioned explecitly also
    console.log("listening for request on port 3000");
});