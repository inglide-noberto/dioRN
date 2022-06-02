import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    Text,
    StatusBar,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfile = 'https://avatars.githubusercontent.com/u/73858741?v=4';
const urlToMyGithub = 'https://github.com/inglide-noberto';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando Link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            console.log('Link ok');
            console.log('Abrindo Link');
            Linking.openURL(urlToMyGithub)
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image
                    accessibilityLabel='Inglide de perfil com fundo branco'
                    style={style.avatar}
                    source={{ uri: imageProfile }}
                />
                <Text
                    accessibilityLabel='Nome: Inglide Noberto'
                    style={[style.defaultText, style.name]} >Inglide Noberto
                </Text>
                <Text
                    accessibilityLabel='Nickname: inglide-noberto'
                    style={[style.defaultText, style.nickname]} >inglide-noberto
                </Text>
                <Text
                    accessibilityLabel='Descrição: Estudante de Ciências da Computação - FAM | | Desenvolvedora Web | móvel Aluna da DIO e Digital House BR'
                    style={[style.defaultText, style.details]} >Estudante de Ciências da Computação - FAM | | Desenvolvedora Web | móvel Aluna da DIO e Digital House BR
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in GitHub
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //Colunm
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        padding: 20,

    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub
    },
    name: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    details: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});