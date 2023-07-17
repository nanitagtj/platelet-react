import React, { useState } from 'react';
import './App.css';
import restauranteIcono from './assets/logorest.png';
import UserComponentCreate from './pages/users/UserComponentCreate';
import Login from './pages/login/Login';

function App() {
  const [activeButton, setActiveButton] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleRegisterClick = () => {
    setActiveButton('register');
    setShowCreateForm(true);
    setShowLoginForm(false);
  };

  const handleLoginClick = () => {
    setActiveButton('login');
    setShowCreateForm(false);
    setShowLoginForm(true);
  };

  const handleExitLogin = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="App">
      <div className="BackgroundContainerHeader">
        <div className="ContainerHeader">
          <img src={restauranteIcono} alt="Restaurante Icono" className="RestauranteIcono" />
          <div className="TitleContainer">
            <span className="Nanita">Nanita</span>
            <span className="Plaza">Plaza</span>
          </div>
        </div>
      </div>
      <div className="ContentContainer"></div>
      <div className="ButtonsContainer">
        <button
          className={`Button ${activeButton === 'login' ? 'ActiveButton' : ''}`}
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className={`Button ${activeButton === 'register' ? 'ActiveButton' : ''}`}
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
      {showCreateForm && (
        <UserComponentCreate showForm={showCreateForm} onClose={() => setShowCreateForm(false)} />
      )}
      {showLoginForm && <Login onClose={handleExitLogin} />}
      <div className="SocialMediaContainer">
        {/* Contenido del rectángulo negro con redes sociales */}
      </div>
    </div>
  );
}

export default App;
