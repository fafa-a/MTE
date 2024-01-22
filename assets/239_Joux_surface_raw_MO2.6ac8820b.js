const r=`date,value\r
2017-03-14,89300\r
2017-04-03,79900\r
2017-04-10,79900\r
2017-06-22,88500\r
2017-07-02,90700\r
2017-07-07,86200\r
2017-07-09,86200\r
2017-07-12,94400\r
2017-07-14,94400\r
2017-07-17,87000\r
2017-07-22,96300\r
2017-07-24,88700\r
2017-07-27,88700\r
2017-08-06,78500\r
2017-08-13,78500\r
2017-08-21,79000\r
2017-08-23,79000\r
2017-08-26,83000\r
2017-09-05,73600\r
2017-09-10,79300\r
2017-09-12,79300\r
2017-09-15,79300\r
2017-09-20,88700\r
2017-09-22,50400\r
2017-09-27,50400\r
2017-10-05,69000\r
2017-10-07,69000\r
2017-10-10,69700\r
2017-10-12,69700\r
2017-10-15,69300\r
2017-10-17,67700\r
2017-10-22,66800\r
2017-10-25,66800\r
2017-10-30,60100\r
2018-03-14,81900\r
2018-03-16,81900\r
2018-03-19,81900\r
2018-03-21,81900\r
2018-03-24,81900\r
2018-04-18,89700\r
2018-04-20,89700\r
2018-04-25,89700\r
2018-06-22,80900\r
2018-06-24,80900\r
2018-06-27,85400\r
2018-06-29,85400\r
2018-07-02,84800\r
2018-07-04,81100\r
2018-07-07,81100\r
2018-07-12,85100\r
2018-07-17,85100\r
2018-07-19,85100\r
2018-07-22,85100\r
2018-07-27,90600\r
2018-07-29,90600\r
2018-08-01,90600\r
2018-08-03,90600\r
2018-08-06,92600\r
2018-08-11,93100\r
2018-08-16,88300\r
2018-08-18,83500\r
2018-08-21,83500\r
2018-08-26,82900\r
2018-08-28,82400\r
2018-08-31,82400\r
2018-09-02,82400\r
2018-09-05,82400\r
2018-09-25,76100\r
2018-09-27,76100\r
2018-10-02,76000\r
2018-10-05,76100\r
2018-10-10,75400\r
2018-10-12,75400\r
2018-10-15,75400\r
2018-10-17,71100\r
2018-10-20,72900\r
2018-10-22,67400\r
2018-10-25,67400\r
2018-10-30,67400\r
2018-11-04,65600\r
2018-11-09,65600\r
2018-11-11,65600\r
2018-11-14,65600\r
2019-02-12,3800\r
2019-02-14,3800\r
2019-02-17,59800\r
2019-02-19,59800\r
2019-02-22,58600\r
2019-02-24,58600\r
2019-02-27,78200\r
2019-03-04,77100\r
2019-03-24,85700\r
2019-03-26,85700\r
2019-03-29,87600\r
2019-03-31,87600\r
2019-04-05,87600\r
2019-04-13,90000\r
2019-04-15,75800\r
2019-04-18,75800\r
2019-04-20,75800\r
2019-04-23,75800\r
2019-05-13,85500\r
2019-05-15,85500\r
2019-05-23,95000\r
2019-05-25,95000\r
2019-05-30,94800\r
2019-06-02,97200\r
2019-06-04,97200\r
2019-06-07,97200\r
2019-06-12,96900\r
2019-06-27,89900\r
2019-06-29,89900\r
2019-07-02,89900\r
2019-07-04,89900\r
2019-07-07,87500\r
2019-07-09,87500\r
2019-07-12,87500\r
2019-07-14,91000\r
2019-07-17,87400\r
2019-07-19,87400\r
2019-07-22,86000\r
2019-07-24,88700\r
2019-07-29,86800\r
2019-08-01,87100\r
2019-08-03,84200\r
2019-08-06,84200\r
2019-08-11,91900\r
2019-08-13,91900\r
2019-08-16,91900\r
2019-08-18,91900\r
2019-08-21,91900\r
2019-08-23,91900\r
2019-08-26,92700\r
2019-08-28,79000\r
2019-08-31,85200\r
2019-09-02,85200\r
2019-09-07,85200\r
2019-09-12,25800\r
2019-09-15,26600\r
2019-09-17,8100\r
2019-09-20,8700\r
2019-09-22,8700\r
2019-09-27,8700\r
2019-09-30,8700\r
2020-02-22,75700\r
2020-02-24,71800\r
2020-03-08,71800\r
2020-03-18,70200\r
2020-03-20,70200\r
2020-03-23,70200\r
2020-03-25,70200\r
2020-03-28,93500\r
2020-04-02,91000\r
2020-04-04,93200\r
2020-04-07,93100\r
2020-04-09,93100\r
2020-04-12,93400\r
2020-04-14,89800\r
2020-04-17,89800\r
2020-04-22,94600\r
2020-04-24,87600\r
2020-04-27,87600\r
2020-05-07,92100\r
2020-05-09,92100\r
2020-05-17,92100\r
2020-05-19,92100\r
2020-05-22,92100\r
2020-05-27,95100\r
2020-05-29,95100\r
2020-06-01,95100\r
2020-07-01,88200\r
2020-07-08,88200\r
2020-07-11,88200\r
2020-07-13,88200\r
2020-07-21,88800\r
2020-07-23,88800\r
2020-07-28,88800\r
2020-07-31,91200\r
2020-08-05,90300\r
2020-08-07,93800\r
2020-08-10,93800\r
2020-08-15,92600\r
2020-08-20,91600\r
2020-08-25,92100\r
2020-08-27,92100\r
2020-09-01,93800\r
2020-09-04,88400\r
2020-09-09,90800\r
2020-09-14,91900\r
2020-09-16,91900\r
2020-09-19,91900\r
2021-02-21,84400\r
2021-02-23,84400\r
2021-02-26,87800\r
2021-02-28,87800\r
2021-03-05,81400\r
2021-03-23,88400\r
2021-03-25,88400\r
2021-03-28,89600\r
2021-03-30,89600\r
2021-04-02,86400\r
2021-04-04,87700\r
2021-04-07,87700\r
2021-04-09,70300\r
2021-04-27,88300\r
2021-06-01,80100\r
2021-06-03,79700\r
2021-06-11,79700\r
2021-06-16,85200\r
2021-06-18,85200\r
2021-06-21,85200\r
2021-06-26,85600\r
2021-07-21,75200\r
2021-07-23,75200\r
2021-08-10,75600\r
2021-08-12,75600\r
2021-08-15,75600\r
2021-08-17,75600\r
2021-08-20,82100\r
2021-08-25,81800\r
2021-08-27,81800\r
2021-09-24,78200\r
2021-09-26,78200\r
2021-09-29,78200\r
2021-10-01,78200\r
2021-10-14,71600\r
2021-10-16,71600\r
2021-10-21,71600\r
2021-10-24,72300\r
2022-02-26,72000\r
2022-02-28,72000\r
2022-03-03,72000\r
2022-03-05,72000\r
2022-03-08,80000\r
2022-03-10,78600\r
2022-04-17,86700\r
2022-04-19,86700\r
2022-04-27,86800\r
2022-06-11,92200\r
2022-06-13,92200\r
2022-06-16,94300\r
2022-06-18,94300\r
2022-06-21,92800\r
2022-06-23,96100\r
2022-06-28,92000\r
2022-07-01,91500\r
2022-07-06,92400\r
2022-07-08,92400\r
2022-07-11,93600\r
2022-07-13,93600\r
2022-07-16,92400\r
2022-07-18,96800\r
2022-07-21,89900\r
2022-07-26,87400\r
2022-07-28,91000\r
2022-07-31,91000\r
2022-08-02,81300\r
2022-08-05,81300\r
2022-08-10,89100\r
2022-08-12,89100\r
2022-08-15,89100\r
2022-08-17,89100\r
2022-08-25,91300\r
2022-08-30,91300\r
2022-09-01,91300\r
2022-09-04,91600\r
2022-10-09,79800\r
2022-10-11,79800\r
2022-10-16,79800\r
2023-02-16,76300\r
2023-02-21,80400\r
2023-02-26,82300\r
2023-03-03,81300\r
2023-06-16,84300\r
2023-06-23,84300\r
2023-06-26,85400\r
2023-06-28,85000\r
2023-07-11,97100\r
2023-07-13,97100\r
2023-07-16,97100\r
2023-07-18,94900\r
2023-07-21,94900\r
2023-07-31,88800\r
2023-08-02,88800\r
2023-08-05,88800\r
2023-08-07,88800\r
2023-08-15,89100\r
2023-08-17,89100\r
2023-08-22,89100\r
2023-08-25,89100\r
2023-09-04,89200\r
2023-09-06,89200\r
2023-09-11,89200\r
2023-09-14,89200\r
2023-09-24,71600\r
2023-09-26,71600\r
2023-09-29,81100\r
2023-10-01,81100\r
2023-10-06,78700\r
2023-10-09,78700\r
`;export{r as default};