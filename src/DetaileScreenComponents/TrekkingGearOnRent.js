import { View, Text, StyleSheet,Image } from "react-native";


export default function TrekkingGearOnRent() {

    const items = [
      
        {
            tittle:"Treking \n Shoes",
            productL:"3+ Products",
            image: require("../../Images/itemcontainer/boot.png")
   
           },
           {
            tittle:"Trekking\njackets",
            productL:"10+ Products",
            image: require("../../Images/itemcontainer/yellowcout.png")
           },
           {
            tittle:"Trek \n Accessories ",
            productL:"11+ Products",
            image: require("../../Images/itemcontainer/many.png")
           },
           {
            tittle:"Treking \n Backpacks",
            productL:"4+ Products",
            image: require("../../Images/itemcontainer/kit.png")
           },
    ]


    return (
        <View style={Styles.maincontainer}>
            <View style={Styles.heading}>
                <Text style={Styles.headingText}>Trekking Gear On Rent</Text>
            </View>
            <View style={Styles.box}>
           {
            items.map((item,index)=>(
                <View key={index} style={Styles.Subcontainer}>
                    <View style={Styles.itemcontainer}>
                        <View style={Styles.tittlecontainer}>
                        <Text style={Styles.itemtext}>
                            {item.tittle}
                            </Text>
                        <View style={Styles.productscontainer}>
                            <Text style={{color:"grey"}}>{item.productL}</Text>
                             </View>
                        </View>
                        </View>
                        <View style={Styles.itemcontainer1}>
                         <Image style={Styles.Image} source={item.image}>

                         </Image>
                        </View>
                    
                </View>

            ))
           }
           </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    maincontainer: {
        height:950,
        width:"100%",
      alignItems:'center',
      
    },
    Subcontainer:{
        height:200,
        width:"70%",
        marginVertical:"2%",
        flexDirection:"row",
        elevation: 9,
        shadowColor: '#52006A',
        backgroundColor:"white"
    },
    heading:{
        height:"7%",
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    headingText:{
        fontSize:22,
        fontWeight:"500"
    },
    box:{
        flex:1,
        
    },
    itemcontainer:{
        width:"65%",
        height:"100%",
    
    
    },
    itemcontainer1:{
        
        flex:1,
        backgroundColor:"rgb(215,223,35)",
        alignItems:"center",
        flexDirection:'row'
    },
    tittlecontainer:{
        height:"70%",
        width:140,
       
        alignSelf:"center",
        margin:"7%",
        justifyContent:"space-between"
    },
    itemtext:{
        fontSize:20,
        fontWeight:"600"
    },
    productscontainer:{
        height:25,
        width:100,
        borderWidth:1,
        borderRadius:10,
        borderColor:"grey",
        alignItems:"center",
        justifyContent:"center"
        
    },
    Image:{
        height:"80%",
        width:"100%",
        resizeMode:"stretch",
        right:"25%"
    }
})