import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2}
    },
    cover: {
        height: 120,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    detailsContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    source: { 
        textAlign: 'left',
        fontSize: 12,
        flex: 0.5,
    },
    date: { 
        textAlign: 'right',
        fontSize: 12,
        flex: 0.5,
    }
})

export default styles
