const r=`date,value\r
2017-02-25,300\r
2017-02-28,300\r
2017-03-07,300\r
2017-03-17,5200\r
2017-03-20,5200\r
2017-04-06,6000\r
2017-04-09,6000\r
2017-04-16,7600\r
2017-04-19,7500\r
2017-06-15,7800\r
2017-06-18,7800\r
2017-06-25,7900\r
2017-06-28,7900\r
2017-07-05,7900\r
2017-08-04,7200\r
2017-08-07,7200\r
2017-08-12,7100\r
2017-08-14,7200\r
2017-08-17,6900\r
2017-08-19,6900\r
2017-08-22,6900\r
2017-08-24,7100\r
2017-09-01,6800\r
2017-09-08,6900\r
2017-09-11,6900\r
2017-09-13,7800\r
2017-09-16,7800\r
2017-09-21,7600\r
2017-09-23,8400\r
2017-09-26,8400\r
2017-09-28,8700\r
2017-10-03,8700\r
2017-10-06,8600\r
2017-10-08,8600\r
2017-10-11,6300\r
2017-10-13,6500\r
2017-10-16,6500\r
2017-10-23,6100\r
2017-11-07,6200\r
2017-11-12,7500\r
2017-11-15,7500\r
2017-11-17,7400\r
2017-11-20,7700\r
2017-11-22,7600\r
2017-11-25,7600\r
2017-11-27,7600\r
2018-02-10,1600\r
2018-02-15,900\r
2018-02-18,900\r
2018-02-25,3400\r
2018-03-02,4500\r
2018-03-07,2800\r
2018-03-22,3700\r
2018-03-27,3700\r
2018-03-30,3700\r
2018-04-01,4400\r
2018-04-04,2800\r
2018-04-21,8400\r
2018-04-24,8400\r
2018-04-26,8400\r
2018-05-01,8400\r
2018-05-11,8200\r
2018-05-16,8200\r
2018-05-19,8200\r
2018-05-21,8200\r
2018-06-20,8200\r
2018-06-23,8200\r
2018-06-25,8700\r
2018-07-03,8500\r
2018-07-05,8500\r
2018-07-08,7800\r
2018-07-10,7800\r
2018-08-04,6400\r
2018-08-12,6400\r
2018-08-14,6400\r
2018-09-03,6800\r
2018-09-06,6800\r
2018-09-08,6800\r
2018-09-11,6800\r
2018-09-13,6800\r
2018-09-18,7700\r
2018-09-21,7700\r
2018-09-23,8500\r
2018-09-26,8500\r
2018-09-28,7800\r
2018-10-01,8500\r
2018-10-03,8500\r
2018-10-06,7700\r
2018-10-08,7700\r
2018-10-23,6800\r
2018-10-26,6600\r
2018-10-31,6600\r
2018-11-02,6600\r
2018-11-17,6800\r
2018-11-22,6800\r
2018-11-25,6800\r
2018-11-27,7000\r
2019-02-10,400\r
2019-02-13,300\r
2019-02-15,300\r
2019-02-18,300\r
2019-02-25,100\r
2019-03-05,700\r
2019-03-10,600\r
2019-03-12,5900\r
2019-03-15,5800\r
2019-03-17,5800\r
2019-03-20,5800\r
2019-03-22,5800\r
2019-03-25,5800\r
2019-03-27,5800\r
2019-05-01,7600\r
2019-05-04,7600\r
2019-05-06,8500\r
2019-05-09,8500\r
2019-05-11,8500\r
2019-05-14,8500\r
2019-05-16,8500\r
2019-05-31,7000\r
2019-06-03,7000\r
2019-06-08,7000\r
2019-06-10,7000\r
2019-06-13,7000\r
2019-06-15,7000\r
2019-06-25,7400\r
2019-06-28,7400\r
2019-06-30,8100\r
2019-07-03,8100\r
2019-07-05,7500\r
2019-07-10,7500\r
2019-07-13,7500\r
2019-07-15,7800\r
2019-07-18,7600\r
2019-07-20,7600\r
2019-07-23,7600\r
2019-07-25,7600\r
2019-07-28,7600\r
2019-08-04,7000\r
2019-08-09,7500\r
2019-08-12,7500\r
2019-08-14,6900\r
2019-08-17,6900\r
2019-08-22,7400\r
2019-08-24,7000\r
2019-08-29,7900\r
2019-09-03,8300\r
2019-09-06,8300\r
2019-09-08,8300\r
2019-09-11,7500\r
2019-09-13,7700\r
2019-09-16,7700\r
2019-09-18,7700\r
2019-09-26,7700\r
2019-09-28,7700\r
2019-10-01,7600\r
2019-10-03,7700\r
2019-10-08,7500\r
2019-10-11,7500\r
2019-10-13,7500\r
2020-02-10,2600\r
2020-02-15,4200\r
2020-02-18,4200\r
2020-02-20,3600\r
2020-02-23,3300\r
2020-02-25,3300\r
2020-03-01,3500\r
2020-03-11,3600\r
2020-03-14,3600\r
2020-03-19,3200\r
2020-03-21,5800\r
2020-03-24,5800\r
2020-03-26,5800\r
2020-04-05,7900\r
2020-04-08,7900\r
2020-04-10,7900\r
2020-04-15,8400\r
2020-05-20,7300\r
2020-05-25,6900\r
2020-05-28,6900\r
2020-05-30,6900\r
2020-06-02,6900\r
2020-06-24,7000\r
2020-06-27,7000\r
2020-07-04,7000\r
2020-07-07,7000\r
2020-07-09,7000\r
2020-07-14,7900\r
2020-07-17,7900\r
2020-07-19,7500\r
2020-07-22,7900\r
2020-07-24,7900\r
2020-07-27,7900\r
2020-07-29,7900\r
2020-08-01,6700\r
2020-08-03,6700\r
2020-08-08,5900\r
2020-08-21,5900\r
2020-08-23,5900\r
2020-09-17,9200\r
2020-09-20,9200\r
2020-09-27,9200\r
2020-09-30,9200\r
2020-10-12,7700\r
2020-10-15,7700\r
2020-10-17,7700\r
2020-10-27,7700\r
2020-10-30,7000\r
2020-11-01,7000\r
2020-11-11,4000\r
2020-11-14,4000\r
2020-11-16,4000\r
2020-11-19,4000\r
2020-11-21,5200\r
2020-11-24,5200\r
2020-11-26,5200\r
2021-02-14,5500\r
2021-02-17,5500\r
2021-02-19,6400\r
2021-02-24,5600\r
2021-02-27,6100\r
2021-03-01,5500\r
2021-03-04,5900\r
2021-03-09,5600\r
2021-03-16,4400\r
2021-03-21,4400\r
2021-03-24,4400\r
2021-03-26,4400\r
2021-03-31,8000\r
2021-04-03,8000\r
2021-04-05,8000\r
2021-04-08,8000\r
2021-04-13,6600\r
2021-04-15,7500\r
2021-04-18,7500\r
2021-04-23,7500\r
2021-07-09,6700\r
2021-07-14,6700\r
2021-07-19,6700\r
2021-07-22,5600\r
2021-07-29,5600\r
2021-08-13,5000\r
2021-08-16,5000\r
2021-08-18,5000\r
2021-08-21,5000\r
2021-08-23,5000\r
2021-09-17,4600\r
2021-09-22,8400\r
2021-09-27,8400\r
2021-09-30,8400\r
2021-10-02,8400\r
2021-10-07,7900\r
2021-10-10,7900\r
2021-10-12,7100\r
2021-10-15,7900\r
2021-10-17,7400\r
2021-10-22,7400\r
2021-10-25,6800\r
2021-10-27,6300\r
2021-11-01,6400\r
2021-11-04,5300\r
2021-11-16,3400\r
2021-11-19,3400\r
2021-11-26,3400\r
2022-02-09,7500\r
2022-02-12,5400\r
2022-02-14,5500\r
2022-02-17,5500\r
2022-02-22,1600\r
2022-02-24,1600\r
2022-04-05,6400\r
2022-04-10,6800\r
2022-04-15,6700\r
2022-04-18,7100\r
2022-05-10,7300\r
2022-05-13,7300\r
2022-05-15,7300\r
2022-05-18,7300\r
2022-05-30,8500\r
2022-06-02,8500\r
2022-06-04,8500\r
2022-06-07,8500\r
2022-06-09,8500\r
2022-06-19,7100\r
2022-06-22,7100\r
2022-06-24,7100\r
2022-06-29,7100\r
2022-07-09,6400\r
2022-07-12,6400\r
2022-07-14,7700\r
2022-07-17,7700\r
2022-07-19,7700\r
2022-07-24,7900\r
2022-07-27,7400\r
2022-08-01,7400\r
2022-08-03,7400\r
2022-08-08,7200\r
2022-08-11,7200\r
2022-08-13,7900\r
2022-08-23,7900\r
2022-09-07,7200\r
2022-09-10,7200\r
2022-09-22,7300\r
2022-09-25,7300\r
2022-09-30,7300\r
2022-10-02,8500\r
2022-10-05,8500\r
2022-10-07,8500\r
2022-10-12,8500\r
2022-10-22,8400\r
2022-10-30,8400\r
2022-11-01,8400\r
2022-11-06,6500\r
2022-11-11,6500\r
2022-11-16,6800\r
2022-11-19,6700\r
2022-11-26,6700\r
2023-02-09,3800\r
2023-02-12,4100\r
2023-02-14,2300\r
2023-02-17,2600\r
2023-02-19,1600\r
2023-02-24,500\r
2023-02-27,2400\r
2023-03-09,900\r
2023-03-14,900\r
2023-03-16,6000\r
2023-04-20,7300\r
2023-04-30,7300\r
`;export{r as default};