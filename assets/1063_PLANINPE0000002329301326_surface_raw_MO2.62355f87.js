const r=`date,value\r
2017-01-19,4900\r
2017-01-29,4900\r
2017-02-08,8200\r
2017-02-11,10100\r
2017-02-18,8600\r
2017-02-21,9900\r
2017-02-28,8000\r
2017-03-10,15400\r
2017-03-13,20300\r
2017-03-23,20200\r
2017-03-30,25100\r
2017-04-02,25100\r
2017-04-09,25100\r
2017-04-12,23000\r
2017-04-19,20600\r
2017-04-22,20000\r
2017-04-29,20000\r
2017-05-02,20900\r
2017-05-09,20900\r
2017-06-18,21800\r
2017-06-21,22700\r
2017-06-28,22700\r
2017-07-01,22100\r
2018-01-17,5400\r
2018-01-19,5400\r
2018-01-22,5400\r
2018-01-24,5400\r
2018-01-27,9900\r
2018-01-29,8100\r
2018-02-01,8100\r
2018-02-06,8100\r
2018-02-08,13800\r
2018-02-11,13800\r
2018-02-26,21200\r
2018-03-03,21200\r
2018-03-08,21200\r
2018-03-20,31000\r
2018-03-25,31000\r
2018-03-30,31000\r
2018-04-17,35500\r
2018-04-19,40300\r
2018-04-22,40300\r
2018-04-24,35400\r
2018-04-27,35400\r
2018-05-04,37200\r
2018-05-07,37200\r
2018-05-19,38200\r
2018-05-22,38200\r
2018-05-24,38400\r
2018-06-01,32800\r
2018-06-13,35600\r
2018-06-21,37900\r
2018-06-23,33800\r
2018-06-26,36100\r
2018-06-28,35700\r
2018-07-01,37100\r
2018-07-03,36900\r
2018-07-08,36400\r
2018-07-11,34900\r
2018-07-13,34900\r
2018-07-16,33900\r
2018-07-18,34200\r
2018-07-21,33300\r
2018-07-23,36800\r
2018-07-26,35700\r
2018-07-31,36500\r
2018-08-02,36600\r
2018-08-05,32500\r
2018-08-07,32600\r
2018-08-10,31500\r
2018-08-12,31500\r
2018-08-15,32500\r
2018-08-17,28600\r
2018-11-15,3700\r
2018-11-18,3900\r
2018-11-20,3700\r
2018-11-30,3300\r
2018-12-10,16200\r
2018-12-20,16200\r
2018-12-25,22200\r
2018-12-28,22200\r
2019-01-02,17900\r
2019-01-09,17900\r
2019-01-17,18500\r
2019-01-19,14600\r
2019-01-22,15400\r
2019-01-24,2600\r
2019-01-27,2600\r
2019-02-13,19500\r
2019-02-16,19500\r
2019-02-18,19500\r
2019-02-21,19500\r
2019-02-23,19600\r
2019-02-26,16900\r
2019-03-03,16800\r
2019-03-08,16800\r
2019-03-10,20000\r
2019-03-13,20000\r
2019-03-20,30500\r
2019-03-23,30500\r
2019-03-25,30500\r
2019-03-28,29200\r
2019-03-30,29200\r
2019-04-04,29200\r
2019-04-07,29200\r
2019-04-09,28900\r
2019-04-12,31000\r
2019-04-14,28100\r
2019-04-19,27800\r
2019-04-22,27800\r
2019-04-27,28100\r
2019-04-29,34100\r
2019-05-07,34600\r
2019-05-12,34600\r
2019-05-14,26200\r
2019-05-19,26200\r
2019-05-24,26200\r
2019-05-27,26200\r
2019-06-01,26100\r
2019-06-03,26100\r
2019-06-06,33300\r
2019-06-13,33300\r
2019-06-16,33100\r
2019-06-18,33200\r
2019-06-21,33200\r
2019-06-26,29400\r
2019-06-28,29400\r
2019-07-01,30400\r
2019-07-03,27400\r
2019-07-06,26100\r
2019-07-08,26100\r
2019-07-13,23400\r
2019-07-16,23400\r
2019-07-23,20500\r
2019-07-28,22100\r
2019-07-31,20900\r
2019-08-02,20900\r
2019-08-05,20900\r
2019-08-22,1000\r
2019-08-25,1000\r
2019-08-27,1000\r
2019-08-30,1000\r
2019-09-01,1000\r
2019-09-04,1000\r
2019-10-11,800\r
2019-10-14,800\r
2019-10-21,800\r
2019-12-20,27200\r
2019-12-23,27200\r
2019-12-25,27200\r
2019-12-30,27400\r
2020-01-17,35300\r
2020-01-19,35300\r
2020-01-22,35300\r
2020-01-24,35200\r
2020-02-01,35200\r
2020-02-03,36800\r
2020-02-06,36800\r
2020-02-18,24800\r
2020-02-21,24800\r
2020-03-02,41300\r
2020-03-07,41300\r
2020-03-09,41300\r
2020-03-17,41300\r
2020-03-19,200\r
2020-03-24,29300\r
2020-03-27,28600\r
2020-03-29,28600\r
2020-04-01,31500\r
2020-04-03,31500\r
2020-04-08,31500\r
2020-04-11,34300\r
2020-04-13,34600\r
2020-04-16,34600\r
2020-04-18,36800\r
2020-04-23,36800\r
2020-04-26,37000\r
2020-04-28,35700\r
2020-05-06,29900\r
2020-05-16,29600\r
2020-05-18,31200\r
2020-05-21,31200\r
2020-05-23,25100\r
2020-05-26,30000\r
2020-05-28,27500\r
2020-05-31,32400\r
2020-06-02,30300\r
2020-06-05,34000\r
2020-06-07,34000\r
2020-07-12,19500\r
2020-07-15,19500\r
2020-07-17,20500\r
2020-07-20,20500\r
2020-07-22,34100\r
2020-07-27,34100\r
2020-07-30,34000\r
2020-08-01,34000\r
2020-08-04,34000\r
2020-08-06,30400\r
2020-08-09,26900\r
2020-08-11,26900\r
2020-08-14,26900\r
2020-09-03,4400\r
2020-09-08,5800\r
2020-09-10,3600\r
2020-09-13,4100\r
2020-09-15,4100\r
2020-09-20,4100\r
2020-09-25,3300\r
2020-09-28,4000\r
2020-11-04,11500\r
2020-11-09,9800\r
2020-11-12,9800\r
2020-11-14,9800\r
2020-11-19,17500\r
2020-11-22,17500\r
2020-11-27,17500\r
2020-11-29,12500\r
2020-12-12,22600\r
2020-12-17,22600\r
2020-12-29,10400\r
2021-01-08,33700\r
2021-01-11,33700\r
2021-01-18,33700\r
2021-02-07,28500\r
2021-02-17,32100\r
2021-02-27,42500\r
2021-03-02,42600\r
2021-03-04,42600\r
2021-03-09,42600\r
2021-03-12,40600\r
2021-03-22,33800\r
2021-03-24,37300\r
2021-03-27,37300\r
2021-03-29,36700\r
2021-04-01,36700\r
2021-04-03,35800\r
2021-04-06,32700\r
2021-04-08,32700\r
2021-04-11,32700\r
2021-04-13,32500\r
2021-04-16,30200\r
2021-04-18,30200\r
2021-04-21,30900\r
2021-04-23,28200\r
2021-04-28,28200\r
2021-05-03,28000\r
2021-05-08,27500\r
2021-05-11,25700\r
2021-05-13,25700\r
2021-05-23,17000\r
2021-05-28,17000\r
2021-05-31,24000\r
2021-06-05,23500\r
2021-06-07,23500\r
2021-06-10,23500\r
2021-07-17,24000\r
2021-07-20,25000\r
2021-07-22,23400\r
2021-07-25,23400\r
2021-07-30,24400\r
2021-08-01,21400\r
2021-08-11,30900\r
2021-08-14,31800\r
2021-08-24,25900\r
2021-08-26,22100\r
2021-08-29,22100\r
2021-08-31,22100\r
2021-09-03,22100\r
2021-09-05,16000\r
2021-09-08,5200\r
2021-09-10,5500\r
2021-11-04,2600\r
2021-11-09,2700\r
2021-11-17,2700\r
2021-11-19,3000\r
2021-11-24,2800\r
2021-12-17,5900\r
2022-01-11,12300\r
2022-01-13,18300\r
2022-01-21,18100\r
2022-01-23,21700\r
2022-01-31,20500\r
2022-03-07,20700\r
2022-03-09,20700\r
2022-03-12,20700\r
2022-03-14,24900\r
2022-03-19,24900\r
2022-03-22,25200\r
2022-03-24,23800\r
2022-03-27,21500\r
2022-04-01,21500\r
2022-04-11,21500\r
2022-04-13,21500\r
2022-04-16,23800\r
2022-04-21,23800\r
2022-04-26,23700\r
2022-05-01,16900\r
2022-05-03,22200\r
2022-05-06,19600\r
2022-05-08,22200\r
2022-05-11,18900\r
2022-05-13,18900\r
2022-05-16,13700\r
2022-05-21,14200\r
2022-05-28,20400\r
2022-05-31,20400\r
2022-06-02,25600\r
2022-06-05,25600\r
2022-06-07,25600\r
2022-06-10,25600\r
2022-06-12,15600\r
2022-06-15,25100\r
2022-06-17,23600\r
2022-06-27,24700\r
2022-07-02,25400\r
2022-07-05,22000\r
2022-07-07,22100\r
2022-07-10,21900\r
2022-07-12,19300\r
2022-07-15,18300\r
2022-07-17,18300\r
2022-07-20,15800\r
2023-01-03,1600\r
2023-01-11,6200\r
2023-01-13,6200\r
2023-01-16,12600\r
2023-01-21,12600\r
2023-02-10,20700\r
2023-02-12,20700\r
2023-02-15,19000\r
2023-02-20,19000\r
2023-02-27,17200\r
2023-03-02,17200\r
2023-03-04,20100\r
2023-04-21,21800\r
2023-04-23,21800\r
2023-05-01,21800\r
2023-05-26,23500\r
2023-05-28,26100\r
2023-05-31,26700\r
2023-06-02,26700\r
2023-06-05,26700\r
2023-06-07,27100\r
2023-06-10,28000\r
2023-06-15,30800\r
2023-06-22,28600\r
2023-06-25,23700\r
2023-07-07,26400\r
2023-07-10,26500\r
2023-07-15,26500\r
2023-07-17,25000\r
2023-07-20,27700\r
2023-07-22,26700\r
2023-07-25,26700\r
2023-08-09,2900\r
2023-08-19,2900\r
2023-12-02,4800\r
2023-12-04,4800\r
`;export{r as default};
