import React, { Component } from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class FoodItem extends Component {
    constructor() {
        super();
    }

    getDistanceFromLatLonInMiles(lat1, lon1, lat2, lon2) {
        let R = 6371; // Radius of the earth in km
        let dLat = this.deg2rad(lat2-lat1);  // deg2rad below
        let dLon = this.deg2rad(lon2-lon1);
        let a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        let d = R * c; // Distance in km
        return d * 0.621371;
    }



    deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    render() {
        const dist = this.getDistanceFromLatLonInMiles(this.props.origin.lat, this.props.origin.lng, this.props.data.lat, this.props.data.lng)
        console.log(`dist: ${dist}`);
        return (
            <View style={styles.wrapper}>
                <Image source={require('../assets/foodcans.jpg')} />
                <TouchableOpacity style={styles.centerTextView} onPress={() => {this.props.navigation.navigate("FoodDetails", {data: this.props.data})}}>
                    <Text style={styles.description}>{this.props.data.data.food_desc}</Text>
                </TouchableOpacity>
                <Text style={styles.distance}>{dist} mi</Text>
            </View>
        );
    }
}

FoodItem.propTypes = {
    data: PropTypes.object.isRequired,
    origin: PropTypes.object.isRequired,
    navigation: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: '5%',
        height: '15%',
        width: '90%',
        backgroundColor: '#DDDDDD',
        flexDirection: 'row',
        alignItems: 'center',
    },

    centerTextView: {
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '2%',
        marginRight: '2%',
    },


    rightTextView: {
        height: '100%',
        width: '25%',
    },

    description: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },

    distance: {
        color: 'gray',
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default FoodItem;