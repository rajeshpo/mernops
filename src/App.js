import Create from "./Create";
import Axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

function App() {
  const [data, setData] = useState([]);
  const [search,setSearch]=useState("")
  useEffect(() => {
    Axios.get("https://mernops.herokuapp.com/getUsers").then((res) => setData(res.data));
  }, []);
 
const filteredUsers=data.filter(user=>{
  let searchvalue=user.name+" "+user.age+" "+user.city+" "+user.country;
  return searchvalue.toLowerCase().includes(search.toLowerCase())
})
 
  return (
    <div className="App">
      <Create />
     <form>
     <input placeholder="Search here"  className="form-control" onChange={(e)=>{ 
        setSearch(e.target.value)}}/>
  
     </form>
     {filteredUsers.map((value) => (
       
        <div>
        {console.log(value)}
        <Cards key={value.name}
          name={value.name}
          age={value.age}
          city={value.city}
          country={value.country}
          id={value._id}
        />
        </div>
      ))}
    </div>
  );
}

export default App;
