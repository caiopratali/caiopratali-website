import { Post } from "@/components/post";
import { posts } from "@/utils/data";

export default function Blog() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 gap-10 max-w-screen-xl mx-auto">
      {posts.map((post) => (
        <Post key={post.slug} {...post} />
      ))}
    </div>
  );
}
