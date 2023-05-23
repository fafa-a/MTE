const r=`date,value\r
2017-01-03,46200\r
2017-01-13,48200\r
2017-02-19,53600\r
2017-02-22,55800\r
2017-03-11,55200\r
2017-04-03,58500\r
2017-04-20,55100\r
2017-04-23,57600\r
2017-05-23,58200\r
2017-06-09,57500\r
2017-06-12,55000\r
2017-06-19,54500\r
2017-07-04,57400\r
2017-07-07,55400\r
2017-07-12,57000\r
2017-07-14,48600\r
2017-07-17,56100\r
2017-07-27,56800\r
2017-07-29,55700\r
2017-08-03,47300\r
2017-08-06,47000\r
2017-08-13,44700\r
2017-08-18,46000\r
2017-08-21,46000\r
2017-08-23,44800\r
2017-08-26,44900\r
2017-09-20,45400\r
2017-10-05,41900\r
2017-10-07,43800\r
2017-10-10,43100\r
2017-10-12,41100\r
2017-10-17,41900\r
2017-10-30,42100\r
2017-11-14,44500\r
2017-11-16,42800\r
2017-11-19,43900\r
2017-11-21,41000\r
2017-11-29,44700\r
2017-12-06,40900\r
2017-12-24,44400\r
2018-01-23,42400\r
2018-01-28,50500\r
2018-02-02,52400\r
2018-02-22,50900\r
2018-02-27,52300\r
2018-03-14,55300\r
2018-03-16,57800\r
2018-04-18,57600\r
2018-04-20,56900\r
2018-04-23,57200\r
2018-04-25,58600\r
2018-05-03,59700\r
2018-05-18,60900\r
2018-05-20,57900\r
2018-05-25,59200\r
2018-06-09,58500\r
2018-06-14,58900\r
2018-06-19,55800\r
2018-06-22,57300\r
2018-06-24,57300\r
2018-06-29,57400\r
2018-07-02,57000\r
2018-07-04,56800\r
2018-07-07,57200\r
2018-07-09,56300\r
2018-07-19,54600\r
2018-07-27,53500\r
2018-07-29,49200\r
2018-08-01,48900\r
2018-08-03,48000\r
2018-08-16,50300\r
2018-08-21,48300\r
2018-08-26,47800\r
2018-08-28,45500\r
2018-09-02,46700\r
2018-09-05,46700\r
2018-09-07,45600\r
2018-09-10,43300\r
2018-09-17,42300\r
2018-09-20,41900\r
2018-09-22,40400\r
2018-09-27,39300\r
2018-10-05,40000\r
2018-10-17,39800\r
2018-10-20,38700\r
2018-10-22,37200\r
2018-10-25,36900\r
2018-11-16,46200\r
2018-11-19,49000\r
2018-12-11,46100\r
2018-12-14,44900\r
2018-12-24,46900\r
2018-12-29,48200\r
2019-01-03,46100\r
2019-01-15,13600\r
2019-01-25,38700\r
2019-02-14,48000\r
2019-02-17,50600\r
2019-02-27,50500\r
2019-03-01,53400\r
2019-03-16,51700\r
2019-03-21,53500\r
2019-03-24,54300\r
2019-03-26,52600\r
2019-03-29,54800\r
2019-03-31,52100\r
2019-04-13,54800\r
2019-04-15,49400\r
2019-04-18,55800\r
2019-04-20,56600\r
2019-04-30,54800\r
2019-05-13,54100\r
2019-05-15,54500\r
2019-06-02,56800\r
2019-06-04,55000\r
2019-06-12,58100\r
2019-06-22,56700\r
2019-06-24,57100\r
2019-06-27,53300\r
2019-06-29,54200\r
2019-07-02,55900\r
2019-07-04,51200\r
2019-07-14,48800\r
2019-07-19,44400\r
2019-07-22,45500\r
2019-07-24,39700\r
2019-07-29,42600\r
2019-08-03,38300\r
2019-08-06,39600\r
2019-08-08,38900\r
2019-08-16,35800\r
2019-08-21,34300\r
2019-08-23,31700\r
2019-08-26,32200\r
2019-08-31,32000\r
2019-09-02,32000\r
2019-09-05,34200\r
2019-09-07,28700\r
2019-09-12,28200\r
2019-09-15,28200\r
2019-09-17,28800\r
2019-09-27,30000\r
2019-09-30,30400\r
2019-12-06,44400\r
2019-12-21,48500\r
2020-01-08,42900\r
2020-01-10,43000\r
2020-01-18,43100\r
2020-02-12,51800\r
2020-02-22,48900\r
2020-02-24,51800\r
2020-03-13,53800\r
2020-03-18,53200\r
2020-03-20,52100\r
2020-03-25,51500\r
2020-03-28,57300\r
2020-04-02,56000\r
2020-04-04,52600\r
2020-04-07,57900\r
2020-04-09,55600\r
2020-04-14,54400\r
2020-05-04,55900\r
2020-05-07,56600\r
2020-05-17,56300\r
2020-05-19,58000\r
2020-05-22,57100\r
2020-05-24,57100\r
2020-05-29,54800\r
2020-06-21,55500\r
2020-06-23,56200\r
2020-06-26,58300\r
2020-07-08,55900\r
2020-07-11,55700\r
2020-07-13,56300\r
2020-07-18,53000\r
2020-07-21,52500\r
2020-07-23,50400\r
2020-07-28,44600\r
2020-07-31,44700\r
2020-08-05,43300\r
2020-08-07,37900\r
2020-08-15,40000\r
2020-08-25,38100\r
2020-08-27,36300\r
2020-09-01,35000\r
2020-09-04,35800\r
2020-09-06,35100\r
2020-09-14,36100\r
2020-09-16,34400\r
2020-10-11,25800\r
2020-10-26,50700\r
2020-10-31,45700\r
2020-11-05,45300\r
2020-11-18,42700\r
2020-11-23,45000\r
2020-12-13,42200\r
2020-12-28,45000\r
2021-01-14,45500\r
2021-01-19,44500\r
2021-01-24,47300\r
2021-02-11,50100\r
2021-02-13,51700\r
2021-02-28,53200\r
2021-03-05,53400\r
2021-03-08,54600\r
2021-03-10,51800\r
2021-03-20,54900\r
2021-03-23,57000\r
2021-03-25,54500\r
2021-03-28,56400\r
2021-03-30,58700\r
2021-04-02,57500\r
2021-04-04,57200\r
2021-04-14,56100\r
2021-04-19,57300\r
2021-04-24,55000\r
2021-05-07,56700\r
2021-05-12,61100\r
2021-05-14,56600\r
2021-05-19,57000\r
2021-05-27,57100\r
2021-05-29,41900\r
2021-06-11,55900\r
2021-06-13,55900\r
2021-06-16,53700\r
2021-06-26,52300\r
2021-07-01,55400\r
2021-07-11,53200\r
2021-07-18,53700\r
2021-07-21,52600\r
2021-07-23,53600\r
2021-08-10,37400\r
2021-08-15,37300\r
2021-08-17,38400\r
2021-08-20,37500\r
2021-08-25,35700\r
2021-08-27,35500\r
2021-08-30,35100\r
2021-09-01,32700\r
2021-09-11,34100\r
2021-09-21,33200\r
2021-09-24,32200\r
2021-10-11,42100\r
2021-10-14,40600\r
2021-10-16,37400\r
2021-11-13,48300\r
2021-11-30,40400\r
2021-12-18,44700\r
2022-01-12,46000\r
2022-01-14,37900\r
2022-01-17,41500\r
2022-01-24,42300\r
2022-01-27,43200\r
2022-02-01,44200\r
2022-02-08,42300\r
2022-02-26,50200\r
2022-02-28,49200\r
2022-03-05,48400\r
2022-04-04,56500\r
2022-04-14,54800\r
2022-04-19,54600\r
2022-04-22,55400\r
2022-04-27,58700\r
2022-05-12,58600\r
2022-05-14,57400\r
2022-05-17,57700\r
2022-05-22,56600\r
2022-05-27,58700\r
2022-05-29,54900\r
2022-06-06,56000\r
2022-06-11,54900\r
2022-06-16,52800\r
2022-06-28,52500\r
2022-07-03,51900\r
2022-07-08,49600\r
2022-07-11,48900\r
2022-07-13,46800\r
2022-07-16,47200\r
2022-07-18,42300\r
2022-07-21,40900\r
2022-07-26,41000\r
2022-07-31,36900\r
2022-08-02,35000\r
2022-08-05,34300\r
2022-08-07,34800\r
2022-08-10,34100\r
2022-08-12,31800\r
2022-08-22,29900\r
2022-08-25,30200\r
2022-09-11,27900\r
2022-09-19,28700\r
2022-09-21,29400\r
2022-10-04,28800\r
2022-10-06,27900\r
2022-10-11,27600\r
2022-10-26,35900\r
2022-11-10,51100\r
2022-11-20,45100\r
2022-12-05,43900\r
2023-01-09,40600\r
2023-01-24,42500\r
2023-01-29,42600\r
2023-02-03,41900\r
2023-02-08,41500\r
2023-02-11,46400\r
2023-02-13,42800\r
2023-02-16,47100\r
2023-02-18,46000\r
2023-02-26,53100\r
2023-03-03,53200\r
2023-03-05,50700\r
2023-03-28,53300\r
2023-04-04,55900\r
2023-04-19,54700\r
2023-05-02,56100\r
`;export{r as default};
