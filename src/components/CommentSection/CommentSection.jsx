import Comment from "./Comment"

function CommentSection({ comments }) {
    return (
        <div className="bg-slate-100 p-4 rounded-md">
            {comments?.map((comment) => (
                <Comment key={comment.id} {...comment} />
            ))}
        </div>
    )
}

export default CommentSection
