const r=`date,value\r
2017-01-26,25400\r
2017-02-25,22500\r
2017-03-07,22700\r
2017-03-17,25100\r
2017-03-27,25100\r
2017-04-03,22700\r
2017-04-06,22700\r
2017-04-23,25500\r
2017-05-03,25500\r
2017-05-16,27500\r
2017-05-23,27500\r
2017-05-26,27900\r
2017-06-02,27100\r
2017-06-05,26400\r
2017-06-12,27500\r
2017-06-22,27900\r
2017-06-25,31200\r
2017-07-02,31000\r
2017-07-05,28500\r
2017-07-07,27500\r
2017-07-10,27500\r
2017-07-12,27500\r
2017-07-17,27100\r
2017-07-22,26800\r
2017-07-27,26800\r
2017-08-14,26700\r
2017-08-19,26700\r
2017-08-21,27600\r
2017-08-24,26100\r
2017-08-26,25600\r
2017-08-29,26400\r
2017-09-03,24900\r
2017-09-05,23700\r
2017-09-08,26900\r
2017-09-10,24700\r
2017-09-13,24700\r
2017-09-20,26800\r
2017-09-23,29000\r
2017-09-28,29000\r
2017-10-03,26900\r
2017-10-05,25300\r
2017-10-08,28400\r
2017-10-10,28400\r
2017-10-13,25200\r
2017-10-15,25500\r
2017-10-18,25000\r
2017-10-25,24100\r
2017-10-28,23500\r
2017-10-30,25700\r
2017-11-07,24600\r
2017-11-14,25000\r
2017-11-17,26000\r
2017-11-19,26700\r
2017-11-22,26700\r
2017-11-24,27300\r
2017-11-27,28400\r
2017-11-29,24000\r
2017-12-09,24600\r
2017-12-14,27100\r
2017-12-19,26500\r
2017-12-24,27500\r
2017-12-27,27100\r
2018-02-25,25700\r
2018-02-27,25700\r
2018-03-02,25700\r
2018-03-14,24100\r
2018-03-19,24100\r
2018-03-22,27300\r
2018-04-01,25700\r
2018-04-18,26100\r
2018-04-21,28100\r
2018-04-23,28100\r
2018-04-26,26100\r
2018-05-06,25500\r
2018-05-11,27600\r
2018-05-18,27600\r
2018-05-21,27600\r
2018-06-20,27300\r
2018-06-22,27300\r
2018-06-25,25000\r
2018-06-27,25000\r
2018-07-02,24100\r
2018-07-07,25800\r
2018-07-10,25200\r
2018-07-12,26300\r
2018-07-15,24800\r
2018-07-17,24800\r
2018-07-20,27400\r
2018-07-22,29300\r
2018-07-25,24900\r
2018-07-27,26600\r
2018-07-30,27700\r
2018-08-01,24600\r
2018-08-04,24900\r
2018-08-06,26100\r
2018-08-11,23700\r
2018-08-16,23500\r
2018-08-19,26500\r
2018-08-21,24600\r
2018-08-26,26400\r
2018-08-31,24500\r
2018-09-03,27300\r
2018-09-08,29800\r
2018-09-10,26500\r
2018-09-13,26500\r
2018-09-20,27500\r
2018-09-23,28000\r
2018-09-25,25300\r
2018-09-28,25900\r
2018-09-30,25200\r
2018-10-03,26400\r
2018-10-05,26400\r
2018-10-23,25400\r
2018-10-25,25400\r
2018-10-30,26000\r
2018-11-12,26900\r
2018-11-17,29900\r
2018-11-19,29900\r
2018-11-22,29900\r
2018-11-24,28200\r
2018-11-27,28200\r
2018-11-29,29200\r
2018-12-19,26300\r
2018-12-27,27000\r
2018-12-29,27000\r
2019-01-03,26100\r
2019-01-11,26100\r
2019-01-16,29800\r
2019-01-23,26700\r
2019-01-28,26700\r
2019-02-12,26100\r
2019-02-15,26300\r
2019-02-17,25000\r
2019-02-20,26100\r
2019-02-22,24000\r
2019-02-25,25500\r
2019-02-27,24300\r
2019-03-12,23000\r
2019-03-22,21900\r
2019-03-24,21100\r
2019-03-27,22400\r
2019-03-29,22900\r
2019-04-01,22400\r
2019-04-08,24000\r
2019-04-13,22400\r
2019-05-01,23900\r
2019-05-06,23900\r
2019-05-11,28800\r
2019-05-13,24900\r
2019-05-16,24900\r
2019-05-23,24100\r
2019-05-31,25700\r
2019-06-02,23700\r
2019-06-12,25200\r
2019-06-17,21900\r
2019-06-22,21900\r
2019-06-25,21900\r
2019-06-27,22000\r
2019-06-30,21800\r
2019-07-02,21800\r
2019-07-05,23600\r
2019-07-07,23600\r
2019-07-10,26500\r
2019-07-12,23400\r
2019-07-15,23300\r
2019-07-17,24100\r
2019-07-22,23500\r
2019-07-25,23300\r
2019-08-01,24700\r
2019-08-04,22800\r
2019-08-09,21600\r
2019-08-11,24700\r
2019-08-14,22500\r
2019-08-16,22500\r
2019-08-21,28200\r
2019-08-24,24600\r
2019-08-26,26000\r
2019-08-29,26000\r
2019-08-31,24500\r
2019-09-03,24500\r
2019-09-05,24500\r
2019-09-13,25800\r
2019-09-15,25600\r
2019-09-18,24600\r
2019-09-20,25300\r
2019-10-05,25000\r
2019-10-08,23100\r
2019-10-13,26400\r
2019-10-25,25700\r
2019-10-30,24200\r
2019-11-04,24200\r
2019-11-09,24200\r
2020-01-01,29100\r
2020-01-06,29400\r
2020-01-11,27700\r
2020-01-16,27700\r
2020-01-18,26800\r
2020-02-05,24600\r
2020-02-07,24600\r
2020-02-15,25100\r
2020-02-20,22700\r
2020-02-22,22400\r
2020-03-01,22400\r
2020-03-08,21900\r
2020-03-13,26300\r
2020-03-18,26600\r
2020-03-21,24700\r
2020-03-28,25100\r
2020-03-31,23900\r
2020-04-05,24000\r
2020-04-07,21500\r
2020-04-10,23800\r
2020-04-12,23800\r
2020-04-15,23300\r
2020-04-25,25400\r
2020-05-17,24500\r
2020-05-20,28000\r
2020-05-22,24900\r
2020-05-25,26900\r
2020-05-27,24900\r
2020-05-30,24900\r
2020-06-19,23700\r
2020-06-21,24300\r
2020-06-24,24300\r
2020-06-26,24300\r
2020-07-01,24300\r
2020-07-04,22900\r
2020-07-09,26200\r
2020-07-11,26200\r
2020-07-14,26200\r
2020-07-19,21500\r
2020-07-21,20500\r
2020-07-24,22000\r
2020-07-26,21600\r
2020-07-29,23400\r
2020-07-31,21700\r
2020-08-03,21700\r
2020-08-05,20500\r
2020-08-08,22900\r
2020-08-10,23000\r
2020-08-15,23100\r
2020-08-20,24000\r
2020-08-23,24000\r
2020-08-25,23000\r
2020-09-02,22300\r
2020-09-04,22400\r
2020-09-07,23000\r
2020-09-12,22500\r
2020-09-14,22000\r
2020-09-17,22700\r
2020-09-19,23300\r
2020-11-08,22100\r
2020-11-11,23500\r
2020-11-18,21700\r
2020-11-21,21700\r
2020-11-23,22000\r
2020-11-26,21200\r
2021-02-06,29500\r
2021-02-11,29500\r
2021-02-14,32200\r
2021-02-19,29600\r
2021-02-24,26800\r
2021-03-01,24100\r
2021-03-23,23300\r
2021-03-26,23300\r
2021-03-28,24500\r
2021-03-31,23900\r
2021-04-02,24700\r
2021-04-05,24700\r
2021-04-07,24700\r
2021-04-15,25700\r
2021-04-17,25800\r
2021-04-20,24500\r
2021-04-22,25200\r
2021-05-27,26500\r
2021-05-30,26900\r
2021-06-09,24500\r
2021-06-11,23300\r
2021-06-14,25600\r
2021-06-16,25600\r
2021-06-19,25600\r
2021-06-21,25500\r
2021-06-26,22000\r
2021-07-01,22200\r
2021-07-19,22400\r
2021-07-21,22400\r
2021-07-26,22400\r
2021-07-29,23900\r
2021-08-05,23500\r
2021-08-10,23500\r
2021-08-13,23500\r
2021-08-18,23500\r
2021-08-20,24100\r
2021-08-23,24100\r
2021-08-25,23900\r
2021-08-28,23600\r
2021-08-30,23300\r
2021-09-04,23400\r
2021-09-07,23200\r
2021-09-12,26000\r
2021-09-14,22500\r
2021-09-17,21600\r
2021-09-22,23600\r
2021-09-24,23200\r
2021-09-29,24600\r
2021-10-14,23800\r
2021-10-17,23800\r
2021-10-24,24100\r
2021-10-27,24800\r
2021-12-16,25500\r
2021-12-18,26600\r
2021-12-21,24300\r
2021-12-23,25300\r
2022-01-02,22400\r
2022-01-05,26600\r
2022-01-12,26600\r
2022-01-15,27600\r
2022-01-17,27500\r
2022-01-22,27700\r
2022-01-25,26200\r
2022-01-27,27100\r
2022-01-30,27100\r
2022-02-01,27100\r
2022-02-09,24900\r
2022-02-26,20500\r
2022-03-01,21400\r
2022-03-03,21400\r
2022-03-08,20300\r
2022-03-23,23200\r
2022-03-26,24700\r
2022-04-05,24600\r
2022-04-10,24600\r
2022-04-15,24600\r
2022-04-17,23700\r
2022-04-27,21900\r
2022-05-07,23200\r
2022-05-12,23200\r
2022-05-15,23200\r
2022-05-17,24300\r
2022-05-20,23900\r
2022-05-22,23900\r
2022-05-27,23900\r
2022-06-01,22400\r
2022-06-04,22400\r
2022-06-06,22700\r
2022-06-11,23800\r
2022-06-14,21100\r
2022-06-16,21600\r
2022-06-19,22100\r
2022-06-29,23400\r
2022-07-01,22900\r
2022-07-04,22900\r
2022-07-06,22700\r
2022-07-11,23400\r
2022-07-14,22600\r
2022-07-16,23100\r
2022-07-19,23300\r
2022-07-21,23100\r
2022-07-24,23500\r
2022-07-26,23600\r
2022-07-29,23900\r
2022-07-31,23800\r
2022-08-03,23400\r
2022-08-05,23800\r
2022-08-08,23500\r
2022-08-10,23600\r
2022-08-13,23300\r
2022-08-15,24100\r
2022-08-20,24100\r
2022-08-23,22500\r
2022-08-28,25800\r
2022-08-30,26000\r
2022-09-02,26000\r
2022-09-04,25700\r
2022-09-12,25700\r
2022-09-19,24900\r
2022-09-22,24000\r
2022-10-02,24600\r
2022-10-04,23800\r
2022-10-07,23800\r
2022-10-09,24200\r
2022-10-12,24200\r
2022-10-22,23300\r
2022-10-24,23500\r
2022-10-27,23500\r
2022-11-01,23500\r
2022-11-06,26600\r
2022-11-11,22700\r
2022-11-13,22700\r
2022-11-16,24100\r
2022-12-06,24200\r
2022-12-26,23800\r
2022-12-28,24000\r
2023-01-10,24800\r
2023-01-12,24800\r
2023-01-20,24800\r
2023-02-06,22700\r
2023-02-09,24400\r
2023-02-11,23700\r
2023-02-14,24100\r
2023-02-16,23600\r
2023-02-19,23700\r
2023-02-21,23400\r
2023-02-26,23000\r
2023-03-01,23800\r
2023-03-03,22200\r
2023-03-16,25100\r
2023-03-28,23600\r
2023-04-05,24800\r
2023-04-07,23700\r
2023-04-15,26200\r
2023-04-17,25100\r
2023-04-20,24900\r
`;export{r as default};
