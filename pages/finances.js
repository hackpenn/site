import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  useThemeUI
} from 'theme-ui'
import {
  filter,
  groupBy,
  isEmpty,
  map,
  orderBy,
  round,
  sum,
  toNumber,
  uniq
} from 'lodash'
import commaNumber from 'comma-number'
import usdFormat from '../lib/format-usd'
import { ResponsiveContainer, BarChart, Bar, Cell, YAxis } from 'recharts'
import Stat, { StatGrid } from '../components/stat'
import Meta from '../components/meta'

const Transactions = ({ data, ...props }) => (
  <Box
    as="table"
    sx={{
      width: '100%',
      borderSpacing: 0,
      borderCollapse: 'separate',
      maxWidth: '100%',
      'th,td': { px: [1, 2] }
    }}
    {...props}
  >
    <Box as="thead" sx={{ width: '100%' }}>
      <Box as="tr">
        <Text as="th" sx={{ textAlign: 'left' }}>
          Memo
        </Text>
        <Text as="th" sx={{ textAlign: 'right' }}>
          Amount
        </Text>
      </Box>
    </Box>
    <tbody>
      {data.map((row) => (
        <Box
          as="tr"
          bg={row.amount >= 0 ? 'pos' : 'neg'}
          sx={{
            td: { py: 1, lineHeight: 1.75 }
          }}
          key={row.id}
        >
          <td>{row.memo}</td>
          <Text as="td" sx={{ textAlign: 'right' }}>
            {usdFormat(row.amount / 100)}
          </Text>
        </Box>
      ))}
    </tbody>
  </Box>
)

const Amount = ({ value, ...props }) => (
  <Stat
    value={commaNumber(value / 100)}
    color={value >= 0 ? 'primary' : 'error'}
    {...props}
  />
)

const CategoriesChart = ({ data }) => {
  const { theme } = useThemeUI()
  const colors = {
    Food: 'red',
    Swag: 'yellow',
    Transportation: 'green',
    Prizes: 'cyan',
    Reimbursements: 'orange',
    Supplies: 'blue'
  }
  return (
    <ResponsiveContainer
      width="100%"
      height={192}
      padding={{ top: 32, left: 32 }}
    >
      <BarChart data={data} width={256} height={128}>
        <YAxis tickFormatter={(n) => '$' + commaNumber(n)} />
        <Bar
          dataKey="total"
          label={{
            dataKey: 'name',
            fontSize: 12,
            position: 'topInside',
            fill: theme.colors.text
          }}
        >
          {data.map((c) => (
            <Cell key={c.name} fill={theme.colors[colors[c.name]]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ({ account, transactions, chart, categories }) => (
  <>
    <Meta
      title="Finances"
      description="Explore Hack Pennsylvania’s fully-transparent finances, streamed from Hack Club Bank."
    />
    <Container>
      <Heading as="h1" variant="title" mt={4}>
        Finances
      </Heading>
      <Text as="p" variant="subtitle" mt={3} sx={{ lineHeight: 'caption' }}>
        We believe in transparency. Using{' '}
        <Link href="https://hackclub.com/bank/" color="alt">
          Hack Club Bank’s
        </Link>{' '}
        new “Transparency Mode,” we’ve{' '}
        <Link href="https://bank.hackclub.com/hackpenn" color="alt">
          fully opened our finances
        </Link>
        . This page visualizes how we spent the event’s sponsorship money.
      </Text>
      <Grid columns={[null, '1fr auto']} gap={[3, 4]} mt={4} mb={[4, 5]}>
        <CategoriesChart data={chart} />
        <Grid columns={[2, 1]} gap={3}>
          <Stat
            lg
            value={commaNumber(account.balance / 100)}
            label="Current balance"
          />
          <Stat
            lg
            value={commaNumber(account.income / 100)}
            label="Total raised"
          />
        </Grid>
      </Grid>
    </Container>
    <Container variant="wide" px={[0, 3]}>
      <Card as="article">
        {categories.map((cat) => (
          <Box as="section" key={cat.name} mb={3}>
            <Grid
              as="header"
              columns={[null, null, '1fr auto']}
              sx={{ mb: 3, gridColumnGap: 3, alignItems: 'end' }}
            >
              <Heading as="h2" variant="headline" mb={0}>
                {cat.name}
              </Heading>
              <Flex as="aside">
                <Amount value={cat.total} />
              </Flex>
            </Grid>
            <Transactions data={cat.transactions} />
          </Box>
        ))}
      </Card>
      <Heading
        as="h2"
        variant="headline"
        sx={{ mt: [4, 5], mb: 3, textAlign: 'center' }}
      >
        Budget
      </Heading>
      <Card p={[0, 0]} width="100%" sx={{ mb: [4, 5], lineHeight: 0 }}>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQzOaXcsdopufFskyX6EsKlMfGG_ztgiM-tKY0qt-yw74_IfhcIl_A_ZaqQzYOxX74R-X9P0ke2Eowl/pubhtml?widget=true&headers=false"
          frameBorder={0}
          width="100%"
          height={512}
        />
      </Card>
    </Container>
    <Image
      src="https://d1fmxjrxw87eps.cloudfront.net/2020-05-12T17:30:43-04:00.jpeg"
      alt="Scene from hack penn"
      width="100%"
    />
  </>
)

export const getStaticProps = async () => {
  const unFormatUSD = require('unformat-usd')
  const loadJSON = require('load-json-file')
  let list = await loadJSON('./public/finances.json')
  list = filter(list, (l) => !isEmpty(l.category))
  list = filter(list, (l) => !l.memo.includes('Transfer'))
  list = list.map((row) => {
    row.amount = toNumber((row.amount || '0').replace(/[\$,]/g, '')) * 100
    return row
  })
  const categories = []
  uniq(map(list, 'category'))
    .sort()
    .map((name) => {
      const transactions = orderBy(
        filter(list, ['category', name]),
        'created_at'
      )
      const amounts = map(transactions, 'amount')
      const pos = sum(filter(amounts, (a) => a > 0))
      const neg = sum(filter(amounts, (a) => a < 0))
      const total = neg + pos
      categories.push({ name, pos, neg, total, transactions })
    })
  const chart = []
  filter(categories, (c) => c.total < 0).forEach(({ name, total }) =>
    chart.push({ name, total: (total * -1) / 100 })
  )
  /*
  const account = await fetch(
    'http://zapdos.servers.hackclub.com:3001/integrations/frankly?page=1',
    { headers: { Authorization: '' } }
  ).then((r) => r.json())
  */
  const account = { balance: 240921, income: 1476791 }
  return { props: { transactions: list, categories, chart, account } }
}
