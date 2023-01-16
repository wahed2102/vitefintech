import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Wrapper from '../wrappers/ProfileWrapper';

const initialState = {
  name: '',
  email: '',
  role: 'user',
  filepath: '',
  remark: '',
  isApproved: '',
};

const Profile = () => {
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    let auth = JSON.parse(localStorage.getItem('auth'));
    const { name, email, role, filepath, remark, isApproved } =
      auth.user;
    setValues({
      ...values,
      name,
      email,
      role,
      filepath,
      remark,
      isApproved,
    });
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let file = document.querySelector('input[type="file"]').value;
    file = file.split('\\');
    setValues({ ...values, [filepath]: file[file.length - 1] });
    let users = JSON.parse(localStorage.getItem('users'));
    let modified = users.map((user) => {
      return user.name === values.name
        ? { ...user, filepath: file[file.length - 1] }
        : user;
    });
    localStorage.setItem('users', JSON.stringify(modified));
    toast.success('File saved successfully');
  };

  return (
    <Wrapper>
      <section>
        <form className="form" onSubmit={handleSubmit}>
          <h4>Details</h4>
          <div className="form-center">
            <div className="form-row">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-input"
                name="name"
                value={values.name}
                disabled
              />
            </div>
            <div className="form-row">
              <label htmlFor="name" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-input"
                name="name"
                value={values.email}
                disabled
              />
            </div>
            <div className="form-row">
              <label htmlFor="name" className="form-label">
                Role
              </label>
              <input
                type="text"
                className="form-input"
                name="name"
                value={values.role}
                disabled
              />
            </div>
            <div className="form-row">
              <label htmlFor="file" className="form-label">
                Filepath
              </label>
              <input
                type="file"
                name="filepath"
                id="filepath"
                onChange={handleChange}
                // value={values.filepath}
              />
            </div>
            <div className="form-row">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <input
                type="text"
                className="form-input"
                name="status"
                id="status"
                value={values.isApproved}
                onChange={handleChange}
                disabled
              />
            </div>
            <button type="submit" className="btn btn-block">
              Upload File
            </button>
          </div>
        </form>
      </section>
      <p>Remark: {values.remark}</p>
    </Wrapper>
  );
};
export default Profile;
