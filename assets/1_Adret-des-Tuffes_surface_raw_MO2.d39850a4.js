const r=`date,value\r
2017-07-04,34700\r
2017-07-06,34700\r
2017-07-14,35200\r
2017-08-18,33400\r
2017-08-20,33400\r
2017-08-23,37200\r
2017-08-25,37200\r
2017-08-30,34600\r
2017-09-22,35800\r
2017-09-24,35800\r
2017-09-27,35800\r
2017-09-29,34200\r
2017-10-02,34200\r
2017-10-07,30800\r
2017-10-09,30800\r
2017-10-12,32200\r
2017-10-14,32200\r
2017-10-17,30400\r
2017-10-19,32000\r
2017-10-22,32000\r
2017-10-24,29400\r
2017-10-27,29400\r
2017-11-16,27000\r
2017-11-18,27000\r
2017-11-21,28900\r
2017-11-23,28900\r
2017-11-26,28900\r
2017-11-28,20500\r
2017-12-01,20500\r
2018-06-19,24200\r
2018-06-21,24200\r
2018-06-24,24200\r
2018-06-26,24200\r
2018-06-29,24200\r
2018-07-09,32100\r
2018-07-11,32100\r
2018-07-14,32100\r
2018-07-19,32100\r
2018-07-29,32600\r
2018-07-31,32600\r
2018-08-03,32600\r
2018-08-05,32600\r
2018-08-08,32600\r
2018-08-28,31400\r
2018-08-30,31400\r
2018-09-02,36200\r
2018-09-04,36200\r
2018-09-07,36200\r
2018-09-09,34600\r
2018-09-12,34600\r
2018-09-14,27900\r
2018-09-17,34500\r
2018-09-19,34500\r
2018-09-22,34500\r
2018-09-24,31200\r
2018-09-27,33600\r
2018-09-29,27900\r
2018-10-02,27900\r
2018-10-04,27900\r
2018-10-07,27900\r
2018-10-17,29900\r
2018-10-19,29900\r
2018-10-22,31400\r
2018-10-24,31400\r
2018-10-27,31400\r
2018-11-01,28100\r
2018-11-03,27100\r
2018-11-11,27100\r
2018-11-16,32700\r
2018-11-18,32700\r
2019-06-29,24400\r
2019-07-01,24400\r
2019-07-04,25200\r
2019-07-06,25200\r
2019-07-09,30500\r
2019-07-14,29700\r
2019-07-16,31400\r
2019-07-19,31600\r
2019-07-21,31500\r
2019-07-24,32100\r
2019-07-26,31100\r
2019-07-29,32600\r
2019-07-31,32500\r
2019-08-03,33600\r
2019-08-05,32300\r
2019-08-08,34000\r
2019-08-10,32200\r
2019-08-15,35200\r
2019-08-18,35200\r
2019-08-23,32100\r
2019-09-12,25800\r
2019-09-14,25800\r
2019-09-17,25800\r
2019-09-19,25800\r
2019-09-22,25800\r
2019-09-27,30600\r
2019-09-29,28100\r
2019-10-02,28100\r
2019-10-04,28100\r
2019-10-07,28100\r
2019-11-16,25000\r
2019-11-18,25000\r
2019-11-21,25000\r
2019-11-23,25000\r
2019-11-26,25000\r
2019-11-28,25000\r
2020-05-21,2900\r
2020-05-24,2600\r
2020-05-26,16200\r
2020-05-29,16200\r
2020-05-31,16200\r
2020-06-03,16200\r
2020-06-05,15900\r
2020-07-08,31000\r
2020-07-10,31000\r
2020-07-13,31000\r
2020-07-18,31000\r
2020-07-20,31000\r
2020-07-23,32300\r
2020-07-25,31800\r
2020-07-28,31800\r
2020-07-30,31800\r
2020-08-02,31800\r
2020-08-04,31800\r
2020-08-07,33100\r
2020-08-09,31000\r
2020-08-12,33600\r
2020-08-14,33600\r
2020-08-19,33600\r
2020-08-22,33600\r
2020-08-24,32700\r
2020-08-27,34300\r
2020-09-01,30200\r
2020-09-03,30200\r
2020-09-06,30200\r
2020-09-08,30200\r
2020-09-11,30200\r
2020-11-05,32000\r
2020-11-07,32000\r
2020-11-10,32700\r
2020-11-12,32700\r
2020-11-15,31800\r
2020-11-17,31800\r
2020-11-20,31800\r
2020-11-22,31300\r
2020-11-25,31700\r
2020-11-27,31100\r
2020-11-30,31200\r
2020-12-02,27800\r
2020-12-07,32200\r
2020-12-10,27600\r
2020-12-15,27800\r
2021-06-13,8400\r
2021-06-15,8400\r
2021-06-18,8400\r
2021-07-18,31900\r
2021-07-20,31900\r
2021-07-23,31900\r
2021-08-17,11000\r
2021-08-19,11000\r
2021-08-24,100\r
2021-08-27,29100\r
2021-08-29,29100\r
2021-09-01,30500\r
2021-09-06,30500\r
2021-09-11,25400\r
2021-09-21,23300\r
2021-09-23,23300\r
2021-09-28,23300\r
2021-10-01,23400\r
2021-10-06,9000\r
2021-10-08,9000\r
2021-10-11,24100\r
2021-10-13,23500\r
2021-10-16,26900\r
2021-10-18,26900\r
2021-10-21,25400\r
2021-10-23,30400\r
2021-10-26,30400\r
2021-10-28,29400\r
2021-10-31,31600\r
2021-11-02,29200\r
2021-11-05,31600\r
2021-11-07,31600\r
2021-11-12,28500\r
2021-11-15,28500\r
2021-11-20,31200\r
2021-11-27,31200\r
2021-11-30,31200\r
2022-05-29,10000\r
2022-06-18,28900\r
2022-06-20,28900\r
2022-06-23,28900\r
2022-06-25,28900\r
2022-07-08,32000\r
2022-07-10,32000\r
2022-07-13,32800\r
2022-07-15,33100\r
2022-07-18,31900\r
2022-07-20,33100\r
2022-07-25,31700\r
2022-07-28,31700\r
2022-08-02,30900\r
2022-08-04,30900\r
2022-08-07,30900\r
2022-08-09,30900\r
2022-08-12,31400\r
2022-08-22,23700\r
2022-09-06,29000\r
2022-09-08,29000\r
2022-09-11,26700\r
2022-09-13,27600\r
2022-09-16,27600\r
2022-09-18,20500\r
2022-09-21,22000\r
2022-09-23,14900\r
2022-09-26,14900\r
2022-10-01,14900\r
2022-10-06,16900\r
2022-10-11,16900\r
2022-10-16,14400\r
2022-10-18,22100\r
2022-10-26,27700\r
2022-10-28,26900\r
2022-10-31,29800\r
2022-11-05,27100\r
2022-11-10,29700\r
2022-11-12,31000\r
2022-11-17,31000\r
2022-11-20,31600\r
2022-11-22,29400\r
2022-11-25,30300\r
2022-11-27,30300\r
2022-11-30,25800\r
2022-12-02,26700\r
2023-06-28,24800\r
2023-07-03,28800\r
2023-07-08,28800\r
2023-07-10,28800\r
2023-07-13,28800\r
2023-08-22,27900\r
2023-08-24,27900\r
2023-08-27,27900\r
2023-08-29,27900\r
2023-09-01,27900\r
2023-09-06,25300\r
2023-09-08,25300\r
2023-09-11,27100\r
`;export{r as default};
