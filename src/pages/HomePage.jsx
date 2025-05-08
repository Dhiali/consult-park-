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
    { title: 'Reduce Costs' },
    { title: 'Increase Efficiency' },
    { title: 'No Rigid Contracts' },
    { title: 'Fluent Communication' },
    { title: 'Certified Talent' },
    { title: 'Office-Based Professionals' },
    { title: 'Dedicated Workforce' },
    { title: 'Performance-Driven Approach' },
  ];

  return (
    <main className="bg-black text-white">
      <HeroSection /> {/* Ensure HeroSection is rendered here */}
      <section className="feature-scroll-container">
        {features.map((feature, index) => (
          <div id={`card-${index}`} key={index}>
            <FeatureCard title={feature.title} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
