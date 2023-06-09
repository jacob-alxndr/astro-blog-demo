import PostPreview from "./post-preview";

export default function MoreStories({ posts, preview }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-20 gap-y-20 md:gap-y-20 mb-32">
        {posts.map((post) => {
          const hrefLink = preview
            ? `/preview/posts/${post?.slug}`
            : `/posts/${post?.slug}`;
          return (
            <PostPreview
              preview={preview}
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              hrefLink={hrefLink}
            />
          );
        })}
      </div>
    </section>
  );
}
