import './styles.css';

// O que é um componente react?
// é uma função ou classe que retorna o método render que retorna JSX

//export const PostCard = (props) => {
// export const PostCard = ({ post }) => {
export const PostCard = ({ title, cover, body, id }) => {
// qualquer atributo que passarmos para o componente no JSX, será armazenado no componente props.
    //console.log(props);

    // para termos acesso ao post e seus dados podemos fazer das seguintes maneiras:
    // const post = props.post;
    // ou assim:
    // const { post } = props;

    // ou fazendo desctructuring direto nas props. Veja nas props.

    // da mesma maneira, poderia pegar somente os dados que eu quero via destructuring nas props. veja nas props.

    // vamos retirar a key deste lugar pois ela deve estar onde o MAP está.
    return(
        <div className="post">
          <img src={cover} alt=""/>
          <div /*key={id}*/  className="post-content">
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        </div>
    )
}