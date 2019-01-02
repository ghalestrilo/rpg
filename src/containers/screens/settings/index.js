import React from "react";
import { connect } from "react-redux";
import { ListItem } from "react-native-elements";

import { View } from "react-native";
import { getSettings } from "../../../actions/settings";

const Settings = class extends React.Component {
  componentWillMount = this.props.getSettings

  render = () => {
    const { settings } = this.props;
    return <View>
      {settings && settings.map((setting, i) =>
        <ListItem
          key={`setting${i}`}
          title={setting.title}/>)
      }
    </View>;
  }
};

const mapStateToProps = ({ settings }) => ({
  settings: settings.list
});

const mapDispatchToProps = dispatch => ({
  getSettings: () => dispatch(getSettings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
