import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Suspense, lazy } from 'react'
const Dashboard = lazy(()=> import('./components/dashboard'))
const Landing = lazy(()=> import('./components/Landing'))



function App() {
  return (
    <div>
    <BrowserRouter>
      <AppBar></AppBar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function AppBar(){
  const navigate = useNavigate(); 
  return (
    <div>
    <div>
        <button onClick={()=>{navigate("/");}}>Landing</button>
        <button onClick={()=>{navigate("/dashboard");}}>Dashboard</button>
    </div>
    </div>
  )
}

export default App
