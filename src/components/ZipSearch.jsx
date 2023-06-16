import React, {useState,useEffect} from "react";
import axios from "axios";


const ZipSearch = ()=>{
    const[zipCode,setzipCode] = useState('');
    const[cityData,setcityData]=useState([]);

   
        const handleSubmit=async(event)=>{
            event.preventDefault();
            try {
                const response = await axios.get(`https://zip-api.eu/api/v1/info/US-${zipCode}`);
                setcityData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        
    

    return(
        <div className="zipSearch">
            <form onSubmit={handleSubmit}>
                <label>
                    Please Enter Zip Code:
                    <input type="text" value={zipCode} onChange={(e)=>setzipCode(e.target.value)}/>

                </label>
                <input type="submit" value="submit"/>
            </form>
            <h1>City Data:</h1>
            {cityData.cities.map((city)=>{
                return <p>{city.name}</p>;
            })}
        </div>

    );

};

export default ZipSearch;