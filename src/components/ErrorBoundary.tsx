import { Component, ReactNode } from 'react'

interface ErrorBoundaryProps { children: ReactNode }
interface ErrorBoundaryState { hasError: boolean }

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>오류가 발생했습니다</h2>
          <p style={{ color: '#666', marginTop: '12px' }}>페이지를 새로고침 해주세요.</p>
          <button
            className="btn btn-primary"
            style={{ marginTop: '20px' }}
            onClick={() => window.location.reload()}
          >
            새로고침
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
