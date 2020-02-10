import React from 'react'
import { Text, Block } from '@flow-ui/core'

interface ErrorBoundaryProps {
    error?: string | null
    children: React.ReactNode
    onError?: (error: string) => void
}

interface ErrorBoundaryState {
    error: string | null
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryState> {
    constructor(props) {
        super(props)
        this.state = { error: null }
    }

    handleTopLevelError(event) {
        event.preventDefault()
    }

    UNSAFE_componentWillReceiveProps() {
        this.setState({error: null})
        window.addEventListener('error', this.handleTopLevelError)
    }

    componentDidUpdate() {
        window.removeEventListener('error', this.handleTopLevelError)
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error: error.toString()})
        this.props.onError && this.props.onError(error.toString())
        return true
    }

    render() {
        if (this.state.error || this.props.error) {
            return (
                <Block p="2rem" h="100%" backgroundColor={c=>c.error}>
                    <Text color={c=>c.onPrimary}>{this.state.error || this.props.error}</Text>
                </Block>
            )
        }

        return this.props.children 
    }
}

export default ErrorBoundary