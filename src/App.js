import React, {Component} from 'react';
import './App.css'
import Header from './Header';

//React fragment esto es una mamada React.fragment <></>
/*
    Solo puedes regresar un solo componente si quieres más usas el react.fragment

    Si nuestra componente solo tiene un render, no es necesario que sea una clase

 */


class MyComponent extends Component {

    clickHandler(){
        console.log("click")
    }

    submitHandler(event){
        event.preventDefault();
        console.log("Form submitted")
    }

    render() {
        const isValid = this.props.isValid;
        /*  if(isValid){
              return (<> <Header /> <div className="hello" >Hello</div> </>)
          }
          return <div className="hello" >Invalid</div>*/
        return (
            <div>
                <Header
                    title="To do list"
                    subtitle="Shoping list"
                    age={18}
                    boolean={true}
                    objetos={{
                        info:"nueva",
                        entero:20,
                        bol:false

                    }}
                />
                <span>Hello Internet brands</span>
                <p>Parrafo</p>
                {/*Comentarios*/}
                 <button onClick={this.clickHandler}>Click </button>

                <form onSubmit={this.submitHandler}>
                    <input type="text" name="info"/>
                    <button type="submit">Agregar</button>
                </form>
            </div>
        )

    }
}

export default MyComponent