import * as React from 'react';
import { Grid, Paper, Divider, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

import GaugeChart from 'react-gauge-chart';
import './dashboard.css';
import DrawChart from './DrawChart';
import DrawTable from './DrawTable';
import DrawTimeline from './DrawTimeline';
import CircularWithValueLabel from './CircularProgress';
import { AntTabs, AntTab, a11yProps, TabPanel } from './DrawTabs';

import {
  MoreVert, ArrowUpward, ArrowDownward, KeyboardArrowUp, KeyboardArrowDown,
  AttachMoney, AccountBalanceWallet, PhoneAndroid, Checkroom, Bungalow, SportsSoccer, Details
} from '@mui/icons-material';

import axios from 'axios';

// import data from "../../data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2.5, 3),
  color: theme.palette.text.secondary,
}));

const moneyFormat = (amount, digits) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits,
  }).format(amount);
}


export default function Analytics() {

  const [data, setData] = React.useState();

    React.useEffect(() => {
      axios.get('https://sneatvercel.vercel.app/api/dashboard/analytics').then(response => {
        // console.log('fetching dashboard', response.data);
        setData(response.data.data.content);
      }).catch(err => {
        console.log(err);
      })
    }, []);

  const [tab1Value, setTab1Value] = React.useState(0);
  const handleTab1Change = (event, newValue) => {
    setTab1Value(newValue);
  };

  const [tab2Value, setTab2Value] = React.useState(0);
  const handleTab2Change = (event, newValue) => {
    setTab2Value(newValue);
  };

  return (
    <div className='analytics container'>
      {data && <Grid container spacing={3}>
        <Grid item xs={12} lg={8} className='insertion1'>
          <Item className='analytics--banner'>
            <div className='analytics--banner--left'>
              <h4>Congratulations John! 🎉</h4>
              <p>You have done 72% more sales today. Check your new badge in your profile.</p>
              <button>VIEW BADGES</button>
            </div>
            <img className='analytics--banner--img' src="assets/illustration-john-light.png" alt="illustration-john" />
          </Item>
        </Grid>
        <Grid item xs={12} md={4} className='insertion1'>
          <Grid container spacing={3}>
            <Grid item xs={6} md={12} lg={6}>
              <Item sx={{ height: 180 }} className='display1'>
                <p>Order</p>
                <h4>{data.orders.total / 1000}k</h4>
                <DrawChart
                  type='line'
                  data={data.orders.arr}
                  labels={data.orders.labels}
                  bgColor={'rgb(113, 221, 55)'}
                  lineGradient={true}
                />
              </Item>
            </Grid>
            <Grid item xs={6} md={12} lg={6}>
              <Item sx={{ height: 180 }} className='display2'>
                <div>
                  <img src="assets/iconwithbg/folder-with-bg.png" alt="icon" />
                  <MoreVert className='icon' />
                </div>
                <p>Sales</p>
                <h4>{moneyFormat(data.sales.total, 0)}</h4>
                <div style={{ color: 'rgb(113, 221, 55)' }}>
                  <ArrowUpward fontSize='small' />
                  <p style={{ color: 'rgb(113, 221, 55)' }}>{(data.sales.pcrt * 100).toFixed(2)}%</p>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Item sx={{ height: 384 }} className='display3'>
            <div className='display3--left'>
              <h4>Total Revenue</h4>
              <DrawChart
                type='stacked'
                data={[data.totalrevenue[2022].monthCount, data.totalrevenue[2021].monthCount]}
                labels={data.totalrevenue.labels}
                bgColor={['rgb(105, 108, 255)', 'rgb(3, 195, 236)']}
              />
            </div>
            <div className='display3--right'>
              <div className='display3--right--title' style={{ color: 'rgb(105, 108, 255)' }}>
                <p style={{ color: 'rgb(105, 108, 255)' }}>2023</p>
                <KeyboardArrowDown fontSize='small' />
              </div>
              <GaugeChart
                style={{ height: 150 }}
                nrOfLevels={15}
                textColor={'rgba(50, 71, 92, 0.87)'}
                needleColor={'rgba(50, 71, 92, 0.4)'}
                colors={['rgba(105, 108, 255, 0.2)', 'rgb(105, 108, 255)']}
                arcWidth={0.3}
                percent={data.totalrevenue[2023].totalGrowth}
                formatTextValue={(value) => `${value}%    growth`}
              />
              <h5>{(data.totalrevenue[2023].companyGrowth * 100)}% Company Growth</h5>
              <div className='display3--right--stats'>
                <div>
                  <Avatar variant="rounded" style={{ color: 'rgb(105, 108, 255)', backgroundColor: 'rgba(105, 108, 255, 0.3)' }}>
                    <AttachMoney />
                  </Avatar>
                  <span>
                    <p>2023</p>
                    <strong><p>${data.totalrevenue[2023].total / 1000}k</p></strong>
                  </span>
                </div>
                <div>
                  <Avatar variant="rounded" style={{ color: 'rgb(3, 195, 236)', backgroundColor: 'rgba(3, 195, 236, 0.3)' }}>
                    <AccountBalanceWallet />
                  </Avatar>
                  <span>
                    <p>2022</p>
                    <strong><p>${data.totalrevenue[2022].total / 1000}k</p></strong>
                  </span>
                </div>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={8} lg={4} className='insertion2'>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Item sx={{ height: 180 }} className='display2'>
                <div>
                  <img src="assets/iconwithbg/paypal-with-bg.png" alt="icon" />
                  <MoreVert className='icon' />
                </div>
                <p>Payments</p>
                <h4>{moneyFormat(data.payments.total, 0)}</h4>
                <div style={{ color: 'rgb(255, 62, 29)' }}>
                  <ArrowDownward fontSize='small' />
                  <p style={{ color: 'rgb(255, 62, 29)' }}>{(data.payments.pcrt * 100).toFixed(2)}%</p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ height: 180 }} className='display1'>
                <p>Revenue</p>
                <h4>{data.revenue.total / 1000}k</h4>
                <DrawChart
                  type='bar'
                  data={data.revenue.arr}
                  labels={data.revenue.labels}
                  bgColor={['rgba(105, 108, 255, 0.2)', 'rgba(105, 108, 255, 0.2)', 'rgba(105, 108, 255, 0.2)',
                    'rgba(105, 108, 255, 0.2)', 'rgb(105, 108, 255)', 'rgba(105, 108, 255, 0.2)', 'rgba(105, 108, 255, 0.2)',]}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ height: 180 }} className='display4'>
                <div className='display4--left'>
                  <h4>Profit Report</h4>
                  <span>YEAR 2023</span>
                  <div style={{ color: 'rgb(113, 221, 55)' }}>
                    <KeyboardArrowUp fontSize='small' />
                    <p style={{ color: 'rgb(113, 221, 55)' }}>{data.profit.pcrt * 100}%</p>
                  </div>
                  <h4>{moneyFormat(data.profit.total / 1000, 0)}k</h4>
                </div>
                <div className='display4--right'>
                  <DrawChart
                    type='line'
                    data={data.profit.arr}
                    labels={data.profit.labels}
                    bgColor={'rgb(255, 171, 0)'}
                  />
                </div>
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item sx={{ height: 500 }} className='display5'>
            <div className='display5--title'>
              <span>
                <h4>Order Statistics</h4>
                <p>{data.stats.totalSales / 1000}k Total Sales</p>
              </span>
              <MoreVert className='icon' />
            </div>
            <div className='display5--chart'>
              <span>
                <h3>{data.stats.totalOrders}</h3>
                <p>Total Orders</p>
              </span>
              <DrawChart
                type='donut'
                data={data.stats.details.map(item => item.count)}
                labels={data.stats.details.map(item => item.type)}
                bgColor={['rgb(105, 108, 255)', 'rgb(113, 221, 55)', 'rgb(3, 195, 236)', 'rgba(50, 71, 92, 0.87)']}
                donutText={`${data.stats.pcrt * 100}% Weekly`}
              />
            </div>
            <div className='display5--content' style={{ height: '250px' }}>
              <div className='display5--content--card'>
                <div>
                  <Avatar variant="rounded" style={{ color: 'rgb(105, 108, 255)', backgroundColor: 'rgba(105, 108, 255, 0.3)' }}>
                    <PhoneAndroid />
                  </Avatar>
                  <span>
                    <strong><p>{data.stats.details[0].type}</p></strong>
                    <p>{data.stats.details[0].desc}</p>
                  </span>
                </div>
                <div>
                  {data.stats.details[0].sales > 1000 ? <p>{data.stats.details[0].sales / 1000}k</p> : <p>{data.stats.details[0].sales}</p>}
                </div>
              </div>
              <div className='display5--content--card'>
                <div>
                  <Avatar variant="rounded" style={{ color: 'rgb(113, 221, 55)', backgroundColor: 'rgba(113, 221, 55, 0.3)' }}>
                    <Checkroom />
                  </Avatar>
                  <span>
                    <strong><p>{data.stats.details[1].type}</p></strong>
                    <p>{data.stats.details[1].desc}</p>
                  </span>
                </div>
                <div>
                  {data.stats.details[1].sales > 1000 ? <p>{data.stats.details[1].sales / 1000}k</p> : <p>{data.stats.details[1].sales}</p>}
                </div>
              </div>
              <div className='display5--content--card'>
                <div>
                  <Avatar variant="rounded" style={{ color: 'rgb(3, 195, 236)', backgroundColor: 'rgba(3, 195, 236, 0.3)' }}>
                    <Bungalow />
                  </Avatar>
                  <span>
                    <strong><p>{data.stats.details[2].type}</p></strong>
                    <p>{data.stats.details[2].desc}</p>
                  </span>
                </div>
                <div>
                  {data.stats.details[2].sales > 1000 ? <p>{data.stats.details[2].sales / 1000}k</p> : <p>{data.stats.details[2].sales}</p>}
                </div>
              </div>
              <div className='display5--content--card'>
                <div>
                  <Avatar variant="rounded" style={{ color: 'rgb(50, 71, 92, 0.87)', backgroundColor: 'rgba(50, 71, 92, 0.2)' }}>
                    <SportsSoccer />
                  </Avatar>
                  <span>
                    <strong><p>{data.stats.details[3].type}</p></strong>
                    <p>{data.stats.details[3].desc}</p>
                  </span>
                </div>
                <div>
                  {data.stats.details[3].sales > 1000 ? <p>{data.stats.details[3].sales / 1000}k</p> : <p>{data.stats.details[3].sales}</p>}
                </div>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item sx={{ height: 500 }} className='display6'>
            <AntTabs value={tab1Value} onChange={handleTab1Change} aria-label="ant example">
              <AntTab label="INCOME" {...a11yProps(0)} />
              <AntTab label="EXPENSE" {...a11yProps(1)} />
              <AntTab label="PROFIT" {...a11yProps(2)} />
            </AntTabs>
            <Divider />
            <TabPanel value={tab1Value} index={0}>
              <div className='display6--tab--content'>
                <div>
                  <img src="assets/iconwithbg/wallet-with-bg.png" alt="icon" />
                  <span>
                    <p>Total Income</p>
                    <div>
                      <h4>{moneyFormat(data.records.income.total / 1000, 0)}k</h4>
                      <div style={{ color: 'rgb(113, 221, 55)' }}>
                        <KeyboardArrowUp fontSize='small' />
                        <p style={{ color: 'rgb(113, 221, 55)' }}>{(data.records.income.pcrt * 100).toFixed(1)}%</p>
                      </div>
                      <p></p>
                    </div>
                  </span>
                </div>
                <DrawChart
                  type='line'
                  data={data.records.income.arr}
                  labels={data.records.income.labels}
                  bgColor={'rgb(105, 108, 255)'}
                  lineGradient={true}
                  lineInteract={true}
                />
                <div className='display6--tab--content--progress'>
                  <CircularWithValueLabel value={data.records.income.currentWeekTotal} />
                  <span>
                    <p>Income this week</p>
                    <p>{moneyFormat(data.records.income.weekDiff / 1000, 0)}k less than last week</p>
                  </span>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={tab1Value} index={1}>
              <div className='display6--tab--content'>
                <div>
                  <img src="assets/iconwithbg/paypal-with-bg.png" alt="icon" />
                  <span>
                    <p>Total Expense</p>
                    <div>
                      <h4>{moneyFormat(data.records.expenses.total / 1000, 0)}k</h4>
                      <div style={{ color: 'rgb(113, 221, 55)' }}>
                        <KeyboardArrowUp fontSize='small' />
                        <p style={{ color: 'rgb(113, 221, 55)' }}>{(data.records.expenses.pcrt * 100).toFixed(1)}%</p>
                      </div>
                      <p></p>
                    </div>
                  </span>
                </div>
                <DrawChart
                  type='line'
                  data={data.records.expenses.arr}
                  labels={data.records.expenses.labels}
                  bgColor={'rgb(105, 108, 255)'}
                  lineGradient={true}
                  lineInteract={true}
                />
                <div className='display6--tab--content--progress'>
                  <CircularWithValueLabel value={data.records.expenses.currentWeekTotal} />
                  <span>
                    <p>Expenses this week</p>
                    <p>{moneyFormat(data.records.expenses.weekDiff / 1000, 0)}k less than last week</p>
                  </span>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={tab1Value} index={2}>
              <div className='display6--tab--content'>
                <div>
                  <img src="assets/iconwithbg/vertical-wallet-with-bg.png" alt="icon" />
                  <span>
                    <p>Total profit</p>
                    <div>
                      <h4>{moneyFormat(data.records.profit.total / 1000, 0)}k</h4>
                      <div style={{ color: 'rgb(113, 221, 55)' }}>
                        <KeyboardArrowUp fontSize='small' />
                        <p style={{ color: 'rgb(113, 221, 55)' }}>{(data.records.profit.pcrt * 100).toFixed(1)}%</p>
                      </div>
                      <p></p>
                    </div>
                  </span>
                </div>
                <DrawChart
                  type='line'
                  data={data.records.profit.arr}
                  labels={data.records.profit.labels}
                  bgColor={'rgb(105, 108, 255)'}
                  lineGradient={true}
                  lineInteract={true}
                />
                <div className='display6--tab--content--progress'>
                  <CircularWithValueLabel value={data.records.profit.currentWeekTotal} />
                  <span>
                    <p>Profit this week</p>
                    <p>{moneyFormat(data.records.profit.weekDiff / 1000, 0)}k less than last week</p>
                  </span>
                </div>
              </div>
            </TabPanel>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item sx={{ height: 500 }} className='display5'>
            <div className='display5--title'>
              <h4>Transactions</h4>
              <MoreVert className='icon' />
            </div>
            <div className='display5--content' style={{ height: '420px' }}>
              {data.transactions.map((item, idx) => {
                return <div className='display5--content--card' key={idx}>
                          <div>
                            <img src={`assets/transactions/${item.icon}`} alt={item.type} />
                            <span>
                              <strong><p>{item.type}</p></strong>
                              <p>{item.desc}</p>
                            </span>
                          </div>
                          <div>
                            <h5>{item.amount}</h5>
                            <h5>USD</h5>
                          </div>
                      </div>
              })}
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{ height: 500 }} className='display7'>
            <div className='display7--title'>
              <h4>Activitity Timeline</h4>
              <MoreVert className='icon' />
            </div>
            <div className='display7--content' style={{ height: '420px' }}>
              <DrawTimeline data={data.activity}/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{ height: 500 }} className='display6'>
            <AntTabs value={tab2Value} onChange={handleTab2Change} aria-label="ant example">
              <AntTab label="BROWSER" {...a11yProps(0)} />
              <AntTab label="OPERATING SYSTEM" {...a11yProps(1)} />
              <AntTab label="COUNTRY" {...a11yProps(2)} />
            </AntTabs>
            <Divider />
            <TabPanel value={tab2Value} index={0}>
              <DrawTable type='BROWSER' data={data.distribution.browser} />
            </TabPanel>
            <TabPanel value={tab2Value} index={1}>
              <DrawTable type='SYSTEM' data={data.distribution.os} />
            </TabPanel>
            <TabPanel value={tab2Value} index={2}>
              <DrawTable type='COUNTRY' data={data.distribution.country} />
            </TabPanel>
          </Item>
        </Grid>
      </Grid>}
    </div>
  )
}
