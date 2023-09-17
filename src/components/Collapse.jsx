
import { useState } from "react";//Importation du Hook useState depuis React. Permet d’utiliser un état local dans une fonction composant.
import chevronDown from "../assets/chevron_down.png";
import chevronUp from "../assets/chevron_up.png";
import "../styles/Collapse.css";

export default function Collapse({ title, texte }) {
  const [isOpen, setIsOpen] = useState(false);// je definis le state de isOpen (et false par défaut)
  
  return isOpen ? (
    <div className="collapse">
      <div className="collapse_head" onClick={() => setIsOpen(false)}>
        <span className="collapse_title">{title}</span>
        <img
          src={chevronUp}
          alt="chevron collapse"
          className="collapse_img">          
        </img>        
      </div>      
      <p className="collapse_texte" >
        {texte}
      </p>            
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse_head" onClick={() => setIsOpen(true)}>
        <span className="collapse_title">{title}</span>
        <img
          src={chevronDown}
          alt="chevron collapse"
          className="collapse_img"
        ></img>
      </div>
    </div>
  );
}

