import { View, Text, Image, StyleSheet, ScrollView,Pressable } from 'react-native'
import React from 'react'
import Menu from "./image/menu.png";
import Glass from "./image/glass.png";
import Bag from "./image/bag.png";
import Bag1 from "./image/bag2.png";
import House from "./image/house.png";
import Bus from "./image/bus1.png";
import Movie from "./image/video.png";
import Card from "./image/card.png";
import Umb from "./image/umb1.png";
import Paymoney from "./image/paymoney.png";
import Toll from "./image/toll.png";
import Down from "./image/down.png";
import Gas from "./image/gas.png";
import Calendar from "./image/calendar.png";
import Mobile from "./image/mobile.png";
import Wifi from "./image/wifi.png";
import One from "./image/one.png";
import Two from "./image/two.png";
import Three from "./image/three.png";
import Four from "./image/four.png";
import Five from "./image/five.png";

export default function Paytmui(props) {
  return (
    <View style={{flex:1}}>
    <View style={styles.topbar}>
        <View style={styles.leftbartop}>
        <Image source={Menu} style={styles.menulogo}/>
        <Text style={styles.textpaytm}>Pay</Text>
        <Text style={styles.textpaytm2}>tm</Text>
        </View>
        <View style={styles.rightbartop}>
        <Image source={Glass} style={styles.glasslogo}/>
        <Image source={Bag} style={styles.baglogo}/>
        </View>
    </View>
    <View  style={{flex:1}}>
        
    <ScrollView>
      
      <View style={styles.Featuredsection}>
          <Text style={styles.featuredtect}>Featured</Text>

          <View style={styles.featuredrow1}>

            <View style={styles.monthbills}>
                <Image source={House} style={styles.bag1logo}/>
                <Text style={styles.bagtext}>Monthly Bills</Text>
            </View>
            <View style={styles.monthbills}>
                <Image source={Bag1} style={styles.bag1logo}/>
                <Text style={styles.bagtext}>Online Shopping</Text>
            </View>
            <View style={styles.monthbills}>
                <Image source={Bus} style={styles.bag1logo}/>
                <Text style={styles.bagtext}>Bus{"\n"}Tickets</Text>
            </View>
            <View style={styles.monthbills}>
                <Image source={Movie} style={styles.bag1logo}/>
                <Text style={styles.bagtext}>Movie Tickets</Text>
            </View>
          </View>
          
          <View style={styles.featuredrow2}>

            <View style={styles.monthbills}>
                <Image source={Card} style={styles.bag1logo}/>
                <Text style={styles.bagtext}>Paytm Credit Card</Text>
            </View>
            <View style={styles.monthbills}>
                <Image source={Umb} style={styles.bag1logo}/>
                <Text style={styles.bagtext}>Insurance Quotes</Text>
            </View>
            <View style={styles.monthbills}>
                <Image source={Paymoney} style={styles.bag1logo}/>
                <Text style={styles.bagtext}>Paytm Money</Text>
            </View>
            <View style={styles.monthbills}>
                <Image source={Toll} style={styles.bag1logo}/>
                <Text style={styles.bagtext}>Buy{"\n"}FASTag</Text>
            </View>
          </View>
          <Pressable>
          <View style={styles.seeallbutton}>
            <Text style={styles.seeall}>See All</Text>
            <Image style={styles.downarrow} source={Down}></Image>
          </View>
          </Pressable>
          
      </View>
      <View style={styles.recommsection}>
          <Text style={styles.recommtext}>Recommended</Text>

          <View style={styles.recomrow1}>

            <View style={styles.recommoption}>
                <Text style={styles.recomtext1}>Book Your Gas Cylinder</Text>
                <Image source={Gas} style={styles.recomlogo}/>
            </View>
            <View style={styles.recommoption2}>
                <Text style={styles.recomtext}>Online{"\n"}Shopping</Text>
                <Image source={Calendar} style={styles.recomlogo}/>
            </View>
          </View>
          <View style={styles.recomrow2}>

            <View style={styles.recommoption}>
                <Text style={styles.recomtext1}>Recharge your Mobile</Text>
                <Image source={Mobile} style={styles.recomlogo}/>
            </View>
            <View style={styles.recommoption2}>
                <Text style={styles.recomtext}>Pay your Broadband Bill</Text>
                <Image source={Wifi} style={styles.recomlogo}/>
            </View>
          </View>

          
      </View>
      <View style={styles.recommsection}>
          <Text style={styles.recommtext}>Shop on Mall</Text>
          <ScrollView horizontal={true} style={styles.shoponmallcontent} >
          
            <Pressable onPress={() => props.navigation.navigate("One")}>
              <View style={styles.shopitemview}>
              <Image source={One} style={styles.shoplogo}/>
                <Text style={styles.shopext}>Mobile & Gadgets</Text>
              </View>
              </Pressable>
              <View style={styles.shopitemview}>
              <Image source={Two} style={styles.shoplogo}/>
                <Text style={styles.shopext}>Men's Fashion</Text>
              </View>
              <View style={styles.shopitemview}>
              <Image source={Three} style={styles.shoplogo}/>
                <Text style={styles.shopext}>Storage Device</Text>
              </View>
              <View style={styles.shopitemview}>
              <Image source={Four} style={styles.shoplogo}/>
                <Text style={styles.shopext}>Makeup Product</Text>
              </View>
              <View style={styles.shopitemview}>
              <Image source={Five} style={styles.shoplogo}/>
                <Text style={styles.shopext}>Home Decoration</Text>
              </View>
          </ScrollView>
        </View>
    </ScrollView>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    menulogo: {
        height: 30,
        width: 30,
    },
    glasslogo:{
        height: 30,
        width: 30, 
        marginRight: 21
    },
    baglogo:{
        height: 30,
        width: 30, 
        marginRight: 12
    },
    textpaytm:{
        fontSize:25,
        marginLeft: 30,
        color: "#042f6c",
        fontWeight:"900"
    },
    textpaytm2:{
        fontSize:25,
        color: "#14b1ec",
        fontWeight:"900"
    },
    topbar:{
        backgroundColor:"white", 
        flexDirection:"row",
        padding:13,
        justifyContent: "space-between"
    },
    leftbartop:{
        backgroundColor:"white", 
        flexDirection:"row",
    },
    rightbartop:{
        backgroundColor:"white", 
        flexDirection:"row",
        
    },
    Featuredsection:{
        height: "auto",
        backgroundColor:"#d5deeb",
        margin: 15,
        borderRadius: 10
    },
    recommsection:{
        height: "auto",
        margin: 25,
        borderRadius: 10
    },

    featuredtect:{
        color: "#1e1e1f",
        paddingLeft: 20,
        paddingTop: 15,
        fontWeight:"bold",
        fontSize: 22
    },
    recommtext:{
        color: "#1e1e1f",
        fontWeight:"bold",
        fontSize: 22
    },
    bag1logo: {
        height: 40,
        width: 40,
    },
    shoplogo: {
        height: 50,
        width: 50,
    },
    bagtext:{
        color:"#38383c",
        fontSize: 15,
        marginTop:9,
        textAlign:"center",
        fontWeight: "490"
    },
    shopext:{
        color:"#38383c",
        fontSize: 15,
        marginTop:9,
        fontWeight: "490",
        width: 90,
        justifyContent: 'center',
        textAlign:'center'
    },
    recomlogo: {
        height: 30,
        width:30,
        
    },
    recomtext:{
        color:"#38383c",
        fontSize: 15,
        marginTop:9,
        flex:1,
        textAlign:"left",
        fontWeight: "490"
    },
    recomtext1:{
        color:"#38383c",
        fontSize: 15,
        marginTop:9,
        flex:1,
        textAlign:"left",
        fontWeight: "490",
        
    },
    featuredrow1:{
        flexDirection:"row",
        flexWrap: "wrap",
        marginTop: 18
    },
    recomrow1:{
        flexDirection:"row",
        flexWrap: "wrap",
        padding: 15,
        flex:1,
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 2,
    },
    recomrow2:{
        flexDirection:"row",
        flexWrap: "wrap",
        padding: 15,
        
    },
    featuredrow2:{
        flexDirection:"row",
        flexWrap: "wrap",
        marginTop: 18,
        marginBottom: 20
    },
    monthbills:{
        flex: 1,
        alignItems: "center",
        padding:4
    },
    recommoption:{
        flex: 1,
        alignItems: "center",
        padding:10,
        flexDirection: "row",
        borderRightColor: "#e1e1e1",
        borderRightWidth: 2
    },
    recommoption2:{
        flex: 1,
        alignItems: "center",
        padding:10,
        flexDirection: "row",

    },
    seeall:{
        color:"#8ea1ac",
        textAlign:"center",
        
    },
    seeallbutton:{
        width: 90,
        backgroundColor: "white",
        padding:13,
        alignSelf:"center",
        marginBottom: 20,
        flexDirection: "row",
        borderRadius: 50
    },
    downarrow:{
        height: 15,
        width: 15,
        marginTop:3,
        marginLeft: 5
    },
    shoponmallcontent:{
        marginTop: 20,
    },
    shopitemview:{
        width: 90, 
        alignItems:'center'
    },
  });