const n=`date,value\r
2017-02-25,121200\r
2017-03-14,127400\r
2017-03-17,132800\r
2017-03-27,127000\r
2017-04-23,120700\r
2017-05-16,109700\r
2017-05-26,126800\r
2017-06-25,118300\r
2017-07-05,118700\r
2017-07-07,106300\r
2017-07-17,110900\r
2017-08-06,115500\r
2017-08-14,114600\r
2017-08-21,107700\r
2017-08-24,109100\r
2017-08-26,97000\r
2017-08-29,95300\r
2017-09-20,95200\r
2017-09-23,105100\r
2017-10-05,98300\r
2017-10-10,100900\r
2017-10-13,98300\r
2017-10-15,98000\r
2017-10-18,83800\r
2017-10-25,88600\r
2017-10-28,82800\r
2017-10-30,79600\r
2017-11-14,88200\r
2017-11-17,88700\r
2017-11-22,83500\r
2018-02-02,112900\r
2018-02-10,122900\r
2018-03-14,114500\r
2018-04-18,133100\r
2018-04-21,124800\r
2018-04-23,113700\r
2018-04-26,108300\r
2018-05-11,114900\r
2018-06-20,115700\r
2018-06-22,103200\r
2018-06-25,110300\r
2018-07-02,103100\r
2018-07-07,108600\r
2018-07-12,106600\r
2018-07-15,116500\r
2018-07-25,114800\r
2018-07-27,117400\r
2018-07-30,111600\r
2018-08-01,94700\r
2018-08-04,113100\r
2018-08-06,113700\r
2018-08-11,103800\r
2018-08-19,101700\r
2018-08-21,105800\r
2018-09-08,105300\r
2018-09-10,101900\r
2018-09-20,103900\r
2018-09-23,94500\r
2018-09-25,100100\r
2018-09-28,95500\r
2018-10-03,90300\r
2018-10-05,98500\r
2018-10-23,75500\r
2018-10-30,81400\r
2018-11-29,85100\r
2018-12-19,98800\r
2019-01-03,98000\r
2019-01-16,95400\r
2019-02-12,113500\r
2019-02-15,95900\r
2019-02-17,106700\r
2019-02-20,115900\r
2019-02-22,104200\r
2019-02-25,120500\r
2019-02-27,107000\r
2019-03-22,106400\r
2019-03-24,104300\r
2019-03-27,101500\r
2019-03-29,105200\r
2019-04-01,98400\r
2019-04-13,102600\r
2019-05-01,109500\r
2019-05-06,120800\r
2019-05-13,99800\r
2019-05-23,104400\r
2019-05-31,114400\r
2019-06-02,112900\r
2019-06-17,107900\r
2019-06-27,100000\r
2019-06-30,130100\r
2019-07-05,111000\r
2019-07-12,115100\r
2019-07-15,109700\r
2019-07-25,113800\r
2019-08-04,102000\r
2019-08-09,115700\r
2019-08-14,117300\r
2019-08-16,107600\r
2019-08-24,99800\r
2019-08-26,108900\r
2019-09-03,92100\r
2019-09-13,101000\r
2019-09-15,96200\r
2019-09-18,104500\r
2019-09-20,105800\r
2019-10-08,86500\r
2019-10-13,100300\r
2019-12-29,106700\r
2020-01-06,94400\r
2020-01-16,100700\r
2020-01-18,110300\r
2020-02-05,94800\r
2020-02-20,80200\r
2020-02-22,89800\r
2020-03-13,121100\r
2020-03-18,113200\r
2020-03-21,103100\r
2020-03-28,129200\r
2020-04-05,115900\r
2020-04-10,131000\r
2020-05-07,100400\r
2020-05-20,125400\r
2020-05-22,101300\r
2020-05-25,118100\r
2020-05-27,106200\r
2020-06-19,94500\r
2020-06-21,98400\r
2020-06-24,111900\r
2020-06-26,107400\r
2020-07-04,107700\r
2020-07-09,120000\r
2020-07-19,107300\r
2020-07-21,92700\r
2020-07-24,111600\r
2020-07-29,125300\r
2020-07-31,93700\r
2020-08-05,99900\r
2020-08-08,117700\r
2020-08-15,103800\r
2020-08-20,100100\r
2020-08-25,92200\r
2020-09-02,92400\r
2020-09-04,84300\r
2020-09-14,92800\r
2020-09-17,92000\r
2020-11-08,74700\r
2020-11-11,76000\r
2020-11-18,82600\r
2020-11-23,84800\r
2020-12-18,111900\r
2021-01-17,112100\r
2021-02-14,123800\r
2021-02-24,117300\r
2021-03-01,113200\r
2021-03-23,106700\r
2021-03-28,118400\r
2021-03-31,125600\r
2021-04-02,121000\r
2021-04-05,117500\r
2021-04-15,135000\r
2021-05-27,124800\r
2021-06-11,114400\r
2021-06-14,118900\r
2021-06-16,109600\r
2021-06-26,112300\r
2021-07-01,122200\r
2021-07-19,107100\r
2021-07-29,115500\r
2021-08-10,113300\r
2021-08-20,115100\r
2021-08-28,106700\r
2021-08-30,111200\r
2021-09-22,112400\r
2021-09-24,115200\r
2021-10-12,99900\r
2021-10-14,94300\r
2021-10-17,97200\r
2021-10-24,91300\r
2021-10-27,84600\r
2021-12-16,104900\r
2021-12-18,110800\r
2021-12-23,101600\r
2022-01-05,107700\r
2022-01-15,107700\r
2022-01-22,107400\r
2022-01-25,103000\r
2022-01-27,107600\r
2022-02-09,112400\r
2022-02-26,113100\r
2022-03-23,106100\r
2022-03-26,108700\r
2022-04-05,127000\r
2022-04-10,121000\r
2022-04-15,129000\r
2022-04-17,110500\r
2022-05-15,110800\r
2022-05-17,113100\r
2022-06-01,112800\r
2022-06-16,91800\r
2022-06-19,109000\r
2022-06-29,109400\r
2022-07-06,116200\r
2022-07-11,115100\r
2022-07-14,118800\r
2022-07-16,114100\r
2022-07-19,121600\r
2022-07-21,114800\r
2022-07-24,111200\r
2022-07-26,110000\r
2022-07-29,122200\r
2022-07-31,110800\r
2022-08-03,112700\r
2022-08-10,107300\r
2022-08-13,106700\r
2022-08-28,107200\r
2022-09-04,109200\r
2022-09-12,105500\r
2022-09-19,99200\r
2022-09-22,106500\r
2022-10-04,92100\r
2022-10-09,89300\r
2022-10-22,87400\r
2022-10-24,81500\r
2022-11-11,69900\r
2022-11-16,74500\r
2023-01-20,53300\r
2023-02-06,111000\r
2023-02-11,112900\r
2023-02-14,118500\r
2023-02-16,115700\r
2023-02-19,113100\r
2023-02-26,109300\r
2023-03-16,127600\r
2023-03-28,126000\r
2023-04-05,137300\r
2023-04-07,122600\r
2023-04-20,118000\r
2023-05-02,115900\r
2023-05-27,109300\r
2023-05-30,103200\r
2023-06-24,123700\r
2023-06-29,135400\r
2023-07-14,134500\r
2023-07-31,112100\r
2023-08-08,120700\r
2023-08-18,108300\r
2023-08-20,111200\r
2023-08-23,104500\r
`;export{n as default};
