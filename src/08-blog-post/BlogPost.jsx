import Blogs from "./postsData";

const PostCard = ({ title, body, tags, reactions, views }) => {
  return (
    <div className="border border-gray-300 p-2 w-96 rounded-xl flex flex-col justify-evenly gap-2">
      <h4 className="">{title}</h4>
      <p className="text-sm">{body}</p>
      <div className="flex gap-2 ">
        {tags?.map((tag) => {
          return <span className="text-sm">{tag}</span>;
        })}
      </div>
      <div className="text-sm">
        👍 {reactions.likes} | 👎 {reactions.dislikes} | 👁️ {views}
      </div>
    </div>
  );
};

export default function BlogPosts() {
  return (
    <div className="p-2">
      <h2>Blog Posts </h2>
      <div className="my-2 flex flex-wrap gap-3.5">
        {Blogs?.map((blog) => {
          return <PostCard key={blog.id} {...blog} />;
        })}
      </div>
    </div>
  );
}
