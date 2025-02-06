import { useState } from 'react';
import Nav from './components/Nav';
import HeroSection from './containers/HeroSection';
import About from './containers/About';
import Article from './containers/Article';
import Footer from './containers/Footer';

const App = () => {
  const [clicked, setClicked] = useState<number | null>(null);
  const [openNav, setOpenNav] = useState(false);

  const handleClickedLink = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    e.preventDefault();
    setClicked(index);
  };

  const handleOpenNav = () => {
    setOpenNav((o) => !o);
  };

  return (
    <div className="w-screen min-h-screen font-public overflow-x-hidden relative">
      <Nav
        clicked={clicked}
        handleClicked={handleClickedLink}
        openNav={openNav}
        handleOpenNav={handleOpenNav}
      />
      <HeroSection openNav={openNav} handleOpenNav={handleOpenNav} />
      <About />
      <Article />
      <Footer />
    </div>
  );
};

export default App;
