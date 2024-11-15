import { View, Text,Button } from "react-native"
import React from "react";
import SmsReader from "react-native-sms-reader";
export default function Home(props) {

    useEffect(() => {
        startReadSMS();
    
        return () => SmsReader.stopReadSMS();
      }, [])

    const startReadSMS = async () => {
        const hasPermission = await SmsReader.requestReadSMSPermission();
        if (hasPermission) {
          SmsReader.startReadSMS((status, sms, error) => {
            if (status == "success") {
              console.log("Great!! you have received new sms:", sms);
            }
          });
        }
      }   

    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Home</Text>
            <Button title="products" onPress={()=>{props.navigation.navigate("products")}}/>
            <Button title="insta" onPress={()=>props.navigation.navigate("insta")}/>
        </View>
    )
}