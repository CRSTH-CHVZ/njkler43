import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
    constructor() {
        super()
        this.state = {
            strValue: '',
        }
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState( () => {
            return{ strValue: value}
        })
    }
  render() {
    return (
      <div>
        <div className="filter">
          <input
              type="text"
              placeholder="Ingresa el término de búsqueda"
              onChange={ this.handleChange }
              value={ this.state.strValue }
          />
        </div>
        <ul>
            {
                this.state.strValue.length >= 1 ? "No hay" :
                posts.map( (el, i) => {
                    return(
                        <li key={ i }>
                            <a href={el.url}><img src={el.image}/></a>
                            <p>{el.title}</p>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}


export default App


