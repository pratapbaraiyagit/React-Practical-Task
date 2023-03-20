import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Content from './Components/Content/Content';
import { Suspense } from "react";
import { Spinner } from "reactstrap";

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <div className="App">
            <Content/>
          </div>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;