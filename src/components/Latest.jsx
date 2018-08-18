import React from 'react';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4c8a13d7097c40318a5c3ab17890d18d');

function MakeCard(props) {
  console.log("FUUUCK", props);
  const articles = props.articles;
 
  const listArticles = articles.slice(0, 4).map(article => {
      const imageFound = () => (article.urlToImage ? (article.urlToImage) : "./elizabeth.jpg")
      
      
      return (
        <div className="card" key={article.publishedAt}>
          <img id="card-image" className="card-img-top" src={imageFound()} alt="Img not found"    />
          <div className="card-body">
            <h5 className="card-title"><a href={article.url} target="_blank">{article.title}</a></h5>
            <p className="card-text">{article.description}</p>
            <p className="card-text"><small className="text-muted">Source: {article.source.name}</small></p>
          </div>
        </div>
      )
    })
    const listArticles2 = articles.slice(4, 8).map(article => {
      const imageFound = () => (article.urlToImage ? (article.urlToImage) : "./elizabeth.jpg")
      
      return (
        <div className="card" key={article.publishedAt}>
          <img id="card-image" className="card-img-top" src={imageFound()} alt="Img not found"    />
          <div className="card-body">
            <h5 className="card-title"><a href={article.url} target="_blank">{article.title}</a></h5>
            <p className="card-text">{article.description}</p>
            <p className="card-text"><small className="text-muted">Source: {article.source.name}</small></p>
          </div>
        </div>
      )
    })
  return (
    <div>
      <div className="card-deck">{listArticles}</div>
      <div className="card-deck">{listArticles2}</div>
    </div>
  )
}

export default class Latest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      description: null,
      articles: [],
    };
    this.apiCall = this.apiCall.bind(this);
  }

  componentDidMount() {
    this.apiCall();
  }

  
  apiCall() {
    const currentTime = new Date().toISOString();
    const fourWeeksPrior = new Date(Date.now() - 12096e5 - 12096e5).toISOString();

    newsapi.v2.everything({
      q: 'elizabeth holmes theranos',
      from: fourWeeksPrior,
      to: currentTime,
      language: 'en',
      sortBy: 'relevancy',
      pageSize: 8,
      page: 1,
    }).then(response => {
      console.log("BLAH", response)
      this.setState({
        loading: false,
        description: response.articles[0].description,
        articles: response.articles,
      })

      return response.articles;
    });
  }

  render() {
    return (
      <div>
        <h1 className="page-title" >Latest News</h1>

        {this.state.loading && (
          <p>Loading...</p>
        )}

        {!this.state.loading && (
          <div>
            <MakeCard articles={this.state.articles} />
          </div>
        )}

      </div>
    );
  }
}