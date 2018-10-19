import React from "react";
import {
  View,
  ImageBackground,
  Text,
} from "react-native";

const background = require("../../../images/background/background.png");

class Books extends React.Component {
  render(){
    return(
        <View> 
            <ImageBackground
            source = {background}
            style = {{width: '100%', height: '100%'}}
            resizeMethod="resize"
            >
              <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize : 28}}> This is BooksScreen</Text>
              </View>
            </ImageBackground>
        </View>
    );  
  }
}

export default Books;