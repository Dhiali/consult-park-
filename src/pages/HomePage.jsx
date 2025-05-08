import HeroSection from '../components/Hero';
import HomePageCard from '../components/HomePageCard'; 
import VerticalTimeline from '../components/VerticalTimeline';
import SuccessStories from '../components/SuccessStories';
import '../styles/Timeline.css'; 
import '../styles/SuccessStories.css'; 
import '../styles/BlogResources.css'; 


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

  const services = [
    {
      id: 1,
      title: ' Reduce Costs',
      description: 'Save up to 70% on operational expenses',
    },
    {
      id: 2,
      title: 'Increase Efficiency',
      description: 'Focus on growth, we’ll handle the details.',
    },
    {
      id: 3,
      title: 'No Rigid Contracts ',
      description: 'Scale your workforce up or down as needed.',
    },
    {
      id: 4,
      title: 'Fluent & Culturally Aligned Communication',
      description: 'Professionals trained for global markets.',
    },
    {
      id: 5,
      title: 'Highly Skilled & Certified Talent',
      description: 'Experts in their fields, not just degree holders.',
    },
    {
      id: 6,
      title: 'Office-Based Professionals',
      description: 'Reliable, structured, and fully managed teams.',
    },
    {
      id: 7,
      title: '100% Dedicated Workforce',
      description: 'Focused professionals committed to your success.',
    },
    {
      id: 8,
      title: 'Performance-Driven Approach',
      description: 'Regular training and quality assurance for excellence.',
    },
    {
      id: 9,
      title: 'Contact Us',
      description: 'Let’s Build Something Great!',
      button: true, 
    },
   
  ];

  return (
    <main className="bg-black text-white">
      <HeroSection showContactButton={false} /> {/* Hide the Contact Us button in HeroSection */}
      <section className="about-section container mx-auto px-6 md:px-16 py-12">
        {/* Added container and spacing classes */}
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-300 leading-relaxed">
          Consult Park specializes in outsourcing virtual teams to support international companies in
          achieving their business goals. By connecting organizations with skilled professionals, Consult
          Park enables businesses to enhance productivity, streamline operations, and scale effectively.
          The company is committed to delivering tailored solutions that align with the unique needs of
          each client, fostering growth and innovation across industries.
        </p>
      </section>
      <section className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16 py-12">
        {services.map((service, index) => (
          <HomePageCard
            key={service.id}
            title={service.title}
            description={service.description}
            showIcon={index < 3}
            customIcon={
              index === 3
                ? 'comment'
                : index === 4
                ? 'graduation'
                : index === 5
                ? 'building'
                : index === 6
                ? 'hourglass'
                : index === 7
                ? 'chart'
                : index === 8
                ? 'mail'
                : null
            } 
            button={service.button} 
          />
        ))}
      </section>
      <VerticalTimeline /> {/* Add the VerticalTimeline component */}
      <SuccessStories /> {/* Add the SuccessStories component */}
      <section className="blog-resources-section px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Blog & Resources</h2>
        <p className="text-xl text-white-300 text-center mb-8">
          📚 Stay ahead with expert insights on outsourcing, remote work, and business efficiency.
        </p>
        <ul className="blog-list">
          <li className="blog-item">🔹 How to Scale Your Business with Virtual Staffing</li>
          <li className="blog-item">🔹 The Future of Remote Work & Why It Matters</li>
          <li className="blog-item">🔹 Top 5 Benefits of Outsourcing Your Business Operations</li>
        </ul>
        <div className="text-center mt-8">
          <a
            href="/blog"
            className="btn btn-success px-4 py-2 rounded-full text-white bg-lime-400 hover:bg-lime-500 transition"
          >
            📩 Read More on Our Blog | Explore Articles
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
