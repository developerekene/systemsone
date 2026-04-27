import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { store } from './app/Redux/store';
import Footer from './app/ui/components/Footer';
import Index from './app/ui/index/Index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Index />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
