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
  onClickAdventure(adv){
    this.props.chooseAdventure(adv);
    // this.props.dispatch(viewAdventure(i))
    this.props.navigation.navigate("Adventure");
  }

  deleteAdventure(adv){
    this.props.deleteAdventure(adv);
  }

  onNewAdventure(){
    this.props.newAdventure({});
    this.props.navigation.navigate("EditAdventure");
  }

  editAdventure(adv){
    this.props.chooseAdventure(adv);
    this.props.navigation.navigate("EditAdventure");
  }

  async componentWillMount() {
    await this.props.getAdventures();
  }

  render() {
    const { adventures } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {(adventures === undefined) ? null
            : adventures.map((adv, i) =>
              <Adventure
                key={i}
                props={{
                  ...adv,
                  onPress: () => this.onClickAdventure(adv)
                }}/>)}
        </ScrollView>
        <Fab
          source={newAdventureImage}
          onPress={() => this.onNewAdventure()}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ adventures }) => ({
  adventures: adventures.list,
  chosen: adventures.chosen
});

const mapDispatchToProps = dispatch => ({
  newAdventure: () => dispatch(newAdventure()),
  deleteAdventure: index => dispatch(deleteAdventure(index)),
  chooseAdventure: index => dispatch(chooseAdventure(index)),
  getAdventures: () => dispatch(getAdventures())
});

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);
