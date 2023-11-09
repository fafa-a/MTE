const r=`date,value\r
2017-02-19,8200\r
2017-02-26,8200\r
2017-03-01,8200\r
2017-03-11,17800\r
2017-03-21,17800\r
2017-03-28,12400\r
2017-03-31,13200\r
2017-04-20,21900\r
2017-04-30,21900\r
2017-05-30,20300\r
2017-06-06,20300\r
2017-06-09,20300\r
2017-06-19,22900\r
2017-06-26,22900\r
2017-06-29,22900\r
2017-07-04,17300\r
2017-07-06,17300\r
2017-07-14,19800\r
2017-07-19,19400\r
2017-07-21,19400\r
2017-07-24,19400\r
2017-08-03,16600\r
2017-08-05,16600\r
2017-08-08,16600\r
2017-08-18,19200\r
2017-08-20,19200\r
2017-08-23,21800\r
2017-08-25,21800\r
2017-08-30,17100\r
2017-09-02,17100\r
2017-09-07,18100\r
2017-09-12,18100\r
2017-09-14,18100\r
2017-09-17,19900\r
2017-09-19,19000\r
2017-09-22,19800\r
2017-09-24,19800\r
2017-09-27,19800\r
2017-10-07,22600\r
2017-10-09,22600\r
2017-10-12,22600\r
2017-10-14,22600\r
2017-10-17,22600\r
2017-10-19,10600\r
2017-10-22,10600\r
2017-10-24,10600\r
2017-10-27,13100\r
2017-10-29,12000\r
2017-11-01,12000\r
2017-11-03,12000\r
2017-11-06,12000\r
2017-11-11,16700\r
2017-11-13,16700\r
2017-11-16,17700\r
2017-11-18,17700\r
2017-11-21,16200\r
2017-11-23,16600\r
2017-11-26,16600\r
2018-02-09,4200\r
2018-02-11,1000\r
2018-02-14,6100\r
2018-02-19,1700\r
2018-02-24,6200\r
2018-02-26,1000\r
2018-03-16,13200\r
2018-03-21,13200\r
2018-03-23,13200\r
2018-03-26,13200\r
2018-04-20,20200\r
2018-04-22,20200\r
2018-04-25,23000\r
2018-04-27,23000\r
2018-04-30,23000\r
2018-05-25,3300\r
2018-06-01,3300\r
2018-06-09,6300\r
2018-06-14,8700\r
2018-06-16,8700\r
2018-06-19,5800\r
2018-06-21,7900\r
2018-06-26,3200\r
2018-06-29,3800\r
2018-07-01,3200\r
2018-07-04,3300\r
2018-07-06,3300\r
2018-07-09,300\r
2018-07-11,400\r
2018-07-14,400\r
2018-07-29,800\r
2018-07-31,800\r
2018-08-03,100\r
2018-08-05,800\r
2018-08-08,800\r
2018-08-10,100\r
2018-08-28,100\r
2018-08-30,100\r
2018-09-02,100\r
2018-09-27,100\r
2018-09-29,100\r
2018-10-02,600\r
2018-10-04,600\r
2018-10-09,500\r
2018-10-12,500\r
2018-10-14,100\r
2018-10-19,100\r
2018-10-22,100\r
2019-02-04,6800\r
2019-02-06,6800\r
2019-02-09,6800\r
2019-02-11,1700\r
2019-02-14,3700\r
2019-02-16,3700\r
2019-02-19,2200\r
2019-02-21,4300\r
2019-03-01,3100\r
2019-03-03,4400\r
2019-03-08,3500\r
2019-03-11,17800\r
2019-03-13,17800\r
2019-03-16,14400\r
2019-03-18,18000\r
2019-03-21,17600\r
2019-03-23,17600\r
2019-03-26,17600\r
2019-03-28,19100\r
2019-03-31,16000\r
2019-04-05,16500\r
2019-04-15,19100\r
2019-04-17,18900\r
2019-04-20,19900\r
2019-04-27,12200\r
2019-04-30,19000\r
2019-05-02,19000\r
2019-05-07,19000\r
2019-05-10,26300\r
2019-05-12,26300\r
2019-05-15,23200\r
2019-05-30,24600\r
2019-06-01,21500\r
2019-06-04,23600\r
2019-06-14,23600\r
2019-06-19,22800\r
2019-06-24,23500\r
2019-06-26,23500\r
2019-06-29,20200\r
2019-07-01,20200\r
2019-07-04,22500\r
2019-07-06,20600\r
2019-07-14,19000\r
2019-07-16,23200\r
2019-07-19,18600\r
2019-07-21,18900\r
2019-07-24,17600\r
2019-07-26,17600\r
2019-07-29,17900\r
2019-07-31,16100\r
2019-08-03,17200\r
2019-08-05,15900\r
2019-08-08,16900\r
2019-08-10,13900\r
2019-08-15,15600\r
2019-08-18,11400\r
2019-08-25,10500\r
2019-08-30,10500\r
2019-09-02,17000\r
2019-09-04,16100\r
2019-09-07,17200\r
2019-09-09,17200\r
2019-09-12,15400\r
2019-09-14,15400\r
2019-09-17,16200\r
2019-09-24,15800\r
2019-09-27,12500\r
2019-09-29,14900\r
2019-10-02,6400\r
2019-10-04,6500\r
2019-10-07,6400\r
2019-10-17,8200\r
2019-10-27,12000\r
2019-11-06,11700\r
2019-11-08,11700\r
2019-11-13,11700\r
2019-11-16,11700\r
2020-02-04,10000\r
2020-02-09,5300\r
2020-02-11,5300\r
2020-02-14,6300\r
2020-02-16,3500\r
2020-02-19,10100\r
2020-02-24,12000\r
2020-02-26,12000\r
2020-03-07,11900\r
2020-03-10,11900\r
2020-04-04,6000\r
2020-04-06,6000\r
2020-04-09,11500\r
2020-04-11,11500\r
2020-04-14,11300\r
2020-04-24,14200\r
2020-04-29,18500\r
2020-05-04,16500\r
2020-05-06,16500\r
2020-05-09,16500\r
2020-05-14,21000\r
2020-05-21,22500\r
2020-05-24,22600\r
2020-05-26,22600\r
2020-06-03,20500\r
2020-06-05,20500\r
2020-06-15,17400\r
2020-06-23,20100\r
2020-06-25,20100\r
2020-06-28,20100\r
2020-06-30,20100\r
2020-07-03,21000\r
2020-07-05,21000\r
2020-07-08,21000\r
2020-07-10,19900\r
2020-07-18,20700\r
2020-07-20,17000\r
2020-07-23,19500\r
2020-07-25,19500\r
2020-07-28,19500\r
2020-07-30,19500\r
2020-08-02,19500\r
2020-08-04,19000\r
2020-08-07,19500\r
2020-08-09,16500\r
2020-08-12,21500\r
2020-08-14,21500\r
2020-08-17,18300\r
2020-08-19,18300\r
2020-08-22,20300\r
2020-08-27,20200\r
2020-09-01,20900\r
2020-09-03,19000\r
2020-09-06,19600\r
2020-09-08,13400\r
2020-09-13,23200\r
2020-09-16,14500\r
2020-09-18,14700\r
2020-09-23,14000\r
2020-09-26,14000\r
2020-09-28,14000\r
2020-10-01,14000\r
2020-10-11,20100\r
2020-10-13,20100\r
2020-10-21,20100\r
2020-10-31,17000\r
2020-11-02,17000\r
2020-11-05,17000\r
2020-11-07,17000\r
2020-11-10,13100\r
2020-11-12,13100\r
2020-11-15,13100\r
2020-11-17,13100\r
2020-11-20,12800\r
2020-11-22,14200\r
2020-11-25,14200\r
2021-02-08,4100\r
2021-02-13,4100\r
2021-02-15,4100\r
2021-02-18,4100\r
2021-02-23,8700\r
2021-02-25,8700\r
2021-02-28,16300\r
2021-03-02,16300\r
2021-03-05,12300\r
2021-03-07,16200\r
2021-03-12,10800\r
2021-03-15,10800\r
2021-03-20,14600\r
2021-03-22,14600\r
2021-03-25,14600\r
2021-03-27,14600\r
2021-03-30,16400\r
2021-04-01,14200\r
2021-04-04,21600\r
2021-04-06,21600\r
2021-04-09,19200\r
2021-04-14,21900\r
2021-04-19,19500\r
2021-04-24,21500\r
2021-05-04,21700\r
2021-06-13,23200\r
2021-06-18,23400\r
2021-07-23,15500\r
2021-07-25,15500\r
2021-07-30,15500\r
2021-08-02,24700\r
2021-08-09,24700\r
2021-08-12,24700\r
2021-08-14,16900\r
2021-08-17,19500\r
2021-08-19,19500\r
2021-08-22,19500\r
2021-08-27,19000\r
2021-08-29,13100\r
2021-09-01,14400\r
2021-09-06,14000\r
2021-09-08,17600\r
2021-09-11,17400\r
2021-09-13,19900\r
2021-09-18,19700\r
2021-09-21,22900\r
2021-09-23,22500\r
2021-09-28,22500\r
2021-10-01,22500\r
2021-10-06,19200\r
2021-10-08,19200\r
2021-10-11,16800\r
2021-10-13,19200\r
2021-10-16,16500\r
2021-10-18,17600\r
2021-10-21,17600\r
2021-10-23,15600\r
2021-10-26,16100\r
2021-10-28,12400\r
2021-11-05,16700\r
2021-11-07,15600\r
2022-02-08,6700\r
2022-02-10,4500\r
2022-02-13,8300\r
2022-02-15,8300\r
2022-02-18,5600\r
2022-02-20,8500\r
2022-02-23,6100\r
2022-02-25,8600\r
2022-02-28,6500\r
2022-03-02,10800\r
2022-03-05,10700\r
2022-03-07,9600\r
2022-03-10,9600\r
2022-03-25,17100\r
2022-04-01,17100\r
2022-04-04,17100\r
2022-04-14,19100\r
2022-04-16,19100\r
2022-04-19,19100\r
2022-05-14,23500\r
2022-05-19,23500\r
2022-05-21,23500\r
2022-05-26,8100\r
2022-05-29,22400\r
2022-06-05,22100\r
2022-06-13,20300\r
2022-06-18,22100\r
2022-06-20,22100\r
2022-06-25,21700\r
2022-07-03,22400\r
2022-07-05,22400\r
2022-07-08,23400\r
2022-07-10,23400\r
2022-07-13,22600\r
2022-07-15,24200\r
2022-07-18,21000\r
2022-07-20,23300\r
2022-07-25,19000\r
2022-07-28,19100\r
2022-08-02,19100\r
2022-08-04,19100\r
2022-08-07,23800\r
2022-08-09,24300\r
2022-08-12,20800\r
2022-08-19,19400\r
2022-08-22,23600\r
2022-08-24,23300\r
2022-08-27,25400\r
2022-08-29,25400\r
2022-09-01,22800\r
2022-09-06,24800\r
2022-09-08,14100\r
2022-09-11,16700\r
2022-09-16,18700\r
2022-09-18,18700\r
2022-09-21,15100\r
2022-09-26,12500\r
2022-09-28,12900\r
2022-10-01,12900\r
2022-10-03,9500\r
2022-10-06,9500\r
2022-10-11,11900\r
2022-10-16,11900\r
2022-10-18,11900\r
2022-10-26,10900\r
2022-10-28,10900\r
2022-10-31,10900\r
2022-11-05,16000\r
2022-11-10,16300\r
2022-11-17,15000\r
2022-11-20,15000\r
2023-02-03,9900\r
2023-02-05,11400\r
2023-02-08,9700\r
2023-02-10,9900\r
2023-02-13,6400\r
2023-02-15,6400\r
2023-02-18,4600\r
2023-02-20,5700\r
2023-02-28,5100\r
2023-03-05,12700\r
2023-03-07,12700\r
2023-03-10,12700\r
2023-03-12,12700\r
2023-03-15,15300\r
2023-03-20,17300\r
2023-03-22,17300\r
2023-03-25,16800\r
2023-03-27,19400\r
2023-03-30,19400\r
2023-04-01,18800\r
2023-04-04,23500\r
2023-04-09,23100\r
2023-04-11,23100\r
2023-04-14,21700\r
2023-04-16,22000\r
2023-04-19,20400\r
2023-04-24,21200\r
2023-04-26,22500\r
2023-05-04,22700\r
2023-05-06,19200\r
2023-05-11,19200\r
2023-05-24,22500\r
2023-05-26,22500\r
2023-06-23,24400\r
2023-06-25,24400\r
2023-06-28,24400\r
2023-07-03,20000\r
2023-07-05,20000\r
2023-07-08,20800\r
2023-07-10,20800\r
2023-07-13,20700\r
2023-07-18,23000\r
2023-07-20,23500\r
2023-07-23,22900\r
2023-07-25,19400\r
2023-07-28,19400\r
2023-07-30,19400\r
2023-08-02,20300\r
2023-08-04,18300\r
2023-08-07,18900\r
2023-08-09,18900\r
2023-08-12,17600\r
2023-08-14,18100\r
2023-08-17,18100\r
2023-08-19,15900\r
2023-08-22,16200\r
2023-08-24,13600\r
2023-08-29,13600\r
2023-09-01,18500\r
2023-09-03,18000\r
2023-09-06,18200\r
2023-09-08,18200\r
2023-09-11,16700\r
2023-09-26,14500\r
2023-09-28,14500\r
2023-10-01,15100\r
2023-10-03,15100\r
2023-10-06,14300\r
2023-10-08,15600\r
2023-10-11,12700\r
2023-10-13,15300\r
2023-10-21,9600\r
`;export{r as default};
