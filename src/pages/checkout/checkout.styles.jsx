import styled from "styled-components";

export const CheckOutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  .test-warning {
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
  }
`;

export const CheckOutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckOutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
