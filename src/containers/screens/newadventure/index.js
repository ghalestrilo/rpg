import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigation } from "react-navigation-hooks";

import { saveAdventure } from "../../../actions/adventure";

const corvali = {
  source: require("../../../images/adventures/miniatura_corvali.png"),
  name: "corvali"
};
const krevast = {
  source: require("../../../images/adventures/miniatura_krevast.png"),
  name: "krevast"
};
const coast = {
  source: require("../../../images/adventures/miniatura_coast.png"),
  name: "coast"
};
const heartlands = {
  source: require("../../../images/adventures/miniatura_heartlands.png"),
  name: "heartlands"
};

const images = [
  corvali, krevast, coast, heartlands
];

const rulesets = [
  {
    title: "Brute Wars",
    authorID: 1,
    icon: "http://www.myiconfinder.com/uploads/iconsets/1885a6e83769f02e9448d136e58d780f-pictures.png",

    resources: [],
    enemies: [],
    powers: []

  },

  {
    title: "Honey Heist",
    authorID: 1,
    icon: "http://www.myiconfinder.com/uploads/iconsets/1885a6e83769f02e9448d136e58d780f-pictures.png",

    resources: [],
    enemies: [],
    powers: []

  },

  {
    title: "Honey Heist",
    authorID: 1,
    icon: "http://www.myiconfinder.com/uploads/iconsets/1885a6e83769f02e9448d136e58d780f-pictures.png",

    resources: [],
    modifiers: [],
    actions: [],

    enemies: []
  }
];

const EditAdventureScreen = ({ saveAdventure, adventure }) => {
  const navigation = useNavigation();

  const [ name, setName ] = useState(adventure.name || "");
  const [ briefing, setBriefing ] = useState(adventure.briefing || "");
  const [ ruleset, setRuleset ] = useState(adventure.ruleset || {});
  const [ players, setPlayers ] = useState(adventure.players || []);
  const [ background, setBackground ] = useState(adventure.background || "");

  const save = () => {
    saveAdventure({
      name,
      briefing,
      ruleset,
      players,
      background
    });

    navigation.pop();
  };

  return <EditAdventure
    name={name}
    onChangeName={setName}

    ruleset={ruleset}
    onChangeRuleset={setRuleset}

    briefing={briefing}
    onChangeBriefing={setBriefing}

    players={players}
    onChangePlayers={setPlayers}

    background={background}
    onChangeBackground={setBackground}

    onPressCancel={navigation.pop}
    onPressSave={save}
  />;
};

const mapStateToProps = state => ({
  adventure: state.adventures.chosen
});

const mapDispatchToProps = dispatch => ({
  saveAventure: adventure => dispatch(saveAdventure(adventure))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAdventureScreen);
