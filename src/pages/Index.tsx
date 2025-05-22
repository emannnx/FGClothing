
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import BgVideo from '../assets/BgVIdeo.mp4';
import ImageOpen from '@/components/ImageOpen';
import { cloth_data }  from '@/utils/userInfo';

const Index = () => {
  console.log(cloth_data.slice(0,3))
  return (
    <Layout>
      <div className="page-transition">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
                    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${image2})` }}></div>
                  {/* <div className="absolute inset-0 bg-cover bg-center opacity-50"style={{ backgroundImage: `url(${BgVideo})` }}></div>  */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Redefining <span className="text-gold">Men's</span> Style
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Discover our curated collection of modern, elegant clothing designed for the contemporary man.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  className="bg-gold text-black hover:bg-gold/90 px-8"
                >
                  <Link to="/lookbook">Explore Lookbook</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-white hover:bg-white/10 px-8"
                >
                  <Link to="/about">About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Section */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Pieces</h2>
            <div className="w-20 h-1 bg-gold mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloth_data.slice(0,3).map((item, index) => (
                <div key={index} className="overflow-hidden group cursor-pointer animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                 <Link to={`./ImageOpen/${item.id}`}>
                  <div className="overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-[350px] object-cover image-hover-effect"
                    />
                  </div>''
                 </Link>
                  <div className="pt-4">
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <Link to="/lookbook" className="text-gold hover:underline text-sm">
                      View Collection →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div style={{width: "100%", height: "auto", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2%"}}>
              
                <Link to="/lookbook" >
                    <button style={{width: "auto", height: "auto", background: "gold",fontWeight: "bold", padding: 20, borderRadius: 12, color: "black"}}>
                        View all Collection →
                    </button>
                    </Link>
          
            </div>
          </div>
        </section>
        
        {/* About Excerpt Section */}
        <section className="py-20 bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">The Brand</h2>
                <div className="w-20 h-1 bg-gold mb-8"></div>
                <p className="text-gray-300 mb-6">
                  FG-Clothings represents a new era of men's fashion, where style meets functionality.
                  Our pieces are designed with the modern man in mind, providing elegance for every occasion.
                </p>
                <p className="text-gray-300 mb-8">
                  Each collection is carefully crafted to ensure quality, comfort, and a distinct aesthetic 
                  that sets the wearer apart.
                </p>
                <Button asChild className="bg-gold text-black hover:bg-gold/90 px-8">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              
              <div className="relative h-[500px] animate-fade-in">
                <img 
                  src={image4} 
                  alt="FG-Clothings Design" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-gold m-4 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-[url('https://images.unsplash.com/photo-1565277562170-6628d4c5a69e?ixlib=rb-4.0.3')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Have questions about our collections or interested in collaborations? 
              We'd love to hear from you.
            </p>
            <Button asChild className="bg-gold text-black hover:bg-gold/90 px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
