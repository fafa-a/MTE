const r=`date,value\r
2017-02-25,12000\r
2017-03-07,12000\r
2017-03-14,12000\r
2017-03-17,13000\r
2017-03-27,12800\r
2017-04-03,12000\r
2017-04-06,12000\r
2017-04-23,12300\r
2017-05-03,12300\r
2017-05-16,13500\r
2017-05-23,13500\r
2017-05-26,13800\r
2017-06-02,14100\r
2017-06-05,13500\r
2017-06-12,11500\r
2017-06-25,13700\r
2017-07-02,13700\r
2017-07-05,14700\r
2017-07-07,14700\r
2017-07-10,14700\r
2017-07-12,14700\r
2017-07-17,12100\r
2017-08-04,11700\r
2017-08-06,12900\r
2017-08-11,12900\r
2017-08-14,11600\r
2017-08-19,11800\r
2017-08-21,12400\r
2017-08-24,12300\r
2017-08-26,12400\r
2017-08-29,13000\r
2017-09-03,11100\r
2017-09-05,11100\r
2017-09-08,11000\r
2017-09-20,10100\r
2017-09-23,12400\r
2017-09-28,12400\r
2017-10-03,12400\r
2017-10-05,11300\r
2017-10-08,12100\r
2017-10-10,11300\r
2017-10-13,11700\r
2017-10-15,11400\r
2017-10-18,11200\r
2017-10-25,10900\r
2017-10-28,10100\r
2017-10-30,11400\r
2017-11-07,10300\r
2017-11-14,10800\r
2017-11-17,10700\r
2017-11-19,11500\r
2017-11-22,10600\r
2017-11-24,10600\r
2017-11-27,11400\r
2017-11-29,10200\r
2017-12-09,11400\r
2017-12-14,11400\r
2017-12-19,11400\r
2018-02-02,10700\r
2018-02-10,12200\r
2018-02-12,12200\r
2018-03-14,11800\r
2018-03-19,11800\r
2018-03-22,12900\r
2018-04-01,13500\r
2018-04-21,14100\r
2018-04-23,14100\r
2018-04-26,13800\r
2018-05-06,13900\r
2018-05-11,13100\r
2018-05-18,13100\r
2018-05-21,14100\r
2018-05-23,12900\r
2018-06-20,13300\r
2018-06-22,13500\r
2018-06-25,13100\r
2018-06-27,13100\r
2018-07-02,13100\r
2018-07-07,13300\r
2018-07-10,12000\r
2018-07-12,11900\r
2018-07-15,13100\r
2018-07-17,13100\r
2018-07-20,13100\r
2018-07-22,13200\r
2018-07-25,12600\r
2018-07-27,13100\r
2018-07-30,13100\r
2018-08-01,12500\r
2018-08-04,12500\r
2018-08-06,12900\r
2018-08-11,12200\r
2018-08-16,12700\r
2018-08-19,13000\r
2018-08-21,11700\r
2018-08-26,13100\r
2018-08-31,11500\r
2018-09-03,11500\r
2018-09-08,13100\r
2018-09-10,11500\r
2018-09-13,11800\r
2018-09-20,11900\r
2018-09-23,12900\r
2018-09-25,13500\r
2018-09-28,12700\r
2018-09-30,12700\r
2018-10-03,13300\r
2018-10-05,12300\r
2018-10-20,11400\r
2018-10-23,11400\r
2018-10-25,11400\r
2018-10-30,11400\r
2018-11-19,10500\r
2018-11-22,11500\r
2018-11-24,11500\r
2018-11-27,11500\r
2018-11-29,10500\r
2018-12-19,10500\r
2018-12-27,10500\r
2018-12-29,10500\r
2019-01-03,6800\r
2019-01-11,6800\r
2019-01-16,8600\r
2019-01-23,7500\r
2019-01-28,7500\r
2019-02-12,7300\r
2019-02-15,8000\r
2019-02-17,7300\r
2019-02-20,8500\r
2019-02-22,7800\r
2019-02-25,7900\r
2019-02-27,7800\r
2019-03-12,8100\r
2019-03-22,9000\r
2019-03-24,8200\r
2019-03-27,8800\r
2019-03-29,8800\r
2019-04-01,8500\r
2019-04-08,8500\r
2019-04-13,8200\r
2019-05-01,5500\r
2019-05-06,8300\r
2019-05-11,8300\r
2019-05-13,6400\r
2019-05-16,6400\r
2019-05-23,7000\r
2019-05-31,8900\r
2019-06-02,6800\r
2019-06-12,8400\r
2019-06-17,8400\r
2019-06-22,8400\r
2019-06-25,8400\r
2019-06-27,8400\r
2019-06-30,8400\r
2019-07-02,8400\r
2019-07-05,10300\r
2019-07-07,10300\r
2019-07-10,10300\r
2019-07-12,10500\r
2019-07-15,10600\r
2019-07-17,10200\r
2019-07-22,9000\r
2019-07-25,9500\r
2019-08-01,9500\r
2019-08-04,8500\r
2019-08-09,8500\r
2019-08-11,8900\r
2019-08-14,8700\r
2019-08-16,8700\r
2019-08-21,9100\r
2019-08-24,9500\r
2019-08-26,9200\r
2019-08-29,9200\r
2019-08-31,7500\r
2019-09-03,7600\r
2019-09-05,7600\r
2019-09-13,8200\r
2019-09-15,7800\r
2019-09-18,8700\r
2019-09-20,8700\r
2019-10-05,8200\r
2019-10-08,7200\r
2019-10-13,8400\r
2019-10-25,7800\r
2020-01-06,6500\r
2020-01-11,8600\r
2020-01-16,6900\r
2020-01-18,7200\r
2020-02-05,6100\r
2020-02-07,6100\r
2020-02-15,6700\r
2020-02-20,6100\r
2020-02-22,5700\r
2020-03-01,5700\r
2020-03-08,5600\r
2020-03-18,7200\r
2020-03-21,7900\r
2020-03-28,7900\r
2020-03-31,7900\r
2020-04-05,9300\r
2020-04-07,9700\r
2020-04-10,9500\r
2020-04-12,9600\r
2020-04-15,9200\r
2020-04-25,9900\r
2020-05-17,8200\r
2020-05-20,10200\r
2020-05-22,8300\r
2020-05-25,9100\r
2020-05-27,8500\r
2020-05-30,8700\r
2020-06-21,6400\r
2020-06-24,10200\r
2020-06-26,8800\r
2020-07-01,8800\r
2020-07-04,9400\r
2020-07-09,9900\r
2020-07-11,8500\r
2020-07-14,10500\r
2020-07-19,7700\r
2020-07-21,7500\r
2020-07-24,7800\r
2020-07-26,7300\r
2020-07-29,9100\r
2020-07-31,8300\r
2020-08-03,8300\r
2020-08-05,7800\r
2020-08-08,8700\r
2020-08-10,9000\r
2020-08-15,7700\r
2020-08-20,8100\r
2020-08-23,9000\r
2020-08-25,8600\r
2020-09-02,7100\r
2020-09-04,7200\r
2020-09-07,5300\r
2020-09-12,5800\r
2020-09-14,6400\r
2020-09-17,6100\r
2020-09-19,6900\r
2020-10-17,7100\r
2020-10-24,7100\r
2020-11-01,7100\r
2020-11-06,6700\r
2020-11-08,7100\r
2020-11-11,6100\r
2020-11-18,6200\r
2020-11-21,6200\r
2020-11-23,5900\r
2020-11-26,5900\r
2020-12-18,7900\r
2021-02-06,11000\r
2021-02-11,11000\r
2021-02-14,12900\r
2021-02-19,12700\r
2021-02-24,12300\r
2021-03-01,11300\r
2021-03-23,12100\r
2021-03-26,12100\r
2021-03-28,13200\r
2021-03-31,13000\r
2021-04-02,13600\r
2021-04-05,12400\r
2021-04-07,12300\r
2021-04-15,12900\r
2021-04-17,13600\r
2021-04-20,13600\r
2021-04-22,13600\r
2021-05-27,11700\r
2021-05-30,13100\r
2021-06-09,12300\r
2021-06-11,12500\r
2021-06-14,12700\r
2021-06-16,14000\r
2021-06-19,12800\r
2021-06-21,13600\r
2021-06-26,12000\r
2021-07-01,11800\r
2021-07-09,11400\r
2021-08-10,12400\r
2021-08-13,12400\r
2021-08-18,12400\r
2021-08-20,12500\r
2021-08-23,12200\r
2021-08-25,11400\r
2021-08-28,11400\r
2021-08-30,11000\r
2021-09-04,11000\r
2021-09-07,12400\r
2021-09-14,10800\r
2021-09-17,10900\r
2021-09-22,10900\r
2021-09-24,11400\r
2021-09-29,11600\r
2021-10-07,9800\r
2021-10-12,11100\r
2021-10-14,10100\r
2021-10-17,10100\r
2021-10-24,10400\r
2021-10-27,10400\r
2021-12-16,10400\r
2021-12-18,11500\r
2021-12-21,11300\r
2021-12-23,11500\r
2022-01-05,10800\r
2022-01-12,10800\r
2022-01-15,11600\r
2022-01-17,11200\r
2022-01-22,11500\r
2022-01-25,11100\r
2022-01-27,9800\r
2022-01-30,9800\r
2022-02-01,9800\r
2022-02-06,10100\r
2022-02-09,11500\r
2022-02-26,11500\r
2022-03-01,11500\r
2022-03-03,11500\r
2022-03-08,11500\r
2022-03-23,11900\r
2022-03-26,12700\r
2022-04-05,14100\r
2022-04-10,13600\r
2022-04-15,13200\r
2022-04-17,12100\r
2022-04-27,11300\r
2022-04-30,13500\r
2022-05-07,13500\r
2022-05-15,13400\r
2022-05-17,13500\r
2022-05-20,13500\r
2022-05-22,13500\r
2022-05-27,12000\r
2022-05-30,11800\r
2022-06-01,10700\r
2022-06-04,10700\r
2022-06-06,11800\r
2022-06-11,12800\r
2022-06-14,12600\r
2022-06-16,12600\r
2022-06-19,13000\r
2022-06-29,14400\r
2022-07-01,11700\r
2022-07-04,11700\r
2022-07-06,11900\r
2022-07-11,11800\r
2022-07-14,11800\r
2022-07-16,12000\r
2022-07-19,13500\r
2022-07-21,12500\r
2022-07-24,13500\r
2022-07-26,12700\r
2022-07-29,13700\r
2022-07-31,13200\r
2022-08-03,13800\r
2022-08-05,13100\r
2022-08-08,14100\r
2022-08-10,13200\r
2022-08-13,13100\r
2022-08-15,13400\r
2022-08-20,13400\r
2022-08-23,12500\r
2022-08-28,14400\r
2022-08-30,14400\r
2022-09-02,14400\r
2022-09-04,14500\r
2022-09-12,14500\r
2022-09-19,13600\r
2022-09-22,12900\r
2022-10-02,12800\r
2022-10-04,11800\r
2022-10-07,13800\r
2022-10-09,12100\r
2022-10-12,12100\r
2022-10-22,12600\r
2022-10-24,12600\r
2022-10-27,12600\r
2022-11-01,12600\r
2022-11-11,11000\r
2022-11-13,11000\r
2022-11-16,12700\r
2023-02-04,11800\r
2023-02-06,11900\r
2023-02-09,10600\r
2023-02-11,11500\r
2023-02-14,11400\r
2023-02-16,10800\r
2023-02-19,11400\r
2023-02-21,11400\r
2023-02-26,10900\r
2023-03-01,12700\r
2023-03-03,12700\r
2023-03-16,12000\r
2023-03-28,11900\r
2023-04-05,13100\r
2023-04-07,12400\r
2023-04-15,13200\r
2023-04-17,12500\r
2023-04-20,12200\r
2023-05-02,12000\r
2023-05-27,11600\r
2023-05-30,11700\r
2023-06-04,12100\r
2023-06-24,14900\r
2023-06-26,14900\r
2023-06-29,15100\r
2023-07-11,14800\r
2023-07-14,14800\r
2023-07-16,14800\r
2023-07-19,14800\r
2023-07-21,14800\r
2023-07-31,12900\r
2023-08-03,12900\r
2023-08-05,12900\r
2023-08-08,14800\r
2023-08-10,14800\r
2023-08-13,14800\r
2023-08-15,14800\r
2023-08-18,14800\r
2023-08-20,12400\r
2023-08-23,12100\r
2023-09-07,14600\r
2023-09-14,14000\r
2023-09-19,14300\r
2023-09-24,11800\r
2023-09-27,13500\r
2023-09-29,12900\r
2023-10-02,13400\r
2023-10-04,13400\r
2023-10-07,13200\r
2023-10-12,12500\r
2023-11-26,11300\r
2023-12-03,11400\r
2023-12-06,11400\r
`;export{r as default};
