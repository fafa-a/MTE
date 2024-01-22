const r=`date,value\r
2017-02-15,5600\r
2017-02-22,12400\r
2017-02-25,13200\r
2017-03-14,42800\r
2017-03-17,44000\r
2017-04-06,43100\r
2017-04-16,45600\r
2017-04-23,38900\r
2017-05-06,42400\r
2017-05-16,39200\r
2017-05-23,37800\r
2017-06-02,39500\r
2017-06-12,34400\r
2017-06-15,26500\r
2017-06-25,45000\r
2017-07-05,43200\r
2017-07-10,44200\r
2017-07-12,45900\r
2017-07-17,43500\r
2017-07-22,42300\r
2017-07-27,42600\r
2017-08-04,43700\r
2017-08-14,44900\r
2017-08-21,38800\r
2017-08-24,39600\r
2017-08-26,36400\r
2017-09-08,35900\r
2017-09-13,42000\r
2017-09-20,41600\r
2017-09-23,41000\r
2017-09-28,40000\r
2017-10-05,32500\r
2017-10-08,29200\r
2017-10-10,16800\r
2017-10-13,32800\r
2017-10-15,32000\r
2017-10-25,35100\r
2017-11-07,34900\r
2018-02-25,4800\r
2018-02-27,4300\r
2018-03-02,7500\r
2018-03-19,27600\r
2018-04-06,39100\r
2018-04-18,45000\r
2018-04-21,46300\r
2018-05-11,46100\r
2018-06-17,43000\r
2018-06-20,43500\r
2018-06-25,43900\r
2018-06-27,45400\r
2018-07-07,44700\r
2018-07-10,42700\r
2018-07-15,41600\r
2018-07-17,44000\r
2018-07-27,44000\r
2018-07-30,45500\r
2018-08-01,42600\r
2018-08-11,42500\r
2018-08-26,42900\r
2018-09-03,37600\r
2018-09-05,43200\r
2018-09-08,43300\r
2018-09-18,41600\r
2018-09-20,38500\r
2018-09-23,25600\r
2018-09-25,30000\r
2018-09-28,28600\r
2018-09-30,36400\r
2018-10-03,27100\r
2018-10-05,28600\r
2018-10-13,26300\r
2018-10-23,31800\r
2018-10-25,32500\r
2018-11-04,31900\r
2019-02-12,10000\r
2019-02-15,3100\r
2019-02-17,8600\r
2019-02-20,5000\r
2019-02-22,8400\r
2019-02-25,12500\r
2019-02-27,5100\r
2019-03-02,9800\r
2019-03-12,40500\r
2019-03-22,30800\r
2019-03-24,13600\r
2019-03-27,40300\r
2019-03-29,33900\r
2019-04-28,38400\r
2019-05-01,36800\r
2019-05-06,32100\r
2019-05-13,44200\r
2019-05-16,26100\r
2019-05-23,40900\r
2019-05-31,44300\r
2019-06-02,44900\r
2019-06-12,43000\r
2019-06-17,35000\r
2019-06-27,41800\r
2019-06-30,45200\r
2019-07-05,39400\r
2019-07-07,43800\r
2019-07-12,40500\r
2019-07-22,38000\r
2019-07-25,40200\r
2019-08-04,42300\r
2019-08-06,41900\r
2019-08-09,40700\r
2019-08-16,38000\r
2019-08-24,41700\r
2019-08-26,41200\r
2019-09-03,38600\r
2019-09-08,36900\r
2019-09-15,37500\r
2019-09-20,40600\r
2019-09-28,32600\r
2019-09-30,28300\r
2019-10-03,35900\r
2019-10-05,32200\r
2019-10-08,35100\r
2019-10-10,33200\r
2019-10-13,35800\r
2019-10-25,27100\r
2019-11-02,10700\r
2019-11-04,26500\r
2020-02-05,41200\r
2020-02-15,30700\r
2020-02-20,39000\r
2020-02-22,25100\r
2020-03-08,200\r
2020-03-21,42300\r
2020-04-05,38600\r
2020-04-15,42800\r
2020-05-05,45100\r
2020-05-07,41900\r
2020-05-20,45000\r
2020-05-22,42300\r
2020-05-25,44800\r
2020-05-27,43500\r
2020-06-06,45100\r
2020-06-21,42700\r
2020-06-24,38700\r
2020-06-26,42200\r
2020-07-01,44500\r
2020-07-04,39300\r
2020-07-14,45500\r
2020-07-16,45200\r
2020-07-19,45200\r
2020-07-21,42600\r
2020-07-26,43200\r
2020-07-29,45200\r
2020-07-31,41700\r
2020-08-05,41600\r
2020-08-08,44700\r
2020-08-10,40600\r
2020-08-13,43000\r
2020-08-15,43000\r
2020-08-20,39400\r
2020-08-25,40700\r
2020-09-04,38100\r
2020-09-12,39400\r
2020-09-14,39800\r
2020-09-17,45300\r
2020-09-27,39800\r
2020-09-29,26300\r
2020-10-17,44600\r
2020-10-24,31400\r
2020-11-01,30400\r
2021-02-19,28600\r
2021-02-24,33800\r
2021-03-01,36700\r
2021-03-28,42500\r
2021-03-31,38800\r
2021-04-05,45400\r
2021-04-15,43700\r
2021-05-20,39800\r
2021-05-27,40400\r
2021-06-09,34600\r
2021-06-14,28200\r
2021-06-16,35400\r
2021-06-21,44600\r
2021-06-26,41200\r
2021-07-09,40800\r
2021-07-11,45300\r
2021-07-19,42100\r
2021-07-21,45500\r
2021-08-10,43400\r
2021-08-13,40100\r
2021-08-15,42100\r
2021-08-20,42600\r
2021-08-25,41900\r
2021-08-28,39600\r
2021-08-30,40800\r
2021-09-12,34300\r
2021-09-22,25600\r
2021-10-07,28600\r
2021-10-09,25700\r
2021-10-12,26700\r
2021-10-14,28100\r
2021-10-17,23000\r
2021-10-24,29800\r
2021-10-27,20000\r
2022-02-09,21200\r
2022-02-24,39700\r
2022-03-03,39100\r
2022-04-17,44000\r
2022-05-17,33400\r
2022-05-22,42200\r
2022-05-27,42100\r
2022-06-01,40500\r
2022-06-04,32600\r
2022-06-06,41000\r
2022-06-09,31800\r
2022-06-29,40800\r
2022-07-11,44800\r
2022-07-14,43600\r
2022-07-16,44800\r
2022-07-19,42200\r
2022-07-21,43800\r
2022-07-24,42300\r
2022-07-31,41100\r
2022-08-03,43000\r
2022-08-05,43000\r
2022-08-08,41300\r
2022-08-10,41000\r
2022-08-20,42400\r
2022-08-23,41100\r
2022-08-28,41100\r
2022-08-30,41200\r
2022-09-19,34100\r
2022-09-22,34900\r
2022-10-02,37900\r
2022-10-04,35300\r
2022-10-09,33200\r
2022-10-22,18300\r
2022-11-01,13200\r
2022-11-06,17500\r
2023-02-11,10200\r
2023-02-14,27300\r
2023-02-16,7800\r
2023-02-19,38100\r
2023-03-01,2400\r
2023-03-06,1300\r
2023-03-13,39100\r
2023-03-16,39600\r
2023-03-28,42400\r
2023-04-07,33600\r
2023-04-17,40000\r
2023-05-02,41400\r
2023-05-17,42300\r
2023-06-16,27400\r
2023-06-24,41100\r
2023-06-26,40600\r
2023-07-09,45800\r
2023-07-14,42600\r
2023-07-29,42300\r
2023-07-31,42000\r
2023-08-05,43400\r
2023-08-08,42600\r
2023-08-10,44900\r
2023-08-13,38800\r
2023-08-20,41500\r
2023-08-23,42600\r
2023-09-04,34200\r
2023-09-07,36000\r
2023-09-14,37900\r
2023-09-17,40600\r
2023-09-19,38500\r
2023-09-24,37100\r
2023-09-27,37300\r
2023-09-29,35000\r
2023-10-02,32000\r
2023-10-04,35400\r
2023-10-07,31900\r
2023-10-12,27000\r
2023-10-17,25000\r
2023-10-27,22400\r
`;export{r as default};
