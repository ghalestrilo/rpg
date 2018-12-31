import {
  SignUpScreen, LoginScreen, StartScreen,
  AccountScreen, AdventuresScreen, BooksScreen, ConfigurationsScreen,
  NotificationsScreen, AdventureScreen,
  CombatScreen, SessionScreen, EditAdventureScreen
} from "../screens";
// import Background from "../../images/background/background.png";
import { colors } from "../../styles";

import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from "react-navigation";

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
export { AppNavigator, LoginStack };
