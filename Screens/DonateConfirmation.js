import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';



export default function DonateConfirmation(props) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.thanks}>Your food has been posted to the community</Text>
            <Text style={styles.thanks}>Thank you!</Text>
            <Image source={require('../assets/CheckMark.png')}/>
            <TouchableOpacity onPress={() => {props.navigation.navigate("Home")}}>
                <Text>Return to Home</Text>
            </TouchableOpacity>
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