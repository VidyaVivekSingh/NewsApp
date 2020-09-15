import React from 'react';
import {SafeAreaView, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const NoData = () => {
  return (
    <SafeAreaView>
      <SkeletonPlaceholder>
        <View style={styles}></View>
        <View style={styles}></View>
        <View style={styles}></View>
        <View style={styles}></View>
      </SkeletonPlaceholder>
    </SafeAreaView>
  );
};
const styles = {
  borderWidth: 1,
  height: 180,
  width: null,
  elevation: 5,
  overflow: 'hidden',
  borderRadius: 15,
  borderColor: 'transparent',
  shadowOffset: {width: 4, height: 4},
  shadowColor: '#90a4ae',
  margin: 10,
};
export default NoData;
