import "../styles/App.scss";
import ".//Pages/Home/Home.scss";
import ".//Pages/Services/Services.scss";
import ".//Pages/About/About.scss";
import ".//Pages/NotFound/NotFound.scss";
import "./Layout/Navbar/Navbar.scss";
import "./Layout/GridLocations/GridLocations.scss";
import "./Layout/Caroussel/Caroussel.scss";
import "./Layout/Collapse/Collapse.scss";
import ".//Layout/ArrowAnimation/ArrowAnimation.scss";
import ".//Layout/Footer/Footer.scss";

import Navbar from "./Layout/Navbar/Navbar";
import Router from "./Router/Router";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
