import React,{useEffect,useState} from 'react'
import "./App.css"
import axios from 'axios'

function App() {
  const[data,setData]=useState('')



  const getData= async()=>{
    const res=  await axios.get("/api")
setData(res.data)
    }
    useEffect(() => {
      getData()
    }, [])
    
 

  return (
    <div className="text">
      <h3>{data}</h3>

    </div>
  );
}

export default App;
