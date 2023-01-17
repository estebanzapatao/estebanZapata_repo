import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { pokemonDescription } from '../interfaces';

type CardDescriptionProps = {
    pokemon: pokemonDescription
}

export const CardDescription = ({ pokemon }: CardDescriptionProps) => {

    return (
        <View style={styles.cardDescription}>
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
            <View>
                <View style={styles.pokemonSection}>
                    <Text style={styles.pokemonSectionTitle}>Types</Text>
                    <View style={styles.pokemonDescriptions}>
                        {
                            pokemon.types.map(
                                (type, idx) =>
                                    <Text style={styles.pokemonDescription} key={`type${idx}`}>
                                        {type.type.name}{idx < pokemon.types.length - 1 ? "," : ""}
                                    </Text>
                            )
                        }
                    </View>
                </View>
                <View style={styles.pokemonSection}>
                    <Text style={styles.pokemonSectionTitle}>Peso</Text>
                    <Text>11kg</Text>
                </View>
                <View style={styles.pokemonSection}>
                    <Text style={styles.pokemonSectionTitle}>Sprites</Text>
                    <View style={styles.pokemonDescriptions}>
                        <Image
                            source={{ uri: pokemon.sprites.back_default }}
                            style={styles.pokemonSprintImg}
                        />
                        <Image
                            source={{ uri: pokemon.sprites.front_shiny }}
                            style={styles.pokemonSprintImg}
                        />
                        <Image
                            source={{ uri: pokemon.sprites.back_shiny }}
                            style={styles.pokemonSprintImg}
                        />
                    </View>
                </View>
                <View style={styles.pokemonSection}>
                    <Text style={styles.pokemonSectionTitle}>Movimientos</Text>
                    <View style={styles.pokemonDescriptions}>
                        {
                            pokemon.moves.splice(0, 25).map(
                                (move, idx) =>
                                    <Text style={styles.pokemonDescription} key={`split${idx}`}>
                                        {move.move.name}
                                        {idx < pokemon.types.length - 1 && idx < 24 ? "," : ""}
                                    </Text>
                            )
                        }
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardDescription: {
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 2,
        padding: 20,
        paddingTop: 0,
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 20
    },
    pokemonSection: {
        paddingTop: 13
    },
    pokemonSectionTitle: {
        fontSize: 17,
        fontWeight: "600"
    },
    pokemonDescriptions: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    pokemonDescription: {
        marginRight: 5
    },
    pokemonContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10
    },
    pokemonImage: {
        height: 100,
        width: 100,
    },
    pokemonText: {
        fontSize: 15,
        fontWeight: "600"
    },
    pokemonSprintImg: {
        height: 90,
        width: 90
    },
});

export default CardDescription;