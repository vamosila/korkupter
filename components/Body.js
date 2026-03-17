/*
* File: Body.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-17
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { Keyboard, StyleSheet, Text, View } from "react-native"
import CustomButton from "./CustomButton"
import Input from "./Input"
import { useState } from "react"
import { calcVolume } from "../calculations/cylinder"

function Body() {
    const [radius, setRadius] = useState()
    const [height, setHeight] = useState()
    const [volume, setVolume] = useState()

    function startCalculation() {
        console.log('Számít')
        console.log(radius, height);

        Keyboard.dismiss();

        const volume = calcVolume(Number(radius), Number(height))
        console.log("Térfogat: ", volume);
        setVolume(volume.toFixed(2))
    }
    
    return (
        <View style={styles.container}>

            <Input 
                label="Sugár (m)" 
                value={radius}
                onChangeText={radius => setRadius(radius.replace(/[^0-9.]/g, ''))}
                keyboardType="numeric"
            />

            <Input 
                label="Magasság (m)" 
                value={height}
                onChangeText={height => setHeight(height.replace(/[^0-9.]/g, ''))}
                keyboardType="numeric"
            />

            <CustomButton 
                title="Számít"
                onPress={() => startCalculation()}
                disabled={
                    !radius || 
                    !height || 
                    isNaN(Number(radius)) || 
                    isNaN(Number(height))
                }
            />

            <Input 
                label="Térfogat (m³)" 
                value={volume}
                keyboardType="numeric"
                editable={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'orange',
    },
})

export default Body
