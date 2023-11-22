import { useState, useEffect } from 'react'
import React from "react";
import { useParams } from "react-router-dom";
import Results from './results';
function Form(props) {
    // add state to hold the data of the form
    const [formData, setFormData] = useState({
        searchterm: "",
    })

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        // prevent page from refreshing on form submissin
        event.preventDefault();

        // pass the search term to Nasasearch prop (the method that will search)
        props.getAllNasalist(formData.searchterm);
    }
    //const getSearch = async (keyword) => {
    //     const url = `https://images-api.nasa.gov/search?q=${keyword}`;
    //     try {
    //       const response = await fetch(url);
    //       const data = await response.json();
    //       setNasalist(data);
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   };
    
      
     

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value="submit" />

            </form>
            <p>Search for a list Nasa of Images</p>
        </div>
    )
}
export default Form