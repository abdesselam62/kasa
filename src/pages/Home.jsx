import Banner from "../components/Banner";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lodgings from "../datas/logements.json";
import banner from "../assets/banner_home.png";
import "../styles/Card.css";

export default function Home() {
  const [lodgings] = useState(Lodgings);
  return (
    <div>
      <Banner
        title={"Chez vous, partout et ailleurs"}
        picture={banner}
        alt={"Photo d'une côte au bord de mer"}
      />
      <div className="card_content">
        {lodgings.map((lodging) => (
          <Link to={`/lodging/${lodging.id}`} key={lodging.id}>
            <Card title={lodging.title} cover={lodging.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}


