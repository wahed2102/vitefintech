import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0px;

  .form {
    width: 100%;
    max-width: 100%;
  }

  .form-center {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem 2rem;
  }

  input::file-selector-button {
    font-family: 'Cabin', sans-serif;
  }

  .btn-block {
    align-self: end;
  }
`;

export default Wrapper;
