import UserStats from './Components/UserStats';
import { RelayEnvironment } from './relay/RelayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import './App.css';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <UserStats />
    </RelayEnvironmentProvider>
  );
}

export default App;
