const n=`date,value\r
2017-02-19,37500\r
2017-02-22,30600\r
2017-03-11,38400\r
2017-03-14,38000\r
2017-04-03,49300\r
2017-04-10,44500\r
2017-04-20,45900\r
2017-04-23,42900\r
2017-05-23,45800\r
2017-06-09,46900\r
2017-06-12,44300\r
2017-06-19,44700\r
2017-06-22,42700\r
2017-07-04,38500\r
2017-07-07,35700\r
2017-07-14,33600\r
2017-07-22,28700\r
2017-08-03,27400\r
2017-08-06,26100\r
2017-08-13,21100\r
2017-08-18,23200\r
2017-08-21,19700\r
2017-08-23,18500\r
2017-08-26,14400\r
2017-09-15,11600\r
2017-09-22,11100\r
2017-09-27,7400\r
2017-10-05,5300\r
2017-10-07,5300\r
2017-10-10,4800\r
2017-10-12,3900\r
2017-10-15,4500\r
2017-10-17,4200\r
2017-10-27,4800\r
2017-10-30,2700\r
2017-11-21,3200\r
2018-01-13,13100\r
2018-01-15,15000\r
2018-01-23,4400\r
2018-02-24,6400\r
2018-03-14,38200\r
2018-03-19,39200\r
2018-04-18,46500\r
2018-04-20,51100\r
2018-05-05,49800\r
2018-05-18,48500\r
2018-05-20,44300\r
2018-05-25,44600\r
2018-06-14,43700\r
2018-06-19,44300\r
2018-06-22,43200\r
2018-06-24,42000\r
2018-06-27,46500\r
2018-07-02,49500\r
2018-07-04,46200\r
2018-07-07,42800\r
2018-07-09,42100\r
2018-07-17,39700\r
2018-07-19,40000\r
2018-07-24,44400\r
2018-07-27,37600\r
2018-07-29,34400\r
2018-08-01,38800\r
2018-08-03,33200\r
2018-08-16,26900\r
2018-08-18,31600\r
2018-08-21,28100\r
2018-08-26,25300\r
2018-08-28,25600\r
2018-09-02,18500\r
2018-09-05,21300\r
2018-09-10,18900\r
2018-09-17,16700\r
2018-09-20,15500\r
2018-09-25,14800\r
2018-09-27,11700\r
2018-10-02,17900\r
2018-10-05,10900\r
2018-10-17,12900\r
2018-10-20,9600\r
2018-10-22,10000\r
2018-11-04,14000\r
2018-11-24,34800\r
2018-12-11,39900\r
2019-01-03,34400\r
2019-02-04,38800\r
2019-02-12,18000\r
2019-02-14,34400\r
2019-02-17,34800\r
2019-02-22,37300\r
2019-02-27,41600\r
2019-03-16,35400\r
2019-03-21,39700\r
2019-03-24,44900\r
2019-03-29,46300\r
2019-03-31,44900\r
2019-04-05,44300\r
2019-04-13,46800\r
2019-04-15,47300\r
2019-04-20,46200\r
2019-04-23,46900\r
2019-05-03,48600\r
2019-05-13,46300\r
2019-05-15,45900\r
2019-05-23,48000\r
2019-05-30,37300\r
2019-06-02,50700\r
2019-06-07,49700\r
2019-06-12,47800\r
2019-06-17,43500\r
2019-06-19,45300\r
2019-06-24,47800\r
2019-06-27,45400\r
2019-06-29,36300\r
2019-07-02,46400\r
2019-07-04,41400\r
2019-07-14,39100\r
2019-07-17,40800\r
2019-07-19,37500\r
2019-07-22,36100\r
2019-07-24,35900\r
2019-07-29,26400\r
2019-08-03,33700\r
2019-08-06,31900\r
2019-08-08,27600\r
2019-08-11,27100\r
2019-08-13,28800\r
2019-08-23,21500\r
2019-08-26,26000\r
2019-08-28,29200\r
2019-08-31,21700\r
2019-09-02,22800\r
2019-09-12,15500\r
2019-09-15,13200\r
2019-09-17,10900\r
2019-09-20,10500\r
2019-09-27,10600\r
2019-10-25,17300\r
2019-12-06,41100\r
2019-12-21,49600\r
2020-02-12,35400\r
2020-02-22,40000\r
2020-02-24,36600\r
2020-03-20,42000\r
2020-03-23,51600\r
2020-03-25,41000\r
2020-03-28,50900\r
2020-04-04,50700\r
2020-04-07,48500\r
2020-04-09,46700\r
2020-04-14,50000\r
2020-04-24,46900\r
2020-05-04,41600\r
2020-05-09,47600\r
2020-05-17,43000\r
2020-05-19,41500\r
2020-05-22,45600\r
2020-05-27,48600\r
2020-05-29,46500\r
2020-06-21,45700\r
2020-06-23,45700\r
2020-07-01,43500\r
2020-07-08,43100\r
2020-07-11,39900\r
2020-07-13,37900\r
2020-07-18,37000\r
2020-07-21,39300\r
2020-07-23,32000\r
2020-07-28,25900\r
2020-07-31,35100\r
2020-08-05,24800\r
2020-08-07,22300\r
2020-08-10,25800\r
2020-08-20,16000\r
2020-08-25,16300\r
2020-09-01,8800\r
2020-09-04,9700\r
2020-09-14,8500\r
2020-09-16,7200\r
2020-10-31,3500\r
2020-11-18,1900\r
2020-11-23,5000\r
2020-12-13,5600\r
2021-01-24,32300\r
2021-02-21,43800\r
2021-02-23,44800\r
2021-02-28,49300\r
2021-03-20,52000\r
2021-03-23,48700\r
2021-03-25,53100\r
2021-03-28,48400\r
2021-03-30,51100\r
2021-04-02,51200\r
2021-04-04,44400\r
2021-04-07,47500\r
2021-04-14,47000\r
2021-04-17,48200\r
2021-04-19,47400\r
2021-04-24,50200\r
2021-05-27,38900\r
2021-06-01,45900\r
2021-06-03,48000\r
2021-06-11,44600\r
2021-06-13,43700\r
2021-06-16,48200\r
2021-06-18,44100\r
2021-06-26,47900\r
2021-07-11,43700\r
2021-07-21,40300\r
2021-07-23,43600\r
2021-08-02,46100\r
2021-08-10,41000\r
2021-08-12,39200\r
2021-08-15,43100\r
2021-08-20,44700\r
2021-08-25,44800\r
2021-08-27,42300\r
2021-09-01,39900\r
2021-09-06,40100\r
2021-09-24,34700\r
2021-10-11,37600\r
2021-10-14,37700\r
2021-10-16,34800\r
2021-10-21,38300\r
2021-10-24,37100\r
2021-11-30,38100\r
2021-12-23,36700\r
2022-01-14,31700\r
2022-01-24,32300\r
2022-02-01,45600\r
2022-02-08,23400\r
2022-02-26,37100\r
2022-02-28,37400\r
2022-03-05,43200\r
2022-03-23,45900\r
2022-03-25,44700\r
2022-04-04,44000\r
2022-04-14,41700\r
2022-04-17,45900\r
2022-04-27,41500\r
2022-05-19,45400\r
2022-05-27,39600\r
2022-05-29,43100\r
2022-06-11,42000\r
2022-06-13,43100\r
2022-06-16,39000\r
2022-06-18,40200\r
2022-06-21,43800\r
2022-06-28,39600\r
2022-07-03,39900\r
2022-07-06,36700\r
2022-07-08,35900\r
2022-07-11,37900\r
2022-07-13,34500\r
2022-07-16,34100\r
2022-07-18,34000\r
2022-07-21,30200\r
2022-07-26,19000\r
2022-07-28,29400\r
2022-07-31,23900\r
2022-08-02,19700\r
2022-08-07,16200\r
2022-08-10,16400\r
2022-08-12,12900\r
2022-08-22,9800\r
2022-08-25,10500\r
2022-09-01,10000\r
2022-09-04,14400\r
2022-09-11,14900\r
2022-09-19,12000\r
2022-09-21,13900\r
2022-10-04,12400\r
2022-10-06,12300\r
2022-10-11,12900\r
2022-11-18,41200\r
2022-11-20,34700\r
2022-12-05,35600\r
2023-01-17,32400\r
2023-02-03,29500\r
2023-02-08,29200\r
2023-02-13,32300\r
2023-02-16,31800\r
2023-02-21,35400\r
2023-03-05,35800\r
2023-03-28,41600\r
2023-04-04,38600\r
2023-04-19,42400\r
`;export{n as default};
