import React, { Fragment } from 'react'
import { HomePageProps } from '@flow-ui/documaker/core'
import Header from './Header'
import Features from './Features'
import Layout from './ComponentsBlock/Layout'
import Content from './ComponentsBlock/Content'
import Control from './ComponentsBlock/Control'
import Data from './ComponentsBlock/Data'
import Utils from './ComponentsBlock/Utils'
import Lab from './ComponentsBlock/Lab'
import Footer from './Footer'

export default (props: HomePageProps) => {
    return (
        <Fragment>
            <Header {...props} />
            
            <Features />

            <Layout />
            <Content />
            <Control />
            <Data />
            <Utils />
            <Lab />

            <Footer /> 
        </Fragment>
    )
}