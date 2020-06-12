import React from "react";

import { CustomButtonContainer } from "./custom-buttom.styles";

// property isGoogleSignIn if it pass to props it is "true" then render "google-sign-in"

// Add inverted button
const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

export default CustomButton;
