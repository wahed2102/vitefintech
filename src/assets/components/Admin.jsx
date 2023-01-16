import { useEffect, useState } from 'react';
import Wrapper from '../wrappers/AdminWrapper';
import UserCards from './UserCards';

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      let users = JSON.parse(localStorage.getItem('users'));
      users = users.filter((user) => user.role === 'user');
      setUsers(users);
    }
  });

  return (
    <Wrapper>
      {users &&
        users.map((user) => (
          <UserCards key={user.name} user={user} />
        ))}
    </Wrapper>
  );
};
export default Admin;
