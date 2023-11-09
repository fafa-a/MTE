const r=`date,value\r
2017-02-15,26400\r
2017-02-25,26700\r
2017-03-17,23700\r
2017-03-27,23700\r
2017-04-03,15200\r
2017-04-06,15200\r
2017-05-26,27800\r
2017-06-02,27800\r
2017-06-05,27800\r
2017-07-05,31200\r
2017-07-07,31200\r
2017-08-14,28400\r
2017-08-19,28400\r
2017-08-21,28400\r
2017-08-22,28400\r
2017-08-24,28400\r
2017-08-29,27600\r
2017-09-03,27600\r
2017-11-17,25900\r
2017-11-22,28200\r
2017-11-27,28200\r
2018-02-25,29800\r
2018-02-27,29800\r
2018-03-05,29800\r
2018-04-21,31400\r
2018-04-26,31400\r
2018-05-11,28900\r
2018-05-18,28900\r
2018-05-19,28900\r
2018-05-21,28900\r
2018-05-26,26400\r
2018-06-20,33000\r
2018-06-22,32800\r
2018-06-23,32800\r
2018-06-25,34900\r
2018-06-27,34900\r
2018-06-28,34900\r
2018-07-03,34700\r
2018-07-07,32800\r
2018-07-08,32800\r
2018-08-19,30200\r
2018-08-22,30200\r
2018-08-26,30200\r
2018-09-08,26800\r
2018-09-10,26800\r
2018-09-11,26800\r
2018-09-18,31600\r
2018-09-20,31600\r
2018-09-25,31600\r
2018-09-26,31600\r
2018-09-28,31600\r
2018-10-18,28500\r
2018-10-20,28500\r
2018-10-21,28500\r
2018-10-23,31400\r
2018-10-25,31400\r
2018-10-30,24900\r
2019-02-05,33000\r
2019-02-13,33000\r
2019-02-15,33000\r
2019-02-17,33000\r
2019-02-18,33000\r
2019-02-20,27800\r
2019-02-22,28000\r
2019-02-23,28000\r
2019-02-25,23900\r
2019-02-27,23900\r
2019-03-07,28800\r
2019-03-22,27400\r
2019-03-24,27400\r
2019-03-27,30000\r
2019-03-29,30000\r
2019-03-30,30000\r
2019-04-01,30000\r
2019-05-01,31500\r
2019-05-06,31500\r
2019-05-13,31500\r
2019-05-14,31500\r
2019-05-16,34300\r
2019-05-23,28900\r
2019-05-28,28900\r
2019-05-29,28900\r
2019-05-31,31400\r
2019-06-02,24500\r
2019-06-08,24500\r
2019-06-25,35500\r
2019-06-27,35500\r
2019-06-28,35500\r
2019-06-30,39300\r
2019-07-02,39300\r
2019-07-03,39300\r
2019-07-05,35600\r
2019-07-07,35600\r
2019-07-08,35600\r
2019-07-10,36900\r
2019-07-12,35800\r
2019-07-13,35800\r
2019-07-15,36900\r
2019-07-17,35000\r
2019-07-20,35600\r
2019-07-22,33800\r
2019-07-23,33800\r
2019-07-25,36700\r
2019-08-02,37100\r
2019-08-04,36100\r
2019-08-09,36600\r
2019-08-12,38200\r
2019-08-14,35200\r
2019-08-22,35900\r
2019-08-24,32600\r
2019-08-26,34600\r
2019-08-29,34600\r
2019-08-31,31300\r
2019-09-03,31300\r
2019-09-06,31300\r
2019-09-13,30700\r
2019-09-15,30700\r
2019-09-16,30700\r
2019-09-18,32200\r
2019-09-20,32200\r
2019-09-21,32200\r
2019-10-03,29300\r
2019-10-13,25600\r
2019-10-21,25600\r
2020-01-06,21200\r
2020-01-13,21200\r
2020-01-16,22000\r
2020-01-18,22000\r
2020-01-19,22000\r
2020-01-21,23900\r
2020-01-24,23900\r
2020-03-26,32200\r
2020-03-28,32200\r
2020-03-31,36200\r
2020-04-02,36200\r
2020-04-05,31600\r
2020-04-07,31600\r
2020-04-08,31600\r
2020-04-10,32300\r
2020-04-12,31500\r
2020-04-13,31500\r
2020-04-15,33100\r
2020-04-17,31300\r
2020-04-22,34400\r
2020-04-23,34400\r
2020-04-27,34000\r
2020-05-20,31800\r
2020-05-25,34800\r
2020-05-27,34800\r
2020-05-28,34800\r
2020-05-30,33100\r
2020-06-01,33100\r
2020-06-02,33100\r
2020-07-04,32200\r
2020-07-06,32200\r
2020-07-07,32200\r
2020-07-09,35100\r
2020-07-11,35100\r
2020-07-12,35100\r
2020-07-14,35100\r
2020-07-17,36100\r
2020-07-19,34100\r
2020-07-21,38000\r
2020-07-22,38000\r
2020-07-24,31000\r
2020-07-27,36900\r
2020-07-29,32000\r
2020-07-31,32000\r
2020-08-05,32100\r
2020-08-06,32100\r
2020-08-08,31300\r
2020-08-10,33100\r
2020-09-17,31400\r
2020-11-21,24900\r
2020-11-23,24900\r
2020-11-28,24900\r
2020-11-29,24900\r
2020-12-04,24900\r
2021-02-24,27100\r
2021-02-27,27100\r
2021-03-01,28200\r
2021-03-04,28200\r
2021-03-06,28200\r
2021-03-08,24000\r
2021-03-09,24000\r
2021-03-31,27400\r
2021-04-02,27400\r
2021-04-03,27400\r
2021-04-05,27400\r
2021-04-07,27400\r
2021-04-08,27400\r
2021-06-14,33100\r
2021-06-16,33100\r
2021-07-19,29200\r
2021-07-21,29200\r
2021-07-22,29200\r
2021-07-29,31500\r
2021-09-07,28000\r
2021-09-12,29600\r
2021-09-17,29600\r
2021-09-22,26300\r
2021-09-24,21900\r
2021-09-25,21900\r
2021-09-27,21900\r
2021-09-30,21900\r
2021-10-02,21900\r
2021-10-22,23400\r
2021-10-24,23400\r
2021-10-27,23400\r
2021-11-01,23400\r
2022-01-15,24100\r
2022-01-25,26900\r
2022-02-09,26500\r
2022-03-26,24800\r
2022-04-10,26900\r
2022-04-15,29500\r
2022-04-17,29500\r
2022-04-20,29500\r
2022-04-22,25800\r
2022-05-10,31100\r
2022-05-15,34100\r
2022-05-17,34100\r
2022-05-30,26100\r
2022-06-01,26100\r
2022-06-02,26100\r
2022-06-04,26100\r
2022-06-14,30200\r
2022-06-16,30200\r
2022-06-21,30200\r
2022-06-29,30100\r
2022-07-02,27400\r
2022-07-04,27400\r
2022-07-06,27400\r
2022-07-14,28400\r
2022-07-16,28400\r
2022-07-17,28400\r
2022-07-19,29500\r
2022-07-21,29500\r
2022-07-24,29100\r
2022-07-31,30800\r
2022-08-03,31600\r
2022-08-06,30000\r
2022-08-08,32700\r
2022-08-10,32700\r
2022-08-11,32700\r
2022-08-13,29800\r
2022-08-18,32800\r
2022-09-12,28000\r
2022-09-19,28000\r
2022-09-20,28000\r
2022-09-22,28900\r
2022-10-22,29300\r
2022-11-11,25200\r
2022-11-13,25200\r
2023-02-09,28300\r
2023-02-11,28300\r
2023-02-12,28300\r
2023-02-14,31600\r
2023-02-16,31600\r
2023-04-05,27700\r
2023-04-08,27700\r
2023-04-13,27700\r
2023-06-14,33500\r
2023-06-16,33500\r
2023-06-19,33500\r
2023-06-24,33800\r
2023-06-27,31300\r
2023-07-14,28400\r
2023-07-17,28400\r
2023-07-19,28400\r
2023-07-22,26700\r
2023-08-23,36400\r
2023-08-26,36400\r
2023-09-07,31000\r
2023-09-09,31000\r
2023-09-10,31000\r
2023-09-14,31000\r
2023-09-15,31000\r
2023-10-02,30500\r
2023-10-05,30500\r
2023-10-07,33000\r
2023-10-09,33000\r
2023-10-10,33000\r
`;export{r as default};
