
import React from 'react';

const sales = [
  { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00', initial: 'OM' },
  { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00', initial: 'JL' },
  { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00', initial: 'IN' },
  { name: 'William Kim', email: 'will@email.com', amount: '+$99.00', initial: 'WK' },
  { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00', initial: 'SD' },
  { name: 'Noah Wilson', email: 'noah@email.com', amount: '+$1,299.00', initial: 'NW' },
];

export const RecentSales: React.FC = () => {
  return (
    <div className="space-y-8">
      {sales.map((sale, i) => (
        <div key={i} className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-medium">
            {sale.initial}
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-xs text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium text-sm">{sale.amount}</div>
        </div>
      ))}
    </div>
  );
};
