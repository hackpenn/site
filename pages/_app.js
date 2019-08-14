import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import Meta from '../components/meta'
import Layout from '../components/layout'
import theme from '../components/theme'

const fonts = `
@font-face {
  font-family: 'Inter UI';
  font-style: normal;
  font-weight: normal;
  src: url('//2019.hackpenn.com/inter-ui/Inter-UI-Regular.woff2') format('woff2'),
    url('//2019.hackpenn.com/inter-ui/Inter-UI-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Inter UI';
  font-style: regular;
  font-weight: bold;
  src: url('//2019.hackpenn.com/inter-ui/Inter-UI-Black.woff2') format('woff2'),
    url('//2019.hackpenn.com/inter-ui/Inter-UI-Black.woff') format('woff');
}

@font-face {
  font-family: 'iA Quattro';
  src: url('//2019.hackpenn.com/quattro/iAWriterQuattroS-Regular.woff2') format('woff2'),
    url('//2019.hackpenn.com/quattro/iAWriterQuattroS-Regular.woff') format('woff'),
    url('//2019.hackpenn.com/quattro/iAWriterQuattroS-Regular.eot') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'iA Quattro';
  src: url('//2019.hackpenn.com/quattro/iAWriterQuattroS-Bold.woff2') format('woff2'),
    url('//2019.hackpenn.com/quattro/iAWriterQuattroS-Bold.woff') format('woff'),
    url('//2019.hackpenn.com/quattro/iAWriterQuattroS-Bold.eot') format('truetype');
  font-weight: bold;
  font-style: normal;
}
`

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Meta />
        <Head>
          <style dangerouslySetInnerHTML={{ __html: fonts }} />
        </Head>
        <ThemeProvider theme={theme}>
          <Global
            styles={theme => ({
              body: {
                fontFamily: theme.fonts.body,
                lineHeight: theme.lineHeights.body,
                fontWeight: theme.fontWeights.body,
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
                margin: 0,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                '*': {
                  boxSizing: 'border-box'
                }
              }
            })}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    )
  }
}
