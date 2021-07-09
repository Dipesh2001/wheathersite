const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
// const hbsr = require('hbs');
  //for static website path
  const staticpath = path.join('__dirname',"../public"); 

const viewspath = path.join(__dirname,"../templates");
const partialpath = path.join(__dirname,"../templates/partials");

 app.set('view engine','hbs');
 app.set('views',viewspath);
//  app.use(express.static(staticpath));
  
 // app.use('engine','hbs');
 app.use('/bootstrap',express.static(path.join(__dirname,"../public")));
//  console.log(partialpath)
hbs.registerPartials(partialpath);
 // console.log(path.join(__dirname,"../public"))
app.get('/',(req,res)=>{
	res.render('index');
	// res.send();
})

app.get('/wheather',(req,res)=>{
	res.render('wheather');
	// request("http://api.weatherapi.com/v1/current.json?key=7b5c5d8f0437490a898120824210307&q={myqury}")
	// .on('data',(chunk)=>{
	// 	const objdata = JSON.parse(chunk);
	// 	const arrdata = [objdata];
		
	// })
})

app.get('/about',(req,res)=>{
	res.render('about');
})

// app.get('*',(req,res)=>{
// 	res.render('err');
// })

app.listen(3000,()=>{
	console.log("listenng to port");
})