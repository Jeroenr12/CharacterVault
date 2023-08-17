import {PaperProvider, MD3DarkTheme, adaptNavigationTheme} from "react-native-paper";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
    NAV_CHARACTER_DETAILS, NAV_CHARACTER_EDIT,
    NAV_HOME,
    NAV_MAKECHARACTER,
    NAV_RACESINFO,
    NAV_VIEWCHARACTERS
} from "./navigation_constants";
import {HomeScreen} from "./screens/HomeScreen";
import {ViewCharactersScreen} from "./screens/ViewCharactersScreen";
import {RaceInfoScreen} from "./screens/RaceInfoScreen";
import {MakeCharacterScreen} from "./screens/MakeCharacterScreen";
import {CharacterProvider} from "./contexts/CharactersContext";
import {CharacterDetailsScreen} from "./screens/CharacterDetailsScreen";
import {RaceProvider} from "./contexts/RacesContext";
import {EditCharacterScreen} from "./screens/EditCharacterScreen";

const theme = {
    ...MD3DarkTheme,
    colors: {
    "primary": "rgb(156, 113, 62)",
        "onPrimary": "rgb(72, 42, 0)",
        "primaryContainer": "rgb(102, 61, 0)",
        "onPrimaryContainer": "rgb(255, 221, 186)",
        "secondary": "rgb(224, 193, 163)",
        "onSecondary": "rgb(63, 45, 23)",
        "secondaryContainer": "rgb(88, 67, 43)",
        "onSecondaryContainer": "rgb(253, 221, 189)",
        "tertiary": "rgb(189, 205, 157)",
        "onTertiary": "rgb(40, 52, 18)",
        "tertiaryContainer": "rgb(62, 75, 39)",
        "onTertiaryContainer": "rgb(216, 233, 183)",
        "error": "rgb(255, 180, 171)",
        "onError": "rgb(105, 0, 5)",
        "errorContainer": "rgb(147, 0, 10)",
        "onErrorContainer": "rgb(255, 180, 171)",
        "background": "rgb(64, 37, 3)",
        "onBackground": "rgb(235, 225, 217)",
        "surface": "rgb(31, 27, 22)",
        "onSurface": "rgb(235, 225, 217)",
        "surfaceVariant": "rgb(80, 69, 58)",
        "onSurfaceVariant": "rgb(212, 196, 181)",
        "outline": "rgb(157, 142, 129)",
        "outlineVariant": "rgb(80, 69, 58)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(235, 225, 217)",
        "inverseOnSurface": "rgb(53, 47, 42)",
        "inversePrimary": "rgb(135, 82, 0)",
        "elevation": {
        "level0": "transparent",
            "level1": "rgb(42, 35, 26)",
            "level2": "rgb(49, 40, 28)",
            "level3": "rgb(56, 44, 31)",
            "level4": "rgb(58, 46, 32)",
            "level5": "rgb(62, 49, 33)"
    },
    "surfaceDisabled": "rgba(235, 225, 217, 0.12)",
        "onSurfaceDisabled": "rgba(235, 225, 217, 0.38)",
        "backdrop": "rgba(57, 47, 36, 0.4)"
},
}
const Stack = createNativeStackNavigator();
const {DarkTheme} = adaptNavigationTheme({reactNavigationDark: DefaultTheme})
function ProvideApp(){

    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name={NAV_HOME} component={HomeScreen} options={{headerStyle: {backgroundColor: "rgb(63, 45, 23)",}, headerTitleStyle: {fontWeight: 'bold',},}}/>
                <Stack.Screen name={NAV_VIEWCHARACTERS} component={ViewCharactersScreen} options={{headerStyle: {backgroundColor: "rgb(63, 45, 23)",}, headerTitleStyle: {fontWeight: 'bold',},}}/>
                <Stack.Screen name={NAV_MAKECHARACTER} component={MakeCharacterScreen} options={{headerStyle: {backgroundColor: "rgb(63, 45, 23)",}, headerTitleStyle: {fontWeight: 'bold',},}}/>
                <Stack.Screen name={NAV_RACESINFO} component={RaceInfoScreen} options={{headerStyle: {backgroundColor: "rgb(63, 45, 23)",}, headerTitleStyle: {fontWeight: 'bold',},}}/>
                <Stack.Screen name={NAV_CHARACTER_DETAILS} component={CharacterDetailsScreen} options={{headerStyle: {backgroundColor: "rgb(63, 45, 23)",}, headerTitleStyle: {fontWeight: 'bold',},}}/>
                <Stack.Screen name={NAV_CHARACTER_EDIT} component={EditCharacterScreen} options={{headerStyle: {backgroundColor: "rgb(63, 45, 23)",}, headerTitleStyle: {fontWeight: 'bold',},}}/>
            </Stack.Navigator>
        </>
    );
}

export default function App() {
  return (
      <PaperProvider theme={theme}>
      <NavigationContainer theme={DarkTheme}>
            <SafeAreaProvider>
                <RaceProvider>
                <CharacterProvider>
                    <ProvideApp/>
                </CharacterProvider>
                </RaceProvider>
            </SafeAreaProvider>
      </NavigationContainer>
      </PaperProvider>
  );
}
