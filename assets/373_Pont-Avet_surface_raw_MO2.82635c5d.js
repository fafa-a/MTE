const r=`date,value\r
2017-03-13,115300\r
2017-03-16,115300\r
2017-04-12,130700\r
2017-04-19,130700\r
2017-04-22,130700\r
2017-06-21,127200\r
2017-06-24,127200\r
2017-07-01,136900\r
2017-07-06,125400\r
2017-07-09,125400\r
2017-08-25,129200\r
2017-08-27,129200\r
2017-09-02,122300\r
2017-11-13,124400\r
2017-11-15,124400\r
2017-11-16,124400\r
2017-11-23,124400\r
2018-02-11,119200\r
2018-02-21,124200\r
2018-02-24,114600\r
2018-02-26,138100\r
2018-02-28,138100\r
2018-03-05,138000\r
2018-04-22,109800\r
2018-04-24,109800\r
2018-05-07,117800\r
2018-05-09,117800\r
2018-05-14,117800\r
2018-05-15,117800\r
2018-05-17,126300\r
2018-05-19,120400\r
2018-05-20,120400\r
2018-05-22,138200\r
2018-05-24,138200\r
2018-06-26,139400\r
2018-06-28,139400\r
2018-06-29,139400\r
2018-07-01,136700\r
2018-07-04,136700\r
2018-07-06,136700\r
2018-07-16,117800\r
2018-07-18,117800\r
2018-07-19,117800\r
2018-07-21,123600\r
2018-07-23,122900\r
2018-07-24,122900\r
2018-07-26,122900\r
2018-07-31,119100\r
2018-08-05,128100\r
2018-09-04,113700\r
2018-09-06,113700\r
2018-09-09,113700\r
2018-09-11,113700\r
2018-09-14,113700\r
2018-10-04,122000\r
2018-10-07,122000\r
2018-10-09,138300\r
2018-10-12,138300\r
2018-10-19,122200\r
2018-11-03,112400\r
2018-11-06,112400\r
2018-11-08,113400\r
2018-11-11,113400\r
2018-11-18,105300\r
2018-11-20,102800\r
2018-11-21,102800\r
2019-02-16,124500\r
2019-02-19,124500\r
2019-02-21,143000\r
2019-02-23,143000\r
2019-02-24,143000\r
2019-02-26,108000\r
2019-03-11,65200\r
2019-03-13,65200\r
2019-03-28,85900\r
2019-03-30,85900\r
2019-03-31,85900\r
2019-04-09,70100\r
2019-04-12,89200\r
2019-04-14,84300\r
2019-04-17,84300\r
2019-04-19,84300\r
2019-04-20,84300\r
2019-04-22,88000\r
2019-04-25,88000\r
2019-04-27,88000\r
2019-04-30,85000\r
2019-05-05,85000\r
2019-05-12,87900\r
2019-05-14,87900\r
2019-05-15,87900\r
2019-05-22,87900\r
2019-05-24,87900\r
2019-05-25,87900\r
2019-05-27,102600\r
2019-06-01,105600\r
2019-06-06,105600\r
2019-06-08,105600\r
2019-06-21,82000\r
2019-06-26,92200\r
2019-06-28,92200\r
2019-06-29,92200\r
2019-07-03,92200\r
2019-07-04,92200\r
2019-07-06,86300\r
2019-07-08,90100\r
2019-07-09,90100\r
2019-07-11,86300\r
2019-07-13,96300\r
2019-07-14,96300\r
2019-07-16,83800\r
2019-07-23,98800\r
2019-07-24,98800\r
2019-07-29,86600\r
2019-08-20,86400\r
2019-08-22,86400\r
2019-08-23,86400\r
2019-08-25,86400\r
2019-08-27,86400\r
2019-08-30,93400\r
2019-09-01,93400\r
2019-09-02,93400\r
2019-09-04,88100\r
2019-09-07,92500\r
2019-09-11,92500\r
2019-09-14,86300\r
2019-09-16,89500\r
2019-09-19,82000\r
2019-09-21,87400\r
2019-09-24,87400\r
2019-09-27,87400\r
2019-10-09,71200\r
2019-10-17,71200\r
2019-10-21,71200\r
2019-10-22,71200\r
2019-12-03,64100\r
2019-12-05,64100\r
2019-12-08,64100\r
2019-12-13,100300\r
2019-12-20,100300\r
2019-12-23,100500\r
2019-12-25,100500\r
2019-12-28,93200\r
2019-12-30,105200\r
2020-01-17,86900\r
2020-01-19,86900\r
2020-01-20,86900\r
2020-01-22,89400\r
2020-02-04,69400\r
2020-02-06,105300\r
2020-02-11,103300\r
2020-03-17,94100\r
2020-03-24,73700\r
2020-03-25,73700\r
2020-03-27,74200\r
2020-03-30,71800\r
2020-04-01,91400\r
2020-04-03,85400\r
2020-04-04,85400\r
2020-04-08,85400\r
2020-04-09,85400\r
2020-04-11,86700\r
2020-04-14,86800\r
2020-04-16,84300\r
2020-04-18,89500\r
2020-04-21,89500\r
2020-04-23,89500\r
2020-04-26,87700\r
2020-05-26,96300\r
2020-05-28,96300\r
2020-05-29,96300\r
2020-05-31,104100\r
2020-06-02,104100\r
2020-06-08,104100\r
2020-06-25,70100\r
2020-07-07,70100\r
2020-07-10,70100\r
2020-07-20,81000\r
2020-07-22,81000\r
2020-07-30,81200\r
2020-08-02,81200\r
2020-08-04,81200\r
2020-08-06,70900\r
2020-08-07,70900\r
2020-08-09,73700\r
2020-08-11,73700\r
2020-08-14,73700\r
2020-08-21,72700\r
2020-09-08,60600\r
2020-09-13,67000\r
2020-09-16,67000\r
2020-09-26,62800\r
2020-11-12,31100\r
2020-11-15,31100\r
2020-11-19,31100\r
2020-12-17,44700\r
2020-12-19,44700\r
2020-12-29,43400\r
2021-01-01,114900\r
2021-01-09,114900\r
2021-02-10,96700\r
2021-02-18,96700\r
2021-04-01,117800\r
2021-04-03,117800\r
2021-04-04,117800\r
2021-04-06,117800\r
2021-04-08,117800\r
2021-04-16,91600\r
2021-04-18,91600\r
2021-04-19,91600\r
2021-04-21,99300\r
2021-04-23,99300\r
2021-04-24,99300\r
2021-04-26,108100\r
2021-05-21,98700\r
2021-05-24,98700\r
2021-05-28,98700\r
2021-05-31,98800\r
2021-06-05,90800\r
2021-06-08,90800\r
2021-06-15,95200\r
2021-07-15,88600\r
2021-07-17,88600\r
2021-07-18,88600\r
2021-07-20,92700\r
2021-07-22,92700\r
2021-07-28,86400\r
2021-07-30,86400\r
2021-08-14,80600\r
2021-08-22,80600\r
2021-09-13,71200\r
2021-09-16,71200\r
2021-09-21,71200\r
2021-09-23,76200\r
2021-10-08,77500\r
2021-10-11,77500\r
2021-10-15,77500\r
2021-11-22,78200\r
2021-11-24,78200\r
2021-12-17,90000\r
2021-12-27,90000\r
2022-02-05,99900\r
2022-02-10,99900\r
2022-02-12,99900\r
2022-03-07,97700\r
2022-03-09,97700\r
2022-03-14,97700\r
2022-03-17,118100\r
2022-03-22,118800\r
2022-03-24,118800\r
2022-03-25,118800\r
2022-03-27,116800\r
2022-04-01,119700\r
2022-04-03,119700\r
2022-04-16,109700\r
2022-04-21,113400\r
2022-04-26,113400\r
2022-05-01,107200\r
2022-05-31,109100\r
2022-06-03,109100\r
2022-06-08,109100\r
2022-06-15,125500\r
2022-06-17,125500\r
2022-06-25,125500\r
2022-07-10,122600\r
2022-07-12,122600\r
2022-07-13,122600\r
2022-07-15,128000\r
2022-07-17,128000\r
2022-07-18,128000\r
2022-07-20,119000\r
2022-07-23,124400\r
2022-07-28,106100\r
2022-07-30,108700\r
2022-08-02,102200\r
2022-08-04,102200\r
2022-08-06,102200\r
2022-08-07,102200\r
2022-08-09,115900\r
2022-08-11,111000\r
2022-08-12,111000\r
2022-08-16,111000\r
2022-09-18,83500\r
2022-09-21,83500\r
2022-11-12,88200\r
2022-11-15,88200\r
2022-11-17,88200\r
2022-11-19,88200\r
2022-11-20,88200\r
2022-11-22,90200\r
2022-12-07,92800\r
2022-12-09,92800\r
2022-12-10,92800\r
2022-12-17,92800\r
2022-12-27,84000\r
2022-12-29,84000\r
2023-01-21,96300\r
2023-01-23,96300\r
2023-01-31,96300\r
2023-02-15,110300\r
2023-05-16,76600\r
2023-05-19,76600\r
2023-05-21,76600\r
2023-05-23,76600\r
2023-05-26,77200\r
2023-06-05,115500\r
2023-06-07,116100\r
2023-06-08,116100\r
2023-06-12,115700\r
2023-06-13,115700\r
2023-06-15,127300\r
2023-06-20,121300\r
2023-06-22,121300\r
2023-06-23,121300\r
2023-06-25,102800\r
2023-08-24,96100\r
2023-09-01,96100\r
2023-09-03,96100\r
`;export{r as default};
