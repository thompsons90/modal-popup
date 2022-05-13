import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <div id="confirm-container">
      <Link to="/" id="shop-button">
        X
      </Link>
      <div id="confirm-top-text">
        <h1>Just Like Old Friends</h1>
      </div>
      <div id="confirm-bot-text">
        <p>
          We'll keep you updated on any deals, news, or gossip taht comes our
          way!
        </p>
      </div>
      <Link to="/" id="shop-button">
        Go Shop!
      </Link>
    </div>
  );
};
