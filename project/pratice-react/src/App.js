import React from "react";
import GlobalStyle from "./components/ReactStyling/styles/Global.styles";

import Tutorials from "./components/ReactStyling/Tutorials";

// import './assets/css_02/light.css';

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Tutorials/>
    </>
  );
}
