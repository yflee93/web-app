import React from "react";

const ArticleList = ({articles}) => {
    return(
        <>
            <div className="list-group pe-0">
                {
                    articles.map(article => {
                        if (article){
                            return(
                                <>
                                    <div className="list-group-item content-list-group-item">
                                        <div className="row ps-3">
                                            Title: {article.title}
                                        </div>
                                        <div className="row ps-3">
                                            {article.content}
                                        </div>
                                    </div>
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