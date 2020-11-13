import { StyleSheet, Platform } from 'react-native';
import colors from './Constants/Colors'

export default StyleSheet.create({
  flex: {
    flex: 1
  },

  flex3: {
    flex: 0.3
  },

  flex7: {
    flex: 0.7
  },

  bgWhite: {
    backgroundColor: colors.white
  },

  bgDarkModerateCyan: {
    backgroundColor: colors.darkModerateCyan
  },

  textWhite: {
    color: colors.white
  },

  textDarkGrey: {
    color: colors.darkGrey
  },

  textDarkModerateCyan: {
    color: colors.darkModerateCyan
  },

  flexDirectionRow: {
    flexDirection: 'row'
  },

  alignItemsCenter: {
    alignItems: 'center'
  },

  justifyContentCenter: {
    justifyContent: 'center'
  },

  alignItemsFlexStart: {
    alignItems: 'flex-start'
  },

  alignItemsFlexEnd: {
    alignItems: 'flex-end'
  },

  justifyContentFlexStart: {
    justifyContent: 'flex-start'
  },

  justifyContentFlexEnd: {
    justifyContent: 'flex-end'
  },

  boldFont: {
    fontWeight: 'bold'
  },

  fontSize16: {
    fontSize: 14
  },

  borderWidth1: {
    borderWidth: 1
  },

  borderBottomWidth: {
    borderBottomWidth: 0.5
  },

  borderBottomWidth1: {
    borderBottomWidth: 1
  },

  borderRightWidth: {
    borderRightWidth: 0.5
  },

  borderRightWidth1: {
    borderRightWidth: 1
  },

  borderLeftWidth1: {
    borderLeftWidth: 1
  },

  borderColor: {
    borderColor: colors.darkModerateCyan
  },

  borderRightColor: {
    borderRightColor: colors.darkGrey
  },

  borderRightColorCyan: {
    borderRightColor: colors.darkModerateCyan
  },

  borderBottomColor: {
    borderBottomColor: colors.darkModerateCyan
  },

  borderLeftColor: {
    borderLeftColor: colors.darkModerateCyan
  },

  padding5: {
    padding: 5
  },

  padding10: {
    padding: 10,
  },

  padding20: {
    padding: 20,
  },

  pt5: {
    paddingTop: 5,
  },

  pb5: {
    paddingBottom: 5,
  },

  pr10: {
    paddingRight: 10
  },

  pr20: {
    paddingRight: 20
  },

  pl10: {
    paddingLeft: 10
  },

  pl20: {
    paddingLeft: 20
  },

  ...Platform.select({
    ios: {
      shadowEffect: {
        shadowColor: '#999',
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 10,
          height: 10,
        },
      },
    },
    android: {
      shadowEffect: {
        elevation: 3,
      },
    },
  }),

  image: {
    width: 100,
    height: 100
  },

  mb20: {
    marginBottom: 20
  },

  mb50: {
    marginBottom: 50
  },

  borderRadius5: {
    borderRadius: 5
  },

  borderRadius20: {
    borderRadius: 20
  },

  margin5: {
    margin: 5,
  },
});
