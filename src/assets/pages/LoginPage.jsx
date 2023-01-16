import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../wrappers/LoginPageWrapper';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  isAuth: false,
};

const LoginPage = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    let auth = localStorage.getItem('auth');
    auth = JSON.parse(auth);
    if (auth.isAuth) {
      navigate('/dashboard');
    }
  }, [values.isAuth]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if ((!isMember && !name) || !email || !password) {
      return toast.warn('Pls fill all the fields');
    }
    let users = JSON.parse(localStorage.getItem('users'));

    if (isMember) {
      let user = users.find((user) => user.email === values.email);
      if (user && user.email === values.email) {
        let data = {
          isAuth: true,
          user: {
            email: user.email,
            name: user.name,
            role: user.role,
            filepath: user.filepath,
            remark: user.remark,
            isApproved: user.isApproved,
          },
        };
        localStorage.setItem('auth', JSON.stringify(data));
        setValues({ ...values, isAuth: true });
      } else {
        toast.error('Invalid email or password');
      }
      return;
    }

    users.push({
      name,
      email,
      password,
      role: 'user',
      filepath: 'somefile.txt',
      remark: 'Approval Pending',
      isApproved: 'Pending',
    });
    localStorage.setItem('users', JSON.stringify(users));
    setValues({ ...values, isMember: true });
    toast.success(`Registered pls login`);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {!values.isMember && (
          <div className="form-row">
            <label htmlFor="name  " className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        )}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          // disabled={isLoading}
        >
          {!values.isMember ? 'Register' : 'Login'}
        </button>
        <p>
          {values.isMember
            ? 'Not a member yet?'
            : 'Already a member?'}
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
          >
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default LoginPage;
