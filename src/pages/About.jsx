import Banner from "../components/Banner";
import banner_about from "../assets/banner_about.png";
import Collapse from "../components/Collapse";
import "../styles/Collapse.css";
import CollapseData from "../datas/collapses.json";

export default function About() {
  return (
    <div>
      <Banner picture={banner_about} alt={"Photo de montage"} />
      <div className="collapse_content">
        {CollapseData.map((value) => (
          <Collapse key={value.id} title={value.title} texte={value.texte} />
        ))}
      </div>
    </div>
  );
}
