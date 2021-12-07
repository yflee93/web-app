import React from "react";

const ArticleListItem = ({article}) => {
    return (
        <li className="list-group-item">
            {article}
        </li>
    );
}

export default ArticleListItem;