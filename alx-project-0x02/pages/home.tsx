import React from 'react';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
  const cardData = [
  { title: "Smartphone X", content: "Latest Model, High-Res Camera" },
  { title: "Wireless Headphones", content: "Noise-Cancelling, 20hr Battery" },
  { title: "Smartwatch Series 5", content: "Fitness Tracking, HR Monitor" },
  { title: "Gaming Laptop Pro", content: "RTX 4080, 144Hz Display" },
  { title: "4K Ultra HD TV", content: "65-inch, Smart Features" },
  { title: "Coffee Maker Deluxe", content: "Programmable, Brews 12 Cups" }
  ]
  return (
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          cardData.map((item, index) => (
            <Card key={index} title={item.title} content={item.content} />
          ))}
        
        </div>
  );
};

export default HomePage;