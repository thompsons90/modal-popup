import { useState } from "react";
// import { Modal } from "../components/Modal";

// import {
//   ConfirmationContainer,
//   ConfirmTopTextContainer,
//   DesignerImg,
//   ConfirmBotTextContainer,
//   ShopButton,
// } from "./Confirmation.styled";
// import { XButton, OpenModal, PopupContainer } from "./Landing.styled";

// type ConfirmationComponent = () => JSX.Element | null;

// export const Confirmation: ConfirmationComponent = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       <OpenModal onClick={() => setIsOpen(true)}>Open Modal</OpenModal>
//       <Modal isOpen={isOpen}>
//         <PopupContainer>
//           <XButton onClick={() => setIsOpen(!isOpen)} id="shop-button">
//             X
//           </XButton>
//           <ConfirmationContainer>
//             <ConfirmTopTextContainer>
//               <h1>
//                 <span>Just </span>
//                 <span>Like </span>
//                 <span>Old </span>
//                 <span>Friends</span>
//               </h1>
//             </ConfirmTopTextContainer>
//             <DesignerImg
//               src={require("./images/confirmImg.png")}
//               alt="design for confirmation page"
//             />
//             <ConfirmBotTextContainer>
//               <p>
//                 We'll keep you updated on any deals, news, or gossip that comes
//                 our way!
//               </p>
//             </ConfirmBotTextContainer>
//             <ShopButton to="/" id="shop-button">
//               Go Shop!
//             </ShopButton>
//           </ConfirmationContainer>
//         </PopupContainer>
//       </Modal>
//     </>
//   );
// };
