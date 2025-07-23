import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'Beachfront Paradise',
      content: 'Wake up to the sound of waves in this stunning beachfront villa with private access to a pristine sandy beach.',
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Mountain Retreat',
      content: 'Escape to the mountains in this cozy cabin with breathtaking views and modern amenities.',
      createdAt: new Date(),
    },
    {
      id: '3',
      title: 'City Center Loft',
      content: 'Experience the heart of the city in this stylish loft located in the downtown district.',
      createdAt: new Date(),
    },
  ]);

  const handleAddPost = ({ title, content }: { title: string; content: string }) => {
    const newPost = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date(),
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home - Airbnb Clone</title>
        <meta name="description" content="Find your perfect vacation rental" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Discover Amazing Stays
            </h1>
            <p className="text-xl text-gray-600">
              Explore unique homes, apartments, and more for your next trip.
            </p>
          </div>
          <button
            onClick={openModal}
            className="bg-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors"
          >
            + Create New Post
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              content={post.content}
              className="h-full transform transition-transform duration-300 hover:-translate-y-1"
              titleClassName="text-rose-600"
            />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Why Choose Us?"
            content="With over 1,000 properties worldwide, we offer the best selection of unique accommodations for every budget and preference."
            className="bg-rose-50 border-l-4 border-rose-500"
          />
          <Card
            title="Travel with Confidence"
            content="Our verified reviews and secure booking system ensure a safe and enjoyable travel experience."
            className="bg-blue-50 border-l-4 border-blue-500"
          />
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onPostSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;
