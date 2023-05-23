const r=`date,value\r
2017-02-19,22000\r
2017-03-01,21000\r
2017-03-11,21500\r
2017-04-10,22400\r
2017-04-20,22200\r
2017-06-09,21300\r
2017-06-19,22500\r
2017-07-04,21600\r
2017-07-14,20700\r
2017-07-24,20700\r
2017-07-29,19400\r
2017-08-03,17700\r
2017-08-13,17200\r
2017-08-18,20700\r
2017-09-02,18500\r
2017-09-07,20700\r
2017-09-12,14800\r
2017-09-17,20800\r
2017-09-27,22200\r
2017-10-07,20000\r
2017-10-12,19800\r
2017-10-17,21200\r
2017-10-22,17700\r
2017-10-27,18600\r
2017-11-16,18500\r
2017-11-21,16800\r
2017-11-26,18100\r
2017-12-16,18500\r
2017-12-21,17500\r
2018-01-05,19300\r
2018-01-20,20600\r
2018-02-04,18300\r
2018-02-09,16600\r
2018-02-14,18500\r
2018-03-16,21100\r
2018-03-26,22500\r
2018-04-05,25100\r
2018-04-15,16500\r
2018-04-20,19000\r
2018-04-25,23200\r
2018-05-25,21100\r
2018-06-09,22100\r
2018-06-14,23100\r
2018-07-04,21100\r
2018-07-09,20900\r
2018-07-14,23400\r
2018-07-19,21200\r
2018-07-24,23800\r
2018-07-29,21200\r
2018-08-13,23000\r
2018-08-28,20900\r
2018-09-02,22600\r
2018-09-07,19300\r
2018-09-12,23000\r
2018-09-17,19700\r
2018-09-27,22700\r
2018-10-02,21200\r
2018-11-26,17600\r
2018-12-06,15700\r
2018-12-11,16100\r
2019-01-05,13700\r
2019-01-10,9700\r
2019-01-15,10300\r
2019-01-25,6900\r
2019-01-30,19600\r
2019-02-04,13000\r
2019-02-14,10500\r
2019-03-01,12000\r
2019-03-11,12900\r
2019-03-16,11100\r
2019-03-21,12200\r
2019-03-31,4400\r
2019-04-05,11400\r
2019-04-15,14800\r
2019-04-30,11300\r
2019-05-10,16500\r
2019-06-04,19400\r
2019-06-19,18400\r
2019-06-29,16800\r
2019-07-04,18400\r
2019-07-19,16100\r
2019-07-29,14200\r
2019-08-03,12700\r
2019-08-08,17100\r
2019-08-18,15700\r
2019-08-23,15000\r
2019-09-02,8400\r
2019-09-07,17600\r
2019-09-12,14500\r
2019-09-17,13200\r
2019-09-27,12000\r
2019-10-02,12900\r
2019-10-07,13200\r
2019-11-06,6700\r
2019-11-16,6200\r
2019-12-06,7900\r
2019-12-21,2200\r
2020-01-05,6300\r
2020-02-04,7300\r
2020-02-09,17100\r
2020-02-14,6600\r
2020-02-24,9500\r
2020-03-20,9700\r
2020-04-04,8300\r
2020-04-09,10800\r
2020-04-14,9200\r
2020-04-29,20800\r
2020-05-04,11800\r
2020-05-19,23600\r
2020-05-24,13000\r
2020-06-23,21600\r
2020-06-28,21200\r
2020-07-03,18400\r
2020-07-08,19400\r
2020-07-23,22500\r
2020-08-02,15700\r
2020-08-07,18600\r
2020-08-22,10000\r
2020-08-27,16100\r
2020-09-01,13800\r
2020-09-06,9000\r
2020-09-16,11600\r
2020-09-26,14700\r
2020-10-11,18000\r
2020-10-31,17500\r
2020-11-05,12500\r
2020-11-20,10600\r
2020-11-30,19000\r
2020-12-30,15000\r
2021-01-14,18500\r
2021-01-19,20700\r
2021-01-24,17100\r
2021-02-23,19300\r
2021-02-28,19600\r
2021-03-10,21100\r
2021-03-15,19300\r
2021-03-30,22600\r
2021-05-04,22400\r
2021-05-14,23300\r
2021-05-19,20600\r
2021-06-03,24100\r
2021-06-13,20800\r
2021-07-03,23600\r
2021-07-18,24900\r
2021-07-28,23500\r
2021-08-02,22500\r
2021-08-17,22100\r
2021-08-22,23500\r
2021-08-27,21400\r
2021-09-01,20500\r
2021-09-11,23100\r
2021-10-01,22500\r
2021-10-06,20500\r
2021-10-11,21300\r
2021-10-16,21200\r
2021-11-05,17700\r
2021-11-20,16500\r
2021-11-30,19800\r
2021-12-05,19800\r
2021-12-20,17500\r
2022-01-09,21300\r
2022-01-14,15700\r
2022-01-24,19900\r
2022-01-29,18300\r
2022-02-08,15300\r
2022-02-18,18500\r
2022-02-23,20700\r
2022-03-25,24000\r
2022-04-09,24800\r
2022-04-19,23600\r
2022-05-09,23400\r
2022-05-14,22600\r
2022-05-29,23100\r
2022-06-13,20400\r
2022-06-18,20900\r
2022-06-28,22300\r
2022-07-03,22200\r
2022-07-08,21500\r
2022-07-23,24900\r
2022-08-02,21400\r
2022-08-07,22000\r
2022-08-12,20800\r
2022-08-22,22400\r
2022-08-27,20100\r
2022-09-11,19900\r
2022-09-16,18200\r
2022-09-26,20900\r
2022-10-16,17200\r
2022-10-26,19400\r
2022-11-05,17100\r
2022-11-20,15300\r
2022-11-25,19700\r
2022-11-30,13800\r
2022-12-05,18300\r
2022-12-10,17700\r
2022-12-25,12500\r
2023-01-04,14000\r
2023-01-09,18400\r
2023-01-19,16900\r
2023-01-29,20300\r
2023-02-03,19700\r
2023-02-08,20300\r
2023-02-13,22200\r
2023-02-18,20800\r
2023-03-05,22000\r
2023-03-30,19500\r
2023-04-24,21400\r
`;export{r as default};
