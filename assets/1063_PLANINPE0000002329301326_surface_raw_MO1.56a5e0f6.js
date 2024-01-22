const r=`date,value\r
2017-01-19,4900\r
2017-02-08,8200\r
2017-02-11,9900\r
2017-02-18,8000\r
2017-03-10,15400\r
2017-03-13,20200\r
2017-03-30,25100\r
2017-04-09,20600\r
2017-04-12,22800\r
2017-04-19,19700\r
2017-04-22,19500\r
2017-04-29,20900\r
2017-06-18,21800\r
2017-06-21,22600\r
2018-01-17,5400\r
2018-01-27,8100\r
2018-02-08,13800\r
2018-02-26,21200\r
2018-03-20,31000\r
2018-04-17,35500\r
2018-04-19,39700\r
2018-04-24,33600\r
2018-05-04,37200\r
2018-05-19,38200\r
2018-05-24,32800\r
2018-06-13,35600\r
2018-06-21,33800\r
2018-06-23,32400\r
2018-06-28,37300\r
2018-07-01,38000\r
2018-07-08,33700\r
2018-07-11,34800\r
2018-07-16,35600\r
2018-07-18,32900\r
2018-07-26,36500\r
2018-08-02,32500\r
2018-08-05,30300\r
2018-08-10,28600\r
2018-11-15,3700\r
2018-11-18,3500\r
2018-11-20,3300\r
2018-12-10,16200\r
2018-12-25,22200\r
2019-01-02,17900\r
2019-01-17,14600\r
2019-01-22,3400\r
2019-01-24,200\r
2019-02-13,19500\r
2019-02-23,14200\r
2019-02-26,16400\r
2019-03-03,19500\r
2019-03-10,30500\r
2019-03-23,23300\r
2019-03-28,28900\r
2019-04-12,28100\r
2019-04-19,4800\r
2019-04-27,34600\r
2019-05-12,26200\r
2019-06-01,26100\r
2019-06-16,33100\r
2019-06-18,26100\r
2019-06-26,28200\r
2019-07-01,28000\r
2019-07-03,23700\r
2019-07-08,20700\r
2019-07-13,19600\r
2019-07-23,20900\r
2019-08-22,1000\r
2019-10-11,800\r
2019-12-20,27200\r
2020-01-17,35300\r
2020-01-19,26800\r
2020-01-24,36800\r
2020-02-06,24800\r
2020-03-02,41300\r
2020-03-19,200\r
2020-03-24,29300\r
2020-03-27,34100\r
2020-04-01,33000\r
2020-04-11,35300\r
2020-04-13,35700\r
2020-05-06,29600\r
2020-05-18,25100\r
2020-05-26,17700\r
2020-05-28,30800\r
2020-05-31,35900\r
2020-06-02,31200\r
2020-07-12,19500\r
2020-07-17,12100\r
2020-07-20,38600\r
2020-07-22,34000\r
2020-07-30,28200\r
2020-08-04,26800\r
2020-08-06,21800\r
2020-08-11,5100\r
2020-09-03,4400\r
2020-09-08,4900\r
2020-09-10,3200\r
2020-09-13,3500\r
2020-09-20,2000\r
2020-11-04,9800\r
2020-11-19,17500\r
2020-11-22,12500\r
2020-11-29,9100\r
2020-12-12,22600\r
2020-12-29,10400\r
2021-01-08,33700\r
2021-02-07,28500\r
2021-02-17,32000\r
2021-02-27,42500\r
2021-03-02,40300\r
2021-03-22,33200\r
2021-03-24,35800\r
2021-03-29,39300\r
2021-04-01,27800\r
2021-04-03,32400\r
2021-04-13,30200\r
2021-04-21,24700\r
2021-04-23,28400\r
2021-04-28,29000\r
2021-05-03,24600\r
2021-05-23,17000\r
2021-05-31,23500\r
2021-07-17,24000\r
2021-07-20,24000\r
2021-07-22,21400\r
2021-08-11,30900\r
2021-08-14,25900\r
2021-08-26,22100\r
2021-08-29,15700\r
2021-09-05,5500\r
2021-09-08,3900\r
2021-11-04,2600\r
2021-11-09,2700\r
2021-11-19,2800\r
2021-12-17,5900\r
2022-01-13,19300\r
2022-01-21,20500\r
2022-03-07,20700\r
2022-03-14,24900\r
2022-03-22,24100\r
2022-03-24,20700\r
2022-03-27,21400\r
2022-04-11,21500\r
2022-04-16,23600\r
2022-04-26,16900\r
2022-05-03,22200\r
2022-05-06,18700\r
2022-05-11,13600\r
2022-05-21,19800\r
2022-05-28,17000\r
2022-05-31,25600\r
2022-06-10,15600\r
2022-06-15,25100\r
2022-06-17,24700\r
2022-06-27,19000\r
2022-07-02,25400\r
2022-07-05,21900\r
2022-07-07,18600\r
2022-07-10,18400\r
2022-07-12,15900\r
2022-07-15,13500\r
2023-01-03,1600\r
2023-01-11,6000\r
2023-01-16,12600\r
2023-01-21,19100\r
2023-02-10,20700\r
2023-02-12,19000\r
2023-02-15,15400\r
2023-02-27,17200\r
2023-03-04,20100\r
2023-04-21,21800\r
2023-05-26,23000\r
2023-05-28,26100\r
2023-05-31,26700\r
2023-06-02,21200\r
2023-06-05,30100\r
2023-06-15,28600\r
2023-06-22,23400\r
2023-06-25,22900\r
2023-07-07,26400\r
2023-07-10,23500\r
2023-07-17,26700\r
2023-08-09,2900\r
2023-12-02,4800\r
`;export{r as default};