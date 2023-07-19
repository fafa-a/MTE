const r=`date,value\r
2017-02-19,25100\r
2017-03-01,27000\r
2017-03-11,29100\r
2017-04-10,31100\r
2017-04-20,30300\r
2017-06-19,28400\r
2017-07-04,25000\r
2017-07-14,27100\r
2017-07-29,24600\r
2017-08-08,23900\r
2017-08-13,20900\r
2017-08-18,23300\r
2017-08-23,22200\r
2017-09-02,20800\r
2017-09-17,19900\r
2017-09-27,23800\r
2017-10-07,20700\r
2017-10-12,22100\r
2017-10-17,23200\r
2017-10-22,21100\r
2017-10-27,18500\r
2017-11-16,17500\r
2017-11-21,19400\r
2017-11-26,19700\r
2017-12-16,19200\r
2017-12-21,19800\r
2018-01-05,18400\r
2018-02-04,21400\r
2018-02-09,23100\r
2018-02-14,22900\r
2018-03-26,30100\r
2018-04-05,29500\r
2018-04-20,28800\r
2018-04-25,31200\r
2018-04-30,30500\r
2018-05-20,30000\r
2018-06-09,32100\r
2018-06-19,31900\r
2018-07-04,31000\r
2018-07-09,29400\r
2018-07-14,30800\r
2018-07-19,29400\r
2018-07-24,30400\r
2018-07-29,30200\r
2018-08-08,26800\r
2018-08-23,29600\r
2018-09-02,25100\r
2018-09-07,24400\r
2018-09-22,24900\r
2018-09-27,23600\r
2018-10-02,23700\r
2018-10-22,23500\r
2018-12-06,23700\r
2019-01-05,25700\r
2019-01-10,22800\r
2019-01-15,22600\r
2019-01-25,22500\r
2019-01-30,27800\r
2019-02-04,24000\r
2019-02-14,28900\r
2019-03-01,24500\r
2019-03-11,26100\r
2019-03-16,27700\r
2019-03-21,27200\r
2019-03-31,22100\r
2019-04-05,29100\r
2019-04-30,31800\r
2019-05-05,29800\r
2019-05-10,32100\r
2019-05-30,32900\r
2019-06-04,31800\r
2019-06-19,34600\r
2019-06-29,32800\r
2019-07-19,35800\r
2019-07-24,29500\r
2019-07-29,28700\r
2019-08-03,25300\r
2019-08-23,26400\r
2019-09-02,27100\r
2019-09-07,22500\r
2019-09-12,19400\r
2019-09-17,26600\r
2019-09-27,13600\r
2019-10-02,20800\r
2019-10-07,21700\r
2019-10-27,22300\r
2019-11-06,23800\r
2019-11-16,21000\r
2019-12-21,22300\r
2019-12-26,21500\r
2020-01-05,27800\r
2020-02-04,21700\r
2020-02-14,22000\r
2020-02-19,28300\r
2020-02-24,27600\r
2020-03-15,30300\r
2020-04-04,25200\r
2020-04-09,32100\r
2020-04-14,29000\r
2020-04-24,35000\r
2020-04-29,29000\r
2020-05-04,36300\r
2020-05-09,30600\r
2020-05-24,35700\r
2020-06-23,33900\r
2020-06-28,32500\r
2020-07-03,29800\r
2020-07-08,30100\r
2020-08-02,33200\r
2020-08-07,20900\r
2020-08-22,30400\r
2020-08-27,21100\r
2020-09-01,17700\r
2020-09-06,25000\r
2020-09-16,16800\r
2020-09-26,21800\r
2020-10-11,27700\r
2020-11-05,17700\r
2020-11-20,22600\r
2020-11-25,23500\r
2020-12-25,23500\r
2021-01-14,22800\r
2021-01-19,23600\r
2021-01-24,23400\r
2021-02-23,26400\r
2021-02-28,24900\r
2021-03-10,29200\r
2021-03-15,28000\r
2021-03-30,30700\r
2021-04-04,26600\r
2021-05-04,32600\r
2021-05-19,30600\r
2021-06-03,32300\r
2021-06-08,31100\r
2021-06-13,34800\r
2021-06-28,32500\r
2021-07-03,34000\r
2021-07-13,30700\r
2021-07-18,32300\r
2021-07-23,32900\r
2021-07-28,30500\r
2021-08-02,30400\r
2021-08-17,27200\r
2021-08-22,27600\r
2021-08-27,26200\r
2021-09-11,23400\r
2021-10-06,20900\r
2021-10-11,17900\r
2021-10-16,19200\r
2021-10-26,19900\r
2021-11-20,18600\r
2021-11-30,19600\r
2021-12-05,20900\r
2021-12-20,20300\r
2022-01-09,22300\r
2022-01-14,20700\r
2022-01-24,23500\r
2022-02-08,22200\r
2022-02-18,21800\r
2022-02-23,22000\r
2022-02-28,24200\r
2022-03-25,26500\r
2022-04-04,24900\r
2022-04-09,28500\r
2022-04-14,27900\r
2022-05-04,32400\r
2022-05-09,30300\r
2022-05-14,30500\r
2022-05-29,30900\r
2022-06-18,22400\r
2022-07-03,28100\r
2022-07-08,28000\r
2022-07-13,27300\r
2022-07-18,28800\r
2022-07-23,29300\r
2022-08-02,26600\r
2022-08-07,27100\r
2022-08-22,26300\r
2022-09-01,20900\r
2022-09-11,24100\r
2022-09-16,25600\r
2022-09-26,24300\r
2022-10-06,24700\r
2022-11-05,23400\r
2022-11-20,23200\r
2022-11-25,22200\r
2022-11-30,23100\r
2022-12-05,23100\r
2023-01-09,19700\r
2023-01-19,20300\r
2023-01-24,22500\r
2023-01-29,17900\r
2023-02-03,16600\r
2023-02-08,18500\r
2023-02-18,19400\r
2023-03-05,21200\r
2023-03-10,19500\r
2023-03-25,27800\r
2023-03-30,28400\r
2023-04-14,31600\r
2023-04-19,33500\r
2023-04-24,31200\r
2023-04-29,31600\r
2023-05-24,31400\r
2023-06-08,33700\r
2023-06-18,32700\r
2023-06-23,33100\r
2023-07-03,34800\r
2023-07-08,31000\r
`;export{r as default};
