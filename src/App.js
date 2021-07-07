import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import routes from './routes';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header/header.component';
import { GlobalProvider } from './context/Provider';
import isAuthenticated from './utils/isAuthenticated';
import CreateContacts from './layout/CreateContacts/CreateContacts';


const RenderRoute = (route) =>{

    const history = useHistory();
    
    document.title = route.title || 'Easy Contacts';

      if(route.needAuth && !!isAuthenticated() === false){
         history.push('/auth/login')
      }

      return(
        
        <Route
            path={route.path}
            exact
            render = {(props)=> <route.component {...props}/>}
         ></Route>
      );
  };

function App() {

  return (
    <GlobalProvider>
      <Router>
          <Header />
          <Switch>
            {
            routes.map((route, index)=> (<RenderRoute {...route} key={index} />)
            )}

          </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
