import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Tarefa from './Tarefa';

const styles = StyleSheet.create({
  container: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#DCDCDC",
        alignItems:"center",
        
  },

  listaContainer: {
    width: '100%',
  },
  cabecalho: {
    alignItems:"center",
    justifyContent: "center",
    padding: 10,
    fontSize: 28,
    marginBottom: 10,
    fontWeight:'bold',
    textAlign: "center",
    color:"#000000"

  },
  input: {
    width:"90%",
    alignItems: "center",
    justifyContent:"center",
    borderRadius:20,
    backgroundColor:"#D3D3D3",
    margin:12,
    padding:10,
    paddingBottom:10,
    marginTop: 30,
    borderWidth:2,
    borderColor:"#A9A9A9"
  },

  botaoAdicionar: {
    width:"90%",
    alignItems: "center",
    justifyContent:"center",
    borderRadius:20,
    backgroundColor:"#483D8B",
    margin:12,
    padding:10,
    paddingBottom:10,
    borderWidth:2,
    borderColor:"#483D8B"
  },
  textoBotaoAdicionar: {
    fontSize:20,
    color:"white",
    fontWeight:"bold"
  },

});

export default function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa) {
      const novaTarefaObj = {
        id: Date.now(),
        texto: novaTarefa,
      };
      setTarefas([...tarefas, novaTarefaObj]);
      setNovaTarefa('');
    }
  }

  const editarTarefa = (id, textoEditado) => {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, texto: textoEditado } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const excluirTarefa = (id) => {
    const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listaContainer}>
        <Text style={styles.cabecalho}>Lista de Tarefas</Text>
        <TextInput
          style={styles.input}
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          placeholder="Adicione uma tarefa"
        />
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarTarefa}
        >
          <Text style={styles.textoBotaoAdicionar}>Adicionar</Text>
        </TouchableOpacity>
        <ScrollView >
          {tarefas.map((tarefa) => (
            <Tarefa
              key={tarefa.id}
              tarefa={tarefa}
              onEdit={editarTarefa}
              onDelete={excluirTarefa}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}