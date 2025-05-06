const HeroSection = () => {
    return (
      <section className="bg-black text-white py-20 px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
          Best <span className="text-gray-400">crypto</span> <br />
          <span className="text-lime-400">investing platform</span> for your future.
        </h1>
        <p className="mt-6 max-w-xl text-gray-300">
          At Consult Park, we connect businesses with world-class remote talent, helping them scale, optimise, and thrive...
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-lime-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition"
        >
          Contact Us
        </a>
      </section>
    );
  };
  