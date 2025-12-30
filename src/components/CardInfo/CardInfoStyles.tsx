import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#666',
    color: '#fff',
    borderRadius: 3,
  },
  item: {
    padding: 5,
    fontSize: 16,
    height: 30,
  },

  titulo:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:10,
    marginTop:10,
    borderTopRightRadius:5,
    transform: [{ rotate: '-90deg' }], 
    
  }
});