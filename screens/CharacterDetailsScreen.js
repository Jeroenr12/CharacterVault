import {ScrollView, View, StyleSheet, FlatList, ImageBackground} from "react-native";
import {Button, Card, Text} from "react-native-paper";
import * as React from "react";
import {Character} from "./ViewCharactersScreen";
import {NAV_CHARACTER_DETAILS, NAV_CHARACTER_EDIT} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";


export function CharacterDetailsScreen({route}){
    const {character} = route.params;
    const navigation = useNavigation();
    return(
        <ImageBackground source={require('../assets/images/background.jpg')} resizeMode="cover" style={styles.background}>
            <View style={styles.container}>
                <ScrollView>
                    <Card dark={true} mode="outlined" style={{marginVertical: 3,}}>
                        <Card.Content>
                            <View style={styles.hor}>
                                <Text variant="displaySmall">Name: {character.name}</Text>
                                <Text variant="displaySmall">Age: {character.age}</Text>
                            </View>
                            <Text style={{alignSelf: "center"}} variant="displaySmall">Race: {character.race}</Text>
                            <Text style={{alignSelf: "center"}} variant="displaySmall">Class: {character.class}</Text>
                        </Card.Content>
                    </Card>

                    <Card dark={true} mode="outlined" style={{marginVertical: 3,}}>
                        <Card.Content>
                            <Text style={{alignSelf: "center"}} variant="displayMedium">Abilities</Text>
                            <View style={styles.hor}>
                                <View style={styles.ver}>
                                    <Text style={styles.box} variant="headlineLarge">Str: {character.abilities.str}</Text>
                                    <Text style={styles.box} variant="headlineLarge">Dex: {character.abilities.dex}</Text>
                                    <Text style={styles.box} variant="headlineLarge">Con: {character.abilities.con}</Text>
                                </View>
                                <View style={styles.ver}>
                                    <Text style={styles.box} variant="headlineLarge">Int: {character.abilities.int}</Text>
                                    <Text style={styles.box} variant="headlineLarge">Wis: {character.abilities.wis}</Text>
                                    <Text style={styles.box} variant="headlineLarge">Cha: {character.abilities.cha}</Text>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card dark={true} mode="outlined" style={{marginVertical: 3,}}>
                        <Card.Content>
                            <Text style={{alignSelf: "center"}} variant="displayMedium">Backstory</Text>
                            <Text style={{textAlign: "center"}} variant="headlineMedium">{character.backstory}</Text>
                        </Card.Content>
                    </Card>
                    <Button compact={true} dark={true} mode="contained"  onPress={() => navigation.navigate(NAV_CHARACTER_EDIT, {character})}>
                        <Text variant="titleLarge">Edit</Text>
                    </Button>

                </ScrollView>
            </View>
        </ImageBackground>

    );
}

const styles =StyleSheet.create({
    box:{
        width: 110,
        height: 50,
        borderWidth: 2,
        borderColor: "gold",
        borderRadius: 10,
        alignSelf: "center",
        textAlign: "center",
        verticalAlign: "middle",
        marginVertical: 5,
    },
    ver: {
        flexDirection: "column",



    },
    hor: {
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
    },
    container:{
        flex: 1,
        padding: 10,
    },
    background:{
        flex: 1,
        justifyContent: 'center',
    },
})