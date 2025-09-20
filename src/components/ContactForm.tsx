import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Inquiry } from '../types';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

interface ContactFormProps {
  onSubmit: (data: Inquiry) => Promise<void>;
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  destination: z.string().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
  travelers: z.number().min(1, 'Number of travelers must be at least 1'),
  budget: z.string().optional(),
  message: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await onSubmit(data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Honeymoon packages',
    'Hajj & Umra',
    'Worldwide Air tickets',
    'Travel Insurance',
    'Visa Services',
    'Hotel Booking',
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to start planning your dream trip? Fill out the form below and our travel experts 
            will get back to you within 24 hours with a personalized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-secondary-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-secondary-600 mb-8">
                Our travel experts are standing by to help you plan the perfect journey. 
                Contact us today and let's make your travel dreams come true.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Phone</h4>
                  <p className="text-secondary-600">+44 20 1234 5678</p>
                  <p className="text-sm text-secondary-500">Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Email</h4>
                  <p className="text-secondary-600">info@royalgatetravels.com</p>
                  <p className="text-sm text-secondary-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Office</h4>
                  <p className="text-secondary-600">123 Travel Street, London, UK</p>
                  <p className="text-sm text-secondary-500">Visit us for in-person consultations</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-secondary-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Best price guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Licensed travel agents</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Halal-friendly options</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email.message}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Phone and Service */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className={`input-field ${errors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.phone.message}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    {...register('service')}
                    className={`input-field ${errors.service ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.service.message}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Destination and Travel Dates */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Preferred Destination
                </label>
                <input
                  {...register('destination')}
                  type="text"
                  className="input-field"
                  placeholder="Where would you like to go?"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Travel Date From
                  </label>
                  <input
                    {...register('dateFrom')}
                    type="date"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Travel Date To
                  </label>
                  <input
                    {...register('dateTo')}
                    type="date"
                    className="input-field"
                  />
                </div>
              </div>

              {/* Travelers and Budget */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Number of Travelers *
                  </label>
                  <input
                    {...register('travelers', { valueAsNumber: true })}
                    type="number"
                    min="1"
                    className={`input-field ${errors.travelers ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="How many people?"
                  />
                  {errors.travelers && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.travelers.message}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    {...register('budget')}
                    className="input-field"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under £1,000</option>
                    <option value="1000-2500">£1,000 - £2,500</option>
                    <option value="2500-5000">£2,500 - £5,000</option>
                    <option value="5000-10000">£5,000 - £10,000</option>
                    <option value="over-10000">Over £10,000</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Special Requests or Message
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Tell us about your travel preferences, special requirements, or any questions you have..."
                />
              </div>

              {/* Terms and Conditions */}
              <div>
                <label className="flex items-start space-x-3">
                  <input
                    {...register('acceptTerms')}
                    type="checkbox"
                    className={`mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500 ${
                      errors.acceptTerms ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="text-sm text-secondary-600">
                    I agree to the{' '}
                    <a href="#" className="text-primary-500 hover:text-primary-600 underline">
                      Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-primary-500 hover:text-primary-600 underline">
                      Privacy Policy
                    </a>
                    . *
                  </span>
                </label>
                {errors.acceptTerms && (
                  <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.acceptTerms.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg py-4 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Request</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-700 font-medium">
                    Thank you! Your request has been submitted successfully. We'll get back to you within 24 hours.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-700 font-medium">
                    Sorry, there was an error submitting your request. Please try again or contact us directly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
