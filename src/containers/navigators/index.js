import {
  SignUpScreen, LoginScreen, StartScreen,
  AccountScreen, BooksScreen, ConfigurationsScreen, NotificationsScreen, 

  AdventuresScreen, AdventureScreen, EditAdventureScreen,
  CombatScreen, SessionScreen
} from "../screens";

import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { colors } from "../../styles";

const LoginStack = createStackNavigator(
  {
    Start: StartScreen,
    Signup: SignUpScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Start",
    defaultNavigationOptions: {
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
    defaultNavigationOptions: {
      header: null,
      backgroundColor: colors.background
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
    Adventures: AdventureStack,
    Combat: CombatScreen
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
