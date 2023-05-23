const r=`date,value\r
2017-01-19,62600\r
2017-01-26,57900\r
2017-02-15,68100\r
2017-02-18,65400\r
2017-02-25,68200\r
2017-03-10,80200\r
2017-03-30,79100\r
2017-04-06,90300\r
2017-04-09,85400\r
2017-04-19,84300\r
2017-05-09,85800\r
2017-05-16,87300\r
2017-05-19,87500\r
2017-05-26,91900\r
2017-06-18,94200\r
2017-07-05,94400\r
2017-08-02,87000\r
2017-08-14,78300\r
2017-08-22,68100\r
2017-09-01,74200\r
2017-10-08,73400\r
2017-10-11,75300\r
2017-10-13,75500\r
2017-10-16,72800\r
2017-10-23,73300\r
2017-10-26,67500\r
2017-10-28,73600\r
2017-10-31,68200\r
2017-11-07,70700\r
2017-11-17,69500\r
2017-11-22,63400\r
2017-11-27,67700\r
2017-11-30,66600\r
2017-12-05,65900\r
2017-12-12,69700\r
2017-12-20,73100\r
2017-12-25,68300\r
2018-01-09,91900\r
2018-01-24,106800\r
2018-02-15,55900\r
2018-03-02,112200\r
2018-03-15,117400\r
2018-03-22,119500\r
2018-03-30,111200\r
2018-04-06,106600\r
2018-04-19,109000\r
2018-04-21,118300\r
2018-04-24,106200\r
2018-05-06,105600\r
2018-05-11,122000\r
2018-05-21,120000\r
2018-05-24,72400\r
2018-06-20,119400\r
2018-06-23,119000\r
2018-06-25,112600\r
2018-07-08,108800\r
2018-07-13,114600\r
2018-07-23,112700\r
2018-07-25,114500\r
2018-07-30,114200\r
2018-08-02,111900\r
2018-08-04,111700\r
2018-08-12,111400\r
2018-08-19,112300\r
2018-08-22,111700\r
2018-08-27,103100\r
2018-09-01,105900\r
2018-09-03,105800\r
2018-09-08,113800\r
2018-09-11,113800\r
2018-09-16,104100\r
2018-09-18,114700\r
2018-09-23,110800\r
2018-09-26,104100\r
2018-09-28,107800\r
2018-10-03,106700\r
2018-10-23,100400\r
2018-11-15,104500\r
2018-11-22,96700\r
2019-02-03,112000\r
2019-02-13,101500\r
2019-02-15,111900\r
2019-02-20,107900\r
2019-02-23,103000\r
2019-02-25,110900\r
2019-03-12,94400\r
2019-03-20,104600\r
2019-03-22,105200\r
2019-03-25,106800\r
2019-03-27,110400\r
2019-03-30,106700\r
2019-05-01,105400\r
2019-05-06,109900\r
2019-05-14,114800\r
2019-06-08,115300\r
2019-06-13,116500\r
2019-06-28,120700\r
2019-07-05,109900\r
2019-07-10,102900\r
2019-07-15,118100\r
2019-08-04,100000\r
2019-08-09,96800\r
2019-08-14,96900\r
2019-08-22,91100\r
2019-08-24,98700\r
2019-08-29,95100\r
2019-09-11,74700\r
2019-09-13,75500\r
2019-09-16,71900\r
2019-09-18,76300\r
2019-10-11,59400\r
2019-10-13,64200\r
2019-12-05,108600\r
2019-12-10,101600\r
2019-12-15,88800\r
2019-12-27,104600\r
2019-12-30,106100\r
2020-01-09,106300\r
2020-01-11,105800\r
2020-01-14,109500\r
2020-01-19,104300\r
2020-01-31,115000\r
2020-02-03,97000\r
2020-02-05,107900\r
2020-02-15,104900\r
2020-02-20,109300\r
2020-03-21,113600\r
2020-03-24,111000\r
2020-03-26,107600\r
2020-04-03,110900\r
2020-04-05,111900\r
2020-04-08,113200\r
2020-04-10,114200\r
2020-04-15,118700\r
2020-05-03,79600\r
2020-05-05,114100\r
2020-05-18,113700\r
2020-05-20,109000\r
2020-05-25,120600\r
2020-05-28,116800\r
2020-05-30,115200\r
2020-06-12,108700\r
2020-06-24,112600\r
2020-07-07,122900\r
2020-07-09,115100\r
2020-07-19,113700\r
2020-07-27,104300\r
2020-08-06,78500\r
2020-08-08,85900\r
2020-08-18,62200\r
2020-08-23,63400\r
2020-09-02,61000\r
2020-09-12,64300\r
2020-09-30,61700\r
2020-10-30,101800\r
2020-11-11,101300\r
2020-11-14,101100\r
2020-11-21,100800\r
2020-11-26,99900\r
2020-11-29,95600\r
2020-12-26,104400\r
2021-01-03,114600\r
2021-01-10,114100\r
2021-01-18,112700\r
2021-02-24,115100\r
2021-02-27,114800\r
2021-03-01,113100\r
2021-03-04,113400\r
2021-03-21,110900\r
2021-03-24,106800\r
2021-03-29,114400\r
2021-03-31,114000\r
2021-04-03,115200\r
2021-04-08,115700\r
2021-04-15,117900\r
2021-04-23,110600\r
2021-05-03,110000\r
2021-05-28,103200\r
2021-06-14,117100\r
2021-07-22,111600\r
2021-08-11,104600\r
2021-08-23,88600\r
2021-08-26,86700\r
2021-08-31,76500\r
2021-09-05,69300\r
2021-09-12,68500\r
2021-09-22,62600\r
2021-09-25,65700\r
2021-09-30,62000\r
2021-10-07,60900\r
2021-10-12,61300\r
2021-10-17,60300\r
2021-10-20,59400\r
2021-10-27,61200\r
2021-11-09,66000\r
2021-11-11,65200\r
2021-11-19,64000\r
2021-12-14,89000\r
2021-12-19,86800\r
2022-01-15,89000\r
2022-01-23,92200\r
2022-01-25,93900\r
2022-02-09,93200\r
2022-03-26,94100\r
2022-04-05,97200\r
2022-05-08,103400\r
2022-05-10,106900\r
2022-05-28,102400\r
2022-06-17,90600\r
2022-06-24,105300\r
2022-07-02,100400\r
2022-07-07,95600\r
2022-07-12,94800\r
2022-07-14,87200\r
2022-07-17,79200\r
2022-07-24,72300\r
2022-08-01,69000\r
2022-08-06,62000\r
2022-08-11,63300\r
2022-08-13,59300\r
2022-08-28,63300\r
2022-09-05,54700\r
2022-09-10,53900\r
2022-09-20,54700\r
2022-09-22,54900\r
2022-10-05,48500\r
2022-10-12,52200\r
2022-10-15,57500\r
2022-11-06,54800\r
2022-11-16,51200\r
2022-12-04,57500\r
2022-12-11,57800\r
2022-12-21,21100\r
2023-01-03,49500\r
2023-02-02,94300\r
2023-02-04,96400\r
2023-02-09,92900\r
2023-02-12,94600\r
2023-02-14,98800\r
2023-02-17,96500\r
2023-02-24,89000\r
2023-03-01,105800\r
2023-03-09,95700\r
2023-04-05,102700\r
2023-04-08,100500\r
`;export{r as default};
