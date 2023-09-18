import React from 'react';
import { render } from '@testing-library/react';
import Auth from './Auth';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import SignInForm from '../../Components/SignInForm/SignInForm';

describe('Auth', () => {
  it('renders SignInForm and SignUpForm correctly', () => {
    const { getByTestId } = render(<Auth />);
    expect(getByTestId('sign-in-form')).toBeInTheDocument();
    expect(getByTestId('sign-up-form')).toBeInTheDocument();
  });

  it('renders SignInForm and SignUpForm components', () => {
    const { getByTestId } = render(<Auth />);
    expect(getByTestId('sign-in-form').tagName).toEqual('FORM');
    expect(getByTestId('sign-up-form').tagName).toEqual('FORM');
  });

  it('renders SignInForm and SignUpForm components with the correct props', () => {
    const { getByTestId } = render(<Auth />);
    expect(getByTestId('sign-in-form')).toHaveProperty('props', {
      // Add your expected prop values here
    });
    expect(getByTestId('sign-up-form')).toHaveProperty('props', {
      // Add your expected prop values here
    });
  });
});