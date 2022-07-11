import axios from "axios";
import React from "react";
import HeroSection from "../components/organisms/HeroSection";
import { Container } from "react-bootstrap";

function App() {
  const [listRecipe, setListRecipe] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/recipe")
      .then((res) => console.log(res.data.data));
  }, []);

  return (
    <>
      <Container fluid>
        <HeroSection />
      </Container>
    </>
  );
}

export default App;
