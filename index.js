const http = require('http');
const fs = require('fs');
const logRequest = (url) => {
    const dateTime = new Date().toISOString(); // Current date and time
    const logEntry = `${dateTime} - ${url}\n`; // Format log entry
    fs.appendFile('log.txt', logEntry, (err) => {
        if (err) {
            console.error('Error logging request:', err);
        }
    });
};
// 
const server=http.createServer((req,res)=>{
    logRequest(req.url)
    console.log(`${req.method} Request At ${req.url}`);
        if(req.url==="/"){
            res.write("Welcome to the BarterX")
            res.end()
        }
        else if(req.url==="/products"){
            res.write("Here are the products up for Sale in BarterX")
            res.end()
        }
        else if(req.url==="/login"){
            res.write("Login to the BarterX")
            res.end()
        }
        else if(req.url==="/signup"){
            res.write("Sign up to the BarterX")
            res.end()
        }
        else if(req.url==="/profile"){
            res.write("Trader Profile")
            res.end()
        }
        else if(req.url==="/cart"){
            res.write("Your Shopping Cart is here")
            res.end()
        }
        else if(req.url==="/checkout"){
            res.write("Lets' start shipping")
            res.end()
        }else if(req.url==="/orders"){
            res.write("Your Orders are here")
            res.end()
        }
        else if(req.url==="/categories"){
            res.write("Browse Categories")
            res.end()
        }
        else if(req.url==="/chat"){
            res.write("Your Chat with fellow Traders")
            res.end()
        }
        else if(req.url==="/contact"){
            res.write("Contact Us at")
            res.end()
        }
        else if(req.url==="/about"){
            res.write("The modern approach to trading our commodities")
            res.end()
        }
        else{
            res.writeHead(404)
            res.write("Page not found")
            res.end()
        }
  })

  server.listen(8050,()=>{
    console.log("Server is running on port 8050")
  })


