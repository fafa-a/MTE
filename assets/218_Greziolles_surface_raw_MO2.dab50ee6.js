const r=`date,value\r
2017-01-26,3200\r
2017-01-29,3200\r
2017-02-05,3200\r
2017-05-16,103200\r
2017-05-19,103200\r
2017-05-26,120400\r
2017-05-29,104300\r
2017-06-05,104300\r
2017-06-15,135700\r
2017-06-18,135700\r
2017-06-25,140400\r
2017-08-04,105300\r
2017-08-07,105300\r
2017-08-12,105300\r
2017-08-14,105300\r
2017-08-24,69300\r
2017-09-01,69300\r
2017-09-08,101300\r
2017-09-11,101300\r
2017-09-13,109900\r
2017-09-16,109900\r
2017-09-21,103600\r
2017-09-23,125900\r
2017-09-26,125800\r
2017-09-28,130000\r
2017-10-03,130000\r
2017-10-06,124900\r
2017-10-08,127400\r
2017-10-11,119200\r
2017-10-13,123300\r
2017-10-16,123300\r
2017-10-23,118100\r
2017-10-28,126600\r
2017-10-31,126600\r
2017-11-05,126600\r
2017-11-07,130400\r
2017-11-12,143200\r
2017-11-15,143200\r
2017-11-17,135200\r
2017-11-20,144900\r
2017-11-22,141100\r
2017-11-25,142800\r
2017-11-27,141200\r
2018-01-31,1600\r
2018-02-10,1600\r
2018-05-11,6700\r
2018-05-16,6700\r
2018-05-19,6700\r
2018-05-21,6700\r
2018-06-25,189700\r
2018-07-03,170200\r
2018-07-05,170200\r
2018-07-08,159800\r
2018-07-10,159800\r
2018-08-04,139600\r
2018-08-12,139600\r
2018-08-14,139600\r
2018-09-03,104500\r
2018-09-06,104500\r
2018-09-08,104500\r
2018-09-11,104500\r
2018-09-13,116900\r
2018-09-16,116700\r
2018-09-18,116700\r
2018-09-21,116700\r
2018-09-23,119900\r
2018-09-26,109800\r
2018-09-28,116600\r
2018-10-01,116600\r
2018-10-03,116600\r
2018-10-06,113500\r
2018-10-08,113500\r
2018-10-13,116900\r
2018-10-16,116900\r
2018-10-21,116900\r
2018-10-23,119600\r
2018-10-26,113700\r
2018-10-31,113700\r
2018-11-02,113700\r
2019-01-26,4800\r
2019-01-31,5300\r
2019-03-05,100\r
2019-03-10,100\r
2019-03-12,100\r
2019-05-31,110600\r
2019-06-03,110600\r
2019-06-08,110600\r
2019-06-10,110600\r
2019-06-13,110600\r
2019-06-15,110600\r
2019-06-25,171000\r
2019-06-28,171000\r
2019-06-30,176700\r
2019-07-03,176700\r
2019-07-05,162700\r
2019-07-10,162700\r
2019-07-13,168400\r
2019-07-15,160100\r
2019-07-18,166500\r
2019-07-20,166500\r
2019-07-23,166300\r
2019-07-25,166300\r
2019-07-28,166300\r
2019-08-09,117100\r
2019-08-12,119800\r
2019-08-14,123100\r
2019-08-17,123100\r
2019-08-22,123900\r
2019-08-24,115700\r
2019-08-29,119100\r
2019-09-03,115400\r
2019-09-06,115400\r
2019-09-08,115400\r
2019-09-11,101200\r
2019-09-13,93300\r
2019-09-16,93300\r
2019-09-18,93300\r
2019-09-26,92000\r
2019-09-28,92000\r
2019-10-01,84800\r
2019-10-03,93800\r
2019-10-08,89000\r
2019-10-11,89000\r
2019-10-13,91600\r
2020-02-05,1000\r
2020-02-08,1000\r
2020-02-10,600\r
2020-02-15,600\r
2020-02-18,600\r
2020-02-20,600\r
2020-03-11,64000\r
2020-03-14,64000\r
2020-03-21,21500\r
2020-03-24,21500\r
2020-03-26,21500\r
2020-03-29,21500\r
2020-04-03,21500\r
2020-04-05,21500\r
2020-04-15,6900\r
2020-05-20,158300\r
2020-05-25,158800\r
2020-05-28,158800\r
2020-05-30,158800\r
2020-06-02,158800\r
2020-06-24,169900\r
2020-06-27,169900\r
2020-07-04,174400\r
2020-07-07,174400\r
2020-07-09,174400\r
2020-07-14,171700\r
2020-07-17,171700\r
2020-07-19,174800\r
2020-07-22,165400\r
2020-07-24,165400\r
2020-07-27,165400\r
2020-07-29,165400\r
2020-08-01,165400\r
2020-08-03,165400\r
2020-08-08,153000\r
2020-08-21,153000\r
2020-08-23,153000\r
2020-09-17,122200\r
2020-09-20,122200\r
2020-09-27,122600\r
2020-09-30,122600\r
2020-10-12,101100\r
2020-10-15,98400\r
2020-10-17,111400\r
2020-10-27,111400\r
2020-10-30,110300\r
2020-11-01,119000\r
2020-11-09,110900\r
2020-11-11,119600\r
2020-11-14,119600\r
2020-11-16,118800\r
2020-11-19,134800\r
2020-11-21,122700\r
2020-11-24,122700\r
2020-11-26,122700\r
2020-11-29,134900\r
2021-04-15,300\r
2021-04-18,300\r
2021-04-23,300\r
2021-07-09,124200\r
2021-07-14,124200\r
2021-07-19,127700\r
2021-07-22,127000\r
2021-07-29,127000\r
2021-08-13,94300\r
2021-08-16,94300\r
2021-08-18,94300\r
2021-08-21,94300\r
2021-08-23,94300\r
2021-08-26,84300\r
2021-08-28,84300\r
2021-09-17,113600\r
2021-09-22,99200\r
2021-09-27,92300\r
2021-10-02,97800\r
2021-10-07,95800\r
2021-10-10,95800\r
2021-10-12,91500\r
2021-10-15,94100\r
2021-10-17,90200\r
2021-10-22,90400\r
2021-10-25,93900\r
2021-10-27,86900\r
2021-11-01,97200\r
2021-11-04,99200\r
2021-11-16,101200\r
2021-11-19,101200\r
2021-11-26,101200\r
2022-01-25,600\r
2022-01-28,600\r
2022-01-30,300\r
2022-02-02,600\r
2022-05-10,38400\r
2022-05-13,38400\r
2022-05-15,49200\r
2022-05-18,49200\r
2022-05-30,177500\r
2022-06-02,177500\r
2022-06-04,177500\r
2022-06-07,177500\r
2022-06-09,194100\r
2022-06-19,202300\r
2022-06-22,201400\r
2022-06-24,201400\r
2022-06-29,202000\r
2022-07-09,198700\r
2022-07-12,193300\r
2022-07-14,196300\r
2022-07-17,196300\r
2022-07-19,189000\r
2022-07-24,166100\r
2022-07-27,166500\r
2022-08-01,140400\r
2022-08-03,140400\r
2022-09-22,94300\r
2022-09-25,94300\r
2022-09-30,94300\r
2022-10-02,114900\r
2022-10-05,114900\r
2022-10-07,114900\r
2022-10-12,114900\r
2022-11-01,107400\r
2022-11-06,117200\r
2022-11-11,117200\r
2022-11-16,119400\r
2022-11-19,114100\r
2022-11-26,114200\r
2023-06-24,196300\r
2023-07-09,197900\r
2023-07-14,203900\r
2023-07-17,203900\r
2023-07-19,203900\r
2023-07-24,202300\r
2023-08-08,188800\r
2023-08-11,186200\r
2023-08-13,186200\r
2023-08-16,186200\r
2023-08-18,186200\r
2023-08-21,128100\r
2023-08-23,146500\r
2023-08-28,146500\r
2023-08-31,135500\r
2023-09-17,125600\r
2023-09-27,117500\r
2023-09-30,117500\r
2023-10-02,118500\r
2023-10-05,118500\r
2023-10-07,113300\r
2023-10-10,115200\r
2023-10-12,111000\r
2023-10-15,113900\r
`;export{r as default};
