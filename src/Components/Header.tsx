import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image,
    TextInput
} from 'react-native';

type HeaderProps = {
    input: string,
    changeInput: (newValue: string) => void,
    searchRequest: (inputValue: string) => void
}

export const Pagination = ({ input, changeInput, searchRequest }: HeaderProps) => {

    return (
        <View>
            <Text style={styles.title}>
                Listado de Pokemon
            </Text>
            <View style={styles.inputContainer}>
                <Image
                    source={require("../assets/images/searchIcon.png")}
                    style={styles.image}
                />
                <TextInput
                    testID='inputSearchName'
                    placeholder='Buscar'
                    style={styles.input}
                    value={input}
                    onChangeText={(value) => changeInput(value)}
                    onSubmitEditing={() => searchRequest(input)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "500",
        color: "#3b4650",
        textAlign: "center",
        paddingTop: Platform.OS === "ios" ? 50 : 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 2,
        margin: 20,
    },
    image: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    input: {
        flex: 1
    },
    cardsContainer: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 20,
        flexWrap: "wrap",
        rowGap: 20,
    }
});

export default Pagination;