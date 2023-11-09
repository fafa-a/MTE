const r=`date,value\r
2017-01-19,7500\r
2017-02-11,14200\r
2017-03-10,16800\r
2017-03-13,26600\r
2017-03-30,29100\r
2017-04-09,28200\r
2017-04-12,32000\r
2017-04-19,25800\r
2017-04-22,25300\r
2017-04-29,27700\r
2017-05-09,23900\r
2017-06-11,27800\r
2017-06-18,24400\r
2017-06-21,22400\r
2017-07-28,9500\r
2017-07-31,8700\r
2017-08-20,6000\r
2017-10-11,5000\r
2017-10-14,3100\r
2017-10-16,10100\r
2017-10-26,4000\r
2017-11-13,4900\r
2017-11-15,7800\r
2017-11-25,5400\r
2017-12-08,5600\r
2018-01-17,20200\r
2018-03-20,32500\r
2018-03-25,32900\r
2018-04-17,32700\r
2018-04-19,34300\r
2018-04-22,31400\r
2018-05-04,32900\r
2018-05-07,26400\r
2018-05-19,33600\r
2018-05-24,26300\r
2018-06-13,29600\r
2018-06-21,24500\r
2018-06-23,28600\r
2018-06-28,33900\r
2018-07-01,35800\r
2018-07-11,30300\r
2018-07-16,34300\r
2018-07-21,28600\r
2018-07-26,29200\r
2018-08-02,23000\r
2018-08-05,22900\r
2018-09-01,15600\r
2018-09-11,19300\r
2018-09-24,10700\r
2018-09-26,17600\r
2018-10-04,14700\r
2018-10-09,13100\r
2018-10-19,14000\r
2018-10-21,17700\r
2018-10-24,10700\r
2018-11-15,13200\r
2018-11-18,12800\r
2018-12-10,28900\r
2018-12-25,33000\r
2019-01-09,5200\r
2019-01-17,20300\r
2019-02-03,100\r
2019-02-13,8500\r
2019-02-18,35700\r
2019-02-23,11000\r
2019-02-26,1400\r
2019-03-20,31000\r
2019-03-23,30200\r
2019-03-28,31700\r
2019-04-09,30800\r
2019-04-12,31700\r
2019-04-19,23300\r
2019-04-29,30800\r
2019-05-12,29200\r
2019-05-14,25000\r
2019-06-01,29600\r
2019-06-18,26200\r
2019-06-26,29400\r
2019-07-01,29300\r
2019-07-03,23800\r
2019-07-08,200\r
2019-07-13,15800\r
2019-07-16,18500\r
2019-07-23,14000\r
2019-08-05,13400\r
2019-08-22,3500\r
2019-08-25,14400\r
2019-08-30,6700\r
2019-09-04,3700\r
2019-09-16,1700\r
2019-09-19,3000\r
2019-10-11,900\r
2020-01-19,17000\r
2020-02-06,2500\r
2020-02-21,23500\r
2020-03-24,14000\r
2020-03-27,28900\r
2020-04-01,21400\r
2020-04-11,21100\r
2020-05-06,24800\r
2020-05-18,19500\r
2020-05-21,22000\r
2020-05-26,26100\r
2020-05-28,22600\r
2020-05-31,22100\r
2020-06-02,22300\r
2020-07-07,25100\r
2020-07-12,11800\r
2020-07-17,3600\r
2020-07-20,26700\r
2020-07-22,19300\r
2020-07-30,10700\r
2020-08-04,7400\r
2020-08-06,5000\r
2020-09-08,5000\r
2020-09-10,3700\r
2020-09-13,10300\r
2020-11-04,5300\r
2020-11-19,18400\r
2020-11-22,7200\r
2020-11-29,400\r
2020-12-12,22900\r
2020-12-29,28100\r
2021-01-08,31400\r
2021-02-27,39300\r
2021-03-09,33500\r
2021-03-17,34400\r
2021-03-19,35200\r
2021-03-22,28200\r
2021-03-24,31400\r
2021-03-29,37400\r
2021-04-01,27400\r
2021-04-03,34200\r
2021-04-13,33100\r
2021-04-23,26900\r
2021-04-28,35100\r
2021-05-03,21800\r
2021-05-28,30200\r
2021-05-31,28500\r
2021-07-17,25800\r
2021-07-20,25200\r
2021-08-11,24900\r
2021-08-14,20800\r
2021-08-26,17500\r
2021-08-29,10800\r
2021-09-23,9400\r
2021-09-30,13200\r
2021-10-23,7500\r
2021-10-28,8600\r
2021-11-04,9200\r
2021-11-09,10800\r
2021-11-19,15400\r
2021-12-17,17800\r
2022-01-06,28700\r
2022-01-11,25500\r
2022-01-13,27700\r
2022-01-21,29500\r
2022-02-25,33300\r
2022-03-07,35600\r
2022-03-14,35300\r
2022-03-22,39000\r
2022-03-24,34100\r
2022-03-27,34700\r
2022-04-11,32400\r
2022-04-16,36100\r
2022-04-21,35600\r
2022-04-26,29700\r
2022-05-03,37400\r
2022-05-06,31100\r
2022-05-11,28300\r
2022-05-21,28600\r
2022-05-28,25900\r
2022-05-31,35300\r
2022-06-02,37100\r
2022-06-15,32200\r
2022-06-17,31300\r
2022-07-02,26600\r
2022-07-05,23000\r
2022-07-07,19000\r
2022-07-10,19600\r
2022-07-12,20900\r
2022-08-06,5400\r
2022-08-09,5600\r
2022-08-11,3400\r
2022-09-18,200\r
2022-09-20,500\r
2022-10-08,800\r
2022-11-12,2900\r
2022-11-19,3800\r
2022-12-09,5000\r
2023-01-11,17900\r
2023-01-13,22000\r
2023-01-21,28100\r
2023-02-10,31800\r
2023-02-12,29100\r
2023-02-15,22700\r
2023-02-27,26400\r
2023-03-04,28100\r
2023-04-21,24300\r
2023-05-26,28200\r
2023-05-28,33100\r
2023-05-31,34200\r
2023-06-02,28200\r
2023-06-05,38100\r
2023-06-07,37900\r
2023-06-15,31300\r
2023-06-25,29200\r
2023-07-07,32400\r
2023-08-09,16400\r
2023-09-03,7900\r
2023-09-05,10000\r
2023-09-08,8300\r
2023-09-15,13500\r
2023-09-30,12900\r
2023-10-05,10900\r
2023-10-08,8400\r
2023-10-10,8400\r
`;export{r as default};
