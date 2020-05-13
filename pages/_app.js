import * as React from 'react'
import NextApp from 'next/app'

import '../public/fonts.css'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import theme from '../lib/theme'
import Meta from '../components/meta'
import Layout from '../components/layout'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <Global
          styles={(theme) => ({
            body: {
              fontFamily: theme.fonts.body,
              lineHeight: theme.lineHeights.body,
              fontWeight: theme.fontWeights.body,
              color: theme.colors.text,
              backgroundColor: theme.colors.background,
              margin: 0,
              minHeight: '100vh',
            },
          })}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}
