const r=`date,value\r
2017-02-19,8200\r
2017-03-11,17800\r
2017-03-21,12400\r
2017-04-20,21900\r
2017-05-30,20300\r
2017-06-19,22900\r
2017-07-04,17300\r
2017-07-14,19400\r
2017-08-03,16200\r
2017-08-18,19200\r
2017-08-23,17100\r
2017-09-07,18100\r
2017-09-17,19000\r
2017-09-22,17300\r
2017-10-07,22600\r
2017-10-17,10600\r
2017-10-27,12000\r
2017-11-11,16700\r
2017-11-16,16500\r
2018-02-09,1000\r
2018-02-14,6100\r
2018-02-19,1000\r
2018-03-16,13200\r
2018-04-20,20200\r
2018-04-25,21700\r
2018-05-25,3300\r
2018-06-09,6300\r
2018-06-14,7200\r
2018-06-19,3200\r
2018-06-29,2100\r
2018-07-04,400\r
2018-07-29,800\r
2018-08-03,100\r
2018-09-27,100\r
2018-10-02,500\r
2018-10-12,100\r
2019-02-04,1700\r
2019-02-14,3300\r
2019-02-19,2200\r
2019-03-01,3500\r
2019-03-11,17600\r
2019-03-21,18000\r
2019-03-31,15500\r
2019-04-05,18900\r
2019-04-20,12200\r
2019-04-30,19000\r
2019-05-10,26300\r
2019-05-15,22300\r
2019-05-30,21500\r
2019-06-04,18100\r
2019-06-19,22800\r
2019-06-24,20800\r
2019-06-29,18500\r
2019-07-04,22900\r
2019-07-14,18900\r
2019-07-19,14400\r
2019-07-24,16700\r
2019-07-29,16500\r
2019-08-03,13200\r
2019-08-08,12000\r
2019-08-18,10500\r
2019-09-02,16100\r
2019-09-07,14800\r
2019-09-12,13400\r
2019-09-17,14900\r
2019-09-27,6300\r
2019-10-02,200\r
2019-10-07,9300\r
2019-10-17,12000\r
2019-11-06,11700\r
2020-02-04,5000\r
2020-02-09,700\r
2020-02-14,11500\r
2020-02-19,10200\r
2020-02-24,11900\r
2020-04-04,6000\r
2020-04-09,11300\r
2020-04-14,19600\r
2020-04-24,13300\r
2020-05-04,16600\r
2020-05-14,22500\r
2020-05-24,19200\r
2020-06-03,17400\r
2020-06-23,20100\r
2020-07-03,19600\r
2020-07-18,16800\r
2020-07-23,19000\r
2020-08-07,16500\r
2020-08-12,20800\r
2020-08-17,18300\r
2020-08-22,17400\r
2020-08-27,12500\r
2020-09-01,22600\r
2020-09-06,12900\r
2020-09-16,14000\r
2020-10-11,20100\r
2020-10-31,17000\r
2020-11-05,12300\r
2020-11-10,12500\r
2021-02-08,4100\r
2021-02-23,8700\r
2021-02-28,16000\r
2021-03-05,10800\r
2021-03-20,14600\r
2021-03-30,14200\r
2021-04-04,21600\r
2021-04-09,19500\r
2021-04-24,21500\r
2021-06-13,23200\r
2021-07-23,15500\r
2021-08-02,24700\r
2021-08-12,16900\r
2021-08-17,19000\r
2021-08-27,13100\r
2021-09-01,13000\r
2021-09-06,17300\r
2021-09-11,19700\r
2021-09-21,22500\r
2021-10-01,17500\r
2021-10-06,15800\r
2021-10-11,16400\r
2021-10-16,15600\r
2021-10-26,12400\r
2021-11-05,15600\r
2022-02-08,4500\r
2022-02-13,6800\r
2022-02-18,6000\r
2022-02-23,6300\r
2022-02-28,9600\r
2022-03-25,17100\r
2022-04-14,19100\r
2022-05-14,23500\r
2022-05-19,8100\r
2022-05-29,22100\r
2022-06-13,20300\r
2022-06-18,21700\r
2022-07-03,22400\r
2022-07-08,21900\r
2022-07-13,22700\r
2022-07-18,19000\r
2022-08-02,19100\r
2022-08-07,24300\r
2022-08-12,19400\r
2022-08-22,23300\r
2022-08-27,24800\r
2022-09-01,14100\r
2022-09-11,15400\r
2022-09-16,18100\r
2022-09-21,12700\r
2022-09-26,9500\r
2022-10-11,11900\r
2022-10-26,10900\r
2022-11-05,16000\r
2022-11-10,15000\r
2023-02-03,9900\r
2023-02-08,6200\r
2023-02-13,3400\r
2023-02-18,5100\r
2023-03-05,12700\r
2023-03-15,13300\r
2023-03-20,16700\r
2023-03-25,18800\r
2023-04-04,22600\r
2023-04-09,20400\r
2023-04-14,21300\r
2023-04-24,22500\r
2023-05-04,19200\r
2023-05-24,22500\r
2023-06-23,24400\r
2023-06-28,19500\r
2023-07-03,20000\r
2023-07-08,20300\r
2023-07-13,23500\r
2023-07-23,19400\r
2023-08-02,18300\r
2023-08-07,17600\r
2023-08-12,15900\r
2023-08-22,13600\r
2023-09-01,18500\r
2023-09-06,16300\r
2023-09-11,16300\r
`;export{r as default};
