import React from "react";
import { ImageBackground } from "react-native";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { AppNavigator } from "./src/containers/navigators";
import reducer from "./src/reducers/index";
const background = require("./src/images/background/background.png");

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <ImageBackground
          source={background}
          style={{ width: "100%", height: "100%" }}
          resizeMethod="resize">
          <AppNavigator style={{ backgroundColor: "transparent" }}/>
        </ImageBackground>
      </Provider>
    );
  }
}
