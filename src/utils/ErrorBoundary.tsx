import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-red-600">Oops! Something went wrong.</h1>
            <p className="text-gray-600">Please try again later or contact support.</p>
            {process.env.NODE_ENV === 'development' && this.state.error?.message && (
              <div className="p-4 mt-4 text-left bg-red-100 border border-red-300 rounded">
                <p className="my-4 text-sm font-bold text-center text-red-600">Error Code: {this.state.error.message}</p>
                <pre className="mt-4 text-sm text-red-600 whitespace-pre-wrap">
                  {this.state.error.stack?.split('\n').map((line, index) => (
                    <span key={index} className="block mb-2">
                      {line}
                    </span>
                  ))}
                </pre>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
