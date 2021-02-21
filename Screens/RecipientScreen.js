import { FAILSAFE_SCHEMA } from 'js-yaml';
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import TimeSelector from "../Components/TimeSelector"
import FoodTypeButton from "../Components/FoodTypeButton" 
class RecipientScreen extends Component {
    constructor() {
        super();
        
        this.state={
            items: [],
            TimeSelectorVisible: false,
            ConfirmationVisible: false,
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
                
                
                <Text style={styles.foodTypeText}>Food Type</Text>
                <FoodTypeButton foodType="Produce" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Frozen" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Canned Goods" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Other" changeCallback={this.changeCallback}/>
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
    },
    
    foodTypeText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        marginTop: '5%',
    },

    // time: {
    //     color: 'black',
    //     textAlign: 'center',
    //     fontSize: 30,
    // }
});

export default RecipientScreen;