
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <div className="page-transition">
        <section className="py-20">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Get In Touch</h1>
            <div className="w-20 h-1 bg-gold mb-10"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-8">
                  We'd love to hear from you. Whether you have questions about our collections, 
                  interested in collaborations, or simply want to share your thoughts, please don't hesitate to reach out.
                </p>
                
                <div className="mb-12">
                  <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a href="mailto:fasinugbenga67@gmail.com" className="hover:text-gold">
                        fasinugbenga67@gmail.com
                      </a>
                      <p>Phone: <span className="hover:text-gold">+234-81-7761-5823</span></p>
                     <p>Location: <span className="hover:text-gold">28 King George v Road,Onikan,Lagos., Lagos, Nigeria 101231</span></p>
                    </p>
                  </div>
                </div>
                
                <div className="p-6 bg-secondary rounded-lg">
                  <h3 className="text-xl font-medium mb-4">How It Works</h3>
                  <p className="text-gray-400 text-sm">
                    When you submit this form, it will open your default email client 
                    with a pre-filled message addressed to FG-Clothings. Simply review 
                    your message and click send in your email application.
                  </p>
                </div>
              </div>
              
              <div className="bg-black/30 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
