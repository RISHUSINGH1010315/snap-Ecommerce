import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Medal, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'Sarah founded ShopStyle with a vision to create a seamless online shopping experience.'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      bio: 'Michael oversees all technical aspects of the platform, ensuring a smooth user experience.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
      bio: 'Emily leads our design team, creating beautiful and functional interfaces.'
    },
    {
      name: 'David Kim',
      position: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      bio: 'David handles all our marketing initiatives and brand partnerships.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-100 to-purple-50 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">About ShopStyle</h1>
              <p className="text-lg text-gray-700 mb-8">
                We're on a mission to revolutionize your online shopping experience with 
                curated products, exceptional service, and transparent practices.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2020, ShopStyle began with a simple idea: to create an online shopping 
                  destination that combines quality, convenience, and excellent customer service.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small operation has grown into a comprehensive e-commerce platform 
                  offering thousands of products across multiple categories. Throughout our growth, 
                  we've remained committed to our core values of quality, transparency, and customer satisfaction.
                </p>
                <p className="text-gray-700">
                  Today, we're proud to serve customers worldwide, connecting them with products they 
                  love while maintaining the personal touch that has defined our business from day one.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                  alt="Team working together" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-5 -left-5 bg-purple-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Est. 2020</p>
                  <p>Serving happy customers worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                These principles guide everything we do and help us deliver an exceptional shopping experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag size={28} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
                  <p className="text-gray-700">
                    We curate only the finest products that meet our strict quality standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Medal size={28} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in every aspect of our service and operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={28} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
                  <p className="text-gray-700">
                    We build meaningful connections with our customers and partners.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart size={28} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Care</h3>
                  <p className="text-gray-700">
                    We care deeply about our customers, employees, and the environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                The passionate individuals behind ShopStyle who work tirelessly to bring you the best shopping experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
