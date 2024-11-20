import React from "react";
import logo from "../assets/img/help-me.png";

// Component criado para logo HelpMe
const Header = () => {
    return (
        <div className="form-image">
            <img src={logo} alt="HelpMe Logo" />
        </div>
    );
};

export default Header;
