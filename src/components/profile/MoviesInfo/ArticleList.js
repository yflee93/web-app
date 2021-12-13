import React from "react";
import {useSelector} from "react-redux";
import ArticleListItem from "./ArticleListItem";

const ArticleList = ({owns}) => {
    const {profiles} = useSelector(state => state.profile);
    if (profiles == null) {
        return null;
    }
    const {articles} = profiles;
    return (
        <div>
            <ul className="list-group">
                {
                    articles && articles.length > 0 && articles.map(article =>
                        <ArticleListItem key={article._id} article={article} owns={owns}/>)
                }
            </ul>
        </div>
    )
}

export default ArticleList;