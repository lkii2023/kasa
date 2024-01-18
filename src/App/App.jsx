import "../app/App.scss";
import "../pages/Home/Home.scss";
import "../pages/Services/Services.scss";
import "../pages/About/About.scss";
import "../pages/NotFound/NotFound.scss";
import "../components/Navbar/Navbar.scss";
import "../components/GridLocations/GridLocations.scss";
import "../components/Carousel/Carousel.scss";
import "../components/Collapse/Collapse.scss";
import "../components/Collapse/Arrow/Arrow.scss";
import "../components/Footer/Footer.scss";

import Navbar from "../components/Navbar/Navbar";
import Router from "../router/Router";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="RouterContainer">
        <Router />
      </div>
      <div className="FooterContainer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
