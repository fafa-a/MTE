const r=`date,value\r
2017-02-06,6200\r
2017-02-16,6800\r
2017-02-19,5600\r
2017-02-26,6500\r
2017-03-08,6200\r
2017-03-11,5800\r
2017-03-21,6700\r
2017-03-28,9900\r
2017-04-07,8200\r
2017-04-10,5900\r
2017-04-17,6800\r
2017-04-20,7100\r
2017-05-07,7700\r
2017-05-17,6900\r
2017-05-27,7200\r
2017-05-30,7100\r
2017-06-06,6500\r
2017-06-16,7000\r
2017-06-19,7000\r
2017-06-29,6300\r
2017-07-01,7600\r
2017-07-04,7200\r
2017-07-06,6800\r
2017-07-14,8700\r
2017-07-26,7500\r
2017-07-31,7300\r
2017-08-05,7200\r
2017-08-08,7600\r
2017-08-13,8300\r
2017-08-18,7100\r
2017-08-23,5500\r
2017-08-25,6600\r
2017-09-04,6600\r
2017-09-07,7400\r
2017-09-12,5600\r
2017-09-14,6700\r
2017-09-17,6800\r
2017-09-27,6600\r
2017-10-04,6700\r
2017-10-07,5000\r
2017-10-09,5300\r
2017-10-12,5700\r
2017-10-17,5500\r
2017-10-22,5700\r
2017-11-01,7400\r
2017-11-13,6300\r
2017-11-16,5200\r
2017-11-18,5300\r
2017-11-21,4800\r
2017-11-26,4900\r
2017-11-28,5500\r
2017-12-01,6100\r
2017-12-03,4100\r
2017-12-13,4700\r
2017-12-16,5100\r
2017-12-21,4600\r
2017-12-28,5900\r
2018-01-17,4200\r
2018-02-04,7100\r
2018-02-11,6000\r
2018-02-14,6200\r
2018-03-13,8000\r
2018-03-23,9000\r
2018-03-26,10300\r
2018-04-05,7900\r
2018-04-17,9800\r
2018-04-20,9200\r
2018-04-22,9200\r
2018-04-25,9100\r
2018-04-27,8400\r
2018-05-12,7900\r
2018-05-20,11300\r
2018-05-25,8800\r
2018-06-01,7300\r
2018-06-09,9100\r
2018-06-14,5400\r
2018-06-16,8200\r
2018-06-19,10500\r
2018-06-21,9400\r
2018-06-29,8200\r
2018-07-01,7600\r
2018-07-04,9400\r
2018-07-06,7800\r
2018-07-09,8700\r
2018-07-14,8100\r
2018-07-19,8200\r
2018-07-21,7100\r
2018-07-24,8800\r
2018-07-26,8200\r
2018-07-31,8700\r
2018-08-05,8900\r
2018-08-08,8100\r
2018-08-15,8000\r
2018-08-20,9800\r
2018-08-25,6100\r
2018-08-28,6000\r
2018-08-30,7300\r
2018-09-02,7800\r
2018-09-04,6400\r
2018-09-12,6100\r
2018-09-19,7200\r
2018-09-22,6700\r
2018-09-27,5100\r
2018-09-29,6300\r
2018-10-02,6400\r
2018-10-04,6200\r
2018-10-09,7100\r
2018-10-12,10600\r
2018-10-19,8100\r
2018-10-22,7400\r
2018-10-24,6400\r
2018-11-18,7000\r
2018-11-28,5500\r
2018-12-01,7800\r
2018-12-08,7200\r
2018-12-11,7600\r
2018-12-18,7100\r
2018-12-28,7100\r
2019-01-02,5600\r
2019-01-05,7000\r
2019-01-07,3400\r
2019-01-10,3500\r
2019-01-12,5700\r
2019-01-15,5100\r
2019-01-22,5700\r
2019-01-25,4400\r
2019-02-04,7100\r
2019-02-06,4200\r
2019-02-11,6700\r
2019-02-14,5600\r
2019-02-16,7200\r
2019-02-21,8500\r
2019-03-01,8100\r
2019-03-03,6500\r
2019-03-08,5400\r
2019-03-11,4200\r
2019-03-13,4200\r
2019-03-16,3300\r
2019-03-21,6500\r
2019-03-23,2100\r
2019-03-28,2600\r
2019-03-31,4000\r
2019-04-05,3100\r
2019-04-15,7100\r
2019-04-17,4400\r
2019-04-27,7800\r
2019-04-30,8000\r
2019-05-12,7100\r
2019-05-30,14900\r
2019-06-01,5200\r
2019-06-04,12100\r
2019-06-06,9200\r
2019-06-19,14600\r
2019-06-24,10200\r
2019-06-26,6200\r
2019-06-29,12200\r
2019-07-01,10600\r
2019-07-04,9400\r
2019-07-06,5300\r
2019-07-11,10300\r
2019-07-14,13000\r
2019-07-16,3700\r
2019-07-19,11300\r
2019-07-21,7600\r
2019-07-24,10900\r
2019-07-26,3700\r
2019-07-29,12000\r
2019-07-31,6900\r
2019-08-03,9500\r
2019-08-05,8700\r
2019-08-10,6600\r
2019-08-15,6400\r
2019-08-23,8400\r
2019-08-25,4100\r
2019-08-28,8400\r
2019-09-07,6400\r
2019-09-12,3800\r
2019-09-29,3500\r
2019-10-02,5100\r
2019-10-07,6600\r
2019-10-27,4900\r
2019-11-06,5800\r
2019-11-16,6100\r
2019-12-03,2900\r
2019-12-08,7200\r
2019-12-13,5400\r
2019-12-21,7500\r
2019-12-23,7300\r
2019-12-28,4900\r
2020-01-02,8200\r
2020-01-05,7600\r
2020-01-12,4500\r
2020-01-30,9300\r
2020-02-04,6800\r
2020-02-11,7500\r
2020-02-14,4200\r
2020-02-24,8300\r
2020-03-07,5400\r
2020-04-04,5200\r
2020-04-06,7500\r
2020-04-09,8800\r
2020-04-11,4500\r
2020-04-14,9500\r
2020-04-24,11700\r
2020-04-26,10200\r
2020-05-04,11500\r
2020-05-06,9200\r
2020-05-21,7100\r
2020-05-26,6500\r
2020-05-31,11800\r
2020-06-03,14300\r
2020-06-05,7800\r
2020-06-10,12500\r
2020-06-15,8000\r
2020-06-20,10000\r
2020-06-23,14900\r
2020-06-28,13600\r
2020-06-30,8600\r
2020-07-03,14700\r
2020-07-05,9400\r
2020-07-08,13000\r
2020-07-10,10600\r
2020-07-15,8100\r
2020-07-20,8000\r
2020-07-30,7000\r
2020-08-04,6000\r
2020-08-07,8000\r
2020-08-09,4300\r
2020-08-12,7700\r
2020-08-14,7900\r
2020-08-22,7000\r
2020-08-27,5600\r
2020-09-01,6800\r
2020-09-03,4300\r
2020-09-06,7700\r
2020-09-08,6400\r
2020-10-03,5400\r
2020-11-20,400\r
2020-12-22,1300\r
2020-12-25,600\r
2021-01-06,700\r
2021-01-11,500\r
2021-01-24,100\r
2021-01-26,100\r
2021-01-31,200\r
2021-02-28,100\r
2022-02-15,200\r
2022-02-18,400\r
2022-02-20,100\r
`;export{r as default};