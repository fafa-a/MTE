const r=`date,value\r
2017-02-19,16800\r
2017-02-22,16800\r
2017-03-01,20800\r
2017-03-04,20800\r
2017-03-11,20800\r
2017-03-14,19400\r
2017-03-21,19400\r
2017-04-10,20100\r
2017-04-20,22500\r
2017-04-23,22500\r
2017-04-30,22500\r
2017-05-30,21300\r
2017-06-02,21300\r
2017-06-09,21300\r
2017-06-19,21000\r
2017-06-22,21000\r
2017-07-04,18100\r
2017-07-07,18100\r
2017-07-12,18100\r
2017-07-14,19400\r
2017-07-17,17600\r
2017-07-19,17600\r
2017-07-22,17600\r
2017-07-24,17600\r
2017-07-27,14900\r
2017-07-29,15800\r
2017-08-03,15800\r
2017-08-06,14700\r
2017-08-13,11900\r
2017-08-18,13700\r
2017-08-21,13700\r
2017-08-23,10400\r
2017-08-26,12200\r
2017-09-02,7800\r
2017-09-05,5800\r
2017-09-07,6000\r
2017-09-10,6000\r
2017-09-12,5400\r
2017-09-17,4500\r
2017-09-20,5800\r
2017-09-22,4200\r
2017-09-25,4800\r
2017-09-27,4700\r
2017-10-02,5000\r
2017-10-05,4800\r
2017-10-07,4800\r
2017-10-10,3700\r
2017-10-12,3700\r
2017-10-15,3700\r
2017-10-17,3700\r
2017-10-22,4100\r
2017-10-25,4100\r
2017-10-27,4100\r
2017-10-30,1100\r
2017-11-01,1100\r
2017-11-06,1100\r
2017-11-29,400\r
2017-12-01,400\r
2017-12-06,400\r
2018-01-30,16100\r
2018-02-02,16100\r
2018-02-04,20700\r
2018-02-07,20700\r
2018-02-09,16100\r
2018-02-14,13300\r
2018-02-19,13300\r
2018-02-24,13600\r
2018-02-27,8600\r
2018-03-04,8600\r
2018-03-16,8700\r
2018-03-19,8700\r
2018-03-21,8700\r
2018-03-24,8700\r
2018-03-26,22500\r
2018-03-31,22500\r
2018-04-05,22500\r
2018-04-15,23100\r
2018-04-18,23100\r
2018-04-20,24000\r
2018-04-23,24000\r
2018-04-25,21600\r
2018-04-28,22500\r
2018-05-05,20100\r
2018-05-25,21400\r
2018-05-28,21400\r
2018-06-09,22200\r
2018-06-14,23900\r
2018-06-19,20700\r
2018-06-22,22400\r
2018-06-27,19600\r
2018-06-29,20500\r
2018-07-02,20700\r
2018-07-04,22600\r
2018-07-07,22600\r
2018-07-09,22600\r
2018-07-12,21100\r
2018-07-14,21100\r
2018-07-19,20900\r
2018-07-22,20900\r
2018-07-24,22800\r
2018-07-27,22800\r
2018-07-29,20900\r
2018-08-01,23000\r
2018-08-03,23000\r
2018-08-06,20800\r
2018-08-08,20800\r
2018-08-18,22800\r
2018-08-21,22800\r
2018-08-23,22800\r
2018-08-26,22800\r
2018-08-28,22800\r
2018-08-31,20000\r
2018-09-02,23300\r
2018-09-05,23300\r
2018-09-07,20500\r
2018-09-10,24700\r
2018-09-12,20500\r
2018-09-17,23400\r
2018-09-20,20100\r
2018-09-22,20100\r
2018-09-27,19100\r
2018-10-02,21500\r
2018-10-05,21500\r
2018-10-12,19800\r
2018-12-01,19400\r
2018-12-04,19400\r
2018-12-11,19900\r
2018-12-14,19000\r
2018-12-21,19000\r
2019-01-05,7000\r
2019-01-10,10700\r
2019-01-13,10700\r
2019-01-15,10200\r
2019-01-20,12800\r
2019-01-23,12800\r
2019-01-25,14200\r
2019-01-28,12500\r
2019-01-30,12500\r
2019-02-04,10700\r
2019-02-09,9400\r
2019-02-12,10600\r
2019-02-14,3900\r
2019-02-17,10500\r
2019-02-19,10500\r
2019-03-01,18400\r
2019-03-11,18400\r
2019-03-16,18100\r
2019-03-19,19100\r
2019-03-21,17900\r
2019-03-24,17900\r
2019-03-26,19100\r
2019-03-29,19100\r
2019-03-31,20300\r
2019-04-05,19700\r
2019-04-13,20600\r
2019-04-15,19900\r
2019-04-18,20700\r
2019-04-20,19700\r
2019-04-30,21700\r
2019-05-05,23600\r
2019-05-10,23600\r
2019-05-13,23600\r
2019-05-15,23600\r
2019-05-23,19100\r
2019-05-30,20100\r
2019-06-02,20100\r
2019-06-04,21500\r
2019-06-07,21500\r
2019-06-12,21500\r
2019-06-19,18000\r
2019-06-24,21000\r
2019-06-27,21000\r
2019-06-29,18500\r
2019-07-02,18500\r
2019-07-04,18500\r
2019-07-07,15500\r
2019-07-12,19200\r
2019-07-14,16400\r
2019-07-17,16700\r
2019-07-19,16200\r
2019-07-22,18500\r
2019-07-24,17500\r
2019-07-29,18800\r
2019-08-01,18800\r
2019-08-03,19300\r
2019-08-06,18200\r
2019-08-08,19600\r
2019-08-11,18600\r
2019-08-16,20400\r
2019-08-18,18500\r
2019-08-21,19000\r
2019-08-23,18300\r
2019-08-26,19700\r
2019-08-31,19700\r
2019-09-02,15200\r
2019-09-05,16700\r
2019-09-07,14500\r
2019-09-12,14500\r
2019-09-15,14500\r
2019-09-17,14500\r
2019-09-20,13500\r
2019-09-25,16100\r
2019-09-27,14500\r
2019-09-30,15700\r
2019-10-02,15300\r
2019-10-05,19200\r
2019-10-07,15000\r
2019-10-10,15000\r
2019-10-17,18800\r
2019-10-20,9900\r
2019-12-26,12100\r
2019-12-29,12100\r
2020-01-25,18400\r
2020-01-30,18400\r
2020-02-04,15600\r
2020-02-07,15600\r
2020-02-09,15700\r
2020-02-12,13100\r
2020-02-14,13200\r
2020-02-19,12700\r
2020-02-22,11800\r
2020-02-24,13500\r
2020-03-03,15300\r
2020-03-08,13300\r
2020-03-10,13300\r
2020-03-20,16200\r
2020-03-25,16200\r
2020-03-28,16200\r
2020-03-30,16200\r
2020-04-02,16200\r
2020-04-04,18100\r
2020-04-07,16600\r
2020-04-09,18700\r
2020-04-14,17700\r
2020-04-22,20100\r
2020-04-24,20100\r
2020-04-29,19100\r
2020-05-04,15400\r
2020-05-07,15400\r
2020-05-09,15400\r
2020-05-14,18800\r
2020-05-19,18800\r
2020-05-22,17600\r
2020-05-24,19300\r
2020-05-27,19300\r
2020-05-29,19300\r
2020-06-03,17600\r
2020-06-06,17600\r
2020-06-23,19000\r
2020-06-26,19000\r
2020-06-28,24800\r
2020-07-01,24800\r
2020-07-03,19200\r
2020-07-06,19200\r
2020-07-08,20900\r
2020-07-11,20500\r
2020-07-16,20500\r
2020-07-18,20500\r
2020-07-21,18600\r
2020-07-23,21000\r
2020-07-26,20400\r
2020-07-28,20400\r
2020-07-31,20400\r
2020-08-02,21400\r
2020-08-05,21400\r
2020-08-07,21100\r
2020-08-10,21700\r
2020-08-12,20400\r
2020-08-15,20400\r
2020-08-20,20900\r
2020-08-22,19900\r
2020-08-25,21200\r
2020-08-27,19900\r
2020-09-01,20400\r
2020-09-04,20400\r
2020-09-06,21300\r
2020-09-14,21700\r
2020-09-16,19100\r
2020-09-26,17600\r
2020-09-29,17600\r
2020-10-11,16700\r
2020-10-16,18300\r
2020-10-19,18300\r
2020-10-21,16700\r
2020-10-24,16700\r
2020-10-31,16200\r
2020-11-05,14300\r
2020-11-10,11500\r
2020-11-15,11500\r
2020-11-18,11500\r
2020-11-20,10100\r
2020-11-23,10900\r
2020-11-25,7900\r
2020-11-30,9500\r
2020-12-03,9500\r
2020-12-10,11700\r
2020-12-13,11400\r
2020-12-15,11400\r
2021-01-14,1600\r
2021-01-17,1600\r
2021-01-19,1600\r
2021-01-24,1600\r
2021-02-08,15500\r
2021-02-11,15500\r
2021-02-13,15500\r
2021-02-18,15500\r
2021-02-23,15100\r
2021-02-26,15100\r
2021-02-28,17000\r
2021-03-05,17000\r
2021-03-08,16200\r
2021-03-10,19000\r
2021-03-13,19000\r
2021-03-15,19000\r
2021-03-20,19000\r
2021-03-25,21900\r
2021-03-28,21900\r
2021-03-30,23100\r
2021-04-02,23100\r
2021-04-04,23100\r
2021-04-07,20800\r
2021-04-09,20800\r
2021-05-19,21400\r
2021-05-27,21400\r
2021-06-13,20500\r
2021-06-16,20500\r
2021-06-18,20900\r
2021-06-26,20300\r
2021-07-18,21000\r
2021-07-21,21000\r
2021-07-23,23300\r
2021-07-26,23700\r
2021-07-28,21200\r
2021-08-02,21800\r
2021-08-05,22000\r
2021-08-10,20100\r
2021-08-12,20200\r
2021-08-15,19000\r
2021-08-17,20700\r
2021-08-20,20700\r
2021-08-22,20700\r
2021-08-25,20300\r
2021-08-27,20300\r
2021-08-30,18700\r
2021-09-01,19500\r
2021-09-06,19400\r
2021-09-11,17700\r
2021-09-21,16400\r
2021-10-01,15100\r
2021-10-06,21200\r
2021-10-09,21200\r
2021-10-11,14700\r
2021-10-14,21400\r
2021-10-16,14600\r
2021-10-21,14800\r
2021-10-24,10000\r
2021-10-26,11100\r
2021-10-29,10300\r
2021-11-05,10300\r
2021-11-20,1400\r
2021-11-23,1400\r
2021-11-30,2500\r
2021-12-03,2300\r
2021-12-05,2300\r
2022-01-14,12800\r
2022-01-17,12800\r
2022-01-19,12900\r
2022-01-22,12900\r
2022-01-24,9500\r
2022-01-27,10000\r
2022-01-29,7900\r
2022-02-01,9100\r
2022-02-03,9100\r
2022-02-06,8000\r
2022-02-08,14700\r
2022-02-13,16200\r
2022-02-18,15200\r
2022-02-23,15100\r
2022-02-26,16500\r
2022-02-28,16500\r
2022-03-03,17500\r
2022-03-05,17500\r
2022-03-08,17400\r
2022-03-10,17400\r
2022-04-04,21900\r
2022-04-09,22200\r
2022-04-14,22000\r
2022-04-17,22300\r
2022-04-19,22300\r
2022-04-22,24600\r
2022-04-27,24600\r
2022-04-29,24700\r
2022-05-07,22900\r
2022-05-14,22200\r
2022-05-17,22200\r
2022-05-19,22300\r
2022-05-22,22300\r
2022-05-27,21700\r
2022-05-29,22300\r
2022-06-01,21000\r
2022-06-06,21000\r
2022-06-13,21700\r
2022-06-16,21700\r
2022-06-18,21700\r
2022-06-21,21700\r
2022-07-03,20900\r
2022-07-06,20900\r
2022-07-08,20900\r
2022-07-11,20900\r
2022-07-13,20900\r
2022-07-18,16500\r
2022-07-21,16500\r
2022-07-26,16500\r
2022-07-28,16900\r
2022-08-02,13500\r
2022-08-05,13500\r
2022-08-07,14400\r
2022-08-10,14400\r
2022-08-12,12400\r
2022-08-20,10400\r
2022-08-22,10400\r
2022-08-27,10300\r
2022-09-01,9900\r
2022-09-04,9900\r
2022-09-06,9900\r
2022-09-09,6300\r
2022-09-11,6300\r
2022-09-16,6200\r
2022-09-19,6200\r
2022-09-21,5900\r
2022-09-26,5800\r
2022-10-04,4900\r
2022-10-06,4900\r
2022-11-10,1300\r
2022-11-18,1300\r
2022-11-20,1700\r
2022-11-25,1600\r
2022-11-30,1000\r
2022-12-05,1000\r
2022-12-10,12000\r
2022-12-18,12000\r
2022-12-20,12000\r
2022-12-25,17000\r
2022-12-28,17000\r
2022-12-30,17000\r
2023-01-04,17800\r
2023-01-07,17800\r
2023-01-09,17800\r
2023-01-12,17800\r
2023-01-14,17800\r
2023-01-19,15300\r
2023-01-22,15300\r
2023-01-24,15300\r
2023-01-27,15300\r
2023-01-29,17900\r
2023-02-01,17900\r
2023-02-03,18300\r
2023-02-06,18300\r
2023-02-08,18300\r
2023-02-11,16700\r
2023-02-13,17200\r
2023-02-16,15600\r
2023-02-18,18500\r
2023-02-21,18500\r
2023-02-26,18300\r
2023-02-28,18300\r
2023-03-05,21000\r
2023-03-13,21000\r
2023-03-15,21000\r
2023-03-20,21900\r
2023-03-25,22000\r
2023-03-28,22000\r
2023-03-30,21700\r
2023-04-04,22900\r
2023-04-07,22900\r
2023-04-09,22900\r
2023-04-14,23600\r
2023-04-17,23600\r
2023-04-19,23600\r
2023-04-22,23600\r
2023-04-24,23600\r
2023-05-02,21300\r
2023-05-24,21500\r
2023-05-27,21500\r
2023-06-03,21600\r
2023-06-08,22600\r
2023-06-11,22600\r
2023-06-16,22400\r
2023-06-23,17700\r
2023-06-26,17700\r
2023-06-28,21000\r
2023-07-03,20500\r
2023-07-06,20500\r
2023-07-08,20500\r
2023-07-11,20500\r
2023-07-13,19500\r
2023-07-16,19500\r
2023-07-18,19500\r
2023-07-21,18700\r
2023-07-23,20400\r
2023-07-26,20400\r
2023-07-28,21800\r
2023-07-31,21800\r
2023-08-02,20400\r
2023-08-05,21800\r
2023-08-07,20200\r
2023-08-10,20200\r
2023-08-12,19400\r
2023-08-15,20100\r
2023-08-17,20100\r
2023-08-22,19900\r
2023-08-25,17000\r
2023-08-30,18000\r
2023-09-01,18000\r
2023-09-04,14900\r
2023-09-06,15100\r
2023-09-11,14600\r
2023-09-19,13100\r
2023-09-26,11200\r
2023-09-29,11200\r
2023-10-01,11600\r
2023-10-04,11600\r
2023-10-06,10200\r
2023-10-09,10600\r
2023-10-11,9900\r
2023-10-21,9100\r
`;export{r as default};
