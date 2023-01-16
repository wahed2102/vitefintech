import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/AsideWrapper';

const Aside = () => {
  const handleLogout = () => {
    localStorage.setItem('auth', JSON.stringify({}));
  };

  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="content">
          <header>
            <img
              src="https://www.vitefintech.in/optimum/images/vitefintechd1.png"
              height="96px"
            />
          </header>
          <div className="nav-links">
            <Link className="nav-link">
              <span className="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5 0h-12c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h12c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM13 14h-11v-12h11v12zM4 9h7v1h-7zM4 11h7v1h-7zM5 4.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM7.5 6h-2c-0.825 0-1.5 0.45-1.5 1v1h5v-1c0-0.55-0.675-1-1.5-1z"></path>
                </svg>
              </span>{' '}
              Profile
            </Link>
            <Link className="nav-link" onClick={handleLogout}>
              <span className="icon">
                <svg
                  version="1.1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </span>{' '}
              logout
            </Link>
            {/* <button>Profile</button> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Aside;
