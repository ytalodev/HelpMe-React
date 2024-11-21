import React from "react";

// Component criado para os botões do google e facebook
const SocialLoginButtons = () => {
    return (
        <div className="social-login">
            <p>Acesse com:</p>
            <div className="social-buttons">
                <button className="google-btn">
                    <i className="fab fa-google"></i> Acesse com Google
                </button>
                <button className="facebook-btn">
                    <i className="fab fa-facebook"></i> Acesse com Facebook
                </button>
            </div>
        </div>
    );
};

export default SocialLoginButtons;
