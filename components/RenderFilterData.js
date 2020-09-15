import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const RenderFilterData = ({item = item.item, condition}) => {
  console.log('dsdsdsds', item);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        key={item.id}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
        }}
        onPress={() => condition(item)}>
        <Text style={{fontSize: 16}}>
          {item.category ? item.category : item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderFilterData;
