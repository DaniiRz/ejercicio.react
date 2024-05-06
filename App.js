import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Input from './components/Input';
import Boton from './components/Boton';


export default function App() {

  //escribir codigo Js
  //State de la aplicación
  const [num1, setNumero1] = useState(0)
  const [num2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  //hacer que se sumen dos numeros

  const suma = () => {
    let sumatoria = (parseFloat(num1) + parseFloat(num2));
    setResultado(sumatoria);
  }

  //hacer que se resten dos numeros
  const resta = () => {
    let restar = (parseFloat(num1) - parseFloat(num2));
    setResultado(restar);
  }

  //hacer que se multipliquen dos numeros
  const multiplicar = () => {
    let multiplicacion = (parseFloat(num1) * parseFloat(num2));
    setResultado(multiplicacion);
  }

  //hacer que se dividan dos numeros 
  const dividir = () => {
    let division = (parseFloat(num1) / parseFloat(num2));
    setResultado(division)
  }


  const limpiar = () => {
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }

  return (
    <View style={styles.container}>
      <Text style={
        {
          color: 'black',
          fontSize: 35,
          margin: 20
        }
      }>Calculadora</Text>

      <Input
        title_placeholder='Ingrese el primer número: '
        numero={num1}
        setNumero={setNumero1}
      />

      <Input
        title_placeholder='Ingrese el segundo número: '
        numero={num2}
        setNumero={setNumero2}
      />

      <Boton
        title_button={'Sumar'}
        action_button={suma} />

      <Boton
        title_button={'Restar'}
        action_button={resta} />

      <Boton
        title_button={'Dividir'}
        action_button  ={dividir} />

      <Boton
        title_button={'Multiplicar'}
        action_button={multiplicar} />


      <Text style={{ color: 'grey', fontSize: 25 }}>Resultado: {resultado}</Text>

      <Boton
        title_button={'Reset'}
        action_button={limpiar} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 