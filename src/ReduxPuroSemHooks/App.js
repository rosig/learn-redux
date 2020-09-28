import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addName, updateName, deleteName } from "./store/actions";

function App({ names, addName, updateName, deleteName }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [inputNewText, setInputText] = useState("");

  const handleUpdateItem = (id) => {
    updateName(editText, id);
    setEditText("");
  };

  const handleDeleteItem = (id) => {
    deleteName(id);
  };

  const handleAddItem = () => {
    if (inputNewText.trim().length) {
      addName(inputNewText);
      setInputText("");
    }
  };

  return (
    <div className="app-container" style={{ padding: 30, textAlign: "center" }}>
      <h1>Redux</h1>
      <div
        className="data-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <h3>Data</h3>
        <div
          className="data-content"
          style={{
            width: "50%",
            minHeight: "50px",
            marginTop: 20,
            background: "rgba(192,192,192, 0.5)",
            borderRadius: 4,
          }}
        >
          {names.map((item, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <div>
                {index === editId ? (
                  <TextField
                    label={names[index]}
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <p
                    style={{ marginTop: 3, marginBottom: 3 }}
                  >{`id: ${index} - ${item}`}</p>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {editId === index ? (
                  <Button
                    variant="contained"
                    color="default"
                    style={{
                      height: 20,
                      marginRight: 10,
                      background: "#08f26e",
                    }}
                    onClick={() => {
                      handleUpdateItem(index);
                      setEditId(null);
                    }}
                  >
                    Confirmar
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ height: 20, marginRight: 10 }}
                    onClick={() => setEditId(index)}
                  >
                    Editar
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ height: 20 }}
                  onClick={() => handleDeleteItem(index)}
                >
                  Apagar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="input-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Item"
          variant="outlined"
          value={inputNewText}
          style={{ marginRight: 20 }}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAddItem()}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  names: state.names,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addName, updateName, deleteName }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
