import React from 'react'

var style1={
    height:"400px",
    width:"50%",
    backgroundColor:"orange",
    margin:"auto",
    color:"black",
}

var style2={
    height:"400px",
    width:"50%",
    backgroundColor:"white",
    margin:"auto",
    color:"black",
}
const Card = () => {
  return (
      <>
    <div style={style1}>
        <div style={{display:'flex',justifyContent: 'space-between'}}>
            <h3>28/10/2020</h3>
            <img style={{height:100,width:100}} src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/picons-social-amazon-png-logo-vector-0.png" alt="" />
        </div>
        <button style={{backgroundColor:'black',color:'white',height:40,width:100}}>Case Study</button>
        <h1>Amazon Gift</h1>
        <h1>Pay</h1>
        
        <div style={{display:'flex',justifyContent: 'space-between'}}>
            <h3>Desktop-Mobile</h3>
            <h1>➞</h1>
        </div>
    </div>
    <br/>
    <br/>
    <div style={style2}>
        <div style={{display:'flex',justifyContent: 'space-between'}}>
            <h3>17 Sep 2020</h3>
            <img style={{height:100,width:100}} src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="" />
        </div>
        <button style={{backgroundColor:'black',color:'white',height:40,width:100}}>Case Study</button>
        <h1>Apple Gift</h1>
        <h1>Pay</h1>
        
        <div style={{display:'flex',justifyContent: 'space-between'}}>
            <h3>MacOS-Mobile</h3>
            <h1>➞</h1>
        </div>
    </div>



    </>

    
  )
}

export default Card