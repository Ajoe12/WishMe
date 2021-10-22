import React from 'react'
import './index.js'


function App(){
	const currH = new Date().getHours(); 
var g = "Good Morning"
var content = "It's a brand new morning!"
var content1 = "The day is a blank canvas yet to be painted with the colors of life."
// const links 

const c = {
  color:"green"}

if(currH>=12&&currH<18){
       g="Good Afternoon"
       c.color = '#d5b60a'
       content="“Hope you have an afternoon as lovely as you are.”"
       content1=""
}
else if(currH>=18&&currH<20){
       g="Good Evening"
       c.color = "brown"
       content="Evening are life's way of saying"
       content1="that you are closer to your Dreams"

}
else if(currH>=20&&currH<24){
       g="Good Night"
       c.color = "black"
       content="Sleep well and Dream Big"
       content1="for tomorrow is the start os something great.."

}

return (

	<div>
  <h1 style={{textAlign: 'center'}}>#STAY MOTIVATED</h1>
  <div className="wish ba">
   
   
   <h1 style={{color:'orange', textTransfrom:'capitalize', textAlign:'center'}}>{content}<br/>{content1}<br/> <span style={c}>{g}</span> </h1> 
  
   
  </div>

  <img src="" alt=""/>
  <h4 style={{color:'white',textAlign:'center',marginTop:'200px'}}>MadeBy:Ajoe <br/>#Made in India</h4>
  </div> 

	)



}

export default App;
