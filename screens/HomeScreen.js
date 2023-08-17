import * as React from 'react';
import {Image, ImageBackground, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NAV_MAKECHARACTER, NAV_POINTBUY, NAV_RACESINFO, NAV_VIEWCHARACTERS} from "../navigation_constants";
import {Button, Text} from "react-native-paper";

export function HomeScreen() {
    return(
            <ImageBackground source={require('../assets/images/background.jpg')} resizeMode="cover" style={styles.background}>
                <View style={styles.bigContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/DnD-Logo.png')} style={styles.image}/>
                </View>
                <Text style={styles.title} variant="displayMedium">Character Vault</Text>
                <HomeScreenButtons/>
                </View>
            </ImageBackground>
    );
}

function HomeScreenButtons(){
    return(
        <View style={styles.container}>
            <HomeNavButton navLink={NAV_VIEWCHARACTERS} text="My characters"/>
            <HomeNavButton navLink={NAV_MAKECHARACTER} text="Character creator"/>
            <HomeNavButton navLink={NAV_RACESINFO} text="Info about races"/>
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
        backgroundColor: 'transparent',
    },
    button:{
        marginVertical: 20,
        padding: 10,
    },
    title: {
        paddingTop: 20,
    },
    image:{
        resizeMode: "contain",
        height: 150,
        opacity: 0.70,
    },
    imageContainer:{
        marginTop: 20,
    },
    background:{
        flex: 1,
        justifyContent: 'center',
    },
})