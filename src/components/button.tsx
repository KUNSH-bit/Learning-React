import { useState } from "react";

export function Button(){
    const ButtonTitle=()=>{
    const availableMoney=1001;
    // const Comp=() => <h3>Heading</h3> cant use here no error but no output as well
    const text=availableMoney>1000?"More than 1000":"Less than 1000"
    return <h3>{availableMoney} {text} </h3>;
    }
    const Comp=() => <h3>Heading</h3>
    return (
        <button type="button" className="counter" onClick={() => alert("Click Registered")}>
         <center><ButtonTitle /><Comp /></center>
        </button>
    )
}

// export function NewButton (props:string){
//     console.log(props)
//     return <button onClick={()=>console.log("not a bug")}>{props.length}</button>
// }


// better way to write
// export function NewButton ({props}:{props:string}){
//     console.log(props)
//     return <button onClick={()=>console.log("not a bug")}>{props}</button>
// }


// even better
type ButtonProps={
    props:string,
    onClick:()=> void,
    click?:number,
    disabled?: boolean
}

export function NewButton ({props,onClick,disabled}:ButtonProps){
    console.log(props)
    const [counter,SetCounter]=useState<number>(0);
    const disable= disabled? "disabled":(<>{props} <br /> clicks ={counter}</>);

    function handleClick(){
        onClick;
        SetCounter(counter+1)
    }


    
    return <button disabled={disabled} onClick={handleClick}>{disable}</button>
}