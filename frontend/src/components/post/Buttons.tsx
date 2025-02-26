import { Button } from "@fattureincloud/fic-design-system";
import { useDeletePost } from "../../hooks/useDeletePost";


interface ButtonsProps {
  post: {
    id: number;
    title: string;
    text: string;
  };
}

const Buttons: React.FC<ButtonsProps> = ({
  post,
  onEdit,
  editingPost,
 
}) => {
  const deletePost = useDeletePost();

  const handleDelete = () => {
    deletePost.mutate(post.id);
  };

  return (
    <div className="flex gap-2 mt-3">
      <Button
        color="grey"
        onClick={() => onEdit(editingPost)}
        size="medium"
        text="Edit"
        type="text"
      />

      <Button
        color="red"
        onClick={handleDelete}
        size="medium"
        text="Delete"
        type="text"
      />
    </div>
  );
};

export default Buttons;
