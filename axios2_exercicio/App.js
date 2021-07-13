import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, Text, View, Image, ActivityIndicator, StyleSheet, Header, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';



const Passageiros = () => {
  const [passageiros, setPassageiros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);



  useEffect(() => {

    getPassageiros()

  }, [])
  getPassageiros = async () => {
    setLoading(true)
    await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .then((response) => {
        setLoading(true)
        console.log(response.data)
        setPassageiros([...passageiros, ...response.data.data]);
        setPage(page + 1)
        setLoading(false)
      }).catch(function (error) {
        console.log(error);
      })
  }

  renderFooter = () => {
    if (!loading) return null;
    return (
      <View >
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  };

  return (
    <SafeAreaView>
      
      <FlatList
        onEndReached={getPassageiros}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        style={{
          marginTop: 30,
          marginBottom: 30
        }}
        data={passageiros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <ScrollView>
              <Card containerStyle={{
                justifyContent: 'center', backgroundColor: '#00BCD4', alignItems: 'center', marginBottom: 20
              }}>
                <Card.Title>Dados</Card.Title>
                <Card.Divider />
                <Card.Image source={{
                  uri: item.airline.logo
                }} style={{
                  display: 'flex',
                  width: 50,
                  height: 50,
                  resizeMode: 'stretch',


                }} ></Card.Image>

                <Text>Nome: {item.name}</Text>
                <Text>Qtde. Viagens: {item.trips}</Text>
                <Text>Cia. AÃ©rea: {item.airline.name}</Text>


              </Card>
            </ScrollView>
          )
        }}
      />
    
    </SafeAreaView>


  );

};

export default Passageiros

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: 'blue'
  },
});