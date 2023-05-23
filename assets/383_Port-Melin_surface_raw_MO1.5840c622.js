const r=`date,value\r
2017-02-14,1000\r
2017-03-13,700\r
2017-03-16,11700\r
2017-04-12,12100\r
2017-04-22,9100\r
2017-05-25,11500\r
2017-06-01,3600\r
2017-06-14,9300\r
2017-06-21,6100\r
2017-07-29,1200\r
2017-08-05,5100\r
2017-08-13,6200\r
2017-08-18,7200\r
2017-08-20,8400\r
2017-09-09,2000\r
2017-09-12,3300\r
2017-09-22,1000\r
2017-10-14,5600\r
2017-11-06,6400\r
2017-11-08,6100\r
2017-11-13,5100\r
2017-11-28,5800\r
2017-12-01,7800\r
2017-12-08,6800\r
2018-01-10,3200\r
2018-02-04,7300\r
2018-02-09,7100\r
2018-02-24,8600\r
2018-02-26,8100\r
2018-03-28,6500\r
2018-03-31,4900\r
2018-04-15,9800\r
2018-04-17,10800\r
2018-04-20,11600\r
2018-05-07,6100\r
2018-05-15,13400\r
2018-05-17,13200\r
2018-05-20,11200\r
2018-06-29,12400\r
2018-07-04,10200\r
2018-07-06,9200\r
2018-07-09,9100\r
2018-07-11,12100\r
2018-07-14,14200\r
2018-07-24,9000\r
2018-07-31,10500\r
2018-08-03,10800\r
2018-08-05,10400\r
2018-08-13,13200\r
2018-08-28,12000\r
2018-09-02,9800\r
2018-09-04,8700\r
2018-09-14,4300\r
2018-09-24,5200\r
2018-09-27,8600\r
2018-10-04,6700\r
2018-10-09,8200\r
2018-10-12,8500\r
2018-11-03,4600\r
2018-11-11,5800\r
2018-11-18,5700\r
2018-11-21,7800\r
2018-12-28,8400\r
2019-01-10,9700\r
2019-01-17,8700\r
2019-01-25,4100\r
2019-02-14,9300\r
2019-02-24,4600\r
2019-02-26,2800\r
2019-03-11,10200\r
2019-03-23,9500\r
2019-03-26,3200\r
2019-03-28,5200\r
2019-03-31,11300\r
2019-04-02,11300\r
2019-04-12,10600\r
2019-04-20,11000\r
2019-05-12,7300\r
2019-05-15,8600\r
2019-05-22,7100\r
2019-05-27,9600\r
2019-06-01,6700\r
2019-06-19,17100\r
2019-06-21,12500\r
2019-06-26,8100\r
2019-07-04,10100\r
2019-07-06,10500\r
2019-07-09,10600\r
2019-07-11,11000\r
2019-07-14,14000\r
2019-07-16,6000\r
2019-08-10,11800\r
2019-08-13,15800\r
2019-08-18,11300\r
2019-08-23,8000\r
2019-08-30,4800\r
2019-09-04,10300\r
2019-09-14,3900\r
2019-09-17,12500\r
2019-09-19,2400\r
2019-09-22,11000\r
2019-09-24,9100\r
2019-10-09,10700\r
2019-10-22,8800\r
2019-11-08,9200\r
2019-12-03,9300\r
2020-01-10,8600\r
2020-01-12,9600\r
2020-01-20,3900\r
2020-01-22,6100\r
2020-02-04,9900\r
2020-02-06,3400\r
2020-02-29,11300\r
2020-03-02,11600\r
2020-03-12,11300\r
2020-03-17,9100\r
2020-03-25,8400\r
2020-03-27,3100\r
2020-03-30,9300\r
2020-04-01,2900\r
2020-04-04,7900\r
2020-04-06,9900\r
2020-04-09,7600\r
2020-04-11,12500\r
2020-04-14,8800\r
2020-05-01,11500\r
2020-05-06,8500\r
2020-05-14,8200\r
2020-05-16,9100\r
2020-05-19,11000\r
2020-05-24,13400\r
2020-05-26,8600\r
2020-05-29,11000\r
2020-05-31,9300\r
2020-06-13,13800\r
2020-06-20,12500\r
2020-07-13,11000\r
2020-07-18,14200\r
2020-07-20,13100\r
2020-07-30,3100\r
2020-08-02,15900\r
2020-08-04,9900\r
2020-09-01,11100\r
2020-09-13,2500\r
2020-09-16,5500\r
2020-10-16,10000\r
2020-11-05,6900\r
2020-11-30,7500\r
2021-01-01,8100\r
2021-01-06,6600\r
2021-01-09,9800\r
2021-02-05,6300\r
2021-02-18,10400\r
2021-02-23,7300\r
2021-02-28,10700\r
2021-03-07,8600\r
2021-03-20,10800\r
2021-03-22,6800\r
2021-03-25,5900\r
2021-03-27,7600\r
2021-03-30,12600\r
2021-04-01,5000\r
2021-04-04,8200\r
2021-04-14,13000\r
2021-04-16,8100\r
2021-05-01,10100\r
2021-05-11,11000\r
2021-05-16,8900\r
2021-05-19,11200\r
2021-05-31,6700\r
2021-06-05,8200\r
2021-06-08,11500\r
2021-06-13,11400\r
2021-06-15,9000\r
2021-07-03,3100\r
2021-07-15,7300\r
2021-07-18,8900\r
2021-07-20,8100\r
2021-07-25,7400\r
2021-07-28,10300\r
2021-08-12,11000\r
2021-08-14,5800\r
2021-08-27,7600\r
2021-08-29,3900\r
2021-09-01,4000\r
2021-09-06,8300\r
2021-09-13,9300\r
2021-09-16,2200\r
2021-09-23,4800\r
2021-10-08,5700\r
2021-10-11,3300\r
2021-10-21,1600\r
2021-11-22,6400\r
2021-12-02,5200\r
2021-12-05,5500\r
2021-12-17,5400\r
2022-01-21,5800\r
2022-02-05,5700\r
2022-02-10,7500\r
2022-03-07,7300\r
2022-03-12,4100\r
2022-03-17,9600\r
2022-03-25,9100\r
2022-03-27,9000\r
2022-04-09,4200\r
2022-04-14,7400\r
2022-04-19,7400\r
2022-04-21,9600\r
2022-04-24,200\r
2022-04-26,7000\r
2022-05-01,8400\r
2022-05-04,8600\r
2022-05-11,1000\r
2022-05-21,10200\r
2022-05-24,10300\r
2022-05-29,8700\r
2022-05-31,8100\r
2022-06-08,5500\r
2022-06-13,11100\r
2022-06-15,11600\r
2022-06-25,9800\r
2022-07-05,8700\r
2022-07-08,10500\r
2022-07-10,7300\r
2022-07-13,11900\r
2022-07-18,11200\r
2022-07-28,10900\r
2022-07-30,9900\r
2022-08-02,10100\r
2022-08-07,6000\r
2022-08-09,5200\r
2022-08-12,8000\r
2022-08-24,5100\r
2022-08-27,6400\r
2022-09-08,3400\r
2022-09-11,6300\r
2022-09-18,5000\r
2022-09-21,4100\r
2022-10-08,2300\r
2022-10-11,6500\r
2022-11-10,5800\r
2022-11-12,5800\r
2022-11-25,6600\r
2022-12-07,8000\r
2022-12-17,8700\r
2022-12-27,5300\r
2023-01-16,13600\r
2023-01-21,8800\r
2023-02-08,8200\r
2023-02-13,7500\r
2023-02-15,8400\r
2023-02-20,10200\r
2023-02-23,8300\r
2023-02-28,5900\r
2023-03-02,4700\r
2023-03-17,3400\r
2023-04-04,9600\r
2023-04-19,8500\r
2023-05-01,400\r
`;export{r as default};
