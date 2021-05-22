import React, { Component } from 'react';
import '../style.css';

class TodoItems extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.delete = this.delete.bind(this);
    }

    // FUNCTION QUE APAGA OS ITEMS DA LISTA
    delete(key) {
        this.props.delete(key);
    }

    render() {
        return (
            <div>
                <div className="div-ul">
                    <h3>Adicione uma terefa</h3>
                    <ul>
                        {this.props.lista.map((item) => {
                            return (                           // QUANDO CLICAR EM UMA KEY ESSA KEY SERA ENVIADO PARA O PARAMETRO DA FUNÇÃO
                                <li key={item.key} className="li" >{item.text} <span onClick={() => this.delete(item.key)}>X</span></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoItems;