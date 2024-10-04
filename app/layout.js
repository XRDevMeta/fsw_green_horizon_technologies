import React from 'react';

export const metadata = {
  title: 'Green Horizon Technologies',
  description: 'Pioneering renewable energy solutions for a cleaner, greener world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
