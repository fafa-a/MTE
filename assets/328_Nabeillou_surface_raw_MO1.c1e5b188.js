const r=`date,value\r
2017-01-26,25400\r
2017-02-25,22700\r
2017-03-17,25100\r
2017-03-27,22700\r
2017-04-23,25500\r
2017-05-16,27500\r
2017-05-26,25900\r
2017-06-02,24700\r
2017-06-22,27900\r
2017-06-25,28500\r
2017-07-05,27200\r
2017-07-07,25800\r
2017-07-17,26800\r
2017-08-14,26700\r
2017-08-21,26100\r
2017-08-24,26100\r
2017-08-26,23000\r
2017-08-29,24900\r
2017-09-05,24700\r
2017-09-20,26800\r
2017-09-23,26900\r
2017-10-05,25300\r
2017-10-08,26400\r
2017-10-13,25300\r
2017-10-15,24300\r
2017-10-18,23400\r
2017-10-25,23900\r
2017-10-28,22800\r
2017-11-07,24300\r
2017-11-17,26300\r
2017-11-24,24000\r
2017-12-09,24600\r
2017-12-14,26400\r
2017-12-19,27100\r
2018-02-25,25700\r
2018-03-14,24100\r
2018-03-22,25700\r
2018-04-18,26100\r
2018-04-21,26300\r
2018-04-26,25500\r
2018-05-11,27600\r
2018-06-20,27300\r
2018-06-22,23100\r
2018-06-25,23800\r
2018-07-07,23000\r
2018-07-10,25600\r
2018-07-15,25000\r
2018-07-22,26600\r
2018-07-25,24600\r
2018-07-27,25700\r
2018-07-30,25400\r
2018-08-01,24100\r
2018-08-04,26600\r
2018-08-11,23500\r
2018-08-19,26000\r
2018-08-21,24500\r
2018-09-03,27300\r
2018-09-08,27200\r
2018-09-10,26300\r
2018-09-20,25400\r
2018-09-23,24900\r
2018-09-25,25800\r
2018-09-28,24500\r
2018-09-30,24500\r
2018-10-05,25700\r
2018-10-23,25400\r
2018-11-12,26900\r
2018-11-17,25900\r
2018-11-24,26800\r
2018-11-29,25900\r
2018-12-19,26300\r
2018-12-27,26300\r
2019-01-03,26100\r
2019-01-16,26700\r
2019-02-12,26100\r
2019-02-15,20300\r
2019-02-17,24400\r
2019-02-20,25000\r
2019-02-22,22500\r
2019-02-25,28100\r
2019-02-27,22500\r
2019-03-12,20100\r
2019-03-22,21900\r
2019-03-24,21200\r
2019-03-27,22400\r
2019-03-29,21800\r
2019-04-01,24000\r
2019-04-13,22400\r
2019-05-01,23900\r
2019-05-11,28800\r
2019-05-13,24100\r
2019-05-23,23800\r
2019-05-31,24200\r
2019-06-02,23400\r
2019-06-17,21900\r
2019-06-27,20700\r
2019-06-30,27400\r
2019-07-05,23800\r
2019-07-10,25100\r
2019-07-12,22800\r
2019-07-15,20900\r
2019-07-22,20000\r
2019-07-25,24600\r
2019-08-04,21000\r
2019-08-09,23500\r
2019-08-14,26000\r
2019-08-24,23400\r
2019-09-13,25200\r
2019-09-15,24200\r
2019-09-18,23900\r
2019-09-20,25000\r
2019-10-08,23100\r
2019-10-13,24400\r
2019-10-25,24200\r
2020-01-01,29100\r
2020-01-06,27100\r
2020-01-11,27600\r
2020-01-16,25700\r
2020-02-05,24600\r
2020-02-15,20700\r
2020-02-20,23000\r
2020-02-22,21900\r
2020-03-13,26300\r
2020-03-18,23700\r
2020-03-21,24100\r
2020-03-28,23700\r
2020-03-31,21400\r
2020-04-05,21600\r
2020-04-10,24000\r
2020-04-15,24200\r
2020-05-17,24500\r
2020-05-20,27500\r
2020-05-22,23200\r
2020-05-25,25700\r
2020-06-19,23700\r
2020-06-21,20400\r
2020-07-04,25500\r
2020-07-09,21000\r
2020-07-19,21000\r
2020-07-21,18300\r
2020-07-24,23700\r
2020-07-29,27100\r
2020-07-31,19000\r
2020-08-05,19900\r
2020-08-08,24000\r
2020-08-10,25800\r
2020-08-20,22800\r
2020-08-25,19800\r
2020-09-02,21900\r
2020-09-04,20400\r
2020-09-07,25400\r
2020-09-12,20200\r
2020-09-14,22300\r
2020-09-17,23200\r
2020-09-19,25500\r
2020-11-08,22100\r
2020-11-11,22300\r
2020-11-18,20800\r
2020-11-23,19400\r
2020-11-26,20400\r
2021-02-06,29500\r
2021-02-14,29600\r
2021-02-19,25900\r
2021-02-24,24200\r
2021-03-01,22200\r
2021-03-23,23300\r
2021-03-28,23900\r
2021-03-31,23700\r
2021-04-02,24300\r
2021-04-05,23900\r
2021-04-15,25700\r
2021-04-17,23700\r
2021-04-20,23000\r
2021-04-22,23700\r
2021-05-27,26500\r
2021-05-30,23900\r
2021-06-09,23300\r
2021-06-14,25500\r
2021-06-26,22000\r
2021-07-19,22400\r
2021-07-29,23500\r
2021-08-10,23500\r
2021-08-20,23700\r
2021-08-23,23700\r
2021-08-28,22000\r
2021-08-30,23200\r
2021-09-12,23600\r
2021-09-14,21100\r
2021-09-17,11500\r
2021-09-22,24400\r
2021-09-24,23100\r
2021-10-14,23800\r
2021-10-24,22800\r
2021-10-27,22500\r
2021-12-16,25500\r
2021-12-18,23800\r
2021-12-21,24200\r
2021-12-23,22500\r
2022-01-02,22400\r
2022-01-05,22500\r
2022-01-15,27500\r
2022-01-22,23700\r
2022-01-25,26600\r
2022-02-09,24900\r
2022-02-26,20500\r
2022-03-01,20700\r
2022-03-08,20600\r
2022-03-23,23200\r
2022-03-26,22900\r
2022-04-05,24300\r
2022-04-10,22800\r
2022-04-17,21900\r
2022-05-07,23200\r
2022-05-17,23900\r
2022-06-01,22100\r
2022-06-06,21100\r
2022-06-16,20400\r
2022-06-19,21300\r
2022-06-29,23000\r
2022-07-06,22100\r
2022-07-11,22600\r
2022-07-14,23300\r
2022-07-16,20300\r
2022-07-19,24800\r
2022-07-21,23800\r
2022-07-24,23700\r
2022-07-26,23500\r
2022-07-31,24000\r
2022-08-03,23800\r
2022-08-10,23600\r
2022-08-13,22500\r
2022-08-28,25800\r
2022-08-30,25400\r
2022-09-04,26000\r
2022-09-12,24200\r
2022-09-19,23500\r
2022-09-22,24600\r
2022-10-04,23800\r
2022-10-09,23600\r
2022-10-22,23300\r
2022-10-24,22300\r
2022-10-27,26600\r
2022-11-11,22700\r
2022-11-16,22700\r
2022-12-06,24200\r
2022-12-26,23800\r
2022-12-28,22100\r
2023-01-10,24000\r
2023-02-06,22300\r
2023-02-09,22700\r
2023-02-11,23600\r
2023-02-14,24200\r
2023-02-16,22700\r
2023-02-19,23500\r
2023-02-21,21800\r
2023-02-26,22200\r
2023-03-01,24800\r
2023-03-16,24600\r
2023-03-28,22900\r
2023-04-05,23800\r
2023-04-07,23400\r
2023-04-17,23200\r
2023-04-20,21800\r
2023-05-17,21500\r
2023-05-27,21900\r
2023-05-30,21200\r
2023-07-09,20200\r
2023-07-11,23500\r
2023-07-14,23900\r
2023-07-16,24100\r
2023-07-31,22000\r
2023-08-03,23800\r
2023-08-08,23400\r
2023-08-10,25000\r
2023-08-13,21600\r
2023-08-20,20300\r
2023-08-23,19900\r
2023-09-07,23900\r
2023-09-14,21700\r
2023-09-24,21000\r
2023-09-27,20500\r
2023-09-29,21900\r
2023-10-02,18600\r
2023-10-07,19500\r
2023-10-12,19200\r
2023-11-26,22200\r
2023-12-03,21700\r
`;export{r as default};
