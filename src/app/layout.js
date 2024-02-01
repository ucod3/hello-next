import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const renderedTime = new Date().toLocaleString();
  return (
    <html lang='en'>
      <body>
        {children}
        <footer>Page rendered on {renderedTime}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
