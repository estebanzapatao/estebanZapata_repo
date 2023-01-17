import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

type paginationnProps = {
    page: number,
    maxNumberPage: number,
    changePage: (isIncrement: boolean) => void,
}

export const Pagination = ({ page, maxNumberPage, changePage }: paginationnProps) => {

    return (
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
                style={page === 0 ? styles.buttonDisabled : styles.button}
                disabled={page === 0}
                onPress={() => changePage(false)}
            >
                <Text style={{ color: page === 0 ? "#000" : "#fff" }}>Atrás </Text>
            </TouchableOpacity>
            <View>
                <Text>Pág. {page + 1} / {maxNumberPage}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => changePage(true)}
                disabled={page >= maxNumberPage}
            >
                <Text style={{ color: page >= maxNumberPage ? "#000" : "#fff" }}>Siguiente</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20
    },
    button: {
        backgroundColor: "#007fe0",
        width: 110,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 5
    },
    buttonDisabled: {
        backgroundColor: "#adadad",
        width: 110,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 5
    }
});

export default Pagination;