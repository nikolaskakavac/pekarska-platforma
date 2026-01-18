import React from 'react';
import './Pricing.css';
import { subscriptionPlans } from '../data/subscriptions';

function Pricing({ currentPlan, onPlanSelect }) {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Biraju Vašu Pretplatu</h2>
        <p>Odaberite plan koji odgovara vašim potrebama i učite u vlastitom tempu</p>
      </div>

      <div className="pricing-grid">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${currentPlan === plan.id ? 'active' : ''} ${plan.id === 'pro' ? 'featured' : ''}`}
            style={{ borderTopColor: plan.color }}
          >
            {plan.id === 'pro' && <div className="badge">PREPORUČENO</div>}
            
            <div className="plan-header">
              <h3 style={{ color: plan.color }}>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
            </div>

            <div className="plan-price">
              <span className="price" style={{ color: plan.color }}>{plan.price}</span>
              <span className="period">/{plan.period}</span>
            </div>

            <button
              className={`plan-button ${currentPlan === plan.id ? 'active' : ''}`}
              onClick={() => onPlanSelect(plan.id)}
              style={{
                background: currentPlan === plan.id ? plan.color : 'transparent',
                color: currentPlan === plan.id ? 'white' : plan.color,
                borderColor: plan.color
              }}
            >
              {currentPlan === plan.id ? '✓ Aktivna' : 'Odaberi Plan'}
            </button>

            <div className="features-list">
              {plan.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span style={{ color: feature.includes('✓') ? '#10b981' : '#ef4444' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
