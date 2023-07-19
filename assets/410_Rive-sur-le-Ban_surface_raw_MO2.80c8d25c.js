const r=`date,value\r
2017-03-14,60600\r
2017-04-23,83600\r
2017-04-30,83600\r
2017-06-22,83100\r
2017-07-07,81900\r
2017-07-09,81900\r
2017-07-12,82800\r
2017-07-14,82800\r
2017-07-17,82800\r
2017-08-21,75300\r
2017-08-23,75300\r
2017-08-26,82000\r
2017-09-05,77000\r
2017-10-05,66200\r
2017-10-07,66200\r
2017-10-10,66200\r
2017-10-12,66200\r
2017-10-15,68800\r
2017-10-17,67600\r
2017-10-22,67600\r
2017-10-25,67600\r
2018-03-14,72400\r
2018-03-16,72400\r
2018-03-19,72400\r
2018-03-21,72400\r
2018-03-24,72400\r
2018-04-18,82100\r
2018-04-20,82100\r
2018-04-25,82100\r
2018-06-22,76100\r
2018-06-24,76100\r
2018-06-27,84900\r
2018-06-29,84900\r
2018-07-02,83900\r
2018-07-04,80600\r
2018-07-07,80600\r
2018-07-17,80900\r
2018-07-19,80900\r
2018-07-22,80900\r
2018-07-24,80900\r
2018-07-27,86700\r
2018-07-29,86700\r
2018-08-01,91600\r
2018-08-03,91600\r
2018-08-06,89700\r
2018-08-11,86100\r
2018-08-16,84500\r
2018-08-18,86100\r
2018-08-21,81100\r
2018-08-23,82800\r
2018-08-26,76600\r
2018-08-28,84100\r
2018-08-31,84100\r
2018-09-02,76600\r
2018-09-05,78500\r
2018-09-07,8100\r
2018-09-10,79700\r
2018-09-12,79700\r
2018-09-17,76600\r
2018-09-20,84000\r
2018-09-22,79300\r
2018-09-25,85200\r
2018-09-27,85200\r
2018-10-02,75100\r
2018-10-05,75700\r
2018-10-10,69900\r
2018-10-12,69900\r
2018-10-15,69900\r
2018-10-20,68600\r
2018-10-22,68600\r
2018-10-25,68600\r
2018-10-30,68600\r
2019-02-27,72900\r
2019-03-04,78000\r
2019-03-24,76500\r
2019-03-26,76500\r
2019-03-29,77700\r
2019-03-31,77700\r
2019-04-05,77700\r
2019-05-23,83700\r
2019-05-25,83700\r
2019-05-30,83100\r
2019-06-02,85600\r
2019-06-04,85600\r
2019-06-07,89100\r
2019-06-12,88700\r
2019-06-27,85900\r
2019-06-29,85900\r
2019-07-02,85900\r
2019-07-04,85900\r
2019-07-07,85900\r
2019-07-09,85900\r
2019-07-12,85700\r
2019-07-14,90300\r
2019-07-17,84200\r
2019-07-19,84200\r
2019-07-22,85800\r
2019-07-24,85100\r
2019-07-29,89800\r
2019-08-01,78500\r
2019-08-03,84200\r
2019-08-06,82100\r
2019-08-08,73000\r
2019-08-11,78700\r
2019-08-13,78700\r
2019-08-16,78700\r
2019-08-18,78700\r
2019-08-21,79100\r
2019-08-23,82000\r
2019-08-26,78000\r
2019-08-28,77000\r
2019-08-31,73000\r
2019-09-02,73000\r
2019-09-07,70400\r
2019-09-15,68100\r
2019-09-17,68000\r
2019-09-20,78500\r
2019-09-22,78500\r
2019-09-27,78500\r
2019-09-30,76100\r
2020-03-18,74000\r
2020-03-20,74000\r
2020-03-23,74000\r
2020-03-25,74000\r
2020-03-28,84400\r
2020-04-02,82900\r
2020-04-04,88200\r
2020-04-07,83900\r
2020-04-09,83900\r
2020-04-12,84600\r
2020-04-14,84500\r
2020-04-17,84500\r
2020-04-22,83900\r
2020-05-17,68200\r
2020-05-19,68200\r
2020-05-22,78300\r
2020-05-24,78300\r
2020-05-27,77800\r
2020-05-29,77800\r
2020-06-01,86300\r
2020-06-21,84400\r
2020-06-23,84400\r
2020-06-26,84400\r
2020-06-28,84400\r
2020-07-01,89700\r
2020-07-31,86900\r
2020-08-05,87500\r
2020-08-07,87500\r
2020-08-10,84000\r
2020-08-15,84000\r
2020-08-20,80900\r
2020-08-25,83600\r
2020-08-27,86300\r
2020-09-01,86300\r
2020-09-04,78000\r
2020-09-09,83200\r
2020-09-14,77200\r
2020-09-16,77200\r
2020-09-19,77200\r
2021-02-26,75400\r
2021-02-28,75400\r
2021-03-05,34600\r
2021-03-23,82900\r
2021-03-25,82900\r
2021-03-28,87400\r
2021-03-30,87400\r
2021-04-02,84000\r
2021-04-04,89900\r
2021-04-07,89900\r
2021-04-09,87400\r
2021-05-22,80300\r
2021-05-24,80300\r
2021-05-27,83300\r
2021-05-29,83300\r
2021-06-01,79600\r
2021-06-03,82500\r
2021-06-11,77200\r
2021-06-16,84800\r
2021-06-18,84800\r
2021-06-21,84800\r
2021-06-26,84800\r
2021-07-11,68900\r
2021-07-18,68900\r
2021-07-21,68900\r
2021-08-20,77800\r
2021-08-25,78000\r
2021-08-27,78000\r
2021-09-24,69400\r
2021-09-26,69400\r
2021-09-29,69400\r
2021-10-01,69400\r
2021-10-14,72800\r
2021-10-16,72800\r
2021-10-21,72800\r
2021-10-24,74000\r
2022-02-26,67200\r
2022-02-28,67200\r
2022-03-03,67200\r
2022-03-05,67200\r
2022-03-08,76600\r
2022-03-10,76300\r
2022-04-17,80500\r
2022-04-19,80500\r
2022-04-27,81400\r
2022-05-02,77700\r
2022-05-04,77700\r
2022-05-07,79400\r
2022-05-12,87700\r
2022-05-14,87700\r
2022-05-17,87700\r
2022-05-19,86100\r
2022-06-11,87700\r
2022-06-13,87700\r
2022-06-16,88700\r
2022-06-18,88700\r
2022-06-21,89700\r
2022-06-23,87500\r
2022-06-28,86900\r
2022-07-01,85000\r
2022-07-06,83100\r
2022-07-08,83100\r
2022-07-11,85100\r
2022-07-13,85100\r
2022-07-16,81700\r
2022-07-18,84100\r
2022-07-21,78900\r
2022-07-26,81600\r
2022-07-28,77900\r
2022-07-31,77900\r
2022-08-05,78400\r
2022-08-07,78400\r
2022-08-10,80600\r
2022-08-12,80600\r
2022-08-15,80600\r
2022-08-17,78900\r
2022-08-25,76900\r
2022-08-30,79800\r
2022-09-01,79800\r
2022-09-04,79800\r
2022-09-06,75500\r
2022-09-09,78500\r
2022-09-11,75200\r
2022-09-19,75900\r
2022-10-04,60100\r
2022-10-06,60100\r
2022-10-09,60100\r
2022-10-11,60100\r
2023-05-27,83000\r
2023-05-29,82900\r
2023-06-01,94200\r
2023-06-03,94200\r
2023-06-06,91000\r
2023-06-08,91100\r
`;export{r as default};
