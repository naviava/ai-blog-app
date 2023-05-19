// External packages.
import { FcCancel } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";

// Types.
import { Post } from "@prisma/client";

interface PostHeaderProps {
  post: Post;
  isEditable: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  post,
  isEditable,
  setIsEditable,
}) => {
  return (
    <>
      {/* Breadcrumbs. */}
      <h5 className="text-wh-300">{`Home  >  ${post.category}  >  ${post.title}`}</h5>
      {/* Category and edit. */}
      <div className="flex items-center justify-between">
        <h4 className="bg-accent-orange px-5 py-2 text-sm font-bold text-wh-900">
          {post.category}
        </h4>
        <div className="mt-4">
          {isEditable ? (
            <div className="flex justify-between gap-3">
              <button onClick={() => setIsEditable(false)}>
                <FcCancel size={24} />
              </button>
            </div>
          ) : (
            <button onClick={() => setIsEditable(true)}>
              <FaRegEdit size={24} className="text-accent-red" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PostHeader;
