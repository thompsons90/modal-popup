import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";

// interface LandingProps {
//   open: boolean;
//   onClose: () => void;
// }
type LandingComponent = () => JSX.Element | null;

export const Landing: LandingComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();

  // if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  return (
    <>
      {/* <Link to="/confirmation" /> */}
      <div
        id="special-offer-container"
        // className={hidden === true ? `overlay ` : `hidden`}
      >
        <button onClick={() => setIsOpen(true)}>Special Offer!</button>
        {/* <FirstPopup open={isOpen} onClose={() => setIsOpen(false)}></FirstPopup> */}
      </div>
      <Modal isOpen={isOpen}>
        <div id="pop-container">
          <div id="popupOne">
            <div id="close-button-container">
              <button onClick={() => setIsOpen(false)} id="x-button">
                X
              </button>
            </div>
            <div id="first-popup-text-container">
              <h1>Get Your Style On</h1>
              <hr />
              <div id="and-container">
                <h2>&</h2>
              </div>
              <h3>20</h3>
              <div id="percent-container">
                <h4>%</h4>
                <p>OFF</p>
              </div>
              <form onSubmit={handleSubmit} action="/" method="get" id="form">
                <div id="user-input-container">
                  <label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      required
                    />
                  </label>
                </div>
                <div id="signupBtn-container">
                  <input type="submit" value="Sign Up" id="submitBtn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
