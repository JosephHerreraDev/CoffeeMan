import {variants} from '@catppuccin/palette';

const lFlavor = variants.latte;
const dFlavor = variants.mocha; //frappe o macchiato

const light = {
   colors: {
      background: lFlavor.base.hex,
      typography: lFlavor.text.hex,
      gray1: lFlavor.surface0.hex, //crust, mantle, surface(0,1,2)
      gray2: lFlavor.mantle.hex, //crust, mantle, surface(0,1,2)
      mediumGray: lFlavor.overlay1.hex,
      color: lFlavor.lavender.hex, //mauve, lavender, overlay2
   },
};

const dark = {
   colors: {
      background: dFlavor.base.hex,
      typography: dFlavor.text.hex,
      gray1: dFlavor.surface0.hex, //crust, mantle, surface(0,1,2)
      gray2: dFlavor.mantle.hex, //crust, mantle, surface(0,1,2)
      mediumGray: dFlavor.overlay1.hex,
      color: dFlavor.lavender.hex, //mauve, lavender, overlay2
   },
};

export const theme = {
   ...light,
   spacing: {
      s: 6,
      m: 10,
      l: 14,
      xl: 20,
   },
   borderRadius: {
      s: 5,
      m: 7,
      l: 17,
      xl: 20,
   },
   textVariants: {
      header: {
         fontSize: 15,
         fontFamily: 'Imprima-Regular',
      },
      title: {
         fontSize: 15,
         fontFamily: 'Jaldi-Regular',
      },
      body: {
         fontSize: 13,
         fontFamily: 'Jaldi-Regular',
      },
      titleBold: {
         fontSize: 15,
         fontFamily: 'Jaldi-Bold',
      },
      bodyBold: {
         fontSize: 13,
         fontFamily: 'Jaldi-Bold',
      },
   },
};

export const darkTheme = {
   ...theme,
   ...dark,
};
