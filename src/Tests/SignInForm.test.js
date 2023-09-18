import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SignInContainer, ButtonContainer, Title } from './signinform';

describe('SignInForm', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(
      <SignInContainer>
        <Title>Sign In</Title>
        <ButtonContainer>
          <button data-testid="login-button">Login</button>
          <button data-testid="signup-button">Sign Up</button>
        </ButtonContainer>
      </SignInContainer>
    );

    expect(getByText('Sign In')).toBeInTheDocument();
    expect(getByTestId('login-button')).toBeInTheDocument();
    expect(getByTestId('signup-button')).toBeInTheDocument();
  });

  it('calls the login function when login button is clicked', () => {
    const mockLogin = jest.fn();
    const { getByTestId } = render(
      <SignInContainer>
        <Title>Sign In</Title>
        <ButtonContainer>
          <button data-testid="login-button" onClick={mockLogin}>Login</button>
        </ButtonContainer>
      </SignInContainer>
    );

    fireEvent.click(getByTestId('login-button'));
    expect(mockLogin).toHaveBeenCalledTimes(1);
  });
});