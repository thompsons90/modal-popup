import { Link } from "react-router-dom";
import {
  BackButton,
  ConfirmationContainer,
  ConfirmTopTextContainer,
  ShopButton,
} from "./Confirmation.styled";

export const Confirmation = () => {
  return (
    <div id="confirm-container">
      <BackButton to="/" id="shop-button">
        X
      </BackButton>
      <ConfirmationContainer>
        <ConfirmTopTextContainer>
          <h1>Just Like Old Friends</h1>
        </ConfirmTopTextContainer>

        <div id="confirm-bot-text">
          <p>
            We'll keep you updated on any deals, news, or gossip that comes our
            way!
          </p>
        </div>
      </ConfirmationContainer>
      <ShopButton to="/" id="shop-button">
        Go Shop!
      </ShopButton>
    </div>
  );
};
