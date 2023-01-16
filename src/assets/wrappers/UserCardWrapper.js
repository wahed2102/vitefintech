import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  height: 253px;

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    -moz-box-align: center;
    align-items: center;
  }

  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }

  .info h5 {
    margin-bottom: 0.25rem;
  }

  .info p {
    margin: 0px;
    color: var(--grey-400);
    letter-spacing: var(--letterSpacing);
  }

  .content {
    padding: 1rem 1.5rem;
  }

  .content-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.5rem;
  }

  span.icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    -moz-box-align: center;
    align-items: center;
  }

  span.text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  .icon svg {
    color: var(--grey-400);
  }

  .content-center > div {
    margin-top: 0.5rem;
    display: flex;
    -moz-box-align: center;
    align-items: center;
  }

  .content-center input {
    height: 35px;
    border: 1px solid aliceblue;
    padding: 0.5rem;
    font-family: inherit;
    margin-right: 2rem;
  }

  .content-center div.status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
    margin-top: 0.5rem;
    display: block;
  }

  .pending {
    background: rgb(252, 239, 199);
    color: rgb(233, 185, 73);
  }

  .rejected {
    background: rgb(224, 232, 249);
    color: rgb(100, 122, 203);
  }

  .approved {
    color: var(--green-dark);
    background: var(--green-light);
  }

  footer {
    margin-top: 1rem;
  }

  .actions {
    /* text-align: right; */
  }

  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
    font-family: inherit;
  }

  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
    font-family: inherit;
  }
`;

export default Wrapper;
