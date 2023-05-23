const r=`date,value\r
2017-01-03,16200\r
2017-01-13,16200\r
2017-02-09,16800\r
2017-02-12,16800\r
2017-02-19,25500\r
2017-02-22,24800\r
2017-03-14,29200\r
2017-04-10,28400\r
2017-04-20,26600\r
2017-04-23,29700\r
2017-04-30,27300\r
2017-05-10,29200\r
2017-05-13,27200\r
2017-06-19,25200\r
2017-06-22,26100\r
2017-07-02,28600\r
2017-07-04,25600\r
2017-07-07,30600\r
2017-07-09,30600\r
2017-07-12,30600\r
2017-07-17,30300\r
2017-07-19,28500\r
2017-07-22,28500\r
2017-07-29,28500\r
2017-08-03,26900\r
2017-08-13,26900\r
2017-08-18,24400\r
2017-08-21,28800\r
2017-08-23,28800\r
2017-08-26,26600\r
2017-09-05,29300\r
2017-09-10,29100\r
2017-09-15,29100\r
2017-09-20,29100\r
2017-09-27,27100\r
2017-10-05,32800\r
2017-10-07,25300\r
2017-10-10,30500\r
2017-10-12,30500\r
2017-10-15,23500\r
2017-10-17,25900\r
2017-10-22,22600\r
2017-10-25,23300\r
2017-10-30,24800\r
2017-11-01,24800\r
2017-11-16,24300\r
2017-11-21,26200\r
2017-11-24,26200\r
2017-11-26,28400\r
2017-12-01,28400\r
2017-12-06,7800\r
2017-12-09,7800\r
2018-01-13,23700\r
2018-01-15,23700\r
2018-01-23,23700\r
2018-02-24,25200\r
2018-02-27,27000\r
2018-03-04,25500\r
2018-03-14,29100\r
2018-03-16,29100\r
2018-03-21,29100\r
2018-03-24,29600\r
2018-04-18,30000\r
2018-04-20,32000\r
2018-04-25,32000\r
2018-04-28,31700\r
2018-04-30,30800\r
2018-05-25,30000\r
2018-05-28,30000\r
2018-05-30,31000\r
2018-06-02,31000\r
2018-06-04,31000\r
2018-06-09,29500\r
2018-06-19,26700\r
2018-06-22,30200\r
2018-06-24,27300\r
2018-06-27,30500\r
2018-06-29,30500\r
2018-07-02,31800\r
2018-07-04,31200\r
2018-07-07,32600\r
2018-07-09,31700\r
2018-07-12,29600\r
2018-07-14,29700\r
2018-07-17,29700\r
2018-07-19,29700\r
2018-07-22,29000\r
2018-07-24,23300\r
2018-07-27,23300\r
2018-07-29,25300\r
2018-08-01,24900\r
2018-08-03,24900\r
2018-08-06,26800\r
2018-08-08,26800\r
2018-08-11,26200\r
2018-08-16,26400\r
2018-08-18,26400\r
2018-08-21,24800\r
2018-08-23,24000\r
2018-08-26,24000\r
2018-08-28,22800\r
2018-09-02,23500\r
2018-09-05,18600\r
2018-09-07,18600\r
2018-09-12,19400\r
2018-09-17,22000\r
2018-09-20,22000\r
2018-09-22,22000\r
2018-09-25,23400\r
2018-09-27,20800\r
2018-09-30,21600\r
2018-10-02,21600\r
2018-10-05,20800\r
2018-10-10,20700\r
2018-10-12,19500\r
2018-10-15,19700\r
2018-10-17,18500\r
2018-10-20,19200\r
2018-10-22,18800\r
2018-10-25,18300\r
2018-11-01,15400\r
2018-11-14,24300\r
2018-11-16,26800\r
2018-11-24,25600\r
2018-12-01,28300\r
2019-01-03,19400\r
2019-01-10,19400\r
2019-01-15,6300\r
2019-01-18,6300\r
2019-01-20,7100\r
2019-01-23,7100\r
2019-01-25,100\r
2019-01-28,8700\r
2019-02-02,1700\r
2019-02-04,1700\r
2019-02-14,6100\r
2019-02-17,16700\r
2019-02-19,23400\r
2019-02-22,22600\r
2019-02-24,23900\r
2019-02-27,20700\r
2019-03-16,23500\r
2019-03-19,23500\r
2019-03-21,24700\r
2019-03-24,18500\r
2019-03-26,23800\r
2019-03-29,19800\r
2019-03-31,20500\r
2019-04-05,19900\r
2019-04-08,21100\r
2019-04-10,20400\r
2019-04-13,21300\r
2019-04-15,22000\r
2019-04-18,24000\r
2019-04-20,24000\r
2019-04-25,24000\r
2019-04-30,23900\r
2019-05-10,27900\r
2019-05-13,31100\r
2019-05-15,27900\r
2019-05-23,28900\r
2019-05-25,28900\r
2019-05-30,31000\r
2019-06-02,30100\r
2019-06-04,28800\r
2019-06-07,29600\r
2019-06-12,28500\r
2019-06-17,31600\r
2019-06-19,31700\r
2019-06-22,31700\r
2019-06-24,27500\r
2019-06-27,30000\r
2019-06-29,26400\r
2019-07-02,26400\r
2019-07-04,26400\r
2019-07-07,29200\r
2019-07-09,26000\r
2019-07-12,30100\r
2019-07-14,26200\r
2019-07-17,28300\r
2019-07-19,28300\r
2019-07-22,28300\r
2019-07-24,24400\r
2019-07-29,26900\r
2019-08-01,26900\r
2019-08-03,20300\r
2019-08-23,21200\r
2019-08-26,24400\r
2019-08-28,24000\r
2019-08-31,24200\r
2019-09-07,24600\r
2019-09-12,25100\r
2019-09-15,24900\r
2019-09-17,23500\r
2019-09-20,23700\r
2019-09-22,24100\r
2019-09-27,23700\r
2019-09-30,26100\r
2019-10-07,26000\r
2019-12-04,27700\r
2019-12-06,27800\r
2019-12-14,27800\r
2019-12-19,25200\r
2019-12-21,25500\r
2019-12-26,24100\r
2019-12-29,24100\r
2020-01-05,21400\r
2020-01-08,25000\r
2020-01-15,21400\r
2020-01-18,21400\r
2020-01-20,21900\r
2020-01-23,19800\r
2020-01-25,20800\r
2020-01-30,20800\r
2020-02-07,27700\r
2020-02-09,21300\r
2020-02-14,21600\r
2020-02-22,18500\r
2020-02-24,19500\r
2020-03-03,19500\r
2020-03-08,19500\r
2020-03-18,19000\r
2020-03-23,26900\r
2020-03-25,23000\r
2020-03-28,23000\r
2020-04-02,23400\r
2020-04-04,26800\r
2020-04-07,26800\r
2020-04-09,26700\r
2020-04-12,24900\r
2020-04-14,24300\r
2020-04-17,24300\r
2020-04-22,23900\r
2020-04-24,23900\r
2020-04-27,23900\r
2020-05-04,24100\r
2020-05-07,27300\r
2020-05-17,26900\r
2020-05-19,27500\r
2020-05-24,29200\r
2020-05-27,27700\r
2020-05-29,28500\r
2020-06-01,28500\r
2020-06-11,30200\r
2020-06-23,25100\r
2020-06-28,25100\r
2020-07-01,25100\r
2020-07-08,25200\r
2020-07-13,22000\r
2020-07-18,22000\r
2020-07-21,22000\r
2020-07-23,22000\r
2020-07-31,24400\r
2020-08-05,24400\r
2020-08-07,25900\r
2020-08-10,25000\r
2020-08-12,25100\r
2020-08-15,25100\r
2020-08-20,23200\r
2020-08-25,23200\r
2020-08-27,21300\r
2020-09-04,22500\r
2020-09-09,23000\r
2020-09-11,23000\r
2020-09-14,23300\r
2020-09-16,24200\r
2020-09-19,25700\r
2020-10-19,18900\r
2020-10-24,18900\r
2020-10-31,25000\r
2020-11-05,25500\r
2020-11-10,23800\r
2020-11-13,23900\r
2020-11-15,23900\r
2020-11-18,22800\r
2020-11-23,24100\r
2020-11-25,24100\r
2020-11-28,22600\r
2020-12-10,22400\r
2020-12-13,22400\r
2021-01-24,25300\r
2021-02-21,26700\r
2021-02-23,30600\r
2021-02-26,30600\r
2021-02-28,27100\r
2021-03-10,26800\r
2021-03-23,30300\r
2021-03-25,31200\r
2021-03-28,30100\r
2021-03-30,30900\r
2021-04-02,30300\r
2021-04-04,29700\r
2021-04-07,30600\r
2021-04-09,29200\r
2021-04-14,28700\r
2021-04-17,29300\r
2021-04-19,29300\r
2021-04-22,29100\r
2021-04-24,30900\r
2021-04-27,27100\r
2021-05-29,28400\r
2021-06-01,29900\r
2021-06-03,29900\r
2021-06-13,24500\r
2021-06-16,30000\r
2021-06-18,30000\r
2021-06-21,30000\r
2021-06-23,30000\r
2021-06-26,29700\r
2021-07-18,28800\r
2021-07-21,31300\r
2021-07-23,31300\r
2021-08-10,29800\r
2021-08-12,29900\r
2021-08-15,29900\r
2021-08-20,29900\r
2021-09-01,23600\r
2021-09-04,23600\r
2021-09-06,23100\r
2021-09-11,23500\r
2021-09-21,22200\r
2021-09-24,23800\r
2021-10-01,22800\r
2021-10-11,24600\r
2021-10-14,26800\r
2021-10-16,23900\r
2021-10-19,25800\r
2021-10-21,25800\r
2021-10-24,26300\r
2021-10-26,24600\r
2021-10-29,24100\r
2021-10-31,25700\r
2021-11-05,21700\r
2021-11-20,19400\r
2021-11-23,20900\r
2021-12-03,20500\r
2021-12-18,23600\r
2021-12-20,23600\r
2021-12-23,23600\r
2022-01-12,1600\r
2022-01-14,22100\r
2022-01-17,21300\r
2022-01-19,21300\r
2022-01-22,21700\r
2022-01-24,21100\r
2022-01-27,19200\r
2022-01-29,16300\r
2022-02-08,23900\r
2022-02-11,24900\r
2022-02-13,28400\r
2022-02-18,27700\r
2022-02-23,28600\r
2022-02-26,29700\r
2022-02-28,27300\r
2022-03-03,26300\r
2022-03-05,26000\r
2022-03-08,25700\r
2022-03-10,25700\r
2022-03-20,25600\r
2022-03-23,29700\r
2022-03-25,30000\r
2022-03-28,29900\r
2022-04-04,30900\r
2022-04-17,26900\r
2022-04-19,26900\r
2022-04-22,26900\r
2022-04-27,31200\r
2022-05-02,31200\r
2022-05-07,31200\r
2022-05-14,26700\r
2022-05-27,24700\r
2022-05-29,24700\r
2022-06-11,30100\r
2022-06-13,30400\r
2022-06-16,26300\r
2022-06-18,26300\r
2022-06-21,26300\r
2022-06-23,24800\r
2022-06-26,25800\r
2022-06-28,23200\r
2022-07-03,23600\r
2022-07-06,26600\r
2022-07-08,24000\r
2022-07-11,25600\r
2022-07-13,23700\r
2022-07-16,24300\r
2022-07-18,23700\r
2022-07-21,24000\r
2022-07-26,24600\r
2022-07-28,21300\r
2022-07-31,25100\r
2022-08-02,20500\r
2022-08-05,20100\r
2022-08-07,20800\r
2022-08-10,22100\r
2022-08-12,20300\r
2022-08-22,21700\r
2022-08-25,26500\r
2022-08-27,26500\r
2022-09-01,26500\r
2022-09-04,26400\r
2022-09-11,23000\r
2022-09-19,28800\r
2022-09-21,24400\r
2022-10-09,27100\r
2022-10-11,27100\r
2022-10-16,27100\r
2022-10-19,27100\r
2022-10-26,20300\r
2022-10-31,20500\r
2022-11-05,20500\r
2022-11-08,27400\r
2022-11-10,24100\r
2022-11-20,26100\r
2022-12-08,23100\r
2022-12-28,27900\r
2023-01-07,28300\r
2023-01-24,23500\r
2023-01-29,23500\r
2023-02-01,23500\r
2023-02-03,23500\r
2023-02-08,24300\r
2023-02-11,25500\r
2023-02-13,23300\r
2023-02-16,24800\r
2023-02-18,24800\r
2023-02-21,24300\r
2023-03-05,25100\r
2023-03-15,25100\r
2023-04-09,27200\r
2023-04-14,27200\r
2023-04-19,27200\r
`;export{r as default};
