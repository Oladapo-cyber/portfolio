import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaSpinner } from 'react-icons/fa';
import { subscriptionService } from '../services/api';
import { useAuth } from '../context/AuthContext';

// Fallback plans if API is not available
const FALLBACK_PLANS = {
  free: {
    name: 'Free',
    price: 0,
    features: [
      'Up to 3 projects',
      'Basic analytics',
      'Community support',
      '1GB storage',
    ],
  },
  starter: {
    name: 'Starter',
    price: 9,
    features: [
      'Up to 10 projects',
      'Advanced analytics',
      'Email support',
      '10GB storage',
      'Custom domain',
    ],
  },
  professional: {
    name: 'Professional',
    price: 29,
    features: [
      'Unlimited projects',
      'Premium analytics',
      'Priority support',
      '100GB storage',
      'Custom domain',
      'API access',
      'Team collaboration',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    price: 99,
    features: [
      'Everything in Professional',
      'Unlimited storage',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security',
      'Audit logs',
    ],
  },
};

const Pricing = () => {
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(true);
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const { user } = useAuth();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await subscriptionService.getPlans();
        setPlans(data);
      } catch {
        setPlans(FALLBACK_PLANS);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const getPrice = (price) => {
    if (billingPeriod === 'yearly') {
      return Math.floor(price * 10); // 2 months free
    }
    return price;
  };

  const planOrder = ['free', 'starter', 'professional', 'enterprise'];
  const popularPlan = 'professional';

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Choose the plan that fits your needs. Upgrade or downgrade at any
            time.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-blue-600'
                  : 'text-white hover:text-white/80'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-blue-600'
                  : 'text-white hover:text-white/80'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {planOrder.map((planKey) => {
            const plan = plans[planKey];
            const isPopular = planKey === popularPlan;
            const isCurrentPlan = user?.plan === planKey;

            return (
              <div
                key={planKey}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  isPopular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${getPrice(plan.price)}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-gray-500">
                        /{billingPeriod === 'yearly' ? 'year' : 'month'}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {isCurrentPlan ? (
                    <div className="w-full py-3 px-4 bg-gray-100 text-gray-600 font-semibold rounded-xl text-center">
                      Current Plan
                    </div>
                  ) : (
                    <Link
                      to={user ? '/dashboard/settings' : '/register'}
                      className={`block w-full py-3 px-4 font-semibold rounded-xl text-center transition-all duration-300 ${
                        isPopular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {user ? 'Upgrade' : 'Get Started'}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'Can I change plans at any time?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, all paid plans come with a 14-day free trial. No credit card required to start.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.',
              },
              {
                q: 'Can I cancel my subscription?',
                a: 'Yes, you can cancel at any time. Your data remains accessible until the end of the billing period.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
