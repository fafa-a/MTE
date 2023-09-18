const r=`date,value\r
2017-01-19,10500\r
2017-01-26,10200\r
2017-02-15,10300\r
2017-02-18,11300\r
2017-02-25,9100\r
2017-03-10,13300\r
2017-03-17,10500\r
2017-03-30,12300\r
2017-04-06,12700\r
2017-04-09,12200\r
2017-04-19,12800\r
2017-04-29,12900\r
2017-05-09,12800\r
2017-05-16,12400\r
2017-05-26,11800\r
2017-06-18,10200\r
2017-06-25,11500\r
2017-07-05,11800\r
2017-07-18,9900\r
2017-08-02,7800\r
2017-08-14,7100\r
2017-08-19,7500\r
2017-08-22,7400\r
2017-09-21,11300\r
2017-09-28,10200\r
2017-10-11,13200\r
2017-10-13,11800\r
2017-10-16,13700\r
2017-10-18,10400\r
2017-10-26,11200\r
2017-10-31,10200\r
2017-11-02,10600\r
2017-11-07,11000\r
2017-11-17,9100\r
2017-11-22,9300\r
2017-11-27,10000\r
2017-12-05,10200\r
2017-12-12,12400\r
2017-12-20,10600\r
2018-02-10,8600\r
2018-02-25,10400\r
2018-04-19,12100\r
2018-04-21,11700\r
2018-05-04,11600\r
2018-05-06,10900\r
2018-05-11,11100\r
2018-06-20,11500\r
2018-06-23,11200\r
2018-06-25,10100\r
2018-06-28,11800\r
2018-07-08,11000\r
2018-07-10,12300\r
2018-07-15,10300\r
2018-07-18,11500\r
2018-07-23,13900\r
2018-07-25,10400\r
2018-08-02,11800\r
2018-08-12,10600\r
2018-08-19,11100\r
2018-08-22,10700\r
2018-09-01,11700\r
2018-09-03,9700\r
2018-09-08,10000\r
2018-09-11,9700\r
2018-09-16,9200\r
2018-09-26,9300\r
2018-09-28,9100\r
2018-10-06,9500\r
2018-10-21,10700\r
2018-10-23,9000\r
2018-11-17,12600\r
2018-12-25,9500\r
2019-02-03,12300\r
2019-02-13,11200\r
2019-02-15,10900\r
2019-02-18,12100\r
2019-02-20,10800\r
2019-02-23,10200\r
2019-02-25,9300\r
2019-03-20,9200\r
2019-03-22,10300\r
2019-03-25,10500\r
2019-03-27,9600\r
2019-03-30,9900\r
2019-05-01,13600\r
2019-05-31,11200\r
2019-06-18,14800\r
2019-06-25,11000\r
2019-07-03,14100\r
2019-07-05,9300\r
2019-07-10,10500\r
2019-07-15,11600\r
2019-07-23,10800\r
2019-07-25,8100\r
2019-08-02,9800\r
2019-08-14,8600\r
2019-08-22,8200\r
2019-08-24,9600\r
2019-08-29,7200\r
2019-09-03,8000\r
2019-09-13,8400\r
2019-09-16,9000\r
2019-09-18,7200\r
2019-10-08,10800\r
2019-10-11,10800\r
2019-10-13,9800\r
2019-11-20,11400\r
2019-12-05,11000\r
2019-12-10,12200\r
2019-12-25,13000\r
2019-12-30,10900\r
2020-01-06,10900\r
2020-01-11,11100\r
2020-01-16,11300\r
2020-01-19,9800\r
2020-02-05,100\r
2020-02-15,11900\r
2020-02-20,9900\r
2020-03-19,10100\r
2020-03-21,9600\r
2020-03-31,11100\r
2020-04-03,10400\r
2020-04-05,11300\r
2020-04-10,10100\r
2020-04-13,10600\r
2020-04-15,10800\r
2020-04-25,14700\r
2020-05-05,13000\r
2020-05-18,10100\r
2020-05-20,6700\r
2020-05-25,2000\r
2020-05-28,3300\r
2020-05-30,2600\r
2020-06-02,3300\r
2020-07-04,8300\r
2020-07-07,9200\r
2020-07-09,8000\r
2020-07-12,9300\r
2020-07-19,8000\r
2020-07-24,10600\r
2020-07-27,9200\r
2020-07-29,6500\r
2020-08-06,8500\r
2020-08-11,7800\r
2020-09-02,7400\r
2020-09-05,8000\r
2020-09-12,7300\r
2020-09-17,6600\r
2020-10-30,11800\r
2020-11-06,9900\r
2020-11-19,10600\r
2020-11-21,10000\r
2020-11-26,9800\r
2020-11-29,10300\r
2021-01-08,11700\r
2021-01-10,10600\r
2021-01-18,12000\r
2021-02-17,13900\r
2021-02-19,12600\r
2021-02-24,10600\r
2021-02-27,11900\r
2021-03-01,10900\r
2021-03-06,11200\r
2021-03-09,10700\r
2021-03-21,12400\r
2021-03-24,12100\r
2021-03-29,12200\r
2021-03-31,10400\r
2021-04-03,10900\r
2021-04-05,12400\r
2021-04-08,9700\r
2021-04-15,10400\r
2021-04-23,11200\r
2021-05-03,8700\r
2021-05-08,12200\r
2021-06-12,12200\r
2021-06-14,10400\r
2021-07-17,12300\r
2021-07-19,12200\r
2021-07-22,13600\r
2021-08-11,10600\r
2021-08-21,11700\r
2021-08-23,11600\r
2021-08-26,10300\r
2021-08-28,11000\r
2021-08-31,12300\r
2021-09-05,10900\r
2021-09-12,10800\r
2021-09-22,9400\r
2021-09-30,10400\r
2021-10-10,9600\r
2021-10-12,10700\r
2021-10-15,9900\r
2021-10-17,9600\r
2021-10-27,9100\r
2021-11-09,9900\r
2021-11-19,9400\r
2021-12-14,10300\r
2021-12-16,10300\r
2021-12-19,10500\r
2021-12-21,10200\r
2022-01-05,11000\r
2022-01-13,11800\r
2022-01-15,11200\r
2022-01-18,11400\r
2022-01-23,10500\r
2022-01-25,10100\r
2022-02-09,10100\r
2022-02-24,10800\r
2022-02-27,11100\r
2022-03-01,13100\r
2022-03-06,11200\r
2022-03-24,12700\r
2022-03-26,11100\r
2022-04-10,12600\r
2022-04-15,12100\r
2022-05-28,11800\r
2022-05-30,10700\r
2022-06-17,10100\r
2022-06-19,10700\r
2022-06-29,11000\r
2022-07-02,10500\r
2022-07-07,9800\r
2022-07-12,9700\r
2022-07-14,10000\r
2022-07-24,8400\r
2022-08-01,9700\r
2022-08-03,8700\r
2022-08-06,9200\r
2022-08-08,7100\r
2022-08-11,7900\r
2022-08-13,9100\r
2022-08-28,5100\r
2022-09-05,4300\r
2022-09-20,2100\r
2022-09-22,1900\r
2022-11-11,400\r
2022-12-16,2500\r
2023-02-09,100\r
2023-04-05,5800\r
2023-04-08,6800\r
2023-05-03,10400\r
2023-05-28,12400\r
2023-06-04,7300\r
2023-06-14,10600\r
2023-06-24,8700\r
2023-07-07,12100\r
2023-07-14,11300\r
2023-07-19,9700\r
2023-07-22,11500\r
2023-07-27,13500\r
2023-08-08,10700\r
2023-08-21,10600\r
2023-08-23,7800\r
2023-09-05,2100\r
2023-09-07,8400\r
2023-09-10,9900\r
`;export{r as default};
