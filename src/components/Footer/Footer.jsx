import React from "react";
import "../../styles/_footer.scss";
import logo from "../../assets/images/logo.png";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <div className="footer">
      <div className="py-4">
        <img src={logo} alt="" height={100} />
      </div>
      <Divider />
      <span>&copy; 2008 cercasguiman.com</span>
    </div>
  );
}
