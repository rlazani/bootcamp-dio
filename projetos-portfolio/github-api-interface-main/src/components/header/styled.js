import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 150px 500px 0px 500px;
  background-color: #f5faff;

  input {
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: 8px 20px;
    margin: 0 16px;
    border-radius: 3px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
