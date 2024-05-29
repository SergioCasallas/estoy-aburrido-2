import React from 'react'

interface Props {
  children: React.ReactNode;
  fallBackComponent: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallBackComponent;
    }

    return this.props.children;
  }
}