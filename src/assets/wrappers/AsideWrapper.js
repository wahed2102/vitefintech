import styled from 'styled-components';

const Wrapper = styled.aside`
  display: block;
  /* box-shadow: rgba(0, 0, 0, 0.1) 1px 0px 0px 0px; */

  .sidebar-container {
    background: var(--white);
    min-height: 100vh;
    height: 100%;
    width: 250px;
    /* margin-left: -250px; */
    transition: var(--transition);
  }

  header {
    height: 6rem;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    padding-left: 6rem;
  }

  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: flex;
    -moz-box-align: center;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0px 1rem 2.5rem;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link::hover {
    background: var(--grey-50);
    padding-left: 3rem;
    color: var(--grey-900);
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
`;

export default Wrapper;
