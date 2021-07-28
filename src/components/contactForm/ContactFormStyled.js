import styled from "styled-components";

export const ContactFormStyled = styled.div`
  padding: 25px 15px;
  margin: 10px;
  border: 1px solid;
  border-radius: 5px;
  width: 400px;
  .inputName {
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
  }
  .btnAdd {
    display: block;
    margin-top: 30px;
    padding: 3px 5px;
    border-radius: 6px;
    cursor: pointer;
    background-color: transparent;
    &:hover {
      background-color: cornflowerblue;
    }
  }
`;
