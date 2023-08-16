import * as React from 'react';
import {Image, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NAV_MAKECHARACTER, NAV_POINTBUY, NAV_RACESINFO, NAV_VIEWCHARACTERS} from "../navigation_constants";
import {Button, Text} from "react-native-paper";
const LogoSource = require('./assets/DnD-Logo.png');


export function HomeScreen() {
    return(
        <View style={styles.bigContainer}>
            <Image source={LogoSource} style={styles.image}/>
            <Text style={styles.title} variant="displayMedium">Character Vault</Text>
            <HomeScreenButtons/>
        </View>
    );
}

function HomeScreenButtons(){
    return(
        <View style={styles.container}>
            <HomeNavButton navLink={NAV_VIEWCHARACTERS} text="My characters"/>
            <HomeNavButton navLink={NAV_MAKECHARACTER} text="Character creator"/>
            <HomeNavButton navLink={NAV_RACESINFO} text="Info about races"/>
            <HomeNavButton navLink={NAV_POINTBUY} text="Pointbuy calculator"/>
        </View>
    );
}

function HomeNavButton({navLink, text}){
    const navigation = useNavigation();
    return(
            <Button style={styles.button} compact={true} dark={true} mode="contained" onPress={() => navigation.navigate(navLink)}>
                <Text variant="headlineMedium">{text}</Text>
            </Button>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigContainer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: "rgb(64, 37, 3)",
    },
    button:{
        marginVertical: 20,
        padding: 10,
    },
    title: {
        paddingTop: 20,
        marginBottom: -50,
    },
    image:{
      height: 50,
    },
})