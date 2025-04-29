import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-[125%] left-[-25.5%] pl-0 md:pl-64 py-20 px-6 bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-center leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
      >
        Hi, I'm Swati Gadekar
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        Driven Data Analyst with internship experience at Code Spyder Technologies. Proficient in Python,
        SQL, and data visualization tools such as Power BI and Matplotlib. Specialized in transforming complex
        datasets into actionable insights using feature engineering and predictive modeling. Successfully deployed
        real-world applications, including house price prediction and sentiment analysis. Passionate about leveraging
        data for impactful decisions.
      </motion.p>

      <div className="flex justify-center">
        <motion.a
          href="/path/to/your/cv.pdf"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          download="My_CV.pdf"
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
