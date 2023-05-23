const r=`date,value\r
2017-01-26,19000\r
2017-01-29,24500\r
2017-02-15,20400\r
2017-02-18,23000\r
2017-02-25,21600\r
2017-03-10,25700\r
2017-03-17,25700\r
2017-03-30,22200\r
2017-04-06,29500\r
2017-04-09,27000\r
2017-04-19,29000\r
2017-04-29,29100\r
2017-05-06,28200\r
2017-05-09,28800\r
2017-05-16,27800\r
2017-05-19,27800\r
2017-05-26,28100\r
2017-06-05,29400\r
2017-06-18,25300\r
2017-06-25,25300\r
2017-06-28,25300\r
2017-07-05,29300\r
2017-07-18,26400\r
2017-08-02,23600\r
2017-08-04,23600\r
2017-08-07,24900\r
2017-08-12,23900\r
2017-08-14,26100\r
2017-08-17,26100\r
2017-08-22,21700\r
2017-08-24,25100\r
2017-08-27,26800\r
2017-08-29,21800\r
2017-09-01,21800\r
2017-09-03,22700\r
2017-09-06,22100\r
2017-09-08,22800\r
2017-09-13,24400\r
2017-09-16,26400\r
2017-09-21,25600\r
2017-09-23,24300\r
2017-09-26,26100\r
2017-09-28,26100\r
2017-10-03,23200\r
2017-10-08,23200\r
2017-10-11,24300\r
2017-10-13,22800\r
2017-10-16,22800\r
2017-10-18,22800\r
2017-10-23,21400\r
2017-10-26,20300\r
2017-10-28,22600\r
2017-10-31,20800\r
2017-11-05,24200\r
2017-11-07,23700\r
2017-11-17,21600\r
2017-11-20,23300\r
2017-11-22,21200\r
2017-11-25,21200\r
2017-11-27,21800\r
2017-11-30,22100\r
2017-12-05,20800\r
2017-12-07,20800\r
2017-12-12,23100\r
2017-12-15,23100\r
2017-12-20,21800\r
2017-12-25,18400\r
2017-12-27,18400\r
2018-01-09,24100\r
2018-01-11,24100\r
2018-01-19,23600\r
2018-01-24,31600\r
2018-01-29,31600\r
2018-01-31,31600\r
2018-02-25,35400\r
2018-03-02,36400\r
2018-03-07,36400\r
2018-03-22,37900\r
2018-03-30,38600\r
2018-04-04,32500\r
2018-04-06,32500\r
2018-04-09,32500\r
2018-04-19,33800\r
2018-04-21,39300\r
2018-04-24,34700\r
2018-04-26,34700\r
2018-05-11,36600\r
2018-05-21,37100\r
2018-05-24,36700\r
2018-06-20,37900\r
2018-06-23,38400\r
2018-06-25,36300\r
2018-07-08,38600\r
2018-07-10,36300\r
2018-07-13,33500\r
2018-07-15,35600\r
2018-07-18,35600\r
2018-07-23,33200\r
2018-07-25,32900\r
2018-07-30,33700\r
2018-08-02,33900\r
2018-08-04,34900\r
2018-08-12,32200\r
2018-08-19,31900\r
2018-08-22,30200\r
2018-08-27,28900\r
2018-09-01,31200\r
2018-09-03,28900\r
2018-09-08,32800\r
2018-09-11,30300\r
2018-09-16,30500\r
2018-09-18,30500\r
2018-09-23,29200\r
2018-09-26,27100\r
2018-09-28,30300\r
2018-10-03,28500\r
2018-10-06,29100\r
2018-10-13,31500\r
2018-10-16,30200\r
2018-10-23,25300\r
2018-11-15,31400\r
2018-11-17,33100\r
2018-11-22,33100\r
2018-11-27,28300\r
2018-12-07,29400\r
2018-12-10,28700\r
2018-12-27,28100\r
2019-01-16,27100\r
2019-01-19,27100\r
2019-01-24,27100\r
2019-01-26,27100\r
2019-02-03,38600\r
2019-02-13,38600\r
2019-02-15,33400\r
2019-02-18,33400\r
2019-02-20,30500\r
2019-02-23,32500\r
2019-02-25,31100\r
2019-02-28,32600\r
2019-03-12,33300\r
2019-03-22,31000\r
2019-03-25,31700\r
2019-03-27,31300\r
2019-03-30,31500\r
2019-04-01,31500\r
2019-04-09,31900\r
2019-05-01,26600\r
2019-05-06,31800\r
2019-05-09,31800\r
2019-05-11,31800\r
2019-05-14,29600\r
2019-05-16,29600\r
2019-05-29,34600\r
2019-06-08,38000\r
2019-06-13,36700\r
2019-06-28,33300\r
2019-07-05,36200\r
2019-07-08,36200\r
2019-07-10,31800\r
2019-07-13,31800\r
2019-07-15,30800\r
2019-07-20,30800\r
2019-07-23,28500\r
2019-07-25,28900\r
2019-07-28,26000\r
2019-08-02,26400\r
2019-08-04,24200\r
2019-08-09,23900\r
2019-08-14,24300\r
2019-08-17,24400\r
2019-08-22,23100\r
2019-08-24,22000\r
2019-08-29,23000\r
2019-09-03,22900\r
2019-09-06,22900\r
2019-09-08,23300\r
2019-09-11,22600\r
2019-09-13,24000\r
2019-09-16,23200\r
2019-09-18,23200\r
2019-09-21,23200\r
2019-09-26,22300\r
2019-10-08,22900\r
2019-10-11,23000\r
2019-10-13,22200\r
2019-10-26,21500\r
2019-12-05,32700\r
2019-12-07,32700\r
2019-12-10,32700\r
2019-12-15,29600\r
2019-12-17,30600\r
2019-12-20,30600\r
2019-12-25,26000\r
2019-12-27,27100\r
2019-12-30,27400\r
2020-01-09,38000\r
2020-01-11,39700\r
2020-01-14,36200\r
2020-01-16,38000\r
2020-01-19,35700\r
2020-01-29,34700\r
2020-01-31,34200\r
2020-02-03,35100\r
2020-02-05,37900\r
2020-02-10,37900\r
2020-02-15,36700\r
2020-02-18,36700\r
2020-02-20,30500\r
2020-02-23,30500\r
2020-03-11,35900\r
2020-03-21,35900\r
2020-03-24,34000\r
2020-03-26,34200\r
2020-03-31,30300\r
2020-04-03,32300\r
2020-04-05,30700\r
2020-04-08,30800\r
2020-04-10,30800\r
2020-04-15,30500\r
2020-04-25,29900\r
2020-05-03,33300\r
2020-05-05,37500\r
2020-05-08,37500\r
2020-05-18,34700\r
2020-05-20,34800\r
2020-05-25,35600\r
2020-05-28,36700\r
2020-05-30,35300\r
2020-06-12,37500\r
2020-06-14,35000\r
2020-06-24,31700\r
2020-07-04,31700\r
2020-07-07,36400\r
2020-07-09,32600\r
2020-07-19,32400\r
2020-07-22,32900\r
2020-07-24,31700\r
2020-07-27,30100\r
2020-07-29,30100\r
2020-08-03,30100\r
2020-08-06,25900\r
2020-08-08,25600\r
2020-08-18,26300\r
2020-08-21,24200\r
2020-08-23,24100\r
2020-08-31,22600\r
2020-09-02,23300\r
2020-09-05,21900\r
2020-09-07,21900\r
2020-09-10,23200\r
2020-09-12,21200\r
2020-09-17,20700\r
2020-09-30,22400\r
2020-10-12,22200\r
2020-11-09,14100\r
2020-11-11,16400\r
2020-11-14,13900\r
2020-11-21,16900\r
2020-11-26,17700\r
2020-11-29,17700\r
2020-12-26,20000\r
2021-01-03,30600\r
2021-01-08,30600\r
2021-01-10,30600\r
2021-02-02,39800\r
2021-02-14,37800\r
2021-02-17,38800\r
2021-02-19,37400\r
2021-02-24,37800\r
2021-02-27,36600\r
2021-03-01,36000\r
2021-03-04,36500\r
2021-03-09,34100\r
2021-03-14,31900\r
2021-03-24,29500\r
2021-03-29,36700\r
2021-03-31,35500\r
2021-04-03,35500\r
2021-04-05,35700\r
2021-04-08,35700\r
2021-04-15,37600\r
2021-04-20,36700\r
2021-04-23,37300\r
2021-05-03,35800\r
2021-05-08,34800\r
2021-05-20,31100\r
2021-05-28,31100\r
2021-05-30,40200\r
2021-06-07,41200\r
2021-06-09,36900\r
2021-06-14,33700\r
2021-06-22,34700\r
2021-07-02,31100\r
2021-07-09,31100\r
2021-07-22,35600\r
2021-08-11,33000\r
2021-08-26,28500\r
2021-08-28,28600\r
2021-08-31,28300\r
2021-09-05,28600\r
2021-09-12,31100\r
2021-09-17,31100\r
2021-09-22,31100\r
2021-10-07,29900\r
2021-10-12,31000\r
2021-10-15,29700\r
2021-10-17,29800\r
2021-10-20,28800\r
2021-10-27,27500\r
2021-11-19,27600\r
2021-12-14,37400\r
2021-12-16,39000\r
2021-12-19,36900\r
2021-12-21,36900\r
2022-01-13,29300\r
2022-01-15,33200\r
2022-01-23,33000\r
2022-01-25,34800\r
2022-02-09,33100\r
2022-03-01,38200\r
2022-03-09,38400\r
2022-03-21,38200\r
2022-03-24,38900\r
2022-03-26,37500\r
2022-04-05,35500\r
2022-04-10,34100\r
2022-05-08,29300\r
2022-05-10,36800\r
2022-05-15,29400\r
2022-06-17,33400\r
2022-06-19,33400\r
2022-06-22,37100\r
2022-06-24,36000\r
2022-06-29,38000\r
2022-07-02,38900\r
2022-07-04,36400\r
2022-07-12,32900\r
2022-07-14,35500\r
2022-07-17,31800\r
2022-07-24,33600\r
2022-07-27,30300\r
2022-08-01,27800\r
2022-08-03,28500\r
2022-08-06,28500\r
2022-08-08,28500\r
2022-08-11,28500\r
2022-08-13,26900\r
2022-08-28,28100\r
2022-09-05,28200\r
2022-09-10,23200\r
2022-09-12,23200\r
2022-09-15,23200\r
2022-09-20,25100\r
2022-09-22,25200\r
2022-10-02,24500\r
2022-10-05,21500\r
2022-10-07,20800\r
2022-10-12,20800\r
2022-10-15,23000\r
2022-10-17,23000\r
2022-11-11,22100\r
2022-11-16,23900\r
2022-12-04,21600\r
2022-12-11,22200\r
2022-12-14,22200\r
2022-12-21,22600\r
2022-12-24,23100\r
2023-01-10,21600\r
2023-01-18,28300\r
2023-01-20,28300\r
2023-02-02,27000\r
2023-02-04,28100\r
2023-02-09,24800\r
2023-02-12,26900\r
2023-02-14,27000\r
2023-02-17,26800\r
2023-02-19,26800\r
2023-02-24,26200\r
2023-03-01,25500\r
2023-03-09,26600\r
2023-03-16,28500\r
2023-04-05,28100\r
2023-04-08,28100\r
2023-04-10,26100\r
2023-04-18,25600\r
2023-04-20,26300\r
`;export{r as default};
