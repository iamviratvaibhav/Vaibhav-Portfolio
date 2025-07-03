import React from 'react'

function Task() {
    const inputStyle={
        display:"block",
        width:"100%",
        merginBottom:"15px",
        padding:"16px",

    }

    return (
        <div>
            <div style={{ display: "flex", width: "100%", height: "100px" }}>
                {/* left side*/}
                <div style={{ flex:1}}></div>
                <img src=''
                    alt='example' >
                    style={{width :"100%", height:"100%", objectFit:"cover"}}
                </img>
                    
                <div></div>
                <h2>Registration</h2>
                <form action="">
                    <input type='text' style={inputStyle}></input>
                    <input type='text' style={inputStyle}></input>
                    <input type='text' style={inputStyle}></input>
                    {/* <button type='submit' style={buttonStyle}>Submit</button> */}
                    
                </form>
            </div>
        </div>
    )
}

export default Task
