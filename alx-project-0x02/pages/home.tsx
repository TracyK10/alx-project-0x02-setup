import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const HomePage = () => {
  const featuredProperties = [
    {
      title: 'Beachfront Paradise',
      content: 'Wake up to the sound of waves in this stunning beachfront villa with private access to a pristine sandy beach.',
    },
    {
      title: 'Mountain Retreat',
      content: 'Escape to the mountains in this cozy cabin with breathtaking views and modern amenities.',
    },
    {
      title: 'City Center Loft',
      content: 'Experience the heart of the city in this stylish loft located in the downtown district.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home - Airbnb Clone</title>
        <meta name="description" content="Find your perfect vacation rental" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Discover Amazing Stays
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore unique homes, apartments, and more for your next trip.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <Card
              key={index}
              title={property.title}
              content={property.content}
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
    </div>
  );
};

export default HomePage;
