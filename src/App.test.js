import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Enter/i);
  expect(linkElement).toBeInTheDocument();
});

/* Tests

 - API calls
 - Conversions
 - Sun track maths

*/