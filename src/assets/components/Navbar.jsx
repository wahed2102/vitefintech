import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/NavbarWrapper';

const Navbar = () => {
  return (
    <Wrapper>
      <h3>Navbar</h3>
      <div className="right-col">
        <Link to="/">Login</Link>
      </div>
    </Wrapper>
  );
};

export default Navbar;
