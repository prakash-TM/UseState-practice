// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// export default Counter





import { useState,UseEffect } from "react";

const Counter=()=>{
    const [count, setCount]=useState({name:"PRAKASH TM",age:"17",collage:"KPRIET",hometown:"TIRUPPUR"});
    const [countNum,setCountNum]=useState(0)
    
    const _handleInputChange=()=>{
        setCount((copy)=>{
            if((count.hometown==="TIRUPPUR")||(count.name==="PRAKASH TM")||(count.collage==="KPRIET")){
            return{...copy,hometown:"CHENNAI",name:"PRAKASH MUTHUSAMY",collage:"CESIT", age:"21"}}
            else{
                return{...copy,hometown:"TIRUPPUR",name:"PRAKASH TM",collage:"KPRIET"}
            }

        })
        setCountNum(countNum+1)
    }
 


    return(
        <>
        <h2>Number of changes : {countNum}</h2>
        <h3>My name is {count.name} and my age is {count.age} and my collage is {count.collage} and my native is {count.hometown}</h3>
        <button onClick={_handleInputChange}>counter changed</button>
     
        </>
    )   
}

export default Counter