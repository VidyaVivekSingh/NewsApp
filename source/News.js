import React, {PureComponent} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FloatingAction} from 'react-native-floating-action';
import RenderItem from '../components/RenderCard';
import Nodata from '../components/NoData';
import {SearchBar} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import Data from './static.json';
import RenderFilterData from '../components/RenderFilterData';

const actions = [
  {
    text: 'Search',
    icon: (
      <Icon
        name="search-web"
        size={30}
        style={{
          alignSelf: 'center',
        }}
      />
    ),
    name: 'bt_search',
    position: 1,
  },
  {
    text: 'Country',
    icon: (
      <Icon
        name="filter-variant"
        size={30}
        style={{
          alignSelf: 'center',
        }}
      />
    ),
    //'filter-variant',
    name: 'bt_country',
    position: 2,
  },
  {
    text: 'Category',
    icon: (
      <Icon
        name="sort"
        size={30}
        style={{
          alignSelf: 'center',
        }}
      />
    ),
    name: 'bt_category',
    position: 3,
  },
];

const topHeadlineUrl = `https://newsapi.org/v2/top-headlines?country=${
  this.state.countryCode
}&category=${this.state.category}&apiKey=${Data.apiKey}`;

const everythingUrl = `https://newsapi.org/v2/everything?q=${
  this.state.search
}&apiKey=${Data.apiKey}`;

class componentName extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      showSearchBar: false,
      search: '',
      country: 'India',
      category: 'General',
      countryCode: 'in',
      about: '',
      fromDate: '',
      toDate: '',
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    Keyboard.dismiss(); // to remove the keyboard
    // const url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.state.countryCode
    // }&category=${this.state.category}&apiKey=${Data.apiKey}`;
    await fetch(topHeadlineUrl, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson', responseJson);
        this.setState({data: responseJson.articles}, () =>
          this.setState({refreshing: false, showSearchBar: false}),
        );
      })
      .catch(err => console.log('err', err));
  };
  refreshData = () => {
    console.log('ref');
    this.setState({refreshing: false});
  };
  pressed = (title, url) => {
    this.props.navigation.navigate('WebView', {
      title,
      url,
    });
  };
  updateSearch = search => {
    this.setState({search});
    if (search === '') this.fetchData();
    else {
      // const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=e9ed76ff6496462b8096d1e4b3178434`;
      fetch(everythingUrl, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(responseJson =>
          this.setState({data: responseJson.articles}, () =>
            this.setState({refreshing: false, showSearchBar: false}),
          ),
        )
        .catch(err => console.log('err', err));
    }
  };
  condition = async data => {
    console.log('aya');
    if (data.name) {
      await this.setState({countryCode: data.code, country: data.name});
      this.Country.close();
    } else if (data.category) {
      await this.setState({category: data.category});
      this.Category.close();
    }
    this.fetchData();
  };

  onButtonPress = button => {
    if (button === 'bt_search') {
      this.setState({
        showSearchBar: true,
      });
    } else if (button === 'bt_country') {
      this.Country.open();
    } else if (button === 'bt_category') {
      this.Category.open();
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.showSearchBar ? (
          <SearchBar
            style={{flex: 1}}
            lightTheme
            icon={{type: 'font-awesome', name: 'search'}}
            placeholder="Search Here..."
            onChangeText={this.updateSearch}
            onClear={this.fetchData}
            value={this.state.search}
          />
        ) : null}

        <View style={{flex: 11}}>
          <RBSheet
            ref={ref => {
              this.Country = ref;
            }}
            closeOnDragDown
            customStyles={{
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}
            height={330}>
            <FlatList
              data={Data.country}
              renderItem={({item}) => (
                <RenderFilterData item={item} condition={this.condition} />
              )}
            />
          </RBSheet>
          <RBSheet
            ref={ref => {
              this.Country = ref;
            }}
            closeOnDragDown
            customStyles={{
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}
            height={330}>
            <FlatList
              data={Data.country}
              renderItem={({item}) => (
                <RenderFilterData item={item} condition={this.condition} />
              )}
            />
          </RBSheet>
          <RBSheet
            ref={ref => {
              this.Category = ref;
            }}
            closeOnDragDown
            customStyles={{
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}
            height={330}>
            <FlatList
              data={Data.category}
              renderItem={({item}) => (
                <RenderFilterData item={item} condition={this.condition} />
              )}
            />
          </RBSheet>
          {/* <StatusBar
          backgroundColor="transparent"
          hidden={true}
          translucent={true}
          barStyle="light-content"
        /> */}
          {this.state.data != 'undefined' && this.state.data.length > 0 ? (
            <FlatList
              data={this.state.data}
              renderItem={({item}) => (
                <RenderItem item={item} pressed={this.pressed} />
              )}
              keyExtractor={(item, index) => index.toString()}
              refreshing={this.state.refreshing}
              onRefresh={this.refreshData}
            />
          ) : (
            <Nodata />
          )}
        </View>
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
            this.onButtonPress(name);
          }}
        />
      </View>
    );
  }
}

export default componentName;
