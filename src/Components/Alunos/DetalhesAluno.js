import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetalhesAluno({ route, navigation }) {
  const { aluno } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Aluno</Text>
      <Text style={styles.info}>Nome: {aluno.nome}</Text>
      <Text style={styles.info}>Matrícula: {aluno.matricula}</Text>
      <Text style={styles.info}>Turno: {aluno.turno}</Text>
      <Text style={styles.info}>Curso: {aluno.curso}</Text>
      <View style={styles.botaoContainer}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoEditar]}
          onPress={() => navigation.navigate('EditarAluno', { aluno })}
        >
          <Text style={styles.botaoTexto}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, styles.botaoVoltar]}
          onPress={() => navigation.navigate('AlunosList')}
        >
          <Text style={styles.botaoTexto}>Voltar</Text>
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
  info: {
    fontSize: 16,
    marginBottom: 20,
    padding:15,
    borderWidth: 1
  },
  botaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 3
  },
  botaoEditar: {
    backgroundColor: 'blue', // Cor de fundo do botão Editar
  },
  botaoVoltar: {
    backgroundColor: 'gray', // Cor de fundo do botão Voltar
  },
  botaoTexto: {
    color: 'white', // Cor do texto dentro dos botões
  },
});
