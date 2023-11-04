import React, { useState } from 'react';
import { Button } from 'react-native';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const AlunosList = ({ navigation }) => {
  const [alunos, setAlunos] = useState([]); // Estado para armazenar a lista de alunos

  // Função para adicionar um novo aluno à lista
  const adicionarAluno = (novoAluno) => {
    setAlunos((prevAlunos) => [...prevAlunos, novoAluno]);
  };

  const handleExcluir = (alunoId) => {
    // Remova o aluno com o ID especificado da lista
    setAlunos((prevAlunos) => prevAlunos.filter((aluno) => aluno.id !== alunoId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Alunos</Text>
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.alunoItem}>
            <Text style={styles.nomeAluno}>{item.nome}</Text>
            <View style={styles.botoesContainer}>
              <TouchableOpacity
                style={[styles.botaoDetalhes, { marginBottom: 5 }]}
                onPress={() => navigation.navigate('DetalhesAluno', { aluno: item })}
              >
                <Text style={styles.botaoTexto}>Detalhes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.botaoExcluir, { marginBottom: 5 }]}
                onPress={() => handleExcluir(item.id)}
              >
                <Text style={styles.botaoTexto}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Button title="Adicionar Aluno" onPress={() => navigation.navigate('AdicionarAluno', { adicionarAluno })} />
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
  alunoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  
    marginVertical: 10,
  },
  nomeAluno: {
    fontSize: 16,
  },
  botoesContainer: {
    flexDirection: 'column', // Coluna para empilhar os botões
    alignItems: 'center', // Centralizar os botões na coluna
  },
  botaoDetalhes: {
    backgroundColor: 'blue', // Cor de fundo do botão Detalhes
    padding: 10,
    borderRadius: 5,
    width:85
  },
  botaoExcluir: {
    backgroundColor: 'red', // Cor de fundo do botão Excluir
    padding: 10,
    borderRadius: 5,
    width:85
  },
  botaoTexto: {
    color: 'white',
    textAlign:'center' // Cor do texto dentro dos botões
  },
});

export default AlunosList;
