import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';



import Cards from './components/Cards';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Jumbotron />
      <Routes>
        <Route path='' element={<Cards />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
