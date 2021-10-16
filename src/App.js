import logo from "./logo.svg";
import "./App.css";
import { Input } from "./Input";
import { useState } from "react";
import { Grid } from "./Grid";

export const App =()=> {

  const [search, setsearch] = useState("");

const openPokeball = () => {
  setsearch(25)
  console.log("ok")
}

  return (
    <div className="App">
      <div className="container" onClick={openPokeball}>
    <img

          
          className="logo"
          src="https://images.wikidexcdn.net/mwuploads/esssbwiki/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png"
        />
  { search===""&& 
           <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png"
            className="pokeball"
          />}

         { search !==""
   &&
<>
        <Input setsearch={setsearch} /><Grid search={search} /></>}
      
      </div>
    </div>
  );
}

export default App;
