import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteArticle} from "../../../actions/article";
import {useNavigate} from "react-router";

const ArticleListItem = ({article, owns}) => {
    const {_id, author, originalId} = article
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const deleteArticleClickHandler = () => {
        deleteArticle(dispatch, _id, 1, author);
    }
    const navigate = useNavigate();
    return (
        <li className="list-group-item">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-4">
                        <img src={article.poster}
                             alt="movie_poster"
                             className="img-fluid"
                             onClick={()=>{
                                 navigate(`/details/${originalId}`);
                             }}/>
                    </div>
                    <div className="col-8">
                        {
                            owns  && (
                                <i className="fas fa-2x fa-times text-white-50 fa-pull-right"
                                   onClick={deleteArticleClickHandler} />
                            )
                        }
                        {
                            (!owns && (user && user.type === 'admin')) && (
                                <i className="fas fa-2x fa-user-shield text-danger float-end"
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