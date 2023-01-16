import Aside from '../components/Aside';
import Dashboard from '../components/Dashboard';
import Wrapper from '../wrappers/DashboardPageWrapper';

const DashboardPage = () => {
  return (
    <Wrapper>
      <Aside />
      <Dashboard />
    </Wrapper>
  );
};
export default DashboardPage;
