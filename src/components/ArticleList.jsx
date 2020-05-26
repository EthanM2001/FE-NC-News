import React, { Component } from 'react';
import ArticleCard from './ArticleCard'

class ArticleList extends Component {

state = {
    articles: [
        {
            "article_id": 28,
            "title": "High Altitude Cooking",
            "body": "Most backpacking trails vary only a few thousand feet elevation. However, many trails can be found above 10,000 feet. But what many people don’t take into consideration at these high altitudes is how these elevations affect their cooking.",
            "votes": 0,
            "topic": "cooking",
            "author": "happyamy2016",
            "created_at": "2018-05-27T03:32:28.514Z",
            "comment_count": "5",
        },
        {
            "article_id": 30,
            "title": "Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams",
            "body": "What if, for once, your Thanksgiving sides were just as dazzling as the centerpiece turkey? Imagine a world where presenting a platter of seasonal vegetables inspires the same amount of cooing that the turkey does. Welcome to the world of twice-baked butternut squash. Sure, you could just roast some squash wedges and call it a day. But where's the fun in that? To make this year's most impressive vegetable side, Epi's food director Rhoda Boone gave super-seasonal butternut squash the twice-baked potatoes treatment: Mash the inside of the vegetable with butter, cream, and anything else that might make it more delicious, then pile it back into the vegetable, bake it until golden and velvety. The result is a jaw-dropping, brightly colored sweet-meet-savory butternut squash side dish. Here are just a few more reasons this creation belongs on this year's Thanksgiving table:",
            "votes": 0,
            "topic": "cooking",
            "author": "jessjelly",
            "created_at": "2018-05-06T02:40:35.489Z",
            "comment_count": "8"
          },
    ]
}
    render() {
        return (
            <main className="AllArticles">
                    {this.state.articles.map((article) => {
                        return <ArticleCard key={article.article_id} {...article}/>
                    })}
            </main>
        );
    }
}

export default ArticleList;