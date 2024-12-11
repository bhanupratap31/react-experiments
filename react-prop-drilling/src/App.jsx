import {useContext} from "react"
import {useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState} from "recoil"
import { CountContext } from "./context";
import { countAtom, evenSelector } from "./store/atoms/count";

function App(){

  return <div>  
    <RecoilRoot>
      <Count></Count>
      </RecoilRoot>
  </div>
}

function Count(){
  return <div>
    <CountRender></CountRender>
    <Buttons></Buttons>

  </div>
}

function CountRender(){
  const count= useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer></EvenCountRenderer>
  </div>
   
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven? "It is even": null}
  </div>
}
function Buttons(){
  const setCount = useSetRecoilState(countAtom); 
  console.log("re-rendering buttons");
  return <div>
    <button onClick={()=>{
      setCount(count => count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count => count-1)
    }}>Decrease</button>
  </div>
}

export default App;