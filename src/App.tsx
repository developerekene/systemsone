import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './app/ui/components/Footer';
import Index from './app/ui/index/Index';

function App() {
  return (
    <BrowserRouter>
      <Index />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
