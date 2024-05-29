import Screen1 from "./screens/Screen1";
import GlobalErrorBoundary from "./utils/ErrorBondaryGlobal";

function App() {
  return (
    <div>
      <GlobalErrorBoundary fallBackComponent={<>Hubo un error global</>}>
        <Screen1 />
      </GlobalErrorBoundary>
    </div>
  );
}

export default App;
