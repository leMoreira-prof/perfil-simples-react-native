import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flexDirection:'row',
    alignItems:'center',

    width: '90%',
    backgroundColor:'#f0f0f0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  BackImg:{
    width: 150,
    height: 150,
    backgroundColor:'#ddd',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
    borderRadius:75,
    borderWidth:2,
    borderColor:'#333',
  },
  cardNivelImg:{
    width: 100,
    height: 100,
  },
  barraProgress:{
    width: 200,
    height: 40,
  },
  nomePerfil:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginRight:30,
    textAlign:'right'  
  }
});