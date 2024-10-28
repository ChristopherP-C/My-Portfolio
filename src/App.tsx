import { Outlet } from 'react-router-dom';
import MainNav from './components/mainNav';
function App() {
    
  return (
    <>
    <MainNav />
    <main>
        <Outlet />
    </main>
    </>
  );
}

export default App;
