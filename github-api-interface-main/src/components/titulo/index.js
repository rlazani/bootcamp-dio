import React from "react";
import * as S from "./styled";
import logo from './logo.jpg';

const Titulo = () => {
  return (
    <S.Wrapper>
      <h1>Buscador do Github</h1>
      <img src = {logo} alt = "logo"/>
    </S.Wrapper>
  );
};

export default Titulo;
