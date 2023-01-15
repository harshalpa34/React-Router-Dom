import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import NotFound from "./Pages/NotFound";
import SingleQuote from "./Pages/SingleQuote";


function App() {
  return(
    <Layout>
      <Switch>
        <Route path='/' exact >
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route> 
        <Route path='/quotes/:quotesID' >
          <SingleQuote />  
        </Route> 
        <Route path='/new-quotes' >
          <NewQuotes />
        </Route> 
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;
