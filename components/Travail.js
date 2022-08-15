import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default Travail = () => {
    return(
        <View style={styles.container}>
            <Text> Ecran travail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})