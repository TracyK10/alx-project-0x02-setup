import Head from 'next/head';
import Header from '../components/layout/Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Airbnb Clone - Welcome</title>
        <meta name="description" content="Welcome to our Airbnb Clone" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Our Airbnb Clone
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover amazing places to stay and unique experiences around the world.
        </p>
        <button className="bg-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors">
          Start Exploring
        </button>
      </main>
    </div>
  );
};

export default Home;