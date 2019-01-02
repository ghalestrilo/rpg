import React from "react";
import { connect } from "react-redux";
import { ListItem } from "react-native-elements";

import { View } from "react-native";

const Settings = class extends React.Component {
  render = () => {
    const { settings } = this.props;
    return <View>
      {settings && settings.map((setting, i) =>
        <ListItem
          key={`setting${i}`}
          title={setting.title}/>)}
    </View>;
  }
};

const mapStateToProps = ({ settings }) => ({
  settings
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
