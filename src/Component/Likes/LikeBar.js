import "./styleLike.css";
import React from "react";

const LikeBar = props => {
	const { likeCount, count } = props;
	return (
		<div>
			<div className="like-container">
				<a href="#" onClick={likeCount} className="likeBtn" />
				{count.count}
			</div>
		</div>
	);
};

export default LikeBar;
