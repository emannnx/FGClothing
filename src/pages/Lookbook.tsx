
import React from 'react';
import Layout from '@/components/Layout';
import LookbookItem from '@/components/LookbookItem';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import { cloth_data } from '@/utils/userInfo';
import { Link } from 'react-router-dom';


const Lookbook = () => {
  // Mock data for lookbook items
  
  return (
    <Layout>
      <div className="page-transition">
        <section className="py-20">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">The Lookbook</h1>
            <div className="w-20 h-1 bg-gold mb-10"></div>
            
            <p className="text-gray-300 max-w-3xl mb-16">
              Explore our latest collections showcasing the finest in men's fashion. 
              Each piece is designed with attention to detail and a focus on quality materials.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloth_data.map((item, index) => (
                <div key={item.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                 <Link to={`/ImageOpen/${item.id}`}>
                   <LookbookItem 
                    image={item.image}
                    video={item.video}
                    title={item.title}
                    description={item.description}

                  /> 
                 </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lookbook Banner */}
        <section className="py-16 bg-secondary">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Elevate Your Wardrobe</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our collections are designed to provide versatility, comfort, and style for the modern gentleman.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Lookbook;
