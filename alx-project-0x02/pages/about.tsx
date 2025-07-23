import Head from 'next/head';
import Header from '../components/layout/Header';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About - Airbnb Clone</title>
        <meta name="description" content="Learn more about our Airbnb Clone" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Our Platform
        </h1>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our Airbnb Clone, a platform designed to connect travelers with unique accommodations around the world.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to create a community where hosts can share their spaces and travelers can find the perfect place to stay.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
