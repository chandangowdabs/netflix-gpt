import { Provider } from 'react-redux';
import appstore from './utils/appStore';
import Body from './components/Body';

function App() {
  return (
    <div>
      <Provider store={appstore}> <Body/></Provider>
    </div>
  );
}

export default App;


