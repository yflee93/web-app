import React from "react";
import {useSelector} from "react-redux";

const CollectionStats = ({toggle, screen, owns}) => {
    const {user} = useSelector(state=>state.auth);
    const {profiles} = useSelector(state => state.profile);

    let ownComponent =
        (<div className="mt-3">
        <ul className="list-group">
            <li className={`list-group-item py-3 ${screen === 'favorite' ? "text-primary" : ""}`} onClick={()=>toggle('favorite')}>
                <i className="far fa-heart fa-fw"/>
                <span className="ps-3">Favorite</span>
            </li>
            <li className={`list-group-item py-3 ${screen === 'bookmark' ? "text-primary" : ""}`} onClick={()=>toggle('bookmark')}>
                <i className="far fa-bookmark fa-fw"/>
                <span className="ps-3">Want to watch</span>
            </li>
            <li className={`list-group-item py-3 ${screen === 'recommend' ? "text-primary" : ""}`} onClick={()=>toggle('recommend')}>
                <i className="far fa-thumbs-up fa-fw"/>
                <span className="ps-3">Recommended</span>
            </li>
            <li className={`list-group-item py-3 ${screen === 'review' ? "text-primary" : ""}`} onClick={()=>toggle('review')}>
                <i className="far fa-star fa-fw"/>
                <span className="ps-3">Reviews</span>
            </li>
            {
                user && user.type === "reviewer" &&
                (<li className={`list-group-item py-3 ${screen === 'article' ? "text-primary" : ""}`} onClick={()=>toggle('article')}>
                    <i className="fas fa-book fa-fw"/>
                    <span className="ps-3">Articles</span>
                </li>)
            }
        </ul>
    </div>);

    let otherComponent =
        (<div className="mt-3">
            <ul className="list-group">
                <li className={`list-group-item py-3 ${screen === 'recommend' ? "text-primary" : ""}`} onClick={()=>toggle('recommend')}>
                    <i className="far fa-thumbs-up fa-fw"/>
                    <span className="ps-3">Recommended</span>
                </li>
                <li className={`list-group-item py-3 ${screen === 'review' ? "text-primary" : ""}`} onClick={()=>toggle('review')}>
                    <i className="far fa-star fa-fw"/>
                    <span className="ps-3">Reviews</span>
                </li>
                {
                    profiles && profiles.user.type === "reviewer" &&
                    (<li className={`list-group-item py-3 ${screen === 'article' ? "text-primary" : ""}`} onClick={()=>toggle('article')}>
                        <i className="fas fa-book fa-fw"/>
                        <span className="ps-3">Articles</span>
                    </li>)
                }
            </ul>
        </div>);

    if (owns) {
        return ownComponent;
    }
    else {
        return otherComponent;
    }
}

export default CollectionStats;

