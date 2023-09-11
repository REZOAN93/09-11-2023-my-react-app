import { useEffect } from 'react';
import { useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries,setCountries]=useState([])
    const [visitedCountries,setVisitedCountries]=useState([])
    const [visitedFlag,setVisitedFlag]=useState([])
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const handleVisitedCountries=(country)=>{
        // console.log("Visited Country")
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag=(flagList)=>{
        console.log("Hi")
        console.log(flagList)
        const newFlags=[...visitedFlag,flagList]
        setVisitedFlag(newFlags)

    }

    return (
        <div className=' container mx-auto'>
            <div>
                <p>Visited Countries:{visitedCountries.length}</p>
                <ul>
                    {
                       visitedCountries.map((list=><li>{list.name.common}</li>)) 
                    }
                </ul>
                <div>
                    {
                       visitedFlag.map(na=><img className="w-24 h-24" src={na.flags.png} alt="" />) 
                    }
                </div>
            </div>
            <h1 className=' text-lg font-bold'>Countries:{countries.length}</h1>
            <div className=' grid grid-cols-4 gap-5 my-5'>
            {
                countries.map((country)=><Country key={country.cca3} country={country} handleVisitedFlag={handleVisitedFlag} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;