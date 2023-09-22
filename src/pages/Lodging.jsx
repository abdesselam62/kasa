import { useParams, Navigate } from "react-router-dom";
import Slider from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Lodgings from "../datas/logements.json";
import LodgingInfo from "../components/LodgingInfo";
import "../styles/Lodging.css";

function Lodging() {
  const { fichelogement } = useParams();
  const lodgingInfo = Lodgings.find((lodging) => lodging.id === fichelogement);

  if (lodgingInfo === undefined) {
    return <Navigate to="*" />;
  }
 
    return (
    <div>
      <Slider imageSlider={lodgingInfo.pictures} />
      <LodgingInfo description={lodgingInfo} />
        <div className="lodging_collapse">
        <div className="lodging_collapse_element">
          <Collapse title={"Description"} texte={lodgingInfo.description} />
        </div>
        <div className="lodging_collapse_element">
          <Collapse
            title={"Equipements"}
            texte={lodgingInfo.equipments.map((Equipement_txt) => (
              <li className="lodging_equipement" key={Equipement_txt}>
                {Equipement_txt}
              </li>
            ))}
          />
        </div>
      </div>
    </div>
  );
}

export default Lodging;