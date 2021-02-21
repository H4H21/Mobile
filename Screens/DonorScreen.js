import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

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
            inputText: "",
        }
        this.changeCallback = this.changeCallback.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        //this.inputSubmitHandler = this.inputSubmitHandler.bind(this);
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

    inputChangeHandler(text) {
        console.log(`text: ${text}`);
        this.setState({inputText: text});
    }


    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.donateFood}>Donate Food</Text>

                <Text style={styles.foodDescription}>Food Description</Text>

                <TextInput
                    editable
                    maxLength={40}
                    onSubmitEditing={this.inputSubmitHandler}
                    style={styles.textInput}
                    placeholder="( Text Here )"
                    placeholderTextColor="#73DC62"
                    onChangeText={this.inputChangeHandler}

                />

                <Text style={styles.foodTypeText}>Food Type</Text>

                <FoodTypeButton foodType="Produce" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Frozen" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Canned Goods" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Other" changeCallback={this.changeCallback}/>

                <Text style={styles.availabilityText}>Availability for Pickup</Text>



            </View>
        );
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

    foodDescription: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        marginTop: '5%',
    },

    textInput: {
        marginTop: '5%',
        backgroundColor: 'white',
        height: '12%',
        width: '90%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

    availabilityText: {
        color: 'white',
        fontSize: 24,
        marginTop: '5%',

    }
});

export default DonorScreen;