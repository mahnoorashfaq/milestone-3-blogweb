import { useState } from "react";

const CommentSection = () => {
    const [comments, setComments] = useState<string[]>([]);;
    const [newComment, setNewComment] = useState("");

    const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4  rounded-lg shadow text-gray-500">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 font-serif">Comments</h2>
            <form onSubmit={handleAddComment} className="flex flex-col gap-3">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="p-2 border rounded-md text-xs md:text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button
                    type="submit"
                    className="bg-gray-500 text-white text-xs md:text-sm lg:text-base py-2 px-4 rounded-md hover:bg-gray-600"
                >
                    Add Comment
                </button>
            </form>
            <ul className="mt-6 space-y-3">
                {comments.map((comment, index) => (
                    <li
                        key={index}
                        className="p-3 bg-white rounded-md shadow-sm border border-gray-200"
                    >
                        {comment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentSection;
