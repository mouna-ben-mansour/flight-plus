import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackActions } from '@react-navigation/native';

class HOME extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightsData: [
        { id: '1', flightNumber: 'AF 7651', status: 'D: 20 minutes' },
        { id: '2', flightNumber: 'AF 7652', status: 'D: 20 minutes' },
        { id: '3', flightNumber: 'AF 7653', status: 'D: 20 minutes' },
        { id: '4', flightNumber: 'AF 7654', status: 'D: 20 minutes' },

        // ... add more flights as needed
      ],
    };
  }

  componentDidMount() {
    //SplashScreen.hide();
  }

  deleteFlight = (id) => {
    this.setState(prevState => ({
      flightsData: prevState.flightsData.filter(flight => flight.id !== id)
    }));
  }

  renderFlightItem = ({ item }) => (
    <View style={styles.flightItem}>
      <View style={styles.flightInfo}>
        <Icon name="flight-takeoff" size={24} color="#fff" />
        <Text style={styles.flightText}>{item.flightNumber}</Text>
        <Text style={styles.flightText}>{item.status}</Text>
      </View>
      <TouchableOpacity onPress={() => this.deleteFlight(item.id)} style={styles.deleteButton}>
        <Icon name="delete" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Bonjour Hugues.</Text>
        </View>
        <View style={{margin: '5%', width: '90%', height: 200, backgroundColor: '#003366'}}>

        </View>
        <FlatList
          data={this.state.flightsData}
          renderItem={this.renderFlightItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => this.props.navigation.dispatch(StackActions.replace('PlanningScreen'))}>
            <Icon name="event" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="home" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="flight-takeoff" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="person" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061A40', // Adjust the background color to match the design
  },
  header: {
    padding: 15,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003366'
  },
  greeting: {
    color: 'white',
    fontSize: 15,
  },
  logo: {
    width: 50,
    height: 50,
    // Add the image styles
  },
  listContainer: {
    padding: 20,
  },
  flightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#003366',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  flightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flightText: {
    marginLeft: 10,
    color: 'white',
  },
  deleteButton: {
    // Style for the delete button if needed
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#003366',
  },
  // Add additional styles for the bottom navigation items
});

export default HOME;
