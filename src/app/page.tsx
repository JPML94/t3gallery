import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://nh5ui9lo37.ufs.sh/f/VfYJ3QOr2wKo12eSrwaZaNJvq5jyligI80fYnMCz3eQOwTBb",
  "https://nh5ui9lo37.ufs.sh/f/VfYJ3QOr2wKojbaSNvlYVGi7RcnmLND5xghyOqXKF32dISls",
  "https://nh5ui9lo37.ufs.sh/f/VfYJ3QOr2wKob4bvM1xmBIZE0r6dOp3xFcqeD5SP7RvXst1z",
  "https://nh5ui9lo37.ufs.sh/f/VfYJ3QOr2wKo6RjrFYCq28e4FPsT6bXkrlSNI7xH0caAV3GY"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  
  const posts =  await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
          {posts.map((post) => (
            <div key={post.id}>{post.name}</div>
          ))}
          {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (  
            <div key={image.id + "-" + index} className="w-1/2 p-4">
              <img src={image.url} />
            </div>
          ))}
        </div>
    </main>
  );
}
