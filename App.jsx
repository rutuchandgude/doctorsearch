import {useState} from "react";
import './App.css';
import Table from "./Table";
import {Users} from "./users";
function App() {
  const [query,setQuery] = useState("");
  const keys=["first_name","last_name","speciality","rate"]

 const search=(data)=>{
   return data.filter((item)=>
   keys.some((key)=> item[key].toLowerCase().includes(query))
   );
 };
  return (
    <div className="App">
    <input type="text" placeholder="Search.." className="search" onChange={(e)=>setQuery(e.target.value)}/>
    <Table data={search(Users)}/>
    </div>
  );
} 


export default App;
