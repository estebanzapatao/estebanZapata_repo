import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { pokemonDescription } from '../interfaces';

type cardListProps = {
    idx: number,
    pokemon: pokemonDescription,
    changePokemonSelected: (idx: number) => void,
}

export const CardList = ({ idx, pokemon, changePokemonSelected }: cardListProps) => {

    return (
        <TouchableOpacity
            testID={`pokemon${idx}`}
            style={idx / 1 === 1 ? styles.pokemonCard1 : idx / 2 === 1 ? styles.pokemonCard2 : idx / 3 === 1 ? styles.pokemonCard3 : styles.pokemonCard4}
            onPress={() => changePokemonSelected(idx)}
        >
            <View style={styles.pokemonContainer}>
                <Image
                    source={{ uri: pokemon.sprites.front_default }}
                    style={styles.pokemonImage}
                />
                <Text style={styles.pokemonText}>
                    # {pokemon.id}
                </Text>
                <Text style={styles.pokemonText}>
                    {pokemon.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    pokemonCard1: {
        width: "48%",
        marginLeft: "2%",
        backgroundColor: "#F59DAB",
        borderColor: "#F59DAB",
        borderWidth: 2,
    },
    pokemonCard2: {
        width: "48%",
        marginRight: "2%",
        backgroundColor: "#C0D0DA",
        borderColor: "#BAC2CB",
        borderWidth: 2,
    },
    pokemonCard3: {
        width: "48%",
        marginLeft: "2%",
        backgroundColor: "#76DACE",
        borderColor: "#15B7A9",
        borderWidth: 2,
    },
    pokemonCard4: {
        width: "48%",
        marginRight: "2%",
        backgroundColor: "#F9C097",
        borderColor: "#ED8A4B",
        borderWidth: 2,
    },
    pokemonContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
    },
    pokemonImage: {
        height: 100,
        width: 100,
    },
    pokemonText: {
        fontSize: 15,
        fontWeight: "600"
    }
});

export default CardList;