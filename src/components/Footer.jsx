import logo from "../assets/logo_footer.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo" className="footer_logo" />
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

