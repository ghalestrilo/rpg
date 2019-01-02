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
  ListItem,
  Slider,
  Text
} from "react-native-elements";

import { addPlayer, getPlayers, beginSession } from "../../../actions/adventure";

const newsessionimage = require("../../../images/buttons/add-session.png");

class AdventureScreen extends React.Component {
  componentDidMount = () => this.props.getPlayers(this.props.chosen.id);

  render = () => {
    const { chosen, setting, loading, heroes, navigation } = this.props;
    const {
      beginSession
    } = this.props;

    return <View style={{ flex: 1 }}>
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
        {/* <Fab
          source={newplayerimage}
          onPress={() => { this.setModalVisible(); }}
        /> */}
      </ScrollView>
      <Fab
        source={newsessionimage}
        onPress={() => {
          beginSession(chosen);
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
  beginSession: adventureData => dispatch(beginSession(adventureData)),
  getPlayers: adventureID => dispatch(getPlayers(adventureID))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdventureScreen);
