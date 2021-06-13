/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react'
import { Flexbox, Text, Block, Divider } from '@stage-ui/core'
import { Code } from '@stage-ui/icons'

interface ErrorBoundaryProps {
  error?: string | null
  children: React.ReactNode
  onError?: (error: string) => void
}

interface ErrorBoundaryState {
  error: string | null
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: null }
  }

  UNSAFE_componentWillReceiveProps() {
    this.setState({ error: null })
    window.addEventListener('error', this.handleTopLevelError)
  }

  componentDidUpdate() {
    window.removeEventListener('error', this.handleTopLevelError)
  }

  componentDidCatch(error: Error) {
    this.setState({ error: error.toString() })
    this.props.onError?.(error.toString())
    return true
  }

  handleTopLevelError(event: ErrorEvent) {
    event.preventDefault()
  }

  render() {
    if (this.state.error || this.props.error) {
      return (
        <Block p="2rem" h="100%" backgroundColor={(c) => c.surface}>
          <Text color="error">{this.state.error || this.props.error}</Text>
          <Divider color="lightest" my="0.5rem" />
          <Flexbox mb="1rem" borderRadius="4px" alignItems="center" justifyContent="space-between">
            <Text color="light" size="s">
              Looks like you typed wrong
            </Text>
            <Code color="light" ml="0.5rem" />
          </Flexbox>
        </Block>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
