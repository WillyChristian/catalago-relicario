import "./styleLike.css";
import React from "react";

const LikeBar = props => {
	const { likeCount, count } = props;
	return (
		<div>
			<div className="like-container">
				<span href="#" onClick={likeCount} className="likeBtn" ></span>
				{count.count}
			</div>
		</div>
	);
};

export default LikeBar;
