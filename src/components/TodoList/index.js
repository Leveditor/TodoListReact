import React, { Component } from 'react';
import TodoItems from '../TodoItems';
import '../style.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tarefa: '',

            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);


    }

    addItem(e) {
        let state = this.state;
        // IF para adicionar o item na lista
        if (this._tarefaInput.value !== '') {
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };

            this.setState({ items: [...state.items, newItem] });
        }


        e.preventDefault();

        //      QUANDO FOR ADICIONADO NA LISTA LIMPAR O CAMPO DO INPUT
        this.setState({ tarefa: '' })
    }

    deleteItem(key) {
        //  Filtro que pega as chaves de cada item
        let filtro = this.state.items.filter((item) => {
            return (item.key !== key);
        })

        this.setState({ items: filtro })
    }

    render() {
        return (
            <div className="container">
                <h1>Lista de Tarefas</h1>
                <form onSubmit={this.addItem}>

                    {/* INPUT PARA PEGA OS DADOS */}
                    <input type="text" placeholder='Nova Tarefa?' name="tarefa"
                        value={this.state.tarefa} onChange={(e) => this.setState({ tarefa: e.target.value })}
                        ref={(event) => this._tarefaInput = event} className="inputTodoList"/>

                    {/* BOTÃO QUE VAI ADICIONAR NA LISTA */}
                    <button type='submit' className="botaoTodoList">Adicionar</button>
                </form>

                 {/* COMPONENTE DA LISTA */}
                <TodoItems lista={this.state.items} delete={this.deleteItem} />
            </div>
        )
    }
}
export default TodoList;
