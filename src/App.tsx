import { Outlet } from 'react-router-dom';
import MainNav from './components/mainNav';
import Footer from './components/Footer';
// import { useState, useEffect } from 'react';
// import Projects from './pages/Projects';
// import ProjectCards from './components/projectCards';

function App() {
    // const [cardPop, setCardPop] = useState(false);
    // const [cardContent, setCardContent] = useState('');

    // create if statement to check if cardContent is set to default use statre '' or if it is set to a value
    // useEffect(() => {
    //     if (cardContent !== '') {
    //         setCardPop(false)
    //     } else {
    //         setCardPop(true);
    //     };
    // }, [cardContent]);
    
  return (
    <>
    <header>
    <MainNav />
    </header>
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  );
}

export default App;
