import {StyleSheet, Appearance, Image, View} from 'react-native';
import colors from '../../assets/colors';
import newB from '../../assets/icons/newB.png';
import newW from '../../assets/icons/newW.png';
import payB from '../../assets/icons/payB.png';
import payW from '../../assets/icons/payW.png';
import saveB from '../../assets/icons/saveB.png';
import saveW from '../../assets/icons/saveW.png';
import deleteB from '../../assets/icons/deleteB.png';
import deleteW from '../../assets/icons/deleteW.png';
import acceptB from '../../assets/icons/acceptB.png';
import acceptW from '../../assets/icons/acceptW.png';
import cancelB from '../../assets/icons/cancelB.png';
import cancelW from '../../assets/icons/cancelW.png';
import atrasB from '../../assets/icons/atrasB.png';
import atrasW from '../../assets/icons/atrasW.png';
import {Shadow} from 'react-native-shadow-2';

const ShadowPresets = {
   general: {
      distance: 5,
      startColor: colors.typography + '10',
      endColor: colors.background,
      offset: [2, 4],
   },
};

//Usar libreria react-native-svg-transformer
const CustomButton = props => {
   let icon;
   switch (props.type) {
      case 1: //Nuevo
         icon = Appearance.getColorScheme() === 'dark' ? newB : newW;
         break;
      case 2: //Pagar
         icon = Appearance.getColorScheme() === 'dark' ? payB : payW;
         break;
      case 3: //Guardar
         icon = Appearance.getColorScheme() === 'dark' ? saveB : saveW;
         break;
      case 4: //Borrar
         icon = Appearance.getColorScheme() === 'dark' ? deleteB : deleteW;
         break;
      case 5: //Aceptar
         icon = Appearance.getColorScheme() === 'dark' ? acceptB : acceptW;
         break;
      case 6: //Cancelar
         icon = Appearance.getColorScheme() === 'dark' ? cancelB : cancelW;
         break;
      case 7: //Regresar
         icon = Appearance.getColorScheme() === 'dark' ? atrasB : atrasW;
         break;
      default:
         console.log('Type de CustomButton incorrecto');
   }

   return (
      <Shadow {...ShadowPresets.general}>
         <View style={styles.circle}>
            <Image source={icon} style={styles.icon} />
         </View>
      </Shadow>
   );
};

const styles = StyleSheet.create({
   circle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: colors.color,
      alignItems: 'center',
      justifyContent: 'center',
      //elevation:7,
   },
   icon: {
      width: 25,
      height: 25,
   },
});

export default CustomButton;
