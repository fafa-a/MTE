const r=`date,value\r
2017-01-26,17100\r
2017-02-15,18200\r
2017-02-22,18200\r
2017-02-25,21600\r
2017-03-17,20500\r
2017-03-27,20500\r
2017-04-03,5100\r
2017-04-06,5100\r
2017-05-16,22500\r
2017-05-26,24300\r
2017-06-02,24300\r
2017-06-05,24300\r
2017-06-25,25100\r
2017-07-02,25900\r
2017-07-05,26100\r
2017-07-07,26000\r
2017-08-04,24300\r
2017-08-06,24300\r
2017-08-07,24300\r
2017-08-11,24300\r
2017-08-12,24300\r
2017-08-14,25300\r
2017-08-17,25300\r
2017-08-19,26300\r
2017-08-21,26300\r
2017-08-22,26300\r
2017-08-24,24600\r
2017-08-26,25600\r
2017-08-29,23700\r
2017-09-03,25100\r
2017-09-05,22000\r
2017-09-08,22000\r
2017-10-08,20200\r
2017-10-10,20200\r
2017-10-11,20200\r
2017-10-13,22700\r
2017-10-15,22700\r
2017-10-16,22700\r
2017-10-18,19400\r
2017-10-20,21900\r
2017-10-23,21900\r
2017-10-25,17400\r
2017-10-26,17400\r
2017-10-28,17900\r
2017-10-30,17100\r
2017-10-31,17100\r
2017-11-02,17100\r
2017-11-07,17100\r
2017-11-22,15500\r
2017-11-24,15500\r
2017-11-25,15500\r
2017-11-27,16500\r
2017-11-30,16500\r
2017-12-07,15700\r
2018-02-10,16700\r
2018-02-12,16700\r
2018-02-15,16700\r
2018-02-25,17200\r
2018-02-27,17200\r
2018-03-02,19900\r
2018-03-07,19900\r
2018-03-09,19000\r
2018-03-17,7700\r
2018-03-19,7700\r
2018-03-22,20200\r
2018-04-01,20200\r
2018-04-21,24300\r
2018-04-23,24300\r
2018-04-24,24300\r
2018-04-26,24300\r
2018-05-06,18900\r
2018-05-11,24300\r
2018-05-19,24300\r
2018-05-21,24400\r
2018-05-23,22000\r
2018-06-20,24800\r
2018-06-22,24800\r
2018-06-23,24800\r
2018-06-25,26500\r
2018-06-28,26500\r
2018-07-02,26900\r
2018-07-03,26900\r
2018-07-07,25000\r
2018-07-08,25000\r
2018-07-10,25500\r
2018-07-12,23400\r
2018-07-15,24600\r
2018-07-18,24600\r
2018-07-22,22600\r
2018-07-23,22600\r
2018-07-25,23500\r
2018-07-27,23200\r
2018-07-30,24900\r
2018-08-01,24900\r
2018-08-02,24900\r
2018-08-04,23200\r
2018-08-06,25200\r
2018-08-11,20900\r
2018-08-12,20900\r
2018-08-19,23100\r
2018-08-21,23100\r
2018-08-22,23100\r
2018-08-26,23100\r
2018-08-27,23100\r
2018-09-03,20500\r
2018-09-05,20500\r
2018-09-08,23800\r
2018-09-10,23800\r
2018-09-11,23800\r
2018-09-16,22400\r
2018-09-18,22400\r
2018-09-23,20800\r
2018-09-25,20800\r
2018-09-26,20800\r
2018-09-28,23300\r
2018-09-30,23300\r
2018-10-03,20600\r
2018-10-05,23400\r
2018-10-06,23400\r
2018-11-17,16600\r
2018-11-22,18600\r
2018-11-24,18600\r
2018-11-27,18600\r
2018-11-29,15600\r
2019-01-11,16300\r
2019-01-16,19200\r
2019-01-19,19200\r
2019-01-23,19200\r
2019-01-26,19200\r
2019-01-28,18500\r
2019-02-15,20400\r
2019-02-17,20400\r
2019-02-18,20400\r
2019-02-20,20900\r
2019-02-22,20900\r
2019-02-23,20900\r
2019-02-25,19700\r
2019-02-27,19700\r
2019-03-07,21000\r
2019-03-12,20200\r
2019-03-22,19700\r
2019-03-24,19700\r
2019-03-25,19700\r
2019-03-27,20200\r
2019-03-29,20200\r
2019-03-30,20200\r
2019-04-01,20200\r
2019-04-08,18700\r
2019-04-09,18700\r
2019-05-01,22100\r
2019-05-06,22100\r
2019-05-11,22100\r
2019-05-13,22100\r
2019-05-14,22100\r
2019-05-16,22100\r
2019-05-31,19700\r
2019-06-02,19700\r
2019-06-08,19700\r
2019-06-12,19700\r
2019-06-13,19700\r
2019-06-30,23500\r
2019-07-03,23500\r
2019-07-05,27000\r
2019-07-08,27000\r
2019-07-10,25700\r
2019-07-12,25700\r
2019-07-13,25700\r
2019-07-15,26900\r
2019-07-17,26500\r
2019-07-22,27600\r
2019-07-23,27600\r
2019-07-25,26100\r
2019-07-28,27100\r
2019-08-02,25200\r
2019-08-04,25200\r
2019-08-09,24300\r
2019-08-14,23600\r
2019-08-16,23600\r
2019-08-17,23600\r
2019-08-21,25800\r
2019-08-22,25800\r
2019-08-24,23600\r
2019-08-26,23800\r
2019-08-29,23000\r
2019-08-31,24700\r
2019-09-03,23000\r
2019-09-06,23000\r
2019-09-08,23100\r
2019-09-11,21800\r
2019-09-13,22700\r
2019-09-15,23300\r
2019-09-16,23300\r
2019-09-20,22800\r
2019-09-21,22800\r
2019-10-08,18300\r
2019-10-11,18300\r
2019-10-13,21600\r
2019-10-15,21600\r
2019-10-25,20800\r
2019-11-27,14800\r
2019-12-05,14800\r
2019-12-10,14800\r
2020-01-06,16500\r
2020-01-09,16500\r
2020-01-11,16900\r
2020-01-14,16900\r
2020-01-16,15900\r
2020-01-19,15900\r
2020-01-28,15400\r
2020-02-05,17900\r
2020-02-07,17900\r
2020-02-08,17900\r
2020-02-15,17900\r
2020-02-18,17900\r
2020-02-20,17800\r
2020-02-22,19600\r
2020-04-05,17200\r
2020-04-08,17200\r
2020-04-10,24200\r
2020-04-12,24200\r
2020-04-15,22000\r
2020-04-25,24400\r
2020-04-28,27600\r
2020-05-05,27600\r
2020-05-07,27600\r
2020-05-08,27600\r
2020-05-20,24900\r
2020-05-22,24900\r
2020-05-25,25900\r
2020-05-27,25900\r
2020-05-28,25900\r
2020-05-30,23900\r
2020-06-12,24000\r
2020-06-14,25100\r
2020-06-19,22300\r
2020-06-21,22300\r
2020-06-22,22300\r
2020-06-24,23200\r
2020-06-26,23200\r
2020-07-19,26000\r
2020-07-21,26000\r
2020-07-22,26000\r
2020-07-24,26200\r
2020-07-27,26200\r
2020-07-29,24400\r
2020-07-31,24400\r
2020-08-03,24400\r
2020-08-05,24600\r
2020-08-06,24600\r
2020-08-08,24000\r
2020-08-10,27200\r
2020-08-15,27200\r
2020-08-20,27200\r
2020-08-21,27200\r
2020-08-23,27200\r
2020-09-02,24300\r
2020-09-04,24300\r
2020-09-05,24300\r
2020-09-07,24300\r
2020-09-10,24300\r
2020-09-12,24300\r
2020-09-14,24300\r
2020-09-17,23700\r
2020-09-19,25300\r
2020-09-29,24500\r
2020-09-30,24500\r
2021-02-14,18800\r
2021-02-17,18800\r
2021-02-19,19100\r
2021-02-24,19400\r
2021-02-27,21100\r
2021-03-01,19500\r
2021-03-04,21900\r
2021-03-09,19700\r
2021-03-21,20800\r
2021-03-23,20800\r
2021-03-24,20800\r
2021-03-26,20800\r
2021-03-28,20800\r
2021-03-29,20800\r
2021-03-31,21100\r
2021-04-02,20100\r
2021-04-03,20100\r
2021-04-05,24100\r
2021-04-07,24600\r
2021-04-15,25100\r
2021-04-17,24600\r
2021-04-20,26500\r
2021-04-22,26500\r
2021-04-23,26500\r
2021-06-09,26500\r
2021-06-11,26200\r
2021-06-14,27300\r
2021-06-16,27300\r
2021-06-19,27300\r
2021-06-21,27200\r
2021-08-23,23700\r
2021-08-25,23700\r
2021-08-26,23700\r
2021-08-28,23700\r
2021-08-30,23700\r
2021-08-31,23700\r
2021-09-17,19800\r
2021-09-22,22900\r
2021-09-24,22900\r
2021-09-25,22900\r
2021-09-27,22900\r
2021-09-30,22300\r
2021-10-17,18700\r
2021-10-19,18700\r
2021-10-20,18700\r
2021-10-24,18700\r
2021-10-27,19100\r
2021-12-16,19100\r
2021-12-18,19100\r
2021-12-19,19100\r
2021-12-21,20000\r
2021-12-23,20000\r
2022-01-15,20100\r
2022-01-22,20100\r
2022-01-23,20100\r
2022-01-25,20700\r
2022-01-27,19300\r
2022-02-01,19300\r
2022-02-09,21000\r
2022-03-01,24700\r
2022-03-03,24700\r
2022-03-08,24700\r
2022-03-09,24700\r
2022-03-26,23000\r
2022-04-05,25300\r
2022-04-10,25900\r
2022-04-15,25900\r
2022-04-17,24400\r
2022-04-30,23600\r
2022-05-07,23600\r
2022-05-08,23600\r
2022-05-10,23600\r
2022-06-29,23700\r
2022-07-01,24800\r
2022-07-02,24800\r
2022-07-04,24800\r
2022-07-06,24800\r
2022-07-07,24800\r
2022-07-19,25800\r
2022-07-21,25800\r
2022-07-22,25800\r
2022-07-24,25800\r
2022-07-26,25800\r
2022-07-27,25800\r
2022-08-08,24400\r
2022-08-10,24400\r
2022-08-11,24400\r
2022-08-13,25500\r
2022-08-15,25500\r
2022-08-18,25500\r
2022-08-20,23700\r
2022-08-23,23700\r
2022-09-12,22600\r
2022-09-15,22600\r
2022-09-19,22600\r
2022-09-20,22600\r
2022-09-22,23000\r
2022-10-02,22300\r
2022-10-07,22400\r
2022-10-09,22400\r
2022-10-12,22400\r
2022-10-15,22400\r
2022-10-22,19300\r
2022-10-24,19300\r
2022-11-01,19300\r
2022-11-06,16400\r
2022-11-08,16400\r
2022-11-11,17400\r
2022-11-13,17400\r
2022-11-16,16600\r
2022-11-24,17800\r
2022-12-06,6800\r
2022-12-11,6800\r
2023-01-10,16700\r
2023-01-12,16700\r
2023-01-18,16700\r
2023-02-09,17900\r
2023-02-11,17900\r
2023-02-12,17900\r
2023-02-14,21600\r
2023-02-16,21600\r
2023-02-17,21600\r
2023-02-19,19200\r
2023-02-21,20900\r
2023-02-24,20900\r
2023-02-26,19200\r
2023-03-01,21300\r
2023-03-03,21200\r
2023-03-04,21200\r
2023-03-09,21200\r
2023-03-16,22200\r
2023-04-05,22500\r
2023-04-07,22500\r
2023-04-08,22500\r
2023-04-15,22500\r
2023-05-05,20200\r
2023-05-10,20200\r
2023-06-24,26700\r
2023-07-09,22800\r
2023-07-11,22800\r
2023-07-14,25600\r
2023-07-16,25600\r
2023-07-17,25600\r
2023-07-19,25600\r
2023-07-22,25600\r
2023-08-08,25400\r
2023-08-10,25400\r
2023-08-11,25400\r
2023-08-13,25400\r
2023-08-15,25400\r
2023-08-18,25400\r
2023-08-20,22700\r
2023-08-21,22700\r
2023-08-23,23300\r
`;export{r as default};
