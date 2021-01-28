import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    pink:{
        /* Vector 1 */
        position: "absolute",
        width: 216,
        height: 249.5,
        left: 198.5,
        top: -0.5,
        color: "#FF9DD4"
    },
    blue:{
        /* Vector 2 */
        position: "absolute",
        width: 216,
        height: 249.5,
        left: 216,
        top: 895.5,
        color: "#4774D5",
        transform: [{ rotate: "-180deg" }]
    }
})

export default function getStyleSheet(styles){     
    return styles 
}


