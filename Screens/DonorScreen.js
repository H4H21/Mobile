import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import FoodTypeButton from "../Components/FoodTypeButton";

/**
 * Non-perishables
 * Produce
 * Frozen
 * Canned Goods
 * Other
 *
 * Also add Food Description, with a textinput
 * */


class DonorScreen extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        }
        this.changeCallback = this.changeCallback.bind(this);
    }

    changeCallback(foodType) {
        if (!this.state.items.includes(foodType)) {
            //this.state.items.push(foodType);
            this.setState({items: [...this.state.items, foodType]});
        }
        else {
            console.log("changeCallback");
            const index = this.state.items.indexOf(foodType);
            //this.state.items.splice(index, 1); // delete exactly one value
            let newItems = this.state.items.filter(item => item !== foodType);
            this.setState({items: newItems});
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.donateFood}>Donate Food</Text>

                <Text style={styles.foodTypeText}>Food Type</Text>

                <FoodTypeButton foodType="Produce" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Frozen" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Canned Goods" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Other" changeCallback={this.changeCallback}/>
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
        //justifyContent: 'center',
        backgroundColor: '#73DC62',
    },

    donateFood: {
        color: 'white',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: '10%',
        //position: 'absolute',
    },

    foodTypeText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        marginTop: '5%',
    },

    textStyles: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    }
});

export default DonorScreen;