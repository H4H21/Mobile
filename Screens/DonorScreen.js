import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';

import { connect } from 'react-redux';

import FoodTypeButton from "../Components/FoodTypeButton";
import TimeSelector from "../Components/TimeSelector";

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
            timeSelectorVisible: false,
            startTime: null,
            endTime: null,
        }
        this.changeCallback = this.changeCallback.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.submit = this.submit.bind(this);
        this.selectAvailability = this.selectAvailability.bind(this);
        this.getStartTime = this.getStartTime.bind(this);
        this.getEndTime = this.getEndTime.bind(this);
    }

    changeCallback(foodType) {
        if (!this.state.items.includes(foodType)) {
            this.setState({items: [...this.state.items, foodType]});
        }
        else {
            console.log("changeCallback");
            //const index = this.state.items.indexOf(foodType);
            let newItems = this.state.items.filter(item => item !== foodType);
            this.setState({items: newItems});
        }
    }

    inputChangeHandler(text) {
        console.log(`text: ${text}`);
        this.setState({inputText: text});
    }

    async submitToBackend(location, time_available_start, time_available_end, food_category, food_desc) {
        const obj = {location: location, time_available_start: time_available_start, time_available_end: time_available_end, food_category: food_category, food_desc: food_desc};
        let resp = await fetch("https://warm-coast-75820.herokuapp.com/api/add-item", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        });

    }

    selectAvailability() {
        this.setState({timeSelectorVisible: true});
    }

    submit() {
        //this.submitToBackend(this.props.userAddress, this.state.startTime, this.state.endTime, this.state.items, this.state.inputText);
        this.setState({timeSelectorVisible: false});
        this.props.navigation.navigate("DonateConfirmation");
    }

    getStartTime(timeFormatted) {
        console.log(`start time: ${timeFormatted}`);
        this.setState({startTime: timeFormatted});
    }

    getEndTime(timeFormatted) {
        console.log(`end time formatted: ${timeFormatted}`);
        this.setState({endTime: timeFormatted});
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.donateFood}>Donate Food</Text>

                <Text style={styles.foodDescription}>Food Description</Text>

                <TextInput
                    editable
                    maxLength={40}
                    style={styles.textInput}
                    placeholder="( Text Here )"
                    placeholderTextColor="#73DC62"
                    onChangeText={this.inputChangeHandler}

                />

                <Text style={styles.foodTypeText}>Food Type</Text>

                <FoodTypeButton foodType="Produce" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Frozen" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Non-Perishables" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Other" changeCallback={this.changeCallback}/>

                <TouchableOpacity style={{width: '90%', height: '10%'}} onPress={this.selectAvailability}>
                    <Text style={styles.availabilityText}>Availability to Donate</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitButton} onPress={this.submit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.timeSelectorVisible}
                    onRequestClose={() => {
                        //this.setModalVisible(!modalVisible);
                        this.setState({timeSelectorVisible: false});
                    }}
                >
                    <View style={styles.timeSelectionModal}>
                        <TimeSelector getTimeCallback={this.getStartTime} buttonText="Start Time"/>
                        <TimeSelector getTimeCallback={this.getEndTime} buttonText={"End Time"}/>
                        <TouchableOpacity style={styles.closeModalButton} onPress={() => {this.setState({timeSelectorVisible: false})}}>
                            <Text style={styles.closeModalText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

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
        textAlign: 'center',

    },

    timeSelectionModal: {
        height: '30%',
        width: '50%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: '50%',
        alignItems: 'center',

    },

    closeModalButton: {
        height: '20%',
        width: '90%',
        backgroundColor: '#73DC62',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: '10%',
        marginTop: '10%',
    },

    closeModalText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },

    submitButton: {
        borderRadius: 30,
        height: '10%',
        width: '90%',
        justifyContent: 'center',
        backgroundColor: 'blue',

    },

    submitText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

const mapStateToProps = state => ({
    userName: state.userName,
    userAddress: state.userAddress,
})

export default connect(mapStateToProps)(DonorScreen);