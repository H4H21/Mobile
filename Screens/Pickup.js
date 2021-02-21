import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import FoodItem from "../Components/FoodItem";

import { connect } from 'react-redux';

class Pickup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropOffs: [],
            ready: false,
        }
        this.apiKey = "SRVWUJjjR1Yeiztz_s3jxRVkEVEdbnEC6v4Mr_ktKI0";
    }

    async getDropoffsWithinDistance(dist) {
        console.log("Calling getDropoffsWithinDistance with distance "+dist);
        let resp = await fetch("https://warm-coast-75820.herokuapp.com/api/get-items-within-dist", {method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({lat: this.props.origin.lat, lng: this.props.origin.lng, dist: dist})})
        let respjson = await resp.json();
        console.log("respjson: ");
        console.dir(respjson);
        this.setState({dropOffs: respjson});
    }

    async componentDidMount() {
        await this.getDropoffsWithinDistance(this.props.foodRadius)
            .then(() => {this.getDropoffsWithSameFoodCategories();})
    }

    getDropoffsWithSameFoodCategories() {
        console.log("Getting dropoffs with same food categories");
        const ret = [];
        for (let i = 0; i < this.state.dropOffs.length; ++i) {
            let dropOffCategories = this.state.dropOffs[i].data.food_category;
            const common = dropOffCategories.filter(value => this.props.foodCategories.includes(value));
            if (common.length > 0) {
                ret.push(this.state.dropOffs[i]);
            }
        }
        this.setState({dropOffs: ret, ready: true});
    }


    render() {
        console.log(`this.state.dropOffs.length: ${this.state.dropOffs.length}`);

        if (this.state.dropOffs.length >= 5 && this.state.ready) {
            return (
                <View style={styles.wrapper}>
                    <Text style={styles.findFood}>Find Food</Text>
                    <FoodItem data={this.state.dropOffs[0]} origin={this.props.origin} navigation={this.props.navigation}/>
                    <FoodItem data={this.state.dropOffs[1]} origin={this.props.origin} navigation={this.props.navigation}/>
                    <FoodItem data={this.state.dropOffs[2]} origin={this.props.origin} navigation={this.props.navigation}/>
                    <FoodItem data={this.state.dropOffs[3]} origin={this.props.origin} navigation={this.props.navigation}/>
                    <FoodItem data={this.state.dropOffs[4]} origin={this.props.origin} navigation={this.props.navigation}/>
                </View>
            );
        }

        else if (this.state.dropOffs.length >= 3 && this.state.ready) {
            return (
                <View style={styles.wrapper}>
                    <Text style={styles.findFood}>Find Food</Text>
                    <FoodItem data={this.state.dropOffs[0]} origin={this.props.origin} navigation={this.props.navigation}/>
                    <FoodItem data={this.state.dropOffs[1]} origin={this.props.origin} navigation={this.props.navigation}/>
                    <FoodItem data={this.state.dropOffs[2]} origin={this.props.origin} navigation={this.props.navigation}/>
                </View>
            );
        }
        else if (this.state.dropOffs.length === 1 && this.state.ready) {
            return (
                <View style={styles.wrapper}>
                    <Text style={styles.findFood}>Find Food</Text>
                    <FoodItem data={this.state.dropOffs[0]} origin={this.props.origin} navigation={this.props.navigation}/>
                </View>
            );
        }

        else if (this.state.ready) {
            return (
                <View style={styles.wrapper}>
                    <Text style={styles.findFood}>Sorry, no items were found with the specified parameters. Try widening your search.</Text>
                </View>
            );
        }

        else {
            return (
                <View>
                    <Text style={{marginTop: '50%', textAlign: 'center'}}>Loading...</Text>
                </View>
            );
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

    findFood: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '10%',
    }
});

const mapStateToProps = state => ({
    foodRadius: state.foodRadius,
    origin: state.userCoords,
    foodCategories: state.foodCategories,

})

export default connect(mapStateToProps)(Pickup);