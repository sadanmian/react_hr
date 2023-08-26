import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=45796de0ad9542109dfd151293f2da9d";

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-3" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
