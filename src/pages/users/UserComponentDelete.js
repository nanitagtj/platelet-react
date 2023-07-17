import React, { useState } from 'react';
import { deleteUser } from '../../utils/api';

const UserComponentDelete = () => {
  const [userId, setUserId] = useState('');
  const [userType, setUserType] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDeleteUser = async () => {
    try {
      const response = await deleteUser(userId, userType);
      setSuccessMessage(response.message);
      clearForm();
    } catch (error) {
      setErrorMessage(error.message);
      console.log('Error al eliminar el usuario:', error);
    }
  };

  const clearForm = () => {
    setUserId('');
    setUserType('');
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Type"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
      />
      <button onClick={handleDeleteUser}>Delete User</button>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default UserComponentDelete;
