import Head from 'next/head';
import Header from '../components/layout/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home - Airbnb Clone</title>
        <meta name="description" content="Find your perfect vacation rental" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Discover Amazing Stays
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Explore unique homes, apartments, and more for your next trip.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
