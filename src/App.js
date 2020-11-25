import React from "react";
import Directory from "./pages/Directory";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
      <div>
        <Jumbotron />
        <Wrapper>
          <Directory />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
