import "./App.css";
import { Button } from "react-bootstrap";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default App;
