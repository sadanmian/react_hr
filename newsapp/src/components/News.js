import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "michael.hicks@futurenet.com (Michael L Hicks)",
      title:
        "VR news of the week: Quest 3 leaks, Google XR in disarray, and Pico pivots",
      description:
        "AC's Michael Hicks and Nick Sutrich are gathering all the most important VR news in a weekly round-up every Saturday to cover everything you missed.",
      url: "https://www.androidcentral.com/gaming/virtual-reality/vr-news-of-the-week-august-25-2023",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/H5bGhuN56dv3b69RyKRFUZ-1200-80.jpg",
      publishedAt: "2023-08-26T06:00:25Z",
      content:
        "As part of a brand new series, Android Central Senior Editors Michael Hicks and Nick Sutrich are rounding up all of the news on hardware, game announcements, leaks, and cool updates related to the Me… [+5151 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: null,
      title:
        "The Ashes: England v Australia - youngsters who could play in upcoming series",
      description:
        "With the 2023 series over, BBC Sport looks at the young players England and Australia could field in the upcoming Ashes series.",
      url: "https://www.bbc.co.uk/sport/cricket/66337176",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/6CFE/production/_130620972_gettyimages-1489139068.jpg",
      publishedAt: "2023-08-03T06:08:14Z",
      content:
        "With a thrilling Ashes contest over, the eyes of fans suddenly deprived of their fix of England-Australia action are already drifting to the next series when Ben Stokes' side will try to win back the… [+5863 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Kevin Lynch",
      title:
        "England vs. Australia Livestream: How to Watch 5th Test Ashes Cricket From Anywhere - CNET",
      description:
        "The Wallabies go in search of their first series victory in England for over twenty years.",
      url: "https://www.cnet.com/deals/england-vs-australia-livestream-how-to-watch-5th-test-ashes-cricket-from-anywhere/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/706569673cf4286440aadaf14dd9131099ef29ec/hub/2023/06/15/629aee27-0ba4-4cdd-b824-bf152c8f1a4e/gettyimages-1498670652.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-07-27T09:40:04Z",
      content:
        "The Manchester weather may have put paid to this final Ashes instalment being a cliffhanger for the ages, but there's still plenty to play for as England face Australia at The Oval in London for this… [+7097 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Supreme Court suspends Rahul Gandhi's conviction in defamation case",
      description:
        "The ruling potentially allows Mr Gandhi to return to parliament and contest the 2024 general elections.",
      url: "https://www.bbc.co.uk/news/world-asia-india-66404405",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/0CDB/production/_129419230_rahul.jpg",
      publishedAt: "2023-08-04T09:00:19Z",
      content:
        "India's Supreme Court has suspended opposition leader Rahul Gandhi's conviction in a criminal defamation case. The Congress leader was sentenced to two years in jail in March for his 2019 comments a… [+1474 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "India's parliament reinstates Rahul Gandhi as MP",
      description:
        "The opposition leader had been disqualified in March after being convicted in a criminal defamation case.",
      url: "https://www.bbc.co.uk/news/world-asia-india-66425569",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/7AD7/production/_130674413_gettyimages-1575440781.jpg",
      publishedAt: "2023-08-07T06:09:23Z",
      content:
        "India's parliament has restored opposition leader Rahul Gandhi's lawmaker status two days after the Supreme Court suspended his conviction in a criminal defamation case. The Congress leader was disq… [+2291 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: null,
      title: "Watch: Snake invades Sri Lanka cricket match",
      description:
        "The reptile slithered onto a Lanka Premier League game in Colombo, Sri Lanka, bringing play to a halt.",
      url: "https://www.bbc.co.uk/news/av/world-asia-66373467",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/12070/production/_130604837_p0g44g33.jpg",
      publishedAt: "2023-08-01T11:09:43Z",
      content:
        "A large snake slithered onto a Lanka Premier League game in Colombo, Sri Lanka, bringing play to a halt. The reptile, believed to be a non-venomous rat snake, was ushered off the grounds before the … [+51 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-3" key={element.url}>
              <NewsItem
                title={element.title.slice(0, 45) + "....."}
                description={element.description.slice(0, 88) + "....."}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
