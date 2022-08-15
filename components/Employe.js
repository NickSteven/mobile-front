import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native'

export default Employe = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])

    const getEmployes = async () => {
        try {
            const response = await fetch('http://192.168.0.103:3000/employes');
            const json = await response.json();
            setData(json);
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => getEmployes(), 5000);
        return () => {
            clearInterval(interval)
        }
        //getEmployes();
    }, []); 

    return(
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList 
                    data={data}
                    keyExtractor={({ numEmploye }, index) => numEmploye}
                    renderItem={({ item }) => (
                        <View style={styles.main_container}>
                            <Image
                                style={styles.image}
                                source={{uri: "image"}}
                            />
                            <View style={styles.content_container}>
                                <View style={styles.header_container}>
                                    <View style={{ flexDirection: "row" }}><Text style={styles.nom}>Nom: </Text><Text style={styles.nom_content} >{item.nom}</Text></View>
                                    <View style={{ flexDirection: "row" }}><Text style={styles.adresse}>Adresse: </Text><Text style={styles.adresse_content}>{item.adresse}</Text></View>
                                    <View style={{ flexDirection: "row" }}><Text style={styles.taux_horaire}>Taux horaire: </Text><Text style={styles.taux_horaire_content}>{item.tauxHoraire}</Text></View>
                                </View>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        backgroundColor: "#DEACF5",
        height: 50,
        width: 50,
        borderRadius: 50,
        marginTop: 15
    },
    main_container: {
        height: 85,
        flexDirection: "row",
        padding: 5
    },
    content_container: {
        flex: 2,
        margin: 1,
        flexDirection: "row"
    },
    header_container: {
        flex: 3,
        flexDirection: "column",
        paddingLeft: 10
    },
    nom: {
        flex: 0,
        fontSize: 20,
        fontWeight: 'bold'
    },
    adresse: {
        flex: 0,
        fontSize: 20,
        fontWeight: 'bold'
    },
    taux_horaire: {
        flex: 0,
        fontSize: 20,
        fontWeight: 'bold'
    },
    nom_content: {
        flex: 0,
        fontSize: 20
    },
    adresse_content: {
        flex: 0,
        fontSize: 20
    },
    taux_horaire_content: {
        flex: 0,
        fontSize: 20
    },


})