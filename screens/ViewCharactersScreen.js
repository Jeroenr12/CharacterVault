import * as React from 'react';
import {FlatList, View, StyleSheet, ImageBackground} from "react-native";
import {Button, Card, Text} from "react-native-paper";
import {useCharacterContext} from "../contexts/CharactersContext";
import {useNavigation} from "@react-navigation/native";
import {NAV_CHARACTER_DETAILS} from "../navigation_constants";

export function Character({character}){
    const navigation = useNavigation();

    return(
        <Card dark={true} mode="outlined" style={{marginVertical: 3,}}>
            <Card.Content>
                <Text variant="headlineSmall" style={{alignSelf: "center",}}>{character.name}</Text>
                <View style={styles.box}>
                    <Text variant="titleLarge">class: {character.class} </Text>
                    <Text variant="titleLarge">race: {character.race}</Text>
                    <Text variant="titleLarge">age: {character.age}</Text>
                </View>
            </Card.Content>
            <Card.Actions style={{alignSelf: "center"}}>
                <Button compact={true} dark={true} mode="contained"  onPress={() => navigation.navigate(NAV_CHARACTER_DETAILS, {character})}>
                    <Text variant="titleLarge">Details</Text>
                </Button>
            </Card.Actions>
        </Card>
    );
}

export function ViewCharactersScreen(){
            const {characters} = useCharacterContext();
            return(
                <ImageBackground source={require('../assets/images/background.jpg')} resizeMode="cover" style={styles.background}>
                    <View style={styles.container}>
                        <FlatList
                            data={characters}
                            keyExtractor={character => character.id}
                            renderItem={({item}) => <Character character={item}/>}
                        />
                    </View>
                </ImageBackground>

            );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    },
    box:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 2,
        alignContent: "stretch",

    },
    background:{
        flex: 1,
        justifyContent: 'center',
    },

})