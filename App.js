import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import thunk from "redux-thunk";

import AppNavigator from "./src/containers/navigators";
import reducer from "./src/reducers/index";

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}
