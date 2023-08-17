import {Button, Card, Text, TextInput} from "react-native-paper";
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View} from "react-native";
import {useForm} from "react-hook-form";
import {FormBuilder} from "react-native-paper-form-builder";
import {useCharacterContext} from "../contexts/CharactersContext";
import {NAV_VIEWCHARACTERS} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";


export function MakeCharacterScreen({}) {
    const {onNewCharacter} = useCharacterContext();
    const {control, setFocus, handleSubmit} = useForm({
        defaultValues: {
            id: '',
            name: '',
            age: '0',
            race: '',
            class: '',
            abilities: {str: '8', dex: '8', con: '8', int: '8', wis: '8', cha: '8',},
            backstory: '',
        }, mode: 'onChange'
    })

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={120}
                style={{flex: 1,}}>
                <ScrollView>
                    <FormBuilder control={control} setFocus={setFocus} formConfigArray={
                        [
                            {
                                name: 'id',
                                type: 'text',
                                textInputProps: {
                                    label: 'Id',
                                },
                            },
                            {
                                name: 'name',
                                type: 'text',
                                textInputProps: {
                                    label: 'Name',
                                },
                            },
                            {
                                name: 'age',
                                type: 'text',
                                textInputProps: {
                                    label: 'Age',
                                },
                            },
                            {
                                name: 'race',
                                type: 'select',
                                textInputProps: {
                                    label: 'Race',
                                },
                                options: [
                                    {
                                        value: 'Aarakocra',
                                        label: 'Aarakocra',
                                    },
                                    {
                                        value: 'Dragonborn',
                                        label: 'Dragonborn',
                                    },
                                    {
                                        value: 'Dwarf',
                                        label: 'Dwarf',
                                    },
                                    {
                                        value: 'Elf',
                                        label: 'Elf',
                                    },
                                    {
                                        value: 'Gnome',
                                        label: 'Gnome',
                                    },
                                    {
                                        value: 'Half-Elf',
                                        label: 'Half-Elf',
                                    },
                                    {
                                        value: 'Halfling',
                                        label: 'Halfling',
                                    },
                                    {
                                        value: 'Human',
                                        label: 'Human',
                                    },
                                ],
                            },
                            {
                                name: 'class',
                                type: 'text',
                                textInputProps: {
                                    label: 'Class',
                                },
                            },
                        ]
                    }/>
                    <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                        <View style={style.container}>
                            <Text variant="headlineSmall" style={style.text}>Str</Text>
                            <FormBuilder control={control} setFocus={setFocus} formConfigArray={
                                [
                                    {
                                        name: 'abilities.str',
                                        type: 'text',
                                    },
                                ]}/>
                        </View>
                        <View style={style.container}>
                            <Text variant="headlineSmall" style={style.text}>Dex</Text>
                            <FormBuilder control={control} setFocus={setFocus} formConfigArray={
                                [
                                    {
                                        name: 'abilities.dex',
                                        type: 'text',
                                    },
                                ]}/>
                        </View>
                        <View style={style.container}>
                            <Text variant="headlineSmall" style={style.text}>Con</Text>
                            <FormBuilder control={control} setFocus={setFocus} formConfigArray={
                                [
                                    {
                                        name: 'abilities.con',
                                        type: 'text',
                                    },
                                ]}/>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "stretch"}}>
                        <View style={style.container}>
                            <Text variant="headlineSmall" style={style.text}>Int</Text>
                            <FormBuilder control={control} setFocus={setFocus} formConfigArray={
                                [
                                    {
                                        name: 'abilities.int',
                                        type: 'text',
                                    },
                                ]}/>
                        </View>
                        <View style={style.container}>
                            <Text variant="headlineSmall">Wis</Text>
                            <FormBuilder control={control} setFocus={setFocus} formConfigArray={
                                [
                                    {
                                        name: 'abilities.wis',
                                        type: 'text',
                                    },
                                ]}/>
                        </View>
                        <View style={style.container}>
                            <Text variant="headlineSmall">Cha</Text>
                            <FormBuilder control={control} setFocus={setFocus} formConfigArray={
                                [
                                    {
                                        name: 'abilities.cha',
                                        type: 'text',
                                    },
                                ]}/>
                        </View>
                    </View>

                    <View style={style.container}>
                        <Text variant="headlineLarge" style={{textAlign: "center"}}>Backstory</Text>
                        <FormBuilder control={control} setFocus={setFocus} formConfigArray={
                            [
                                {
                                    name: 'backstory',
                                    type: 'text',
                                },
                            ]}/>
                    </View>

                    <SaveButton
                        mode={'contained'}
                        onSave={handleSubmit(data => onNewCharacter(data))}/>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
}

function SaveButton({onSave}){
    return(
        <Button compact={true} dark={true} mode="contained" onPress={onSave}>Save</Button>
    );
}



const style =StyleSheet.create({
    text:{
        textAlign: "center",
    },
    container: {
        alignContent: "center",
    },
})

