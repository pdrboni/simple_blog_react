import { Component } from "react"
import './styles.css';

export class Button extends Component {
    
    /*loadMorePosts = () => {
    console.log('Load more posts')
    }

    render() {

        const {text} = this.props;
        
        return(
            <button onClick={this.loadMorePosts}>{text}</button>
        )
    }*/

    // poderíamos executar o onClick da forma abaixo, visto que onClick está em props:
    
    render() {

        const {text, onClick, disabled} = this.props;
        
        return(
            <button
            className='button'
            onClick={onClick}
            disabled={disabled}
            >
                {text}
            </button>
        )
    }
    
    // O valor de onClick é a função loadMorePosts lá no componente, que dá na mesma que o código acima.

}
