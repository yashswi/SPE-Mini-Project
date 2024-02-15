import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App'; // Import the component to be tested

// Describe block for grouping related tests
describe('Calculator App', () => {
  // Test case for rendering the component
  test('renders without crashing', () => {
    render(<App />);
  });

  // Test case for checking if button click updates input value
  test('button click updates input value', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByText('7')); // Simulate clicking on button '7'
    expect(getByTestId('calculator-input')).toHaveValue('7'); // Check if input value is updated
  });

  // Add more test cases as needed for other functionalities
});
