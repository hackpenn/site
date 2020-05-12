import Head from 'next/head'

const makeTitle = (title, name) =>
  title.startsWith(name) ? title : `${title} – ${name}`

const Meta = ({
  color = '#3fb34f',
  name = 'Hack Pennsylvania',
  title = 'Hack Pennsylvania – PA’s largest high school hackathon',
  description = 'January 2019, 111 hackers came together for Pennsylvania’s largest high school hackathon ever.',
  image = 'https://2019.hackpenn.com/card.png',
  url = 'https://hackpenn.com'
}) => (
  <Head>
    <meta key="og_locale" property="og:locale" content="en_US" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <meta key="tw_site" name="twitter:site" content="@hackpenn" />
    <title key="title">{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />
    {description && (
      <>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </>
    )}
    {image && (
      <>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={image} />
      </>
    )}
    <meta key="theme_color" name="theme-color" content={color} />
    <meta key="tile_color" name="msapplication-TileColor" content={color} />
    <link
      key="icon"
      rel="shortcut icon"
      href="https://2019.hackpenn.com/icons-fc76d37f75db83ce9f82f7672f91551e/favicon.ico"
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://2019.hackpenn.com/icons-fc76d37f75db83ce9f82f7672f91551e/favicon-16x16.png"
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://2019.hackpenn.com/icons-fc76d37f75db83ce9f82f7672f91551e/favicon-32x32.png"
    />
    <script
      key="ld_json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
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
        })
      }}
    />
  </Head>
)

export default Meta
