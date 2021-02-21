import { FAILSAFE_SCHEMA } from 'js-yaml';
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import { Button, Title } from 'react-native-paper';
import TimeSelector from "../Components/TimeSelector"
import FoodTypeButton from "../Components/FoodTypeButton" 
import RadiusButton from "../Components/RadiusButton" 
// import SelectBox from 'react-native-multi-selectbox'
// import { xorBy } from 'lodash'
import DropDown from '../Components/DropDown';
import DateSelector from '../Components/DateSelector';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Ionicons } from '../node_modules/@expo/vector-icons'
// import MultiSelect from 'react-native-multiple-select';

class RecipientScreen extends Component {
    constructor() {
        super();
        
        this.state={
            items: [],
            selectedTeams: [],
            setSelectedTeams: false,
            timeSelectorVisible: false,
            ConfirmationVisible: false,
            foodRadius: undefined,
        }
        this.selectTime = this.selectTime.bind(this);
        this.changeCallback = this.changeCallback.bind(this);
        this.submit = this.submit.bind(this);
        this.getStartTime = this.getStartTime.bind(this);
        this.getEndTime = this.getEndTime.bind(this);
    }

    getStartTime(timeFormatted) {
        console.log(`start time: ${timeFormatted}`);
        this.setState({ startTime: timeFormatted });
    }

    getEndTime(timeFormatted) {
        console.log(`end time formatted: ${timeFormatted}`);
        this.setState({ endTime: timeFormatted });
    }

    selectTime() {
        this.setState({ timeSelectorVisible: true });
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

    submit() {
        //this.submitToBackend(this.props.userAddress, this.state.startTime, this.state.endTime, this.state.items, this.state.inputText);
        this.setState({ timeSelectorVisible: false });
        this.props.navigation.navigate("DonateConfirmation");
    }
    
    render() {
        // const [selectedTeam, setSelectedTeam] = useState({})
        // const [selectedTeams, setSelectedTeams] = useState([])

        // let firstYear = 1970;
        // let years = new Array(40).fill({ label: null }).map((item, id) => {
        //     return { label: id + firstYear, key: id }
        // });

        // let days = new Array(30).fill({ label: null }).map((item, id) => {
        //     return { label: id + 1, key: id }
        // });

        // let months = new Array(12).fill({ label: null }).map((item, id) => {
        //     return { label: id + 1, key: id }
        // });


        // const data = [days, months, years];
        // const label = ['Day', 'Month', 'Year'];

        // const { selectedValue } = this.state;

        const placeholder = {
            label: 'Select a distance...',
            value: null,
            color: 'white'
        };

        return (
            <View style={styles.wrapper}>
                <Text style={styles.receiveFood}>Receive Food</Text>

                <Text style={styles.foodTypeText}>Food Type</Text>
                <FoodTypeButton foodType="Produce" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Frozen" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Canned Goods" changeCallback={this.changeCallback}/>
                <FoodTypeButton foodType="Other" changeCallback={this.changeCallback}/>
                
                <Text style={styles.distanceText}>What is the furthest you are willing to travel to receive your food?</Text>
                {/* <DropDown></DropDown> */}
                {/* <View style={{ margin: 30 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, paddingBottom: 20 }}>Demos</Text>
                    </View>
                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
                    <SelectBox
                        label="Select single"
                        options={K_OPTIONS}
                        value={selectedTeam}
                        onChange={onChange()}
                        hideInputFilter={false}
                    />
                    <View style={{ height: 40 }} />
                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
                    <SelectBox
                        label="Select multiple"
                        options={K_OPTIONS}
                        selectedValues={selectedTeams}
                        onMultiSelect={onMultiChange()}
                        onTapClose={onMultiChange()}
                        isMulti
                    />
                </View> */}

                {/* <RadiusButton Radius="5 miles" changeCallback={this.changeCallback} />
                <RadiusButton Radius="10 miles" changeCallback={this.changeCallback} />
                <RadiusButton Radius="20 miles" changeCallback={this.changeCallback} />
                <RadiusButton Radius="20+ miles" changeCallback={this.changeCallback} /> */}
                

                {/* <MultipleSelectPicker
                    data={data}
                    onChange={(option) => {
                        console.log(option);
                        this.setState({ selectedValue: option })
                    }}
                    label={label}


                >
                    <Text>{'Please Select!'}</Text>

                </MultipleSelectPicker> 
                <Text>{selectedValue && selectedValue.length && days[selectedValue[0]].label}</Text>
                <Text>{selectedValue && selectedValue.length && months[selectedValue[1]].label}</Text>
                <Text>{selectedValue && selectedValue.length && years[selectedValue[2]].label}</Text> */}

                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    
                    // placeholder={[{
                    //     label: 'Select a distance...',
                    //     value: null,
                    //     color: 'white', 
                    //     }]
                    // }

                    placeholder={placeholder}

                    items={[
                        { label: '0-5 miles', value: '5' },
                        { label: '5-10 miles', value: '10' },
                        { label: '10-20 miles', value: '20' },
                        { label: '20+ miles', value: '21' },
                    ]}
                    style={{
                        ...pickerSelectStyles,
                        iconContainer: {
                            top: 10,
                            right: 12,
                        },
                    }}
                    value={this.state.foodRadius}
                    Icon={() => {
                        return <Ionicons name="md-arrow-down" size={24} color="black" />;
                    }}
                />

                <Text style={styles.distanceText}>When can you pick up or receive food?</Text>
                <DateSelector></DateSelector>
                <TouchableOpacity style={{ width: '90%', height: '10%' }} onPress={this.selectTime}>
                    <Text style={styles.availabilityText}>Availability for Pickup</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.timeSelectorVisible}
                    onRequestClose={() => {
                        //this.setModalVisible(!modalVisible);
                        this.setState({ timeSelectorVisible: false });
                    }}
                >
                    <View style={styles.timeSelectionModal}>
                        <TimeSelector getTimeCallback={this.getStartTime} buttonText="Start Time" />
                        <TimeSelector getTimeCallback={this.getEndTime} buttonText={"End Time"} />
                        <TouchableOpacity style={styles.closeModalButton} onPress={() => { this.setState({ timeSelectorVisible: false }) }}>
                            <Text style={styles.closeModalText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <TouchableOpacity style={styles.submitButton} onPress={this.submit}>
                    <Text style={styles.submitText}>Confirm</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => this.setState({ ConfirmationVisible: true })}><Text style={styles.confirmText}>Confirm</Text></TouchableOpacity>
                {this.state.ConfirmationVisible && this.state.TimeSelectorVisible} */}
                {/* <Text style={styles.time}>1:00</Text>
                <Text style={styles.time}>2:00</Text> */}
            </View>
        )
    }
}

function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
}

function onChange() {
    return (val) => setSelectedTeam(val)
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

    timeSelectionModal: {
        height: '25%',
        width: '50%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: '50%',
        alignItems: 'center',

    },

    receiveFood: {
        color: 'white',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: '10%',
        //position: 'absolute',
    },

     distanceText: {
         color: 'white',
         textAlign: 'center',
         fontSize: 24,
     },

     confirmText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
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

    availabilityText: {
        color: 'white',
        fontSize: 24,
        marginTop: '5%',
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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 20,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 4,
      color: 'white',
      paddingRight: 15, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 20,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'green',
      borderRadius: 8,
      color: 'white',
      paddingRight: 15, // to ensure the text is never behind the icon
    },
  });


export default RecipientScreen;