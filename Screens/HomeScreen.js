import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { setUserType } from "../actions";

class HomeScreen extends Component {
    constructor() {
        super();
        this.setUserType = this.setUserType.bind(this);
    }

    setUserType(userType) {
        if (userType === "Donor") {
            this.props.dispatch(setUserType("Donor"));
            this.props.navigation.navigate("DonorScreen");
        }
        else if (userType === "Recipient") {
            this.props.dispatch(setUserType("Recipient"));
            this.props.navigation.navigate("RecipientScreen");
        }
        else {
            console.error(`Invalid user type pushed: userType = ${userType}`);
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={{fontSize: 50, color: 'white', position: 'absolute', top: '10%',}}>FoodCycle</Text>
                <Text style={{color: 'white', fontSize: 20, textAlign: 'center', marginBottom: '5%'}}>Would you like to...</Text>
                <TouchableOpacity style={styles.optionButton} onPress={() => this.setUserType("Donor")}>
                    <Text style={styles.textStyles}>Donate Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={() => this.setUserType("Recipient")}>
                    <Text style={styles.textStyles}>Find Food</Text>
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
        backgroundColor: '#73DC62',
    },

    optionButton: {
        height: '10%',
        width: '75%',
        backgroundColor: 'white',
        color: 'white',
        justifyContent: 'center',
        marginBottom: '10%',
    },

    textStyles: {
        color: '#73DC62',
        textAlign: 'center',
        fontSize: 30,
    }
});

const mapStateToProps = state => ({
    userType: state.userType,
})
export default connect(mapStateToProps)(HomeScreen);