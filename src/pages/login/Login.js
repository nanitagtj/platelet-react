import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../utils/api';
import './UserComponentLogin.css';

const Login = ({ onClose }) => {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    mail: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      const { token } = response;
      dispatch(setToken(token));
      onClose();
    } catch (error) {
      console.error('Error logging in:', error);
      // Manejar el error de manera adecuada
    }
  };

  const handleExit = () => {
    onClose(); // Llama a la función onClose para cerrar el formulario
  };

  return (
    <div className="UserComponentLoginModal">
      <div className="UserComponentLoginContent">
        <h2 className="UserComponentLoginTitle">Iniciar sesión</h2>
        <form className="UserComponentLoginForm" onSubmit={handleSubmit}>
          <div className="UserComponentLoginField">
            <label htmlFor="mail">Correo electrónico:</label>
            <input
              type="mail"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
            />
          </div>
          <div className="UserComponentLoginField">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="UserComponentLoginButtons">
            <button type="submit" className="UserComponentLoginButton">
              Iniciar sesión
            </button>
            <button type="button" className="UserComponentLogoutButton" onClick={handleExit}>
              Salir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
