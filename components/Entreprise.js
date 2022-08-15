import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import axios from 'axios';


const baseUrl = 'http://192.168.0.103:3000';
const Entreprise = () => {

   
    const [nom, setNom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [tauxHoraire, setTauxHoraire] = useState("");

    
    const submitData = () => {
        fetch(`${baseUrl}/employes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                nom: nom,
                adresse: adresse,
                tauxHoraire: parseInt(tauxHoraire)
            })
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
        })
        setNom('');
        setAdresse('');
        setTauxHoraire('')
    }
    

    return(
        <View style={styles.container}>
            
            <View>
                <TextInput 
                    placeholder="Nom"
                    value={nom}
                    onChangeText={nom => setNom(nom)}
                />
                <TextInput 
                    placeholder="Adresse"
                    value={adresse}
                    onChangeText={adresse => setAdresse(adresse)}
                />
                <TextInput 
                    placeholder="Taux Horaire"
                    value={tauxHoraire}
                    onChangeText={tauxHoraire => setTauxHoraire(tauxHoraire)}
                />
                <Button 
                    title="Submit"
                    onPress={submitData}
                />
            </View>

            
            
            
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

export default Entreprise