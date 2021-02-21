import { FAILSAFE_SCHEMA } from 'js-yaml';
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import TimeSelector from "../Components/TimeSelector"
import FoodTypeButton from "../Components/FoodTypeButton" 
import RadiusButton from "../Components/RadiusButton" 
import RNPickerSelect from 'react-native-picker-select';

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
                <Text style={styles.receiveFood}>Receive Food</Text>

                <Text style={styles.foodTypeText}>Food Type</Text>
                <FoodTypeButton foodType="Produce" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Frozen" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Canned Goods" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Other" changeCallback={this.changeCallback}/>

                <RadiusButton Radius="0-5" changeCallback={this.changeCallback} />
                <RadiusButton Radius="5-10" changeCallback={this.changeCallback} />
                <RadiusButton Radius="10-20" changeCallback={this.changeCallback} />
                <RadiusButton Radius="20+" changeCallback={this.changeCallback} />

                {/* <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: '0-5', value: '5' },
                        { label: '5-10', value: '10' },
                        { label: '10-20', value: '20' },
                        { label: '20+', value: '20' },
                    ]}
                /> */}

                <Text style={styles.timeText}>When can you pick up or receive food?</Text>
                <TimeSelector></TimeSelector>


                <TouchableOpacity onPress={() => this.setState({ ConfirmationVisible: true })}><Text style={styles.confirmText}>Confirm</Text></TouchableOpacity>
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
        //justifyContent: 'center',
        backgroundColor: '#73DC62',
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

    receiveFood: {
        color: 'white',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: '10%',
        //position: 'absolute',
    },

     timeText: {
         color: 'white',
         textAlign: 'center',
         fontSize: 24,
     },

     confirmText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
     },
});

export default RecipientScreen;