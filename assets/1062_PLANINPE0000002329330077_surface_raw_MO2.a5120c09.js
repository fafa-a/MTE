const r=`date,value\r
2017-01-19,21100\r
2017-01-29,21100\r
2017-02-01,9200\r
2017-02-08,26400\r
2017-02-11,35000\r
2017-02-18,33900\r
2017-02-21,34700\r
2017-02-28,32800\r
2017-03-10,36600\r
2017-03-13,43000\r
2017-03-23,42900\r
2017-03-30,41500\r
2017-04-02,41500\r
2017-04-09,41600\r
2017-04-12,41800\r
2017-04-19,39800\r
2017-04-22,40400\r
2017-04-29,40200\r
2017-05-02,42300\r
2017-05-09,41200\r
2017-06-18,38600\r
2017-06-21,40800\r
2017-06-28,40800\r
2017-07-01,40000\r
2017-07-21,26700\r
2017-07-23,26700\r
2017-07-28,26700\r
2017-07-31,26700\r
2017-08-02,32400\r
2017-08-05,35300\r
2017-08-07,38500\r
2017-08-20,21900\r
2017-08-22,21900\r
2017-08-25,25000\r
2017-08-27,19600\r
2017-10-11,8500\r
2017-10-14,8500\r
2017-10-16,8500\r
2017-10-19,7200\r
2017-10-21,7200\r
2017-10-24,7500\r
2017-10-26,6700\r
2017-11-13,7800\r
2017-11-15,5600\r
2017-11-18,5600\r
2017-11-23,5600\r
2017-11-25,6100\r
2017-11-28,4300\r
2017-11-30,4300\r
2017-12-15,34600\r
2017-12-25,34600\r
2018-01-27,41200\r
2018-01-29,41200\r
2018-02-01,41200\r
2018-02-06,35700\r
2018-02-08,35300\r
2018-02-11,35300\r
2018-02-21,37400\r
2018-02-26,37400\r
2018-03-03,37400\r
2018-03-20,40000\r
2018-03-25,40000\r
2018-03-30,40000\r
2018-04-17,41700\r
2018-04-19,43200\r
2018-04-22,43200\r
2018-04-24,42200\r
2018-04-27,42200\r
2018-05-04,43900\r
2018-05-07,41200\r
2018-05-19,39800\r
2018-05-22,39800\r
2018-05-24,39800\r
2018-06-13,36600\r
2018-06-21,40300\r
2018-06-23,38100\r
2018-06-26,41500\r
2018-06-28,40600\r
2018-07-01,42500\r
2018-07-03,42400\r
2018-07-08,41300\r
2018-07-11,38700\r
2018-07-13,37100\r
2018-07-16,37700\r
2018-07-18,37200\r
2018-07-21,38400\r
2018-07-23,38400\r
2018-07-26,39300\r
2018-07-31,44200\r
2018-08-02,42800\r
2018-08-05,36800\r
2018-08-07,36800\r
2018-08-10,34900\r
2018-08-12,34900\r
2018-08-15,38800\r
2018-08-17,34700\r
2018-09-01,14900\r
2018-09-04,14800\r
2018-09-09,14800\r
2018-09-11,14800\r
2018-09-14,12500\r
2018-09-16,12500\r
2018-09-24,7000\r
2018-09-26,9300\r
2018-09-29,8000\r
2018-10-01,8000\r
2018-10-04,8000\r
2018-10-09,4900\r
2018-10-14,1200\r
2018-10-16,5200\r
2018-10-19,2300\r
2018-10-21,1900\r
2018-10-24,2000\r
2018-11-15,12200\r
2018-11-18,12400\r
2018-11-20,9700\r
2018-11-30,2400\r
2018-12-10,35600\r
2018-12-20,35600\r
2019-01-02,33600\r
2019-01-09,33600\r
2019-01-17,29700\r
2019-01-19,30600\r
2019-01-22,29200\r
2019-01-24,31500\r
2019-01-27,31500\r
2019-02-03,30000\r
2019-02-13,31600\r
2019-02-16,31600\r
2019-02-18,31600\r
2019-02-21,31600\r
2019-02-23,32800\r
2019-02-26,30900\r
2019-03-03,30100\r
2019-03-08,30100\r
2019-03-10,32300\r
2019-03-13,30500\r
2019-03-20,36400\r
2019-03-23,39300\r
2019-03-25,35700\r
2019-03-28,33700\r
2019-03-30,33700\r
2019-04-04,33700\r
2019-04-07,33700\r
2019-04-09,34400\r
2019-04-12,36400\r
2019-04-14,35500\r
2019-04-19,35900\r
2019-04-22,35900\r
2019-04-27,35800\r
2019-04-29,38200\r
2019-05-12,40800\r
2019-05-14,37600\r
2019-05-19,37600\r
2019-05-24,40800\r
2019-05-27,40800\r
2019-05-29,32800\r
2019-06-01,40700\r
2019-06-03,40700\r
2019-06-06,40000\r
2019-06-13,43300\r
2019-06-16,42700\r
2019-06-18,43500\r
2019-06-21,43500\r
2019-06-26,37700\r
2019-06-28,37700\r
2019-07-01,39200\r
2019-07-03,37400\r
2019-07-06,34500\r
2019-07-08,34500\r
2019-07-13,30900\r
2019-07-16,30900\r
2019-07-23,33800\r
2019-07-28,33600\r
2019-07-31,33700\r
2019-08-02,33700\r
2019-08-05,33700\r
2019-08-22,28600\r
2019-08-25,28600\r
2019-08-27,28600\r
2019-08-30,28600\r
2019-09-01,28600\r
2019-09-04,27900\r
2019-09-06,15200\r
2019-09-11,9200\r
2019-09-16,9200\r
2019-09-19,8200\r
2019-09-21,8200\r
2019-09-24,10200\r
2019-10-01,9200\r
2019-10-11,3100\r
2019-10-14,3100\r
2019-10-21,7700\r
2019-11-03,5500\r
2019-12-03,35300\r
2019-12-05,35300\r
2019-12-13,35300\r
2019-12-20,31800\r
2019-12-23,31800\r
2019-12-25,31800\r
2019-12-30,38400\r
2020-01-17,39500\r
2020-01-19,39500\r
2020-01-22,39500\r
2020-01-24,39500\r
2020-02-01,39500\r
2020-02-03,36100\r
2020-02-06,25500\r
2020-02-18,25500\r
2020-02-21,25500\r
2020-03-19,29000\r
2020-03-24,39000\r
2020-03-27,34200\r
2020-03-29,34200\r
2020-04-01,34400\r
2020-04-03,34400\r
2020-04-08,34400\r
2020-04-11,33300\r
2020-04-13,34900\r
2020-04-16,34900\r
2020-04-18,43800\r
2020-04-23,43800\r
2020-04-26,39100\r
2020-04-28,44300\r
2020-05-06,40800\r
2020-05-16,39200\r
2020-05-18,39200\r
2020-05-21,39200\r
2020-05-23,32000\r
2020-05-26,40800\r
2020-05-28,33900\r
2020-05-31,36900\r
2020-06-02,34800\r
2020-06-05,37100\r
2020-06-07,37100\r
2020-07-12,31200\r
2020-07-15,31200\r
2020-07-17,31800\r
2020-07-20,31100\r
2020-07-22,32900\r
2020-07-27,32900\r
2020-07-30,33700\r
2020-08-01,33700\r
2020-08-04,34400\r
2020-08-06,32900\r
2020-08-09,33500\r
2020-08-11,30700\r
2020-08-14,31400\r
2020-09-03,25100\r
2020-09-08,28100\r
2020-09-10,22100\r
2020-09-13,23700\r
2020-09-15,23700\r
2020-09-20,23500\r
2020-09-25,20400\r
2020-09-28,25200\r
2020-10-10,31800\r
2020-10-18,31800\r
2020-10-23,31800\r
2020-11-04,23900\r
2020-11-09,23900\r
2020-11-12,23900\r
2020-11-14,23900\r
2020-11-19,37900\r
2020-11-22,37900\r
2020-11-27,37900\r
2020-11-29,25700\r
2020-12-12,34200\r
2020-12-17,38500\r
2020-12-29,38500\r
2021-01-08,41900\r
2021-01-11,41900\r
2021-01-18,41900\r
2021-02-07,16400\r
2021-02-17,16400\r
2021-02-27,45100\r
2021-03-02,45100\r
2021-03-04,44700\r
2021-03-09,44700\r
2021-03-12,45000\r
2021-03-14,42300\r
2021-03-17,42000\r
2021-03-19,42000\r
2021-03-22,44500\r
2021-03-24,41600\r
2021-03-27,41600\r
2021-03-29,43000\r
2021-04-01,44300\r
2021-04-03,44300\r
2021-04-06,42700\r
2021-04-08,42700\r
2021-04-11,42300\r
2021-04-13,43100\r
2021-04-16,44300\r
2021-04-18,44300\r
2021-04-21,44300\r
2021-04-23,41700\r
2021-04-28,41400\r
2021-05-03,41700\r
2021-05-08,42200\r
2021-05-11,42800\r
2021-05-13,42800\r
2021-05-16,42700\r
2021-05-31,42000\r
2021-06-05,41800\r
2021-06-07,41800\r
2021-06-10,41800\r
2021-06-22,38400\r
2021-06-25,38400\r
2021-06-30,36600\r
2021-07-17,34700\r
2021-07-20,36700\r
2021-07-22,34900\r
2021-07-25,34900\r
2021-07-30,37500\r
2021-08-01,36100\r
2021-08-11,38800\r
2021-08-14,39800\r
2021-08-24,34800\r
2021-08-26,36200\r
2021-08-29,36200\r
2021-08-31,36200\r
2021-09-03,36200\r
2021-09-05,36200\r
2021-09-08,29600\r
2021-09-10,29600\r
2021-09-23,22700\r
2021-09-28,22700\r
2021-09-30,23800\r
2021-10-03,23800\r
2021-10-08,23300\r
2021-10-10,21800\r
2021-10-15,21400\r
2021-10-23,21000\r
2021-10-28,22200\r
2021-11-04,27800\r
2021-11-09,28500\r
2021-11-17,26700\r
2021-11-19,26800\r
2021-11-24,24300\r
2021-12-17,33200\r
2022-01-11,33200\r
2022-01-13,34800\r
2022-01-21,34200\r
2022-01-23,36700\r
2022-01-31,36100\r
2022-03-07,38500\r
2022-03-09,38500\r
2022-03-12,38500\r
2022-03-14,40900\r
2022-03-19,40300\r
2022-03-22,41900\r
2022-03-24,40400\r
2022-03-27,40500\r
2022-04-01,40500\r
2022-04-11,40300\r
2022-04-13,40300\r
2022-04-16,42300\r
2022-04-21,42300\r
2022-04-26,42300\r
2022-05-01,38900\r
2022-05-03,42600\r
2022-05-06,39900\r
2022-05-08,42800\r
2022-05-11,41100\r
2022-05-13,41100\r
2022-05-16,42000\r
2022-05-21,41300\r
2022-05-28,40700\r
2022-05-31,40400\r
2022-06-02,42000\r
2022-06-05,42000\r
2022-06-07,42000\r
2022-06-10,41900\r
2022-06-12,36300\r
2022-06-15,38000\r
2022-06-17,37400\r
2022-06-27,40400\r
2022-07-02,39300\r
2022-07-05,39800\r
2022-07-07,38800\r
2022-07-10,38800\r
2022-07-12,38100\r
2022-07-15,37000\r
2022-07-17,37000\r
2022-07-20,34600\r
2022-07-30,8100\r
2022-08-01,8100\r
2022-08-06,6900\r
2022-08-09,5400\r
2022-08-11,4700\r
2022-08-24,12200\r
2022-08-26,12200\r
2022-08-29,14100\r
2022-09-03,14100\r
2022-09-05,13600\r
2022-09-08,13700\r
2022-09-18,7200\r
2022-09-20,5200\r
2022-09-30,4800\r
2022-10-08,4600\r
2022-10-18,4600\r
2022-10-20,5700\r
2022-10-23,5700\r
2022-11-04,5600\r
2022-11-07,5600\r
2022-11-12,10800\r
2022-11-17,10800\r
2022-11-19,18600\r
2022-11-22,18600\r
2022-11-29,32200\r
2022-12-09,33900\r
2023-01-03,34200\r
2023-01-11,39700\r
2023-01-13,39700\r
2023-01-16,39200\r
2023-01-21,37000\r
2023-02-10,37800\r
2023-02-12,38100\r
2023-02-15,35700\r
2023-02-20,35700\r
2023-02-27,36300\r
2023-03-02,37800\r
2023-03-04,37300\r
2023-04-21,39400\r
2023-04-23,39400\r
2023-05-01,39400\r
2023-05-26,39900\r
2023-05-28,40100\r
2023-05-31,39900\r
2023-06-02,39900\r
2023-06-05,39900\r
2023-06-07,39000\r
2023-06-10,39500\r
2023-06-15,39000\r
2023-06-22,39200\r
2023-06-25,40800\r
2023-07-07,38200\r
2023-07-10,38600\r
2023-07-15,38600\r
2023-07-17,38600\r
2023-07-20,35000\r
2023-08-09,31100\r
2023-08-19,32400\r
2023-08-21,28600\r
2023-08-26,28600\r
2023-09-03,21500\r
2023-09-05,17100\r
2023-09-08,21800\r
2023-09-10,21800\r
`;export{r as default};
