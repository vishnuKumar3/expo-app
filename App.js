import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, FlatList, Platform, Alert, Button } from 'react-native';
import Company from './components/company';
import Insta from './components/insta';
import Home from './components/home';
import Products from './components/products';
import Profile from './components/profile';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

const companyData = [
  {
    name: "Google",
    image: require("./assets/company1.jpg"),
    data: `Google LLC is an American multinational
    technology company focusing on artificial intelligence, 
    online advertising, search engine technology, cloud computing,
     computer software, quantum computing, e-commerce, 
     and consumer electronics.`
  },
  {
    name: "Google",
    image: require("./assets/company1.jpg"),
    data: `Google LLC is an American multinational
    technology company focusing on artificial intelligence, 
    online advertising, search engine technology, cloud computing,
     computer software, quantum computing, e-commerce, 
     and consumer electronics.`
  }
]

const data = [{ name: "usa", rank: 1, id: 1 }, { name: "india", rank: 2, id: 2 }]


const Stack=createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="products" component={Products}/>
        <Stack.Screen name="profile" component={Profile}/>
        <Stack.Screen name="insta" component={Insta}/>
      </Stack.Navigator>
   {/* <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text>{Platform.OS}</Text>
        <Company companyData={companyData} />
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{"hello " + JSON.stringify(item)}</Text>}
          keyExtractor={(item) => item.id}
        />
        <Button title='alert button' onPress={() => {
          Platform.OS.toLowerCase() === "web" ? alert("hello") :
            Alert.alert("Heading", "title", [
              { text: "set", onPress: () => { Alert.alert("ok") } },
              { text: "set1", onPress: () => { Alert.alert("ok") } },
              { text: "set2", onPress: () => { Alert.alert("ok") } }
            ])
        }} />
      </ScrollView>
      </SafeAreaView>*/}
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0003",
    marginTop: StatusBar.currentHeight,
    flex: 1
  },
});
