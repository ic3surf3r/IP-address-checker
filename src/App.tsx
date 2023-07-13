import Container from "./components/Container";
import Header from "./components/Header";
import Map from "./components/Map";
import { IPProvider } from "./context/ipContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Container>
      <IPProvider>
        <Header />
        <Map />
      </IPProvider>
      <ToastContainer />
    </Container>
  );
}

export default App;
