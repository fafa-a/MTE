const r=`date,value\r
2017-02-06,29400\r
2017-02-16,33000\r
2017-02-19,32900\r
2017-02-26,31500\r
2017-03-01,32400\r
2017-03-08,32900\r
2017-03-11,32700\r
2017-03-21,29700\r
2017-03-28,35200\r
2017-03-31,35200\r
2017-04-07,30200\r
2017-04-10,26700\r
2017-04-17,27500\r
2017-04-20,26400\r
2017-04-30,26700\r
2017-05-07,26800\r
2017-05-10,26800\r
2017-05-17,24800\r
2017-05-27,27100\r
2017-05-30,28000\r
2017-06-06,25000\r
2017-06-09,26500\r
2017-06-16,27800\r
2017-06-19,28000\r
2017-06-26,28000\r
2017-06-29,26200\r
2017-07-01,28200\r
2017-07-04,30600\r
2017-07-06,27500\r
2017-07-11,27500\r
2017-07-14,29000\r
2017-07-19,31900\r
2017-07-21,31900\r
2017-07-24,31900\r
2017-07-26,26700\r
2017-07-29,26700\r
2017-07-31,30600\r
2017-08-03,30600\r
2017-08-05,27300\r
2017-08-08,28500\r
2017-08-13,29100\r
2017-08-15,29100\r
2017-08-18,29500\r
2017-08-20,33500\r
2017-08-23,33500\r
2017-08-25,27700\r
2017-09-02,29500\r
2017-09-04,27900\r
2017-09-07,30500\r
2017-09-12,23500\r
2017-09-14,22300\r
2017-09-17,23300\r
2017-09-19,23300\r
2017-09-22,23300\r
2017-09-24,24700\r
2017-09-27,24800\r
2017-10-04,25600\r
2017-10-07,23200\r
2017-10-09,25100\r
2017-10-12,21800\r
2017-10-14,23200\r
2017-10-17,22400\r
2017-10-19,23500\r
2017-10-22,23100\r
2017-10-24,23700\r
2017-10-27,23300\r
2017-10-29,21500\r
2017-11-01,21600\r
2017-11-03,24200\r
2017-11-06,24200\r
2017-11-13,22900\r
2017-11-16,25000\r
2017-11-18,20800\r
2017-11-21,20900\r
2017-11-23,20900\r
2017-11-26,20700\r
2017-11-28,21200\r
2017-12-01,22700\r
2017-12-03,23100\r
2017-12-06,23100\r
2017-12-08,22900\r
2017-12-13,23700\r
2017-12-16,26100\r
2017-12-21,23300\r
2017-12-23,23300\r
2017-12-26,21600\r
2017-12-28,22200\r
2018-01-17,23800\r
2018-01-20,23800\r
2018-01-27,23800\r
2018-02-04,35600\r
2018-02-09,35600\r
2018-02-11,36500\r
2018-02-14,33700\r
2018-02-19,35400\r
2018-02-21,34500\r
2018-03-03,41200\r
2018-03-06,40400\r
2018-03-08,40400\r
2018-03-13,40500\r
2018-03-16,30400\r
2018-03-21,30400\r
2018-03-23,33900\r
2018-03-26,38400\r
2018-03-28,38400\r
2018-03-31,38400\r
2018-04-02,38400\r
2018-04-05,39200\r
2018-04-07,34800\r
2018-04-17,41900\r
2018-04-20,43200\r
2018-04-22,40200\r
2018-04-25,41600\r
2018-04-27,36500\r
2018-04-30,35700\r
2018-05-05,35700\r
2018-05-10,33300\r
2018-06-01,34400\r
2018-06-09,34900\r
2018-06-14,33000\r
2018-06-16,34800\r
2018-06-19,34600\r
2018-06-21,34400\r
2018-06-24,34400\r
2018-06-26,34400\r
2018-06-29,35200\r
2018-07-01,38100\r
2018-07-04,34100\r
2018-07-06,34100\r
2018-07-09,34300\r
2018-07-11,33200\r
2018-07-14,33200\r
2018-07-19,32600\r
2018-07-21,28000\r
2018-07-24,33300\r
2018-07-26,30800\r
2018-07-29,30800\r
2018-07-31,32100\r
2018-08-03,34100\r
2018-08-05,32900\r
2018-08-08,39800\r
2018-08-10,31300\r
2018-08-15,30700\r
2018-08-18,29900\r
2018-08-20,29900\r
2018-08-23,32000\r
2018-08-25,29800\r
2018-08-28,27400\r
2018-08-30,25900\r
2018-09-02,29200\r
2018-09-04,29200\r
2018-09-07,28400\r
2018-09-12,30000\r
2018-09-14,26300\r
2018-09-19,29300\r
2018-09-22,26500\r
2018-09-24,28400\r
2018-09-27,26300\r
2018-09-29,26400\r
2018-10-02,25600\r
2018-10-04,26000\r
2018-10-09,26900\r
2018-10-12,31200\r
2018-10-14,31200\r
2018-10-19,31700\r
2018-10-22,29800\r
2018-10-24,27700\r
2018-11-01,29600\r
2018-11-03,26000\r
2018-11-18,29300\r
2018-11-26,34500\r
2018-11-28,28300\r
2018-12-01,30000\r
2018-12-03,30000\r
2018-12-06,33200\r
2018-12-08,31600\r
2018-12-11,30700\r
2018-12-18,29400\r
2018-12-28,17900\r
2019-01-02,9100\r
2019-01-05,12800\r
2019-01-07,8800\r
2019-01-10,9500\r
2019-01-12,9500\r
2019-01-15,8000\r
2019-01-22,8000\r
2019-01-25,8800\r
2019-01-27,10700\r
2019-01-30,10700\r
2019-02-04,18700\r
2019-02-06,12700\r
2019-02-09,18300\r
2019-02-11,22300\r
2019-02-14,19400\r
2019-02-16,18100\r
2019-02-19,20300\r
2019-02-21,23500\r
2019-03-01,27700\r
2019-03-03,28000\r
2019-03-08,27600\r
2019-03-11,22300\r
2019-03-13,21600\r
2019-03-16,22800\r
2019-03-18,20900\r
2019-03-21,21700\r
2019-03-23,21700\r
2019-03-26,21400\r
2019-03-28,20300\r
2019-03-31,18100\r
2019-04-02,20600\r
2019-04-05,18900\r
2019-04-07,17900\r
2019-04-10,18700\r
2019-04-15,23400\r
2019-04-17,23200\r
2019-04-20,21300\r
2019-04-22,23900\r
2019-04-27,26600\r
2019-04-30,26900\r
2019-05-02,27500\r
2019-05-05,29300\r
2019-05-07,29300\r
2019-05-10,31800\r
2019-05-12,34900\r
2019-05-15,34800\r
2019-05-30,50000\r
2019-06-01,50000\r
2019-06-04,42600\r
2019-06-06,44500\r
2019-06-11,44500\r
2019-06-16,37000\r
2019-06-19,49800\r
2019-06-21,46100\r
2019-06-24,41800\r
2019-06-26,39800\r
2019-06-29,39100\r
2019-07-01,39500\r
2019-07-04,38600\r
2019-07-06,35900\r
2019-07-11,33200\r
2019-07-14,39300\r
2019-07-16,34600\r
2019-07-19,36100\r
2019-07-21,29200\r
2019-07-24,40100\r
2019-07-26,29200\r
2019-07-29,33000\r
2019-07-31,28800\r
2019-08-03,31900\r
2019-08-05,30400\r
2019-08-08,32700\r
2019-08-10,29300\r
2019-08-15,27700\r
2019-08-18,31100\r
2019-08-20,27900\r
2019-08-23,27600\r
2019-08-25,27600\r
2019-08-28,32300\r
2019-08-30,27300\r
2019-09-02,28000\r
2019-09-04,28000\r
2019-09-07,24100\r
2019-09-12,21700\r
2019-09-14,20500\r
2019-09-17,20600\r
2019-09-19,20900\r
2019-09-24,22400\r
2019-09-27,22900\r
2019-09-29,20100\r
2019-10-02,20600\r
2019-10-04,20600\r
2019-10-07,18600\r
2019-10-14,18100\r
2019-10-17,25300\r
2019-10-19,23600\r
2019-10-27,20100\r
2019-10-29,20100\r
2019-11-06,23100\r
2019-11-08,23100\r
2019-11-13,22400\r
2019-11-16,22400\r
2019-12-03,12100\r
2019-12-06,12100\r
2019-12-08,28900\r
2019-12-13,22000\r
2019-12-21,26400\r
2019-12-23,28900\r
2019-12-28,27700\r
2020-01-05,28600\r
2020-01-12,28000\r
2020-01-20,28200\r
2020-01-22,17200\r
2020-01-25,17200\r
2020-01-27,17200\r
2020-01-30,38000\r
2020-02-01,38000\r
2020-02-04,38000\r
2020-02-09,38000\r
2020-02-11,34200\r
2020-02-14,32100\r
2020-02-16,27300\r
2020-02-19,27300\r
2020-02-21,31100\r
2020-02-24,31000\r
2020-02-26,29100\r
2020-03-07,38000\r
2020-03-10,38000\r
2020-03-12,19600\r
2020-03-15,19600\r
2020-03-17,19600\r
2020-03-20,19600\r
2020-03-22,19600\r
2020-04-01,61000\r
2020-04-04,61000\r
2020-04-06,36200\r
2020-04-09,38800\r
2020-04-11,35100\r
2020-04-14,36700\r
2020-04-24,38000\r
2020-04-26,35400\r
2020-04-29,40700\r
2020-05-04,40900\r
2020-05-06,40900\r
2020-05-09,40900\r
2020-05-11,38200\r
2020-05-14,38200\r
2020-05-21,27300\r
2020-05-24,27300\r
2020-05-26,29800\r
2020-05-31,29800\r
2020-06-03,29800\r
2020-06-05,26500\r
2020-06-08,28600\r
2020-06-10,28600\r
2020-06-15,31900\r
2020-06-23,51800\r
2020-06-25,51800\r
2020-06-28,55000\r
2020-06-30,55000\r
2020-07-03,55000\r
2020-07-05,46900\r
2020-07-08,49100\r
2020-07-10,45700\r
2020-07-15,39000\r
2020-07-20,39000\r
2020-07-23,38000\r
2020-07-30,30900\r
2020-08-02,29600\r
2020-08-04,30400\r
2020-08-07,27900\r
2020-08-09,27900\r
2020-08-12,27100\r
2020-08-14,28500\r
2020-08-17,27900\r
2020-08-19,28000\r
2020-08-22,27900\r
2020-08-24,24600\r
2020-08-27,25900\r
2020-09-01,23200\r
2020-09-03,23200\r
2020-09-06,32300\r
2020-09-08,29200\r
2020-09-13,28200\r
2020-09-16,20600\r
2020-09-18,20600\r
2020-09-21,20600\r
2020-09-23,23400\r
2020-09-26,21100\r
2020-09-28,19300\r
2020-10-01,18200\r
2020-10-03,19400\r
2020-10-08,19400\r
2020-10-13,15300\r
2020-10-16,21000\r
2020-10-18,25700\r
2020-10-21,19500\r
2020-10-28,19500\r
2020-11-02,10900\r
2020-11-05,12200\r
2020-11-07,12000\r
2020-11-10,13400\r
2020-11-12,13400\r
2020-11-15,13400\r
2020-11-17,13500\r
2020-11-20,13500\r
2020-11-22,15700\r
2020-11-25,18000\r
2020-11-27,20000\r
2020-11-30,20000\r
2020-12-07,16400\r
2020-12-10,19800\r
2020-12-12,10800\r
2020-12-17,10800\r
2020-12-22,10800\r
2020-12-25,27500\r
2020-12-30,28000\r
2021-01-06,20000\r
2021-01-11,20800\r
2021-01-14,23000\r
2021-01-16,23000\r
2021-01-19,21900\r
2021-01-24,17100\r
2021-01-26,15800\r
2021-01-29,15800\r
2021-01-31,15700\r
2021-02-03,15700\r
2021-02-08,18300\r
2021-02-10,18300\r
2021-02-15,15200\r
2021-02-18,15200\r
2021-02-20,16500\r
2021-02-23,14900\r
2021-02-25,17100\r
2021-02-28,18700\r
2021-03-02,17600\r
2021-03-05,18100\r
2021-03-07,18300\r
2021-03-10,18100\r
2021-03-12,17000\r
2021-03-15,18500\r
2021-03-17,17100\r
2021-03-20,17000\r
2021-03-22,17000\r
2021-03-25,16200\r
2021-03-27,17100\r
2021-03-30,18100\r
2021-04-01,15700\r
2021-04-04,15700\r
2021-04-06,16500\r
2021-04-09,14600\r
2021-04-16,14000\r
2021-05-04,21500\r
2021-05-06,22100\r
2021-05-09,22100\r
2021-05-14,22100\r
2021-05-26,19000\r
2021-05-29,19000\r
2021-05-31,19900\r
2021-06-03,19800\r
2021-06-05,20500\r
2021-06-08,20100\r
2021-06-10,20200\r
2021-06-13,20600\r
2021-06-15,19400\r
2021-06-18,19900\r
2021-06-25,16800\r
2021-06-28,20800\r
2021-06-30,17400\r
2021-07-03,15100\r
2021-07-05,16200\r
2021-07-08,18700\r
2021-07-10,16100\r
2021-07-13,16300\r
2021-07-15,16600\r
2021-07-18,17800\r
2021-07-20,16400\r
2021-07-23,15400\r
2021-07-25,15700\r
2021-07-28,15700\r
2021-07-30,14600\r
2021-08-02,14100\r
2021-08-07,14100\r
2021-08-09,12800\r
2021-08-12,15600\r
2021-08-14,12800\r
2021-08-17,11700\r
2021-08-19,12200\r
2021-08-22,12700\r
2021-08-24,12700\r
2021-08-27,12700\r
2021-08-29,15100\r
2021-09-01,14800\r
2021-09-06,12800\r
2021-09-08,12200\r
2021-09-11,12500\r
2021-09-13,12200\r
2021-09-18,10600\r
2021-09-21,11200\r
2021-09-23,11800\r
2021-09-28,11300\r
2021-10-01,11600\r
2021-10-06,12800\r
2021-10-11,11600\r
2021-10-13,11500\r
2021-10-16,12300\r
2021-10-18,11400\r
2021-10-23,10400\r
2021-10-26,12800\r
2021-10-28,11000\r
2021-11-02,13700\r
2021-11-05,15800\r
2021-11-20,14500\r
2021-11-27,14500\r
2021-11-30,16800\r
2021-12-02,14800\r
2021-12-05,14800\r
2021-12-07,12800\r
2021-12-10,12800\r
2021-12-12,14000\r
2021-12-15,14700\r
2021-12-17,12200\r
2021-12-20,11700\r
2021-12-22,11700\r
2022-01-09,11800\r
2022-01-11,12500\r
2022-01-14,11300\r
2022-01-16,11900\r
2022-01-19,11900\r
2022-01-21,11700\r
2022-01-24,11900\r
2022-01-26,12000\r
2022-01-29,12100\r
2022-02-03,12700\r
2022-02-05,12600\r
2022-02-08,12700\r
2022-02-10,12100\r
2022-02-13,11700\r
2022-02-15,11900\r
2022-02-18,12100\r
2022-02-20,12000\r
2022-02-23,13000\r
2022-02-25,14000\r
2022-02-28,14100\r
2022-03-02,12900\r
2022-03-07,13400\r
2022-03-10,13400\r
2022-03-22,13900\r
2022-03-25,17900\r
2022-04-01,14900\r
2022-04-04,17200\r
2022-04-09,16100\r
2022-04-11,16100\r
2022-04-14,16000\r
2022-04-16,15200\r
2022-04-19,15200\r
2022-04-24,17200\r
2022-04-26,15700\r
2022-04-29,15300\r
2022-05-01,15300\r
2022-05-04,17200\r
2022-05-09,16900\r
2022-05-11,15300\r
2022-05-14,16600\r
2022-05-16,16800\r
2022-05-19,16400\r
2022-05-21,16200\r
2022-05-24,16600\r
2022-05-26,17100\r
2022-05-29,17000\r
2022-05-31,15800\r
2022-06-05,16700\r
2022-06-10,15700\r
2022-06-13,15700\r
2022-06-18,15700\r
2022-06-20,15700\r
2022-06-25,13200\r
2022-07-03,17200\r
2022-07-05,14700\r
2022-07-08,16400\r
2022-07-10,16700\r
2022-07-13,16100\r
2022-07-15,14800\r
2022-07-18,14300\r
2022-07-20,13300\r
2022-07-23,13400\r
2022-07-25,12600\r
2022-07-28,12600\r
2022-07-30,13300\r
2022-08-02,13300\r
2022-08-04,11200\r
2022-08-07,13600\r
2022-08-09,12500\r
2022-08-12,12500\r
2022-08-14,13000\r
2022-08-19,12600\r
2022-08-22,12400\r
2022-08-24,11200\r
2022-08-27,11200\r
2022-08-29,11000\r
2022-09-01,11800\r
2022-09-03,11500\r
2022-09-06,10600\r
2022-09-08,10600\r
2022-09-16,11900\r
2022-09-18,11900\r
2022-09-26,11900\r
2022-09-28,11500\r
2022-10-01,11500\r
2022-10-03,11500\r
2022-10-06,11700\r
2022-10-11,13000\r
2022-10-18,11300\r
2022-10-26,11100\r
2022-10-28,12500\r
2022-10-31,10700\r
2022-11-02,10700\r
2022-11-05,13500\r
2022-11-10,12200\r
2022-11-17,10100\r
2022-11-20,10400\r
2022-11-22,10400\r
2022-11-25,10400\r
2022-11-27,10400\r
2022-11-30,10600\r
2022-12-02,11500\r
2022-12-05,9900\r
2022-12-07,10500\r
2022-12-10,10500\r
2022-12-25,10300\r
2022-12-27,12600\r
2022-12-30,12600\r
2023-01-04,9200\r
2023-01-06,9200\r
2023-01-09,12000\r
2023-01-14,12000\r
2023-01-19,12400\r
2023-01-21,12900\r
2023-01-24,12300\r
2023-01-26,12300\r
2023-01-29,11900\r
2023-01-31,11900\r
2023-02-03,11900\r
2023-02-05,12300\r
2023-02-08,12300\r
2023-02-10,12400\r
2023-02-13,12700\r
2023-02-15,12300\r
2023-02-18,12300\r
2023-02-20,12100\r
2023-03-02,12100\r
2023-03-05,13300\r
2023-03-07,13300\r
2023-03-10,12800\r
2023-03-12,13000\r
2023-03-15,12400\r
2023-03-17,13500\r
2023-03-20,13500\r
2023-03-22,10700\r
2023-03-25,11600\r
2023-03-27,12500\r
2023-03-30,12200\r
2023-04-01,12800\r
2023-04-04,12800\r
2023-04-06,12000\r
2023-04-09,14600\r
2023-04-14,11800\r
2023-04-16,13300\r
2023-04-19,12600\r
2023-04-24,12800\r
2023-04-26,12700\r
2023-05-04,11400\r
2023-05-06,10900\r
2023-05-11,12700\r
2023-05-16,14500\r
2023-05-24,16300\r
2023-05-26,14800\r
2023-06-03,16400\r
2023-06-08,17600\r
2023-06-10,17600\r
2023-06-15,14000\r
2023-06-20,14000\r
2023-06-23,19200\r
2023-06-25,14000\r
2023-06-28,19200\r
2023-07-05,11800\r
2023-07-08,14900\r
2023-07-10,13800\r
2023-07-13,15100\r
2023-07-15,13700\r
2023-07-18,14500\r
2023-07-20,13500\r
2023-07-23,12800\r
2023-07-25,12800\r
2023-07-28,13500\r
2023-07-30,12300\r
2023-08-02,12400\r
2023-08-04,12000\r
2023-08-07,11500\r
2023-08-09,11500\r
2023-08-12,11600\r
2023-08-14,11900\r
2023-08-17,10800\r
2023-08-19,12400\r
2023-08-22,10700\r
2023-08-24,11800\r
2023-08-29,13300\r
2023-09-01,12700\r
2023-09-03,12300\r
2023-09-06,11600\r
2023-09-08,9100\r
2023-09-11,9500\r
2023-09-13,9500\r
2023-09-23,11400\r
2023-09-26,12500\r
2023-09-28,12500\r
2023-10-01,9700\r
2023-10-03,9800\r
2023-10-06,8500\r
2023-10-08,7900\r
2023-10-11,7900\r
2023-10-13,7800\r
2023-10-21,13600\r
2023-10-28,14000\r
2023-10-31,11700\r
2023-11-05,12100\r
2023-11-07,11600\r
2023-11-17,11600\r
2023-11-20,12600\r
2023-11-22,13600\r
2023-11-25,11100\r
2023-11-27,11100\r
2023-12-02,10500\r
2023-12-05,10400\r
2023-12-07,12600\r
2023-12-15,13100\r
2023-12-25,10800\r
2023-12-30,11400\r
`;export{r as default};
