import { View, Text,Button } from "react-native"
import {useEffect,useState} from "react"
export default function Products() {
    const [count,setCount]=useState(1)
    useEffect(()=>{
        alert(`button pressed ${count}`);
        return ()=>{
            alert(`unmounted ${count}`)
        }
    },[count])
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Products</Text>
            <Button title={`count : ${count}` } onPress={()=>setCount(count+1)}/>
        </View>
    )
}