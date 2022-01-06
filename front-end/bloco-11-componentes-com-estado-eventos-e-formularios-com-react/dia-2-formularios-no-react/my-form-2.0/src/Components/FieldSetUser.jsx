import React, { Component } from 'react';

class FieldSetUser extends Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
        
        this.state = {
            nome: '',
            email: '',
            address: '',
            cpf: '',
            resumoCv: '',
        }
    }
    handleChange ({ target }) {
        const { name, value} = target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return(
            <form>
            <fieldset>
                <label htmlFor=""> Nome:
                    <input type="text" name="name" id="name" onChange={this.handleChange}/>
                </label>
                <label htmlFor=""> Email:
                    <input type="text" name="email" id="email" onChange={this.handleChange}/>
                </label>
                <label htmlFor=""> Address:
                    <input type="text" name="addres" id="adress" onChange={this.handleChange}/>
                </label>
                <label htmlFor=""> CPF:
                    <input type="text" name="cpf" id="cpf" onChange={this.handleChange}/>
                </label>
                <label htmlFor=""> Resumo do Currículo:
                    <textarea name="resume" id="resume" cols="30" rows="10" onChange={this.handleChange}></textarea>
                </label>
                <label htmlFor=""> Cargo:
                    <textarea name="encharge" id="encharge" cols="30" rows="10" onChange={this.handleChange}></textarea>
                </label>
                <label htmlFor=""> Descrição do Cargo:
                   <textarea name="description" id="description" cols="30" rows="10" onChange={this.handleChange}></textarea>
                </label>
            </fieldset>
            <input type="submit" name="submit" id="submit" />
            <input type="button" name="clear" id="clear" /> 
            </form>
        )
    }
}

export default FieldSetUser;