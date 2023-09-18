const r=`date,value\r
2017-02-25,22900\r
2017-03-17,22800\r
2017-03-27,29600\r
2017-04-03,28400\r
2017-04-16,26200\r
2017-04-23,28200\r
2017-05-16,31400\r
2017-05-23,21300\r
2017-05-26,26700\r
2017-06-02,10600\r
2017-06-05,19100\r
2017-06-15,20900\r
2017-06-25,17400\r
2017-07-05,22300\r
2017-07-07,22200\r
2017-08-14,21200\r
2017-08-21,26100\r
2017-08-26,25200\r
2017-08-29,26300\r
2017-10-05,22000\r
2017-10-15,23600\r
2017-11-17,21700\r
2017-11-22,19800\r
2018-01-28,29300\r
2018-02-27,16000\r
2018-03-14,22200\r
2018-03-19,23100\r
2018-04-18,22000\r
2018-04-21,26900\r
2018-04-26,28900\r
2018-05-06,22300\r
2018-05-11,25000\r
2018-05-21,28600\r
2018-06-02,20400\r
2018-06-20,27200\r
2018-06-25,21900\r
2018-06-27,28300\r
2018-07-07,26200\r
2018-07-12,28400\r
2018-07-25,19700\r
2018-07-27,25300\r
2018-08-01,26100\r
2018-08-11,26900\r
2018-08-16,27300\r
2018-08-19,26400\r
2018-08-21,26700\r
2018-08-26,23700\r
2018-09-08,24800\r
2018-09-10,24300\r
2018-09-18,24200\r
2018-09-20,25600\r
2018-09-23,25500\r
2018-09-25,23700\r
2018-09-28,23300\r
2018-10-05,23800\r
2018-10-18,23400\r
2018-10-20,25900\r
2018-11-22,19900\r
2019-02-05,12600\r
2019-02-12,200\r
2019-02-15,22100\r
2019-02-17,19300\r
2019-02-20,21000\r
2019-02-22,23700\r
2019-02-25,21800\r
2019-02-27,21000\r
2019-03-22,24700\r
2019-03-24,27100\r
2019-03-27,24000\r
2019-03-29,26600\r
2019-04-13,23400\r
2019-05-01,28200\r
2019-05-13,29000\r
2019-05-16,31300\r
2019-05-23,29200\r
2019-05-26,25900\r
2019-05-31,30800\r
2019-06-02,20700\r
2019-06-17,30300\r
2019-06-27,25600\r
2019-06-30,28900\r
2019-07-05,32600\r
2019-07-07,28200\r
2019-07-10,30500\r
2019-07-12,33100\r
2019-07-22,24000\r
2019-07-25,31800\r
2019-08-04,30000\r
2019-08-14,28100\r
2019-08-24,24800\r
2019-08-26,25700\r
2019-08-29,23400\r
2019-08-31,26400\r
2019-09-03,24800\r
2019-09-13,23200\r
2019-09-15,27900\r
2019-09-18,31200\r
2019-09-20,24000\r
2019-10-03,21800\r
2019-10-08,22200\r
2019-10-30,26300\r
2020-02-07,23600\r
2020-02-15,21300\r
2020-02-20,20400\r
2020-03-21,25000\r
2020-03-23,25300\r
2020-03-28,27700\r
2020-03-31,20200\r
2020-04-02,25500\r
2020-04-05,24700\r
2020-04-07,25300\r
2020-04-10,25600\r
2020-04-12,27400\r
2020-04-15,26800\r
2020-05-07,29700\r
2020-05-20,32900\r
2020-05-25,31300\r
2020-05-27,27600\r
2020-05-30,30500\r
2020-06-26,22900\r
2020-07-01,24100\r
2020-07-04,27300\r
2020-07-09,30000\r
2020-07-19,28900\r
2020-07-21,32700\r
2020-07-24,29800\r
2020-07-29,29100\r
2020-07-31,28700\r
2020-08-05,30400\r
2020-08-08,28600\r
2020-08-20,26400\r
2020-08-25,28700\r
2020-09-04,27700\r
2020-09-07,21900\r
2020-09-09,27100\r
2020-09-12,25400\r
2020-09-14,25700\r
2020-09-17,23500\r
2020-11-06,25400\r
2020-11-18,20700\r
2021-02-14,26900\r
2021-02-21,19300\r
2021-02-24,22900\r
2021-02-26,27200\r
2021-03-01,17100\r
2021-03-23,24000\r
2021-03-28,24900\r
2021-03-31,25000\r
2021-04-02,27700\r
2021-04-05,22300\r
2021-04-07,21600\r
2021-04-27,27600\r
2021-05-27,20200\r
2021-05-30,23100\r
2021-06-11,24900\r
2021-06-14,30300\r
2021-06-16,26100\r
2021-06-26,18300\r
2021-07-11,23600\r
2021-07-19,27800\r
2021-07-21,23300\r
2021-07-29,26900\r
2021-08-10,21600\r
2021-08-20,21400\r
2021-09-07,25700\r
2021-09-12,25500\r
2021-09-24,27500\r
2021-10-14,23800\r
2021-10-19,23100\r
2021-10-24,21800\r
2021-10-27,22300\r
2022-01-25,24000\r
2022-01-27,24400\r
2022-02-09,23900\r
2022-02-26,20200\r
2022-03-06,17100\r
2022-03-08,26100\r
2022-03-26,24500\r
2022-04-15,25500\r
2022-04-17,28200\r
2022-04-22,28400\r
2022-04-27,22600\r
2022-05-02,21700\r
2022-05-07,13600\r
2022-05-17,31500\r
2022-05-30,31200\r
2022-06-06,24500\r
2022-06-11,30500\r
2022-06-16,27100\r
2022-06-19,26000\r
2022-06-21,29300\r
2022-06-29,30800\r
2022-07-06,27400\r
2022-07-11,29000\r
2022-07-14,24300\r
2022-07-16,28300\r
2022-07-19,28700\r
2022-07-21,26400\r
2022-07-24,26200\r
2022-07-31,28000\r
2022-08-03,27400\r
2022-08-08,26800\r
2022-08-10,29100\r
2022-08-13,25800\r
2022-08-25,26100\r
2022-08-28,24600\r
2022-09-04,25200\r
2022-09-12,21900\r
2022-09-19,25000\r
2022-09-22,21100\r
2022-10-04,22400\r
2022-10-09,21100\r
2022-10-22,19400\r
2022-11-11,18700\r
2023-02-11,24000\r
2023-02-14,23200\r
2023-02-16,23700\r
2023-04-05,21800\r
2023-05-27,22700\r
2023-06-06,21500\r
2023-06-14,29700\r
2023-06-16,28700\r
2023-06-19,23400\r
2023-06-24,28900\r
2023-07-11,29600\r
2023-07-14,23800\r
2023-07-19,24000\r
2023-07-31,24900\r
2023-08-08,25600\r
2023-08-15,26200\r
2023-08-23,30000\r
`;export{r as default};
