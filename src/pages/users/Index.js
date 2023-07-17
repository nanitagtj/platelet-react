import React, { useEffect, useState } from 'react';
import { getUsers } from '../../utils/api';

const UserComponentGet = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await getUsers(currentPage, pageSize);

      // Verificar si la respuesta existe y contiene la propiedad 'data'
      if (response?.data) {
        setUsers(response.data);
        setError(null); // Reiniciar el estado de error
      } else {
        setError('Error al obtener la lista de usuarios');
      }
    } catch (error) {
      setError(error.response?.data?.errors?.description || 'Error al obtener la lista de usuarios');
      console.log('Error al obtener la lista de usuarios:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1); // Reiniciar la página actual al cambiar el tamaño de página
  };

  useEffect(() => {
    // Llamar a la función fetchUsers cuando se monta el componente o cuando cambian currentPage o pageSize
    fetchUsers();
  }, [currentPage, pageSize]);

  return (
    <div>
      <h1>List of Users</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Last Name: {user.surname}</p>
              <p>DNI: {user.dniNumber}</p>
              <p>Email: {user.mail}</p>
              <p>Phone: {user.phone}</p>
              <p>Birthdate: {user.birthdate}</p>
              <p>Role ID: {user.idRole}</p>
            </div>
          ))}
          <div>
            <p>Page: {currentPage}</p>
            <p>Page Size: {pageSize}</p>
            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
              Previous Page
            </button>
            <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
              Next Page
            </button>
            <select value={pageSize} onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}>
              <option value="8">8 per page</option>
              <option value="16">16 per page</option>
              <option value="32">32 per page</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserComponentGet;
