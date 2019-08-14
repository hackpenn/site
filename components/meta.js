import Head from 'next/head'

export default ({
  title = 'Hack Pennsylvania – PA’s largest high school hackathon',
  description = 'January 2019, 111 hackers came together for Pennsylvania’s largest high school hackathon ever.',
  image = 'https://2019.hackpenn.com/card.png',
  url = 'https://hackpenn.com'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Hack Pennsylvania" />
    <meta name="twitter:site" content="@hackpenn" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="theme-color" content="#2b34b6" />
    <link
      rel="shortcut icon"
      href="https://2019.hackpenn.com/icons-fc76d37f75db83ce9f82f7672f91551e/favicon.ico"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://2019.hackpenn.com/icons-fc76d37f75db83ce9f82f7672f91551e/favicon-16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://2019.hackpenn.com/icons-fc76d37f75db83ce9f82f7672f91551e/favicon-32x32.png"
    />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#fff" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="apple-mobile-web-app-title" content="@hackpenn/site" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'hackpenn',
        url: 'https://hackpenn.com',
        logo: 'https://2019.hackpenn.com/flag.png',
        sameAs: [
          'https://twitter.com/hackpenn',
          'https://www.instagram.com/hackpenn',
          'https://www.facebook.com/hackpenn'
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'contact@hackpenn.com',
            contactType: 'customer support',
            url: 'https://hackpenn.com'
          }
        ]
      })}}
    />
  </Head>
)

