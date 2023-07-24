import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom extension for additional matchers
import App from './App';

describe('Count component', () => {
  test('should display the initial count', () => {
    render(<App />);
    const countElement = screen.getByText('Count: 0');
    expect(countElement).toBeInTheDocument();
  });

  test('should increase the count when the "Increase" button is clicked', () => {
    render(<App />);
    const increaseButton = screen.getByTestId('increase');

    fireEvent.click(increaseButton);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();

    fireEvent.click(increaseButton);
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });

  test('should decrease the count when the "Decrease" button is clicked', () => {
    render(<App />);
    const decreaseButton = screen.getByTestId('decrease');

    fireEvent.click(decreaseButton);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();

    fireEvent.click(decreaseButton);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  
  test('should reset the count when the "Reset" button is clicked', () => {
    render(<App />);
    const increaseButton = screen.getByTestId('increase');
    const resetButton = screen.getByTestId('reset');

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);

    fireEvent.click(resetButton);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});