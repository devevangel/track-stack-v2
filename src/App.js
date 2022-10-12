import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Question from "./components/Question/Question";
import Products from "./components/Products/Products";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Question />
      <Products />
      <About />
    </div>
  );
}

export default App;
