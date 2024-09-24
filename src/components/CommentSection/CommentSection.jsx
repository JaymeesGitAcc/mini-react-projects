import Comment from "./Comment"

function CommentSection({ comments }) {
    return (
        <div className="bg-slate-200 min-h-screen">
            {comments?.map((comment) => (
                <Comment key={comment.id} {...comment} />
            ))}
        </div>
    )
}

export default CommentSection
