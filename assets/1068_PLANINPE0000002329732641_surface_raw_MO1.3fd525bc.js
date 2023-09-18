const r=`date,value\r
2017-01-19,16200\r
2017-02-11,36800\r
2017-02-18,24800\r
2017-03-10,11500\r
2017-03-30,33600\r
2017-04-09,32500\r
2017-04-12,31000\r
2017-04-19,34700\r
2017-04-22,36400\r
2017-05-22,36500\r
2017-06-18,37300\r
2017-06-21,40700\r
2017-08-05,21100\r
2017-08-20,13800\r
2017-08-27,13100\r
2017-09-11,11000\r
2017-10-14,11500\r
2017-10-21,12300\r
2017-10-26,12700\r
2017-11-05,13000\r
2017-11-13,13700\r
2017-11-15,12500\r
2017-11-25,14000\r
2017-12-08,15200\r
2017-12-15,18200\r
2018-01-17,34700\r
2018-01-19,36200\r
2018-02-08,40000\r
2018-02-26,35700\r
2018-03-20,36400\r
2018-04-17,37700\r
2018-04-19,34800\r
2018-04-22,36700\r
2018-05-04,35900\r
2018-05-09,34100\r
2018-05-19,33600\r
2018-06-23,34100\r
2018-06-26,37400\r
2018-07-08,35600\r
2018-07-11,39200\r
2018-07-16,38100\r
2018-07-18,34100\r
2018-07-26,36000\r
2018-08-02,32800\r
2018-08-05,33000\r
2018-08-22,20100\r
2018-09-01,14600\r
2018-09-09,15100\r
2018-09-11,15300\r
2018-09-26,13500\r
2018-09-29,15000\r
2018-10-04,16500\r
2018-10-09,16200\r
2018-10-19,16700\r
2018-10-21,16600\r
2018-10-24,17500\r
2018-11-15,20300\r
2018-11-18,20700\r
2019-01-17,33700\r
2019-01-24,36500\r
2019-02-03,31900\r
2019-02-13,33700\r
2019-02-23,30400\r
2019-02-26,33300\r
2019-03-13,32900\r
2019-03-23,29400\r
2019-03-30,36900\r
2019-04-09,32500\r
2019-04-12,35900\r
2019-04-19,34300\r
2019-05-12,35500\r
2019-05-14,36300\r
2019-05-24,33800\r
2019-06-01,41100\r
2019-06-18,35600\r
2019-06-26,34500\r
2019-06-28,34000\r
2019-07-03,36800\r
2019-07-06,34300\r
2019-07-08,36900\r
2019-07-13,33100\r
2019-07-16,35200\r
2019-07-23,27700\r
2019-07-28,26600\r
2019-08-22,18900\r
2019-08-25,17000\r
2019-09-06,10200\r
2019-09-16,6000\r
2019-09-19,6400\r
2019-12-13,25900\r
2019-12-20,31100\r
2020-01-19,29500\r
2020-01-22,30100\r
2020-02-06,28400\r
2020-02-18,39500\r
2020-03-19,27400\r
2020-03-24,29300\r
2020-03-27,28600\r
2020-03-29,22400\r
2020-04-01,33600\r
2020-04-11,34000\r
2020-04-23,34800\r
2020-05-13,42600\r
2020-05-18,34000\r
2020-05-21,35400\r
2020-05-26,35700\r
2020-05-28,34000\r
2020-05-31,38400\r
2020-06-02,37000\r
2020-06-22,26700\r
2020-06-25,38000\r
2020-07-07,32600\r
2020-07-12,34100\r
2020-07-17,34700\r
2020-07-20,34500\r
2020-07-22,31800\r
2020-07-27,32900\r
2020-07-30,29500\r
2020-08-04,20200\r
2020-08-06,19800\r
2020-08-11,18200\r
2020-09-10,12200\r
2020-09-13,15100\r
2020-09-15,16200\r
2020-11-04,18600\r
2020-11-12,22900\r
2020-11-14,21100\r
2020-11-19,25400\r
2020-11-22,26100\r
2020-11-29,26400\r
2020-12-12,31000\r
2020-12-29,31300\r
2021-01-08,32500\r
2021-02-17,36200\r
2021-02-27,35300\r
2021-03-22,28400\r
2021-03-24,35000\r
2021-03-29,35500\r
2021-04-01,31600\r
2021-04-03,30600\r
2021-04-08,32100\r
2021-04-13,33400\r
2021-04-23,34600\r
2021-04-26,33700\r
2021-04-28,29700\r
2021-05-03,31000\r
2021-05-28,35700\r
2021-05-31,33300\r
2021-06-15,38000\r
2021-07-17,35000\r
2021-07-20,36500\r
2021-07-22,34200\r
2021-08-11,28900\r
2021-08-14,29100\r
2021-08-26,18200\r
2021-09-23,11500\r
2021-09-30,12200\r
2021-10-08,9600\r
2021-10-23,14700\r
2021-10-28,15000\r
2021-11-09,15700\r
2021-11-19,19000\r
2021-11-24,15000\r
2021-12-17,25900\r
2022-01-06,34700\r
2022-01-21,34000\r
2022-02-05,36400\r
2022-03-07,32800\r
2022-03-09,31400\r
2022-03-14,37700\r
2022-03-22,30400\r
2022-03-24,29800\r
2022-03-27,26600\r
2022-04-11,32900\r
2022-04-16,33400\r
2022-04-21,32300\r
2022-05-01,37000\r
2022-05-03,31500\r
2022-05-11,34700\r
2022-05-21,29100\r
2022-05-28,36100\r
2022-05-31,36100\r
2022-06-02,38000\r
2022-06-15,38000\r
2022-06-17,38000\r
2022-07-02,35800\r
2022-07-05,35000\r
2022-07-10,36000\r
2022-07-12,34800\r
2022-07-15,32200\r
2022-07-30,27300\r
2022-08-06,21200\r
2022-08-09,19500\r
2022-08-11,15600\r
2022-08-24,10900\r
2022-08-29,9900\r
2022-09-18,10900\r
2022-09-20,12600\r
2022-09-30,10700\r
2022-10-20,17100\r
2022-11-02,16700\r
2022-11-12,15200\r
2022-11-19,3400\r
2022-11-22,12700\r
2022-12-09,19500\r
2023-01-11,35100\r
2023-01-21,29500\r
2023-02-10,37100\r
2023-02-12,30900\r
2023-02-15,29400\r
2023-02-20,31500\r
2023-02-27,34900\r
2023-03-02,31000\r
2023-03-04,400\r
2023-03-17,30400\r
2023-04-18,32300\r
2023-05-26,36000\r
2023-05-28,33300\r
2023-05-31,36600\r
2023-06-02,36500\r
2023-06-05,36000\r
2023-06-07,37300\r
2023-06-22,37500\r
2023-06-25,37500\r
2023-07-07,32600\r
2023-07-17,31300\r
2023-07-22,32500\r
2023-08-09,18500\r
2023-08-19,13800\r
2023-08-21,12800\r
2023-09-03,2700\r
2023-09-05,2900\r
2023-09-08,1300\r
2023-09-10,4200\r
`;export{r as default};
