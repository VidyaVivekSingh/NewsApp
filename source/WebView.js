import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Webview from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

export default class WebView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.navigation.setOptions({title: this.props.route.params.title});
  }
  backPress = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };
  render() {
    const Header = () => (
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
              this.props.navigation.goBack();
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
    const {route} = this.props;

    const url = route.params.url;
    const title = route.params.title;
    return (
      <View style={{flex: 1}}>
        <Header />
        {/* <Header title={title} nav={this.props.navigation} backPress={this.backPress} /> */}
        <Webview source={{uri: url}} />
      </View>
    );
  }
}
