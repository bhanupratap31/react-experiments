import { useMemo, useState } from "react"


function App() {
  const [count, setCount] = useState(0);  
  const [inputValue, setInputValue] = useState(0); 

  let cnt = useMemo(()=>{
    let finalcnt=0; 
    for(let i=1; i<=inputValue; i++){
    finalcnt+=i;
  }
    return finalcnt;
  }, [inputValue]);
  

  return <div>
    <input placeholder="Sum from 1 to n" onChange={function(e){
      setInputValue(e.target.value);
    }}></input><br/>
    <h1>Sum is {cnt}</h1>
    <button onClick={function(){
      setCount(count+1); 
    }}>Counter{count}</button>
  </div>
}

export default App
