const r=`date,value\r
2017-01-26,8500\r
2017-02-05,8500\r
2017-02-22,29100\r
2017-02-25,27500\r
2017-03-04,28000\r
2017-03-07,26500\r
2017-03-14,30600\r
2017-03-17,34600\r
2017-04-03,30500\r
2017-04-06,33400\r
2017-04-16,37800\r
2017-04-23,38800\r
2017-05-16,24100\r
2017-05-23,28600\r
2017-05-26,28500\r
2017-06-02,28100\r
2017-06-05,26000\r
2017-06-12,27900\r
2017-06-15,28000\r
2017-06-22,27500\r
2017-06-25,33300\r
2017-07-02,34200\r
2017-07-05,35300\r
2017-07-07,35300\r
2017-07-12,35300\r
2017-07-17,38800\r
2017-07-22,38800\r
2017-07-25,38800\r
2017-07-27,38800\r
2017-07-30,36100\r
2017-08-04,37000\r
2017-08-11,32800\r
2017-08-14,38100\r
2017-08-16,38000\r
2017-08-19,38000\r
2017-08-21,38000\r
2017-08-24,28200\r
2017-08-26,26900\r
2017-08-29,26900\r
2017-09-05,31100\r
2017-09-08,34400\r
2017-09-10,34400\r
2017-09-13,32500\r
2017-09-20,39300\r
2017-09-23,36400\r
2017-09-28,37100\r
2017-10-03,39300\r
2017-10-05,36000\r
2017-10-08,32300\r
2017-10-10,30000\r
2017-10-13,31600\r
2017-10-15,30000\r
2017-10-18,31300\r
2017-10-20,28500\r
2017-10-23,31400\r
2017-10-25,35100\r
2017-10-28,36100\r
2017-10-30,33100\r
2017-11-07,34500\r
2017-11-12,30500\r
2017-11-14,35800\r
2017-11-17,33700\r
2017-11-19,35400\r
2017-11-22,35300\r
2017-11-24,38200\r
2017-11-27,37300\r
2017-11-29,39300\r
2017-12-02,39200\r
2018-01-18,34100\r
2018-01-21,34100\r
2018-01-23,34100\r
2018-01-28,35600\r
2018-01-31,24300\r
2018-02-02,24300\r
2018-02-07,24300\r
2018-02-10,22200\r
2018-02-27,10000\r
2018-03-02,10000\r
2018-03-07,10000\r
2018-03-09,8000\r
2018-03-14,33000\r
2018-03-19,35600\r
2018-03-22,35600\r
2018-03-24,35600\r
2018-03-27,34100\r
2018-03-29,34100\r
2018-04-01,42600\r
2018-04-18,38300\r
2018-04-21,40700\r
2018-04-26,40700\r
2018-05-11,29700\r
2018-05-13,29700\r
2018-05-21,29700\r
2018-06-17,36700\r
2018-06-22,36700\r
2018-06-25,40400\r
2018-06-27,36400\r
2018-07-02,30800\r
2018-07-07,36600\r
2018-07-10,37900\r
2018-07-12,37500\r
2018-07-17,38300\r
2018-07-20,38200\r
2018-07-22,38200\r
2018-07-25,41300\r
2018-07-27,38800\r
2018-07-30,38600\r
2018-08-01,39100\r
2018-08-06,37900\r
2018-08-11,37200\r
2018-08-14,37200\r
2018-08-16,38900\r
2018-08-19,38900\r
2018-08-21,35900\r
2018-08-24,37600\r
2018-08-26,33100\r
2018-08-29,36600\r
2018-08-31,36600\r
2018-09-03,36400\r
2018-09-05,32800\r
2018-09-08,32100\r
2018-09-10,32100\r
2018-09-13,34800\r
2018-09-18,31200\r
2018-09-20,31000\r
2018-09-23,34100\r
2018-09-25,32300\r
2018-09-28,31800\r
2018-09-30,30200\r
2018-10-03,30600\r
2018-10-05,32100\r
2018-10-10,30200\r
2018-10-13,34100\r
2018-10-23,32600\r
2018-10-25,30700\r
2018-11-04,34700\r
2018-11-07,34500\r
2018-11-09,34500\r
2018-11-12,38400\r
2018-11-14,38400\r
2018-11-17,32500\r
2018-11-22,32500\r
2018-11-24,34600\r
2018-11-27,37400\r
2018-11-29,37400\r
2018-12-02,37400\r
2018-12-04,36900\r
2019-01-16,33600\r
2019-01-18,35400\r
2019-01-23,17600\r
2019-01-26,13700\r
2019-01-31,17700\r
2019-02-02,4800\r
2019-02-05,4800\r
2019-02-07,4800\r
2019-02-10,4800\r
2019-02-12,8600\r
2019-02-15,12300\r
2019-02-17,8900\r
2019-02-20,9600\r
2019-02-22,6800\r
2019-02-25,9200\r
2019-02-27,7900\r
2019-03-02,10100\r
2019-03-04,19100\r
2019-03-07,17600\r
2019-03-12,30500\r
2019-03-14,33300\r
2019-03-17,32800\r
2019-03-22,33800\r
2019-03-24,33800\r
2019-03-27,36000\r
2019-03-29,34800\r
2019-04-01,32400\r
2019-04-13,41200\r
2019-04-28,41200\r
2019-05-01,34700\r
2019-05-06,33400\r
2019-05-13,34700\r
2019-05-16,35000\r
2019-05-23,36500\r
2019-05-28,36500\r
2019-05-31,38200\r
2019-06-02,40200\r
2019-06-12,38100\r
2019-06-15,38100\r
2019-06-17,4000\r
2019-06-22,4000\r
2019-06-25,4000\r
2019-06-27,27900\r
2019-06-30,27900\r
2019-07-05,31000\r
2019-07-07,31000\r
2019-07-10,34500\r
2019-07-12,29900\r
2019-07-15,34300\r
2019-07-20,28800\r
2019-07-22,25800\r
2019-07-25,33200\r
2019-08-01,37100\r
2019-08-04,37100\r
2019-08-06,33100\r
2019-08-09,33100\r
2019-08-14,34100\r
2019-08-16,34200\r
2019-08-21,32700\r
2019-08-24,35400\r
2019-08-26,35600\r
2019-08-29,35600\r
2019-08-31,34800\r
2019-09-03,35800\r
2019-09-05,35800\r
2019-09-08,36900\r
2019-09-13,36200\r
2019-09-15,37100\r
2019-09-18,36500\r
2019-09-20,35200\r
2019-09-28,37100\r
2019-09-30,31400\r
2019-10-03,33200\r
2019-10-05,31800\r
2019-10-08,31400\r
2019-10-10,31400\r
2019-10-13,31800\r
2019-10-15,30300\r
2019-10-25,30700\r
2019-10-30,26800\r
2019-11-04,26600\r
2019-11-09,26600\r
2019-11-12,25800\r
2019-11-17,25800\r
2019-11-19,30500\r
2019-11-24,28300\r
2019-11-27,33400\r
2019-11-29,33400\r
2019-12-02,33400\r
2020-02-05,29600\r
2020-02-10,29300\r
2020-02-12,29300\r
2020-02-15,33900\r
2020-02-17,33900\r
2020-02-20,30300\r
2020-02-22,30800\r
2020-02-27,30800\r
2020-03-01,30800\r
2020-03-08,33800\r
2020-03-11,31100\r
2020-03-18,31100\r
2020-03-21,28700\r
2020-03-26,33300\r
2020-03-28,30000\r
2020-04-05,34300\r
2020-04-10,27400\r
2020-04-15,31700\r
2020-04-25,30500\r
2020-05-05,36100\r
2020-05-07,37400\r
2020-05-17,37400\r
2020-05-20,36000\r
2020-05-22,31800\r
2020-05-25,32100\r
2020-05-27,33000\r
2020-05-30,30600\r
2020-06-14,30500\r
2020-06-21,30200\r
2020-06-24,33300\r
2020-06-26,32200\r
2020-07-01,32200\r
2020-07-04,33900\r
2020-07-06,33900\r
2020-07-09,31500\r
2020-07-11,39000\r
2020-07-14,16900\r
2020-07-16,38900\r
2020-07-19,38200\r
2020-07-21,40800\r
2020-07-24,40800\r
2020-07-26,36600\r
2020-07-31,37200\r
2020-08-03,34500\r
2020-08-05,31400\r
2020-08-08,32900\r
2020-08-10,31900\r
2020-08-13,33500\r
2020-08-15,33500\r
2020-08-20,31900\r
2020-08-23,30600\r
2020-08-25,30600\r
2020-08-30,36600\r
2020-09-02,36600\r
2020-09-04,29800\r
2020-09-07,36700\r
2020-09-12,30900\r
2020-09-14,25400\r
2020-09-17,25400\r
2020-09-19,25400\r
2020-09-27,31100\r
2020-09-29,24600\r
2020-10-17,37400\r
2020-10-19,37400\r
2020-10-24,37400\r
2020-10-27,37400\r
2020-10-29,37400\r
2020-11-01,28600\r
2020-11-08,28600\r
2020-11-11,29700\r
2020-11-13,29700\r
2020-11-16,29700\r
2020-11-18,29900\r
2020-11-21,29900\r
2020-11-23,28000\r
2020-11-26,28000\r
2020-12-03,32300\r
2021-02-11,32200\r
2021-02-14,35200\r
2021-02-16,35200\r
2021-02-19,32300\r
2021-02-24,32700\r
2021-03-01,33500\r
2021-03-28,34200\r
2021-03-31,34800\r
2021-04-02,34800\r
2021-04-05,33500\r
2021-04-07,39800\r
2021-04-12,43200\r
2021-04-15,38900\r
2021-04-20,29800\r
2021-04-22,29800\r
2021-05-20,37000\r
2021-05-22,37000\r
2021-05-25,37000\r
2021-05-27,41500\r
2021-05-30,41500\r
2021-06-09,28000\r
2021-06-14,28000\r
2021-06-16,27400\r
2021-06-19,27400\r
2021-06-21,30200\r
2021-06-24,30200\r
2021-07-01,33200\r
2021-07-09,36800\r
2021-07-11,35900\r
2021-07-14,40300\r
2021-07-16,40300\r
2021-07-19,38400\r
2021-07-21,40000\r
2021-07-24,41700\r
2021-07-29,41700\r
2021-08-05,38200\r
2021-08-10,40500\r
2021-08-13,38300\r
2021-08-15,38300\r
2021-08-18,36900\r
2021-08-20,36500\r
2021-08-23,36500\r
2021-08-25,37100\r
2021-08-28,37700\r
2021-08-30,37700\r
2021-09-22,36400\r
2021-09-27,36400\r
2021-10-02,36300\r
2021-10-07,39400\r
2021-10-09,39400\r
2021-10-12,36200\r
2021-10-14,36600\r
2021-10-17,35700\r
2021-10-19,35800\r
2021-10-22,33700\r
2021-10-24,31400\r
2021-10-27,29300\r
2021-11-06,28100\r
2021-11-18,30700\r
2021-11-26,30700\r
2022-01-17,32500\r
2022-01-20,32500\r
2022-01-22,30700\r
2022-01-25,23600\r
2022-01-27,25500\r
2022-01-30,21200\r
2022-02-01,16600\r
2022-02-06,13100\r
2022-02-09,14600\r
2022-02-11,26200\r
2022-02-14,25200\r
2022-02-24,29200\r
2022-02-26,29200\r
2022-03-01,35100\r
2022-03-03,32400\r
2022-03-23,34000\r
2022-03-26,37400\r
2022-03-28,37400\r
2022-04-05,38100\r
2022-04-10,35200\r
2022-04-12,35200\r
2022-04-15,35200\r
2022-04-17,35900\r
2022-04-25,36100\r
2022-04-27,36100\r
2022-05-17,35300\r
2022-05-20,35300\r
2022-05-22,35300\r
2022-05-27,36000\r
2022-05-30,34500\r
2022-06-01,38100\r
2022-06-04,35100\r
2022-06-06,35100\r
2022-06-09,33500\r
2022-06-11,33500\r
2022-06-14,35200\r
2022-06-16,32800\r
2022-06-19,36700\r
2022-06-26,33100\r
2022-06-29,36500\r
2022-07-01,29200\r
2022-07-04,29200\r
2022-07-09,29200\r
2022-07-11,44300\r
2022-07-14,44300\r
2022-07-16,43400\r
2022-07-19,43800\r
2022-07-21,43400\r
2022-07-24,43600\r
2022-07-26,43500\r
2022-07-31,43700\r
2022-08-03,39600\r
2022-08-05,39600\r
2022-08-08,36000\r
2022-08-10,38500\r
2022-08-13,39400\r
2022-08-15,39400\r
2022-08-20,40800\r
2022-08-23,40600\r
2022-08-25,41600\r
2022-08-28,39300\r
2022-08-30,39300\r
2022-09-04,38800\r
2022-09-09,38700\r
2022-09-22,37000\r
2022-10-02,38400\r
2022-10-04,39300\r
2022-10-07,39200\r
2022-10-09,39400\r
2022-10-12,38300\r
2022-10-14,38600\r
2022-10-22,36900\r
2022-11-01,36900\r
2022-11-06,35400\r
2022-11-08,35400\r
2022-11-11,33700\r
2022-11-13,33600\r
2022-11-16,34200\r
2022-11-18,31000\r
2022-11-26,29200\r
2023-01-20,5100\r
2023-01-22,5100\r
2023-01-25,5100\r
2023-01-30,9200\r
2023-02-01,12900\r
2023-02-04,12900\r
2023-02-06,12900\r
2023-02-09,10300\r
2023-02-11,11700\r
2023-02-14,11600\r
2023-02-16,11600\r
2023-02-19,12600\r
2023-02-21,12200\r
2023-02-24,15600\r
2023-02-26,14700\r
2023-03-01,14900\r
2023-03-03,900\r
2023-03-06,21600\r
2023-03-13,21600\r
2023-03-16,37900\r
2023-03-23,33500\r
2023-03-28,31100\r
2023-04-02,31100\r
2023-04-05,44100\r
2023-04-07,38600\r
2023-04-10,42700\r
2023-04-12,42700\r
2023-04-15,42700\r
2023-04-17,39800\r
2023-04-20,40200\r
2023-04-27,39900\r
2023-05-02,35500\r
2023-05-05,35500\r
2023-05-10,35500\r
2023-06-16,34200\r
2023-06-21,34200\r
2023-06-24,40400\r
2023-07-26,39300\r
2023-07-29,39300\r
2023-07-31,39300\r
2023-08-03,39300\r
2023-08-05,39300\r
2023-08-08,41600\r
2023-08-10,41600\r
2023-08-13,41900\r
2023-08-15,39500\r
2023-08-18,39500\r
2023-08-20,37800\r
2023-08-23,38400\r
2023-08-25,36700\r
`;export{r as default};
