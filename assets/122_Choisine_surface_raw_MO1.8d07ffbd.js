const r=`date,value\r
2017-02-19,13600\r
2017-03-11,11900\r
2017-03-14,10700\r
2017-04-03,17700\r
2017-04-10,17700\r
2017-04-20,16500\r
2017-04-23,13100\r
2017-04-30,6500\r
2017-05-23,14200\r
2017-06-09,16300\r
2017-06-12,15500\r
2017-06-19,14600\r
2017-06-22,19200\r
2017-07-04,17300\r
2017-07-07,17900\r
2017-07-09,17200\r
2017-07-27,15300\r
2017-08-03,14900\r
2017-08-06,13000\r
2017-08-13,10100\r
2017-08-18,11200\r
2017-08-21,8100\r
2017-08-23,9500\r
2017-09-15,7100\r
2017-09-20,8500\r
2017-09-22,8600\r
2017-09-27,6600\r
2017-10-05,3900\r
2017-10-07,4800\r
2017-10-10,4600\r
2017-10-12,3600\r
2017-10-15,3400\r
2017-10-17,3600\r
2017-10-30,600\r
2017-11-16,3700\r
2017-11-21,2700\r
2018-01-15,7600\r
2018-01-23,400\r
2018-02-24,2600\r
2018-02-27,11500\r
2018-03-14,12000\r
2018-03-16,20200\r
2018-03-19,13600\r
2018-03-21,13900\r
2018-03-31,11400\r
2018-04-18,16900\r
2018-04-20,19300\r
2018-04-30,20400\r
2018-05-20,17700\r
2018-06-14,12000\r
2018-06-19,14400\r
2018-06-22,15400\r
2018-06-24,14500\r
2018-06-27,17000\r
2018-06-29,18600\r
2018-07-02,17600\r
2018-07-04,20100\r
2018-07-07,18600\r
2018-07-09,16100\r
2018-07-17,17500\r
2018-07-19,18100\r
2018-07-24,19200\r
2018-07-27,17400\r
2018-07-29,16700\r
2018-08-01,16400\r
2018-08-03,15700\r
2018-08-18,15500\r
2018-08-21,12800\r
2018-08-26,12400\r
2018-08-28,12700\r
2018-09-02,11200\r
2018-09-05,11200\r
2018-09-10,11000\r
2018-09-17,9700\r
2018-09-20,9500\r
2018-09-25,9500\r
2018-09-27,8100\r
2018-10-05,6700\r
2018-10-17,9200\r
2018-10-20,6900\r
2018-10-22,6500\r
2018-11-04,8800\r
2018-12-11,9800\r
2018-12-14,10100\r
2019-01-03,3400\r
2019-01-15,700\r
2019-02-04,13600\r
2019-02-12,9100\r
2019-02-14,10600\r
2019-02-17,10000\r
2019-02-19,13000\r
2019-02-22,11200\r
2019-02-27,14200\r
2019-03-16,10900\r
2019-03-21,13300\r
2019-03-24,15200\r
2019-03-26,12700\r
2019-03-29,16900\r
2019-03-31,16600\r
2019-04-05,11500\r
2019-04-13,16200\r
2019-04-15,16500\r
2019-04-20,17300\r
2019-04-23,23400\r
2019-05-13,17000\r
2019-05-15,16400\r
2019-05-23,19800\r
2019-06-02,21200\r
2019-06-07,16200\r
2019-06-17,16900\r
2019-06-19,18300\r
2019-06-24,17800\r
2019-06-27,16700\r
2019-06-29,10200\r
2019-07-02,16600\r
2019-07-04,15700\r
2019-07-07,13900\r
2019-07-14,16700\r
2019-07-19,17100\r
2019-07-22,14400\r
2019-07-24,15700\r
2019-07-29,10800\r
2019-08-03,14000\r
2019-08-08,12300\r
2019-08-11,12300\r
2019-08-16,12900\r
2019-08-23,7000\r
2019-08-26,8700\r
2019-08-28,12300\r
2019-08-31,9200\r
2019-09-02,11900\r
2019-09-07,9000\r
2019-09-12,7600\r
2019-09-15,6500\r
2019-09-17,7000\r
2019-09-20,7400\r
2019-09-27,6700\r
2019-09-30,6800\r
2019-10-07,6600\r
2019-10-25,10900\r
2019-10-30,600\r
2019-12-06,11900\r
2019-12-21,16300\r
2020-02-12,7500\r
2020-02-22,10100\r
2020-02-24,9600\r
2020-03-08,8800\r
2020-03-20,13700\r
2020-03-23,19200\r
2020-03-28,19300\r
2020-04-02,19200\r
2020-04-04,18800\r
2020-04-07,17800\r
2020-04-09,16800\r
2020-04-14,19700\r
2020-04-24,17200\r
2020-05-04,13900\r
2020-05-09,17100\r
2020-05-17,15700\r
2020-05-19,13900\r
2020-05-22,16500\r
2020-05-27,17900\r
2020-05-29,16600\r
2020-06-21,18000\r
2020-06-23,17300\r
2020-07-01,17800\r
2020-07-08,16600\r
2020-07-11,16200\r
2020-07-13,14600\r
2020-07-18,11800\r
2020-07-21,14600\r
2020-07-23,10900\r
2020-07-28,8900\r
2020-07-31,12200\r
2020-08-05,8900\r
2020-08-07,6900\r
2020-08-20,5500\r
2020-08-25,4900\r
2020-09-04,400\r
2020-09-14,100\r
2020-09-16,400\r
2020-10-31,4500\r
2020-11-18,2700\r
2020-11-23,4900\r
2020-12-13,2600\r
2020-12-28,1100\r
2021-01-24,8200\r
2021-02-21,15200\r
2021-02-28,19600\r
2021-03-20,19900\r
2021-03-23,18300\r
2021-03-25,19400\r
2021-03-28,17000\r
2021-03-30,20700\r
2021-04-02,19800\r
2021-04-04,14300\r
2021-04-07,16000\r
2021-04-14,17500\r
2021-04-17,17000\r
2021-04-19,17100\r
2021-04-22,26400\r
2021-04-24,18900\r
2021-05-12,15500\r
2021-05-27,13800\r
2021-06-01,13600\r
2021-06-11,16000\r
2021-06-13,14100\r
2021-06-16,17900\r
2021-06-18,13000\r
2021-06-26,16800\r
2021-07-11,12600\r
2021-07-21,11900\r
2021-07-23,12000\r
2021-08-10,10700\r
2021-08-15,12600\r
2021-08-20,14600\r
2021-08-25,15100\r
2021-08-27,15100\r
2021-09-01,15600\r
2021-09-04,18100\r
2021-09-06,18800\r
2021-09-24,11700\r
2021-10-01,10700\r
2021-10-11,14000\r
2021-10-14,12700\r
2021-10-16,11600\r
2021-10-21,12200\r
2021-10-24,11500\r
2021-11-30,11300\r
2021-12-03,2500\r
2021-12-23,10700\r
2022-01-14,6000\r
2022-01-24,8700\r
2022-02-01,15900\r
2022-02-08,5300\r
2022-02-26,11000\r
2022-02-28,11500\r
2022-03-05,14300\r
2022-03-23,16200\r
2022-03-25,15900\r
2022-04-04,14500\r
2022-04-14,11700\r
2022-04-17,15300\r
2022-04-27,14200\r
2022-05-09,16500\r
2022-05-19,16100\r
2022-05-27,16800\r
2022-05-29,17500\r
2022-06-06,19900\r
2022-06-11,16600\r
2022-06-16,13500\r
2022-06-18,15400\r
2022-06-21,16400\r
2022-06-28,16100\r
2022-07-01,17500\r
2022-07-03,16800\r
2022-07-06,17100\r
2022-07-08,15900\r
2022-07-11,13900\r
2022-07-13,13600\r
2022-07-16,12300\r
2022-07-18,12300\r
2022-07-21,10900\r
2022-07-31,7800\r
2022-08-02,6800\r
2022-08-07,6600\r
2022-08-10,6900\r
2022-08-12,6600\r
2022-08-22,5100\r
2022-08-25,5100\r
2022-09-01,4800\r
2022-09-04,5500\r
2022-09-09,5200\r
2022-09-11,6200\r
2022-09-19,5400\r
2022-09-21,5400\r
2022-10-04,4800\r
2022-10-06,5100\r
2022-10-11,5400\r
2022-10-26,4600\r
2022-11-20,9600\r
2022-12-05,7800\r
2023-01-17,6900\r
2023-02-03,12400\r
2023-02-08,8900\r
2023-02-11,12300\r
2023-02-13,8900\r
2023-02-16,10500\r
2023-02-21,11500\r
2023-02-26,14200\r
2023-03-05,14200\r
2023-03-28,15800\r
2023-04-04,10600\r
2023-04-19,18800\r
2023-05-02,16800\r
2023-05-17,17500\r
2023-05-27,17700\r
2023-05-29,19400\r
2023-06-01,20400\r
2023-06-03,18800\r
2023-06-16,18100\r
2023-06-23,13700\r
2023-06-26,18800\r
2023-06-28,16400\r
2023-07-08,19800\r
`;export{r as default};
