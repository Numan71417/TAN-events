import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useLocation } from "react-router-dom";
import BabyShower from "./Pages/BabyShower";
import Balloon from "./Pages/Balloon";
import Bday from "./Pages/Bday";
import Festival from "./Pages/Festival";
import Gallery from "./Pages/Gallery";
import GetService from "./Pages/GetService";
import Naming from "./Pages/Naming";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import ContactIcons from "./components/ContactIcons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Helmet>
          <title>TAN Events</title>
          <meta name="description" content="Best event management website" />
          <meta
            name="keywords"
            content="Wedding, Taskiya, Balloon Decoration, Naming Ceremony, Baby Shower, Engagement event management, Event management in bangalore, Event management near me, TAN Event management, Event planning, Event management company, Event coordination, Event organizers, Event production, Corporate event planning, Wedding planning services, Party planning, Conference management, Venue selection, Event logistics, Theme parties, Event decoration, Entertainment booking, Catering services, Audiovisual services, Event marketing, Event promotions, Event budgeting, Event coordination services, Wedding, Naming Ceremony, Baby Shower, Engagement event management, Event management in bangalore, Event management near me"
          />
        </Helmet>

        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Benefits />
                <Services />
              </div>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/getservice" element={<GetService />} />
          <Route path="/balloon" element={<Balloon />} />
          <Route path="/bday" element={<Bday />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/naming" element={<Naming />} />
          <Route path="/babyshower" element={<BabyShower />} />
          <Route path="/about" element={<Services />} />
        </Routes>
        <ContactIcons />
        <Gallery />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
