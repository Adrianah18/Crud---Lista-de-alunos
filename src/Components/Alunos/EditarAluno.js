import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function EditarAluno({ route, navigation }) {
  const { aluno } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Aluno</Text>
      <TextInput style={styles.input} placeholder="Nome" defaultValue={aluno.nome} />
      <TextInput style={styles.input} placeholder="Matrícula" defaultValue={aluno.matricula} />
      <TextInput style={styles.input} placeholder="Turno" defaultValue={aluno.turno} />
      <TextInput style={styles.input} placeholder="Curso" defaultValue={aluno.curso} />
      <View style={styles.botaoContainer}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoSalvar]}
          onPress={() => navigation.navigate('AlunosList')}
        >
          <Text style={styles.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  botaoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: 'green', // Cor de fundo do botão
    padding: 10,
    borderRadius: 5,
  },
  botaoTexto: {
    textAlign:'center',
    color: 'white', // Cor do texto dentro do botão
  },
  botaoSalvar: {
    width:100,
    backgroundColor: 'blue', // Cor de fundo do botão Salvar
  },
});
