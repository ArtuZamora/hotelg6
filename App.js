import { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Modal, Button, TouchableHighlight, FlatList } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [modalBienvenida, setModalBienvenida] = useState(false)
  const [modalh1, setModalh1] = useState(false)
  const [modalh2, setModalh2] = useState(false)
  const [modalh3, setModalh3] = useState(false)
  const [modalh4, setModalh4] = useState(false)
  return (
    <>
      <ScrollView>

        <Modal transparent={true} animationType='slide' visible={modalBienvenida}
          onRequestClose={() => {
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <ScrollView>
                <Text style={styles.subtitulos}>Hotel Intercontinental - Servicios{"\n"}{"\n"}</Text>
                <Text style={styles.subtitulos}>EL PERSONAL DEL HOTEL HABLA</Text>
                <Text>
                  Inglés, Español
                </Text>
                <Text style={styles.subtitulos}>MONEDA</Text>
                <Text>
                  USD
                </Text>
                <Text style={styles.subtitulos}>ACCESIBILIDAD</Text>
                <Text>
                  - Se permiten animales de asistencia. {"\n"}
                  - Pomos de puertas y menaje ADA. {"\n"}
                  - Armarios accesibles para silla de ruedas. {"\n"}
                  - Se puede acomodar el mobiliario para disponer de más espacio. {"\n"}
                  - Habitaciones y rutas de paso accesibles para sillas de ruedas. {"\n"}
                  - Barras de sujeción, espacio de maniobra suficiente y inodoros altos{"\n"}
                  - Espacio de giro suficiente{"\n"}
                  - Tuberías acolchadas o lugar debajo del tocador{"\n"}
                  - Información sobre accesibilidad en ascensores{"\n"}
                  - Acceso a todos los niveles con ascensor{"\n"}
                  - Ascensores ADA{"\n"}
                  - Ascensor accesible con silla de ruedas{"\n"}
                  - Ascensor cercano a habitaciones accesibles{"\n"}
                  - Baño público: tuberías aisladas / tocador{"\n"}
                  - Baño público: inodoros accesibles con silla de rueda{"\n"}
                  - Entrada al hotel accesible con silla de ruedas{"\n"}
                  - Se dispone de sillas de rueda{"\n"}
                  - Baño público accesible con silla de ruedas{"\n"}
                  - Restaurante apto para comensales con silla de ruedas{"\n"}
                  - Instalaciones públicas accesibles{"\n"}
                  - Información sobre accesibilidad en el estacionamiento{"\n"}
                  - Piso plano entre estacionamiento y entrada{"\n"}
                  - Estacionamiento en la calle accesible para sillas de ruedas{"\n"}
                  - Lugares de estacionamiento accesible señalizados{"\n"}
                  - Estacionamiento para discapacitados{"\n"}
                  - Estacionamiento accesible para silla de ruedas/3 plazas{"\n"}
                  </Text>
                  <Text style={styles.subtitulos}>NORMAS SOBRE MASCOTAS</Text>
                  <Text>
                  Se permiten animales de servicio para personas con capacidades especiales. Solicitamos que su llegada sea arreglada con nuestro departamento de concierge.
                  </Text>
                  <Text style={styles.subtitulos}>WI-FI</Text>
                  <Text>
                  Habitaciones estándar, Suites, Centro de negocios, Áreas públicas y Espacio para convenciones
                  </Text>
                  <Text style={styles.subtitulos}>TRANSPORTE</Text>
                  <Text>
                  - International Airport Monseñor Oscar Romero (SAL){"\n"}
                  - Costo estimado del taxi: 28 USD{"\n"}
                  - Duración estimada del trayecto en taxi: 40 minutes{"\n"}
                  - International Ilopango airport (ILO){"\n"}
                  - Costo estimado del taxi: 25 USD{"\n"}
                  - Duración estimada del trayecto en taxi: 20 minutes{"\n"}
                  - Más información sobre el transporte{"\n"}                  
                  </Text>
                  <Text style={styles.subtitulos}>ESTACIONAMIENTO</Text>
                  <Text>
                  - Estacionamiento disponible{"\n"}
                  - Plazas de estacionamiento/508 plazas{"\n"}
                  - Tarifa diaria de estacionamiento libre: 4 USD{"\n"}
                  - Valet parking disponible{"\n"}
                  - Tarifa diaria de valet parking: 4 USD{"\n"}
                  - El estacionamiento cuenta con seguridad las 24 horas. También ofrecemos servicio de valet.{"\n"}
                </Text>
                <Button title="Cerrar"
                  onPress={() => {
                    setModalBienvenida(!modalBienvenida)
                  }}></Button>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType='slide' visible={modalh1}
          onRequestClose={() => {
            alert('Modal ha sido cerrado')
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulos}>2 Double Classic Lounge Access</Text>
              <Text>Dos camas matrimoniales, con una excelente vista y televisor de ultima tecnología</Text>
              <Button title="Cerrar"
                onPress={() => {
                  setModalh1(!modalh1)
                }}></Button>
            </View>
          </View>
        </Modal>
        <Modal transparent={true} animationType='slide' visible={modalh2}
          onRequestClose={() => {
            alert('Modal ha sido cerrado')
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulos}>Junior Suite</Text>
              <Text>Cama sencilla Deluxe, con televisor y baño con ducha</Text>
              <Button title="Cerrar"
                onPress={() => {
                  setModalh2(!modalh2)
                }}></Button>
            </View>
          </View>
        </Modal>
        <Modal transparent={true} animationType='slide' visible={modalh3}
          onRequestClose={() => {
            alert('Modal ha sido cerrado')
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulos}>Deluxe Twin Room</Text>
              <Text>Habitación con dos camas matrimoniales, vista hermosa y sala de estar con comedor.</Text>
              <Button title="Cerrar"
                onPress={() => {
                  setModalh3(!modalh3)
                }}></Button>
            </View>
          </View>
        </Modal>
        <Modal transparent={true} animationType='slide' visible={modalh4}
          onRequestClose={() => {
            alert('Modal ha sido cerrado')
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulos}>Standard</Text>
              <Text>Habitació sencilla con doble cama individual, ducha y tina, con nevera.</Text>
              <Button title="Cerrar"
                onPress={() => {
                  setModalh4(!modalh4)
                }}></Button>
            </View>
          </View>
        </Modal>




        <View style={{ flexDirection: 'row', marginTop: Constants.statusBarHeight }}>
          <TouchableHighlight
            onPress={() => {
              setModalBienvenida(!modalBienvenida)
            }}>
            <Image
              style={styles.banner}
              source={require('./img/banner.jpg')} />
          </TouchableHighlight>

        </View>
        <View>
          <Text style={styles.titulo}>HOTEL INTERCONTINENTAL</Text>
          <Text style={styles.titulo}>Tipos de habitaciones</Text>
          <ScrollView horizontal>
            <View>
            <Text style={styles.subtitulos}>2 Double Classic Lounge Access</Text>
              <TouchableHighlight
                onPress={() => {
                  setModalh1(!modalh1);
                }}>
                <Image
                  style={styles.habitacion}
                  source={require('./img/h1.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
            <Text style={styles.subtitulos}>Junior Suite</Text>
              <TouchableHighlight
                onPress={() => {
                  setModalh2(!modalh2);
                }}>
                <Image
                  style={styles.habitacion}
                  source={require('./img/h2.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
            <Text style={styles.subtitulos}>Deluxe Twin Room</Text>
              <TouchableHighlight
                onPress={() => {
                  setModalh3(!modalh3);
                }}>
                <Image
                  style={styles.habitacion}
                  source={require('./img/h3.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
            <Text style={styles.subtitulos}>Standard</Text>
              <TouchableHighlight
                onPress={() => {
                  setModalh4(!modalh4);
                }}>
                <Image
                  style={styles.habitacion}
                  source={require('./img/h4.jpg')} />
              </TouchableHighlight>
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Lugares cercanos de interes</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
            <Text style={styles.subtitulos}>Metrocentro</Text>
              <Image style={styles.mejores} source={require('./img/metro.jpg')} />
            </View>
            <View style={styles.listaItem}>
            <Text style={styles.subtitulos}>PriceSmart - Los Héroes</Text>
              <Image style={styles.mejores} source={require('./img/pricesmart.jpg')} />
            </View>
            <View style={styles.listaItem}>
            <Text style={styles.subtitulos}>Museo Tin Marin</Text>
              <Image style={styles.mejores} source={require('./img/tinmarin.jpg')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  //FlexDirection:'row'
  container: {
    flex: 1,
    padding: 8,
  },
  banner: {
    height: 200,
    flex: 1,
    resizeMode: 'repeat'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center'
  },
  habitacion: {
    width: 250,
    height: 250,
    marginHorizontal: 3,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 20
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 8

  },
  listaItem: {
    flexBasis: '49%'
  },
  //Modal
  vistaModal: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    flex: 1
  },
  modal: {
    backgroundColor: '#fff',
    width: '100%',
    height: '35%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitulos: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center'
  }

});