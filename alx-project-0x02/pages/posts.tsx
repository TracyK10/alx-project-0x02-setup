import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
  error?: string;
}

const PostsPage = ({ posts, error }: PostsPageProps) => {
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-6 bg-red-50 rounded-lg max-w-md">
          <p className="text-red-600 font-medium">Error loading posts</p>
          <p className="text-gray-600 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Posts | Airbnb Clone</title>
        <meta name="description" content="Browse all posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Latest Posts</h1>
          <span className="text-gray-500">{posts.length} posts found</span>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();
    
    return {
      props: {
        posts: posts.slice(0, 12), // Limit to 12 posts for better performance
      },
      // Re-generate the page at most once every 10 seconds
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        posts: [],
        error: error instanceof Error ? error.message : 'An error occurred',
      },
      // Re-generate the page after 10 seconds if there was an error
      revalidate: 10,
    };
  }
};

export default PostsPage;
