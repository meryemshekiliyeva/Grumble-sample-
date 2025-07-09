import React from 'react';
import ComplaintCard from '../components/ComplaintCard';

const mockComplaints = [
  {
    title: 'Internet Connection Issues',
    company: 'CityNet',
    author: 'Orkhan Mammadov',
    date: 'July 9, 2025',
    summary: 'My internet has been down for the last 3 days. Customer service is not responding to my calls. This is unacceptable!',
  },
  {
    title: 'Incorrect Food Delivery',
    company: 'Wolt',
    author: 'Aysel Aliyeva',
    date: 'July 8, 2025',
    summary: 'I ordered a pizza but received a completely different order. The restaurant and Wolt are blaming each other.',
  },
    {
    title: 'Product Not Delivered',
    company: 'Trendyol',
    author: 'Leyla Huseynova',
    date: 'July 7, 2025',
    summary: 'I ordered a dress 2 weeks ago and it still hasn\'t been delivered. The tracking number is not working.',
  },
];


const Home = () => {
  return (
    <div>
      <section className="w-full py-20 md:py-28 lg:py-32 bg-muted/20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Voice Your Complaint
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-xl mt-4">
            Grumble is the platform where your voice is heard. Share your experiences and read others' stories.
          </p>
          <button className="mt-6 px-8 py-3 text-lg font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90">
            Submit a Complaint
          </button>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Recent Grumbles
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockComplaints.map((complaint, index) => (
              <ComplaintCard key={index} {...complaint} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;