import {
  SignUpScreen, LoginScreen, StartScreen,
  AccountScreen, BooksScreen, ConfigurationsScreen, NotificationsScreen, 

  AdventuresScreen, AdventureScreen, EditAdventureScreen,
  CombatScreen, SessionScreen
} from "../screens";
// import Background from "../../images/background/background.png";
import { colors } from "../../styles";

import {
  createSwitchNavigator
} from "@react-navigation/core";

import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

const LoginStack = createStackNavigator(
  {
    Start: StartScreen,
    Signup: SignUpScreen,
    Login: LoginScreen,
    Combat: CombatScreen // @TEST
  },
  {
    initialRouteName: "Start",
    navigationOptions: {
      header: null
    }
  }
);


const AdventureStack = createStackNavigator(
  {
    Adventures: AdventuresScreen,
    EditAdventure: EditAdventureScreen,
    Adventure: AdventureScreen,
    Session: SessionScreen,
    Combat: CombatScreen
  },
  {
    initialRouteName: "Adventures",
    navigationOptions: {
      header: null
    }
  }
);

// const DrawerNavigator = createDrawerNavigator(
//   {
//     Adventures: AdventureStack,
//     Books: BooksScreen,
//     Account: AccountScreen,
//     Notifications: NotificationsScreen,
//     Configurations: ConfigurationsScreen,
//     Logout: StartScreen
//   },
//   {
//     initialRouteName: "Adventures",
//     drawerLockMode: "locked-closed",
//     drawerBackgroundColor: colors.drawerbackground,
//     contentOptions: {
//       activeTintColor: colors.drawernavactive,
//       inactiveTintColor: colors.drawernavinactive
//     }
//   },
// );

const MainTabNavigator = createMaterialTopTabNavigator(
  {
    Adventures: AdventureStack
  },
  {
    initialRouteName: "Adventures"
  }
);

const AppNavigator = createSwitchNavigator(
  {
    LoginStack,
    MainTabNavigator
  },

  {
    initialRouteName: "LoginStack"
  },
);

export default createAppContainer(AppNavigator);
