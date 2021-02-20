import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { setUserType } from "../actions";

class InitialScreen extends Component {
    constructor() {
        super();
        this.setUserType = this.setUserType.bind(this);
    }

    setUserType(userType) {
        if (userType === "Donor") {
            this.props.dispatch(setUserType("Donor"));
        }
        else if (userType === "Recipient") {
            this.props.dispatch(setUserType("Recipient"));
        }
        else {
            console.error(`Invalid user type pushed: userType = ${userType}`);
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.donorButton} onPress={() => this.setUserType("Donor")}>
                    <Text style={styles.textStyles}>Donor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.receiverButton} onPress={() => this.setUserType("Recipient")}>
                    <Text style={styles.textStyles}>Recipient</Text>
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
        marginTop: '10%',
    },

    textStyles: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    }
});

const mapStateToProps = state => ({
    userType: state.userType,
})
export default connect(mapStateToProps)(InitialScreen);