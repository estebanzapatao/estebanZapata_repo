import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native';
import { getPokemonList, getPokemonByName, getArrayPokemons } from "../api/index"
import { pokemonDescription } from '../interfaces';
import CardDescription from "../Components/CardDescription"
import Pagination from '../Components/Pagination';
import CardList from '../Components/CardList';
import Header from '../Components/Header';


function Home(): JSX.Element {
    const [pokemonList, setPokemonList] = useState<pokemonDescription[]>([])
    const [inputValue, setInputValue] = useState<string>("");
    const [page, setPage] = useState<number>(0);
    const [pokemonSelected, setPokemonSelected] = useState<number | null>(null);

    useEffect(() => {
        pokemonListRequet(page);
    }, []);

    const pokemonListRequet = async (newPage: number) => {
        try {
            const res = await getPokemonList(newPage);
            const response = await getArrayPokemons(res);
            setPokemonList(response)
        } catch (error) {
            Alert.alert("Error", (error as Error).message)
        }
    }

    const searchPokemonRequest = async (name: string) => {
        setPokemonSelected(null)
        if (name !== "") {
            try {
                const res = await getPokemonByName(name.toLowerCase());
                setPokemonList(res)
                setPokemonSelected(0)
            } catch (error) {
                Alert.alert("Error", (error as Error).message)
            }
        }
        else pokemonListRequet(page)
    }

    const changePage = (isIncrement: boolean) => {
        const newValue = isIncrement ? page + 1 : page - 1
        if (isIncrement) setPage(newValue)
        else setPage(newValue)
        setPokemonSelected(null)
        pokemonListRequet(newValue)
    }

    return (
        <SafeAreaView >
            <ScrollView>

                <Header
                    input={inputValue}
                    changeInput={setInputValue}
                    searchRequest={searchPokemonRequest}
                />

                <View testID='pokemonList' style={styles.cardsContainer}>
                    {
                        pokemonList?.map((pokemon, idx) =>
                            <CardList
                                pokemon={pokemon}
                                idx={idx}
                                changePokemonSelected={(i) => setPokemonSelected(i)}
                                key={`pokemon${idx}`}
                            />
                        )
                    }
                </View>

                {pokemonList.length > 1 &&
                    <Pagination
                        changePage={changePage}
                        page={page}
                        maxNumberPage={319}
                    />
                }

                {pokemonSelected !== null &&
                    <CardDescription
                        pokemon={pokemonList[pokemonSelected]}
                        key={pokemonList[pokemonSelected].id}
                    />
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cardsContainer: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 20,
        flexWrap: "wrap",
        rowGap: 20,
    }
});

export default Home;