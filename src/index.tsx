import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Banner from './components/Banner'
import DescricaoSobre from'./components/DescricaoSobre'
import Personagens from './components/Personagens'
import Footer from './components/Footer'
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <DescricaoSobre />
    <Personagens />
    <Footer />
  </React.StrictMode>
);
