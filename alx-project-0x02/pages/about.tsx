import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About - Airbnb Clone</title>
        <meta name="description" content="Learn more about our Airbnb Clone" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Our Platform</h1>
        <div className="prose max-w-3xl mb-12">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our platform where you can discover and share amazing places to stay around the world.
            Our mission is to connect travelers with unique accommodations and experiences.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Whether you're looking for a cozy apartment in the city or a peaceful retreat in nature,
            we've got you covered with our wide selection of properties.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Button Sizes</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="small" onClick={() => alert('Small button clicked!')}>
                Small Button
              </Button>
              <Button size="medium" onClick={() => alert('Medium button clicked!')}>
                Medium Button
              </Button>
              <Button size="large" onClick={() => alert('Large button clicked!')}>
                Large Button
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Button Shapes</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button shape="rounded-sm" onClick={() => alert('Rounded-sm button clicked!')}>
                Rounded Small
              </Button>
              <Button shape="rounded-md" onClick={() => alert('Rounded-md button clicked!')}>
                Rounded Medium
              </Button>
              <Button shape="rounded-full" onClick={() => alert('Rounded-full button clicked!')}>
                Rounded Full
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Combined Examples</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="small" shape="rounded-sm">
                  Small & Rounded-sm
                </Button>
                <Button size="medium" shape="rounded-md">
                  Medium & Rounded-md
                </Button>
                <Button size="large" shape="rounded-full">
                  Large & Rounded-full
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="large" shape="rounded-full" className="px-8">
                  Custom Width
                </Button>
                <Button size="medium" shape="rounded-full" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
