import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
const RenderCard = ({item, pressed}) => {
  return (
    <ImageBackground
      source={{uri: item.urlToImage}}
      style={styles.ImageBackground}>
      <TouchableOpacity
        onPress={() => {
          pressed(item.title, item.url);
        }}
        style={{
          backgroundColor: 'rgba(0,0,0,.5)',
          flex: 1,
        }}>
        <Text style={[styles.textStyle, {padding: 20}]}>{item.title}</Text>
        <View style={{flex: 0.25, flexDirection: 'row', padding: 10}}>
          <Text style={styles.textStyle}>{item.source.name}</Text>
          <Text
            style={[
              styles.textStyle,
              {justifyContent: 'center', alignItems: 'center'},
            ]}>
            {moment(`${item.publishedAt}`).format('MMMM Do YYYY h:mm')}
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    borderWidth: 1,
    height: 180,
    width: null,
    elevation: 5,
    overflow: 'hidden',
    borderWidth: 0.15,
    backgroundColor: 'rgba(0,0,0,.6)',
    //   backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'transparent',
    shadowOffset: {width: 4, height: 4},
    shadowColor: '#90a4ae',
    margin: 10,
    justifyContent: 'center',
  },
  textStyle: {color: 'white', fontSize: 20, flex: 1},
});
export default RenderCard;
