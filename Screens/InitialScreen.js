import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class InitialScreen extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.donorButton}>
                    <Text style={styles.textStyles}>Donor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.receiverButton}>
                    <Text style={styles.textStyles}>Receiver</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },

    donorButton: {
        height: '20%',
        width: '75%',
        color: 'green',
        backgroundColor: 'green',
        justifyContent: 'center',
    },

    receiverButton: {
        height: '20%',
        width: '75%',
        color: 'blue',
        backgroundColor: 'blue',
        justifyContent: 'center',
    },

    textStyles: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    }
});

export default InitialScreen;