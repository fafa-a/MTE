const r=`date,value\r
2017-02-19,13600\r
2017-02-22,14100\r
2017-03-11,11900\r
2017-03-14,12000\r
2017-04-03,17700\r
2017-04-10,18900\r
2017-04-20,17900\r
2017-04-23,16500\r
2017-04-30,14100\r
2017-05-10,6500\r
2017-05-23,14200\r
2017-05-30,14200\r
2017-06-02,14200\r
2017-06-09,16300\r
2017-06-12,16700\r
2017-06-19,15400\r
2017-06-22,15800\r
2017-07-02,17900\r
2017-07-04,17300\r
2017-07-07,18300\r
2017-07-09,17700\r
2017-07-12,17700\r
2017-07-14,17700\r
2017-07-17,18700\r
2017-07-27,17000\r
2017-07-29,15300\r
2017-08-03,16600\r
2017-08-06,14100\r
2017-08-13,13000\r
2017-08-18,12800\r
2017-08-21,9900\r
2017-08-23,11300\r
2017-08-26,9600\r
2017-09-15,7100\r
2017-09-20,9900\r
2017-09-22,7500\r
2017-09-27,7000\r
2017-10-05,6600\r
2017-10-07,5000\r
2017-10-10,4400\r
2017-10-12,4400\r
2017-10-15,4000\r
2017-10-17,4000\r
2017-10-22,3400\r
2017-10-25,4300\r
2017-10-27,3600\r
2017-10-30,1800\r
2017-11-16,3700\r
2017-11-21,4100\r
2017-11-26,4100\r
2017-11-29,2700\r
2018-01-15,7600\r
2018-01-23,7600\r
2018-01-28,400\r
2018-02-02,400\r
2018-02-24,2600\r
2018-02-27,11500\r
2018-03-04,11500\r
2018-03-14,12000\r
2018-03-16,20300\r
2018-03-19,15800\r
2018-03-21,15900\r
2018-03-24,15900\r
2018-03-31,13900\r
2018-04-05,11400\r
2018-04-10,11400\r
2018-04-18,16900\r
2018-04-20,20000\r
2018-04-25,20000\r
2018-04-30,21600\r
2018-05-05,20400\r
2018-05-08,20400\r
2018-05-20,17700\r
2018-05-25,17700\r
2018-06-14,12000\r
2018-06-19,14800\r
2018-06-22,14100\r
2018-06-24,14800\r
2018-06-27,15800\r
2018-06-29,15800\r
2018-07-02,17600\r
2018-07-04,18100\r
2018-07-07,18500\r
2018-07-09,18100\r
2018-07-12,18900\r
2018-07-17,17700\r
2018-07-19,16500\r
2018-07-22,20300\r
2018-07-24,18100\r
2018-07-27,18600\r
2018-07-29,19400\r
2018-08-01,19400\r
2018-08-03,16500\r
2018-08-06,17600\r
2018-08-11,18200\r
2018-08-18,15500\r
2018-08-21,14800\r
2018-08-23,14800\r
2018-08-26,14800\r
2018-08-28,15100\r
2018-08-31,12700\r
2018-09-02,12000\r
2018-09-05,12200\r
2018-09-07,11500\r
2018-09-10,11200\r
2018-09-12,11200\r
2018-09-17,11300\r
2018-09-20,10200\r
2018-09-22,10700\r
2018-09-25,9900\r
2018-09-27,10000\r
2018-10-02,9800\r
2018-10-05,8000\r
2018-10-10,6700\r
2018-10-12,6700\r
2018-10-15,6700\r
2018-10-17,9200\r
2018-10-20,9200\r
2018-10-22,7500\r
2018-10-25,7500\r
2018-10-30,7700\r
2018-11-04,8800\r
2018-11-09,8800\r
2018-11-11,8800\r
2018-11-14,8800\r
2018-12-11,12900\r
2018-12-14,11300\r
2019-01-03,3400\r
2019-01-10,3400\r
2019-01-15,3500\r
2019-01-23,700\r
2019-01-25,700\r
2019-01-28,700\r
2019-01-30,700\r
2019-02-04,13600\r
2019-02-12,14100\r
2019-02-14,11400\r
2019-02-17,11600\r
2019-02-19,11500\r
2019-02-22,10800\r
2019-02-24,10800\r
2019-02-27,12600\r
2019-03-04,13200\r
2019-03-16,10900\r
2019-03-19,10900\r
2019-03-21,14700\r
2019-03-24,14100\r
2019-03-26,15100\r
2019-03-29,13900\r
2019-03-31,15700\r
2019-04-05,15800\r
2019-04-13,16800\r
2019-04-15,16800\r
2019-04-18,14900\r
2019-04-20,17400\r
2019-04-23,19600\r
2019-04-30,19500\r
2019-05-03,20600\r
2019-05-13,19100\r
2019-05-15,18800\r
2019-05-23,17800\r
2019-05-25,17800\r
2019-05-30,22200\r
2019-06-02,21700\r
2019-06-04,21700\r
2019-06-07,20500\r
2019-06-12,22300\r
2019-06-17,16900\r
2019-06-19,20300\r
2019-06-24,17800\r
2019-06-27,18000\r
2019-06-29,16900\r
2019-07-02,17600\r
2019-07-04,17100\r
2019-07-07,16600\r
2019-07-09,16600\r
2019-07-12,14200\r
2019-07-14,14500\r
2019-07-17,16600\r
2019-07-19,16400\r
2019-07-22,16400\r
2019-07-24,16800\r
2019-07-29,15600\r
2019-08-01,15700\r
2019-08-03,14800\r
2019-08-06,15600\r
2019-08-08,15100\r
2019-08-11,12400\r
2019-08-13,12400\r
2019-08-16,14600\r
2019-08-18,14600\r
2019-08-21,12400\r
2019-08-23,12400\r
2019-08-26,11300\r
2019-08-28,10900\r
2019-08-31,10300\r
2019-09-02,10000\r
2019-09-07,10500\r
2019-09-12,9900\r
2019-09-15,8300\r
2019-09-17,7400\r
2019-09-20,7300\r
2019-09-22,7300\r
2019-09-27,6900\r
2019-09-30,6800\r
2019-10-07,6700\r
2019-10-25,10900\r
2019-10-30,11300\r
2019-12-06,11900\r
2019-12-14,11900\r
2019-12-19,11900\r
2019-12-21,16600\r
2019-12-29,16300\r
2020-02-12,7500\r
2020-02-14,7500\r
2020-02-22,9900\r
2020-02-24,9100\r
2020-03-08,9300\r
2020-03-15,8800\r
2020-03-18,8800\r
2020-03-20,14000\r
2020-03-23,14000\r
2020-03-25,19200\r
2020-03-28,17900\r
2020-04-02,19300\r
2020-04-04,18300\r
2020-04-07,19000\r
2020-04-09,18800\r
2020-04-12,18800\r
2020-04-14,18500\r
2020-04-17,18500\r
2020-04-22,19000\r
2020-04-24,18400\r
2020-04-27,19700\r
2020-05-04,17200\r
2020-05-07,17200\r
2020-05-09,15800\r
2020-05-17,14200\r
2020-05-19,15300\r
2020-05-22,16600\r
2020-05-24,16600\r
2020-05-27,17300\r
2020-05-29,14600\r
2020-06-01,14600\r
2020-06-21,18000\r
2020-06-23,20800\r
2020-06-26,20800\r
2020-06-28,20800\r
2020-07-01,18000\r
2020-07-08,17100\r
2020-07-11,16700\r
2020-07-13,17000\r
2020-07-18,16000\r
2020-07-21,15200\r
2020-07-23,15200\r
2020-07-28,11200\r
2020-07-31,11300\r
2020-08-05,10700\r
2020-08-07,9200\r
2020-08-10,9600\r
2020-08-15,8800\r
2020-08-20,6600\r
2020-08-25,6500\r
2020-08-27,6500\r
2020-09-01,6500\r
2020-09-04,4000\r
2020-09-09,4900\r
2020-09-14,500\r
2020-10-31,4500\r
2020-11-10,4500\r
2020-11-18,2700\r
2020-11-23,4900\r
2020-11-25,4900\r
2020-11-28,4900\r
2020-12-13,2600\r
2020-12-28,2900\r
2021-01-24,8200\r
2021-01-29,8200\r
2021-02-21,15200\r
2021-02-23,16800\r
2021-02-26,16800\r
2021-02-28,18600\r
2021-03-05,19600\r
2021-03-10,19600\r
2021-03-20,19900\r
2021-03-23,20100\r
2021-03-25,19200\r
2021-03-28,19200\r
2021-03-30,19000\r
2021-04-02,18800\r
2021-04-04,18400\r
2021-04-07,17800\r
2021-04-09,19200\r
2021-04-14,15600\r
2021-04-17,16900\r
2021-04-19,17100\r
2021-04-22,19100\r
2021-04-24,18100\r
2021-04-27,21000\r
2021-05-12,15500\r
2021-05-17,15500\r
2021-05-22,15500\r
2021-05-27,13800\r
2021-05-29,13800\r
2021-06-01,13100\r
2021-06-03,13100\r
2021-06-11,16200\r
2021-06-13,16300\r
2021-06-16,14300\r
2021-06-18,14500\r
2021-06-21,14500\r
2021-06-26,17500\r
2021-07-11,12600\r
2021-07-18,12600\r
2021-07-21,14600\r
2021-07-23,12500\r
2021-08-02,12000\r
2021-08-10,10700\r
2021-08-12,10700\r
2021-08-15,12600\r
2021-08-17,12600\r
2021-08-20,12400\r
2021-08-25,13500\r
2021-08-27,15000\r
2021-09-01,14900\r
2021-09-04,16800\r
2021-09-06,17700\r
2021-09-24,11700\r
2021-09-26,11700\r
2021-09-29,11700\r
2021-10-01,12300\r
2021-10-11,14100\r
2021-10-14,15500\r
2021-10-16,13800\r
2021-10-21,13800\r
2021-10-24,14300\r
2021-11-30,11300\r
2021-12-03,11300\r
2021-12-23,10700\r
2022-01-14,6000\r
2022-01-19,6000\r
2022-01-22,6000\r
2022-01-24,8900\r
2022-01-27,8700\r
2022-01-29,8700\r
2022-02-01,17500\r
2022-02-08,15900\r
2022-02-11,15900\r
2022-02-13,5300\r
2022-02-18,5300\r
2022-02-26,11000\r
2022-02-28,11700\r
2022-03-03,11700\r
2022-03-05,11700\r
2022-03-08,11700\r
2022-03-10,14300\r
2022-03-23,16200\r
2022-03-25,17400\r
2022-03-28,17400\r
2022-04-04,16100\r
2022-04-14,14500\r
2022-04-17,15300\r
2022-04-19,15300\r
2022-04-27,15400\r
2022-05-02,14200\r
2022-05-04,14200\r
2022-05-07,14200\r
2022-05-09,16500\r
2022-05-12,16500\r
2022-05-14,16500\r
2022-05-17,16500\r
2022-05-19,17000\r
2022-05-27,17300\r
2022-05-29,16500\r
2022-06-06,18100\r
2022-06-11,20700\r
2022-06-13,20700\r
2022-06-16,17000\r
2022-06-18,15800\r
2022-06-21,16700\r
2022-06-23,15500\r
2022-06-28,15500\r
2022-07-01,17300\r
2022-07-03,16500\r
2022-07-06,16900\r
2022-07-08,16500\r
2022-07-11,16200\r
2022-07-13,16200\r
2022-07-16,15300\r
2022-07-18,13900\r
2022-07-21,12100\r
2022-07-26,11700\r
2022-07-28,12600\r
2022-07-31,11000\r
2022-08-02,7900\r
2022-08-05,7900\r
2022-08-07,6900\r
2022-08-10,6900\r
2022-08-12,6900\r
2022-08-15,6700\r
2022-08-17,6700\r
2022-08-22,6600\r
2022-08-25,5400\r
2022-08-30,5400\r
2022-09-01,5100\r
2022-09-04,5200\r
2022-09-06,5500\r
2022-09-09,5100\r
2022-09-11,5400\r
2022-09-19,5400\r
2022-09-21,5600\r
2022-10-04,4800\r
2022-10-06,5400\r
2022-10-09,5400\r
2022-10-11,5200\r
2022-10-16,5600\r
2022-10-26,4600\r
2022-10-31,4600\r
2022-11-20,9600\r
2022-11-23,9600\r
2022-12-05,7800\r
2023-01-17,6900\r
2023-01-24,6900\r
2023-02-03,12400\r
2023-02-08,12500\r
2023-02-11,11600\r
2023-02-13,11600\r
2023-02-16,11000\r
2023-02-21,11600\r
2023-02-26,12800\r
2023-03-03,14600\r
2023-03-05,15100\r
2023-03-15,14200\r
2023-03-28,15800\r
2023-04-04,15800\r
2023-04-07,15800\r
2023-04-09,10600\r
2023-04-19,18800\r
2023-05-02,16800\r
2023-05-04,16800\r
2023-05-17,17500\r
2023-05-27,18400\r
2023-05-29,21600\r
2023-06-01,18900\r
2023-06-03,19000\r
2023-06-06,19000\r
2023-06-08,18800\r
2023-06-16,18100\r
2023-06-23,20500\r
2023-06-26,18600\r
2023-06-28,15500\r
2023-07-06,18000\r
2023-07-08,18400\r
`;export{r as default};
