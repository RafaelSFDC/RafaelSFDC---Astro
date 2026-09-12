import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  coverImageAlt?: string;
  content: string;
  author: {
    name: string;
    picture: string;
    bio?: string;
    social?: {
      twitter?: string;
      linkedin?: string;
      instagram?: string;
    };
  };
  // New fields for professional blog
  category?: string;
  tags?: string[];
  featured?: boolean;
  readingTime?: number;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    metaDescription?: string;
  };
  webstoryLayout?: string; // Layout for webstories
  audio?: string; // URL for the audio version of the post
  transcription?: string; // Text content for audio transcription
  pdfUrl?: string; // URL for downloadable PDF version
  audioUrl?: string; // URL for audio file (alternative to audio field)
};

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${realSlug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Partial<Post> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field as keyof Post] = data[field];
    }
  });

  return items as Post;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
