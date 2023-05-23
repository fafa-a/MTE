const r=`date,value\r
2017-01-03,46200\r
2017-01-10,46200\r
2017-01-13,49000\r
2017-02-19,53600\r
2017-02-22,57500\r
2017-03-01,57500\r
2017-03-11,55200\r
2017-03-14,55200\r
2017-03-21,55200\r
2017-04-03,58500\r
2017-04-10,58500\r
2017-04-20,55100\r
2017-04-23,58600\r
2017-05-03,57600\r
2017-05-23,58200\r
2017-05-30,58200\r
2017-06-02,58200\r
2017-06-09,57500\r
2017-06-12,58000\r
2017-06-19,56000\r
2017-06-22,56600\r
2017-06-29,59000\r
2017-07-04,59600\r
2017-07-07,58000\r
2017-07-09,58000\r
2017-07-12,56500\r
2017-07-14,56700\r
2017-07-17,56300\r
2017-07-19,55700\r
2017-07-22,55700\r
2017-07-24,56800\r
2017-07-27,57100\r
2017-07-29,57200\r
2017-08-03,55500\r
2017-08-06,55600\r
2017-08-11,48800\r
2017-08-13,46700\r
2017-08-18,47300\r
2017-08-21,45900\r
2017-08-23,47200\r
2017-08-26,47300\r
2017-09-05,44900\r
2017-09-20,45400\r
2017-09-22,45400\r
2017-09-27,45400\r
2017-10-05,41900\r
2017-10-07,45500\r
2017-10-10,43100\r
2017-10-12,43200\r
2017-10-15,43200\r
2017-10-17,43400\r
2017-10-22,42700\r
2017-10-25,41900\r
2017-10-27,41900\r
2017-10-30,42100\r
2017-11-01,42100\r
2017-11-09,45300\r
2017-11-14,46800\r
2017-11-16,44900\r
2017-11-19,44600\r
2017-11-21,44300\r
2017-11-26,42800\r
2017-11-29,43800\r
2017-12-06,45700\r
2017-12-09,45700\r
2017-12-14,40900\r
2017-12-16,40900\r
2017-12-24,44400\r
2017-12-26,44400\r
2018-01-23,42400\r
2018-01-28,50500\r
2018-01-30,50500\r
2018-02-02,48700\r
2018-02-04,54300\r
2018-02-07,54300\r
2018-02-09,52400\r
2018-02-12,52400\r
2018-02-22,50900\r
2018-02-24,50900\r
2018-02-27,53000\r
2018-03-06,52300\r
2018-03-09,52300\r
2018-03-14,55300\r
2018-03-16,58800\r
2018-03-19,58800\r
2018-03-21,55600\r
2018-03-24,55600\r
2018-03-26,58000\r
2018-04-18,57600\r
2018-04-20,59900\r
2018-04-23,57300\r
2018-04-25,59000\r
2018-05-03,58500\r
2018-05-05,61400\r
2018-05-08,59700\r
2018-05-18,60900\r
2018-05-20,61500\r
2018-05-23,61500\r
2018-05-25,59300\r
2018-06-09,58500\r
2018-06-14,60000\r
2018-06-19,57800\r
2018-06-22,56800\r
2018-06-24,58600\r
2018-06-27,56300\r
2018-06-29,57700\r
2018-07-02,57200\r
2018-07-04,57700\r
2018-07-07,57700\r
2018-07-09,56200\r
2018-07-12,57400\r
2018-07-17,57900\r
2018-07-19,56300\r
2018-07-22,54600\r
2018-07-27,56900\r
2018-07-29,51400\r
2018-08-01,49800\r
2018-08-03,49900\r
2018-08-06,49900\r
2018-08-08,48700\r
2018-08-11,50100\r
2018-08-16,50300\r
2018-08-21,51000\r
2018-08-23,51000\r
2018-08-26,48400\r
2018-08-28,48100\r
2018-08-31,48100\r
2018-09-02,46700\r
2018-09-05,47800\r
2018-09-07,47400\r
2018-09-10,46900\r
2018-09-12,46900\r
2018-09-17,43600\r
2018-09-20,42700\r
2018-09-22,42100\r
2018-09-25,42100\r
2018-09-27,43100\r
2018-10-02,42900\r
2018-10-05,40600\r
2018-10-07,40600\r
2018-10-10,40000\r
2018-10-12,40000\r
2018-10-17,39800\r
2018-10-20,40700\r
2018-10-22,39700\r
2018-10-25,40000\r
2018-10-30,37000\r
2018-11-04,36900\r
2018-11-16,46200\r
2018-11-19,49100\r
2018-11-24,49100\r
2018-12-11,46100\r
2018-12-14,46400\r
2018-12-24,47200\r
2018-12-29,49600\r
2019-01-03,46100\r
2019-01-05,46100\r
2019-01-10,46100\r
2019-01-15,46100\r
2019-01-20,13600\r
2019-01-23,13600\r
2019-01-25,39600\r
2019-01-28,39600\r
2019-01-30,39600\r
2019-02-04,38700\r
2019-02-14,48000\r
2019-02-17,50900\r
2019-02-19,50900\r
2019-02-22,50900\r
2019-02-27,50300\r
2019-03-01,51200\r
2019-03-11,53400\r
2019-03-14,53400\r
2019-03-16,53700\r
2019-03-19,51700\r
2019-03-21,54800\r
2019-03-24,53500\r
2019-03-26,54400\r
2019-03-29,53900\r
2019-03-31,54200\r
2019-04-05,53400\r
2019-04-08,55000\r
2019-04-13,53400\r
2019-04-15,51900\r
2019-04-18,53600\r
2019-04-20,55900\r
2019-04-30,55600\r
2019-05-03,55600\r
2019-05-10,56300\r
2019-05-13,55500\r
2019-05-15,56200\r
2019-05-23,56100\r
2019-05-25,56100\r
2019-05-30,54500\r
2019-06-02,56800\r
2019-06-04,58700\r
2019-06-07,58700\r
2019-06-12,57400\r
2019-06-22,56700\r
2019-06-24,58500\r
2019-06-27,56500\r
2019-06-29,57000\r
2019-07-02,56000\r
2019-07-04,56000\r
2019-07-07,56000\r
2019-07-12,55400\r
2019-07-14,53700\r
2019-07-17,51900\r
2019-07-19,48700\r
2019-07-22,45700\r
2019-07-24,45800\r
2019-07-29,44700\r
2019-08-03,41900\r
2019-08-06,41700\r
2019-08-08,39700\r
2019-08-11,40600\r
2019-08-13,40600\r
2019-08-16,39800\r
2019-08-18,39800\r
2019-08-21,39400\r
2019-08-23,36400\r
2019-08-26,35000\r
2019-08-31,33200\r
2019-09-02,32100\r
2019-09-05,33400\r
2019-09-07,32600\r
2019-09-12,30200\r
2019-09-15,30900\r
2019-09-17,30300\r
2019-09-20,28800\r
2019-09-25,28300\r
2019-09-27,28900\r
2019-09-30,30200\r
2019-10-02,29500\r
2019-10-05,32400\r
2019-10-07,29900\r
2019-10-10,29900\r
2019-10-15,31200\r
2019-12-06,44400\r
2019-12-14,44400\r
2019-12-19,44400\r
2019-12-21,49000\r
2019-12-26,48500\r
2019-12-29,48500\r
2020-01-08,42900\r
2020-01-10,46000\r
2020-01-13,46000\r
2020-01-18,43100\r
2020-01-25,46200\r
2020-02-12,52000\r
2020-02-14,52000\r
2020-02-19,52000\r
2020-02-22,52500\r
2020-02-24,50900\r
2020-03-03,51900\r
2020-03-08,51900\r
2020-03-10,51800\r
2020-03-13,53800\r
2020-03-15,53800\r
2020-03-18,55400\r
2020-03-20,53700\r
2020-03-25,54000\r
2020-03-28,53800\r
2020-04-02,54400\r
2020-04-04,53700\r
2020-04-07,55800\r
2020-04-09,56400\r
2020-04-14,55200\r
2020-04-24,56200\r
2020-04-29,54400\r
2020-05-04,55900\r
2020-05-07,58000\r
2020-05-09,58000\r
2020-05-17,56700\r
2020-05-19,57600\r
2020-05-22,58400\r
2020-05-24,58600\r
2020-05-27,58600\r
2020-05-29,57700\r
2020-06-01,57700\r
2020-06-03,58400\r
2020-06-06,56900\r
2020-06-08,58200\r
2020-06-11,54800\r
2020-06-21,55500\r
2020-06-23,57500\r
2020-06-26,56300\r
2020-06-28,56300\r
2020-07-01,58000\r
2020-07-03,57600\r
2020-07-06,57600\r
2020-07-08,57700\r
2020-07-11,57500\r
2020-07-13,57200\r
2020-07-16,57200\r
2020-07-18,56200\r
2020-07-21,55500\r
2020-07-23,55500\r
2020-07-26,53200\r
2020-07-28,51200\r
2020-07-31,50600\r
2020-08-02,50600\r
2020-08-05,46500\r
2020-08-07,44200\r
2020-08-10,44600\r
2020-08-15,42900\r
2020-08-20,40800\r
2020-08-22,41700\r
2020-08-25,40400\r
2020-08-27,38700\r
2020-09-01,35800\r
2020-09-04,37500\r
2020-09-06,35500\r
2020-09-11,36400\r
2020-09-14,36800\r
2020-09-16,34800\r
2020-09-19,38200\r
2020-09-29,39600\r
2020-10-11,25800\r
2020-10-14,25800\r
2020-10-16,25800\r
2020-10-19,25800\r
2020-10-24,25800\r
2020-10-26,50700\r
2020-10-31,50700\r
2020-11-05,46500\r
2020-11-10,47400\r
2020-11-18,45800\r
2020-11-23,45300\r
2020-11-25,45300\r
2020-11-30,45400\r
2020-12-03,45400\r
2020-12-13,43800\r
2020-12-28,45600\r
2021-01-14,45500\r
2021-01-19,45800\r
2021-01-24,45700\r
2021-02-03,47300\r
2021-02-11,50100\r
2021-02-13,52900\r
2021-02-21,52900\r
2021-02-23,51900\r
2021-02-28,53600\r
2021-03-05,54500\r
2021-03-08,53400\r
2021-03-10,53400\r
2021-03-20,54900\r
2021-03-23,57600\r
2021-03-25,54800\r
2021-03-28,57100\r
2021-03-30,56500\r
2021-04-02,57000\r
2021-04-04,57600\r
2021-04-07,58300\r
2021-04-09,58000\r
2021-04-14,57500\r
2021-04-17,56100\r
2021-04-19,57900\r
2021-04-22,57900\r
2021-04-24,56200\r
2021-05-07,56700\r
2021-05-09,56700\r
2021-05-12,61400\r
2021-05-14,57500\r
2021-05-19,58300\r
2021-05-24,58400\r
2021-05-27,58800\r
2021-05-29,55300\r
2021-06-01,57100\r
2021-06-03,57100\r
2021-06-08,41900\r
2021-06-11,55900\r
2021-06-13,57100\r
2021-06-16,55700\r
2021-06-18,55700\r
2021-06-21,55700\r
2021-06-23,57400\r
2021-06-26,53700\r
2021-07-01,57000\r
2021-07-11,56500\r
2021-07-18,54900\r
2021-07-21,53700\r
2021-07-23,52900\r
2021-07-26,52900\r
2021-07-28,52900\r
2021-08-02,53700\r
2021-08-10,41500\r
2021-08-12,41500\r
2021-08-15,38400\r
2021-08-17,37900\r
2021-08-20,38400\r
2021-08-22,37900\r
2021-08-25,38100\r
2021-08-27,37800\r
2021-08-30,36200\r
2021-09-01,35600\r
2021-09-04,35600\r
2021-09-06,34600\r
2021-09-11,34500\r
2021-09-21,34200\r
2021-09-24,33900\r
2021-09-29,33900\r
2021-10-01,33900\r
2021-10-11,42100\r
2021-10-14,43400\r
2021-10-16,39900\r
2021-10-21,39900\r
2021-10-24,41800\r
2021-10-26,37400\r
2021-11-13,48300\r
2021-11-18,48300\r
2021-11-20,48300\r
2021-11-30,43100\r
2021-12-03,40400\r
2021-12-18,44700\r
2021-12-20,44700\r
2021-12-23,44700\r
2021-12-25,44700\r
2022-01-12,46100\r
2022-01-14,45200\r
2022-01-17,41900\r
2022-01-19,41500\r
2022-01-22,42700\r
2022-01-24,42000\r
2022-01-27,43100\r
2022-01-29,43300\r
2022-02-01,43900\r
2022-02-08,45300\r
2022-02-11,45300\r
2022-02-13,42300\r
2022-02-18,42300\r
2022-02-26,50600\r
2022-02-28,49900\r
2022-03-03,49900\r
2022-03-05,50000\r
2022-03-08,49600\r
2022-04-04,56500\r
2022-04-09,56500\r
2022-04-14,57000\r
2022-04-19,55800\r
2022-04-22,54600\r
2022-04-27,55600\r
2022-05-02,59800\r
2022-05-04,58700\r
2022-05-07,58700\r
2022-05-12,58600\r
2022-05-14,58700\r
2022-05-17,57800\r
2022-05-19,57800\r
2022-05-22,57500\r
2022-05-27,58100\r
2022-05-29,56100\r
2022-06-01,56200\r
2022-06-06,56300\r
2022-06-11,55300\r
2022-06-13,56700\r
2022-06-16,54600\r
2022-06-21,55100\r
2022-06-23,52800\r
2022-06-26,52800\r
2022-06-28,52500\r
2022-07-01,53600\r
2022-07-03,53000\r
2022-07-06,53000\r
2022-07-08,51900\r
2022-07-11,50600\r
2022-07-13,50400\r
2022-07-16,49200\r
2022-07-18,46900\r
2022-07-21,45300\r
2022-07-23,45600\r
2022-07-26,43600\r
2022-07-28,41100\r
2022-07-31,40200\r
2022-08-02,37100\r
2022-08-05,37300\r
2022-08-07,35400\r
2022-08-10,35200\r
2022-08-12,34300\r
2022-08-15,33400\r
2022-08-20,33700\r
2022-08-22,31900\r
2022-08-25,30900\r
2022-08-27,29800\r
2022-09-01,29800\r
2022-09-04,30900\r
2022-09-11,29700\r
2022-09-16,29700\r
2022-09-19,29000\r
2022-09-21,28700\r
2022-09-29,29900\r
2022-10-04,28800\r
2022-10-06,29200\r
2022-10-11,28200\r
2022-10-16,28700\r
2022-10-19,27600\r
2022-10-26,35900\r
2022-10-31,35900\r
2022-11-05,35900\r
2022-11-10,51100\r
2022-11-13,51100\r
2022-11-18,51100\r
2022-11-20,51100\r
2022-11-25,45100\r
2022-11-30,45100\r
2022-12-05,43900\r
2022-12-08,43900\r
2022-12-10,43900\r
2023-01-09,40600\r
2023-01-12,40600\r
2023-01-19,40600\r
2023-01-24,42500\r
2023-01-27,42500\r
2023-01-29,44200\r
2023-02-01,44200\r
2023-02-03,42400\r
2023-02-06,43200\r
2023-02-08,42000\r
2023-02-11,43000\r
2023-02-13,44000\r
2023-02-16,45900\r
2023-02-18,45200\r
2023-02-21,46500\r
2023-02-26,47700\r
2023-03-03,54800\r
2023-03-05,51800\r
2023-03-13,53400\r
2023-03-15,50700\r
2023-03-28,53300\r
2023-03-30,53300\r
2023-04-04,56200\r
2023-04-07,56200\r
2023-04-19,54700\r
2023-04-24,54700\r
2023-05-02,56100\r
`;export{r as default};
