import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function PlanetBox (props) {

    let description = props.info.description

    if(description.length > 100) {
        description = description.substring(0,100) + '...'
    }

    return (
        <View style={styles.box}>
            <View style={styles.topArea}>
                <View style={styles.planetImage}>
                    <Image 
                    source={{uri : props.info.img}}
                    style={styles.planet}
                    ></Image>
                </View>
                <View style={styles.planetInfo}>

                    <View style={styles.titleArea}>
                        <Text style={styles.title}>
                            {props.info.nome}
                        </Text>
                    </View>

                    <View style={styles.infoAboutPlanet}>

                        <View style={styles.itemInfoAboutPlanet}>
                            <Image source={{uri: "https://denison3965.github.io/Img-planet/galaxy.png"}} style={{width: 30, height:30}}></Image>
                            <Text style={styles.textIcons}>{props.info.galaxy}</Text>
                        </View>

                        <View style={styles.itemInfoAboutPlanet}>
                            <Image source={{uri: "https://denison3965.github.io/Img-planet/hot.png"}} style={{width: 30, height:30}}></Image>
                            <Text style={styles.textIcons}>{props.info.temp}</Text>
                        </View>

                        <View style={styles.itemInfoAboutPlanet}>
                            <Image source={{uri: "https://denison3965.github.io/Img-planet/gravidade.png"}} style={{width: 30, height:30}}></Image>
                            <Text style={styles.textIcons}>{props.info.gravity}</Text>
                        </View>

                    </View>
                </View>
            </View>
            <View style={styles.bottomArea}>
                <View style={styles.planetDescription}>
                    <Image source={{uri: "https://denison3965.github.io/Img-planet/info.png"}} style={{width: 27, height:27, marginLeft: 10}}></Image>
                    <Text style={styles.textDescription}>{description}  </Text>  
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 300,
        width: '100%',
        marginVertical:30,
        display: 'flex',
        flexDirection: 'column'
    },
    topArea: {
        flex:0.8,
        display: 'flex',
        flexDirection:'row'

    },
    bottomArea: {
        flex: 0.2,

    },
    planetImage: {
        width: '50%',
        height: '100%'
    },
    planetInfo: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '10%'

    },
    planet : {
        width: 200,
        height: 200,
        margin: 'auto ' 
    },
    bottomArea: {

    },
    planetDescription: {
        flexDirection: 'row',
        marginLeft: '10%'
    },
    infoAboutPlanet: {

        height: '80%',
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-around'
        
    },
    itemInfoAboutPlanet: {
        display: 'flex',
        flexDirection: 'row',
    },
    textIcons: {
        marginTop: 6, 
        marginLeft: 10, 
        width: '71%', 
        color: '#fff'
    },
    textDescription: {
        marginTop: 6, 
        marginLeft: 10, 
        width: 'auto', 
        color: '#fff'

    },
    title:{
        fontSize: 20,
        color: '#FFF'
    },
})