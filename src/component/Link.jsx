import components from "./DynamicComponentsData";
import { NavLink } from "react-router-dom";

const Link = () => {
  let dynamicComponents = components;
  return (
    <>
      <h1>Create Dynamic Routes And Components Demo</h1>;
      {dynamicComponents.map((item, index) => (
        <NavLink to={item.route}>{item.title}</NavLink>
      ))}
    </>
  );
};

export default Link;
