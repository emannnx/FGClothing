
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <Layout>
      <div className="page-transition py-20 min-h-[70vh] flex items-center">
        <div className="container-custom text-center">
          <h1 className="text-gold text-6xl md:text-9xl font-bold mb-4">404</h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-6">Page Not Found</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-gold text-black hover:bg-gold/90 px-8">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
