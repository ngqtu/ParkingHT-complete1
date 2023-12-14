import React, { memo } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { fetchBookingById } from '../../store/bookingSlice';

const ModalSuccess = ({ onClose, dataS, transferTicket}) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
    };

    const handleTicket = () => {
        dispatch(fetchBookingById(dataS))
            .then((result) => {
                if (result.payload.statusCode === 200) {
                    transferTicket(result.payload.data)
                    onClose()
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <SafeAreaView style={styles.ModalCommonoverlay}>
            <View onTouchStart={handleClick} style={styles.ModalCommonmodalContainer}>
                <View style={styles.ModalCommonForm}>
                    <TouchableOpacity style={styles.closeBtn}>
                        <MaterialCommunityIcons
                            name='check-bold' size={60} color="#fff"
                        />
                    </TouchableOpacity>
                    <View>
                        <View style={styles.MainCont}>
                            <View style={{ ...styles.MainContCard, justifyContent: 'center' }}>
                                <Text style={styles.modalformHeading}>Thành công!</Text>
                                <Text style={{
                                    letterSpacing: 1,
                                    fontSize: 14,
                                    textAlign: 'center'
                                }}>Đã thanh toán thành công chỗ đậu xe của bạn</Text>
                            </View>
                            <TouchableOpacity style={styles.btnCommon1} onPress={() => handleTicket()}>
                                <Text style={styles.btnTextCommon1}>Xem vé đỗ xe</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ModalCommonoverlay: {
        backgroundColor: 'rgba(49, 49, 49, 1)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    ModalCommonmodalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        margin: 0,
    },
    ModalCommonForm: {
        width: 320,
        paddingVertical: 50,
        paddingHorizontal: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        elevation: 4,
        position: 'relative',
        alignItems: 'center'
    },
    closeBtn: {
        backgroundColor: '#02aab0',
        borderRadius: 100,
        justifyContent: 'center',
        zIndex: 1,
        height: 90,
        width: 90,
        alignItems: 'center',
    },
    modalformHeading: {
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
        fontWeight: '700',
        lineHeight: 20,
        color: '#02aab0',
        marginBottom: 20,
        textAlign: 'center'
    },
    MainCont: {
        marginTop: 10,
    },
    MainContCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 20
    },
    MainContTextL: {
        flex: 1,
        color: '#6e6e6e'
    },
    MainContTextR: {
        flex: 1,
        fontWeight: '600',
    },
    btnCommon1: {
        height: 40,
        borderRadius: 5,
        backgroundColor: '#02aab0',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 0.27,
        shadowRadius: 0,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextCommon1: {
        color: '#fcfcfc',
        fontWeight: 'bold',
        fontSize: 17,
        letterSpacing: 1
    },
})

export default memo(ModalSuccess)
