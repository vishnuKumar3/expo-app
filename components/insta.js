import {ScrollView,View,StyleSheet,Text,Button,Image,Platform,Dimensions,TouchableOpacity, TextInput} from "react-native"
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useState } from "react";
export default function Insta(){
    const [name,setName] = useState("")
    return(<>
    
        <ScrollView style={styles.post}>
            <TextInput style={{border:"1px solid black",width:"200px"}} placeholder="enter name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <View style={{display:"flex",alignItems:"flex-start"}}>
            <Text style={styles.title}>Ind vs WI</Text>
            <View style={Platform.OS.toLowerCase()==="web"?styles.cardWeb:styles.cardMobile}>
                <Image style={Platform.OS.toLowerCase()=="web"?{width:"100%",height:"100%",borderRadius:"10px",resizeMode:"contain"}:{width:"100%",height:400,borderRadius:10,resizeMode:"contain"}} source={require("../assets/post.jpg")}/>
            </View>
            <View style={styles.bottomIcons}>
                <View style={{display:"flex",flexDirection:"row"}}>
                    <TouchableOpacity style={{marginLeft:10}}>
                        <AntDesign name="hearto" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:10}}>
                        <FontAwesome name="comment-o" size={24} color="black" />
                    </TouchableOpacity>
                </View> 
                <TouchableOpacity>
                    <Feather name="send" size={24} color="black"/>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    </>)
}

const styles=StyleSheet.create({
    title:{
        fontWeight:"bold",
        marginLeft:10
    },
    post:{
        display:"flex",
        border:"1px solid red",

    },
    cardMobile:{
        borderColor:"#0003",
        borderWidth:1,
        paddingTop:10,  
        marginRight:10,
        marginLeft:10,
        paddingRight:10,
        paddingLeft:10,        
        width:"95%",
        marginTop:10,
        paddingBottom:10,
        borderRadius:10
    },
    cardWeb:{
        border:"1px solid #0005",
        marginTop:"10px",
        borderRadius:"10px",      
        paddingTop:"10px",
        paddingBottom:"10px",
        paddingLeft:"5px",
        paddingRight:"5px",  
        width:300,
        height:300,
    },
    bottomIcons:{
        width:Platform.OS.toLowerCase()=="web"?300:Dimensions.get("window").width-20,
        paddingTop:2,
        paddingBottom:2,
        display:"flex",
        flexDirection:"row",
        alignItems:'flex-start',
        justifyContent:"space-between",
        paddingLeft:2,
        paddingRight:2
    }            
    
})