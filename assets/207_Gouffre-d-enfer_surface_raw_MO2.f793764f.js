const r=`date,value\r
2017-02-22,100\r
2017-03-04,100\r
2017-04-23,200\r
2017-04-30,200\r
2017-06-12,23200\r
2017-06-19,23200\r
2017-06-22,23200\r
2017-07-07,29300\r
2017-07-09,29300\r
2017-07-12,34600\r
2017-07-14,34600\r
2017-07-17,34600\r
2017-07-22,31600\r
2017-08-21,31000\r
2017-08-23,31000\r
2017-08-26,35100\r
2017-09-05,29800\r
2017-10-05,30400\r
2017-10-07,30400\r
2017-10-10,30400\r
2017-10-12,30400\r
2017-10-15,31300\r
2017-10-17,30300\r
2017-10-22,30300\r
2017-10-25,30300\r
2018-03-14,26400\r
2018-03-16,26400\r
2018-03-19,26400\r
2018-03-21,26400\r
2018-03-24,26400\r
2018-04-18,31000\r
2018-04-20,31000\r
2018-04-25,31000\r
2018-06-27,30900\r
2018-06-29,30900\r
2018-07-02,29700\r
2018-07-04,29500\r
2018-07-07,34300\r
2018-07-09,34300\r
2018-07-12,34300\r
2018-07-17,34300\r
2018-07-19,27800\r
2018-07-22,27800\r
2018-07-24,27800\r
2018-07-27,32100\r
2018-07-29,32100\r
2018-08-01,33200\r
2018-08-03,33200\r
2018-08-06,33200\r
2018-08-11,30700\r
2018-08-16,30200\r
2018-08-18,30200\r
2018-08-21,32200\r
2018-08-23,30700\r
2018-08-26,34900\r
2018-08-28,34900\r
2018-08-31,34900\r
2018-09-02,30900\r
2018-09-05,31800\r
2018-09-07,10700\r
2018-09-10,35500\r
2018-09-12,35500\r
2018-09-17,31000\r
2018-09-20,33700\r
2018-09-25,36400\r
2018-09-27,36400\r
2018-10-02,32000\r
2018-10-05,32800\r
2018-10-10,29500\r
2018-10-12,29500\r
2018-10-15,29500\r
2018-10-20,29400\r
2018-10-22,29400\r
2018-10-25,29400\r
2018-10-30,29400\r
2018-11-04,31200\r
2018-11-09,31200\r
2018-11-11,31200\r
2018-11-14,31200\r
2019-02-12,5600\r
2019-02-14,5600\r
2019-02-17,9600\r
2019-02-19,9600\r
2019-02-22,5100\r
2019-02-24,5100\r
2019-02-27,14800\r
2019-03-04,27800\r
2019-03-24,25500\r
2019-03-26,25500\r
2019-03-29,25500\r
2019-03-31,25500\r
2019-04-05,25500\r
2019-05-23,35000\r
2019-05-25,35000\r
2019-05-30,31400\r
2019-06-02,31400\r
2019-06-04,31400\r
2019-06-07,36700\r
2019-06-12,31700\r
2019-06-27,20100\r
2019-06-29,20100\r
2019-07-02,20100\r
2019-07-04,20100\r
2019-07-07,26800\r
2019-07-09,26800\r
2019-07-12,24600\r
2019-07-14,32100\r
2019-07-17,25500\r
2019-07-19,25500\r
2019-07-22,25900\r
2019-07-24,23900\r
2019-07-29,25800\r
2019-08-01,22700\r
2019-08-03,23600\r
2019-08-06,23600\r
2019-08-08,22100\r
2019-08-11,22100\r
2019-08-13,22100\r
2019-08-16,22100\r
2019-08-26,21000\r
2019-08-28,21000\r
2019-08-31,21000\r
2019-09-02,21000\r
2019-09-07,21000\r
2019-09-15,16100\r
2019-09-17,16100\r
2019-09-20,19400\r
2019-09-22,19400\r
2019-09-27,19400\r
2019-09-30,12700\r
2019-10-30,4800\r
2020-02-22,1400\r
2020-02-24,1500\r
2020-03-08,1500\r
2020-03-15,200\r
2020-03-18,900\r
2020-03-20,900\r
2020-03-23,900\r
2020-03-25,700\r
2020-03-28,800\r
2020-04-02,700\r
2020-04-04,1300\r
2020-04-07,700\r
2020-04-09,700\r
2020-04-12,700\r
2020-04-14,300\r
2020-04-17,300\r
2020-04-22,700\r
2020-04-24,200\r
2020-04-27,200\r
2020-05-22,800\r
2020-05-24,800\r
2020-05-27,900\r
2020-05-29,900\r
2020-06-01,900\r
2020-07-31,2000\r
2020-08-05,2100\r
2020-08-07,2100\r
2020-08-10,2100\r
2020-08-15,2100\r
2020-08-20,1500\r
2020-08-25,2200\r
2020-08-27,2200\r
2020-09-01,2200\r
2020-09-04,1300\r
2020-09-09,2000\r
2020-09-14,700\r
2020-09-16,700\r
2020-09-19,700\r
2021-02-21,400\r
2021-02-23,400\r
2021-02-26,1500\r
2021-02-28,1500\r
2021-03-05,1300\r
2021-03-23,1100\r
2021-03-25,1100\r
2021-03-28,1300\r
2021-03-30,1300\r
2021-04-02,500\r
2021-04-04,800\r
2021-04-07,800\r
2021-04-09,700\r
2021-09-24,100\r
2021-09-26,100\r
2021-09-29,100\r
2021-10-01,100\r
2021-10-14,300\r
2021-10-16,300\r
2021-10-21,300\r
2021-10-24,1600\r
2022-02-26,200\r
2022-02-28,200\r
2022-03-03,200\r
2022-03-05,200\r
2022-03-08,200\r
2022-03-23,900\r
2022-03-25,900\r
2022-03-28,900\r
2022-04-17,600\r
2022-04-19,600\r
2022-04-27,600\r
2022-05-02,100\r
2022-05-04,100\r
2022-05-07,100\r
2022-06-06,100\r
2022-06-11,500\r
2022-06-13,500\r
2022-06-16,100\r
2022-06-18,500\r
2022-06-21,400\r
2022-06-23,1100\r
2022-06-28,1100\r
2022-07-01,1000\r
2022-08-05,300\r
2022-08-07,300\r
2022-08-10,300\r
2022-08-12,300\r
2022-08-15,300\r
2022-08-17,300\r
2022-08-25,100\r
2022-08-30,100\r
2022-09-01,100\r
2022-09-04,100\r
2022-09-06,100\r
2022-09-09,500\r
2022-10-09,100\r
2022-10-11,100\r
2022-10-16,100\r
2023-02-11,1000\r
2023-02-13,1000\r
2023-02-16,1600\r
2023-02-21,700\r
2023-02-26,1300\r
2023-03-03,400\r
2023-03-28,600\r
2023-04-04,600\r
2023-04-07,600\r
2023-05-27,23100\r
2023-05-29,23100\r
2023-06-01,23600\r
2023-06-03,23600\r
2023-06-06,23600\r
`;export{r as default};
