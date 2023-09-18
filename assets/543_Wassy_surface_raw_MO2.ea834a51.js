const r=`date,value\r
2017-04-03,25900\r
2017-04-06,25900\r
2017-04-10,25800\r
2017-04-23,27900\r
2017-04-30,27900\r
2017-06-12,26200\r
2017-06-15,26200\r
2017-06-19,26200\r
2017-06-22,26200\r
2017-07-22,29600\r
2017-07-25,29600\r
2017-07-29,29600\r
2017-10-15,28400\r
2017-10-17,28400\r
2017-10-18,28800\r
2017-10-20,28800\r
2017-10-25,28800\r
2017-10-30,27600\r
2017-11-01,27600\r
2017-11-04,30100\r
2017-11-07,30100\r
2018-01-13,31200\r
2018-01-16,31200\r
2018-01-18,30600\r
2018-01-21,31200\r
2018-02-22,28400\r
2018-02-24,28400\r
2018-02-25,28400\r
2018-02-27,28400\r
2018-03-24,31400\r
2018-04-08,26300\r
2018-04-11,26300\r
2018-04-13,27200\r
2018-04-18,26800\r
2018-04-20,28800\r
2018-04-21,28800\r
2018-04-25,28400\r
2018-05-08,28500\r
2018-05-11,28500\r
2018-05-18,28500\r
2018-06-27,28600\r
2018-07-02,29200\r
2018-07-04,29200\r
2018-07-07,29200\r
2018-07-17,28900\r
2018-07-19,28900\r
2018-07-20,28900\r
2018-07-24,28900\r
2018-07-25,28900\r
2018-07-27,28900\r
2018-07-29,27800\r
2018-07-30,27800\r
2018-08-03,27800\r
2018-08-04,27800\r
2018-08-06,28600\r
2018-08-11,27700\r
2018-08-16,27700\r
2018-09-20,26200\r
2018-09-22,26200\r
2018-09-25,30000\r
2018-09-27,30000\r
2018-09-28,30000\r
2018-09-30,27000\r
2018-10-05,28400\r
2018-10-10,27400\r
2018-10-13,31400\r
2018-10-15,31400\r
2018-10-17,27800\r
2018-10-18,27800\r
2018-10-20,28100\r
2018-10-22,26200\r
2018-11-04,22500\r
2018-11-11,22500\r
2018-11-14,25600\r
2018-11-17,25500\r
2018-11-19,25500\r
2018-11-22,25500\r
2018-12-19,26800\r
2019-02-17,25800\r
2019-02-20,25800\r
2019-02-22,25800\r
2019-02-24,25800\r
2019-02-25,25800\r
2019-02-27,26200\r
2019-03-19,21800\r
2019-03-21,21800\r
2019-03-22,24400\r
2019-03-24,21500\r
2019-03-29,21500\r
2019-03-31,21500\r
2019-04-01,21500\r
2019-04-11,19300\r
2019-05-13,25000\r
2019-05-15,25000\r
2019-05-16,25000\r
2019-05-23,25000\r
2019-05-25,25000\r
2019-05-26,25000\r
2019-06-02,23800\r
2019-06-04,23800\r
2019-06-05,23800\r
2019-06-27,21900\r
2019-06-29,21900\r
2019-06-30,21900\r
2019-07-02,26600\r
2019-07-04,26600\r
2019-07-05,26600\r
2019-07-07,26600\r
2019-07-09,26600\r
2019-07-10,26600\r
2019-07-15,26100\r
2019-07-17,27900\r
2019-07-22,25300\r
2019-07-24,25300\r
2019-07-25,25300\r
2019-07-29,25300\r
2019-07-30,25300\r
2019-08-01,26100\r
2019-08-04,22900\r
2019-08-08,22900\r
2019-08-09,22900\r
2019-08-13,22900\r
2019-08-14,22900\r
2019-08-16,22900\r
2019-08-21,25500\r
2019-08-23,25500\r
2019-08-24,25500\r
2019-08-26,25700\r
2019-08-28,25700\r
2019-08-29,25700\r
2019-08-31,23900\r
2019-09-03,23900\r
2019-09-07,24600\r
2019-09-10,24600\r
2019-09-12,23800\r
2019-09-15,26800\r
2019-09-18,24800\r
2019-09-20,26700\r
2019-09-22,26700\r
2019-12-04,24400\r
2019-12-14,24400\r
2019-12-19,30600\r
2019-12-29,32100\r
2020-01-23,31600\r
2020-01-25,31600\r
2020-01-26,32000\r
2020-02-07,30700\r
2020-02-10,30500\r
2020-02-15,29400\r
2020-02-22,28300\r
2020-03-28,20400\r
2020-03-30,20400\r
2020-03-31,20400\r
2020-04-02,23400\r
2020-04-04,23400\r
2020-04-05,23400\r
2020-04-07,21500\r
2020-04-09,21500\r
2020-04-10,21500\r
2020-04-12,21500\r
2020-04-14,25600\r
2020-04-15,25600\r
2020-04-17,24000\r
2020-04-19,24800\r
2020-04-20,24800\r
2020-04-22,23300\r
2020-04-27,23400\r
2020-05-07,23800\r
2020-05-15,24600\r
2020-05-17,24400\r
2020-05-19,24400\r
2020-05-20,24400\r
2020-05-27,23300\r
2020-05-29,23300\r
2020-05-30,23300\r
2020-06-01,22800\r
2020-06-03,26400\r
2020-07-21,15700\r
2020-07-23,15700\r
2020-07-24,15700\r
2020-07-29,15700\r
2020-07-31,25800\r
2020-08-02,25800\r
2020-08-05,23700\r
2020-08-07,25000\r
2020-08-08,25000\r
2020-08-10,25000\r
2020-08-12,25000\r
2020-08-13,25000\r
2020-08-17,23000\r
2020-08-20,25500\r
2020-08-25,25200\r
2020-09-02,25200\r
2020-09-04,25200\r
2020-09-14,25500\r
2020-09-16,25500\r
2020-09-17,25500\r
2020-09-21,25500\r
2020-09-22,25500\r
2020-11-18,29500\r
2020-11-20,29500\r
2020-11-21,29500\r
2020-11-25,29500\r
2020-11-26,29500\r
2020-11-28,30000\r
2020-12-10,25400\r
2020-12-18,25700\r
2021-02-11,25100\r
2021-02-14,25100\r
2021-02-21,27700\r
2021-02-24,27600\r
2021-02-28,27600\r
2021-03-01,27600\r
2021-03-23,29800\r
2021-03-28,30500\r
2021-03-30,30500\r
2021-03-31,30500\r
2021-04-02,27200\r
2021-04-04,28000\r
2021-04-22,24500\r
2021-04-24,24500\r
2021-04-25,24600\r
2021-04-27,24000\r
2021-04-30,24000\r
2021-06-01,27500\r
2021-06-03,27500\r
2021-06-04,27500\r
2021-06-11,27500\r
2021-06-16,25800\r
2021-06-19,25800\r
2021-06-21,25800\r
2021-08-25,26100\r
2021-08-27,26100\r
2021-09-01,26100\r
2021-09-02,26100\r
2021-09-04,29600\r
2021-09-06,29600\r
2021-09-07,29600\r
2021-09-12,29600\r
2021-09-24,29600\r
2021-10-01,29600\r
2021-10-04,29600\r
2021-10-09,29900\r
2021-10-14,32100\r
2021-10-16,32100\r
2021-10-19,31700\r
2021-10-21,34100\r
2021-10-24,30900\r
2021-10-27,34700\r
2021-10-29,29700\r
2021-11-06,27100\r
2021-11-23,31400\r
2021-12-18,31000\r
2021-12-21,31000\r
2022-01-12,32400\r
2022-01-14,32400\r
2022-01-15,32400\r
2022-03-08,29300\r
2022-03-10,29300\r
2022-03-23,29200\r
2022-03-25,29200\r
2022-03-26,29200\r
2022-03-28,30800\r
2022-04-04,30500\r
2022-04-17,26200\r
2022-04-20,26200\r
2022-04-22,27100\r
2022-04-27,26100\r
2022-05-17,25800\r
2022-05-25,25800\r
2022-06-01,27000\r
2022-06-04,27000\r
2022-06-11,29300\r
2022-06-21,30200\r
2022-06-23,26200\r
2022-06-28,26200\r
2022-06-29,26200\r
2022-07-01,28200\r
2022-07-06,30300\r
2022-07-08,30300\r
2022-07-11,30700\r
2022-07-14,30700\r
2022-07-16,28900\r
2022-07-18,29300\r
2022-07-19,29300\r
2022-07-24,28000\r
2022-07-31,27300\r
2022-08-02,27300\r
2022-08-03,27300\r
2022-08-07,27300\r
2022-08-08,27300\r
2022-08-10,27700\r
2022-08-12,27000\r
2022-08-13,27000\r
2022-08-15,28000\r
2022-08-20,28000\r
2022-08-22,25600\r
2022-08-23,25600\r
2022-08-25,25600\r
2022-10-04,26700\r
2022-10-07,26700\r
2022-10-09,29400\r
2022-10-12,29400\r
2022-10-19,26900\r
2023-01-07,28500\r
2023-01-15,28500\r
2023-02-21,27700\r
2023-03-01,27700\r
2023-05-27,28600\r
2023-05-29,28600\r
2023-06-01,29700\r
2023-06-03,29700\r
2023-06-04,29700\r
2023-06-06,26400\r
2023-06-08,28200\r
2023-06-09,28200\r
2023-06-11,26800\r
2023-06-13,28600\r
2023-06-14,28600\r
2023-06-16,28200\r
2023-07-11,29300\r
2023-07-14,29300\r
2023-07-19,29300\r
2023-08-10,27800\r
2023-08-18,27800\r
2023-08-20,29200\r
2023-08-22,29000\r
2023-08-23,29000\r
`;export{r as default};
