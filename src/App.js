import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Form from "./pages/Form";
import LiveTraning from "./pages/LiveTraning";
import Offer from "./pages/Offer";

function App() {
  return (
    <>
      <Header />
      <Offer />
      <LiveTraning />
      <Form />
      <About />
      <Footer />
    </>
  );
}

export default App;
