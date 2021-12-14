import React from "react";
import {Link} from "react-router-dom";

const ArticleList = ({articles}) => {
    return(
        <>
            <div className="list-group pe-0">
                {
                    articles.map(article => {
                        if (article){
                            return(
                                <>
                                    <Link to={`/profile/${article.author}`} className="list-group-item content-list-group-item">
                                        <div className="row ps-3">
                                            Title: {article.title}
                                        </div>
                                        <div className="row ps-3">
                                            {article.content}
                                        </div>
                                    </Link>
                                </>
                            );
                        }
                        else{
                            return(<></>);
                        }
                    })
                }
            </div>
        </>
    );
};

export default ArticleList;