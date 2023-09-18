const r=`date,value\r
2017-02-22,106400\r
2017-02-25,96000\r
2017-03-07,77100\r
2017-03-14,75700\r
2017-03-17,82200\r
2017-03-27,79300\r
2017-04-03,84200\r
2017-04-06,82500\r
2017-04-23,65000\r
2017-05-03,65000\r
2017-05-16,71600\r
2017-05-23,81100\r
2017-05-26,81100\r
2017-06-02,76400\r
2017-06-15,72000\r
2017-06-22,74300\r
2017-06-25,60600\r
2017-07-02,66800\r
2017-07-05,58700\r
2017-07-07,63400\r
2017-07-12,63400\r
2017-07-17,64700\r
2017-07-22,61400\r
2017-07-27,61400\r
2017-08-04,92600\r
2017-08-06,92600\r
2017-08-14,81600\r
2017-08-19,79800\r
2017-08-21,66900\r
2017-08-24,73000\r
2017-08-26,76100\r
2017-08-29,68100\r
2017-09-03,71700\r
2017-09-13,48900\r
2017-09-20,64600\r
2017-09-23,64600\r
2017-09-28,64600\r
2017-10-05,64700\r
2017-10-10,64700\r
2017-10-13,64800\r
2017-10-15,67400\r
2017-10-18,63400\r
2017-10-25,63100\r
2018-02-22,79300\r
2018-02-25,85000\r
2018-02-27,78700\r
2018-03-17,89900\r
2018-03-22,100900\r
2018-03-29,90000\r
2018-04-01,90000\r
2018-04-06,85300\r
2018-04-16,85300\r
2018-04-18,95300\r
2018-04-21,97100\r
2018-04-23,92100\r
2018-04-26,93200\r
2018-05-06,70400\r
2018-05-11,75000\r
2018-05-13,75000\r
2018-05-18,76600\r
2018-05-21,71500\r
2018-05-26,73100\r
2018-06-02,73100\r
2018-06-20,64100\r
2018-06-22,73800\r
2018-06-25,60600\r
2018-06-27,63100\r
2018-07-02,66800\r
2018-07-07,60300\r
2018-07-10,57700\r
2018-07-12,68700\r
2018-07-15,73600\r
2018-07-17,73600\r
2018-07-25,54500\r
2018-07-27,72100\r
2018-07-30,76600\r
2018-08-01,76600\r
2018-08-04,76600\r
2018-08-06,76600\r
2018-08-11,68900\r
2018-08-16,68900\r
2018-08-19,74700\r
2018-08-21,68500\r
2018-08-26,62900\r
2018-09-03,55400\r
2018-09-05,55400\r
2018-09-08,71200\r
2018-09-10,76100\r
2018-09-13,75600\r
2018-09-18,77500\r
2018-09-20,78800\r
2018-09-23,74700\r
2018-09-25,68800\r
2018-09-28,73400\r
2018-09-30,72500\r
2018-10-05,73000\r
2018-10-08,76600\r
2018-10-13,92200\r
2018-10-20,86000\r
2018-10-23,77500\r
2018-10-25,71800\r
2018-10-30,71800\r
2019-02-15,99300\r
2019-02-17,75300\r
2019-02-20,79200\r
2019-02-22,68400\r
2019-02-25,68900\r
2019-02-27,63100\r
2019-03-12,67600\r
2019-03-22,92900\r
2019-03-24,67900\r
2019-03-27,70100\r
2019-03-29,60800\r
2019-04-01,68700\r
2019-04-13,96800\r
2019-04-18,71100\r
2019-05-06,74500\r
2019-05-13,78800\r
2019-05-16,78800\r
2019-05-23,75200\r
2019-05-31,89200\r
2019-06-02,71500\r
2019-06-17,49300\r
2019-06-25,49300\r
2019-06-27,53700\r
2019-06-30,52000\r
2019-07-02,52000\r
2019-07-05,62100\r
2019-07-07,64800\r
2019-07-10,64000\r
2019-07-15,73400\r
2019-07-17,68000\r
2019-07-20,68000\r
2019-07-22,62600\r
2019-07-25,81400\r
2019-08-04,63100\r
2019-08-09,74700\r
2019-08-14,47100\r
2019-08-16,70500\r
2019-08-21,70500\r
2019-08-24,72000\r
2019-08-26,55700\r
2019-08-29,48800\r
2019-08-31,43600\r
2019-09-03,38000\r
2019-09-13,41700\r
2019-09-15,52300\r
2019-09-18,62500\r
2019-09-20,69300\r
2019-09-30,68900\r
2019-10-03,93100\r
2020-02-20,72800\r
2020-02-22,67700\r
2020-03-28,61000\r
2020-03-31,58700\r
2020-04-02,62900\r
2020-04-05,55800\r
2020-04-07,55600\r
2020-04-10,61400\r
2020-04-12,65000\r
2020-04-15,69300\r
2020-05-20,73900\r
2020-05-22,73900\r
2020-05-25,84300\r
2020-05-27,61500\r
2020-05-30,72400\r
2020-06-01,72400\r
2020-06-24,94200\r
2020-06-26,82000\r
2020-06-29,82000\r
2020-07-01,86100\r
2020-07-04,88400\r
2020-07-09,93900\r
2020-07-11,82400\r
2020-07-14,81500\r
2020-07-19,73600\r
2020-07-21,68700\r
2020-07-24,75200\r
2020-07-29,72100\r
2020-07-31,63800\r
2020-08-05,55300\r
2020-08-08,60300\r
2020-08-10,58300\r
2020-08-15,59200\r
2020-08-20,60600\r
2020-08-25,69000\r
2020-09-04,50400\r
2020-09-07,53500\r
2020-09-09,53500\r
2020-09-12,51500\r
2020-09-14,51600\r
2020-09-17,50300\r
2021-02-21,75200\r
2021-02-24,63200\r
2021-02-26,65600\r
2021-03-01,71500\r
2021-03-06,64900\r
2021-03-21,89800\r
2021-03-23,97900\r
2021-03-26,97900\r
2021-03-28,86800\r
2021-03-31,88400\r
2021-04-02,91000\r
2021-04-05,96000\r
2021-04-07,85100\r
2021-04-15,87100\r
2021-04-17,92600\r
2021-04-22,92500\r
2021-04-27,101800\r
2021-05-05,98200\r
2021-05-27,54400\r
2021-05-30,54400\r
2021-06-01,57400\r
2021-06-09,54000\r
2021-06-11,54600\r
2021-06-14,61300\r
2021-06-16,65300\r
2021-06-26,68000\r
2021-07-01,70400\r
2021-07-11,65700\r
2021-07-19,79600\r
2021-07-21,56300\r
2021-07-29,64000\r
2021-08-20,74300\r
2021-08-25,74300\r
2021-08-28,62900\r
2021-08-30,62900\r
2021-09-02,69900\r
2021-09-07,62800\r
2021-09-22,54300\r
2021-09-24,60400\r
2021-09-27,60400\r
2021-10-02,60400\r
2021-10-07,60000\r
2021-10-09,62000\r
2021-10-12,60300\r
2021-10-14,64100\r
2021-10-17,64100\r
2021-10-19,66100\r
2021-10-22,65700\r
2021-10-24,65000\r
2021-10-27,60000\r
2022-02-19,83800\r
2022-03-08,74300\r
2022-03-23,64400\r
2022-03-26,75800\r
2022-04-10,75000\r
2022-04-15,83700\r
2022-04-17,76700\r
2022-04-22,87400\r
2022-04-27,80100\r
2022-05-17,57500\r
2022-05-27,66400\r
2022-05-30,65700\r
2022-06-01,77000\r
2022-06-04,71000\r
2022-06-06,71000\r
2022-06-11,67200\r
2022-06-14,64800\r
2022-06-19,65100\r
2022-06-21,65100\r
2022-06-29,71900\r
2022-07-01,85200\r
2022-07-04,68800\r
2022-07-06,69100\r
2022-07-11,62600\r
2022-07-14,61700\r
2022-07-16,53200\r
2022-07-19,59200\r
2022-07-21,51000\r
2022-07-24,55700\r
2022-07-26,53000\r
2022-07-31,55100\r
2022-08-03,60800\r
2022-08-08,64300\r
2022-08-10,59100\r
2022-08-13,61700\r
2022-08-28,47400\r
2022-08-30,47700\r
2022-09-02,46000\r
2022-09-04,48300\r
2022-09-12,58300\r
2022-09-19,59700\r
2022-09-22,57300\r
2022-10-04,53900\r
2022-10-09,55600\r
2022-10-12,53200\r
2022-10-19,72700\r
2022-10-22,74400\r
2022-10-24,63400\r
2023-02-16,74200\r
2023-02-26,72600\r
2023-03-01,86100\r
2023-03-06,75500\r
2023-03-13,94300\r
2023-03-16,86300\r
2023-04-05,67100\r
2023-04-07,76800\r
2023-05-30,50700\r
2023-06-01,54500\r
2023-06-06,54500\r
2023-06-14,66300\r
2023-06-16,69600\r
2023-06-24,65500\r
2023-06-26,74000\r
2023-07-04,87300\r
2023-07-06,92200\r
2023-07-09,87600\r
2023-07-11,87600\r
2023-07-14,88000\r
2023-07-19,73700\r
2023-07-26,61000\r
2023-07-31,65600\r
2023-08-08,74400\r
2023-08-10,74400\r
2023-08-15,78600\r
2023-08-20,81100\r
2023-08-23,74600\r
`;export{r as default};
