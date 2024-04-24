import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const handlePress = () => {
    // Функция, которая будет вызвана при нажатии на кнопку
    console.log('Кнопка нажата');
  };

const OpeningLayout = () => {
    return (
                <View style={styles.container}>
                    
                    <Image source={require('../source/image/gg.png')} style={styles.imageStyle}></Image>

                    <Text style={styles.text}>Добро пожаловать в <Text style={{color: 'yellow'}}>HOPES</Text></Text>

                    <View style={styles.ViewStyle}>
                        {/* Кнопка Войти */}
                        <TouchableOpacity style={styles.button_sign_in} onPress={(handlePress)}>
                            <Text style={styles.buttonText}>Войти</Text>
                        </TouchableOpacity>
                        {/* Кнопка Пропустить */}
                        <TouchableOpacity style={styles.button_skip} onPress={(handlePress)}>
                            <Text style={styles.buttonTextSkip}>Пропустить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    )
}

export default OpeningLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        height: '100%',
    },
    imageStyle: {
        height: '45%',
        resizeMode: 'contain',
    },
    text: {
        color: 'black',
        fontFamily: 'Ramona-Bold',
        fontSize: 26,
    },
    
    button_sign_in: {
        backgroundColor: '#FFB800',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: '30%',
        
    },
    button_skip: {
        borderColor: '#FFB800',
        borderWidth: 2,
        padding: 10,
        borderRadius: 8,
        marginTop: '5%',
    },

    buttonTextSkip: {
        color: 'black', 
        fontSize: 20, 
        textDecorationLine: 'underline',
        marginLeft: '30%',
        marginRight: '30%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        
    },
    ViewStyle: {
        
    }
})