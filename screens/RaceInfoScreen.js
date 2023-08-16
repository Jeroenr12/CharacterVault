import * as React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {Card, Text} from "react-native-paper";
import {useRaceContext} from "../contexts/RacesContext";

export  function Race({race}){
    return(
        <Card mode="outlined" style={{marginVertical: 3,}}>
            <Card.Content>
                <Text variant="headlineMedium" style={{alignSelf: "center"}}>{race.name}</Text>
                <View style={styles.box}>
                    <View style={styles.ver}>
                        <Text style={{alignSelf: "center"}} variant="headlineSmall">Str: {race.abilities.str}</Text>
                        <Text style={{alignSelf: "center"}} variant="headlineSmall">Dex: {race.abilities.dex}</Text>
                        <Text style={{alignSelf: "center"}} variant="headlineSmall">Con: {race.abilities.con}</Text>
                    </View>
                    <View style={styles.ver}>
                        <Text style={{alignSelf: "center"}} variant="headlineSmall">Int: {race.abilities.int}</Text>
                        <Text style={{alignSelf: "center"}} variant="headlineSmall">Wis: {race.abilities.wis}</Text>
                        <Text style={{alignSelf: "center"}} variant="headlineSmall">Cha: {race.abilities.cha}</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
}

export function RaceInfoScreen(){
    const {races} = useRaceContext();
    return(
        <View style={styles.container}>
            <FlatList
                data={races}
                keyExtractor={race => race.name}
                renderItem={({item}) => <Race race={item}/> }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(64, 37, 3)",
        padding: 10,
    },
    box: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 2,
        alignContent: "stretch",

    },
    ver: {
        flexDirection: "column",
    },
})