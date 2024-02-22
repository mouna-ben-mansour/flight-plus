import { StyleSheet } from 'react-native';


const stylesAuth = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  logo: {
    width: "100%",
    height:100,
    flexDirection: "row",
    position: "absolute",
    top: 60,
    color:"#Eee",
    justifyContent:"center",
    zIndex:1
  },
  imageLogo: {
    resizeMode: 'contain',
    color:"#Eee",
    width:100,
    height:100,
    zIndex:1
  },
  inputView: {
    width: "82%",
    borderRadius: 2,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    borderBottomColor: '#747474',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    paddingLeft : 20
  },
  inputText: {
    width : "100%",
    height: 50,
    color: "black",
    placeholderTextColor: "#747474"
  },
  forgot: {
    color: "white",
    fontSize: 11,
    textAlign: "left",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#343a40",
    borderRadius: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },
  checkboxContainer: {
    width: "84%",
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: "flex-start"
  },
  checkbox: {
    color: "white",
  },
  label: {
    margin: 8,
    color: "black"
  },
  containerForm: {
    position: "absolute",
    width: "100%",
    alignItems: 'center',
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingBottom: 15,
    paddingTop: 15,
    zIndex:999
  },
  InputIcon: {
    width: 20,
    height: 20,
    marginTop:15,
    marginRight : 10
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});




export { stylesAuth }