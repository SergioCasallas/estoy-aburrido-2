import Screen1 from "./screens/Screen1";
import { ErrorBoundary } from "./utils";

function App() {
  return (
    <>
      <ErrorBoundary
        fallBackComponent={<>Hubo un error al renderizar este componente</>}
      >
        <Screen1 />
      </ErrorBoundary>
    </>
  );
}

export default App;
