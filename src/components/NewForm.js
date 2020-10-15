import React,{Component} from 'react'
import PropTypes from 'prop-types'

class NewForm extends Component {

    constructor(props){
        super(props)
        this.state= {
            content: '',
            user:''
        };
        this.handleUserChange=this.handleUserChange.bind(this);
        this.handleContentChange=this.handleContentChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleUserChange(event){
        const value= event.target.value;
        this.setState( () =>({
            user:value
        }))

    }

    handleContentChange(event){
        const value= event.target.value;
       this.setState( (prevState,props) =>{
         console.log(prevState.content)
         return {
             content:value
         }
        })


    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        this.setState((prevState,props) => {
            return {
                user:'',
                content:''
            }
        });
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>

                    <input
                           type="text"
                           placeholder="User"
                           value={this.state.user}
                           name="user"
                           onChange={this.handleUserChange}
                           className="input-group-sm"
                           required={true}

                    />

                    <input
                        type="text"
                        placeholder="Content"
                        value={this.state.content}
                        name="content"
                        onChange={this.handleContentChange}
                        className="input-group-sm"
                        required={true}

                    />
                    <button className="btn btn-primary" type="submit">Agregar</button>
                </form>

            </div>
        )
    }

}

NewForm.propTypes= {
    content: PropTypes.number
}
export default NewForm