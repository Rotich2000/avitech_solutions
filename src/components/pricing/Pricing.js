import React from "react";
import "./pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <Link to="sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>2,000</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>5 Mbps</li>
                  </ul>
                  <button className="pricing__container-features_btn">
                    Choose plan
                  </button>
                </div>
              </Link>

              <Link to="sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Bronze</h3>
                  <h4>3,000</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>10 MBPS</li>
                  </ul>
                  <button className="pricing__container-features_btn">
                    Choose plan
                  </button>
                </div>
              </Link>

              <Link to="sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Silver</h3>
                  <h4>4,000</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>15 MBPS</li>
                  </ul>
                  <button className="pricing__container-features_btn">
                    Choose plan
                  </button>
                </div>
              </Link>
              <Link to="sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Gold</h3>
                  <h4>5,500</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>20 MBPS</li>
                  </ul>
                  <button className="pricing__container-features_btn">
                    Choose plan
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Pricing;
