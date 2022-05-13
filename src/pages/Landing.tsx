import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";
// import { theme, GlobalStyle } from "../Variables.styled";
import {
  PopupContainer,
  PopupTopContainer,
  PopupMidContainer,
  PopupBotContainer,
  XButton,
  PopupTopTextContainer,
  PopupBotTextContainer,
  FormContainer,
  EmailAddress,
  SignUpButton,
} from "./Landing.styled";

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
        <PopupContainer>
          <XButton onClick={() => setIsOpen(false)}>X</XButton>
          <PopupTopContainer>
            <PopupTopTextContainer>
              <h1>Get Your Style On</h1>
            </PopupTopTextContainer>
            <PopupMidContainer>
              <h2>&</h2>
            </PopupMidContainer>

            <PopupBotTextContainer>
              <div id="and-container"></div>
              <h3>20</h3>
              <div id="percent-container">
                <h4>%</h4>
                <p>OFF</p>
              </div>
            </PopupBotTextContainer>
          </PopupTopContainer>
          <PopupBotContainer>
            <FormContainer
              onSubmit={handleSubmit}
              action="/"
              method="get"
              id="form"
            >
              <div id="user-input-container">
                <label>
                  <EmailAddress
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </label>
              </div>
              <div id="signupBtn-container">
                <SignUpButton type="submit" value="Sign Up" id="submitBtn" />
              </div>
            </FormContainer>
          </PopupBotContainer>
        </PopupContainer>
      </Modal>
    </>
  );
};
