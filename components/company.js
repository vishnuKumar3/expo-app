import {View,Text,Image,StyleSheet} from "react-native"

const Company=(props)=>{
    const companyData=props.companyData
    return (
        <View>
            {companyData.map((company)=>{
                return (
                    <View>
                    <Image style={styles.companyImage} source={company.image}/>
                    <Text style={styles.companyTitle}>{company.name}</Text>
                    <Text>{company.data}</Text>
                    </View>
                );
            })}
    </View>
    )
}

const styles=StyleSheet.create({
    companyImage:{
        width:300,
        height:300
    },
    companyTitle:{
        fontSize:30,
        fontWeight:"bold"
    }
})

export default Company