/*
* File: Footer.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-17
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, View } from "react-native"

function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vámosi László Ádám, II-N, 2026-03-17</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gold',
        width: '100%',
        padding: 10,
        paddingBottom: 55,
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
    },
})

export default Footer
