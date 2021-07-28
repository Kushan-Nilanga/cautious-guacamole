const http = require('http');
setInterval(loadtest, 50); //time is in ms

function loadtest(){
    http.get('http://sit-314-lb-1503578701.ap-southeast-2.elb.amazonaws.com', (res) => { 
        res.on('data', function (chunk) {
            console.log('' + chunk); 
        });
    }); 
}