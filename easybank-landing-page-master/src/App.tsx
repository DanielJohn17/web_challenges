import { useState } from 'react';
import Nav from './components/Nav';
import HeroSection from './containers/HeroSection';
import About from './containers/About';

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
    <div className="w-screen min-h-screen font-public overflow-x-hidden">
      <Nav clicked={clicked} handleClicked={handleClickedLink} />
      <HeroSection />
      <About />
    </div>
  );
};

export default App;
