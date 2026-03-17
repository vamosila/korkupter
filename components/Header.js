/*
* File: Header.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-17
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, View } from "react-native"

function Header() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Köralapú henger térfogata
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'navy',
        width: '100%',
        padding: 5,
        paddingTop: 55,
    },
    text: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
    },
})

export default Header
