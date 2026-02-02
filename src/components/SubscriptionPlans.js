import React from 'react';
import './SubscriptionPlans.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function SubscriptionPlans() {
  const { subscriptionLevel } = useAuth();
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Basic',
      price: 500,
      features: [
        'Sve video lekcije',
        'Pristup receptima',
        'Konvertor mernih jedinica',
        'Osnovna podrška'
      ],
      level: 'basic'
    },
    {
      name: 'Premium',
      price: 1000,
      features: [
        'Sve iz Basic paketa',
        'Kulinarski blog sa ekskluzivnim člancima',
        'Sertifikat završetka',
        'Prioritetna podrška',
        'Offline video'
      ],
      level: 'premium',
      popular: true
    }
  ];

  return (
    <div className="subscription-plans">
      <h2>📋 Planovi pretplate</h2>
      <div className="plans-container">
        {plans.map((plan) => (
          <div 
            key={plan.level}
            className={`plan-card ${plan.popular ? 'popular' : ''} ${subscriptionLevel === plan.level ? 'active' : ''}`}
          >
            {plan.popular && <div className="popular-badge">Najpopularnije</div>}
            {subscriptionLevel === plan.level && <div className="active-badge">✓ Vaša pretplata</div>}
            
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="currency">RSD/mesec</span>
            </div>
            
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            
            <button 
              className="plan-btn"
              onClick={() => navigate('/contact')}
              disabled={subscriptionLevel === plan.level}
            >
              {subscriptionLevel === plan.level ? 'Aktivna pretplata' : 'Kontaktiraj za kupovinu'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionPlans;
