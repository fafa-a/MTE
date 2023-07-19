const r=`date,value\r
2017-02-22,48600\r
2017-03-04,48600\r
2017-03-14,50200\r
2017-05-23,30700\r
2017-05-30,30700\r
2017-06-02,31600\r
2017-06-12,51900\r
2017-06-19,51900\r
2017-06-22,51900\r
2017-07-07,51300\r
2017-07-09,51300\r
2017-07-12,59900\r
2017-07-14,59900\r
2017-07-17,59900\r
2017-07-22,56700\r
2017-08-21,53000\r
2017-08-23,53000\r
2017-08-26,59400\r
2017-09-05,52300\r
2017-10-05,49400\r
2017-10-07,49400\r
2017-10-10,49400\r
2017-10-12,49400\r
2017-10-15,50600\r
2017-10-17,50200\r
2017-10-22,50200\r
2017-10-25,50200\r
2018-03-14,46900\r
2018-03-16,46900\r
2018-03-19,46900\r
2018-03-21,46900\r
2018-03-24,46900\r
2018-06-22,53600\r
2018-06-24,53600\r
2018-06-27,53600\r
2018-06-29,53600\r
2018-07-02,55400\r
2018-07-17,51700\r
2018-07-19,51700\r
2018-07-22,51700\r
2018-07-24,51700\r
2018-07-27,61900\r
2018-07-29,61900\r
2018-08-01,61900\r
2018-08-03,61900\r
2018-08-06,61900\r
2018-08-11,61000\r
2018-08-16,65500\r
2018-08-18,65500\r
2018-08-21,61400\r
2018-08-23,64600\r
2018-08-26,55400\r
2018-08-28,65100\r
2018-08-31,65100\r
2018-09-02,54600\r
2018-09-05,55400\r
2018-09-07,39400\r
2018-09-10,59000\r
2018-09-12,59000\r
2018-09-17,53700\r
2018-09-20,57100\r
2018-09-22,55700\r
2018-09-25,62100\r
2018-09-27,62100\r
2018-10-02,56200\r
2018-10-05,56900\r
2018-10-10,53100\r
2018-10-12,53100\r
2018-10-15,53100\r
2018-10-20,51100\r
2018-10-22,51100\r
2018-10-25,51100\r
2018-10-30,51100\r
2019-02-17,7100\r
2019-02-19,7100\r
2019-02-22,17700\r
2019-02-24,17700\r
2019-02-27,14600\r
2019-03-04,37300\r
2019-03-16,32500\r
2019-03-19,32500\r
2019-03-24,47500\r
2019-03-26,47500\r
2019-03-29,47500\r
2019-03-31,47500\r
2019-04-05,47500\r
2019-04-13,52600\r
2019-04-15,52600\r
2019-04-18,52600\r
2019-04-20,52600\r
2019-04-23,52600\r
2019-05-23,60900\r
2019-05-25,60900\r
2019-05-30,60900\r
2019-06-02,61500\r
2019-06-04,61500\r
2019-06-07,60500\r
2019-06-12,61600\r
2019-06-27,59600\r
2019-06-29,59600\r
2019-07-02,59600\r
2019-07-04,59600\r
2019-07-07,60600\r
2019-07-09,60600\r
2019-07-12,60600\r
2019-07-14,51900\r
2019-07-17,51900\r
2019-07-19,51900\r
2019-07-22,22600\r
2019-07-24,20800\r
2019-07-29,20900\r
2019-08-01,20900\r
2019-08-03,7400\r
2019-08-06,7400\r
2019-08-26,48900\r
2019-08-28,48900\r
2019-08-31,49000\r
2019-09-02,49000\r
2019-09-07,49000\r
2019-09-12,1100\r
2019-09-15,1800\r
2019-09-17,1700\r
2019-09-20,1800\r
2019-09-22,1800\r
2019-09-27,1800\r
2019-09-30,1500\r
2020-02-22,51500\r
2020-02-24,51500\r
2020-03-08,45700\r
2020-03-18,6700\r
2020-03-20,6700\r
2020-03-23,6700\r
2020-03-25,6700\r
2020-03-28,61500\r
2020-04-02,58900\r
2020-04-04,62700\r
2020-04-07,61200\r
2020-04-09,61200\r
2020-04-12,61900\r
2020-04-14,59100\r
2020-04-17,59100\r
2020-04-22,63700\r
2020-04-24,58700\r
2020-04-27,73300\r
2020-05-04,73100\r
2020-05-07,73100\r
2020-05-09,73100\r
2020-05-17,48200\r
2020-05-19,48200\r
2020-05-22,62100\r
2020-05-24,62100\r
2020-05-27,57300\r
2020-05-29,57300\r
2020-06-01,57300\r
2020-07-31,64000\r
2020-08-05,68300\r
2020-08-07,68300\r
2020-08-10,68300\r
2020-08-15,68300\r
2020-08-20,67700\r
2020-08-25,68500\r
2020-08-27,68500\r
2020-09-01,68500\r
2020-09-04,61300\r
2020-09-09,64600\r
2020-09-14,56600\r
2020-09-16,56600\r
2020-09-19,56600\r
2021-02-21,52700\r
2021-02-23,52700\r
2021-02-26,59900\r
2021-02-28,59900\r
2021-03-05,56100\r
2021-03-23,59900\r
2021-03-25,59900\r
2021-03-28,62900\r
2021-03-30,62900\r
2021-04-02,60100\r
2021-04-04,64200\r
2021-04-07,64200\r
2021-04-09,61000\r
2021-05-12,7600\r
2021-05-17,7600\r
2021-05-22,7600\r
2021-05-27,55500\r
2021-05-29,55500\r
2021-06-01,56700\r
2021-06-03,56700\r
2021-06-11,53900\r
2021-06-26,48800\r
2021-07-11,45700\r
2021-07-18,45700\r
2021-07-21,48000\r
2021-07-23,44100\r
2021-08-20,55100\r
2021-08-25,55100\r
2021-08-27,55100\r
2021-09-24,58400\r
2021-09-26,58400\r
2021-09-29,58400\r
2021-10-01,58400\r
2021-10-14,44000\r
2021-10-16,44000\r
2021-10-21,44000\r
2021-10-24,45800\r
2022-02-26,32800\r
2022-02-28,32800\r
2022-03-03,32800\r
2022-03-05,32800\r
2022-03-08,38800\r
2022-03-10,38400\r
2022-03-23,38000\r
2022-03-25,38000\r
2022-03-28,38000\r
2022-04-17,46500\r
2022-04-19,46500\r
2022-04-27,49200\r
2022-05-02,48200\r
2022-05-04,48200\r
2022-05-07,48200\r
2022-05-17,46500\r
2022-05-19,46500\r
2022-05-27,46500\r
2022-06-11,52100\r
2022-06-13,52100\r
2022-06-16,52500\r
2022-06-18,52500\r
2022-06-21,52800\r
2022-07-11,53700\r
2022-07-13,53700\r
2022-07-16,55700\r
2022-07-18,55700\r
2022-07-21,48900\r
2022-07-26,51200\r
2022-07-28,38500\r
2022-07-31,39100\r
2022-08-02,35500\r
2022-08-05,39300\r
2022-08-07,39300\r
2022-08-10,36300\r
2022-08-12,40100\r
2022-08-15,38700\r
2022-08-17,38000\r
2022-08-25,33400\r
2022-08-30,30200\r
2022-09-01,30200\r
2022-09-04,32400\r
2022-09-06,31500\r
2022-09-09,32700\r
2022-09-11,32800\r
2022-09-19,31300\r
2022-10-04,21100\r
2022-10-06,21100\r
2022-10-09,23000\r
2022-10-11,23000\r
2022-10-16,19800\r
2023-02-16,41200\r
2023-02-21,37500\r
2023-02-26,38800\r
2023-03-03,37100\r
2023-03-28,9500\r
2023-04-04,9500\r
2023-04-07,9500\r
2023-05-27,58800\r
2023-05-29,58800\r
2023-06-01,62400\r
2023-06-03,62400\r
2023-06-06,62400\r
2023-07-06,56500\r
2023-07-08,56500\r
`;export{r as default};
