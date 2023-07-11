import Container from "./components/Container";
import Header from "./components/Header";
import Map from "./components/Map";
import { IPProvider } from "./context/ipContext";

function App() {
  return (
    <Container>
      <IPProvider>
        <Header />
        <Map />
      </IPProvider>
    </Container>
  );
}

export default App;
