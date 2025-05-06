import HeroSection from '../components/Hero';
import FeatureCard from '../components/FeatureCard';


const Home = () => {
  const features = [
    {
      number: 1,
      title: 'Service for Any Level of Expertise.',
      description: 'Consult Park enables fast and flexible scaling.',
    },
    {
      number: 2,
      title: 'Industry best practices.',
      description: 'Top-tier certified professionals and global benchmarks.',
      highlight: true,
    },
    {
      number: 3,
      title: 'Protected by transparency.',
      description: 'Trackable metrics, no rigid contracts.',
    },
  ];

  return (
    <main className="bg-black text-white">
      <HeroSection /> {/* Ensure HeroSection is rendered here */}
      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-16 py-12">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </section>
    </main>
  );
};

export default Home;
