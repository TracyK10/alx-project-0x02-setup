import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
  error?: string;
}

const UsersPage = ({ users, error }: UsersPageProps) => {
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-6 bg-red-50 rounded-lg max-w-md">
          <p className="text-red-600 font-medium">Error loading users</p>
          <p className="text-gray-600 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Users | Airbnb Clone</title>
        <meta name="description" content="Browse all users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Users</h1>
          <span className="text-gray-500">{users.length} users found</span>
        </div>
        
        {users.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No users found.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users = await response.json();
    
    return {
      props: {
        users,
      },
      // Re-generate the page at most once every hour
      revalidate: 3600,
    };
  } catch (error) {
    return {
      props: {
        users: [],
        error: error instanceof Error ? error.message : 'An error occurred',
      },
      // Re-generate the page after 5 minutes if there was an error
      revalidate: 300,
    };
  }
};

export default UsersPage;
