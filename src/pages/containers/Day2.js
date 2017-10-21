/**
 * Day 2
 * A weather app
 */
'use strict';

import React,{ Component } from 'react';
import {
	Platform,
	Image,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { className } from '../../css/common.js';
const weatherData = [{key:0,city:"\u798f\u5dde",night:!0,bg:require("../../img/w2.png"),abs:"\u5927\u90e8\u6674\u6717",degree:15,today:{week:"\u661f\u671f\u516d",day:"\u4eca\u5929",high:16,low:14},hours:[{key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},{key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},{key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},{key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},{key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},{key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},{key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},{key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},{key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},{key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},{key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}],days:[{key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},{key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},{key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},{key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},{key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},{key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},{key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},{key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},{key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}],info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",rise:"06:21",down:"18:06",prop:"10%",humi:"94%",dir:"\u4e1c\u5317\u504f\u5317",speed:"3\u5343\u7c73\uff0f\u5c0f\u65f6",feel:"15\xb0",rain:"0.0 \u5398\u7c73",pres:"1,016 \u767e\u5e15",sight:"5.0 \u516c\u91cc",uv:"0"},{key:1,city:"\u5361\u5c14\u52a0\u91cc",night:!1,bg:require("../../img/w3.png"),abs:"\u5927\u90e8\u6674\u6717",degree:15,today:{week:"\u661f\u671f\u516d",day:"\u4eca\u5929",high:16,low:14},hours:[{key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},{key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},{key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},{key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},{key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},{key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},{key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},{key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},{key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},{key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},{key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}],days:[{key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},{key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},{key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},{key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},{key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},{key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},{key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},{key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},{key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}],info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",rise:"06:21",down:"18:06",prop:"10%",humi:"94%",dir:"\u4e1c\u5317\u504f\u5317",speed:"3\u5343\u7c73\uff0f\u5c0f\u65f6",feel:"15\xb0",rain:"0.0 \u5398\u7c73",pres:"1,016 \u767e\u5e15",sight:"5.0 \u516c\u91cc",uv:"0"}];

class Weather extends Component{
	static propTypes = {
		back: React.PropTypes.func.isRequired,
	};
	constructor(props) {
		super(props);
		this.state = {
			weather: weatherData,
		}
	}
	_back() {
		this.props.back();
	}
	render() {
		const slides = this.state.weather.map((elem, index) => {
			const hourView = elem.hours.map((hourElem, hourIndex) => {
				return (
					<View key={hourElem.key} style={{width: 55}}>
						<Text style={hourIndex==0?{...className("g-f-c-white g-ta-c"), fontSize: 13, fontWeight: "500"}:{...className("g-f-c-white g-ta-c"), fontSize: 12}}>{hourElem.time}</Text>
						<Icon name={hourElem.icon} size={25} style={{...className("g-ta-c"), paddingTop: 5, color:hourElem.color}}/>
						<Text style={hourIndex==0?{...className("g-f-c-white g-fs-15 g-ta-c"), paddingTop: 5, fontWeight: "500"}:{...className("g-f-c-white g-fs-14 g-ta-c"), paddingTop: 5}}>{hourElem.degree}</Text>
					</View>
				);
			});
			const dayView = elem.days.map((dayElem, dayIndex) => {
				return (
					<View key={dayElem.key} style={{...className("g-fd-r"), height: 28}}>
						<View style={{...className("g-jc-c g-col")}}>
							<Text style={{...className("g-f-c-white g-fs-14"), paddingLeft: 20}}>{dayElem.day}</Text>
						</View>
						<View style={className("g-ai-c g-jc-c g-col")}>
							<Icon name={dayElem.icon} style={className("g-f-c-white")} size={25}/>
						</View>
						<View style={{...className("g-col g-fd-r g-ai-c g-jc-e"), paddingRight: 25}}>
							<Text style={{...className("g-f-c-white g-fs-16"), width: 35, textAlign: "right"}}>{dayElem.high}</Text>
							<Text style={elem.night?{...className("g-fs-16 g-ta-r"), width: 35, color: "#aaa"}:{...className("g-fs-16 g-ta-r"), width: 35, color: "#eee"}}>{dayElem.low}</Text>
						</View>
					</View>
				);
			});

			return (
				<View key={elem.key}>
					<Image source={elem.bg}/>
					<ScrollView style={{...className("g-bg-trans g-w-full g-m-v-20"), position: "absolute", height: "100%"}}  showsVerticalScrollIndicator={false}>
						<View style={{...className("g-ai-c"), paddingVertical: 65}}>
							<Text style={{...className("g-f-c-white g-fs-26 g-bg-trans"), paddingBottom: 5}}>{elem.city}</Text>
							<Text style={{...className("g-f-c-white g-bg-trans"), fontSize: 15}}>{elem.abs}</Text>
							<Text style={{...className("g-f-c-white"), fontSize: 85, fontWeight: "100"}}>{elem.degree}</Text>
							<Text style={styles.circle}>°</Text>
						</View>
						<View style={styles.withinDay}>
							<View style={className("g-fd-r g-w-full")}>
								<View style={{...className("g-col g-fd-r"), paddingLeft: 20}}>
									<Text style={{...className("g-f-c-white g-fs-14"), fontWeight: "400", width: 50}}>{elem.today.week}</Text>
									<Text style={{...className("g-f-c-white g-fs-14"), fontWeight: "300", width: 50}}>{elem.today.day}</Text>
								</View>
								<View style={{...className("g-col g-fd-r g-jc-e"), paddingRight: 10}}>
									<Text style={{...className("g-f-c-white g-fs-14"), fontWeight: "200", width: 30}}>{elem.today.high}</Text>
									<Text style={elem.night?{...className("g-fs-16"), color: "#aaa", fontWeight: "200", width: 30}:{...className("g-fs-16"), color: "#eee", fontWeight: "200", width: 30}}>{elem.today.low}</Text>
								</View>
							</View>
							<ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={styles.withinDayHoursContainer}> 
								<View style={styles.withinDayHours}>{hourView}</View>
							</ScrollView>
							<View style={{paddingTop: 5}}>{dayView}</View>
							<View style={styles.weatherInfo}>
								<Text style={className("g-f-c-white g-pd-v-20 g-pd-h-10 g-fs-14")}>{elem.info}</Text>
							</View>
							<View style={{paddingTop: 10}}>
								<View style={{paddingBottom: 10}}>
									<View style={className("g-fd-r")}>
										<Text style={{...className("g-f-c-white g-fs-14"), textAlign: "right", width: 172.5}}>日出：</Text>
										<Text style={{...className("g-col g-f-c-white g-fs-14"), paddingLeft: 15, width: 187.5}}>{elem.rise}</Text>
									</View>
									<View style={className("g-fd-r")}>
										<Text style={{...className("g-f-c-white g-fs-14"), textAlign: "right", width: 172.5}}>日落：</Text>
										<Text style={{...className("g-col g-f-c-white g-fs-14"), paddingLeft: 15, width: 187.5}}>{elem.down}</Text>
									</View>
								</View>
								<View style={{paddingBottom: 10}}>
									<View style={className("g-fd-r")}>
										<Text style={{...className("g-f-c-white g-fs-14"), textAlign: "right", width: 172.5}}>降雨概率：</Text>
										<Text style={{...className("g-col g-f-c-white g-fs-14"), paddingLeft: 15, width: 187.5}}>{elem.prop}</Text>
									</View>
									<View style={className("g-fd-r")}>
										<Text style={{...className("g-f-c-white g-fs-14"), textAlign: "right", width: 172.5}}>湿度：</Text>
										<Text style={{...className("g-col g-f-c-white g-fs-14"), paddingLeft: 15, width: 187.5}}>{elem.humi}</Text>
									</View>
								</View>
								<View style={{paddingBottom: 10}}>
									<View style={className("g-fd-r")}>
										<Text style={{...className("g-f-c-white g-fs-14"), textAlign: "right", width: 172.5}}>风速：</Text>
										<Text style={{...className("g-col g-f-c-white g-fs-14"), paddingLeft: 15, width: 187.5}}><Text style={{fontSize:10}}>{elem.dir}</Text>{elem.speed}</Text>
									</View>
									<View style={className("g-fd-r")}>
										<Text style={{...className("g-f-c-white g-fs-14"), textAlign: "right", width: 172.5}}>体感温度：</Text>
										<Text style={{...className("g-col g-f-c-white g-fs-14"), paddingLeft: 15, width: 187.5}}>{elem.feel}</Text>
									</View>
								</View>
								<View style={{paddingBottom: 10}}>
									<View style={className("g-fd-r")}>
										<Text style={{...className("g-f-c-white g-fs-14"), textAlign: "right", width: 172.5}}>降水量：</Text>
										<Text style={{...className("g-col g-f-c-white g-fs-14"), paddingLeft: 15, width: 187.5}}>{elem.rain}</Text>
									</View>
									<View style={className("g-fd-r")}>
										<Text style={{...className("g-f-c-white g-fs-14"), textAlign: "right", width: 172.5}}>气压：</Text>
										<Text style={{...className("g-col g-f-c-white g-fs-14"), paddingLeft: 15, width: 187.5}}>{elem.pres}</Text>
									</View>
								</View>
								<View style={{paddingBottom: 10}}>
									<View style={className("g-fd-r")}>
										<Text style={{...className("g-f-c-white g-fs-14"), textAlign: "right", width: 172.5}}>能见度：</Text>
										<Text style={{...className("g-col g-f-c-white g-fs-14"), paddingLeft: 15, width: 187.5}}>{elem.sight}</Text>
									</View>
									<View style={className("g-fd-r")}>
										<Text style={{...className("g-f-c-white g-fs-14"), textAlign: "right", width: 172.5}}>紫外线指数：</Text>
										<Text style={{...className("g-col g-f-c-white g-fs-14"), paddingLeft: 15, width: 187.5}}>{elem.uv}</Text>
									</View>
								</View>
							</View>
						</View>
					</ScrollView>
				</View>
			);
		});
		return (
			<View style={className("g-bg-light-blue")}>
				<Swiper 
					style={styles.wrapper} 
					showsButtons={false}
					paginationStyle={{bottom:10, paddingTop:10, borderTopColor:"rgba(255,255,255,0.7)",borderTopWidth:1}}
					dot={<View style={{backgroundColor: 'rgba(255,255,255,0.2)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
					activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.5)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
				>
					{slides}
				</Swiper>
				<TouchableHighlight onPress={()=>this._back()} style={styles.backBtn}>
					<Icon size={17} name="ios-list-outline" style={className("g-f-c-white")}/>
				</TouchableHighlight>
			</View>
		)
	}
}

export default class extends Component{
	_back() {
		this.props.navigator.pop();
		StatusBar.setBarStyle(0);
	}
	render() {
		return(
			<View>
				<Weather back={() => this._back()}></Weather>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	circle:{
		fontSize: 35,
		color: "#fff",
		fontWeight: "300",
		position: "absolute",
		top: 130,
		right: 132.5,
	},
	withinDayHoursContainer:{
		marginTop: 3,
		borderTopColor: "rgba(255,255,255,0.7)",
		borderTopWidth: 1,
		borderBottomColor: "rgba(255,255,255,0.7)",
		borderBottomWidth: 1
	},
	withinDayHours: {
		paddingLeft: 7,
		paddingRight: 10,
		paddingVertical: 10,
		flexDirection: "row",
		flexWrap: "nowrap"
	},
	weatherInfo: {
		marginTop: 5,
		borderTopColor: "rgba(255,255,255,0.7)",
		borderTopWidth: 1,
		borderBottomColor: "rgba(255,255,255,0.7)",
		borderBottomWidth: 1
	},
	backBtn: {
		position: "absolute", 
		right: 20,
		bottom: 7
	},
})