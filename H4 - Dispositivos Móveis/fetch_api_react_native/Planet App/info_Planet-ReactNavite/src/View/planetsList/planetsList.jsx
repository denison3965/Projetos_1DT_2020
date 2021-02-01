import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView, ImageBackground} from 'react-native'
import { color } from 'react-native-reanimated'
import axios from 'axios'

import PlanetBox from '../../components/planetBox'

export default function planetsList () {

    const [planets, setPlanets] = useState([])
    console.log(planets)

    useEffect(() => {
        axios.get('http://localhost:3001/planet/')
            .then((res) => {
                setPlanets(res.data)
            })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
           {/* <Image source={{uri: "https://denison3965.github.io/Img-planet/stars.png"}} style={styles.bcStars}></Image> */}
           <ImageBackground
           source={{uri: "https://denison3965.github.io/Img-planet/stars.png"}}
           style={{flex: 1, resizeMode: "cover", width: '100%'}}
           >
                <View style={styles.containerInter}>
                    <ScrollView style={styles.planets}>
                        
                        {planets.map((planet) => {
                            return <PlanetBox key={planet.id} info={planet} />
                        })}

                    </ScrollView>
                </View>
           </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black'

    },
    containerInter: {
        flex: 1,
    },
    planets: {
        flex:1,
        marginHorizontal: 5,
        flexDirection: 'column'
    }
})