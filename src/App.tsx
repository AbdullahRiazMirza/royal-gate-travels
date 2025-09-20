import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import FeaturedPackages from './components/FeaturedPackages';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { services, featuredPackages, testimonials, faqItems, howItWorksSteps } from './data/constants';

function App() {

  // Email endpoint for form submissions
  // Replace this with your actual email service endpoint
  const emailEndpoint = import.meta.env.VITE_EMAIL_ENDPOINT || '';

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ServicesGrid services={services} />
        <FeaturedPackages packages={featuredPackages} />
        <HowItWorks steps={howItWorksSteps} />
        <Testimonials testimonials={testimonials} />
        <FAQ items={faqItems} />
        <ContactForm emailEndpoint={emailEndpoint} />
      </main>
      <Footer />
    </div>
  );
}

export default App;