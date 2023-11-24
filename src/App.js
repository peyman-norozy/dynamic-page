import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import components from "./component/DynamicComponentsData";
import DynamicComponent from "./component/DynamicComponent";
import "./App.css";
import Link from "./component/Link";

function App() {
  let dynamicComponents = components;

  return (
    <div className="App">
      <BrowserRouter>
        <Link />
        <Routes>
          {dynamicComponents.map((item, index) => {
            return (
              <Route
                exact
                key={index}
                path={item.route}
                Component={() => (
                  <DynamicComponent title={item.title} content={item.content} />
                )}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
