import { FAILSAFE_SCHEMA } from 'js-yaml';
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class RecipientScreen extends Component {
    constructor() {
        super();
        
        this.state={
            TimeSelectorVisible: false,
            
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
               
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
        marginTop: '10%',
    },

    textStyles: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    }
});

export default RecipientScreen;