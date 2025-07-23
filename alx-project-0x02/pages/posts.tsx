import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const PostsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Posts | Airbnb Clone</title>
        <meta name="description" content="Browse all posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Beachfront Paradise"
            content="Discover the most beautiful beachfront properties for your next vacation."
            className="h-full transform transition-transform duration-300 hover:-translate-y-1"
            titleClassName="text-rose-600"
          />
          <Card
            title="Mountain Retreats"
            content="Escape to the mountains and enjoy breathtaking views in these cozy retreats."
            className="h-full transform transition-transform duration-300 hover:-translate-y-1"
            titleClassName="text-rose-600"
          />
          <Card
            title="City Breaks"
            content="Experience the best urban accommodations in the world's most exciting cities."
            className="h-full transform transition-transform duration-300 hover:-translate-y-1"
            titleClassName="text-rose-600"
          />
        </div>
      </main>
    </div>
  );
};

export default PostsPage;
