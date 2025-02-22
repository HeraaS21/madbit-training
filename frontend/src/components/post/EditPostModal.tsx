import { useState, useEffect } from "react";
import { useEditPost } from "../../hooks/ useUserPosts";


interface EditPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    id: number;
    title: string;
    text: string;
  } | null;
}

const EditPostModal: React.FC<EditPostModalProps> = ({ isOpen, onClose, post }) => {
  const { mutate, isLoading } = useEditPost();
  const [postData, setPostData] = useState({ title: "", text: "" });

 
  useEffect(() => {
    if (post) {
      setPostData({ title: post.title, text: post.text });
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;
    mutate(
      { id: post.id, ...postData },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
      
          <div>
            <label className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              value={postData.title}
              onChange={(e) => setPostData({ ...postData, title: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium">Text</label>
            <textarea
              value={postData.text}
              onChange={(e) => setPostData({ ...postData, text: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-md p-2 h-32 resize-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostModal;
