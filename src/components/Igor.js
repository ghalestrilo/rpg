import React from "react";
import { Font } from "expo";
const igor = require("../images/logo/logo.png");
const background = require("../images/background/background.png");
import Icon from "react-native-vector-icons/Entypo";
import MCIIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, fonts } from "../styles";

import styles from "./igorstyles.js";

import {
  FormLabel,
  FormInput,
  Button,
  Slider
} from "react-native-elements";

import {
  SafeAreaView,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  TouchableHighlight
} from "react-native";

Font.loadAsync({
  "Entypo": require("@expo/vector-icons/fonts/Entypo.ttf")
});

/* Background: Padrao para a maioria das telas
*/
export const IgorBackground = (content) => (
  <SafeAreaView style={{ backgroundColor: "rgb(34,17,51)" }}>
    <ImageBackground
      source={background}
      style={styles.background}
      resizeMethod="resize">
      {content}
    </ImageBackground>
  </SafeAreaView>
);

/* Background com aba de navegação: Padrao para a maioria das telas
*/
export const TabBarNavigation = (props) => (
  <View style={{ width: "100%", height: 75, backgroundColor: colors.drawerbackground }}>
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ width: 75, height: 75, backgroundColor: colors.drawerbackground }}>
        {props.navigate ? <TouchableHighlight
          style={{ flex: 1, justifyContent: "center" }}
          onPress={props.navigate}>
          <Icon
            name="menu"
            size= {35}
            color="white"/>
        </TouchableHighlight>: null}
      </View>
      <View style={{
        justifyContent: "center",
        alignItems: "center" }}>

        <Image
          source={igor}
          style={{
            resizeMode: "contain",
            width: 160
          }}
        />
      </View>
      <View style={{ width: 75, height: 75, backgroundColor: colors.drawerbackground }}>
        {props.edit ? <TouchableHighlight
          style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
          onPress={props.edit}>
          <Icon
            name="edit"
            size= {35}
            color= {(props.color== null ? "white": props.color)}/>
        </TouchableHighlight> : null}
      </View>
    </View>
  </View>
);

/* Background
*/
export const IgorLogo = () => (
  <SafeAreaView style={styles.igorLayout}>
    <Image
      source={igor}
      resizeMode="contain"
      style={styles.logo}
    />
  </SafeAreaView>
);

/* Fab: Botaozinho que flutua na parte inferior direia da tela
*/
export const Fab = (props) => (
  <SafeAreaView>
    <TouchableOpacity
      classname="fab"
      style={styles.fab}
      onPress={() => props.onPress()}>
      <Image
        source={ props.source }
        style={{ width: "100%", height: "100%" }}/>
    </TouchableOpacity>
  </SafeAreaView>
);

export const Progress = (props) => <Text classname="progbar">{props.progress}</Text>;

export const Input = (props) => (
  // TODO: Slant Behaviour
  // (props.text === '')
  //   ?
  //   :
  <SafeAreaView>
    <FormLabel>{props.title}</FormLabel>
    <FormInput secureTextEntry={props.type === "password"} value={props.value}
      autoCorrect={false} autoCapitalize="none" onChangeText={props.onChange}/>
  </SafeAreaView>
);

export const TextOverlay = (text) => (<Text style={styles.overlay}>{text}</Text>);

export const getImageFromString = imageName => {
  let image = {};
  switch(imageName){
  case "coast":
    image = require("../images/adventures/miniatura_coast.png");
    break;
  case "krevast":
    image = require("../images/adventures/miniatura_krevast.png");
    break;
  case "corvali":
    image = require("../images/adventures/miniatura_corvali.png");
    break;
  case "heartlands":
    image = require("../images/adventures/miniatura_heartlands.png");
    break;
  }
  return image;
};

/* Aventura:
  - Background
  - Nome
  - Proxima sessao
  - Barra de progressao (inline)
*/

export const Adventure = ({ props, onPress }) => {
  if (!props) return null;
  // const progress = (props.progress < 100)
  //   ? props.progress
  //   : 100;
  return (
    <TouchableOpacity
      key={props.title}
      style={{
        margin: 4
      }}
      onPress={onPress}>
      <ImageBackground
        source={getImageFromString(props.image)}
        imageStyle={{
          borderRadius: 10,
          borderColor: colors.black,
          borderWidth: 2
        }}
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          height: 128,
          padding: 16
        }}
        classname="adventure">

        <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
          <Text style={{ color: colors.white, fontSize: 20 }}>{props.title}</Text>


          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ color: colors.white, fontSize: 20 }}>{props.nextSession}</Text>
            <Text style={{ color: colors.lightgray }}>{"Próxima Sessão"}</Text>
          </View>
        </View>

        <Slider
          disabled
          trackStyle={{
            backgroundColor: colors.green
          }}
          thumbStyle={{
            display: "none"
          }}
          value={props.progress/100}
        />
      </ImageBackground>
    </TouchableOpacity>);
};

export const EditAdventure = ({ props }) => {
  if (!props) return null;
  // const progress = (props.progress < 100)
  //   ? props.progress
  //   : 100;
  return (
    <ImageBackground
      source={getImageFromString(props.image)}
      imageStyle={{
        borderRadius: 10,
        borderColor: colors.black,
        borderWidth: 2
      }}
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        height: 128,
        margin: 4,
        padding: 16
      }}
      classname="adventure">
      <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
        <Text style={{ color: colors.white, fontSize: 20 }}>{props.title}</Text>


        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ color: colors.white, fontSize: 20 }}>{props.nextSession}</Text>
          <Text style={{ color: colors.lightgray }}>{"Próxima Sessão"}</Text>
        </View>
      </View>
      <TouchableOpacity
        style = {styles.delete}
        onPress={() => props.delete()}>
        <MCIIcons
          name="delete-empty"
          size= {30}
          color= "white"/>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.edit}
        onPress={() => props.edit()}>
        <Icon
          name="edit"
          size= {30}
          color= "white"/>
      </TouchableOpacity>
    </ImageBackground>);
};

export const MainMenuButton = (props) => (
  <Button
    key={props.title + "Button"}
    title={props.title}
    buttonStyle={styles.buttonLayout}
    fontSize = {fonts.bigger}
    color = {colors.buttonText}
    onPress={props.onPress}
    loading={props.loading === true}
  />
);

export const RestButton = (props) => (
  <TouchableOpacity
    key={props.title + "Button"}
    style={styles.rest}
    onPress={props.navigate}
  >
    <Text style = {styles.restText}>{props.title}</Text>
  </TouchableOpacity>
);

