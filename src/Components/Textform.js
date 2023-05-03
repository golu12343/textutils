import React,{useState} from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

//import { useState } from 'react'


//console.log(useState('Enter text here2'))

export default function Textform(props) {
  const handleupclick = ()=>{
    console.log("button was clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert('converted to uppercase','success')
  }

  const handleloclick = ()=>{
    console.log("button was clicked")
    let newText = text.toLowerCase();
    setText(newText)
    props.showalert('converted to lowercase','success')
  }

  
  const handlecaptclick = () =>{
    let newText = text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
    props.showalert('converted to capitalizecase','success')
  };
  

  const handleonchange = (event)=>{
    console.log("on change runned")
    setText(event.target.value)
    
  }

  const [text,setText] = useState('')
  

  return (
    <>
    <div className='container'>
      <h1 id='bgh' style={{color:props.mode==='dark'?'white':'black'}}><i>{props.heading}</i></h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleonchange} value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8" cols="100"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupclick}>convert to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleloclick}>convert to lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handlecaptclick}>convert to captilized</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summery</h2>
      <p><b>{text.split(' ').length}</b> words,<b>{text.length}</b> characters</p>
      <p><b>{0.008 * text.split(' ').length}</b> minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textarea to preview it here..."}</p>

    </div>
    </>
  )
  }

