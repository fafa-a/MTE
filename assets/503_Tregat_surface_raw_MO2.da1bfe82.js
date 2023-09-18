const r=`date,value\r
2017-04-12,79200\r
2017-04-19,79200\r
2017-04-22,79200\r
2017-04-29,68300\r
2017-05-02,68600\r
2017-06-21,64200\r
2017-06-24,64200\r
2017-06-28,64200\r
2017-07-01,69000\r
2017-07-31,47000\r
2017-08-02,47000\r
2017-08-05,63000\r
2017-08-07,63000\r
2017-08-13,56700\r
2017-09-14,31800\r
2017-09-16,31800\r
2017-09-19,31800\r
2017-09-22,31800\r
2017-10-04,19600\r
2017-10-06,19600\r
2017-10-07,19600\r
2017-10-14,20000\r
2017-10-16,16100\r
2017-10-19,16100\r
2017-10-21,16100\r
2017-10-22,16100\r
2017-11-13,15300\r
2017-11-15,15300\r
2017-11-23,11900\r
2017-11-28,11100\r
2017-12-01,11100\r
2017-12-08,11100\r
2018-01-17,44400\r
2018-01-19,44400\r
2018-01-22,44400\r
2018-01-27,44400\r
2018-02-21,41500\r
2018-02-24,41500\r
2018-02-26,60700\r
2018-02-28,60700\r
2018-03-03,60700\r
2018-03-08,60500\r
2018-04-17,71000\r
2018-04-19,71000\r
2018-04-20,71000\r
2018-04-22,71000\r
2018-04-24,71000\r
2018-05-17,79600\r
2018-05-19,79600\r
2018-05-20,79600\r
2018-05-22,79600\r
2018-05-24,79600\r
2018-06-26,75300\r
2018-06-28,75300\r
2018-06-29,75300\r
2018-07-01,76900\r
2018-07-06,74500\r
2018-07-11,73200\r
2018-07-13,74100\r
2018-07-14,74100\r
2018-07-16,74100\r
2018-07-18,69800\r
2018-08-05,60700\r
2018-10-04,31800\r
2018-10-09,43000\r
2018-10-12,43000\r
2018-10-19,35300\r
2018-10-21,24300\r
2018-10-24,35900\r
2018-11-03,29900\r
2018-11-08,17100\r
2018-11-11,17100\r
2018-11-13,17100\r
2018-11-18,18500\r
2018-11-20,18500\r
2019-01-27,52800\r
2019-02-03,52800\r
2019-02-26,200\r
2019-02-28,200\r
2019-03-13,2400\r
2019-03-23,54400\r
2019-03-26,54400\r
2019-03-28,71000\r
2019-03-30,71000\r
2019-03-31,71000\r
2019-04-04,71000\r
2019-04-07,71000\r
2019-04-09,70900\r
2019-04-12,71500\r
2019-04-19,61700\r
2019-04-20,61700\r
2019-04-22,63400\r
2019-04-27,63400\r
2019-06-01,53800\r
2019-06-06,61400\r
2019-06-13,61400\r
2019-06-26,70400\r
2019-06-28,70400\r
2019-06-29,70400\r
2019-07-01,70400\r
2019-07-03,70400\r
2019-07-04,70400\r
2019-07-06,76000\r
2019-07-08,76000\r
2019-07-09,76000\r
2019-07-11,74300\r
2019-07-13,87900\r
2019-07-14,87900\r
2019-07-16,78100\r
2019-07-21,78100\r
2019-07-23,86400\r
2019-07-24,86400\r
2019-09-14,34300\r
2019-09-16,33400\r
2019-09-19,39800\r
2019-09-24,39800\r
2019-11-18,45100\r
2019-12-03,56100\r
2019-12-13,53000\r
2020-01-22,3000\r
2020-02-06,31600\r
2020-02-11,29400\r
2020-02-18,29400\r
2020-03-02,86000\r
2020-03-12,86000\r
2020-03-17,86000\r
2020-03-19,61900\r
2020-03-24,61900\r
2020-03-25,61900\r
2020-03-27,62000\r
2020-03-29,62000\r
2020-03-30,62000\r
2020-04-01,57800\r
2020-04-03,62200\r
2020-04-04,62200\r
2020-04-08,62200\r
2020-04-09,62200\r
2020-04-11,61300\r
2020-04-14,62600\r
2020-04-16,62400\r
2020-04-23,70900\r
2020-04-26,70900\r
2020-05-21,67300\r
2020-05-23,67300\r
2020-05-24,67300\r
2020-05-26,67300\r
2020-05-28,67300\r
2020-05-29,67300\r
2020-05-31,71100\r
2020-06-02,71100\r
2020-06-07,70700\r
2020-06-15,70700\r
2020-07-30,55900\r
2020-08-01,55900\r
2020-08-04,58900\r
2020-08-06,58900\r
2020-08-07,58900\r
2020-08-09,56100\r
2020-08-11,56100\r
2020-08-14,56100\r
2020-08-21,55100\r
2020-09-08,39200\r
2020-09-10,39200\r
2020-09-11,39200\r
2020-09-13,38700\r
2020-09-16,38700\r
2020-11-22,23200\r
2020-11-29,23200\r
2020-11-30,23200\r
2020-12-04,23200\r
2020-12-05,23200\r
2020-12-12,55200\r
2020-12-17,55200\r
2020-12-19,55200\r
2021-01-01,64500\r
2021-01-08,64500\r
2021-01-09,64500\r
2021-03-07,74400\r
2021-03-09,74400\r
2021-05-31,59700\r
2021-06-05,59700\r
2021-06-07,59700\r
2021-06-08,59700\r
2021-06-15,72600\r
2021-07-20,66400\r
2021-07-22,66400\r
2021-07-23,66400\r
2021-07-25,66400\r
2021-07-28,66400\r
2021-07-30,66400\r
2021-08-14,58400\r
2021-09-13,51000\r
2021-09-18,51000\r
2021-09-20,51000\r
2021-09-23,51000\r
2021-10-08,41800\r
2021-10-10,41800\r
2021-11-22,36400\r
2021-11-24,36400\r
2021-11-27,36400\r
2021-12-02,36400\r
2021-12-17,36400\r
2022-01-21,49400\r
2022-01-31,49400\r
2022-02-05,64000\r
2022-02-10,67100\r
2022-02-12,67100\r
2022-02-17,64700\r
2022-03-07,68700\r
2022-03-10,68700\r
2022-03-12,68700\r
2022-03-14,68700\r
2022-03-17,68100\r
2022-03-22,59400\r
2022-03-24,69100\r
2022-03-25,69100\r
2022-03-27,64200\r
2022-04-01,64600\r
2022-04-03,64600\r
2022-04-16,69800\r
2022-04-21,69800\r
2022-04-26,69800\r
2022-05-01,55400\r
2022-05-03,55400\r
2022-05-06,55400\r
2022-05-21,69000\r
2022-05-26,69000\r
2022-05-28,69000\r
2022-05-29,69000\r
2022-05-31,69000\r
2022-06-15,82800\r
2022-06-17,82800\r
2022-06-25,82800\r
2022-07-02,79400\r
2022-07-05,66300\r
2022-07-08,79300\r
2022-07-10,73600\r
2022-07-12,75100\r
2022-07-13,75100\r
2022-07-15,74300\r
2022-07-17,85900\r
2022-07-18,85900\r
2022-07-20,85900\r
2022-07-25,85000\r
2022-07-30,76800\r
2022-08-02,76800\r
2022-08-04,76800\r
2022-08-06,76800\r
2022-08-07,76800\r
2022-08-09,67200\r
2022-08-11,67600\r
2022-08-12,67600\r
2022-09-18,48200\r
2022-09-20,48200\r
2022-09-21,48200\r
2022-09-25,48200\r
2022-11-12,49900\r
2022-11-17,49900\r
2022-11-19,49900\r
2022-11-22,65300\r
2022-11-25,64900\r
2022-11-29,64900\r
2022-12-07,61600\r
2022-12-09,61600\r
2022-12-10,61600\r
2022-12-17,61600\r
2022-12-27,70000\r
2022-12-29,70000\r
2023-01-16,27700\r
2023-01-18,27700\r
2023-01-21,38300\r
2023-01-28,22300\r
2023-01-31,50800\r
2023-02-15,54800\r
2023-02-20,59600\r
2023-02-27,57600\r
2023-02-28,57600\r
2023-03-02,65400\r
2023-03-04,64400\r
2023-05-21,54500\r
2023-05-26,65600\r
2023-05-28,67500\r
2023-05-31,64900\r
2023-06-02,69200\r
2023-06-03,69200\r
2023-06-05,69200\r
2023-06-07,84300\r
2023-06-10,84300\r
2023-06-12,84300\r
2023-06-13,84300\r
2023-06-15,84300\r
2023-06-25,64800\r
2023-06-27,64800\r
2023-09-03,79100\r
2023-09-05,79100\r
2023-09-06,79100\r
`;export{r as default};
