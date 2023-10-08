import React from "react";
import './index.css';
import { createContext } from "react";
import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Main } from "./components/Main";
import { Map } from "./components/Map";
import { Icon } from "leaflet";
import { QueryClientProvider , QueryClient } from "react-query";
export const AppContext = createContext();
function App() {
const client=new QueryClient();
const [ip,setIp]=React.useState("192.212.174.101");
const [geocode,setGeocode]=React.useState([50.93404006958008,4.327270030975342]);
const [result , setResult]=React.useState({location:"Brooklyn,NY",
timezone:"UTC-5:00",
isp:"SpaceX Starlink"
});

  return (   
    <QueryClientProvider client={client}>
    <div className="first_div Rubik">   
<AppContext.Provider value={{result,setResult,ip,setIp , setGeocode}}>
<div className="h-[280px]" ><Title/>
<Form/>
<br></br>
<br></br>
<Main/> 
  </div>  
<Map geocode={geocode}/>
</AppContext.Provider> </div>   
    </QueryClientProvider>  

    
  );
}

export default App;
