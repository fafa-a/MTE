const r=`date,value\r
2017-01-26,11100\r
2017-02-22,11900\r
2017-02-25,10000\r
2017-03-17,14300\r
2017-04-23,12500\r
2017-05-16,14200\r
2017-05-26,14200\r
2017-06-02,9200\r
2017-06-25,14900\r
2017-07-05,14800\r
2017-07-07,10800\r
2017-07-17,11900\r
2017-08-04,14400\r
2017-08-14,16400\r
2017-08-21,11500\r
2017-08-24,13100\r
2017-08-26,8600\r
2017-09-05,8100\r
2017-09-20,9900\r
2017-09-23,12500\r
2017-10-05,10200\r
2017-10-08,10800\r
2017-10-10,10000\r
2017-10-13,11100\r
2017-10-15,10300\r
2017-10-18,8600\r
2017-10-25,8600\r
2017-10-28,8900\r
2017-11-17,9400\r
2017-11-19,10300\r
2017-11-22,9900\r
2017-12-09,10700\r
2018-01-31,11700\r
2018-02-25,10000\r
2018-02-27,8300\r
2018-03-14,9000\r
2018-03-19,10200\r
2018-04-18,11200\r
2018-04-21,13900\r
2018-04-26,13500\r
2018-05-11,13200\r
2018-06-20,12700\r
2018-07-02,11500\r
2018-07-07,10300\r
2018-07-15,13000\r
2018-07-25,13200\r
2018-07-27,11000\r
2018-08-01,9600\r
2018-08-04,12600\r
2018-08-11,10600\r
2018-08-19,12300\r
2018-08-21,10100\r
2018-09-03,10500\r
2018-09-08,12400\r
2018-09-20,11700\r
2018-09-23,11100\r
2018-09-28,11300\r
2018-09-30,10300\r
2018-10-03,10600\r
2018-10-05,10200\r
2018-10-23,9000\r
2018-10-25,7900\r
2018-11-12,7800\r
2019-01-16,12500\r
2019-02-12,10500\r
2019-02-15,10400\r
2019-02-17,7600\r
2019-02-20,9200\r
2019-02-22,10700\r
2019-02-25,11400\r
2019-02-27,8400\r
2019-03-12,12300\r
2019-03-22,12000\r
2019-03-24,10600\r
2019-03-27,11500\r
2019-03-29,8300\r
2019-04-13,11900\r
2019-05-01,12300\r
2019-05-06,15000\r
2019-05-13,12200\r
2019-05-23,10800\r
2019-06-02,11400\r
2019-06-17,9400\r
2019-06-27,10400\r
2019-06-30,14700\r
2019-07-05,10900\r
2019-07-12,11900\r
2019-07-15,10900\r
2019-07-22,9100\r
2019-07-25,12900\r
2019-08-04,12700\r
2019-08-09,13000\r
2019-08-14,14700\r
2019-08-16,11100\r
2019-08-24,13300\r
2019-08-29,8100\r
2019-08-31,11900\r
2019-09-03,9600\r
2019-09-15,9700\r
2019-10-08,9200\r
2019-10-25,5600\r
2020-01-06,6200\r
2020-01-11,10000\r
2020-01-16,11900\r
2020-02-20,6900\r
2020-02-22,8100\r
2020-03-08,10600\r
2020-03-13,8900\r
2020-03-18,9800\r
2020-03-21,10900\r
2020-04-05,11600\r
2020-04-10,13800\r
2020-04-12,11500\r
2020-04-15,13900\r
2020-05-07,8700\r
2020-05-20,14600\r
2020-05-22,9800\r
2020-05-25,13100\r
2020-05-27,9800\r
2020-05-30,14200\r
2020-06-21,8700\r
2020-07-04,11800\r
2020-07-09,15800\r
2020-07-14,13700\r
2020-07-19,13800\r
2020-07-21,7700\r
2020-07-24,14000\r
2020-07-31,9100\r
2020-08-05,10200\r
2020-08-08,14900\r
2020-08-10,12000\r
2020-08-20,10000\r
2020-08-25,8800\r
2020-09-02,10200\r
2020-09-04,8400\r
2020-09-07,12500\r
2020-09-12,8800\r
2020-09-14,9800\r
2020-09-17,11100\r
2020-11-08,2500\r
2020-11-11,7000\r
2020-11-18,7900\r
2020-11-21,3400\r
2021-02-11,2400\r
2021-02-19,9400\r
2021-02-24,12500\r
2021-03-01,9300\r
2021-03-23,9400\r
2021-03-28,11800\r
2021-04-05,14200\r
2021-04-15,15000\r
2021-04-17,11400\r
2021-04-22,13200\r
2021-05-27,12300\r
2021-06-14,13600\r
2021-06-16,9900\r
2021-06-26,8700\r
2021-07-19,9700\r
2021-07-29,13000\r
2021-08-10,11700\r
2021-08-20,12200\r
2021-08-28,9800\r
2021-08-30,11200\r
2021-09-12,11700\r
2021-09-14,9700\r
2021-09-22,10500\r
2021-09-24,9900\r
2021-10-12,9700\r
2021-10-14,9400\r
2021-10-17,9200\r
2021-10-24,7700\r
2021-10-27,7200\r
2021-12-16,8500\r
2021-12-21,10200\r
2022-01-12,10400\r
2022-01-15,8500\r
2022-01-17,8900\r
2022-01-22,9300\r
2022-01-25,7800\r
2022-01-27,8400\r
2022-02-09,9800\r
2022-02-26,8900\r
2022-03-01,10900\r
2022-03-03,10200\r
2022-03-08,11300\r
2022-03-23,9600\r
2022-03-26,9600\r
2022-04-05,13100\r
2022-04-10,13000\r
2022-04-17,12300\r
2022-05-17,12000\r
2022-06-01,12200\r
2022-06-06,12500\r
2022-06-19,12900\r
2022-07-11,11800\r
2022-07-14,14500\r
2022-07-16,11800\r
2022-07-19,13000\r
2022-07-21,11500\r
2022-07-24,13400\r
2022-07-31,12000\r
2022-08-03,13600\r
2022-08-08,10600\r
2022-08-10,10900\r
2022-08-13,11800\r
2022-08-28,10600\r
2022-08-30,9900\r
2022-09-04,10200\r
2022-09-12,10300\r
2022-09-19,9100\r
2022-09-22,9700\r
2022-10-02,8800\r
2022-10-04,10000\r
2022-10-09,8300\r
2022-10-22,9200\r
2022-10-27,12300\r
2022-11-08,8700\r
2022-11-11,7100\r
2022-11-13,8600\r
2022-11-16,9500\r
2022-12-06,12000\r
2023-02-04,7500\r
2023-02-11,10500\r
2023-02-14,11200\r
2023-02-16,10700\r
2023-02-19,10300\r
2023-02-21,11700\r
2023-03-01,12700\r
2023-03-13,12200\r
2023-03-16,10800\r
2023-03-28,11700\r
2023-04-05,6100\r
2023-04-07,12000\r
2023-04-20,10900\r
2023-06-16,10300\r
2023-07-09,13400\r
2023-07-14,15700\r
2023-07-29,14600\r
2023-07-31,11700\r
2023-08-08,13800\r
2023-08-20,11900\r
2023-08-23,10900\r
`;export{r as default};
