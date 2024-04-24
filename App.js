import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="pluto" component={pluto} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
      }
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 230,
    marginBottom: -30,
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'left', // Alinha o texto à esquerda
    marginRight: 270, // Adiciona um pequeno espaço à esquerda
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'left', // Alinha o texto à esquerda
    marginRight: 230, // Adiciona um pequeno espaço à esquerda
  },

  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'justify',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  line: {
    width: '90%',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  galleryText: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginRight: 295,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  galleryImage: {
    width: 150,
    height: 150,
    marginHorizontal: 15,
    borderRadius: 20,
  },
});
