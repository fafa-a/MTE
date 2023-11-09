const r=`date,value\r
2017-03-10,53400\r
2017-03-13,53400\r
2017-03-30,66300\r
2017-04-02,66300\r
2017-04-09,66700\r
2017-04-12,64400\r
2017-04-19,62000\r
2017-04-22,62000\r
2017-04-29,66200\r
2017-05-02,66200\r
2017-05-19,53600\r
2017-05-22,66500\r
2017-06-01,66900\r
2017-06-18,66400\r
2017-06-21,68700\r
2017-06-28,68700\r
2017-07-01,66700\r
2017-08-02,32300\r
2017-08-05,32300\r
2017-08-07,30300\r
2017-08-20,20100\r
2017-08-27,22400\r
2017-10-14,18400\r
2017-10-16,18400\r
2017-10-19,19300\r
2017-10-21,18200\r
2017-10-26,17700\r
2017-10-31,18700\r
2017-11-05,19500\r
2017-11-08,18200\r
2017-11-13,19500\r
2017-11-15,19500\r
2017-11-23,18500\r
2017-11-25,20100\r
2017-11-28,20300\r
2017-12-08,20600\r
2017-12-15,23600\r
2017-12-18,23600\r
2018-01-17,54700\r
2018-01-19,60600\r
2018-01-27,60600\r
2018-02-08,66000\r
2018-02-21,74900\r
2018-02-26,75000\r
2018-02-28,75000\r
2018-03-05,67100\r
2018-03-08,67100\r
2018-03-20,67600\r
2018-04-17,67500\r
2018-04-19,70100\r
2018-04-22,66500\r
2018-04-24,66500\r
2018-05-04,68100\r
2018-05-07,68100\r
2018-05-09,68100\r
2018-05-19,66100\r
2018-05-22,66100\r
2018-06-13,62300\r
2018-06-21,62300\r
2018-06-23,66600\r
2018-06-26,67100\r
2018-06-28,67100\r
2018-07-01,65500\r
2018-07-08,64900\r
2018-07-11,64400\r
2018-07-13,64300\r
2018-07-16,66300\r
2018-07-18,63200\r
2018-07-21,65300\r
2018-07-23,61700\r
2018-07-26,63100\r
2018-07-28,66900\r
2018-08-02,63300\r
2018-08-05,57600\r
2018-08-22,34200\r
2018-09-01,34200\r
2018-09-04,19200\r
2018-09-09,19200\r
2018-09-11,18500\r
2018-09-14,16400\r
2018-09-24,16300\r
2018-09-26,5900\r
2018-09-29,3900\r
2018-10-01,3900\r
2018-10-04,3900\r
2018-10-21,200\r
2018-10-24,200\r
2018-11-15,6100\r
2018-11-18,8000\r
2019-01-09,64900\r
2019-01-14,64900\r
2019-01-17,69100\r
2019-01-22,69100\r
2019-01-24,67200\r
2019-02-03,68700\r
2019-02-13,66600\r
2019-02-16,66600\r
2019-02-18,66600\r
2019-02-23,67100\r
2019-02-26,64900\r
2019-03-13,64800\r
2019-03-23,60100\r
2019-03-30,65700\r
2019-04-09,65600\r
2019-04-12,62300\r
2019-04-14,62300\r
2019-04-17,64200\r
2019-04-19,61900\r
2019-04-27,64000\r
2019-05-12,70200\r
2019-05-14,70100\r
2019-05-24,65700\r
2019-05-27,65700\r
2019-06-01,68800\r
2019-06-26,64900\r
2019-06-28,62300\r
2019-07-01,64600\r
2019-07-03,62800\r
2019-07-06,64300\r
2019-07-08,64600\r
2019-07-11,64600\r
2019-07-13,62500\r
2019-07-16,61500\r
2019-07-23,56400\r
2019-07-28,53600\r
2019-07-31,53600\r
2019-08-02,40400\r
2019-08-07,40400\r
2019-08-22,20100\r
2019-08-25,20100\r
2019-08-27,20100\r
2019-09-01,16100\r
2019-09-06,16100\r
2019-09-11,8300\r
2019-09-16,8400\r
2019-09-19,7500\r
2019-09-21,7500\r
2019-09-24,6300\r
2019-10-21,11400\r
2019-10-26,11400\r
2019-11-18,44200\r
2019-11-23,48900\r
2019-12-03,48900\r
2019-12-13,55900\r
2019-12-20,65500\r
2019-12-23,65500\r
2019-12-25,65500\r
2019-12-30,66800\r
2020-01-19,61300\r
2020-01-22,61500\r
2020-02-06,65100\r
2020-02-11,62100\r
2020-02-13,62100\r
2020-02-18,62100\r
2020-03-19,61800\r
2020-03-24,65900\r
2020-03-27,62500\r
2020-03-29,64000\r
2020-04-01,62800\r
2020-04-08,66400\r
2020-04-11,65400\r
2020-04-13,64700\r
2020-04-16,63800\r
2020-04-18,69700\r
2020-04-23,69400\r
2020-04-26,69400\r
2020-04-28,68200\r
2020-05-13,72800\r
2020-05-18,73200\r
2020-05-21,73200\r
2020-05-26,70000\r
2020-05-28,70000\r
2020-05-31,66000\r
2020-06-02,64600\r
2020-06-22,55900\r
2020-06-25,58700\r
2020-07-07,61100\r
2020-07-12,65800\r
2020-07-17,57200\r
2020-07-20,58200\r
2020-07-22,58000\r
2020-07-27,60900\r
2020-07-30,57600\r
2020-08-04,57300\r
2020-08-06,46900\r
2020-08-09,39300\r
2020-08-11,34700\r
2020-08-14,34700\r
2020-08-21,32800\r
2020-09-08,27000\r
2020-09-10,27000\r
2020-09-13,21300\r
2020-09-15,21300\r
2020-11-04,49200\r
2020-11-12,49700\r
2020-11-14,49700\r
2020-11-19,49700\r
2020-11-22,40200\r
2020-11-29,44000\r
2020-12-04,43600\r
2020-12-12,45500\r
2020-12-17,51800\r
2020-12-29,64800\r
2021-01-08,65700\r
2021-02-27,69000\r
2021-03-02,68600\r
2021-03-07,68600\r
2021-03-09,69500\r
2021-03-14,69200\r
2021-03-19,69500\r
2021-03-22,67000\r
2021-03-24,67000\r
2021-03-29,67100\r
2021-04-01,66000\r
2021-04-03,64600\r
2021-04-08,64600\r
2021-04-13,65700\r
2021-04-18,66900\r
2021-04-21,65100\r
2021-04-23,67000\r
2021-04-26,67500\r
2021-04-28,66500\r
2021-05-01,67300\r
2021-05-03,67000\r
2021-05-08,66500\r
2021-05-11,62900\r
2021-05-28,67400\r
2021-05-31,66200\r
2021-06-05,65500\r
2021-06-10,64300\r
2021-06-12,61900\r
2021-06-15,62800\r
2021-07-17,58800\r
2021-07-20,60200\r
2021-07-22,60200\r
2021-08-11,54600\r
2021-08-14,55400\r
2021-08-26,40200\r
2021-09-03,40200\r
2021-09-05,40200\r
2021-09-23,14400\r
2021-09-30,17200\r
2021-10-03,16500\r
2021-10-08,17600\r
2021-10-15,17400\r
2021-10-28,19100\r
2021-11-09,20700\r
2021-11-17,24900\r
2021-11-19,23800\r
2021-11-22,23900\r
2021-11-24,23800\r
2021-12-17,34300\r
2022-01-01,53600\r
2022-01-06,60900\r
2022-01-11,60900\r
2022-01-13,63100\r
2022-01-21,63100\r
2022-02-05,65700\r
2022-02-07,65700\r
2022-02-12,65700\r
2022-03-07,63400\r
2022-03-09,63400\r
2022-03-12,63400\r
2022-03-14,67000\r
2022-03-22,66900\r
2022-03-24,63600\r
2022-03-27,63600\r
2022-04-01,63600\r
2022-04-03,62200\r
2022-04-11,64600\r
2022-04-13,65300\r
2022-04-16,64500\r
2022-04-21,64900\r
2022-04-26,63800\r
2022-05-01,64000\r
2022-05-03,62100\r
2022-05-06,62000\r
2022-05-08,61700\r
2022-05-11,63600\r
2022-05-13,63600\r
2022-05-16,63600\r
2022-05-21,64000\r
2022-05-28,64000\r
2022-05-31,62700\r
2022-06-02,63900\r
2022-06-12,64900\r
2022-06-15,61700\r
2022-06-17,65300\r
2022-06-27,63300\r
2022-07-02,56800\r
2022-07-05,52000\r
2022-07-10,50300\r
2022-07-12,50300\r
2022-07-15,46700\r
2022-07-17,42200\r
2022-07-20,42200\r
2022-07-30,13600\r
2022-08-06,13600\r
2022-08-09,11000\r
2022-08-11,9400\r
2022-09-18,5000\r
2022-09-20,5900\r
2022-09-25,5900\r
2022-09-30,5400\r
2022-11-02,11000\r
2022-11-04,11000\r
2022-11-12,11200\r
2022-11-19,11300\r
2022-11-22,11300\r
2022-11-29,19400\r
2022-12-07,19400\r
2022-12-09,20800\r
2022-12-27,50000\r
2022-12-29,53500\r
2023-01-11,63900\r
2023-01-13,63900\r
2023-01-16,63900\r
2023-01-18,63900\r
2023-01-21,63900\r
2023-02-10,14200\r
2023-02-12,61200\r
2023-02-15,60900\r
2023-02-20,63400\r
2023-02-27,68800\r
2023-03-02,67600\r
2023-03-04,67200\r
2023-03-07,67200\r
2023-03-14,61700\r
2023-03-17,64300\r
2023-03-24,64300\r
2023-03-27,64300\r
2023-05-26,63900\r
2023-05-28,64000\r
2023-05-31,64100\r
2023-06-02,64500\r
2023-06-05,64300\r
2023-06-07,63200\r
2023-06-12,63400\r
2023-06-15,63700\r
2023-06-22,65500\r
2023-06-25,65500\r
2023-07-07,54800\r
2023-07-10,54800\r
2023-07-15,54800\r
2023-07-17,54800\r
2023-07-22,46100\r
2023-08-09,33900\r
2023-08-14,33900\r
2023-08-16,33900\r
2023-08-19,34000\r
2023-08-21,24300\r
2023-09-03,18100\r
2023-09-05,18100\r
2023-09-08,14900\r
2023-09-10,14900\r
2023-09-13,14900\r
2023-09-15,14900\r
2023-09-18,700\r
2023-09-30,9600\r
2023-10-03,9600\r
2023-10-05,9600\r
2023-10-08,9700\r
2023-10-10,9200\r
2023-11-02,49900\r
2023-11-07,49900\r
`;export{r as default};
