import "../styles/Banner.css";

export default function Banner({ picture, title, alt }) {
  return (
    <div className="banner">
      <img src={picture} alt={alt} className="banner_image" />
      <p className="banner_text">{title}</p>
    </div>
  );
}


