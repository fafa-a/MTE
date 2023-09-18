const r=`date,value\r
2017-02-15,4100\r
2017-02-25,4100\r
2017-03-17,3000\r
2017-03-27,3400\r
2017-04-03,3500\r
2017-04-06,3500\r
2017-04-23,3700\r
2017-05-16,8700\r
2017-05-23,8700\r
2017-05-26,8700\r
2017-06-02,3000\r
2017-06-05,3000\r
2017-06-15,2800\r
2017-06-22,3600\r
2017-06-25,2800\r
2017-07-02,3800\r
2017-07-05,2800\r
2017-07-07,2500\r
2017-07-17,3700\r
2017-07-18,3700\r
2017-07-22,3700\r
2017-08-14,3100\r
2017-08-19,3100\r
2017-08-21,3700\r
2017-08-22,3700\r
2017-08-24,3700\r
2017-08-26,4400\r
2017-08-27,4400\r
2017-08-29,3300\r
2017-09-03,3800\r
2017-10-05,3600\r
2017-10-06,3600\r
2017-10-11,3600\r
2017-10-13,3900\r
2017-10-15,3800\r
2017-10-16,4000\r
2017-10-18,3800\r
2017-10-25,4000\r
2017-10-26,3300\r
2017-10-28,3300\r
2017-11-04,3000\r
2017-11-05,3000\r
2017-11-07,3000\r
2017-11-14,3000\r
2017-11-17,3400\r
2017-11-22,4000\r
2017-11-27,4000\r
2018-02-27,3100\r
2018-03-05,3100\r
2018-03-14,3800\r
2018-03-17,3800\r
2018-03-19,4200\r
2018-03-20,4200\r
2018-03-24,4200\r
2018-03-25,3400\r
2018-03-29,3400\r
2018-04-18,3200\r
2018-04-19,3200\r
2018-04-21,3500\r
2018-04-26,3500\r
2018-05-06,3100\r
2018-05-08,3100\r
2018-05-11,4000\r
2018-05-18,3900\r
2018-05-19,3900\r
2018-05-21,3900\r
2018-05-26,2600\r
2018-06-20,2900\r
2018-06-22,3600\r
2018-06-23,3600\r
2018-06-25,3000\r
2018-06-27,3300\r
2018-06-28,3300\r
2018-07-03,3400\r
2018-07-07,3800\r
2018-07-08,3700\r
2018-07-12,3300\r
2018-07-22,3300\r
2018-07-27,3500\r
2018-07-28,3500\r
2018-07-30,3500\r
2018-08-01,3500\r
2018-08-02,3500\r
2018-08-04,3500\r
2018-08-06,3600\r
2018-08-07,3200\r
2018-08-11,3200\r
2018-08-12,3200\r
2018-08-14,3200\r
2018-08-16,3200\r
2018-08-19,2900\r
2018-08-22,2900\r
2018-08-26,2900\r
2018-09-03,2300\r
2018-09-05,2300\r
2018-09-08,3100\r
2018-09-10,2700\r
2018-09-11,2700\r
2018-09-18,3100\r
2018-09-20,3900\r
2018-09-25,4000\r
2018-09-26,4000\r
2018-09-28,4000\r
2018-09-30,3900\r
2018-10-05,4000\r
2018-10-06,3400\r
2018-10-10,3400\r
2018-10-11,3400\r
2018-10-13,4300\r
2018-10-16,3100\r
2018-10-18,4100\r
2018-10-20,3500\r
2018-10-21,3500\r
2018-10-23,3600\r
2018-10-25,3200\r
2018-10-30,2800\r
2018-11-09,4000\r
2018-11-14,4000\r
2018-11-19,4000\r
2018-11-22,4200\r
2018-11-24,3600\r
2018-11-27,5600\r
2018-12-07,4400\r
2018-12-09,4400\r
2018-12-10,4400\r
2018-12-14,4400\r
2018-12-17,4400\r
2019-02-05,4000\r
2019-02-13,4000\r
2019-02-15,4100\r
2019-02-17,3500\r
2019-02-18,3500\r
2019-02-20,4200\r
2019-02-22,4200\r
2019-02-23,4200\r
2019-02-25,3300\r
2019-02-27,4100\r
2019-03-07,4200\r
2019-03-22,3600\r
2019-03-24,3600\r
2019-03-27,4600\r
2019-03-29,3600\r
2019-03-30,3600\r
2019-04-01,3600\r
2019-04-08,4900\r
2019-04-09,4900\r
2019-04-11,4900\r
2019-04-13,3400\r
2019-05-01,4000\r
2019-05-06,4000\r
2019-05-13,4100\r
2019-05-14,4100\r
2019-05-16,3700\r
2019-05-23,3700\r
2019-05-28,3700\r
2019-05-29,4300\r
2019-05-31,3500\r
2019-06-02,3400\r
2019-06-08,3700\r
2019-06-27,3400\r
2019-06-28,3400\r
2019-06-30,3800\r
2019-07-02,3400\r
2019-07-03,3400\r
2019-07-05,3800\r
2019-07-07,3800\r
2019-07-08,3800\r
2019-07-10,3500\r
2019-07-12,3500\r
2019-07-13,3700\r
2019-07-15,3600\r
2019-07-17,3600\r
2019-07-20,3900\r
2019-07-22,3900\r
2019-07-23,3900\r
2019-07-25,3400\r
2019-08-02,4300\r
2019-08-04,3300\r
2019-08-09,3900\r
2019-08-12,3700\r
2019-08-14,3800\r
2019-08-22,3300\r
2019-08-24,3500\r
2019-08-26,3300\r
2019-08-29,3300\r
2019-08-31,4100\r
2019-09-03,3200\r
2019-09-06,3200\r
2019-09-10,3800\r
2019-09-13,3300\r
2019-09-15,3000\r
2019-09-16,3000\r
2019-09-18,3000\r
2019-09-20,3100\r
2019-09-21,3100\r
2019-10-03,3400\r
2019-10-08,2700\r
2019-10-11,2700\r
2019-10-13,3200\r
2019-10-21,3100\r
2019-11-04,2800\r
2019-11-07,2800\r
2019-11-09,2800\r
2019-11-24,2700\r
2019-12-04,3300\r
2019-12-05,3300\r
2019-12-10,3000\r
2019-12-17,3000\r
2020-01-06,3000\r
2020-01-13,3000\r
2020-01-16,3600\r
2020-01-18,3600\r
2020-01-19,3600\r
2020-01-21,3200\r
2020-01-24,3500\r
2020-02-15,3400\r
2020-02-18,3400\r
2020-02-20,3400\r
2020-02-22,2700\r
2020-03-18,2900\r
2020-03-19,2900\r
2020-03-21,3800\r
2020-03-23,3200\r
2020-03-24,3200\r
2020-03-26,3600\r
2020-03-28,3400\r
2020-03-31,3700\r
2020-04-02,3500\r
2020-04-05,3500\r
2020-04-07,3600\r
2020-04-08,3500\r
2020-04-10,3500\r
2020-04-12,3100\r
2020-04-13,3400\r
2020-04-15,3300\r
2020-04-17,3400\r
2020-04-22,3400\r
2020-04-23,3400\r
2020-04-27,3200\r
2020-05-07,1900\r
2020-05-17,2600\r
2020-05-18,2600\r
2020-05-20,2500\r
2020-05-25,2800\r
2020-05-27,2800\r
2020-05-28,2800\r
2020-05-30,2800\r
2020-06-01,2800\r
2020-06-02,3000\r
2020-06-26,2600\r
2020-06-29,2600\r
2020-07-04,3500\r
2020-07-06,3500\r
2020-07-07,3500\r
2020-07-09,3100\r
2020-07-11,3100\r
2020-07-12,3000\r
2020-07-14,3000\r
2020-07-17,3000\r
2020-07-19,3700\r
2020-07-21,3800\r
2020-07-22,3800\r
2020-07-24,3500\r
2020-07-27,3700\r
2020-07-29,3900\r
2020-07-31,3900\r
2020-08-05,3400\r
2020-08-06,3900\r
2020-08-08,2900\r
2020-08-10,2700\r
2020-08-15,3800\r
2020-08-20,3200\r
2020-08-25,3100\r
2020-09-04,2800\r
2020-09-07,3000\r
2020-09-09,2800\r
2020-09-10,3600\r
2020-09-12,2800\r
2020-09-14,3100\r
2020-09-15,3100\r
2020-09-17,2500\r
2020-11-06,2600\r
2020-11-08,2600\r
2020-11-09,2600\r
2020-11-11,2600\r
2020-11-14,2600\r
2020-11-18,2400\r
2020-11-19,2400\r
2020-11-21,2800\r
2020-11-23,2600\r
2020-11-28,3100\r
2020-11-29,3100\r
2020-12-04,3300\r
2020-12-11,5200\r
2020-12-13,5200\r
2020-12-18,5000\r
2020-12-24,5000\r
2021-02-21,2900\r
2021-02-24,3300\r
2021-02-27,3300\r
2021-03-01,3100\r
2021-03-04,3600\r
2021-03-06,3600\r
2021-03-08,3100\r
2021-03-09,3100\r
2021-03-28,3700\r
2021-03-29,3700\r
2021-03-31,4200\r
2021-04-02,3000\r
2021-04-03,3000\r
2021-04-05,3000\r
2021-04-07,3000\r
2021-04-08,3000\r
2021-04-15,2300\r
2021-04-22,3200\r
2021-04-23,3200\r
2021-04-25,3200\r
2021-04-27,4400\r
2021-05-03,3900\r
2021-05-05,3900\r
2021-05-27,1700\r
2021-05-28,1700\r
2021-05-30,3800\r
2021-06-01,2400\r
2021-06-09,3800\r
2021-06-11,2400\r
2021-06-14,3200\r
2021-06-16,3200\r
2021-06-26,1600\r
2021-07-04,1900\r
2021-07-19,2900\r
2021-07-21,3100\r
2021-07-22,3100\r
2021-07-29,3100\r
2021-08-10,1800\r
2021-08-11,1800\r
2021-08-15,1900\r
2021-08-20,1900\r
2021-08-25,2000\r
2021-08-26,2000\r
2021-09-02,2500\r
2021-09-05,2500\r
2021-09-07,2700\r
2021-09-12,2300\r
2021-09-17,2500\r
2021-09-22,1700\r
2021-09-24,2200\r
2021-09-25,2200\r
2021-09-27,2200\r
2021-09-30,2200\r
2021-10-02,1900\r
2021-10-04,2400\r
2021-10-09,2100\r
2021-10-14,2300\r
2021-10-15,2300\r
2021-10-17,2300\r
2021-10-19,2700\r
2021-10-22,1800\r
2021-10-24,2400\r
2021-10-27,2500\r
2021-11-01,2100\r
2021-12-23,2300\r
2022-01-15,2300\r
2022-01-25,3000\r
2022-02-09,2600\r
2022-02-26,2900\r
2022-02-27,2900\r
2022-03-06,2900\r
2022-03-08,2600\r
2022-03-09,2700\r
2022-03-23,1800\r
2022-03-24,1800\r
2022-03-26,1800\r
2022-04-17,1700\r
2022-04-20,1700\r
2022-04-22,1700\r
2022-05-02,1800\r
2022-05-03,1800\r
2022-05-08,1800\r
2022-05-10,1900\r
2022-05-15,1300\r
2022-05-17,2000\r
2022-05-30,2100\r
2022-06-01,2100\r
2022-06-02,2100\r
2022-06-04,2100\r
2022-06-11,2100\r
2022-06-14,2100\r
2022-06-16,1900\r
2022-06-21,1700\r
2022-06-29,2100\r
2022-07-02,1400\r
2022-07-04,1500\r
2022-07-06,1500\r
2022-07-11,1600\r
2022-07-12,1600\r
2022-07-14,1500\r
2022-07-16,1700\r
2022-07-17,1700\r
2022-07-19,1800\r
2022-07-21,1600\r
2022-07-24,1700\r
2022-07-31,1700\r
2022-08-03,1700\r
2022-08-06,1300\r
2022-08-08,1500\r
2022-08-10,1500\r
2022-08-11,1500\r
2022-08-13,1500\r
2022-08-18,1300\r
2022-08-25,1400\r
2022-08-28,1400\r
2022-08-31,1400\r
2022-09-02,1400\r
2022-09-04,1800\r
2022-09-12,2000\r
2022-09-19,2100\r
2022-09-20,2100\r
2022-09-22,1900\r
2022-10-04,1600\r
2022-10-05,1600\r
2022-10-09,2300\r
2022-10-19,2200\r
2022-10-22,2100\r
2022-11-11,2500\r
2022-11-13,2500\r
2022-12-08,2500\r
2022-12-09,2500\r
2022-12-11,2500\r
2022-12-16,2500\r
2022-12-28,2500\r
2023-01-15,1600\r
2023-02-11,1600\r
2023-02-12,1600\r
2023-02-14,2200\r
2023-02-16,2200\r
2023-03-28,3500\r
2023-04-05,3500\r
2023-04-08,1300\r
2023-04-13,1300\r
2023-04-20,1100\r
2023-05-27,1400\r
2023-05-28,1400\r
2023-05-30,1200\r
2023-06-01,1200\r
2023-06-02,1200\r
2023-06-04,500\r
2023-06-06,500\r
2023-06-11,1200\r
2023-06-14,1500\r
2023-06-16,1500\r
2023-06-19,1500\r
2023-06-24,1500\r
2023-06-27,1200\r
2023-07-09,1300\r
2023-07-11,1300\r
2023-07-14,1300\r
2023-07-17,1300\r
2023-07-19,1100\r
2023-07-22,1100\r
2023-07-26,1000\r
2023-07-31,1400\r
2023-08-08,1600\r
2023-08-10,1600\r
2023-08-11,900\r
2023-08-18,900\r
2023-08-20,1400\r
2023-08-21,1400\r
2023-08-23,1000\r
2023-08-26,1000\r
`;export{r as default};
