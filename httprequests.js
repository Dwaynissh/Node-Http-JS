const http =  require("http")

const port = 2020;

const server = http.createServer((req, res) => {
    if (req.url === "/"){
            res.writehead(200, {"content-type" : "text/html"});
            res.write(`<html> <body> <p> This is My Homepage</p> </body> </html>`);
            res.end()
    }   else if (req.url === "/about"){
            res.writehead(200, {"content-type": "text/html"});
            res.write(`<html><body><p>This is My about Page</p></body></html>`);
            res.end()
    }   else if (req.url === "/contact"){
            res.writehead(200, {"content-type": "text/html"});
            res.write(`<html><body><p>This is My contact page</p></body></html>`);
            res(end)
    }   else res.end("Invalid Request")
})