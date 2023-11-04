import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AdicionarAluno = ({ navigation, route }) => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [turno, setTurno] = useState('');
  const [curso, setCurso] = useState('');

  const handleSalvar = () => {
    const novoAluno = {
      id: Date.now(), // Gere um ID único de acordo com sua lógica
      nome,
      matricula,
      turno,
      curso,
    };

    // Adicione o novo aluno à lista de alunos (por meio do estado)
    route.params.adicionarAluno(novoAluno);

    // Navegue de volta para a lista de alunos
    navigation.navigate('AlunosList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Aluno</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Matrícula"
        value={matricula}
        onChangeText={(text) => setMatricula(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Turno"
        value={turno}
        onChangeText={(text) => setTurno(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Curso"
        value={curso}
        onChangeText={(text) => setCurso(text)}
        style={styles.input}
      />
      <View style={styles.botaoContainer}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoSalvar]}
          onPress={handleSalvar}
        >
          <Text style={styles.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    color: 'white', 
    textAlign:'center' // Cor do texto dentro do botão
  },
  botaoSalvar: {
    width:100,
    backgroundColor: 'blue', // Cor de fundo do botão Salvar
  },
});

export default AdicionarAluno;
