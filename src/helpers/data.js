const users = [
  {
    name: 'John',
    email: 'john@example.com',
    password: 'secret',
    role: 'super',
    filepath: 'somefile.txt',
    remark: 'Approval pending',
    isApproved: false,
  },
  {
    name: 'Sam',
    email: 'sam@example.com',
    password: 'secret',
    role: 'admin',
    filepath: 'somefile.txt',
    remark: 'Approval pending',
    isApproved: false,
  },
  {
    name: 'Rocky',
    email: 'rocky@example.com',
    password: 'secret',
    role: 'user',
    filepath: 'somefile.txt',
    remark: 'Approval pending',
    isApproved: 'Pending',
  },
  {
    name: 'Matt',
    email: 'matt@example.com',
    password: 'secret',
    role: 'user',
    filepath: 'somefile.txt',
    remark: 'Approval pending',
    isApproved: 'Pending',
  },
];

localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('auth', JSON.stringify({}));
