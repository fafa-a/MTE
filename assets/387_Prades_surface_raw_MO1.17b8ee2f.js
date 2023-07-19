const r=`date,value\r
2017-02-15,47800\r
2017-02-25,84200\r
2017-03-17,83400\r
2017-03-27,83500\r
2017-04-23,89300\r
2017-05-16,90500\r
2017-05-23,75300\r
2017-05-26,85200\r
2017-06-15,89800\r
2017-06-22,85100\r
2017-06-25,88800\r
2017-07-05,92000\r
2017-07-07,89500\r
2017-07-12,95200\r
2017-08-06,91800\r
2017-08-14,85600\r
2017-08-19,88900\r
2017-08-21,87900\r
2017-08-26,92000\r
2017-08-29,90700\r
2017-10-05,88300\r
2017-10-13,87300\r
2017-10-15,90100\r
2017-10-28,89300\r
2017-10-30,87400\r
2017-11-17,85200\r
2017-11-22,84300\r
2018-01-23,84900\r
2018-01-28,87900\r
2018-01-31,78800\r
2018-02-27,83400\r
2018-03-14,88300\r
2018-05-06,88800\r
2018-05-11,87200\r
2018-05-21,82400\r
2018-06-20,90800\r
2018-06-22,90800\r
2018-06-25,88600\r
2018-06-27,89200\r
2018-07-12,88600\r
2018-07-15,89500\r
2018-07-25,87800\r
2018-07-27,88300\r
2018-07-30,90900\r
2018-08-01,88000\r
2018-08-06,87500\r
2018-08-11,87500\r
2018-08-16,87700\r
2018-08-19,86400\r
2018-09-05,88600\r
2018-09-08,88600\r
2018-09-10,90500\r
2018-09-13,88200\r
2018-09-18,89700\r
2018-09-20,90300\r
2018-09-23,81700\r
2018-09-25,90800\r
2018-09-28,89200\r
2018-10-05,90000\r
2018-10-18,84800\r
2018-10-20,90500\r
2018-10-30,82900\r
2018-11-14,79200\r
2018-11-22,70400\r
2018-12-27,60300\r
2019-02-05,2400\r
2019-02-15,79100\r
2019-02-17,80600\r
2019-02-20,81600\r
2019-02-22,84900\r
2019-02-25,81100\r
2019-02-27,81700\r
2019-03-22,83500\r
2019-03-24,90200\r
2019-03-27,82800\r
2019-03-29,86600\r
2019-05-13,86000\r
2019-05-16,86600\r
2019-05-23,84800\r
2019-05-31,85100\r
2019-06-02,83600\r
2019-06-17,89600\r
2019-06-27,83200\r
2019-06-30,92100\r
2019-07-05,94000\r
2019-07-07,91100\r
2019-07-10,89200\r
2019-07-12,95800\r
2019-07-15,91200\r
2019-07-17,88000\r
2019-07-20,97500\r
2019-07-22,85100\r
2019-07-25,93800\r
2019-08-04,93300\r
2019-08-14,93100\r
2019-08-24,90700\r
2019-08-26,90700\r
2019-08-31,88100\r
2019-09-03,91200\r
2019-09-13,89300\r
2019-09-15,92000\r
2019-09-20,91500\r
2019-12-29,83700\r
2020-01-06,80900\r
2020-01-16,82300\r
2020-01-21,86400\r
2020-02-07,88200\r
2020-02-15,83800\r
2020-02-20,81800\r
2020-02-22,82700\r
2020-03-28,89200\r
2020-03-31,82000\r
2020-04-02,86200\r
2020-04-05,85700\r
2020-04-07,88800\r
2020-04-10,86700\r
2020-04-15,83400\r
2020-05-07,88200\r
2020-05-17,87300\r
2020-05-20,86200\r
2020-05-25,90500\r
2020-05-27,85900\r
2020-05-30,87700\r
2020-06-14,87800\r
2020-06-26,89200\r
2020-07-01,92700\r
2020-07-04,88800\r
2020-07-09,88900\r
2020-07-11,90200\r
2020-07-14,98500\r
2020-07-19,91400\r
2020-07-24,90000\r
2020-07-29,86500\r
2020-07-31,90400\r
2020-08-05,86400\r
2020-08-08,87700\r
2020-08-10,86100\r
2020-08-20,87000\r
2020-08-25,93800\r
2020-09-04,91700\r
2020-09-07,86000\r
2020-09-09,91700\r
2020-09-12,86600\r
2020-09-14,93200\r
2020-09-17,89700\r
2020-11-18,85100\r
2020-11-21,84100\r
2020-11-23,86500\r
2020-12-18,80300\r
2021-02-14,84600\r
2021-02-21,85100\r
2021-02-24,84600\r
2021-02-26,88800\r
2021-03-01,85300\r
2021-03-23,88700\r
2021-03-28,86700\r
2021-03-31,86900\r
2021-04-02,87800\r
2021-05-27,85400\r
2021-05-30,89300\r
2021-06-01,88400\r
2021-06-14,87800\r
2021-06-16,87900\r
2021-06-26,90700\r
2021-07-19,88200\r
2021-07-21,87700\r
2021-07-29,87500\r
2021-08-10,91300\r
2021-08-20,84200\r
2021-09-02,89800\r
2021-09-07,87400\r
2021-09-24,87000\r
2021-10-14,83400\r
2021-10-17,79800\r
2021-10-19,72500\r
2021-10-24,55700\r
2021-10-27,41400\r
2021-12-23,74800\r
2022-01-25,83100\r
2022-01-27,85300\r
2022-02-09,85400\r
2022-02-11,84500\r
2022-02-19,84400\r
2022-02-26,80800\r
2022-03-06,87000\r
2022-03-08,84600\r
2022-03-26,89800\r
2022-04-17,87600\r
2022-04-22,90800\r
2022-04-27,89000\r
2022-05-07,89200\r
2022-06-04,85800\r
2022-06-11,90900\r
2022-06-16,89900\r
2022-06-29,88100\r
2022-07-06,88100\r
2022-07-11,90500\r
2022-07-14,89100\r
2022-07-16,91100\r
2022-07-19,93800\r
2022-07-21,88700\r
2022-07-24,87400\r
2022-07-26,93300\r
2022-08-03,90400\r
2022-08-08,89600\r
2022-08-10,92000\r
2022-08-13,92500\r
2022-08-25,94200\r
2022-09-04,93500\r
2022-09-12,86100\r
2022-09-19,91600\r
2022-09-22,86100\r
2022-10-04,92000\r
2022-10-09,92300\r
2022-10-22,85600\r
2022-11-11,64600\r
2022-12-06,67600\r
2022-12-11,65300\r
2023-02-09,84000\r
2023-02-11,86400\r
2023-02-14,83900\r
2023-02-16,85100\r
2023-04-05,84500\r
2023-05-27,61500\r
2023-06-14,87700\r
2023-06-19,84500\r
2023-06-24,90000\r
2023-07-06,91100\r
`;export{r as default};
