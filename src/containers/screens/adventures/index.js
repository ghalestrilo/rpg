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
  onClickAdventure = (adv) => {
    this.props.chooseAdventure(adv);
    // this.props.dispatch(viewAdventure(i))
    this.props.navigation.navigate("Adventure");
  }

  // deleteAdventure = (adv) => {
  //   this.props.deleteAdventure(adv);
  // }

  onNewAdventure = () => {
    this.props.newAdventure({});
    this.props.navigation.navigate("EditAdventure");
  }

  editAdventure = (adv) => {
    this.props.chooseAdventure(adv);
    this.props.navigation.navigate("EditAdventure");
  }

  componentWillMount = async () => await this.props.getAdventures();

  render() {
    const { adventures, userID } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {adventures && adventures.map((adv, i) =>
            <Adventure
              key={i}
              editable={adv.masterID && adv.masterID === userID}
              props={{
                ...adv,
                onPress: () => this.onClickAdventure(adv)
              }}/>)
          }
        </ScrollView>
        <Fab
          source={newAdventureImage}
          onPress={() => this.onNewAdventure()}
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
  chooseAdventure: index => dispatch(chooseAdventure(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);
