import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';



export default function DonateConfirmation() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.thanks}>Your food has been posted to the community</Text>
            <Text style={styles.thanks}>Thank you!</Text>
            <Image source={require('../assets/CheckMark.png')}/>
        </View>
    );
};


const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: '#73DC62',
        alignItems: 'center'
    },
    thanks: {
        marginTop: '10%',
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
    },

})