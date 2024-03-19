import {Animated, Dimensions, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Movie from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useRef} from 'react';
import MovieTicketUploader from '../MovieTicketUploader';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

export default function TicketUploaderTabScreen() {
  // AnimationBar
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="MovieTicketUploader"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            paddingBottom: 5,
            paddingTop: 5,
            paddingHorizontal: 20,
            height: 65,
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 10,
            androidShadow: {elevation: 200},
            tabBarItemStyle: {backgroundColor: 'red'},
          },
          tabBarActiveTintColor: '#1bc0f6',
          tabBarItemStyle: {borderRadius: 10, marginHorizontal: 10},
          tabBarLabelStyle: {fontSize: wp(3)},
        }}>
        <Tab.Screen
          name="Movie"
          component={MovieTicketUploader}
          options={{
            tabBarIcon: ({color}) => (
              <Movie name="movie-roll" size={30} color={color} />
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update..
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Sports"
          component={''}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="trophy" size={30} color={color} />
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update..
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Profile"
          component={''}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="user" size={30} color={color} />
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update..
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Tickets"
          component={''}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="ticket" size={30} color={color} />
            ),
          }}
          listeners={({navigation, route}) => ({
            // Onpress Update..
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 40,
          height: 4,
          backgroundColor: '#1bc0f6',
          position: 'absolute',
          bottom: 72,
          left: 48,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          transform: [{translateX: tabOffsetValue}],
        }}></Animated.View>
    </>
  );
}

function getWidth() {
  let width = Dimensions.get('window').width;
  // Horizontal Padding = 20...
  width = width - 60;
  return width / 4;
}

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#1bc0f6',
  },
});
