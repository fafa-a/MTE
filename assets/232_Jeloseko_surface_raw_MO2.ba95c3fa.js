const r=`date,value\r
2017-02-18,24100\r
2017-02-25,24000\r
2017-03-10,17500\r
2017-04-09,23000\r
2017-04-16,23000\r
2017-04-19,23000\r
2017-04-29,19600\r
2017-06-18,22200\r
2017-06-25,22200\r
2017-06-28,22200\r
2017-07-18,19500\r
2017-07-23,19500\r
2017-07-28,19500\r
2017-08-02,17600\r
2017-08-04,17600\r
2017-08-07,17600\r
2017-08-12,20500\r
2017-08-14,20500\r
2017-08-17,22300\r
2017-08-22,20700\r
2017-08-24,22600\r
2017-08-27,22600\r
2017-08-29,20800\r
2017-09-01,20800\r
2017-09-03,17500\r
2017-09-06,17500\r
2017-09-08,17500\r
2017-09-26,19500\r
2017-09-28,19500\r
2017-10-06,19500\r
2017-10-11,13200\r
2017-10-13,13200\r
2017-10-16,16100\r
2017-10-23,16000\r
2017-10-26,16300\r
2017-10-28,13800\r
2017-10-31,13900\r
2017-11-02,13900\r
2017-11-05,13900\r
2017-11-07,11700\r
2017-11-15,14800\r
2017-11-17,14800\r
2017-11-20,15800\r
2017-11-22,15800\r
2017-11-25,15800\r
2017-11-27,13700\r
2017-11-30,13700\r
2017-12-05,15400\r
2017-12-12,15400\r
2017-12-15,15400\r
2017-12-25,18600\r
2017-12-27,18600\r
2017-12-30,18600\r
2018-01-24,22200\r
2018-01-29,23300\r
2018-03-15,17600\r
2018-03-17,17600\r
2018-03-22,17600\r
2018-04-04,15800\r
2018-04-14,16200\r
2018-04-19,18600\r
2018-04-21,18600\r
2018-04-24,20300\r
2018-05-04,18000\r
2018-05-24,23400\r
2018-05-29,23400\r
2018-06-03,24200\r
2018-06-08,22100\r
2018-06-23,21700\r
2018-06-25,21700\r
2018-07-03,21400\r
2018-07-13,20800\r
2018-07-15,20800\r
2018-07-23,22200\r
2018-07-25,19700\r
2018-08-02,20500\r
2018-08-04,19900\r
2018-08-12,21300\r
2018-08-17,20800\r
2018-08-19,20800\r
2018-08-22,20900\r
2018-08-27,18800\r
2018-09-01,15600\r
2018-09-03,18000\r
2018-09-08,15300\r
2018-09-11,15400\r
2018-09-18,13200\r
2018-09-26,12500\r
2018-09-28,12500\r
2018-10-03,12500\r
2018-11-15,8000\r
2018-11-17,8000\r
2018-11-22,8000\r
2018-11-25,8600\r
2018-11-30,8100\r
2018-12-20,18600\r
2018-12-27,18600\r
2019-02-03,19100\r
2019-02-13,19100\r
2019-02-15,19100\r
2019-02-18,13100\r
2019-02-20,13100\r
2019-02-23,11100\r
2019-02-25,11100\r
2019-02-28,11100\r
2019-03-05,12500\r
2019-03-07,2700\r
2019-03-20,3400\r
2019-03-22,3400\r
2019-03-25,3400\r
2019-03-27,3400\r
2019-03-30,8200\r
2019-04-04,8200\r
2019-04-09,8200\r
2019-05-09,26100\r
2019-05-11,26100\r
2019-05-14,26100\r
2019-05-16,26100\r
2019-05-29,7100\r
2019-06-03,21500\r
2019-06-08,23600\r
2019-06-13,20000\r
2019-06-28,21500\r
2019-07-03,21500\r
2019-07-05,21500\r
2019-07-08,21500\r
2019-07-10,21500\r
2019-08-17,5400\r
2019-08-22,13800\r
2019-08-24,13800\r
2019-08-27,13800\r
2019-08-29,13800\r
2019-09-03,13800\r
2019-09-06,13800\r
2019-09-16,12300\r
2019-09-18,12300\r
2019-09-26,12300\r
2019-10-11,5100\r
2019-10-13,5100\r
2019-10-21,5100\r
2019-10-26,5700\r
2019-10-31,5000\r
2019-12-05,18700\r
2019-12-10,19700\r
2019-12-15,18900\r
2019-12-20,18900\r
2019-12-25,19300\r
2019-12-27,20600\r
2019-12-30,19600\r
2020-01-14,22600\r
2020-01-16,22600\r
2020-01-19,22600\r
2020-01-24,21100\r
2020-01-29,21100\r
2020-01-31,22600\r
2020-02-03,21900\r
2020-02-05,22600\r
2020-02-23,15000\r
2020-04-03,14600\r
2020-04-05,14600\r
2020-04-08,14600\r
2020-04-10,14600\r
2020-04-13,14300\r
2020-04-15,14300\r
2020-04-18,14300\r
2020-04-23,17500\r
2020-05-03,11300\r
2020-05-05,11300\r
2020-05-18,15900\r
2020-05-28,17300\r
2020-05-30,17300\r
2020-06-02,17300\r
2020-06-07,16200\r
2020-06-12,16200\r
2020-07-22,20200\r
2020-07-24,20200\r
2020-07-27,21000\r
2020-07-29,21000\r
2020-08-01,21000\r
2020-08-06,16500\r
2020-08-08,17300\r
2020-08-16,11300\r
2020-08-18,11300\r
2020-08-31,9000\r
2020-09-02,9000\r
2020-09-05,9000\r
2020-09-07,9000\r
2020-09-10,9000\r
2020-09-12,9000\r
2020-09-15,11100\r
2020-09-17,9300\r
2020-09-25,9300\r
2020-09-30,9300\r
2020-10-10,6200\r
2020-10-12,6200\r
2020-10-15,6200\r
2020-10-30,10000\r
2020-11-01,10000\r
2020-11-04,10000\r
2020-11-11,10000\r
2020-11-14,16700\r
2020-11-21,16700\r
2020-11-26,16700\r
2020-11-29,16700\r
2021-01-08,16500\r
2021-01-10,16500\r
2021-01-15,16500\r
2021-01-18,16500\r
2021-02-17,19300\r
2021-02-19,19300\r
2021-02-24,19300\r
2021-02-27,19300\r
2021-03-29,17200\r
2021-03-31,17200\r
2021-04-03,19600\r
2021-04-05,19600\r
2021-04-08,19600\r
2021-04-23,20800\r
2021-05-03,21600\r
2021-05-08,21500\r
2021-05-28,14000\r
2021-05-30,14000\r
2021-06-02,14000\r
2021-06-07,14000\r
2021-08-26,14900\r
2021-08-28,14900\r
2021-08-31,14900\r
2021-09-05,14000\r
2021-09-12,14800\r
2021-09-15,14800\r
2021-09-30,10400\r
2021-10-07,10400\r
2021-10-10,10400\r
2021-10-20,9900\r
2021-10-27,9900\r
2021-11-09,9400\r
2021-11-11,9400\r
2021-11-19,11000\r
2021-12-14,22300\r
2021-12-16,22300\r
2021-12-19,22500\r
2022-01-13,23100\r
2022-01-15,23100\r
2022-01-23,23700\r
2022-01-25,20200\r
2022-02-02,24800\r
2022-02-09,24800\r
2022-07-02,22100\r
2022-07-07,22100\r
2022-07-12,22300\r
2022-07-14,19800\r
2022-07-17,21800\r
2022-07-24,20100\r
2022-07-27,20100\r
2022-08-01,17600\r
2022-08-03,17600\r
2022-08-06,17600\r
2022-08-08,17600\r
2022-08-11,17600\r
2022-08-13,13200\r
2022-08-16,13200\r
2022-09-05,6600\r
2022-09-10,10900\r
2022-09-12,10900\r
2022-09-15,10900\r
2022-09-20,10900\r
2022-09-22,7800\r
2022-09-25,8100\r
2022-09-30,8100\r
2022-10-02,7100\r
2022-10-05,9400\r
2022-10-07,9400\r
2022-10-12,9400\r
2022-10-15,10500\r
2022-10-17,10400\r
2022-10-20,12200\r
2022-10-22,12200\r
2022-12-14,17000\r
2022-12-21,15800\r
2022-12-24,15800\r
2023-02-02,23700\r
2023-02-04,23700\r
2023-02-07,23700\r
2023-02-09,23700\r
2023-02-12,23700\r
2023-02-14,18500\r
2023-02-17,18500\r
2023-02-19,18500\r
2023-03-09,21500\r
2023-03-14,21500\r
2023-03-19,21500\r
2023-04-18,16000\r
2023-04-20,16000\r
2023-05-28,18000\r
2023-05-30,18600\r
2023-06-02,18600\r
2023-07-27,18100\r
2023-07-29,18100\r
2023-08-06,18100\r
2023-08-11,17800\r
2023-08-16,17800\r
2023-08-21,17800\r
2023-09-05,20700\r
2023-09-07,20700\r
2023-09-10,20700\r
2023-09-20,16700\r
2023-09-25,16700\r
2023-09-27,16700\r
2023-09-30,16600\r
2023-10-02,17800\r
2023-10-05,15600\r
2023-10-07,17700\r
2023-10-10,15400\r
2023-10-12,15500\r
2023-10-15,15500\r
`;export{r as default};
