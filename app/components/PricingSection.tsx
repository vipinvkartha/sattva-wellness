export default function PricingSection() {
  const packages = [
    {
      name: 'Weekday Classes',
      price: '₹999',
      period: '/month',
      description: 'Perfect for regular practice during weekdays',
      features: [
        'Monday to Friday sessions',
        'Group classes',
        'Morning and evening batches',
        'Access to recorded sessions',
        'Basic wellness consultation'
      ],
      popular: true
    },
    {
      name: 'Private Classes',
      price: '₹4,999',
      period: '/month',
      description: 'Personalized one-on-one attention',
      features: [
        'Flexible timing',
        'Customized practice plan',
        'Personal attention',
        'Progress tracking',
        'Weekly wellness consultation'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Packages
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find the perfect package that suits your schedule and goals
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden
                ${pkg.popular ? 'ring-2 ring-[#14b8a6] transform scale-105 md:translate-y-0' : 'md:translate-y-4'}
              `}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#14b8a6] text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">{pkg.name}</h3>
                <p className="mt-2 text-gray-500">{pkg.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-500">{pkg.period}</span>
                </div>

                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg 
                        className="w-5 h-5 text-[#14b8a6]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://forms.zohopublic.eu/sattva/form/SattvaWellnessRegistrationForm/formperma/uESkDIJRLWFDFCpd6VWeBhSa5TEBQEBLsUVnG1JVayI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full bg-[#14b8a6] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#0d9488] transition-colors duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-500">
          All packages include access to our wellness community and monthly workshops
        </p>
      </div>
    </section>
  );
} 