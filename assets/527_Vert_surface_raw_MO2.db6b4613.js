const r=`date,value\r
2017-01-03,36800\r
2017-02-12,43400\r
2017-02-19,44300\r
2017-02-22,41900\r
2017-03-04,41700\r
2017-03-11,36700\r
2017-03-14,40800\r
2017-04-03,47700\r
2017-04-10,48000\r
2017-04-20,45600\r
2017-04-23,44900\r
2017-04-30,41900\r
2017-05-23,41900\r
2017-05-30,41900\r
2017-06-02,42300\r
2017-06-09,43800\r
2017-06-12,43300\r
2017-06-19,41700\r
2017-06-22,40100\r
2017-07-02,41000\r
2017-07-04,34500\r
2017-07-07,35100\r
2017-07-09,35100\r
2017-07-12,35100\r
2017-07-14,33300\r
2017-07-17,32300\r
2017-07-22,35600\r
2017-07-24,35600\r
2017-07-27,32900\r
2017-08-03,18500\r
2017-08-06,22300\r
2017-08-13,22300\r
2017-08-18,20500\r
2017-08-21,20500\r
2017-08-23,19300\r
2017-08-26,20200\r
2017-09-05,16400\r
2017-09-20,11400\r
2017-09-22,15100\r
2017-09-27,11400\r
2017-10-05,8600\r
2017-10-07,5300\r
2017-10-10,4700\r
2017-10-12,4700\r
2017-10-15,4300\r
2017-10-17,3500\r
2017-10-22,2300\r
2017-10-25,1400\r
2017-10-27,1800\r
2017-10-30,1400\r
2017-11-21,1600\r
2017-11-26,1600\r
2017-11-29,1600\r
2018-01-15,6200\r
2018-01-23,6400\r
2018-01-28,4200\r
2018-02-02,4200\r
2018-02-24,3800\r
2018-02-27,3800\r
2018-03-04,3800\r
2018-03-14,16600\r
2018-03-16,16600\r
2018-03-19,24400\r
2018-03-21,23300\r
2018-03-24,23300\r
2018-03-31,26900\r
2018-04-05,31000\r
2018-04-10,31000\r
2018-04-18,41400\r
2018-04-20,45000\r
2018-04-25,42500\r
2018-04-30,48100\r
2018-05-05,44500\r
2018-05-08,38700\r
2018-05-20,42400\r
2018-05-25,38100\r
2018-06-09,37100\r
2018-06-14,37100\r
2018-06-19,37200\r
2018-06-22,36900\r
2018-06-24,35700\r
2018-06-27,38700\r
2018-06-29,37300\r
2018-07-02,36300\r
2018-07-04,36300\r
2018-07-07,35600\r
2018-07-09,35800\r
2018-07-12,37000\r
2018-07-17,33600\r
2018-07-19,30900\r
2018-07-22,33200\r
2018-07-24,31500\r
2018-07-27,34400\r
2018-07-29,34400\r
2018-08-01,35400\r
2018-08-03,29000\r
2018-08-06,30000\r
2018-08-11,26800\r
2018-08-16,25900\r
2018-08-18,22100\r
2018-08-21,22800\r
2018-08-23,21500\r
2018-08-26,21500\r
2018-08-28,19300\r
2018-08-31,20100\r
2018-09-02,18000\r
2018-09-05,15100\r
2018-09-07,15100\r
2018-09-10,14100\r
2018-09-12,14100\r
2018-09-17,10700\r
2018-09-20,3000\r
2018-09-22,3000\r
2018-09-25,1700\r
2018-09-27,1700\r
2018-10-02,1600\r
2018-10-05,1000\r
2018-10-10,800\r
2018-10-12,800\r
2018-10-15,800\r
2018-11-04,2300\r
2018-11-09,2300\r
2018-11-11,2300\r
2018-11-14,2300\r
2018-11-24,9400\r
2019-01-03,18900\r
2019-01-10,18900\r
2019-01-15,19000\r
2019-02-04,24700\r
2019-02-12,29800\r
2019-02-14,26000\r
2019-02-17,26900\r
2019-02-19,26700\r
2019-02-22,27600\r
2019-02-24,27600\r
2019-02-27,29600\r
2019-03-04,30500\r
2019-03-16,21300\r
2019-03-19,35400\r
2019-03-21,28100\r
2019-03-24,33700\r
2019-03-26,29600\r
2019-03-29,33600\r
2019-03-31,32600\r
2019-04-05,33100\r
2019-04-13,35100\r
2019-04-15,35400\r
2019-04-18,38500\r
2019-04-20,35800\r
2019-04-23,35500\r
2019-04-30,38200\r
2019-05-03,35100\r
2019-05-10,43100\r
2019-05-13,43100\r
2019-05-15,43400\r
2019-05-23,37000\r
2019-05-25,37000\r
2019-05-30,36500\r
2019-06-02,36900\r
2019-06-04,36900\r
2019-06-07,38000\r
2019-06-12,37500\r
2019-06-17,26400\r
2019-06-19,36100\r
2019-06-24,34100\r
2019-06-27,35800\r
2019-06-29,32000\r
2019-07-02,34500\r
2019-07-04,35400\r
2019-07-07,35400\r
2019-07-09,34700\r
2019-07-12,34900\r
2019-07-14,33400\r
2019-07-17,34800\r
2019-07-19,33300\r
2019-07-22,30400\r
2019-07-24,27800\r
2019-07-29,26200\r
2019-08-01,24600\r
2019-08-03,23500\r
2019-08-06,25600\r
2019-08-08,23100\r
2019-08-11,21000\r
2019-08-13,21000\r
2019-08-16,19900\r
2019-08-18,21000\r
2019-08-21,20400\r
2019-08-23,19600\r
2019-08-26,19500\r
2019-08-28,19400\r
2019-08-31,19400\r
2019-09-02,18100\r
2019-09-07,17500\r
2019-09-12,15200\r
2019-09-15,14100\r
2019-09-17,11100\r
2019-09-20,9200\r
2019-09-22,9200\r
2019-09-27,7000\r
2019-09-30,5000\r
2019-10-07,5700\r
2019-12-06,43400\r
2019-12-14,43400\r
2019-12-19,43400\r
2019-12-21,43400\r
2020-02-07,24800\r
2020-02-09,24800\r
2020-02-12,34100\r
2020-02-14,34100\r
2020-02-22,32400\r
2020-02-24,35600\r
2020-03-08,39300\r
2020-03-18,41100\r
2020-03-20,41400\r
2020-03-23,43400\r
2020-03-25,42600\r
2020-03-28,43800\r
2020-04-02,47800\r
2020-04-04,48900\r
2020-04-07,50100\r
2020-04-09,49900\r
2020-04-12,49900\r
2020-04-14,49400\r
2020-04-17,49400\r
2020-04-22,49400\r
2020-04-24,49300\r
2020-04-27,51800\r
2020-05-04,46300\r
2020-05-07,46300\r
2020-05-09,44300\r
2020-05-17,42900\r
2020-05-19,45000\r
2020-05-22,46500\r
2020-05-24,46500\r
2020-05-27,46800\r
2020-05-29,43800\r
2020-06-01,43800\r
2020-06-23,44300\r
2020-06-26,44300\r
2020-06-28,44300\r
2020-07-01,47500\r
2020-07-08,41000\r
2020-07-11,40000\r
2020-07-13,40600\r
2020-07-18,38700\r
2020-07-21,37800\r
2020-07-23,37800\r
2020-07-28,32300\r
2020-07-31,33900\r
2020-08-05,27800\r
2020-08-07,24900\r
2020-08-10,23700\r
2020-08-15,29800\r
2020-08-20,23800\r
2020-08-25,20700\r
2020-08-27,18600\r
2020-09-01,18700\r
2020-09-04,16600\r
2020-09-09,18300\r
2020-09-14,13500\r
2020-09-16,14600\r
2020-09-19,12900\r
2020-10-24,10600\r
2020-10-31,14000\r
2020-11-10,16600\r
2020-11-18,16200\r
2020-11-23,12600\r
2020-11-25,12600\r
2020-11-28,8800\r
2020-12-13,9600\r
2020-12-28,9600\r
2021-01-24,19100\r
2021-01-29,19100\r
2021-02-21,37600\r
2021-02-23,42200\r
2021-02-26,42200\r
2021-02-28,42000\r
2021-03-05,47000\r
2021-03-10,47300\r
2021-03-20,44200\r
2021-03-23,45800\r
2021-03-25,51600\r
2021-03-28,47300\r
2021-03-30,48000\r
2021-04-02,46500\r
2021-04-04,45500\r
2021-04-07,43000\r
2021-04-09,43500\r
2021-04-14,42400\r
2021-04-17,43000\r
2021-04-19,43700\r
2021-04-22,42900\r
2021-04-24,43600\r
2021-04-27,43100\r
2021-05-27,42300\r
2021-05-29,47700\r
2021-06-01,45500\r
2021-06-03,45500\r
2021-06-11,47000\r
2021-06-13,45100\r
2021-06-16,42600\r
2021-06-18,43000\r
2021-06-21,43000\r
2021-06-26,44400\r
2021-07-21,39200\r
2021-07-23,38700\r
2021-08-10,36600\r
2021-08-12,35500\r
2021-08-15,34800\r
2021-08-17,34800\r
2021-08-20,36300\r
2021-08-25,35900\r
2021-08-27,36300\r
2021-09-01,34800\r
2021-09-04,36200\r
2021-09-06,36500\r
2021-09-24,32600\r
2021-09-26,39500\r
2021-09-29,34600\r
2021-10-01,34800\r
2021-10-11,34400\r
2021-10-14,37600\r
2021-10-16,34100\r
2021-10-21,35700\r
2021-10-24,37500\r
2021-11-30,34200\r
2021-12-03,34200\r
2021-12-23,30400\r
2022-01-14,28400\r
2022-01-19,28400\r
2022-01-22,28400\r
2022-01-24,28400\r
2022-02-08,24700\r
2022-02-11,24700\r
2022-02-13,24700\r
2022-02-18,24700\r
2022-02-26,34700\r
2022-02-28,36600\r
2022-03-03,36600\r
2022-03-05,36200\r
2022-03-08,36200\r
2022-03-10,41100\r
2022-03-23,43300\r
2022-03-25,45100\r
2022-03-28,45100\r
2022-04-04,42400\r
2022-04-14,33700\r
2022-04-17,40100\r
2022-04-19,40100\r
2022-04-27,40300\r
2022-05-09,40400\r
2022-05-12,41900\r
2022-05-14,41900\r
2022-05-17,41900\r
2022-05-19,41900\r
2022-05-29,36500\r
2022-06-06,36500\r
2022-06-11,33000\r
2022-06-13,36100\r
2022-06-16,31500\r
2022-06-18,31600\r
2022-06-21,30400\r
2022-06-23,31100\r
2022-06-28,28200\r
2022-07-01,29300\r
2022-07-03,28600\r
2022-07-06,28900\r
2022-07-08,27900\r
2022-07-11,27700\r
2022-07-13,26500\r
2022-07-16,25000\r
2022-07-18,22900\r
2022-07-21,22100\r
2022-07-26,22800\r
2022-07-28,21100\r
2022-07-31,19500\r
2022-08-02,18600\r
2022-08-05,18600\r
2022-08-07,17400\r
2022-08-10,16300\r
2022-08-12,14600\r
2022-08-15,13000\r
2022-08-17,13000\r
2022-08-22,9900\r
2022-08-25,9000\r
2022-08-30,9000\r
2022-09-01,7600\r
2022-09-04,7500\r
2022-09-06,8300\r
2022-09-09,8000\r
2022-09-11,8000\r
2022-09-19,6500\r
2022-09-21,7000\r
2022-10-04,6200\r
2022-10-06,6200\r
2022-10-09,6200\r
2022-10-11,7400\r
2022-10-16,7200\r
2022-10-26,6100\r
2022-10-31,6300\r
2022-11-23,10300\r
2022-12-05,11100\r
2023-02-03,17000\r
2023-02-08,17100\r
2023-02-11,16800\r
2023-02-13,17100\r
2023-02-16,18800\r
2023-02-21,19600\r
2023-02-26,20100\r
2023-03-03,18900\r
2023-03-05,15000\r
2023-03-15,15000\r
2023-04-19,15700\r
2023-05-02,20100\r
2023-05-04,20100\r
2023-05-27,19800\r
2023-05-29,21600\r
2023-06-01,18700\r
2023-06-03,20500\r
2023-06-06,19800\r
2023-06-08,20500\r
2023-06-16,23500\r
2023-06-23,29600\r
2023-06-26,30400\r
2023-06-28,29000\r
2023-07-06,26200\r
2023-07-08,27000\r
`;export{r as default};