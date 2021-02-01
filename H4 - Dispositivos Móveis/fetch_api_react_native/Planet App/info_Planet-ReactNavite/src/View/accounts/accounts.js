import React from 'react';
import {Text, View,StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native';

export default function Acconts() {
    return (
        <SafeAreaView>
            <StatusBar barStyle = "light-content" />
        <View style={styles.container}>

        <Text style={styles.title}>
            Contatos
        </Text>

        <Text style={{width: 370, height: 75, marginTop: 10 ,marginBottom: 20, backgroundColor: 'powderblue', textAlign: 'center', lineHeight: 75, fontSize: 20}}>
            Guilherme Mendes
        </Text>
        
        <Text style={{width: 370, height: 75, marginBottom: 20, backgroundColor: 'powderblue',textAlign: 'center', lineHeight: 75, fontSize: 20}}>
            Ana Gomes
        </Text>

        <Text style={{width: 370, height: 75, marginBottom: 20, backgroundColor: 'powderblue',textAlign: 'center', lineHeight: 75, fontSize: 20}}>
            Felipe Braga
        </Text>

        <Text style={{width: 370, height: 75, marginBottom: 20, backgroundColor: 'powderblue',textAlign: 'center', lineHeight: 75, fontSize: 20}}>
            Caio Daniel
        </Text>

        <Text style={{width: 370, height: 75, marginBottom: 20, backgroundColor: 'powderblue',textAlign: 'center', lineHeight: 75, fontSize: 20}}>
            Jason Volney
        </Text>

        <Text style={{width: 370, height: 75, marginBottom: 20, backgroundColor: 'powderblue',textAlign: 'center', lineHeight: 75, fontSize: 20}}>
            Denison Portela
        </Text>

      </View>
      </SafeAreaView>

    );
  }
 

  const styles = StyleSheet.create({
    title:{
        color: '#52989E',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container:{
        flex: 1,
        width: '100%',
        padding: 20,
        alignItems: 'center',
        alignItems: 'stretch',
        backgroundColor: '#3B3B40'
    },
  });