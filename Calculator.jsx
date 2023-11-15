import { useState } from "react";
import React from "react";


function Calculator() {
    const [result, setresult] = useState("");
    const [a, seta] = useState(undefined);
    const [b, setb] = useState(undefined);
    function handle(a, b, operation) {
      switch (operation) {
        case "+":
          setresult(a + b);
        case "-":
          setresult(a - b);
        case "*":
          setresult(a * b);
        case "/":
          setresult(a / b);
        case "%":
          setresult(a % b);
          break;
  
        default:
          break;
      }
    }
    return (
      <>
        <form className="bg-yellow-600" onSubmit={(e) => e.preventDefault()}>
          <div className="flex justify-center mb-14 text-3xl">
            <h1>Calculator</h1>
            <br />
          </div>
          <div className=" flex justify-center  ">
            <label>input 1 :</label>
            <input
              className="border-[2px] border-slate-950"
              type="number"
              required
              value={a}
              onChange={(e) => seta(Number(e.target.value))}
            />
            <label>input 2 :</label>
            <input
              className="border-[2px] border-slate-950"
              type="number"
              value={b}
              onChange={(e) => setb(Number(e.target.value))}
            />
          </div>
          <div className="flex justify-center justify-evenly mt-10">
            <button className="bg-green-600 h-8 w-8 rounded-md" onClick={()=>setresult(a+b)}>
              +
            </button>
            <button className="bg-green-600 h-8 w-8 rounded-md" onClick={()=>setresult(a-b)}>
              -
            </button>
            <button className="bg-green-600 h-8 w-8 rounded-md" onClick={()=>setresult(a*b)}>
              *
            </button>
            <button className="bg-green-600 h-8 w-8 rounded-md" onClick={()=>setresult(a%b)}>
              %
            </button>
            <button className="bg-green-600 h-8 w-8 rounded-md" onClick={()=>setresult(a/b)}>
              /
            </button>
          </div>
          <div className="bg-green-600 mt-10  ">
            <span>result : {result}</span>
          </div>
        </form>
      </>
    );
  }
  export default Calculator;