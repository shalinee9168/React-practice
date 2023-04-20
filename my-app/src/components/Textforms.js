import React, { useState } from 'react'



export default function Textforms(props) {
  const handleUpClick = (event) => {
    console.log("upper click")
    let newText = text.toUpperCase();
    setText(newText)
     
  }
  const handleLoClick = (event) => {
    // console.log("upper click")
    let newText = text.toLowerCase();
    setText(newText)

  }
  const handleClearClick = (event) => {
    // console.log("upper click")
    let newText = "";
    setText(newText)

  }
  const handleCopyClick = (event) => {
    var text = document.getElementById("my-box")
    text.select();
    navigator.clipboard.writeText(text.value);
    

  }
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
    
  }
  const [text, setText] = useState('enter the text here2');
  // test = "next text";  wrong way chnge the state
  // setText = "next text"  coorect way change state
  return (
<>
      <div className='container 'style={ {color: props.mode === 'dark'?'white': 'black' }}>

      <h1>{props.heading}</h1>
      <div className="mb-3">
         {/* <label for="myBox" class="form-label">example textarea</label>  */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }} id="my-box" row="8"></textarea>

      </div>
        <button type="button" class="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button type="button" class="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button type="button" class="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button type="button" class="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>

    </div>
      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} minute read</p>
        <h2>preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
