import { FormEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Modal } from "../components/Modal";
// // import { theme, GlobalStyle } from "../Variables.styled";
// import {
//   OpenModal,
//   PopupContainer,
//   PopupTopContainer,
//   PopupMidContainer,
//   PopupBotContainer,
//   XButton,
//   PopupTopTextContainer,
//   PopupBotTextContainer,
//   FormContainer,
//   EmailAddress,
//   SignUpButton,
// } from "./Landing.styled";

// type LandingComponent = () => JSX.Element | null;

// export const Landing: LandingComponent = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     navigate("/confirmation");
//   };

//   return (
//     <>
//       <OpenModal onClick={() => setIsOpen(true)}>Open Modal</OpenModal>
//       <Modal isOpen={isOpen}>
//         <PopupContainer>
//           <XButton onClick={() => setIsOpen(false)}>X</XButton>
//           <PopupTopContainer>
//             <PopupTopTextContainer>
//               <h1>Get Your Style On</h1>
//             </PopupTopTextContainer>
//             <PopupMidContainer>
//               <hr />
//               <h2>&</h2>
//               <hr />
//             </PopupMidContainer>
//             <PopupBotTextContainer>
//               <h3>20</h3>
//               <div id="percent-container">
//                 <h4>%</h4>
//                 <p>OFF</p>
//               </div>
//             </PopupBotTextContainer>
//           </PopupTopContainer>
//           <PopupBotContainer>
//             <FormContainer
//               onSubmit={handleSubmit}
//               action="/"
//               method="get"
//               id="form"
//             >
//               <label>
//                 <EmailAddress
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   required
//                 />
//               </label>
//               <SignUpButton type="submit" value="Sign Up" id="submitBtn" />
//             </FormContainer>
//           </PopupBotContainer>
//         </PopupContainer>
//       </Modal>
//     </>
//   );
// };
