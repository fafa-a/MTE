const r=`date,value\r
2017-04-16,100\r
2017-04-23,1200\r
2017-05-06,7200\r
2017-06-12,200\r
2017-06-15,3900\r
2017-06-22,5200\r
2017-07-05,5800\r
2017-07-12,6000\r
2017-07-22,7400\r
2017-07-25,11700\r
2017-07-27,11400\r
2017-08-11,12900\r
2017-08-14,11300\r
2017-08-21,700\r
2017-08-24,2600\r
2017-08-26,4400\r
2017-09-05,8300\r
2017-09-08,6600\r
2017-09-13,4800\r
2017-09-20,14300\r
2017-09-28,11800\r
2017-10-05,9300\r
2017-10-08,6700\r
2017-10-10,1300\r
2017-10-13,4700\r
2017-10-15,7800\r
2017-10-25,10600\r
2017-10-28,10000\r
2017-11-07,10100\r
2018-04-21,200\r
2018-05-11,9700\r
2018-06-17,11300\r
2018-06-25,11000\r
2018-06-27,14800\r
2018-08-16,2300\r
2018-08-21,3400\r
2018-08-26,2800\r
2018-09-03,3400\r
2018-09-18,9100\r
2018-09-20,9000\r
2018-09-23,9500\r
2018-09-25,10400\r
2018-09-28,10500\r
2018-10-05,7300\r
2018-10-13,900\r
2018-10-23,8600\r
2018-10-25,9000\r
2018-11-14,13500\r
2018-11-24,12100\r
2018-12-07,2900\r
2018-12-09,12500\r
2019-05-13,5900\r
2019-05-16,7200\r
2019-05-23,6300\r
2019-05-31,3900\r
2019-06-12,6100\r
2019-06-17,7000\r
2019-06-22,4500\r
2019-06-25,8600\r
2019-06-27,2600\r
2019-07-05,10000\r
2019-07-07,5100\r
2019-07-12,11000\r
2019-07-15,4100\r
2019-07-20,13900\r
2019-07-22,13100\r
2019-07-25,10700\r
2019-08-06,10800\r
2019-08-09,14000\r
2019-08-14,12600\r
2019-08-16,12000\r
2019-08-21,8500\r
2019-08-31,6400\r
2019-09-03,300\r
2019-09-13,2200\r
2019-09-28,8200\r
2019-09-30,7400\r
2019-10-03,11000\r
2019-10-05,8400\r
2019-10-08,8200\r
2019-10-10,9500\r
2019-10-13,10500\r
2019-10-25,7300\r
2019-10-30,10600\r
2019-11-09,7100\r
2019-11-27,7600\r
2020-01-01,100\r
2020-05-05,10500\r
2020-05-07,14000\r
2020-05-20,3300\r
2020-05-22,2700\r
2020-05-25,2600\r
2020-05-27,2300\r
2020-06-21,3000\r
2020-06-24,3600\r
2020-07-04,10800\r
2020-07-19,9900\r
2020-07-21,13700\r
2020-07-26,11800\r
2020-07-31,13800\r
2020-08-05,11600\r
2020-08-20,10300\r
2020-08-25,9400\r
2020-09-04,8800\r
2020-09-12,6400\r
2020-09-14,5800\r
2020-09-27,8900\r
2020-09-29,11700\r
2020-10-17,13700\r
2020-10-24,7400\r
2020-11-01,7800\r
2020-11-08,9800\r
2020-11-11,7300\r
2020-11-18,6700\r
2020-11-23,8700\r
2021-01-12,100\r
2021-04-05,1700\r
2021-04-15,7200\r
2021-05-20,11400\r
2021-06-09,1900\r
2021-06-14,1300\r
2021-06-16,7900\r
2021-06-21,12600\r
2021-07-09,7600\r
2021-07-11,7100\r
2021-07-16,11700\r
2021-07-19,11500\r
2021-08-10,13700\r
2021-08-13,7200\r
2021-08-15,9800\r
2021-08-18,800\r
2021-08-20,3000\r
2021-08-28,5100\r
2021-09-17,2300\r
2021-09-22,4300\r
2021-10-07,6300\r
2021-10-09,7400\r
2021-10-12,8300\r
2021-10-17,10400\r
2021-10-27,8500\r
2021-11-06,6900\r
2022-05-10,3200\r
2022-05-12,16200\r
2022-05-17,15800\r
2022-05-20,13600\r
2022-05-27,14700\r
2022-06-01,14600\r
2022-06-04,13400\r
2022-06-06,14800\r
2022-06-09,13500\r
2022-06-19,12800\r
2022-06-29,12300\r
2022-07-01,15500\r
2022-07-09,7400\r
2022-07-11,14700\r
2022-07-14,12900\r
2022-07-16,15200\r
2022-07-19,11300\r
2022-07-21,15000\r
2022-07-31,14700\r
2022-08-03,13900\r
2022-08-20,14300\r
2022-08-28,14300\r
2022-09-19,14200\r
2022-10-02,14300\r
2022-10-04,13600\r
2022-11-01,12400\r
2022-11-06,10800\r
2022-11-13,11100\r
2022-11-16,10200\r
2023-02-09,1200\r
2023-04-07,9800\r
2023-04-10,5100\r
2023-04-15,14000\r
2023-04-17,14100\r
2023-05-02,7700\r
2023-06-16,8300\r
2023-06-21,4300\r
2023-06-24,8100\r
2023-07-09,14700\r
2023-07-14,13000\r
2023-07-29,12200\r
2023-07-31,12900\r
2023-08-08,10500\r
2023-08-10,12700\r
2023-08-15,12500\r
2023-08-23,13400\r
2023-08-25,14400\r
2023-09-17,12400\r
2023-09-19,11500\r
2023-09-24,9000\r
2023-09-27,7200\r
2023-09-29,11600\r
2023-10-02,12500\r
2023-10-04,10800\r
2023-10-07,11400\r
2023-10-12,12900\r
2023-10-17,12200\r
`;export{r as default};
