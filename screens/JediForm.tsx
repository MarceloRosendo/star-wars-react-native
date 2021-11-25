import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import onLaunch from '../helpers/JediFormHelper'
import Tts from "react-native-tts";

export default function JediForm({ navigation }) {
  const [jediName, setJediName] = useState({ value: '', error: '' })
  const [spaceShipName, setSpaceshipName] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    // onLaunch(jediName.value, spaceShipName.value)
    Tts.setDefaultLanguage('en-GB')
    Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact')
    Tts.speak('Hello World!')
  }

  return (
    <Background>
      <Header>Welcome back.</Header>
      <TextInput
        value={jediName.value}
        onChangeText={setJediName}
        error='Erro'
        errorText='Erro ao preencher o nome Jedi' 
        description='Nome Jedi'      />
      <TextInput
        value={spaceShipName.value}
        onChangeText={setSpaceshipName}
        error='Erro'
        errorText='Erro ao preencher o nome da sua nave'
        description='Nome da Nave'      />
      <Button mode="contained" onPress={onLoginPressed} style={undefined}>
        Chamar piloto
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})