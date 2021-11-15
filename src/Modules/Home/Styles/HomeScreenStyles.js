import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        padding: Metrics.marginHorizontal,
        justifyContent: 'center'
    },
    flatList: {
        flexGrow: 0.1,
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 0.5,
        justifyContent: 'space-evenly'
    },
    touchable: {
        backgroundColor: 'orange',
        borderRadius: Metrics.width * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        width: Metrics.width * 0.7,
        height: Metrics.height * 0.06,
    },
    text: {
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size(20),
        color: 'white'
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    itemTouchable: {
        marginVertical: Metrics.width * 0.02,
        paddingVertical: Metrics.width * 0.02,
    },
    itemText: {
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size(16),
    },
});
