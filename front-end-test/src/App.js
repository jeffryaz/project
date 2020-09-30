import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Router from './config/router';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {
          Router.Content.map(
            (item, index) => <Route key={index.toString()} path={item.path} name={item.name} component={item.component} />
          )
        }
        <Redirect from="**" to="/list-mobil" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
