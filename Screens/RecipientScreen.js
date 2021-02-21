import { FAILSAFE_SCHEMA } from 'js-yaml';
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import TimeSelector from "../Components/TimeSelector"
 
class RecipientScreen extends Component {
    constructor() {
        super();
        
        this.state={
            TimeSelectorVisible: false,
            ConfirmationVisible: false,
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => this.setState({ TimeSelectorVisible: true, ConfirmationVisible: true})}><Text>Select Time To receive food</Text></TouchableOpacity>
            {this.state.TimeSelectorVisible && <TimeSelector/>}
            <TouchableOpacity onPress={() => this.setState({ ConfirmationVisible: true })}><Text>Confirm</Text></TouchableOpacity>
            {this.state.ConfirmationVisible && this.state.TimeSelectorVisible}
            {/* <Text style={styles.time}>1:00</Text>
            <Text style={styles.time}>2:00</Text> */}
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

    // time: {
    //     color: 'black',
    //     textAlign: 'center',
    //     fontSize: 30,
    // }
});

export default RecipientScreen;