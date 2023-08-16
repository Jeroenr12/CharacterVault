import {ScrollView, View, StyleSheet} from "react-native";
import {Text} from "react-native-paper";
import * as React from "react";


export function CharacterDetailsScreen({route}){
    const {character} = route.params;
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hor}>
                    <Text variant="displaySmall">Name: {character.name}</Text>
                    <Text variant="displaySmall">Age: {character.age}</Text>
                </View>
                    <Text style={{alignSelf: "center"}} variant="displaySmall">Race: {character.race}</Text>
                    <Text style={{alignSelf: "center"}} variant="displaySmall">Class: {character.class}</Text>
                <View style={styles.hor}>
                    <View style={styles.ver}>
                        <Text style={{alignSelf: "center"}} variant="displaySmall">Str: {character.abilities.str}</Text>
                        <Text style={{alignSelf: "center"}} variant="displaySmall">Dex: {character.abilities.dex}</Text>
                        <Text style={{alignSelf: "center"}} variant="displaySmall">Con: {character.abilities.con}</Text>
                    </View>
                    <View style={styles.ver}>
                        <Text style={{alignSelf: "center"}} variant="displaySmall">Int: {character.abilities.int}</Text>
                        <Text style={{alignSelf: "center"}} variant="displaySmall">Wis: {character.abilities.wis}</Text>
                        <Text style={{alignSelf: "center"}} variant="displaySmall">Cha: {character.abilities.cha}</Text>
                    </View>
                </View>
                <Text style={{alignSelf: "center"}} variant="displayMedium">Backstory</Text>
                <Text style={{textAlign: "center"}} variant="headlineMedium">{character.backstory}</Text>
            </ScrollView>
        </View>
    );
}

const styles =StyleSheet.create({
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
        backgroundColor: "rgb(64, 37, 3)",
        padding: 10,
    },
})