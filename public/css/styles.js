import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      line:{
        position: "absolute",
        width: 185.01,
        height: 0,
        left: "center",
        borderBottomColor: "#C4C4C4",
        borderBottomWidth: 1,
        //border: "1px solid #C4C4C4",
      },
      pink:{
        /* Vector 1 */
        position: "absolute",
        width: 216,
        height: 249.5,
        left: 198.5,
        top: -0.5,
        //color: "#FF9DD4"
    },
    blue:{
        /* Vector 2 */
        position: "absolute",
        width: 216,
        height: 249.5,
        left: 0,
        top: 600,
        //color: "#4774D5",
        //transform: [{ rotate: "-180deg" }]
    },
    login_baner:{
    position: "absolute",
    width: 239,
    height: 42,
    left: "center",
    top: 327,
    fontSize: 24,
    lineHeight: 49,
    textAlign: "center",
      },
      login_banner_image:{
        position: 'absolute',
    width: 106,
    height: 3,
    left: "center",
    top: 370,
    borderRadius: 70,
      },
    login:{
    position: "absolute",
    width: "174.24",
    height: "38",
    left: "center",
    top: 497,
    },
    login_text:{
      position: "absolute",
      width: 116.78,
      height: 25.95,
      left: 28.73,
      top: 3,
      
      //fontFamily: "Noto Sans Javanese",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14.8293,
      lineHeight: 30,
      textAlign: "center",
      
      color: "#000000",
    },
    login_back:{  
      width: 174,
      height: 38,
      backgroundColor: "#83EFEB",
      borderRadius: 30,
    }
    });

export default function getStyleSheet(){     
    return styles 
}


