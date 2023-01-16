import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Wrapper from '../wrappers/UserCardWrapper';

const UserCards = (props) => {
  const { name, email, role, filepath, remark, isApproved } =
    props.user;
  const [reason, setReason] = useState('');
  const [appText, setAppText] = useState(isApproved);

  useEffect(() => {
    console.log(remark);
    if (remark !== 'Approval pending') {
      setReason(remark);
    }
  }, []);

  const handleApproval = (e) => {
    if (reason === '') {
      return toast.error('Pls enter some remark');
    }
    let text = e.target.innerText;
    let rmk = text === 'Approve' ? 'Approved' : 'Rejected';
    setAppText(rmk);
    let users = JSON.parse(localStorage.getItem('users'));

    let status =
      e.target.parentNode.parentNode.parentNode.querySelector(
        '#isApproved'
      );

    if (text === 'Approve') {
      status.classList.remove('pending');
      status.classList.remove('rejected');
      status.classList.add('approved');
    } else {
      status.classList.remove('pending');
      status.classList.remove('approved');
      status.classList.add('rejected');
    }
    let modified = users.map((user) =>
      user.name === name
        ? { ...user, remark: reason, isApproved: rmk }
        : user
    );
    localStorage.setItem('users', JSON.stringify(modified));
  };

  return (
    <Wrapper>
      <header>
        <div className="main-icon">R</div>
        <div className="info">
          <h5>{name}</h5>
          <p>{email}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <div>
            <span className="icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
              </svg>{' '}
            </span>{' '}
            <span className="text">{role}</span>
          </div>
          <div>
            <span className="icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
              </svg>{' '}
            </span>
            <span className="text">{filepath}</span>
          </div>
          <div
            className={
              isApproved === 'Pending'
                ? 'status pending'
                : isApproved === 'Approved'
                ? 'status approved'
                : 'status rejected'
            }
            id="isApproved"
          >
            {appText}
          </div>
          <div>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="form-input"
              placeholder="Pls enter some remark"
            />
          </div>
        </div>
        <footer>
          <div className="actions">
            <button
              className="btn edit-btn"
              href="/add-job"
              onClick={handleApproval}
            >
              Approve
            </button>
            <button
              type="button"
              className="btn delete-btn"
              onClick={handleApproval}
            >
              Reject
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default UserCards;
