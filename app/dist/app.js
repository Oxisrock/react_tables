import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component
{
  render()
  {
    return(
      <h1>Hola Mundo</h1>
    );
  }
}

const app = document.getElementByid('app');

ReactDOM.render(<Layout/>,app);
