import { useEffect,useState } from "react";
import Form from "../components/Form";
function Search() {
    const [nasalist, setNasalist] = useState([]);
const fetchNasalist =async () =>{
  try{
    const nasalistData =await getAllNasalist();
    console.log(nasalistData)
    setNasalist(nasalistData);
  }catch(error){

  }
  }

//useEffect(() => {
 //fetchNasalist();

const getAllNasalist = async (searchterm)=>{
  try{
    const response = await fetch (`https://images-api.nasa.gov/search?q=${searchterm})`);
    const data = await response.json();
    console.log(data);
    return data;
  }
  catch (error){
   console.log('Error fetching nasalist:', error);
   throw error;
  
  }
}
  return (
    <div className='Search'>
      <Form getAllNasalist={getAllNasalist}/>
     <div>This is the search page</div>
     </div>
  )

}
export default Search