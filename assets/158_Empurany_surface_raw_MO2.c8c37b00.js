const r=`date,value\r
2017-01-03,14100\r
2017-01-10,14100\r
2017-01-13,14100\r
2017-02-22,14500\r
2017-03-01,14500\r
2017-03-14,12800\r
2017-03-21,12800\r
2017-04-03,15200\r
2017-04-10,15200\r
2017-04-23,17400\r
2017-05-03,17400\r
2017-05-23,16600\r
2017-05-30,16600\r
2017-06-02,16800\r
2017-06-09,14200\r
2017-06-12,16800\r
2017-06-19,16800\r
2017-06-22,17800\r
2017-06-29,17200\r
2017-07-02,17800\r
2017-07-07,14300\r
2017-07-09,14300\r
2017-07-12,14500\r
2017-07-14,14500\r
2017-07-17,14500\r
2017-07-22,14600\r
2017-07-24,14300\r
2017-07-27,14300\r
2017-07-29,14300\r
2017-08-06,10800\r
2017-08-11,10800\r
2017-08-13,8900\r
2017-08-21,9000\r
2017-08-23,9000\r
2017-08-26,10900\r
2017-09-05,9900\r
2017-10-05,2600\r
2017-10-07,2600\r
2017-10-10,4000\r
2017-10-12,4000\r
2017-10-15,2700\r
2017-10-17,3800\r
2017-10-22,2600\r
2017-10-25,2600\r
2017-10-30,2900\r
2017-11-01,2900\r
2017-11-09,2900\r
2017-11-29,1500\r
2017-12-06,1500\r
2017-12-09,1500\r
2018-01-13,4200\r
2018-01-23,4600\r
2018-01-28,3900\r
2018-01-30,3900\r
2018-02-02,3900\r
2018-02-12,11300\r
2018-02-14,11300\r
2018-02-19,11300\r
2018-02-22,11300\r
2018-02-27,13800\r
2018-03-06,13800\r
2018-03-09,13800\r
2018-03-14,14100\r
2018-03-16,14100\r
2018-03-19,14100\r
2018-03-21,14100\r
2018-03-24,14100\r
2018-04-18,15300\r
2018-04-20,15300\r
2018-04-23,15300\r
2018-04-25,15300\r
2018-07-02,17000\r
2018-07-04,16700\r
2018-07-07,18700\r
2018-07-09,18700\r
2018-07-12,18700\r
2018-07-17,18100\r
2018-07-19,15100\r
2018-07-22,15100\r
2018-07-27,16900\r
2018-07-29,16900\r
2018-08-01,17300\r
2018-08-03,17300\r
2018-08-06,17300\r
2018-08-08,13900\r
2018-08-11,14400\r
2018-08-16,13800\r
2018-08-21,11900\r
2018-08-23,12600\r
2018-08-26,11600\r
2018-08-28,11900\r
2018-08-31,11900\r
2018-09-02,10200\r
2018-09-05,10000\r
2018-09-07,9100\r
2018-09-10,9600\r
2018-09-12,9600\r
2018-09-17,8600\r
2018-09-20,9400\r
2018-09-22,7800\r
2018-09-25,7800\r
2018-09-27,7800\r
2018-10-05,3800\r
2018-10-07,3800\r
2018-10-10,3800\r
2018-10-12,3800\r
2018-10-20,2800\r
2018-10-22,2800\r
2018-10-25,2800\r
2018-10-30,2800\r
2018-11-04,4700\r
2018-11-14,4700\r
2019-01-03,1000\r
2019-01-05,1000\r
2019-01-10,1000\r
2019-01-15,1000\r
2019-02-12,3500\r
2019-02-14,3500\r
2019-02-17,10300\r
2019-02-19,10300\r
2019-02-22,7900\r
2019-02-27,10800\r
2019-03-01,10500\r
2019-03-11,12800\r
2019-03-14,12800\r
2019-03-24,10200\r
2019-03-26,10200\r
2019-03-29,12500\r
2019-03-31,12500\r
2019-04-05,13300\r
2019-04-08,13300\r
2019-04-13,15200\r
2019-04-15,14800\r
2019-04-18,14800\r
2019-04-20,14800\r
2019-05-13,16500\r
2019-05-15,16500\r
2019-05-23,16600\r
2019-05-25,16600\r
2019-05-30,16400\r
2019-06-02,16900\r
2019-06-04,16900\r
2019-06-07,16900\r
2019-06-12,14600\r
2019-06-27,14000\r
2019-06-29,14000\r
2019-07-02,16400\r
2019-07-04,16400\r
2019-07-07,16400\r
2019-07-12,16400\r
2019-07-14,15700\r
2019-07-17,16200\r
2019-07-19,13900\r
2019-07-22,15000\r
2019-07-24,15000\r
2019-07-29,15000\r
2019-08-03,12500\r
2019-08-06,14300\r
2019-08-08,12300\r
2019-08-11,12600\r
2019-08-13,12600\r
2019-08-16,10800\r
2019-08-18,10800\r
2019-08-21,11000\r
2019-08-23,10300\r
2019-08-26,10300\r
2019-08-31,9800\r
2019-09-02,9200\r
2019-09-05,9200\r
2019-09-07,9700\r
2019-09-12,9300\r
2019-09-15,10200\r
2019-09-17,7000\r
2019-09-20,8200\r
2019-09-25,8200\r
2019-09-27,8200\r
2019-09-30,8200\r
2019-10-02,6500\r
2019-10-05,6500\r
2019-12-29,14900\r
2020-02-22,3700\r
2020-02-24,3700\r
2020-03-03,3700\r
2020-03-08,7400\r
2020-03-10,6600\r
2020-03-13,6600\r
2020-03-15,6600\r
2020-03-18,8700\r
2020-03-20,8700\r
2020-03-25,7600\r
2020-03-28,11800\r
2020-04-02,11800\r
2020-04-04,11800\r
2020-04-07,12400\r
2020-04-09,12400\r
2020-04-14,12100\r
2020-05-17,13100\r
2020-05-19,13100\r
2020-05-22,13100\r
2020-05-24,13100\r
2020-05-27,14900\r
2020-05-29,14900\r
2020-06-01,14900\r
2020-06-03,14800\r
2020-06-06,14800\r
2020-06-08,14800\r
2020-06-11,14800\r
2020-06-21,11500\r
2020-06-23,11500\r
2020-06-26,11500\r
2020-06-28,11500\r
2020-07-01,11500\r
2020-07-03,11500\r
2020-07-06,11500\r
2020-07-11,9800\r
2020-07-13,9800\r
2020-07-16,9800\r
2020-07-18,9800\r
2020-07-21,11900\r
2020-07-23,11900\r
2020-07-26,11900\r
2020-07-28,10200\r
2020-07-31,10500\r
2020-08-02,10500\r
2020-08-05,8200\r
2020-08-07,8500\r
2020-08-10,8500\r
2020-08-15,8500\r
2020-08-20,7400\r
2020-08-25,3400\r
2020-08-27,3400\r
2020-09-01,3400\r
2020-09-04,3400\r
2020-09-06,3400\r
2020-09-11,2900\r
2020-09-14,3100\r
2020-09-16,3100\r
2020-09-19,3100\r
2020-09-29,2800\r
2020-11-18,1800\r
2020-11-23,5600\r
2020-11-25,5600\r
2020-11-30,5600\r
2020-12-03,5600\r
2020-12-28,8600\r
2021-02-21,12300\r
2021-02-23,12300\r
2021-02-26,12300\r
2021-02-28,12300\r
2021-03-23,14900\r
2021-03-25,14900\r
2021-03-28,16900\r
2021-03-30,16900\r
2021-04-02,15000\r
2021-04-04,16700\r
2021-04-07,16700\r
2021-04-09,14700\r
2021-04-17,14900\r
2021-04-19,14900\r
2021-04-22,14900\r
2021-04-24,14900\r
2021-06-01,17300\r
2021-06-03,17300\r
2021-06-08,17300\r
2021-06-11,18300\r
2021-06-13,18100\r
2021-06-16,18800\r
2021-06-18,18800\r
2021-06-21,18800\r
2021-06-23,16300\r
2021-06-26,17100\r
2021-07-01,18400\r
2021-07-11,13500\r
2021-07-18,13500\r
2021-07-21,15500\r
2021-07-23,14600\r
2021-07-26,14600\r
2021-07-28,14600\r
2021-08-10,14600\r
2021-08-12,14600\r
2021-08-15,14600\r
2021-08-17,14600\r
2021-08-20,15600\r
2021-08-22,15300\r
2021-08-25,15800\r
2021-08-27,15800\r
2021-08-30,15800\r
2021-09-01,14600\r
2021-09-04,18700\r
2021-09-06,18700\r
2021-09-11,18700\r
2021-09-24,11600\r
2021-09-29,12800\r
2021-10-01,12800\r
2021-10-06,12700\r
2021-10-09,12700\r
2021-10-14,12800\r
2021-10-16,12800\r
2021-10-21,10700\r
2021-10-24,12500\r
2021-10-26,11400\r
2021-12-23,9800\r
2021-12-25,9800\r
2021-12-30,9800\r
2022-02-26,12900\r
2022-02-28,12900\r
2022-03-03,12900\r
2022-03-05,12900\r
2022-03-08,12900\r
2022-05-17,16400\r
2022-05-19,16400\r
2022-05-22,16400\r
2022-05-27,18700\r
2022-05-29,18700\r
2022-06-01,18700\r
2022-06-06,18800\r
2022-06-11,17800\r
2022-06-13,17800\r
2022-06-16,16000\r
2022-06-21,14500\r
2022-06-23,15600\r
2022-06-26,15300\r
2022-06-28,17200\r
2022-07-01,17200\r
2022-07-03,17400\r
2022-07-06,16300\r
2022-07-08,16500\r
2022-07-11,16100\r
2022-07-13,16100\r
2022-07-16,15800\r
2022-07-18,15900\r
2022-07-21,15000\r
2022-07-23,15200\r
2022-07-26,14400\r
2022-07-28,14600\r
2022-07-31,13400\r
2022-08-02,12900\r
2022-08-05,12900\r
2022-08-07,11700\r
2022-08-10,12500\r
2022-08-12,11600\r
2022-08-15,11600\r
2022-08-20,11600\r
2022-08-25,9100\r
2022-08-27,9200\r
2022-09-01,8800\r
2022-09-04,9000\r
2022-09-06,8400\r
2022-09-09,8400\r
2022-09-11,8400\r
2022-09-19,7600\r
2022-09-21,7600\r
2022-09-29,6600\r
2022-10-04,6000\r
2022-10-06,6000\r
2022-10-11,6000\r
2023-02-11,7400\r
2023-02-13,7400\r
2023-02-16,10800\r
2023-02-18,10800\r
2023-02-21,10200\r
2023-02-26,12600\r
2023-03-03,12400\r
2023-03-28,13900\r
2023-03-30,13900\r
2023-04-04,13900\r
2023-04-07,13900\r
2023-05-27,17000\r
2023-05-29,17300\r
2023-06-01,18400\r
2023-06-03,18400\r
2023-06-06,18400\r
2023-06-16,17900\r
2023-06-18,17900\r
2023-06-23,17900\r
2023-06-26,17900\r
2023-07-16,19500\r
2023-07-18,17900\r
2023-07-21,17900\r
2023-07-23,17900\r
2023-07-26,17900\r
2023-07-31,14700\r
2023-08-02,14700\r
2023-08-05,14700\r
2023-08-07,14700\r
2023-08-10,14700\r
2023-08-15,14500\r
2023-08-17,14500\r
2023-08-22,14500\r
2023-08-25,14500\r
`;export{r as default};
