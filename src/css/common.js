import { StyleSheet, Dimensions } from 'react-native';
import globalStyle from './global';
const styleCommon = {
    ...globalStyle
}
export const dimensionWidth = Dimensions.get('window').width;
export const dimensionHeight = Dimensions.get('window').height;
/**
 * 样式转换
 */
// const littleCamelCase = (str) => {
//     return str.replace(/(?:^\w|[A-Z]\b\w|\s+)/g, function(item, index) {
//         if (item) {
//             return "";
//         }
//         return index == 0 ? item.toLowerCase() : item.toUpperCase();
//     });
// };

export const className = (str) => {
    let styleArr = [],
        styleObj = {},
        key;
    styleArr = [...new Set(str.split(" "))];
    for (let i = 0; i < styleArr.length; i++) {
        key = styleArr[i];
        if (key) {
            styleObj = {
                ...styleObj,
                ...styleCommon[key]
            };
        }
    }
    return {
        ...styleObj,
    }
};