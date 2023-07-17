import React, { useState } from 'react';
import { updateUser } from '../../utils/api';

const UserComponentUpdate = () => {
  const [userId, setUserId] = useState('');
  const [userUpdateData, setUserUpdateData] = useState({
    mail: '',
    phone: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdateUser = async () => {
    try {
      const response = await updateUser(userId, userUpdateData);
      setSuccessMessage(response.message);
      clearForm();
    } catch (error) {
      setErrorMessage(error.message);
      console.log('Error al actualizar el usuario:', error);
    }
  };

  const clearForm = () => {
    setUserId('');
    setUserUpdateData({ mail: '', phone: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Update User</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        name="mail"
        placeholder="New Email"
        value={userUpdateData.mail}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="New Phone"
        value={userUpdateData.phone}
        onChange={handleInputChange}
      />
      <button onClick={handleUpdateUser}>Update User</button>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default UserComponentUpdate;
