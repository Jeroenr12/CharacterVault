import {useCharacterContext} from "../contexts/CharactersContext";
import {Button, Card, Text, TextInput} from "react-native-paper";
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View} from "react-native";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {FormBuilder} from "react-native-paper-form-builder";

export function EditCharacterScreen({route}){
    const {character} = route.params;
    const {control, setFocus} = useForm({defaultValues: {character}, mode: 'onChange'})


    return(
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={120}
                style={{flex: 1,}}>
                <ScrollView>
                    <FormBuilder control={control} setFocus={setFocus} formConfigArray={
                        [
                            {
                                name: 'name',
                                type: 'text',
                                textInputProps:{
                                  label: 'Name',
                                },
                            },
                        ]
                    }/>
                    {/*<Button*/}
                    {/*    mode={'contained'}*/}
                    {/*    onPress={handleSubmit((data: any) => {*/}
                    {/*        console.log('form data', data);*/}
                    {/*    })}>*/}
                    {/*    Submit*/}
                    {/*</Button>*/}
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
}
//
// function submit(character){
//     const {onUpdateCharacter} = useCharacterContext();
//     onUpdateCharacter(character);
//     return;
// }


const styles =StyleSheet.create({
    box:{
        width: 120,
        height: 50,
        borderWidth: 2,
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
        justifyContent: "space-around",
        alignItems: "stretch",
    },
    container:{
        flex: 1,
        padding: 10,
    },
    background:{
        flex: 1,
        justifyContent: 'center',
    },
    backstory:{
        height: 200,
    }
})