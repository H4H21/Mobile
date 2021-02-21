import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

/**
 * This is the screen that gets opened when pressing on a food item in Pickup.js
 * */
class FoodDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        let {data} = this.props.route.params;
        this.setState({data: data});
    }

    render() {
        if (this.state.data) {
            return (
                <View style={styles.wrapper}>
                    <View style={styles.innerView}>
                        <Text style={styles.header}>Food Categories</Text>
                        <Text style={styles.subtext}>{this.state.data.data.food_category.join(', ')}</Text>
                        <Text style={styles.header}>Description</Text>
                        <Text style={styles.subtext}>{this.state.data.data.food_desc}</Text>
                        <Text style={styles.header}>Availability</Text>
                        <Text style={styles.subtext}>{this.state.data.data.time_available_start} - {this.state.data.data.time_available_end}</Text>
                        <Text style={styles.header}>Location</Text>
                        <Text style={styles.subtext}>{this.state.data.data.location}</Text>
                            <View style={styles.mapWrapper}>
                                <MapView
                                    initialRegion={{
                                        latitude: this.state.data.lat,
                                        longitude: this.state.data.lng,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                    style={{height: '100%', width: '100%'}}
                                >
                                    <Marker coordinate={{latitude: this.state.data.lat, longitude: this.state.data.lng}}/>
                                </MapView>
                            </View>
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={styles.wrapper}>
                    <Text>Loading...</Text>
                </View>
            )
        }
    }
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
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',

    },

    header: {
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: '10%',
    },

    subtext: {
        marginTop: '5%',
        color: '#696969',
        fontSize: 14,
        fontWeight: 'bold',
    },

    mapWrapper: {
        height: '30%',
        width: '80%',

    }



});

export default FoodDetails;