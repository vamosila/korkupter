/*
* File: Input.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-17
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, TextInput, View } from "react-native"

function Input({label, value = '', onChangeText, keyboardType = 'default', editable = true}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <TextInput 
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                editable={editable}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'navy',
        borderWidth: 1,
        fontSize: 24,
        margin: 15,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 10,
    },
})

export default Input
