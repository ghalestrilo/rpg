import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import Colors from "../../../styles/colors";

import Modal from "react-native-modal";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  Picker
} from "react-native";

import {
  Fab,
  Input,
  MainMenuButton
} from "../../../components/Igor";

import {
  Avatar,
  Button,
  Divider,
  FormLabel,
  List,
  ListItem,
  Slider,
  Text
} from "react-native-elements";

import { addPlayer, getPlayers, setNextSession, beginSession, chooseAdventure } from "../../../actions/adventure";
import { heroes, avatars } from "../../../images";
import { setEdit } from "../../../actions/adventure";

const newsessionimage = require("../../../images/buttons/add-session.png");
const newplayerimage = require("../../../images/buttons/add-player.png");

const newSession = () => {};
class AdventureScreen extends React.Component {
  componentDidMount = () => this.props.getPlayers(this.props.chosen.id);

  render = () => {
    const { chosen, setting, loading, heroes, navigation } = this.props;
    const {
      newSession
    } = this.props;

    return <View>
      <Text h2 style={{ textAlign: "center" }}>{chosen.title}</Text>
      <ScrollView>

        <Text h3>Team</Text>
        { !loading && heroes && heroes.map((hero, i) =>
          <ListItem
            hideChevron
            key={`heroes_${i}`}
            title={hero.name}
            avatar={hero.avatar}
            disabled={hero.dead}
            onPress={() => onPressCharacter(hero)}
          />)
        }

        <Divider/>

        <Text h3>Setting</Text>
        { !loading && setting &&
          <ListItem
            title={setting.title}
            avatar={setting.avatar}
            onPress={() => {
              navigation.navigate("Setting");
            }}
          />
        }

        { !loading && heroes && heroes.map((hero, i) =>
          <ListItem
            hideChevron
            key={`heroes_${i}`}
            title={hero.name}
            avatar={hero.avatar}
            disabled={hero.dead}
            onPress={() => onPressCharacter(hero)}
          />)
        }
        {/* <Fab
          source={newplayerimage}
          onPress={() => { this.setModalVisible(); }}
        /> */}
      </ScrollView>
      <Fab
        source={newsessionimage}
        onPress={() => {
          newSession();
          navigation.navigate("Session");
        }}
      />
    </View>;

  }
}

const mapStateToProps = ({ adventures }) => ({
  chosen: adventures.chosen,
  loading: adventures.loading,
  heroes: adventures.heroes
});

const mapDispatchToProps = dispatch => ({
  newSession: () => dispatch(newSession()),
  getPlayers: adventureID => dispatch(getPlayers(adventureID))
});

const mapActionsToProps = {
  setEdit: setEdit,
  addPlayer: addPlayer,
  getPlayers: getPlayers,
  setNextSession: setNextSession,
  beginSession: beginSession,
  chooseAdventure: chooseAdventure
};
export default connect(mapStateToProps, mapDispatchToProps)(AdventureScreen);













const err = () => {
  if (this.state.andamento){
    return (
      IgorBackground(
        <SafeAreaView style = {{ flex: 1 }}>
          <Modal
            visible={this.state.createSession}
            style = {styles.sessionCreate}>
            <View style={{ margin: "5%" }}>
              <Text style = {styles.textsession}>
              Insira a data da Proxima Sessao:
              </Text>
              <View style = {{ flexDirection: "row", justifyContent: "center" }}>
                <TextInput
                  style = {styles.textinput}
                  onChangeText={(dia) => { this.dia(dia) ; }}
                  value={this.state.dia}
                  maxLength = {2}
                  keyboardType = {"numeric"}
                />
                <Text>/</Text>
                <TextInput
                  style = {styles.textinput}
                  onChangeText={(mes) => { this.mes(mes) ; }}
                  value={this.state.mes}
                  maxLength = {2}
                  keyboardType = {"numeric"}
                />
              </View>
              <MainMenuButton
                onPress={() => { this.createsession(); }}
                title = "CRIAR"
              />
            </View>
          </Modal>
          <View style = {{ flex: 1 }}>
            <TabBarNavigation
              navigate = {() => { this.props.navigation.openDrawer() ; }}
              edit = {() => { this.edit() ; }}/>
            <View style = {{ flex: 1, marginLeft: "10%", marginRight: "10%" }}>
              <Text style = {styles.title}>{chosen.title}</Text>
              <View style = {styles.container}>
                <TouchableOpacity
                  style = {styles.selected}
                  onPress = {() => {}}>
                  <Text style = {{ fontWeight: "bold" }}>ANDAMENTO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style = {styles.unselected}
                  onPress = {() => this.setState({ andamento: !this.state.andamento })}
                >
                  <Text style = {{ fontWeight: "bold" }}>JOGADORES</Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.inputbackground}>
                <View style={{ flex: 1 }}>
                  <View style = {{ flex: 3 }}>
                    <ScrollView style= {{ marginTop: "5%", marginLeft: "5%" }}>
                      <Text>{chosen.brief}</Text>
                    </ScrollView>
                  </View>
                  <View style = {{ width: "100%", height: 2, backgroundColor: "rgb(200,200,200)" }}/>
                  <View style = {{ flex: 1 }}>
                    <View style= {{ flex: 1, marginTop: "5%", marginLeft: "5%" }}>
                      <ListItem
                        title={chosen.nextSession}
                        onPress={() => this.startSession()}/>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Fab
              source={newsessionimage}
              onPress={() => (this.setState({ createSession: true }))}
            />
          </View>
        </SafeAreaView>
      )
    );
  }else{
    return(
      IgorBackground(
        <SafeAreaView style = {{ flex: 1 }}>
          <TabBarNavigation
            navigate = {() => { this.props.navigation.openDrawer() ; }}/>
          <View style = {{ flex: 1, marginLeft: "10%", marginRight: "10%" }}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}>
              <View style={{ marginTop: 22 }}>
                <View style={{ padding: 20 }}>
                  <Text style={styles.title}>Cadastrar Novo Personagem</Text>
                  <Input
                    title="Nome do Personagem"
                    value={this.state.name}
                    onChange={(text) => this.handleFormChange(text, "name")}/>
                  <FormLabel>Avatar</FormLabel>
                  <View style={{ margin: 20, padding: 20, flex: 1, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                    <Avatar
                      medium
                      rounded
                      source={heroes.crono}
                      onPress={() => this.handleFormChange("crono", "avatar")}
                      activeOpacity={0.7}
                    />
                    <Avatar
                      medium
                      rounded
                      source={heroes.ayla}
                      onPress={() => this.handleFormChange("ayla", "avatar")}
                      activeOpacity={0.7}
                    />
                    <Avatar
                      rounded
                      medium
                      source={heroes.lucca}
                      onPress={() => this.handleFormChange("lucca", "avatar")}
                      activeOpacity={0.7}
                    />
                    <Avatar
                      rounded
                      medium
                      source={heroes.marle}
                      onPress={() => this.handleFormChange("marle", "avatar")}
                      activeOpacity={0.7}
                    />
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Avatar
                      large
                      rounded
                      source={heroes[this.state.avatar]}
                    />
                  </View>
                  <View style = {{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style = {{ flexDirection: "column" }}>
                      <FormLabel>Vida Inicial: {this.state.maxhp}</FormLabel>
                      <Slider
                        value={this.state.maxhp}
                        maximumValue={500}
                        step={10}
                        minimumValue={100}
                        onValueChange={(itemValue) => this.handleFormChange(itemValue, "maxhp")} />
                    </View>
                    <View style = {{ flexDirection: "column" }}>
                      <FormLabel>Ataque: {this.state.attack}</FormLabel>
                      <Slider
                        value={this.state.attack}
                        maximumValue={60}
                        step={1}
                        minimumValue={0}
                        onValueChange={(itemValue) => this.handleFormChange(itemValue, "attack")} />
                    </View>
                  </View>
                  <View>
                    <FormLabel>Classe: {this.state.class}</FormLabel>
                    <Picker
                      selectedValue={this.state.class}
                      onValueChange={(itemValue) => this.handleFormChange(itemValue, "class")}>
                      <Picker.Item label="Mago" value="Mago"/>
                      <Picker.Item label="Arqueiro" value="Arqueiro"/>
                      <Picker.Item label="Clérigo" value="Clérigo"/>
                      <Picker.Item label="Guerreiro" value="Guerreiro"/>
                    </Picker>
                  </View>
                  <View style = {{ flexDirection: "row", justifyContent: "center", alignItems: "flex-start" }}>
                    <Button
                      style={{ marginTop: 30 }}
                      title="Cadastrar"
                      backgroundColor={Colors.greenButton}
                      onPress={() => {
                        this.newPlayer();
                        this.setModalVisible(false);
                      }}>
                    </Button>
                    <Button
                      title="Fechar"
                      onPress={() => {
                        this.setModalVisible(false);
                      }}>
                    </Button>
                  </View>
                </View>
              </View>
            </Modal>
            <Text style = {styles.title}>{chosen.title}</Text>
            <View style = {styles.container}>
              <TouchableOpacity
                style = {styles.unselected}
                onPress = {() => this.setState({ andamento: !this.state.andamento })}>
                <Text style = {{ fontWeight: "bold" }}>ANDAMENTO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style = {styles.selected}
                onPress = {() => {}}>
                <Text style = {{ fontWeight: "bold" }}>JOGADORES</Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.inputbackground}>
              <List containerStyle={{ marginBottom: 20 }}>
                { Object.entries(this.props.heroes || {}).map(([ name, hero ]) => (
                  <ListItem
                    roundAvatar
                    avatar={avatars.heroes[hero.avatar]}
                    hideChevron
                    title={name}
                    subtitle={hero.class}
                  />
                ))}
              </List>
            </View>
          </View>
          <Fab
            source={newplayerimage}
            onPress={() => { this.setModalVisible(); }}
          />
        </SafeAreaView>
      )
    );
  }

};
