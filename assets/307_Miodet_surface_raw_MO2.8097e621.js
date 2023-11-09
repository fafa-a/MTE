const r=`date,value\r
2017-02-25,28000\r
2017-03-17,22800\r
2017-03-27,29600\r
2017-04-03,32000\r
2017-04-16,26200\r
2017-04-23,31700\r
2017-05-03,28200\r
2017-05-16,31400\r
2017-05-23,31500\r
2017-05-26,27200\r
2017-06-02,21100\r
2017-06-05,21500\r
2017-06-12,21000\r
2017-06-15,21700\r
2017-06-22,21200\r
2017-06-25,21600\r
2017-07-02,19700\r
2017-07-05,24900\r
2017-07-07,24200\r
2017-07-12,24200\r
2017-07-17,23300\r
2017-08-14,21200\r
2017-08-19,21200\r
2017-08-21,26500\r
2017-08-24,26500\r
2017-08-26,28000\r
2017-08-29,26000\r
2017-09-03,28100\r
2017-10-05,22000\r
2017-10-10,22000\r
2017-10-13,23500\r
2017-10-15,23400\r
2017-10-18,23900\r
2017-10-25,23600\r
2017-11-17,23400\r
2017-11-19,23400\r
2017-11-22,22900\r
2017-11-27,23200\r
2018-01-28,29500\r
2018-01-31,29500\r
2018-02-27,16000\r
2018-03-14,22200\r
2018-03-19,24200\r
2018-03-22,24200\r
2018-04-18,22600\r
2018-04-21,26700\r
2018-04-23,26700\r
2018-04-26,26600\r
2018-05-01,30800\r
2018-05-06,29000\r
2018-05-08,28700\r
2018-05-11,24900\r
2018-05-18,27800\r
2018-05-21,29000\r
2018-06-02,20400\r
2018-06-07,20400\r
2018-06-12,20400\r
2018-06-20,27200\r
2018-06-22,27200\r
2018-06-25,29500\r
2018-06-27,26400\r
2018-07-02,27000\r
2018-07-07,27400\r
2018-07-10,29100\r
2018-07-12,28800\r
2018-07-15,28800\r
2018-07-17,28800\r
2018-07-20,28500\r
2018-07-22,28400\r
2018-07-25,19700\r
2018-07-27,26000\r
2018-07-30,26000\r
2018-08-01,24400\r
2018-08-04,26100\r
2018-08-06,26400\r
2018-08-11,26800\r
2018-08-16,29400\r
2018-08-19,27000\r
2018-08-21,28100\r
2018-08-26,27800\r
2018-09-03,28500\r
2018-09-05,28500\r
2018-09-08,27400\r
2018-09-10,25200\r
2018-09-13,25400\r
2018-09-18,25100\r
2018-09-20,25100\r
2018-09-23,25500\r
2018-09-25,27000\r
2018-09-28,23900\r
2018-10-05,23800\r
2018-10-18,23400\r
2018-10-20,26900\r
2018-10-23,26900\r
2018-10-25,26900\r
2018-10-30,25900\r
2018-11-09,3000\r
2018-11-12,3000\r
2018-11-14,8000\r
2018-11-22,21200\r
2018-11-24,21200\r
2018-11-27,19900\r
2019-02-05,12600\r
2019-02-10,12600\r
2019-02-12,12600\r
2019-02-15,12400\r
2019-02-17,17800\r
2019-02-20,17500\r
2019-02-22,20300\r
2019-02-25,21700\r
2019-02-27,20500\r
2019-03-04,21500\r
2019-03-07,22900\r
2019-03-22,24700\r
2019-03-24,28100\r
2019-03-27,25500\r
2019-03-29,27500\r
2019-04-01,27500\r
2019-04-08,26900\r
2019-04-13,28500\r
2019-04-18,23400\r
2019-05-01,28200\r
2019-05-13,30300\r
2019-05-16,29000\r
2019-05-23,28700\r
2019-05-26,29500\r
2019-05-31,30100\r
2019-06-02,29300\r
2019-06-05,29300\r
2019-06-12,30900\r
2019-06-17,30300\r
2019-06-27,30500\r
2019-06-30,27100\r
2019-07-02,27100\r
2019-07-05,29800\r
2019-07-07,31200\r
2019-07-10,29800\r
2019-07-12,31300\r
2019-07-15,31300\r
2019-07-17,33000\r
2019-07-20,33000\r
2019-07-22,31300\r
2019-07-25,33500\r
2019-08-01,33200\r
2019-08-04,30400\r
2019-08-06,30400\r
2019-08-09,32600\r
2019-08-11,30000\r
2019-08-14,30100\r
2019-08-16,30100\r
2019-08-24,28100\r
2019-08-26,27000\r
2019-08-29,27600\r
2019-08-31,26900\r
2019-09-03,23900\r
2019-09-13,25000\r
2019-09-15,26800\r
2019-09-18,28200\r
2019-09-20,28200\r
2019-09-30,28200\r
2019-10-03,24900\r
2019-10-08,24300\r
2019-10-13,24300\r
2019-10-30,26300\r
2019-11-04,26300\r
2020-02-07,23600\r
2020-02-12,23600\r
2020-02-15,24900\r
2020-02-20,21300\r
2020-02-22,21300\r
2020-03-21,30800\r
2020-03-23,26100\r
2020-03-26,26100\r
2020-03-28,27500\r
2020-03-31,27000\r
2020-04-02,24400\r
2020-04-05,25800\r
2020-04-07,26000\r
2020-04-10,26200\r
2020-04-12,25300\r
2020-04-15,25000\r
2020-04-27,31700\r
2020-05-07,29700\r
2020-05-17,29700\r
2020-05-20,36200\r
2020-05-22,36200\r
2020-05-25,34100\r
2020-05-27,31000\r
2020-05-30,32300\r
2020-06-01,32300\r
2020-06-14,31400\r
2020-06-26,27100\r
2020-06-29,27100\r
2020-07-01,24000\r
2020-07-04,26300\r
2020-07-06,26300\r
2020-07-09,29700\r
2020-07-11,29700\r
2020-07-14,27900\r
2020-07-19,28700\r
2020-07-21,30500\r
2020-07-24,32300\r
2020-07-26,30900\r
2020-07-29,32000\r
2020-07-31,30200\r
2020-08-05,30100\r
2020-08-08,30300\r
2020-08-10,28600\r
2020-08-15,30100\r
2020-08-18,27700\r
2020-08-20,29100\r
2020-08-25,26100\r
2020-09-02,29400\r
2020-09-04,27300\r
2020-09-07,26900\r
2020-09-09,28500\r
2020-09-12,27300\r
2020-09-14,25800\r
2020-09-17,25900\r
2020-11-06,25400\r
2020-11-11,25400\r
2020-11-18,24200\r
2020-11-21,24200\r
2020-11-23,21200\r
2020-11-26,20400\r
2020-11-28,20700\r
2021-02-14,26900\r
2021-02-21,27500\r
2021-02-24,23500\r
2021-02-26,22700\r
2021-03-01,23000\r
2021-03-06,22700\r
2021-03-23,24000\r
2021-03-28,27000\r
2021-03-31,24900\r
2021-04-02,27600\r
2021-04-05,26700\r
2021-04-07,24700\r
2021-04-12,25100\r
2021-04-15,25700\r
2021-04-17,21600\r
2021-04-27,27600\r
2021-05-05,27600\r
2021-05-27,21400\r
2021-05-30,19400\r
2021-06-01,19400\r
2021-06-09,23100\r
2021-06-11,24900\r
2021-06-14,30800\r
2021-06-16,26900\r
2021-06-26,26700\r
2021-07-11,23600\r
2021-07-19,29800\r
2021-07-21,25000\r
2021-07-29,24700\r
2021-08-05,26900\r
2021-08-08,26900\r
2021-08-10,21600\r
2021-08-13,21600\r
2021-08-15,21600\r
2021-08-20,23800\r
2021-08-25,21800\r
2021-08-28,21400\r
2021-09-07,25700\r
2021-09-12,27400\r
2021-09-22,25500\r
2021-09-24,27500\r
2021-10-14,23800\r
2021-10-17,23800\r
2021-10-19,25700\r
2021-10-22,25700\r
2021-10-24,23900\r
2021-10-27,22900\r
2022-01-25,24000\r
2022-01-27,27500\r
2022-02-09,23900\r
2022-02-11,23900\r
2022-02-19,26400\r
2022-02-26,22300\r
2022-03-01,22300\r
2022-03-06,22700\r
2022-03-08,21600\r
2022-03-26,24500\r
2022-04-15,25500\r
2022-04-17,29200\r
2022-04-22,27100\r
2022-04-27,26000\r
2022-04-30,29000\r
2022-05-02,24800\r
2022-05-07,21400\r
2022-05-12,23700\r
2022-05-15,13600\r
2022-05-17,31600\r
2022-05-25,31500\r
2022-05-27,31500\r
2022-05-30,31200\r
2022-06-01,31200\r
2022-06-04,31400\r
2022-06-06,30600\r
2022-06-11,29600\r
2022-06-16,27600\r
2022-06-19,28100\r
2022-06-21,29500\r
2022-06-29,28800\r
2022-07-01,33100\r
2022-07-06,29700\r
2022-07-11,29600\r
2022-07-14,27600\r
2022-07-16,28700\r
2022-07-19,29000\r
2022-07-21,28000\r
2022-07-24,26700\r
2022-07-26,28500\r
2022-07-31,26700\r
2022-08-03,26600\r
2022-08-05,31200\r
2022-08-08,26900\r
2022-08-10,29200\r
2022-08-13,29100\r
2022-08-25,26100\r
2022-08-28,26500\r
2022-08-30,26500\r
2022-09-02,26500\r
2022-09-04,25700\r
2022-09-09,25200\r
2022-09-12,25500\r
2022-09-14,25500\r
2022-09-19,25700\r
2022-09-22,22200\r
2022-10-02,21100\r
2022-10-04,22400\r
2022-10-07,22400\r
2022-10-09,23700\r
2022-10-12,23700\r
2022-10-22,19400\r
2022-11-11,18700\r
2022-11-13,18700\r
2023-02-11,24000\r
2023-02-14,25200\r
2023-02-16,23700\r
2023-02-21,23700\r
2023-02-26,23700\r
2023-04-05,21800\r
2023-04-07,21800\r
2023-05-27,22700\r
2023-05-30,22700\r
2023-06-01,23800\r
2023-06-04,23800\r
2023-06-06,26100\r
2023-06-11,27600\r
2023-06-14,27600\r
2023-06-16,28400\r
2023-06-19,29600\r
2023-06-24,30500\r
2023-06-26,27000\r
2023-07-11,30000\r
2023-07-14,29100\r
2023-07-16,29100\r
2023-07-19,26000\r
2023-07-26,24000\r
2023-07-31,24900\r
2023-08-08,28300\r
2023-08-15,28100\r
2023-08-23,30400\r
2023-08-25,30400\r
2023-09-04,29700\r
2023-09-07,29700\r
2023-09-12,24100\r
2023-09-14,24400\r
2023-09-17,23000\r
2023-09-19,23300\r
2023-10-02,24600\r
2023-10-04,24600\r
2023-10-07,25200\r
2023-10-09,24900\r
2023-10-12,23200\r
`;export{r as default};
