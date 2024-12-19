import React, {useState, useEffect, useRef} from 'react'

function MyComponentRf() {
    
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        inputRef1.current.foucus();
        inputRef1.current.style.backgroundColor = "red";
    }

    function handleClick2(){
        inputRef2.current.foucus();
        inputRef2.current.style.backgroundColor = "red";
    }

    function handleClick3(){
        inputRef3.current.foucus();
        inputRef3.current.style.backgroundColor = "red";
    }



    return(
        <div>
            <button onClick={handleClick1}>
            Click me 1!
            </button>
            <input ref={inputRef1}/>

        <button onClick={handleClick2}>
            Click me 2!
            </button>
            <input ref={inputRef2}/>

        <button onClick={handleClick3}>
            Click me 3!
            </button>
            <input ref={inputRef3}/>
        </div>
    );
}
export default MyComponentRf;