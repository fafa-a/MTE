const r=`date,value\r
2017-03-14,82100\r
2017-04-03,75100\r
2017-04-10,75100\r
2017-04-20,76800\r
2017-04-23,76800\r
2017-04-30,76600\r
2017-05-10,75800\r
2017-05-13,74200\r
2017-06-12,81000\r
2017-06-19,81000\r
2017-06-22,81000\r
2017-06-29,73300\r
2017-07-07,73900\r
2017-07-09,73900\r
2017-07-14,73900\r
2017-07-17,73900\r
2017-08-06,72000\r
2017-08-23,74400\r
2017-08-26,74400\r
2017-09-02,74400\r
2017-09-25,71600\r
2017-09-27,75100\r
2017-10-05,75900\r
2017-10-15,72600\r
2017-10-17,78100\r
2017-11-01,73100\r
2017-11-06,73100\r
2018-01-18,68700\r
2018-02-14,75400\r
2018-02-22,77500\r
2018-02-24,77500\r
2018-02-27,80500\r
2018-03-04,80500\r
2018-03-14,77100\r
2018-03-19,77100\r
2018-03-21,77200\r
2018-03-24,77100\r
2018-04-08,81500\r
2018-04-15,81500\r
2018-04-18,81500\r
2018-04-20,81100\r
2018-05-05,79800\r
2018-05-08,80600\r
2018-05-15,80100\r
2018-05-18,81100\r
2018-05-25,81800\r
2018-05-28,81800\r
2018-06-04,82500\r
2018-06-29,41500\r
2018-07-02,73100\r
2018-07-04,73100\r
2018-07-07,73100\r
2018-07-09,72700\r
2018-07-14,77400\r
2018-07-17,77400\r
2018-07-19,75000\r
2018-07-22,77500\r
2018-07-24,77500\r
2018-07-27,81500\r
2018-07-29,81500\r
2018-08-03,81500\r
2018-08-06,79000\r
2018-08-11,79000\r
2018-08-16,77400\r
2018-08-18,76400\r
2018-08-21,76400\r
2018-08-23,76400\r
2018-08-26,81100\r
2018-08-28,79500\r
2018-09-05,79800\r
2018-09-12,76100\r
2018-09-17,74700\r
2018-09-20,74700\r
2018-09-22,74700\r
2018-09-25,75400\r
2018-09-27,75400\r
2018-09-30,68700\r
2018-10-05,74800\r
2018-10-07,68700\r
2018-10-10,70300\r
2018-10-12,75100\r
2018-10-15,75000\r
2018-10-17,78300\r
2018-10-20,73100\r
2018-10-22,78300\r
2018-11-04,78700\r
2018-11-11,78700\r
2018-11-14,78700\r
2019-01-20,75500\r
2019-01-30,75500\r
2019-02-14,75600\r
2019-02-17,79200\r
2019-02-24,75600\r
2019-02-27,75600\r
2019-03-19,74100\r
2019-03-21,77400\r
2019-03-24,74100\r
2019-03-29,75100\r
2019-03-31,73400\r
2019-04-15,73100\r
2019-04-18,74100\r
2019-04-20,72700\r
2019-04-30,72700\r
2019-05-13,74700\r
2019-05-15,76300\r
2019-05-23,76300\r
2019-05-25,76000\r
2019-06-02,78800\r
2019-06-04,78800\r
2019-06-07,78800\r
2019-06-17,75100\r
2019-06-19,75100\r
2019-06-24,75100\r
2019-06-27,75100\r
2019-06-29,74800\r
2019-07-02,76200\r
2019-07-04,75900\r
2019-07-17,73300\r
2019-07-22,73000\r
2019-07-24,73400\r
2019-07-29,73400\r
2019-08-01,73400\r
2019-08-21,75200\r
2019-08-23,75500\r
2019-08-26,73700\r
2019-08-28,73700\r
2019-08-31,75200\r
2019-09-02,75200\r
2019-09-10,74100\r
2019-09-12,74800\r
2019-09-15,73700\r
2019-09-20,73500\r
2019-12-04,74000\r
2019-12-14,70200\r
2019-12-19,75400\r
2019-12-21,75400\r
2019-12-29,75400\r
2020-01-15,72000\r
2020-01-20,75400\r
2020-02-07,79200\r
2020-02-19,79400\r
2020-02-22,79400\r
2020-03-20,78200\r
2020-03-23,78200\r
2020-03-25,78200\r
2020-03-28,76600\r
2020-03-30,76700\r
2020-04-02,76100\r
2020-04-04,75700\r
2020-04-07,75700\r
2020-04-09,75700\r
2020-04-12,76600\r
2020-04-14,77600\r
2020-04-17,77400\r
2020-04-19,77600\r
2020-04-22,77800\r
2020-04-24,75900\r
2020-04-27,75900\r
2020-05-07,78400\r
2020-05-12,78500\r
2020-05-17,77400\r
2020-05-19,77700\r
2020-05-27,77800\r
2020-05-29,77500\r
2020-06-01,74500\r
2020-06-03,74500\r
2020-06-23,80000\r
2020-06-26,79600\r
2020-07-03,79600\r
2020-07-08,80000\r
2020-07-11,79800\r
2020-07-21,73200\r
2020-07-23,74600\r
2020-07-31,72500\r
2020-08-05,73700\r
2020-08-07,73600\r
2020-08-10,72000\r
2020-08-12,72000\r
2020-08-17,71600\r
2020-08-20,71800\r
2020-09-04,75800\r
2020-09-09,75800\r
2020-09-11,75800\r
2020-09-14,71700\r
2020-09-16,74300\r
2020-09-19,74300\r
2020-09-21,72000\r
2020-10-04,71600\r
2020-10-31,70400\r
2020-11-05,72500\r
2020-11-08,72500\r
2020-11-18,72500\r
2020-12-05,71900\r
2020-12-18,70100\r
2020-12-25,66100\r
2021-02-11,73500\r
2021-02-21,79000\r
2021-02-23,81000\r
2021-02-28,79100\r
2021-03-03,80000\r
2021-03-28,78200\r
2021-03-30,77500\r
2021-04-02,77500\r
2021-04-04,74300\r
2021-04-09,74400\r
2021-04-17,74800\r
2021-04-22,74800\r
2021-04-24,76700\r
2021-04-27,78000\r
2021-06-01,78600\r
2021-06-11,78600\r
2021-06-13,74700\r
2021-06-16,74700\r
2021-06-18,74700\r
2021-06-21,74700\r
2021-07-18,72500\r
2021-07-21,76200\r
2021-07-23,75000\r
2021-08-25,73900\r
2021-09-01,74600\r
2021-09-04,73500\r
2021-09-06,73400\r
2021-10-01,73900\r
2021-10-09,75000\r
2021-10-14,74600\r
2021-10-24,75200\r
2021-11-23,75400\r
2022-01-12,73400\r
2022-01-24,74700\r
2022-02-23,74200\r
2022-02-26,74200\r
2022-02-28,74500\r
2022-03-03,73400\r
2022-03-05,73900\r
2022-03-08,73200\r
2022-03-10,72800\r
2022-03-13,73200\r
2022-03-20,72900\r
2022-03-23,71900\r
2022-03-25,74100\r
2022-03-28,73700\r
2022-04-04,74500\r
2022-04-17,76200\r
2022-04-22,76200\r
2022-05-09,73500\r
2022-05-14,73500\r
2022-05-17,73500\r
2022-06-01,40600\r
2022-06-11,74200\r
2022-06-16,75000\r
2022-06-18,73700\r
2022-06-21,73700\r
2022-06-23,74300\r
2022-07-08,72700\r
2022-07-13,72700\r
2022-07-16,73200\r
2022-07-18,73000\r
2022-07-31,72000\r
2022-08-02,72000\r
2022-08-07,73000\r
2022-08-10,71400\r
2022-08-12,71600\r
2022-08-17,71600\r
2022-08-20,71500\r
2022-08-22,73300\r
2022-08-25,73700\r
2022-08-30,73700\r
2022-09-01,74000\r
2022-09-04,73900\r
2022-09-06,74200\r
2022-09-21,71900\r
2022-10-04,72500\r
2022-10-09,73100\r
2022-10-26,75500\r
2022-12-15,73800\r
2023-02-08,73600\r
2023-02-13,76200\r
2023-02-21,76400\r
2023-03-03,76900\r
2023-05-14,74600\r
2023-05-19,75400\r
2023-05-22,75400\r
2023-05-24,74700\r
2023-05-27,76800\r
2023-05-29,76800\r
2023-06-01,77700\r
2023-06-03,76600\r
2023-06-06,77900\r
2023-06-08,76300\r
2023-06-11,76700\r
2023-06-13,75700\r
2023-06-18,74900\r
2023-06-23,74800\r
2023-06-26,42600\r
`;export{r as default};
