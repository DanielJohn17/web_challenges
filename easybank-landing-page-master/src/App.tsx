import { useState } from 'react';
import Nav from './components/Nav';
import HeroSection from './containers/HeroSection';
import About from './containers/About';
import Article from './containers/Article';
import Footer from './containers/Footer';
import MobileNavigation from './components/MobileNavigation';

const App = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  const handleClickedLink = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    e.preventDefault();
    setClicked(index);
  };

  return (
    <div className="w-screen min-h-screen font-public overflow-x-hidden relative">
      <Nav clicked={clicked} handleClicked={handleClickedLink} />
      {/* Mobile Navigation */}
      {/* <MobileNavigation /> */}

      <HeroSection />
      <About />
      <Article />
      <Footer />
    </div>
  );
};

export default App;
