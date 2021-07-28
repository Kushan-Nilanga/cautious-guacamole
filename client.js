const http = require('http');
setInterval(loadtest, 50); //time is in ms

function loadtest(){
    http.get('http://localhost:3000', (res) => { 
        res.on('data', function (chunk) {
            console.log('' + chunk); 
        });
    }); 
}