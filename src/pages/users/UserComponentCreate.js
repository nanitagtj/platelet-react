import React, { useState, useEffect } from 'react';
import { createUser } from '../../utils/api';
import './UserComponentCreate.css';

const UserComponentCreate = ({ showForm, onClose }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dniNumber, setDniNumber] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleCreateUser = async () => {
    try {
      const userData = {
        name,
        surname,
        dniNumber,
        mail,
        phone,
        birthdate,
        password,
      };
      const userTypeParam = userType;
      const response = await createUser(userData, userTypeParam);
      setSuccessMessage(response);
      clearForm();
    } catch (error) {
      setErrorMessage(error);
      console.log('Error al crear el usuario:', error);
    }
  };

  const clearForm = () => {
    setName('');
    setSurname('');
    setDniNumber('');
    setMail('');
    setPhone('');
    setBirthdate('');
    setPassword('');
    setUserType('');
  };

  const handleModalClose = () => {
    setSuccessMessage(null);
    setErrorMessage(null);
    onClose();
  };

  if (!showForm) {
    return null;
  }

  return (
    <div className="UserComponentCreateModal">
      <div className="UserComponentCreate">
        <h2>Registro de usuario</h2>
        <div className="NameContainer">
          <input
            type="text"
            placeholder="Primer Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Primer Apellido"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="DNI"
          value={dniNumber}
          onChange={(e) => setDniNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="User Type"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        />
        <div className="ButtonContainer">
          <button className="CancelButton" onClick={onClose}>
            Cancelar
          </button>
          <button className="CreateButton" onClick={handleCreateUser}>
            Crear Usuario
          </button>
        </div>
      </div>

      {successMessage && (
        <div className="Modal">
          <div className="ModalContent">
            <h3>User created</h3>
            <p>User created successfully</p>
            <pre>{JSON.stringify(successMessage.data, null, 2)}</pre>
            <button onClick={handleModalClose}>Cerrar</button>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="Modal">
          <div className="ModalContent">
            <h3>Error</h3>
            <p>{errorMessage.message}</p>
            <button onClick={handleModalClose}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserComponentCreate;

