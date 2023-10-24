// Tarefa.js
import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:10,
    borderWidth: 1,
    width: "100%",
    borderColor: "#483D8B", 
    borderRadius: 10,
    
  },
  editText: {
    alignItems: "center",
    justifyContent:"center",
    margin:12,
    padding:10,
    marginTop: 30,
  },

  editarButton:{
    marginTop:50
  }
});

export default function Tarefa({ tarefa, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [tarefaEditada, setTarefaEditada] = useState(tarefa.texto);

  const handleEdit = () => {
    onEdit(tarefa.id, tarefaEditada);
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <View style={styles.editText}>
          <TextInput 
            value={tarefaEditada}
            onChangeText={setTarefaEditada}
          />
          <Button title="Salvar" onPress={handleEdit} />
        </View>
      ) : (
        <View style={styles.editText}>
          <Text>{tarefa.texto}</Text>
        </View>
      )}
      <View >
        <Button  title={editMode ? 'Cancelar' : 'Editar'} onPress={() => setEditMode(!editMode)} />
        <Button  title="Excluir" onPress={() => onDelete(tarefa.id)} />
      </View>
    </View>
  );
}