import { Route, Routes } from 'react-router';
import './App.css';
import Banner from './components/banner';
import Layout from './components/layout';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-background font-inter font-light text-foreground text-sm">
      <Banner text="10% OFF on the next 100 orders. Use code INIT10."></Banner>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
