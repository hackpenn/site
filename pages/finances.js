import {
  Box,
  Button,
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
  first,
  groupBy,
  isEmpty,
  last,
  map,
  orderBy,
  round,
  sortBy,
  sum,
  toNumber,
  uniq
} from 'lodash'
import NextLink from 'next/link'
import commaNumber from 'comma-number'
import usdFormat from '../lib/format-usd'
import quantizeScale from '../lib/quantize'
import { ResponsiveContainer, BarChart, Bar, Cell, YAxis } from 'recharts'
import CalendarHeatmap from 'react-calendar-heatmap'
import Stat, { StatGrid } from '../components/stat'
import Sponsors from '../components/sponsors'
import Meta from '../components/meta'

const Transactions = ({ data, ...props }) => (
  <Box
    as="table"
    sx={{
      width: '100%',
      borderSpacing: 0,
      borderCollapse: 'separate',
      maxWidth: '100%',
      'th,td': { px: 3 }
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
      {data.map(row => (
        <Box
          as="tr"
          bg={row.amount >= 0 ? 'pos' : 'neg'}
          sx={{
            td: {
              py: 2,
              borderBottom: '1px solid rgba(0,0,0,0.0625)'
            }
          }}
          key={row.id}
        >
          <td>{row.memo}</td>
          <Text as="td" sx={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
            {usdFormat(row.amount / 100)}
          </Text>
        </Box>
      ))}
    </tbody>
  </Box>
)

const Amount = ({ value, ...props }) => (
  <Stat
    value={commaNumber(value / 100).replace('-', '')}
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
        <YAxis tickFormatter={n => '$' + commaNumber(n)} />
        <Bar
          dataKey="total"
          label={{
            dataKey: 'name',
            fontSize: 12,
            fill: theme.colors.text
          }}
        >
          {data.map(c => (
            <Cell key={c.name} fill={theme.colors[colors[c.name]]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ({ account, transactions, chart, cal, categories }) => (
  <>
    <Meta
      title="Finances"
      description="Explore Hack Pennsylvania’s fully-transparent finances, streamed from Hack Club Bank."
    />
    <Container sx={{ maxWidth: [null, 'copy', 'copyPlus'] }}>
      <Card
        sx={{
          bg: 'muted',
          color: 'white',
          borderRadius: 'default',
          textAlign: ['left', 'center'],
          maxWidth: 'narrow',
          mx: 'auto',
          p: [2, 3],
          mb: 4
        }}
      >
        <Text as="p" sx={{ fontSize: 1, lineHeight: 'caption' }}>
          <NextLink href="/" passHref>
            <Link color="inherit">Hack Pennsylvania</Link>
          </NextLink>{' '}
          was a 24-hour high school hackathon that took place on January 19,
          2019 in State College, PA.
        </Text>
      </Card>
      <Heading as="h1" variant="title" mt={4} sx={{ fontSize: [5, 6] }}>
        Finances
      </Heading>
      <Text as="p" variant="subtitle" mt={3} sx={{ lineHeight: 'caption' }}>
        We believe in transparency. Using{' '}
        <Link href="https://hackclub.com/bank/">Hack Club Bank’s</Link> new
        “Transparency Mode,” we’ve{' '}
        <Link href="https://bank.hackclub.com/hackpenn">
          fully opened our finances
        </Link>
        . This page visualizes how we spent{' '}
        <NextLink href="/" passHref>
          <Link>the event’s</Link>
        </NextLink>{' '}
        sponsorship money.
      </Text>
      <Grid
        columns={[null, null, '1fr auto']}
        gap={4}
        mt={4}
        sx={{
          alignItems: [null, null, 'start'],
          svg: { maxWidth: '100%' },
          '.recharts-cartesian-axis-line,.recharts-cartesian-axis-tick-line': {
            stroke: 'sunken'
          },
          '.recharts-label:nth-of-type(1),.recharts-label:nth-of-type(3)': {
            writingMode: 'vertical-lr'
          },
          '.react-calendar-heatmap text': { fontSize: '6px' },
          '.react-calendar-heatmap .color-empty': { fill: 'sunken' },
          '.react-calendar-heatmap .color-1': { fill: 'one' },
          '.react-calendar-heatmap .color-2': { fill: 'two' },
          '.react-calendar-heatmap .color-3': { fill: 'three' },
          '.react-calendar-heatmap .color-4': { fill: 'four' },
          '.react-calendar-heatmap-week:nth-of-type(3) rect:nth-of-type(6),.react-calendar-heatmap-week:nth-of-type(3) rect:nth-of-type(7)': {
            fill: 'red'
          },
          '.recharts-label': { fill: 'text' },
          text: { fill: 'muted' }
        }}
      >
        <CategoriesChart data={chart} />
        <Grid columns={[2, 1]} gap={3}>
          <Stat
            lg
            value={commaNumber(account.income / 100)}
            label="Total raised"
          />
          <Stat
            lg
            value={commaNumber((account.income - account.balance) / 100)}
            label="Total spent"
          />
        </Grid>
        <CalendarHeatmap
          startDate={new Date(cal.startDate)}
          endDate={new Date(cal.endDate)}
          values={cal.values}
          showWeekdayLabels
          classForValue={value => {
            if (!value) return 'color-empty'
            return `color-${value.count}`
          }}
          titleForValue={v => v?.date}
          aria-hidden
        />
        <Grid columns={[2, null, 1]} gap={3}>
          <Stat value="10" label="Sponsors" unit="" />
          <Stat value="20 days" label="First invoice → event" unit="" />
          <Box sx={{ gridColumn: ['span 2', null, 'auto'] }}>
            <Button
              as="a"
              href="https://bank.hackclub.com/hackpenn"
              sx={{ bg: 'red', borderRadius: 'circle' }}
            >
              See all finances →
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Heading
        as="h2"
        variant="headline"
        sx={{ mt: 4, mb: 3, textAlign: [null, 'center'] }}
      >
        Sponsors
      </Heading>
      <Sponsors />
    </Container>
    <Container as="section" variant="wide" px={[0, 3, 4]}>
      <Heading
        as="h2"
        variant="headline"
        sx={{ mt: [4, 5], px: 3, mb: 3, textAlign: [null, 'center'] }}
      >
        Transactions
      </Heading>
      <Grid gap={[3, 4]} columns={[null, null, 2]} as="article">
        {orderBy(
          categories,
          ['pos', c => c.transactions.length],
          ['desc', 'asc']
        ).map(cat => (
          <Card as="section" key={cat.name} sx={{ width: '100%', p: [0, 0] }}>
            <Grid
              as="header"
              columns={[null, null, '1fr auto']}
              sx={{ p: 3, gridColumnGap: 3, alignItems: 'end' }}
            >
              <Heading as="h3" variant="headline" my={0}>
                {cat.name}
              </Heading>
              <Flex as="aside">
                <Amount value={cat.total} half />
              </Flex>
            </Grid>
            <Transactions data={cat.transactions} />
          </Card>
        ))}
        <Text as="p" sx={{ fontSize: 2, color: 'muted' }}>
          Transactions were downloaded from a beta version of the upcoming Hack
          Club Bank API.
        </Text>
      </Grid>
      <Box sx={{ mt: [4, 5], px: 3, mb: 3, textAlign: [null, 'center'] }}>
        <Heading as="h2" variant="headline">
          Budget
        </Heading>
        <Text as="p" sx={{ fontSize: 2, mt: 3 }}>
          Our internal document we used for planning finances.
        </Text>
      </Box>
      <Card p={[0, 0]} width="100%" sx={{ mb: [4, 5], lineHeight: 0 }}>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQzOaXcsdopufFskyX6EsKlMfGG_ztgiM-tKY0qt-yw74_IfhcIl_A_ZaqQzYOxX74R-X9P0ke2Eowl/pubhtml?widget=true&headers=false"
          frameBorder={0}
          width="100%"
          height={512}
        />
      </Card>
    </Container>
    <Container
      as="section"
      variant="narrow"
      sx={{ textAlign: [null, 'center'] }}
    >
      <Text as="p" sx={{ fontSize: [2, 3] }}>
        Organizing an event of your own?
      </Text>
      <Button
        as="a"
        href="https://notebook.lachlanjc.me/2020-01-19_how_to_start_your_first_hackathon/"
        sx={{ borderRadius: 'circle', mt: 3 }}
      >
        Read our founder’s post →
      </Button>
    </Container>
    <Image
      src="https://d1fmxjrxw87eps.cloudfront.net/2020-05-12T17:30:43-04:00.jpeg"
      alt="Scene from hack penn"
      width="100%"
      mt={[4, 5]}
    />
  </>
)

export const getStaticProps = async () => {
  const unFormatUSD = require('unformat-usd')
  const loadJSON = require('load-json-file')

  // Load transactions
  let list = await loadJSON('./public/finances.json')
  list = filter(list, l => !isEmpty(l.category))
  list = filter(list, l => !l.memo.includes('Transfer'))
  list = orderBy(list, 'created_at')
  list = list.map(row => {
    row.amount = toNumber((row.amount || '0').replace(/[\$,]/g, '')) * 100
    return row
  })

  // Categorize
  const categories = []
  uniq(map(list, 'category')).map(name => {
    const transactions = filter(list, ['category', name])
    const amounts = map(transactions, 'amount')
    const pos = sum(filter(amounts, a => a > 0))
    const neg = sum(filter(amounts, a => a < 0))
    const total = neg + pos
    categories.push({ name, pos, neg, total, transactions })
  })

  // Categories chart data
  const chart = []
  filter(categories, c => c.total < 0).forEach(({ name, total }) =>
    chart.push({ name, total: (total * -1) / 100 })
  )

  // Calendar heatmap data
  const days = groupBy(
    list.filter(l => l.created_at?.startsWith('2019')),
    t => t.created_at?.substring(0, 10)
  )
  let dailies = []
  let values = Object.keys(days).map(date => {
    const total = sum(map(days[date], 'amount').map(i => (i >= 0 ? i : -1 * i)))
    dailies.push(total)
    return { date, total }
  })
  dailies = sortBy(dailies)
  const quantize = quantizeScale([1, 2, 3, 4], first(dailies), last(dailies))
  values = values.map(v => ({ ...v, count: quantize(v.total) }))
  const cal = {
    startDate: '2018-12-31',
    endDate: '2019-04-25',
    values
  }

  /*
  const account = await fetch(
    'http://zapdos.servers.hackclub.com:3001/integrations/frankly?page=1',
    { headers: { Authorization: '' } }
  ).then((r) => r.json())
  */
  const account = { balance: 240921, income: 1476791 }
  return { props: { transactions: list, categories, chart, cal, account } }
}
