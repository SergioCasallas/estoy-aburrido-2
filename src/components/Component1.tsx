import { useEffect } from "react";
import ComponentErrorBoundary from "../utils/ComponentErrorBoundary";

const Component1 = ({ name }) => {
  // useEffect(() => {
  //   throw Error("no carga algo ajja xd");
  // }, []);

  return (
    <div>
      <h1>Component1{name.toUpperCase()}</h1>
    </div>
  );
};

const MainComponent = ({ name }) => (
  <ComponentErrorBoundary>
    <Component1 name={name} />
  </ComponentErrorBoundary>
);

export default MainComponent;
