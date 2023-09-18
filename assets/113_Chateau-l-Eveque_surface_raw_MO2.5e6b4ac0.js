const r=`date,value\r
2017-01-19,10500\r
2017-01-26,11500\r
2017-01-29,11500\r
2017-02-15,10300\r
2017-02-18,11400\r
2017-02-25,10300\r
2017-02-28,11500\r
2017-03-10,13300\r
2017-03-17,13300\r
2017-03-27,10500\r
2017-03-30,12300\r
2017-04-06,13200\r
2017-04-09,12300\r
2017-04-19,12800\r
2017-04-29,13600\r
2017-05-09,13200\r
2017-05-16,13300\r
2017-05-19,13300\r
2017-05-26,12400\r
2017-06-05,12100\r
2017-06-18,10200\r
2017-06-25,11500\r
2017-07-03,12000\r
2017-07-05,12200\r
2017-07-18,9900\r
2017-07-28,9900\r
2017-08-02,7800\r
2017-08-04,7800\r
2017-08-07,7800\r
2017-08-14,7100\r
2017-08-17,7100\r
2017-08-19,8200\r
2017-08-22,7500\r
2017-08-24,7500\r
2017-08-27,8200\r
2017-08-29,8200\r
2017-09-21,11300\r
2017-09-28,11400\r
2017-10-03,10200\r
2017-10-06,10200\r
2017-10-11,13200\r
2017-10-13,13600\r
2017-10-16,13100\r
2017-10-18,13100\r
2017-10-23,11700\r
2017-10-26,11500\r
2017-10-28,11500\r
2017-10-31,11900\r
2017-11-02,10700\r
2017-11-05,10700\r
2017-11-07,10800\r
2017-11-15,10700\r
2017-11-17,10700\r
2017-11-20,10700\r
2017-11-22,9900\r
2017-11-25,9900\r
2017-11-27,9500\r
2017-12-05,10900\r
2017-12-07,10900\r
2017-12-12,12600\r
2017-12-15,12600\r
2017-12-20,13000\r
2018-02-10,8600\r
2018-02-18,8600\r
2018-02-25,10400\r
2018-03-02,10400\r
2018-04-19,12100\r
2018-04-21,14200\r
2018-04-26,14200\r
2018-05-04,11600\r
2018-05-06,12100\r
2018-05-11,11200\r
2018-05-19,11100\r
2018-05-21,11100\r
2018-06-20,11500\r
2018-06-23,12000\r
2018-06-25,10900\r
2018-06-28,11200\r
2018-07-08,11600\r
2018-07-10,10600\r
2018-07-15,10300\r
2018-07-18,11600\r
2018-07-20,10300\r
2018-07-23,11500\r
2018-07-25,11800\r
2018-08-02,11800\r
2018-08-04,11800\r
2018-08-12,11800\r
2018-08-19,12100\r
2018-08-22,11000\r
2018-09-01,11700\r
2018-09-03,12700\r
2018-09-08,10500\r
2018-09-11,11100\r
2018-09-16,9600\r
2018-09-26,9800\r
2018-09-28,11300\r
2018-10-06,9400\r
2018-10-13,9500\r
2018-10-16,9500\r
2018-10-21,10700\r
2018-10-23,11200\r
2018-11-17,12600\r
2018-11-20,12600\r
2018-12-25,9500\r
2018-12-30,9500\r
2019-02-03,12300\r
2019-02-13,12600\r
2019-02-15,12100\r
2019-02-18,12600\r
2019-02-20,12100\r
2019-02-23,10600\r
2019-02-25,11400\r
2019-03-05,11400\r
2019-03-07,10400\r
2019-03-12,9300\r
2019-03-20,9200\r
2019-03-22,11000\r
2019-03-25,10100\r
2019-03-27,10400\r
2019-03-30,9700\r
2019-04-01,9700\r
2019-04-09,9900\r
2019-04-14,9900\r
2019-05-01,13600\r
2019-05-06,13600\r
2019-05-14,13600\r
2019-05-16,13600\r
2019-05-31,11200\r
2019-06-13,11200\r
2019-06-18,14800\r
2019-06-25,14900\r
2019-06-28,14900\r
2019-06-30,14900\r
2019-07-03,13200\r
2019-07-05,10900\r
2019-07-08,10900\r
2019-07-10,11700\r
2019-07-13,10500\r
2019-07-15,12100\r
2019-07-23,10400\r
2019-07-25,11000\r
2019-07-28,12800\r
2019-08-02,11000\r
2019-08-04,11000\r
2019-08-09,10000\r
2019-08-14,11200\r
2019-08-17,11200\r
2019-08-22,9500\r
2019-08-24,8800\r
2019-08-29,9000\r
2019-09-03,8500\r
2019-09-06,8500\r
2019-09-08,8100\r
2019-09-11,7600\r
2019-09-13,8200\r
2019-09-16,9000\r
2019-09-18,8300\r
2019-09-21,8400\r
2019-10-08,10800\r
2019-10-11,11300\r
2019-10-13,11200\r
2019-10-16,11200\r
2019-10-26,11700\r
2019-11-20,11400\r
2019-12-02,11400\r
2019-12-05,12100\r
2019-12-10,12200\r
2019-12-25,13300\r
2019-12-30,13000\r
2020-01-06,10900\r
2020-01-11,11600\r
2020-01-16,11400\r
2020-01-19,11400\r
2020-01-21,11400\r
2020-01-24,11200\r
2020-02-03,9800\r
2020-02-05,100\r
2020-02-15,11900\r
2020-02-18,11900\r
2020-02-20,9800\r
2020-02-23,12000\r
2020-03-19,10100\r
2020-03-21,11800\r
2020-03-24,11800\r
2020-03-26,11800\r
2020-03-31,10500\r
2020-04-03,10700\r
2020-04-05,11100\r
2020-04-08,11100\r
2020-04-10,11200\r
2020-04-13,10500\r
2020-04-15,10900\r
2020-04-25,11800\r
2020-05-05,14700\r
2020-05-15,13000\r
2020-05-18,13100\r
2020-05-20,10200\r
2020-05-25,6400\r
2020-05-28,6400\r
2020-05-30,3300\r
2020-06-02,3600\r
2020-07-04,8300\r
2020-07-07,9600\r
2020-07-09,8600\r
2020-07-12,9600\r
2020-07-14,9600\r
2020-07-19,7900\r
2020-07-24,9300\r
2020-07-27,9700\r
2020-07-29,9600\r
2020-08-06,9500\r
2020-08-08,9500\r
2020-08-11,9200\r
2020-09-02,7400\r
2020-09-05,8400\r
2020-09-07,8400\r
2020-09-10,8100\r
2020-09-12,8200\r
2020-09-15,7700\r
2020-09-17,7700\r
2020-10-30,11800\r
2020-11-06,11800\r
2020-11-11,11800\r
2020-11-14,11800\r
2020-11-19,11000\r
2020-11-21,10200\r
2020-11-26,10100\r
2020-11-29,10500\r
2021-01-08,11700\r
2021-01-10,12500\r
2021-01-18,11900\r
2021-02-17,13900\r
2021-02-19,14400\r
2021-02-24,12600\r
2021-02-27,13400\r
2021-03-01,12200\r
2021-03-04,11000\r
2021-03-06,11700\r
2021-03-09,11800\r
2021-03-14,11500\r
2021-03-21,12400\r
2021-03-24,12900\r
2021-03-29,12200\r
2021-03-31,12900\r
2021-04-03,11600\r
2021-04-05,11800\r
2021-04-08,11300\r
2021-04-13,11100\r
2021-04-15,10500\r
2021-04-18,10500\r
2021-04-23,11600\r
2021-05-03,11500\r
2021-05-05,8700\r
2021-05-08,12200\r
2021-06-12,12200\r
2021-06-14,13300\r
2021-06-19,13300\r
2021-07-17,12300\r
2021-07-19,14700\r
2021-07-22,13400\r
2021-07-29,14800\r
2021-08-11,10600\r
2021-08-21,11700\r
2021-08-23,12000\r
2021-08-26,11300\r
2021-08-28,11700\r
2021-08-31,11700\r
2021-09-02,12000\r
2021-09-05,11500\r
2021-09-12,11300\r
2021-09-22,11000\r
2021-09-30,10700\r
2021-10-02,10700\r
2021-10-10,10700\r
2021-10-12,10800\r
2021-10-15,10100\r
2021-10-17,10700\r
2021-10-27,9900\r
2021-11-06,9100\r
2021-11-09,9900\r
2021-11-11,9900\r
2021-11-19,10400\r
2021-12-14,10300\r
2021-12-16,12100\r
2021-12-19,10500\r
2021-12-21,11000\r
2022-01-05,11000\r
2022-01-13,13300\r
2022-01-15,11000\r
2022-01-18,11500\r
2022-01-23,11500\r
2022-01-25,12400\r
2022-01-28,11200\r
2022-01-30,12300\r
2022-02-09,10100\r
2022-02-24,10800\r
2022-02-27,11400\r
2022-03-01,11100\r
2022-03-06,11400\r
2022-03-09,11200\r
2022-03-24,12700\r
2022-03-26,13600\r
2022-04-10,12600\r
2022-04-15,13600\r
2022-05-28,11800\r
2022-05-30,11900\r
2022-06-02,11900\r
2022-06-17,11200\r
2022-06-19,10200\r
2022-06-27,11100\r
2022-06-29,11500\r
2022-07-02,11400\r
2022-07-07,10300\r
2022-07-12,10200\r
2022-07-14,10000\r
2022-07-17,10000\r
2022-07-19,10800\r
2022-07-22,10800\r
2022-07-24,10000\r
2022-07-27,8400\r
2022-08-01,9700\r
2022-08-03,8800\r
2022-08-06,9100\r
2022-08-08,9200\r
2022-08-11,8600\r
2022-08-13,8200\r
2022-08-18,7600\r
2022-08-28,5100\r
2022-08-31,5100\r
2022-09-05,5100\r
2022-09-12,4300\r
2022-09-20,2100\r
2022-09-22,2200\r
2022-09-30,2200\r
2022-11-11,400\r
2022-12-16,2500\r
2023-02-09,100\r
2023-02-12,100\r
2023-04-05,5800\r
2023-04-08,6900\r
2023-05-03,10400\r
2023-05-28,12400\r
2023-05-30,11900\r
2023-06-02,11900\r
2023-06-04,7800\r
2023-06-07,11900\r
2023-06-14,10600\r
2023-06-17,10600\r
2023-06-24,10600\r
2023-06-27,8700\r
2023-06-29,8700\r
2023-07-07,12100\r
2023-07-09,12500\r
2023-07-14,11900\r
2023-07-19,10800\r
2023-07-22,10700\r
2023-07-27,11500\r
2023-08-01,13500\r
2023-08-08,10700\r
2023-08-21,10600\r
2023-08-23,10600\r
2023-08-26,10600\r
2023-09-02,7800\r
2023-09-05,2100\r
2023-09-07,8400\r
2023-09-10,8100\r
`;export{r as default};
