import React from "react";
import { connect } from "react-redux";

import {
  ScrollView,
  View
} from "react-native";

import {
  Adventure,
  Fab
} from "../../../components/Igor";

import {
  chooseAdventure,
  getAdventures,
  deleteAdventure,
  newAdventure
} from "../../../actions/adventure";

const newAdventureImage = require("../../../images/buttons/nova-aventura.png");

class Adventures extends React.Component {
  componentWillMount = () => this.props.getAdventures();

  render() {
    const { adventures, userID } = this.props;
    const {
      navigation,
      chooseAdventure,
      newAdventure
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {adventures && adventures.map((adv, i) =>
            <Adventure
              key={i}
              editable={adv.masterID && adv.masterID === userID}
              props={{ ...adv  }}
              onPress={() => {
                chooseAdventure(adv),
                navigation.navigate("Adventure");
              }}
            />)
          }
        </ScrollView>
        <Fab
          source={newAdventureImage}
          onPress={() => {
            newAdventure();
            navigation.navigate("EditAdventure");
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ adventures, user }) => ({
  userID: user.id,
  adventures: adventures.list
});

const mapDispatchToProps = dispatch => ({
  newAdventure: () => dispatch(newAdventure()),
  getAdventures: () => dispatch(getAdventures()),
  deleteAdventure: index => dispatch(deleteAdventure(index)),
  chooseAdventure: (chooseAdventure |> dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);
