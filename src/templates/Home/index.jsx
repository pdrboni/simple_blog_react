import { Component } from 'react';
import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';


class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: '',
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos.slice(page, postsPerPage), allPosts: postsAndPhotos });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({searchValue: value});
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue ? allPosts.filter(post => { return post.title.toLowerCase().includes(searchValue.toLowerCase());}) : posts;
    // quando passamos estados para um componente como estamos fazendo com PostCard, estamos criando chaves e valores dentro do objeto props.
    // note que ao atribuir um valor de "onClick" no COMPONENTE, eu não estou utilizando o evento sintético onClick, e sim criando um atributo
    // na minha classe Button que recepe onClick em suas props (será só mais uma chave e valor no objeto props.)

    // O evento sintético onChange, recebe uma função (o evento que estamos trabalhando, por sua vez, contendo as informações do evento como target por exemplo)
    return (
      <section className="container">
        {/*no js abaixo, esatamos transformando o searchValue em um bool com o operador !! e usando isso com uma operação de curto circuito (&&). Como estamos retornando mais de um elemento JSX (h1, br e br) temos que envolvê-los em uma tag mãe*/}

        <div className="search-container">
          {!!searchValue && (
            <>
              <h1>Search value: {searchValue}</h1>
            </>
          )}
          
          <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}/>
        )}

        {filteredPosts.length === 0 && (
          <p>No posts with this title :(</p>
        )}

        <div className='button-container'></div>
        {!searchValue && (
          <Button
            text={'Any Text'}
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          /> 
        )}

      </section>
    );
  }
}
export default Home;
