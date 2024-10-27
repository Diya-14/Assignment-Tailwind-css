// src/components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center min-h-screen bg-red-100">
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-2xl font-bold">My Error Page</h1>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

