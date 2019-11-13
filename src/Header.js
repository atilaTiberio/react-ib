/*
    Con mayusculas para diferenciar de los tags de html
ES7  
 */
import React/*, {Component}*/ from 'react';


/*Destructuring las props
* */

/*
function Header (props){
    return (
        <header>
            <h1>{props.title.toUpperCase()}</h1>
            <h2>{props.subtitle}</h2>
        </header>
    );
}
*/

const Header= ({title,subtitle}) =>(
        <header>
            <h1>{title.toUpperCase()}</h1>
            <h2>{subtitle}</h2>
        </header>
);


/*
class Header extends Component {

    render() {
        console.log(this);
        return (
            <header>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </header>
        );

    }
}
*/

export default Header;