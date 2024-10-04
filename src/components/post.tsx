import Link from "next/link";
import Image from "next/image";

import { PostType } from "@/utils/data";

export function Post(post: PostType) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div>
        <Image src={post.image} alt="coffee" width={500} height={300} />
        <h2 className="text-3xl mt-5">{post.title}</h2>
        <p className="text-lg mt-2">{post.description}</p>
      </div>
    </Link>
  );
}
