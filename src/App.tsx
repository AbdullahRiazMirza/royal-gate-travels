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
import type { Inquiry } from './types';

function App() {

  const handleFormSubmit = async (data: Inquiry) => {
    // Simulate API call
    console.log('Form submitted:', data);
    
    // In a real application, you would send this data to your backend API
    // Example:
    // const response = await fetch('/api/inquiries', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });
    
    // For now, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

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
        <ContactForm onSubmit={handleFormSubmit} />
      </main>
      <Footer />
    </div>
  );
}

export default App;