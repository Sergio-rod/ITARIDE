import { extendTheme } from 'native-base';

const styles = extendTheme({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerHome: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
    containerRider: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  containerPassenger: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  containerSign: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',

  },
  text: {
    fontSize: 24,
    color: 'blue',
    marginBottom: 20,
  },
  buttonBlack: {
    width: '95%',
    backgroundColor: 'black',
    borderRadius: 5,
  },
  buttonCian: {
    width: '95%',
    backgroundColor: '#024959',
    borderRadius: 5,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#007FA3',
  },
  verticalStack: {
    width: '100%',
    height: "100%",
    space: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  verticalStackHome: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headings: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    fontSize: 14,
    color: '#374151',
    fontWeight: "semibold",

  },
  smallHeading: {
    fontSize: 12,
    color: '#374151',

    fontWeight: 'medium',
  },
  containerFlat: {
    flex: 1,
    padding: 16
  },
  settingButton: {
    marginVertical: 8,
    height: 50,
    justifyContent: 'flex-start',
    backgroundColor: 'white' // Cambiar el color de fondo a blanco
  },
  settingIcon: {
    fontSize: 20,
    color: '#024959',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 16,
    color: '#024959'
  },
  boxHistory: {
    alignItems: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',

  },historyIcon: {
    marginLeft: 10,
    fontSize: 20,
    color: '#024959',
  },
  historyText: {
    fontSize:16,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#024959',
    paddingRight:10 ,
  },
  historyCost:{
    fontSize:16,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#024959',
  }
  
 

});

export default styles;
