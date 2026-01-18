export const subscriptionLevels = {
  FREE: 'free',
  PREMIUM: 'premium',
  PRO: 'pro'
};

export const subscriptionPlans = [
  {
    id: 'free',
    name: 'Besplatno',
    price: '0 RSD',
    period: 'zauvek',
    description: 'Počni sa osnovama',
    features: [
      '✓ 2 besplatna kurseva',
      '✓ Osnovne video lekcije',
      '✗ Nema pristupa svim receptima',
      '✗ Nema konvertora',
      '✗ Nema offline preuzimanja'
    ],
    color: '#64748b',
    accessCourses: [1, 2]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '499 RSD',
    period: 'mesečno',
    description: 'Idealno za ozbiljne učenike',
    features: [
      '✓ Pristup 4 kurseva',
      '✓ Kompletne video lekcije',
      '✓ Detaljni recepti sa PDF',
      '✓ Konvertori mernih jedinica',
      '✗ Nema offline preuzimanja'
    ],
    color: '#f97316',
    accessCourses: [1, 2, 3, 4]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '999 RSD',
    period: 'mesečno',
    description: 'Kompletan pristup svemu',
    features: [
      '✓ Pristup svim 5 kurseva',
      '✓ HD video lekcije',
      '✓ Svi recepti sa detaljima',
      '✓ Konvertori + kalkulatori',
      '✓ Offline preuzimanje kurseva',
      '✓ Prioritetna podrška'
    ],
    color: '#8b5cf6',
    accessCourses: [1, 2, 3, 4, 5]
  }
];
