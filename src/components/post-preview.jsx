import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";

import classNames from "classnames";
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  preview,
}) {
  const hrefLink = preview ? `/preview/posts/${slug}` : `/posts/${slug}`;
  return (
    <div className="shadow-small overflow-hidden rounded-xl">
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
          hrefLink={hrefLink}
        />
      </div>
      <div className="pt-2 pl-8 pr-8 pb-8 overflow-hidden">
        <h3 className="text-3xl mb-3 leading-snug">
          <a href={hrefLink} className="hover:underline">
            {title}
          </a>
        </h3>
        <div className="text-lg mb-4">
          <Date dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
