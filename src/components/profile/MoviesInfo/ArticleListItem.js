import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteArticle} from "../../../actions/article";

const ArticleListItem = ({article, owns}) => {
    const {_id, author} = article
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const deleteArticleClickHandler = () => {
        deleteArticle(dispatch, _id, 1, author);
    }
    return (
        <li className="list-group-item">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-4">
                        <img src={article.poster}
                             alt="movie_poster"
                             className="img-fluid movie-poster"/>
                    </div>
                    <div className="col-8">
                        {
                            (owns || (user && user.type === 'admin')) && (
                                <i className="fas fa-times text-white-50 fa-pull-right"
                                   onClick={deleteArticleClickHandler} />
                            )
                        }

                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p>{article.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ArticleListItem;