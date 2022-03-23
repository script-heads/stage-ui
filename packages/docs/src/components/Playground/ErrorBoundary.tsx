import React, { ErrorInfo } from 'react'

import { Block, Divider, Flexbox, Header, ScrollView, Text } from '@stage-ui/core'
import { Code } from '@stage-ui/icons'

export type ErrorBoundaryProps = { children: React.ReactNode }
export type ErrorBoundaryState = { error: Error | null; errorInfo: ErrorInfo | null }

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { error, errorInfo } = this.state
    const { children } = this.props

    if (errorInfo) {
      return (
        <ScrollView>
          <Block p="2rem" h="100%" backgroundColor="surface">
            <Flexbox
              mb="1rem"
              borderRadius="4px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Header color="light" size="s">
                Something went wrong
              </Header>
              <Code color="light" ml="0.5rem" />
            </Flexbox>
            <Divider color="lightest" my="0.5rem" mb="1rem" />
            <Header size="xs" color="error" mb="1rem">
              {error && error.toString()}
            </Header>
            <Text color="error">{errorInfo.componentStack}</Text>
          </Block>
        </ScrollView>
      )
    }

    return children
  }
}

export default ErrorBoundary
