import { Switch, Route } from 'react-router-dom';

import Layout from './common/Layout';
import { Home, History } from './pages';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
      </Switch>
    </Layout>
  );
}

export default App;
