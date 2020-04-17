import  React,{useState,useEffect} from 'react'
import { useNavigation} from '@react-navigation/native'
import {View,FlatList,Image,Text, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import logoimg from '../../assets/logo.png'
import styles from './styles'
import api from '../../services/api'

export default function Incidents(){

    const [incidents,setIncidents] = useState([])
    const [total,setTotal] = useState(0)
    const [page,setPage] = useState(1)
    const [loading,setLoading] =useState(false)
    const navigation = useNavigation()


    function navigateToDetail(incident){
        navigation.navigate('Detail',{incident})
    }

    
    async function loadIncidents(){
        if(loading){
            return
        }

        if(total > 0 && incidents.length == total){
            return 
        }

        setLoading(true)
        
        const response = await api.get('incidents',{
            params:{
                page
            }
        })

        setIncidents([...incidents, ...response.data])
        setTotal(response.headers['x-total-count'])
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(()=>{
        loadIncidents()
    },[])

    return(
        <View style ={styles.container}>
            <View style={styles.header}>
                <Image source={logoimg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            
            
            <FlatList
                style={styles.incidentsList}
                data={incidents}//quandidade de vezes para renderizar
                keyExtractor={incident => String(incident.id)}
                // showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.3}
                renderItem = {({item:incident}) => (
                    <View style = {styles.incident}>
                    <Text style={styles.incidentProperty}>Ong :</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>Caso :</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>Valor :</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-Br',{style:'currency',currency:'BRL'}).format(incident.value)}</Text>

                    <TouchableOpacity style={styles.detailsButton} 
                    onPress={() =>navigateToDetail(incident)}>
                        
                    <Text style = {styles.detailButtonText}>Ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color='#E02041'></Feather>
                    </TouchableOpacity>
                </View>


                )}
            />

        </View>

    )
}