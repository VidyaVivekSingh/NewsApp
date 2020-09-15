import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Header = ({title, backPress}) => {
  return (
    <View
      style={{
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor: '#0c084c',
        flexDirection: 'row',
      }}>
      <View
        style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={
            {
              //   backgroundColor:'white'
            }
          }
          onPress={() => {
            backPress();
          }}>
          <Icon name="md-arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
