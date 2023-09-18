const r=`date,value\r
2017-01-03,11700\r
2017-01-13,11700\r
2017-02-12,600\r
2017-02-19,600\r
2017-03-14,10200\r
2017-04-23,10400\r
2017-04-30,10400\r
2017-06-12,11300\r
2017-06-19,11300\r
2017-06-22,12000\r
2017-07-02,12200\r
2017-08-21,11500\r
2017-08-23,11500\r
2017-08-26,12100\r
2017-09-05,10900\r
2017-10-05,10400\r
2017-10-07,10400\r
2017-10-10,10400\r
2017-10-12,10400\r
2017-10-15,10400\r
2017-10-17,9300\r
2017-10-20,9300\r
2017-10-22,9300\r
2017-10-25,9300\r
2018-02-27,9200\r
2018-03-04,9200\r
2018-03-14,10400\r
2018-03-16,10400\r
2018-03-21,10400\r
2018-03-24,10400\r
2018-06-12,13400\r
2018-06-14,13400\r
2018-06-19,13400\r
2018-06-22,13500\r
2018-06-24,11900\r
2018-06-27,12900\r
2018-06-29,12900\r
2018-07-02,11100\r
2018-07-04,12300\r
2018-07-07,10900\r
2018-07-09,11700\r
2018-07-12,10900\r
2018-07-17,11600\r
2018-07-19,10800\r
2018-07-22,10800\r
2018-07-27,11700\r
2018-07-29,11700\r
2018-08-01,11700\r
2018-08-03,11700\r
2018-08-06,11700\r
2018-08-16,12500\r
2018-08-18,12500\r
2018-08-21,12500\r
2018-08-23,11700\r
2018-08-26,11700\r
2018-08-28,10700\r
2018-09-02,10700\r
2018-09-05,10700\r
2018-09-25,10900\r
2018-09-27,10900\r
2018-09-30,10900\r
2018-10-02,10900\r
2018-10-05,11200\r
2018-10-10,11600\r
2018-10-12,11600\r
2018-10-17,10300\r
2018-10-20,10500\r
2018-10-22,9900\r
2018-11-24,9500\r
2019-01-03,9900\r
2019-01-10,9900\r
2019-01-15,9900\r
2019-02-12,2000\r
2019-02-14,2000\r
2019-02-17,8700\r
2019-02-19,8700\r
2019-02-22,8500\r
2019-02-24,8500\r
2019-02-27,9300\r
2019-03-24,9700\r
2019-03-26,9700\r
2019-03-29,10200\r
2019-03-31,10200\r
2019-04-10,9600\r
2019-04-13,9600\r
2019-05-13,12000\r
2019-05-15,12000\r
2019-05-23,12300\r
2019-05-25,12300\r
2019-05-30,12300\r
2019-06-02,12400\r
2019-06-04,12400\r
2019-06-07,12400\r
2019-06-17,11700\r
2019-06-19,11700\r
2019-06-24,11700\r
2019-06-27,11700\r
2019-06-29,11700\r
2019-07-02,11600\r
2019-07-04,13100\r
2019-07-07,11600\r
2019-07-09,11600\r
2019-07-12,11600\r
2019-07-14,13200\r
2019-07-17,12000\r
2019-07-19,12100\r
2019-07-22,11800\r
2019-07-24,12300\r
2019-07-29,12300\r
2019-08-01,11800\r
2019-08-03,12300\r
2019-08-08,12200\r
2019-08-11,12200\r
2019-08-26,10400\r
2019-08-28,10400\r
2019-08-31,10800\r
2019-09-02,10800\r
2019-09-05,10800\r
2019-09-07,10800\r
2019-09-10,10800\r
2019-09-12,10300\r
2019-09-15,11500\r
2019-09-17,9900\r
2019-09-20,11400\r
2019-09-22,11400\r
2019-09-30,11400\r
2019-12-04,9900\r
2019-12-06,9900\r
2019-12-14,9900\r
2019-12-19,9900\r
2020-02-07,6200\r
2020-02-09,6200\r
2020-02-22,9500\r
2020-02-24,9400\r
2020-03-13,9800\r
2020-03-15,9800\r
2020-03-18,10600\r
2020-03-20,10600\r
2020-03-23,10600\r
2020-03-25,10600\r
2020-03-28,10000\r
2020-03-30,10200\r
2020-04-02,10000\r
2020-04-04,11100\r
2020-04-07,10300\r
2020-04-09,10300\r
2020-04-12,11300\r
2020-04-14,11300\r
2020-04-17,11400\r
2020-04-22,12100\r
2020-04-24,11700\r
2020-04-27,11700\r
2020-05-07,11100\r
2020-05-09,11100\r
2020-05-17,12000\r
2020-05-19,12000\r
2020-05-27,12000\r
2020-05-29,12000\r
2020-06-01,12000\r
2020-06-03,11800\r
2020-07-11,11400\r
2020-07-13,11400\r
2020-07-18,11400\r
2020-07-21,11500\r
2020-07-23,11500\r
2020-07-28,11200\r
2020-07-31,11400\r
2020-08-05,11400\r
2020-08-07,11000\r
2020-08-10,11000\r
2020-08-12,11000\r
2020-08-15,11000\r
2020-08-17,10000\r
2020-08-20,10500\r
2020-08-25,10500\r
2020-08-27,12600\r
2020-09-01,12600\r
2020-09-04,10700\r
2020-09-09,10200\r
2020-09-11,10300\r
2020-09-14,9900\r
2020-09-16,9900\r
2020-09-19,9900\r
2020-11-18,8500\r
2020-11-23,8500\r
2020-11-25,8500\r
2020-11-28,10200\r
2020-12-10,9600\r
2020-12-13,10400\r
2021-02-21,8800\r
2021-02-23,8800\r
2021-02-26,11300\r
2021-02-28,11300\r
2021-03-08,10600\r
2021-03-23,10300\r
2021-03-25,10300\r
2021-03-28,11200\r
2021-03-30,11200\r
2021-04-02,10600\r
2021-04-04,11400\r
2021-04-07,11400\r
2021-04-09,10300\r
2021-04-12,11000\r
2021-04-14,10600\r
2021-04-17,10600\r
2021-04-19,10600\r
2021-04-22,10600\r
2021-04-27,11100\r
2021-06-11,10900\r
2021-06-13,10900\r
2021-06-16,11800\r
2021-06-18,11800\r
2021-06-23,10500\r
2021-06-26,10500\r
2021-07-21,9700\r
2021-07-23,9700\r
2021-08-10,8800\r
2021-08-12,8800\r
2021-08-15,8800\r
2021-08-20,8800\r
2021-09-24,9600\r
2021-10-01,9600\r
2021-10-14,9800\r
2021-10-16,9800\r
2021-10-19,10900\r
2021-10-24,9700\r
2021-10-29,11000\r
2022-02-11,9800\r
2022-02-13,9800\r
2022-02-18,9800\r
2022-02-26,9000\r
2022-02-28,9000\r
2022-03-03,9000\r
2022-03-05,9000\r
2022-03-08,9000\r
2022-03-23,11100\r
2022-03-25,11100\r
2022-04-17,11100\r
2022-04-27,11100\r
2022-05-04,9100\r
2022-05-07,9100\r
2022-06-11,11900\r
2022-06-13,11900\r
2022-06-16,12500\r
2022-06-18,12500\r
2022-06-21,11800\r
2022-06-23,12800\r
2022-07-01,11700\r
2022-07-06,12400\r
2022-07-08,12400\r
2022-07-11,12700\r
2022-07-18,11900\r
2022-07-21,11900\r
2022-07-26,11900\r
2022-07-28,11900\r
2022-07-31,10800\r
2022-08-02,12000\r
2022-08-05,12000\r
2022-08-07,10600\r
2022-08-10,11100\r
2022-08-12,10700\r
2022-08-17,10700\r
2022-08-25,11900\r
2022-09-01,11900\r
2022-09-04,11900\r
2022-10-09,10700\r
2022-10-16,10700\r
2022-10-19,10700\r
2023-02-16,10600\r
2023-02-21,11300\r
2023-02-26,11200\r
2023-05-27,11100\r
2023-05-29,11100\r
2023-06-01,11300\r
2023-06-03,11300\r
2023-06-06,11300\r
2023-06-16,5600\r
2023-06-23,5600\r
2023-06-26,2300\r
2023-07-11,12000\r
2023-07-13,12000\r
2023-07-16,12000\r
2023-07-18,12000\r
`;export{r as default};
