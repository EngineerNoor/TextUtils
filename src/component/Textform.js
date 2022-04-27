import React,{useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("Enter text here")
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  const handleLoClick=()=>{
    setText(text.toLowerCase());
    console.log("lowercase...")
  }
  const handleCopyClick=()=>{
        // navigator.clipboard.writeText(text);
        let text = document.getElementById("textId");
        let newText = text.value;
        navigator.clipboard.writeText(newText);
        console.log("copy........")
  }
  const handleClearClick=()=>{
        setText("");
        console.log("Clear")
  }
  // let myStyle={
    // if(props.mode=="dark"){
      // color:"white",
      // backgroundColor: "#061d2c"
    // }
  // }
  // #061d2c
  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <h2>Word - Counter</h2>
          <textarea className="form-control" value={text} id="textId" onChange={handleOnChange} rows="8"
          style={{backgroundColor:props.mode==="dark"?"#061d2c":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-2' onClick={handleupClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2"onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2"onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2"onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-4">
          <h2>Preview</h2>
          <p>{text.split(" ").filter((e)=>{return e}).length} words and {text.length} character! </p>
          <p>{text.length>0?0.008*text.split(" ").length:""} Minutes read</p>
          <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  )
}
