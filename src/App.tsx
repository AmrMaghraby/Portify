import { AppProvider, Frame } from '@shopify/polaris';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyComponent from './components/MyComponent';
import '@shopify/polaris/dist/styles.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Frame>
          <Switch>
            <Route path="/" exact component={MyComponent} />
            {/* Add more routes as needed */}
          </Switch>
        </Frame>
      </Router>
    </AppProvider>
  );
}

export default App;
