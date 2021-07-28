const express = require('express')
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	calc = 0
	for (i=0;i<100000;i++) {
		calc += Math.random() * Math.random(); 
	}
	console.log(calc);
	res.send(os.hostname()+": "+calc.toFixed(10));
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});