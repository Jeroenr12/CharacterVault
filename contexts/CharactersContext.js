import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const CharactersContext = createContext();

const INITIAL_CHARACTER_DATA = [
    {
        id: "1",
        name: "Ophilia",
        age: "25",
        race: "Human",
        class: "Fighter",
        abilities: {str: "10", dex: "12", con: "15", int: "11", wis: "14", cha: "14"},
        backstory: "You were raised by your mother and father.  Grew up without a permanent home, moving a lot.  You always found it easy to make friends, and loved being around people.",

    },
    {
        id: "2",
        name: "Alfred",
        age: "40",
        race: "Dwarf",
        class: "Wizard",
        abilities: {str: "13", dex: "14", con: "13", int: "12", wis: "8", cha: "15"},
        backstory: "When you became lost in a forest, a hedge wizard found you, took you in, and taught you the rudiments of magic. You were ensorcelled by a fey and enslaved for 2 years before you escaped.",
    },
    {
        id: "3",
        name: "Lucas",
        age: "30",
        race: "Gnome",
        class: "Bard",
        abilities: {str: "10", dex: "12", con: "14", int: "16", wis: "10", cha: "14"},
        backstory: "You were raised by adoptive family (same or different race). Your father disappeared to unknown fate and your mother disappeared to unknown fate. You had a few close friends and lived an ordinary childhood.",
    },
    {
        id: "4",
        name: "Emilia",
        age: "28",
        race: "Gnome",
        class: "Druid",
        abilities: {str: "8", dex: "14", con: "10", int: "14", wis: "12", cha: "14"},
        backstory: "You were raised by your mother. Your father was imprisoned or enslaved. You befriended a druid and was moved by druidic teachings. You decided to follow your friend's guidance and give something back to the world.",
    },
    {
        id: "5",
        name: "Lisa",
        age: "80",
        race: "Elf",
        class: "Wizard",
        abilities: {str: "10", dex: "16", con: "11", int: "15", wis: "12", cha: "12"},
        backstory: "You were raised by adoptive family (same or different race). Your father died and your mother died. When you became lost in a forest, a hedge wizard found you, took you in, and taught you the rudiments of magic",
    },
];

export function CharacterProvider(props){
    const [characters, setCharacters] = useState(INITIAL_CHARACTER_DATA);

    const onUpdateCharacter = useCallback(characterToUpdate => {
        alert(characterToUpdate.name + " is updated");
        setCharacters(characters.map(character => characterToUpdate.id === character.id ? characterToUpdate: character))
    }, [characters, setCharacters]);

    const onNewCharacter = useCallback(newCharacter => {
        alert(newCharacter.name + " is made");
        setCharacters([
            ...characters,
            newCharacter,
        ])}, [characters, setCharacters]);

    const getCharacterWithId = useCallback(id => characters.find(character => character.id === id), [characters]);

    const api = useMemo(() => ({characters, onUpdateCharacter, onNewCharacter, getCharacterWithId}), [characters, onUpdateCharacter, onNewCharacter, getCharacterWithId]);

    return <CharactersContext.Provider value={api}>
        {props.children}
    </CharactersContext.Provider>
}



export const useCharacterContext = () => useContext(CharactersContext);

