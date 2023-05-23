const n=`date,value\r
2017-01-03,15000\r
2017-01-13,15000\r
2017-02-25,52700\r
2017-03-07,49500\r
2017-03-14,53100\r
2017-03-17,53100\r
2017-03-27,48700\r
2017-04-03,53900\r
2017-04-06,53900\r
2017-04-23,48900\r
2017-05-03,48900\r
2017-05-16,56000\r
2017-05-23,56000\r
2017-05-26,56100\r
2017-06-02,52800\r
2017-06-05,52800\r
2017-06-15,55000\r
2017-06-22,55000\r
2017-06-25,47000\r
2017-07-02,48900\r
2017-07-05,46500\r
2017-07-07,46900\r
2017-07-12,46900\r
2017-07-17,47700\r
2017-07-22,47700\r
2017-07-27,47700\r
2017-08-04,61900\r
2017-08-06,61900\r
2017-08-14,54300\r
2017-08-19,55900\r
2017-08-21,52300\r
2017-08-24,54400\r
2017-08-26,54500\r
2017-08-29,51200\r
2017-09-03,52000\r
2017-09-20,47800\r
2017-09-23,47800\r
2017-09-28,47800\r
2017-10-05,50600\r
2017-10-10,56500\r
2017-10-13,51200\r
2017-10-15,50800\r
2017-10-18,49700\r
2017-10-25,48800\r
2017-10-28,45700\r
2017-10-30,49400\r
2017-11-04,49400\r
2017-11-07,48600\r
2017-11-17,49200\r
2017-11-19,32800\r
2017-11-22,21500\r
2017-11-27,22700\r
2017-11-29,17400\r
2017-12-07,18800\r
2017-12-19,41900\r
2017-12-24,43100\r
2017-12-27,43100\r
2018-02-25,48500\r
2018-02-27,48500\r
2018-03-14,51000\r
2018-03-17,51000\r
2018-03-22,56800\r
2018-03-29,55300\r
2018-04-01,55300\r
2018-04-06,49300\r
2018-04-16,49300\r
2018-04-18,58400\r
2018-04-21,58600\r
2018-04-23,58100\r
2018-04-26,58100\r
2018-05-06,53200\r
2018-05-08,53200\r
2018-05-11,54800\r
2018-05-13,54800\r
2018-05-18,53600\r
2018-05-21,53600\r
2018-05-23,52300\r
2018-05-26,57100\r
2018-06-02,53300\r
2018-06-20,49800\r
2018-06-22,51700\r
2018-06-25,48100\r
2018-06-27,49300\r
2018-07-02,47100\r
2018-07-07,47500\r
2018-07-10,47700\r
2018-07-12,47900\r
2018-07-15,51600\r
2018-07-17,51600\r
2018-07-25,53100\r
2018-07-27,52100\r
2018-07-30,52100\r
2018-08-01,52100\r
2018-08-04,53000\r
2018-08-06,53600\r
2018-08-11,51300\r
2018-08-16,54700\r
2018-08-19,51600\r
2018-08-21,48600\r
2018-08-26,49300\r
2018-09-03,46600\r
2018-09-05,46600\r
2018-09-08,53400\r
2018-09-10,49900\r
2018-09-13,49900\r
2018-09-18,54400\r
2018-09-20,52700\r
2018-09-23,50400\r
2018-09-25,51000\r
2018-09-28,50000\r
2018-09-30,50000\r
2018-10-05,47700\r
2018-10-08,48500\r
2018-10-13,45900\r
2018-10-18,21700\r
2018-10-20,22700\r
2018-10-23,19100\r
2018-10-25,16800\r
2018-10-30,16800\r
2018-11-04,15000\r
2018-11-14,18800\r
2018-11-19,19600\r
2018-11-22,17800\r
2018-11-29,18200\r
2018-12-19,33700\r
2018-12-27,33700\r
2018-12-29,42600\r
2019-01-01,40300\r
2019-01-03,43700\r
2019-01-06,43500\r
2019-01-11,43500\r
2019-01-16,43500\r
2019-02-12,47700\r
2019-02-15,47700\r
2019-02-17,42600\r
2019-02-20,42600\r
2019-02-22,42900\r
2019-02-25,40900\r
2019-02-27,42900\r
2019-03-12,46900\r
2019-03-22,47200\r
2019-03-24,48700\r
2019-03-27,47300\r
2019-03-29,48200\r
2019-04-01,46700\r
2019-04-13,44800\r
2019-04-18,53800\r
2019-05-01,49900\r
2019-05-06,55100\r
2019-05-13,48700\r
2019-05-16,48900\r
2019-05-23,50300\r
2019-05-31,54600\r
2019-06-02,52400\r
2019-06-17,46600\r
2019-06-25,46600\r
2019-06-27,46600\r
2019-06-30,46600\r
2019-07-02,46600\r
2019-07-05,47900\r
2019-07-07,48300\r
2019-07-10,48100\r
2019-07-15,48300\r
2019-07-17,48000\r
2019-07-20,48000\r
2019-07-22,48100\r
2019-07-25,49600\r
2019-08-04,47800\r
2019-08-09,50700\r
2019-08-14,46100\r
2019-08-16,46100\r
2019-08-21,46100\r
2019-08-24,48900\r
2019-08-26,49400\r
2019-08-29,45500\r
2019-08-31,45600\r
2019-09-03,45700\r
2019-09-13,44600\r
2019-09-15,45300\r
2019-09-18,44300\r
2019-09-20,46700\r
2019-09-30,49300\r
2019-10-03,49000\r
2019-10-13,47400\r
2019-10-15,47400\r
2019-10-25,47400\r
2019-11-22,16700\r
2019-11-24,16700\r
2019-12-02,16700\r
2019-12-04,16700\r
2019-12-17,47500\r
2019-12-22,47500\r
2019-12-29,48600\r
2020-01-06,36300\r
2020-01-11,45300\r
2020-01-16,41200\r
2020-01-18,41200\r
2020-01-21,41200\r
2020-02-07,46000\r
2020-02-12,46000\r
2020-02-15,44600\r
2020-02-20,44800\r
2020-02-22,44600\r
2020-03-13,48200\r
2020-03-18,48200\r
2020-03-21,53900\r
2020-03-23,53900\r
2020-03-26,53900\r
2020-03-28,48800\r
2020-03-31,46700\r
2020-04-02,46700\r
2020-04-05,47900\r
2020-04-07,44800\r
2020-04-10,47800\r
2020-04-12,47800\r
2020-04-15,51200\r
2020-05-07,48200\r
2020-05-17,48200\r
2020-05-20,53000\r
2020-05-22,53000\r
2020-05-25,56400\r
2020-05-27,48200\r
2020-05-30,52400\r
2020-06-01,52400\r
2020-06-26,52300\r
2020-06-29,55200\r
2020-07-01,55200\r
2020-07-04,55400\r
2020-07-09,54000\r
2020-07-11,54000\r
2020-07-14,56400\r
2020-07-19,55600\r
2020-07-21,52600\r
2020-07-24,52300\r
2020-07-29,49700\r
2020-07-31,48000\r
2020-08-05,44200\r
2020-08-08,45900\r
2020-08-10,45300\r
2020-08-15,47300\r
2020-08-20,49700\r
2020-08-25,48000\r
2020-09-04,40600\r
2020-09-07,40000\r
2020-09-09,40000\r
2020-09-12,46300\r
2020-09-14,41400\r
2020-09-17,43300\r
2020-11-06,21700\r
2020-11-08,21700\r
2020-11-11,23800\r
2020-11-18,18200\r
2020-11-21,18200\r
2020-11-23,18400\r
2020-11-28,16000\r
2020-12-18,48100\r
2020-12-28,48100\r
2021-01-10,33200\r
2021-02-11,50600\r
2021-02-14,50600\r
2021-02-19,45100\r
2021-02-21,47500\r
2021-02-24,43700\r
2021-02-26,46800\r
2021-03-01,45200\r
2021-03-06,44200\r
2021-03-21,52400\r
2021-03-23,53700\r
2021-03-26,53700\r
2021-03-28,52200\r
2021-03-31,52500\r
2021-04-02,51600\r
2021-04-05,50700\r
2021-04-07,50700\r
2021-04-15,49100\r
2021-04-17,49100\r
2021-04-22,51100\r
2021-04-27,50600\r
2021-05-27,45700\r
2021-05-30,45700\r
2021-06-01,45900\r
2021-06-09,43100\r
2021-06-11,43100\r
2021-06-14,47200\r
2021-06-16,46800\r
2021-06-26,46600\r
2021-07-01,49700\r
2021-07-11,44400\r
2021-07-19,53500\r
2021-07-21,43000\r
2021-07-29,47000\r
2021-08-25,47700\r
2021-08-28,47700\r
2021-08-30,45700\r
2021-09-02,45700\r
2021-09-07,38900\r
2021-09-22,39500\r
2021-09-24,42000\r
2021-09-27,42000\r
2021-10-02,42000\r
2021-10-07,44000\r
2021-10-09,44000\r
2021-10-12,44300\r
2021-10-14,43500\r
2021-10-17,43500\r
2021-10-19,43700\r
2021-10-22,43700\r
2021-10-24,42000\r
2021-10-27,31000\r
2021-11-06,22000\r
2021-11-11,14300\r
2021-11-18,15200\r
2021-11-23,11600\r
2021-12-16,29800\r
2021-12-18,37300\r
2021-12-21,34400\r
2021-12-23,37800\r
2022-01-12,37300\r
2022-01-15,41300\r
2022-01-17,37300\r
2022-01-22,38700\r
2022-01-25,38000\r
2022-01-27,36800\r
2022-01-30,37600\r
2022-02-09,46200\r
2022-02-11,44200\r
2022-02-19,44200\r
2022-03-08,43700\r
2022-03-23,43900\r
2022-03-26,45300\r
2022-04-10,45800\r
2022-04-15,50600\r
2022-04-17,46400\r
2022-04-22,51300\r
2022-04-27,46900\r
2022-04-30,49800\r
2022-05-02,49800\r
2022-05-07,50100\r
2022-05-10,51400\r
2022-05-15,52800\r
2022-05-17,51600\r
2022-05-27,49400\r
2022-05-30,49500\r
2022-06-01,48500\r
2022-06-04,49300\r
2022-06-06,52400\r
2022-06-11,51900\r
2022-06-14,50500\r
2022-06-19,47800\r
2022-06-21,47800\r
2022-06-29,49700\r
2022-07-01,48300\r
2022-07-04,48800\r
2022-07-06,46400\r
2022-07-11,43000\r
2022-07-14,45800\r
2022-07-16,44100\r
2022-07-19,46200\r
2022-07-21,43900\r
2022-07-24,45700\r
2022-07-26,43700\r
2022-07-31,43400\r
2022-08-03,45100\r
2022-08-08,44400\r
2022-08-10,45100\r
2022-08-13,45900\r
2022-08-25,44900\r
2022-08-28,48600\r
2022-08-30,45100\r
2022-09-02,45100\r
2022-09-04,47000\r
2022-09-12,49700\r
2022-09-19,50000\r
2022-09-22,48200\r
2022-10-04,44300\r
2022-10-09,45900\r
2022-10-12,45900\r
2022-10-19,44300\r
2022-10-22,45500\r
2022-10-24,45600\r
2022-11-11,42000\r
2022-11-13,49200\r
2022-11-23,47200\r
2022-12-06,39500\r
2022-12-08,39500\r
2022-12-11,44800\r
2022-12-13,44800\r
2023-02-04,42600\r
2023-02-06,43700\r
2023-02-09,43000\r
2023-02-11,42800\r
2023-02-14,41700\r
2023-02-16,42200\r
2023-02-26,42100\r
2023-03-06,46200\r
2023-03-13,49700\r
2023-03-16,49000\r
2023-03-28,53900\r
2023-04-05,53900\r
2023-04-07,53900\r
2023-05-02,43600\r
`;export{n as default};
