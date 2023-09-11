import { useState } from "react";

const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
  const { name, flags,population,area,cca3} = country;
  const[visited,setVisited]=useState(false)
  const handleVisited=()=>{
    setVisited(!visited)
  }
  
  return (
    <div className={`${visited? 'bg-amber-400': 'bg-slate-300'}`}>
      <div className="border rounded-lg space-y-2 justify-center items-center py-5 px-5">
        <h1 className=" text-center font-bold text-sm">{name?.common}</h1>
        <div className="w-64 h-48">
          <img className="w-64 h-48" src={flags.png} alt="" />
        </div>
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p>Code: {cca3}</p>
        <button onClick={()=>handleVisitedFlag(country)}>VisitedFlag</button>
        <button className="btn btn-sm" onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
        <button onClick={handleVisited} className="btn btn-sm bg-green-200">{visited?"Visited":"Going"}</button>
        <p>{visited ? 'I have visited this Country':"I want to Visit"}</p>
      </div>
    </div>
  );
};

export default Country;
