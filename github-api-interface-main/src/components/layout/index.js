import React from "react";
import Header from "../header";
import Titulo from "../titulo";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Titulo />
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
