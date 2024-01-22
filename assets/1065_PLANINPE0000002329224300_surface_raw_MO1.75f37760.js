const r=`date,value\r
2017-03-10,53400\r
2017-03-13,21100\r
2017-03-30,66300\r
2017-04-09,64400\r
2017-04-12,61100\r
2017-04-19,61300\r
2017-04-22,66200\r
2017-05-19,53500\r
2017-05-22,66500\r
2017-06-18,66400\r
2017-06-21,68400\r
2017-08-02,32300\r
2017-08-05,28900\r
2017-08-07,32300\r
2017-08-20,20100\r
2017-08-27,22300\r
2017-10-14,18400\r
2017-10-19,17000\r
2017-10-26,18000\r
2017-11-05,18200\r
2017-11-13,18500\r
2017-11-25,20100\r
2017-11-28,19700\r
2017-12-08,18800\r
2017-12-15,23100\r
2018-01-17,54700\r
2018-01-19,60600\r
2018-02-08,66000\r
2018-02-21,74900\r
2018-02-26,67100\r
2018-03-20,67600\r
2018-04-17,67500\r
2018-04-19,66600\r
2018-04-22,67500\r
2018-05-04,68100\r
2018-05-19,66100\r
2018-06-13,62300\r
2018-06-23,62400\r
2018-06-26,67100\r
2018-07-01,64100\r
2018-07-08,64200\r
2018-07-11,64900\r
2018-07-13,60200\r
2018-07-16,63500\r
2018-07-18,61100\r
2018-07-26,63100\r
2018-08-02,57400\r
2018-08-05,53400\r
2018-08-22,34200\r
2018-09-01,19200\r
2018-09-04,10000\r
2018-09-11,19000\r
2018-09-14,16300\r
2018-09-24,4600\r
2018-09-26,3900\r
2018-09-29,3600\r
2018-10-21,200\r
2018-10-24,600\r
2018-11-15,6100\r
2018-11-18,7500\r
2019-01-09,64900\r
2019-01-17,62800\r
2019-01-24,68700\r
2019-02-03,61700\r
2019-02-13,66600\r
2019-02-23,63800\r
2019-02-26,64800\r
2019-03-23,60100\r
2019-03-30,65600\r
2019-04-09,60500\r
2019-04-12,64200\r
2019-04-19,63500\r
2019-04-27,65600\r
2019-05-12,65600\r
2019-05-24,62200\r
2019-06-01,66400\r
2019-06-26,64900\r
2019-06-28,64500\r
2019-07-01,66600\r
2019-07-03,65300\r
2019-07-06,62200\r
2019-07-08,61400\r
2019-07-13,56400\r
2019-07-16,53600\r
2019-07-23,40400\r
2019-08-22,20100\r
2019-08-25,16100\r
2019-09-01,8700\r
2019-09-06,7400\r
2019-09-11,8800\r
2019-09-16,6100\r
2019-09-19,7000\r
2019-10-21,11400\r
2019-11-18,44200\r
2019-12-13,55900\r
2019-12-20,65500\r
2019-12-30,63800\r
2020-01-19,61300\r
2020-01-22,60100\r
2020-02-06,62100\r
2020-03-19,61800\r
2020-03-24,64200\r
2020-03-27,62100\r
2020-03-29,64000\r
2020-04-01,65300\r
2020-04-11,63200\r
2020-04-16,68200\r
2020-05-13,72800\r
2020-05-18,65400\r
2020-05-26,64500\r
2020-05-28,63100\r
2020-05-31,65900\r
2020-06-02,65600\r
2020-06-22,55900\r
2020-07-07,60000\r
2020-07-12,60000\r
2020-07-17,56600\r
2020-07-20,56900\r
2020-07-22,61400\r
2020-07-30,46400\r
2020-08-04,36800\r
2020-08-06,36300\r
2020-08-11,26600\r
2020-09-08,27000\r
2020-09-10,19400\r
2020-09-13,21700\r
2020-11-04,49200\r
2020-11-12,32500\r
2020-11-22,39900\r
2020-11-29,40900\r
2020-12-04,46100\r
2020-12-12,52900\r
2020-12-17,55200\r
2020-12-29,64800\r
2021-01-08,65700\r
2021-02-27,68600\r
2021-03-09,69200\r
2021-03-19,66700\r
2021-03-29,68500\r
2021-04-01,64000\r
2021-04-03,64500\r
2021-04-13,65100\r
2021-04-18,66300\r
2021-04-23,67900\r
2021-04-26,65100\r
2021-04-28,66100\r
2021-05-08,62900\r
2021-05-28,66000\r
2021-05-31,63400\r
2021-06-12,61700\r
2021-06-15,55400\r
2021-07-17,58800\r
2021-07-20,59600\r
2021-08-11,54600\r
2021-08-14,50600\r
2021-08-26,40200\r
2021-09-23,14400\r
2021-09-30,16800\r
2021-10-03,17600\r
2021-10-08,17400\r
2021-10-28,19000\r
2021-11-09,20700\r
2021-11-19,27200\r
2021-11-22,22200\r
2021-11-24,20100\r
2021-12-17,34300\r
2022-01-01,53600\r
2022-01-06,60600\r
2022-01-13,62600\r
2022-01-21,61600\r
2022-02-05,65700\r
2022-03-07,63400\r
2022-03-14,66900\r
2022-03-22,63200\r
2022-03-24,62200\r
2022-04-11,64600\r
2022-04-13,64500\r
2022-04-16,62700\r
2022-04-21,63600\r
2022-05-03,61600\r
2022-05-11,63600\r
2022-05-21,60400\r
2022-05-28,64000\r
2022-05-31,62800\r
2022-06-02,64900\r
2022-06-15,61700\r
2022-06-17,63300\r
2022-06-27,42300\r
2022-07-02,53300\r
2022-07-05,50500\r
2022-07-10,46400\r
2022-07-12,42500\r
2022-07-15,33800\r
2022-07-30,13600\r
2022-08-06,10300\r
2022-08-09,9900\r
2022-08-11,8000\r
2022-09-18,5000\r
2022-09-20,5400\r
2022-11-02,11000\r
2022-11-12,10100\r
2022-11-19,11300\r
2022-11-29,19400\r
2022-12-09,20100\r
2022-12-27,50000\r
2022-12-29,53200\r
2023-01-11,63900\r
2023-02-10,11700\r
2023-02-12,60800\r
2023-02-15,63000\r
2023-02-20,66500\r
2023-02-27,68800\r
2023-03-02,67500\r
2023-03-04,61700\r
2023-03-17,64300\r
2023-05-26,63900\r
2023-05-28,60100\r
2023-05-31,65000\r
2023-06-02,63500\r
2023-06-05,65200\r
2023-06-07,61700\r
2023-06-15,65500\r
2023-07-07,54800\r
2023-07-22,46100\r
2023-08-09,33900\r
2023-08-19,23000\r
2023-08-21,21300\r
2023-09-03,18100\r
2023-09-05,14900\r
2023-09-08,700\r
2023-09-30,9600\r
2023-10-08,9000\r
2023-10-10,9300\r
2023-11-02,48800\r
2023-11-17,60300\r
`;export{r as default};