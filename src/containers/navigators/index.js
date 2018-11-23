import {
  SignUpScreen, LoginScreen, StartScreen,
  AccountScreen, AdventuresScreen, BooksScreen, ConfigurationsScreen,
  NotificationsScreen, NewAdventureScreen, AdventureScreen
} from "../screens";
import Background from "../../images/background/background.png";
import { colors } from "../../styles";

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

const LoginStack = createStackNavigator(
  {
    Start: StartScreen,
    Signup: SignUpScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Start",
    cardStyle: {
      shadowColor: "transparent",
      backgroundImage: "url(" + { Background } + ")"
    },
    navigationOptions: {
      header: null
    }
  }
);

const AdventureStack = createStackNavigator(
  {
    Adventures: AdventuresScreen,
    NewAdventure: NewAdventureScreen,
    Adventure: AdventureScreen
  },
  {
    initialRouteName: "Adventures",
    cardStyle: {
      shadowColor: "transparent",
      backgroundColor: "transparent"
    },
    navigationOptions: {
      header: null
    }
  }
);


const DrawerNavigator = createDrawerNavigator(
  {
    Adventures: AdventureStack,
    Books: BooksScreen,
    Account: AccountScreen,
    Notifications: NotificationsScreen,
    Configurations: ConfigurationsScreen,
    Logout: StartScreen
  },
  {
    initialRouteName: "Adventures",
    drawerLockMode: "locked-closed",
    drawerBackgroundColor: colors.drawerbackground,
    contentOptions: {
      activeTintColor: colors.drawernavactive,
      inactiveTintColor: colors.drawernavinactive
    }
  },
);

const AppNavigator = createSwitchNavigator(
  {
    LoginStack: LoginStack,
    Drawer: DrawerNavigator
  },

  {
    initialRouteName: "LoginStack",
    cardStyle: {
      shadowColor: "transparent",
      backgroundColor: "transparent"
    }
  },
);
export { AppNavigator, LoginStack, DrawerNavigator };
