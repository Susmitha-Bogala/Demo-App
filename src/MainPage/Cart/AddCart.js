import React, { useState, } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../styles'
import defaultLabels from '../../Constants/DefaultLabels'

const demoData = [
    {
        name: 'ATTA-WHOLE WHEAT 1 KG POUCH',
        brandName: 'AASHIRVAAD',
        price: 57,
        quantity: '1 PC',
        id: 1,
        image: require('../../Images/wheat.jpg'),
        numberOfAddedItems: 0
    },
    {
        name: 'MAIDA',
        brandName: 'BHAGYALAKSHMI',
        price: 24,
        quantity: '500 G',
        id: 2,
        image: require('../../Images/maida.jpeg'),
        numberOfAddedItems: 0
    },
    {
        name: 'GRAM FLOUR',
        brandName: 'BHAGYALAKSHMI',
        price: 48,
        quantity: '500 G',
        id: 3,
        image: require('../../Images/gramFlour.jpeg'),
        numberOfAddedItems: 0
    },
    {
        name: 'RICE FLOUR',
        brandName: 'BHAGYALAKSHMI',
        price: 24,
        quantity: '500 G',
        id: 4,
        image: require('../../Images/rice.jpeg'),
        numberOfAddedItems: 0
    },
]

function AddCartPage({ navigation }) {
    const [data, setData] = useState(demoData);
    const [refresh, setRefresh] = useState(false);


    const renderItem = ({ item, index }) => {
        let cartItem = item;
        return (
            <View key={index}
                style={[
                    styles.shadowEffect,
                    styles.flexDirectionRow,
                    styles.padding10,
                    styles.margin5,
                    styles.borderRadius5,
                    styles.bgWhite
                ]}>
                <View
                    style={[
                        styles.flex3,
                        styles.justifyContentCenter,
                        styles.borderRightWidth,
                        styles.borderRightColor
                    ]}  >
                    <Image resizeMode={'center'} source={cartItem.image} style={styles.image} />
                </View>
                <View style={styles.flex7}>
                    <Text style={styles.padding5}>{cartItem.name}</Text>
                    <Text style={styles.padding5}>{cartItem.brandName}</Text>
                    <Text style={[styles.padding5, styles.textDarkGrey]}>{cartItem.quantity}</Text>
                    <View style={[styles.padding5, styles.flexDirectionRow, { justifyContent: 'space-between' }]}>
                        <Text>{defaultLabels.price}: {cartItem.price}</Text>
                        {
                            cartItem.numberOfAddedItems === 0 ?
                                <TouchableOpacity
                                    onPress={() => {
                                        let sampleData = data;
                                        sampleData[index].numberOfAddedItems = 1;
                                        setData(sampleData)
                                        setRefresh((prevState) => !prevState)
                                    }
                                    }
                                    style={[
                                        styles.bgDarkModerateCyan,
                                        styles.borderRadius20,
                                        styles.flexDirectionRow,
                                        styles.borderColor,
                                        styles.borderWidth1,
                                        styles.pr20,
                                        styles.pl20,
                                        styles.pt5,
                                        styles.pb5
                                    ]}>
                                    <Text
                                        style={styles.textWhite}>
                                        {defaultLabels.add}
                                    </Text>
                                </TouchableOpacity>
                                :
                                <View
                                    style={[
                                        styles.flexDirectionRow,
                                        styles.borderColor,
                                        styles.borderWidth1,
                                        styles.borderRadius20
                                    ]}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            let sampleData = data;
                                            sampleData[index].numberOfAddedItems = (sampleData[index].numberOfAddedItems >= 0) ? sampleData[index].numberOfAddedItems - 1 : 0;
                                            setData(sampleData)
                                            setRefresh((prevState) => !prevState)
                                        }}
                                        style={[
                                            styles.pt5,
                                            styles.pb5,
                                            styles.pr10,
                                            styles.pl10,
                                        ]}>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                    <View
                                        style={[
                                            styles.pt5,
                                            styles.pb5,
                                            styles.pr10,
                                            styles.pl10,
                                            styles.borderLeftWidth1,
                                            styles.borderRightWidth1,
                                            styles.borderRightColorCyan,
                                            styles.borderLeftColor
                                        ]}>
                                        <Text>{cartItem.numberOfAddedItems}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        let sampleData = data;
                                        sampleData[index].numberOfAddedItems = sampleData[index].numberOfAddedItems + 1;
                                        setData(sampleData)
                                        setRefresh((prevState) => !prevState)
                                    }}
                                        style={[
                                            styles.pt5,
                                            styles.pb5,
                                            styles.pr10,
                                            styles.pl10,
                                        ]}>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                        }
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View style={[styles.flex, styles.padding5]}>
            <FlatList
                data={data}
                extraData={{ refresh }}
                renderItem={(item, index) => renderItem(item, index)}
                keyExtractor={item => (item.id).toString()}
            />
            <TouchableOpacity
                style={[
                    styles.padding10,
                    styles.borderRadius20,
                    styles.bgDarkModerateCyan,
                    styles.alignItemsCenter
                ]}>
                <Text
                    style={[
                        styles.textWhite,
                        styles.boldFont,
                        styles.fontSize16
                    ]}>{defaultLabels.placeOrder}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddCartPage;