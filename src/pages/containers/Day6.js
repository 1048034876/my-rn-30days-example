/**
 * Day 6
 * spotify welcome screen
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    Image,
    ScrollView,
    Dimensions
    TouchableHighlight
} from 'react-native';
import Video from 'react-native-video';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;

class Intro extends Component {
    render() {
        return (
            <View style={{...className("g-ps-a"), top: 0, left: 0, buttom: 0, right: 0}}>
                <View style={{...className("g-ai-c g-ps-a g-w-full g-fd-r g-jc-c"), top: 50, left: 0}}>
                    <View style={className("g-bg-trans g-pd-r-5 g-m-t-5")}>
                        <Icon name="spotify" size={60} color="#fff" />
                    <View>
                    <View style={className("g-bg-trans")}>
                        <Text style={{...className("g-f-c-white g-ta-l g-bg-trans"), fontSize: 35, fontWeight: "700"}}>Spotify</Text>
                    </View>
                </View>
                <View style={{...className("g-ps-a g-w-full"), bottom: 70, left: 0}}>
                    <Swiper
                        height={dimensionHeight - 200}
                        showsButtons={false}
                        autoplay={false}
                        dot={
                            <View style={{...className("g-circle"), backgroundColor: 'rgba(255, 255, 255, 0.2', width: 6, height: 6, margin: 3}} />
                        }
                        activeDot={
                            <View style={{...className("g-circle"), backgroundColor: 'rgba(255, 255, 255, 1', width: 6, height: 6, margin: 3}} />
                        }
                    >
                        <View style={{...clasName("g-col g-jc-fe g-ai-c"), height: dimensionHeight - 200, paddingBottom: 50}}>
                            <Text style={{...className("g-f-c-white g-ta-c"), fontWeight: "700"}}>Welcome</Text>
                            <Text style={className("g-f-c-white g-ta-c")}>Sign up for free music on your phone,tablet</Text>
                            <Text style={className("g-f-c-white g-ta-c")}>and computer.</Text>
                        </View>
                    </Swiper>
                </View>
            </View>
        )
    }
}