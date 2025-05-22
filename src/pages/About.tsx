
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import image6 from '../assets/image6.jpg';
import image2 from '../assets/image2.jpg';



const About = () => {
  return (
    <Layout>
      <div className="page-transition">
        {/* Header Image */}
        <section className="h-[50vh] relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${image2})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
          <div className="container-custom relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold">About FG-Clothings</h1>
          </div>
        </section>
        
        {/* Brand Story */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-2">Our Story</h2>
                <div className="w-20 h-1 bg-gold mb-8"></div>
                
                <p className="text-gray-300 mb-6">
                  FG-Clothings began with a vision to redefine men's fashion by combining timeless elegance with modern design sensibilities.
                  Founded with a passion for quality craftsmanship, we sought to create clothing that makes men feel confident and stylish in any setting.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Each piece in our collection is thoughtfully designed, focusing on superior fit, comfort, and versatility.
                  We believe that great style should be accessible and adaptable to different occasions and personal preferences.
                </p>
                
                <p className="text-gray-300">
                  Today, FG-Clothings continues to evolve, always staying true to our founding principles while embracing innovation 
                  in design and sustainability in our practices.
                </p>
              </div>
              
              <div className="relative h-[400px]">
                <img 
                  src={image6} 
                  alt="FG-Clothings Story" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-gold m-4 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy */}
        <section className="py-20 bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: "Quality",
                  description: "We prioritize exceptional materials and craftsmanship in every garment."
                },
                {
                  title: "Style",
                  description: "Our designs blend classic elements with contemporary trends for timeless appeal."
                },
                {
                  title: "Comfort",
                  description: "We believe that looking good should never come at the expense of feeling good."
                }
              ].map((item, index) => (
                <div key={index} className="p-8 border border-gray-800 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 text-center">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-6">Experience FG-Clothings</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our latest collections and discover how FG-Clothings can elevate your wardrobe.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/lookbook" 
                className="px-8 py-3 bg-gold text-black font-medium rounded hover:bg-gold/90 transition-colors"
              >
                View Lookbook
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 border border-white text-white font-medium rounded hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
