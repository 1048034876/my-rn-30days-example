import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DayMainPage from './src/pages/containers/DayMain';
import Day1Page from './src/pages/containers/Day1';
import Day2Page from './src/pages/containers/Day2';

export default StackNavigator({
	DayMain: {
		screen: DayMainPage,
	},
	Day1: {
		screen: Day1Page,
	},
	Day2: {
		screen: Day2Page,
	}
});