import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

const RacesContext = createContext();

const INITIAL_RACE_DATA = [
    {
        id: "1",
        name: "Aarakocra",
        abilities: {str: 0, dex: 2, con: 0, int: 0, wis: 1, cha: 0}
    },
    {
        id: "2",
        name: "Dragonborn",
        abilities: {str: 0, dex: 2, con: 0, int: 0, wis: 1, cha: 0},
    },
    {
        id: "3",
        name: "Dwarf",
        abilities: {str: 2, dex: 0, con: 2, int: 0, wis: 0, cha: 0},

    },
    {
        id: "4",
        name: "Elf",
        abilities: {str: 0, dex: 2, con: 0, int: 1, wis: 0, cha: 0},

    },
    {
        id: "5",
        name: "Gnome",
        abilities: {str: 0, dex: 0, con: 1, int: 2, wis: 0, cha: 0},
    },
    {
        id: "6",
        name: "Half-Elf",
        abilities: {str: 0, dex: 0, con: 0, int: 1, wis: 1, cha: 2},

    },
    {
        id: "7",
        name: "Halfling",
        abilities: {str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 1},

    },
    {
        id: "8",
        name: "Human",
        abilities: {str: 0, dex: 1, con: 1, int: 0, wis: 0, cha: 0},

    },
];

export function RaceProvider(props){
    const [races, setRaces] = useState(INITIAL_RACE_DATA);

    const api = useMemo(() => ({
        races
    }), [
        races
    ]);
    return <RacesContext.Provider value={api}>
        {props.children}
    </RacesContext.Provider>
}

export const useRaceContext = () => useContext(RacesContext);