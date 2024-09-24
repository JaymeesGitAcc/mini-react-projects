import { useState } from "react";

const Comment = ({ comment, replies, username }) => {
    const [showReplies, setShowReplies] = useState(false);

    return (
        <div className="pl-4">
            <div>
                <div>{username}</div>
                <div className="text-sm text-slate-900 pl-2 my-1 font-semibold">
                    {comment}
                </div>
            </div>

            {replies?.length ? (
                <button
                    onClick={() => setShowReplies(!showReplies)}
                    className={`${
                        showReplies ? "text-slate-400" : "text-blue-400"
                    }`}
                >
                    {showReplies ? "Hide Replies" : "Show Replies"}
                </button>
            ) : null}
            <div className="border-l-2 border-slate-300 ">
                {showReplies
                    ? replies.map((comment) => (
                          <Comment key={comment.id} {...comment} />
                      ))
                    : null}
            </div>
        </div>
    );
};

export default Comment;
