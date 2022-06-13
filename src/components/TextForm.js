import React,{useState} from 'react'


export default function TextForm(props) {
    //all the functions should be written outside of return 
    const handleUpclick = () =>{
       
       // let result = text.toUpperCase
       let upperResult = text.toUpperCase();
        setText(upperResult);
       props.showAlert("Converted to Upper-Case","success")
    }

    const handleLowclick = () =>{
        let lowResult = text.toLowerCase();
        setText(lowResult);
        props.showAlert("Converted to Lower-Case","success")
    }


    // Whenever we use onChange event listener we can pass an event to the function
    const handleOnChange =  (event) =>{
        console.log("onchange")
        setText(event.target.value);
    }
    
    
    const handleClearText = ()=>{

        setText("");
        if(text === ""){
        props.showAlert("Nothing to Clear!","info")
        }
        else{
            props.showAlert("Text Cleared!","success")
        }
    }

    const handleCopy = ()=>{
        let text = document.getElementById("textArea");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success")
        
    }

    const extraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces had been removed!","success")
    }
    
    const [text, setText] = useState("");
    // to update the text variable we have to use the setText function  
    
    
    return(
        <>
        <div className="container my-3 " style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mt-3 mb-4">
            <textarea className="form-control" id="textArea" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor : props.mode==='dark'?'#383838':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleUpclick}>Convert To UpperCase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleLowclick}>Convert To LowerCase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={extraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes will be required to read you content.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your thet above to preview here."}</p>
        </div>

        </>
    )
}


