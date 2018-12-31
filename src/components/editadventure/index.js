import React from "react";

import { SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Switch
} from "react-native";
import {
  FormLabel,
  FormInput,
  Button
} from "react-native-elements";

import styles from "./styles";



const EditAdventure = ({ name, briefing, addRuleset, onChangeName, onChangeBriefing, onPressSave, onPressCancel }) =>
  <SafeAreaView style = {styles.container}>
    <View style = {styles.inputbackground}>
      <FormLabel>Name</FormLabel>
      <FormInput
        value={name}
        onChangeText={onChangeName}/>

      <FormInput>Brief</FormInput>
      <FormInput
        value={briefing}
        onChangeText={onChangeBriefing}/>

      <FormLabel>Ruleset</FormLabel>
      <Icon
        name="circle-with-plus"
        size={32}
        onPress={addRuleset}/>

      {/* <View style ={{ flex: 1, marginTop: 4 }}>
        <View style = {styles.images}>
          {images.map((imagem, key) => (
        P    <View key={key} style={styles.image}>
              <Switch
                onValueChange={() => { this.toggleSwitch(imagem.name) ; }}
                value={this.isToggled(imagem.name)}/>
              <ImageBackground
                source = {imagem.source}
                style={{ width: "100%", height: "100%" }}
                resizeMode = "contain"/>
            </View>
          ))}
        </View>
      </View> */}

      <Button
        rounded
        raised
        title="save"
        onPress={onPressSave}/>

      <Button
        rounded
        raised
        title="cancel"
        onPress={onPressCancel}/>
    </View>
  </SafeAreaView>;

export default EditAdventure;
