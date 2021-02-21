import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

/**
 * This is the screen that gets opened when pressing on a food item in Pickup.js
 * */

class FoodDetails extends Component {
    constructor() {
        super();
    }

    render() {
        <View style={styles.wrapper}>
            <View style={styles.innerView}>

            </View>
        </View>
    }
}

FoodDetails.propTypes = {
    data: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#73DC62',
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerView: {
        height: '90%',
        width: '90%',
    }


})