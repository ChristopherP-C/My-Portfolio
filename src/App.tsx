import { Outlet } from 'react-router-dom';
import MainNav from './components/mainNav';
import { useState, useEffect } from 'react';
import ProjectCards from './components/projectCards';
import Projects from './pages/Projects';

function App() {
    const [cardPop, setCardPop] = useState(false);
    const [cardContent, setCardContent] = useState('');

    useEffect(() => {
        // create if statement to check if cardContent is set to default use statre '' or if it is set to a value
        if (cardContent !== '') {
            setCardPop(false)
        } else {
            setCardPop(true);
        };
    }, [cardContent]);
    
  return (
    <>
    <MainNav />
    <main>
        <Outlet />
    </main>
    <ProjectCards cardContent={cardContent} cardPop={cardPop} />
    </>
  );
}

export default App;
