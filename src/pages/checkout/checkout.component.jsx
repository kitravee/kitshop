import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckOutPageContainer,
  CheckOutHeader,
  CheckOutHeaderBlock,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckOutPageContainer>
    <CheckOutHeader>
      <CheckOutHeaderBlock>
        <span>Product</span>
      </CheckOutHeaderBlock>
      <CheckOutHeaderBlock>
        <span>Description</span>
      </CheckOutHeaderBlock>
      <CheckOutHeaderBlock>
        <span>Quantity</span>
      </CheckOutHeaderBlock>
      <CheckOutHeaderBlock>
        <span>Price</span>
      </CheckOutHeaderBlock>
      <CheckOutHeaderBlock>
        <span>Remove</span>
      </CheckOutHeaderBlock>
    </CheckOutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </CheckOutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

// connect actually passes dispatch into our components as a prop if we not apply a second argument to connect
export default connect(mapStateToProps)(CheckoutPage);
