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
    height: 22,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonCian: {
    width: '95%',
    height: 22,
    backgroundColor: '#024959',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#007FA3',
  },
  verticalStack:{
    height:"100%",
    space: 4,
    alignItems:"center",
    justifyContent:"center",


  },
  verticalStackHome:{
    height:"100%",
    alignItems:"center",
    justifyContent:"center",


  }
  ,

  headings:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    size: 'lg',
    color: '#374151',
    fontWeight: "semibold",
    _dark : {color:'#F9FAFB'},
    

  },
 
  smallHeading:{
    fontSize: 'sm',
    color: '#374151',
    _dark: {color: '#F9FAFB'},
    fontWeight: 'medium'
  }
 
});

export default styles;
