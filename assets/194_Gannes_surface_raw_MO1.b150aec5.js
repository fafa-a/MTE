const n=`date,value\r
2017-02-15,91100\r
2017-02-25,84800\r
2017-03-17,100500\r
2017-03-27,101100\r
2017-04-03,110000\r
2017-04-23,115800\r
2017-05-16,135000\r
2017-05-26,102900\r
2017-06-22,107000\r
2017-06-25,101100\r
2017-07-05,114500\r
2017-07-07,97100\r
2017-07-17,110000\r
2017-08-14,104100\r
2017-08-21,106500\r
2017-08-24,104200\r
2017-08-29,105300\r
2017-10-05,97500\r
2017-10-13,97300\r
2017-10-15,101500\r
2017-10-18,95300\r
2017-11-17,87600\r
2017-11-22,79000\r
2018-02-10,46000\r
2018-02-25,110800\r
2018-02-27,103900\r
2018-03-14,101500\r
2018-04-18,113300\r
2018-04-21,111600\r
2018-05-06,101800\r
2018-05-08,109900\r
2018-05-11,109600\r
2018-05-26,103900\r
2018-06-20,111900\r
2018-06-22,111700\r
2018-06-27,109200\r
2018-07-12,106300\r
2018-07-27,108600\r
2018-07-30,115100\r
2018-08-06,109100\r
2018-08-19,103800\r
2018-09-08,98100\r
2018-09-10,102800\r
2018-09-18,109400\r
2018-09-20,111500\r
2018-09-25,107300\r
2018-09-28,99900\r
2018-09-30,109700\r
2018-10-05,100000\r
2018-10-13,100000\r
2018-10-18,99200\r
2018-10-20,104700\r
2018-10-30,88300\r
2018-11-14,87600\r
2018-11-22,91700\r
2018-11-24,91200\r
2019-02-05,93200\r
2019-02-15,77200\r
2019-02-17,86800\r
2019-02-20,94300\r
2019-02-22,87300\r
2019-02-25,79900\r
2019-02-27,90500\r
2019-03-22,91900\r
2019-03-29,90900\r
2019-04-18,97800\r
2019-05-01,99300\r
2019-05-13,89000\r
2019-05-23,97900\r
2019-05-28,93500\r
2019-05-31,93300\r
2019-06-02,88700\r
2019-06-27,86300\r
2019-06-30,100300\r
2019-07-02,86300\r
2019-07-05,96500\r
2019-07-10,96200\r
2019-07-15,111500\r
2019-07-17,94900\r
2019-07-22,93900\r
2019-07-25,100600\r
2019-08-04,96700\r
2019-08-14,91400\r
2019-08-24,88500\r
2019-08-26,92600\r
2019-09-03,90400\r
2019-09-10,90000\r
2019-09-13,85000\r
2019-09-15,88900\r
2019-09-18,84400\r
2019-09-20,84500\r
2019-10-13,65800\r
2019-11-09,72400\r
2019-11-22,68900\r
2019-11-24,76700\r
2020-02-15,98200\r
2020-02-20,94700\r
2020-02-22,99600\r
2020-03-13,113100\r
2020-03-18,104400\r
2020-03-23,108100\r
2020-03-26,111300\r
2020-03-28,117700\r
2020-03-31,113300\r
2020-04-02,111500\r
2020-04-05,103900\r
2020-04-10,98900\r
2020-04-15,113700\r
2020-05-17,105600\r
2020-05-20,114600\r
2020-05-25,110400\r
2020-05-27,107100\r
2020-05-30,121200\r
2020-06-01,115500\r
2020-06-26,106100\r
2020-07-04,114500\r
2020-07-09,114800\r
2020-07-19,122700\r
2020-07-24,125700\r
2020-07-29,117200\r
2020-07-31,116200\r
2020-08-08,112600\r
2020-08-10,115200\r
2020-08-15,108200\r
2020-08-20,115600\r
2020-08-25,106800\r
2020-09-04,112400\r
2020-09-09,112800\r
2020-09-12,100400\r
2020-09-14,108300\r
2020-09-17,105300\r
2020-11-11,93400\r
2020-11-18,97800\r
2020-11-21,96400\r
2021-02-14,100800\r
2021-02-21,97000\r
2021-02-24,108000\r
2021-03-01,98400\r
2021-03-28,113000\r
2021-03-31,111000\r
2021-04-02,108100\r
2021-05-27,93400\r
2021-05-30,114800\r
2021-06-01,104500\r
2021-06-14,117100\r
2021-06-16,109000\r
2021-06-26,97700\r
2021-07-04,104000\r
2021-07-11,96900\r
2021-07-19,107500\r
2021-07-21,105600\r
2021-09-07,111600\r
2021-09-22,100400\r
2021-09-24,109000\r
2021-10-02,111000\r
2021-10-14,101300\r
2021-10-17,100100\r
2021-10-19,98000\r
2021-10-22,93200\r
2021-10-24,98500\r
2021-10-27,91800\r
2022-01-25,98200\r
2022-02-09,98500\r
2022-02-26,96000\r
2022-03-06,99000\r
2022-03-08,104300\r
2022-03-26,101400\r
2022-04-15,105400\r
2022-04-17,112800\r
2022-05-15,113200\r
2022-05-17,107400\r
2022-06-11,107500\r
2022-06-16,103300\r
2022-06-29,111500\r
2022-07-06,101100\r
2022-07-11,112500\r
2022-07-14,114200\r
2022-07-16,115600\r
2022-07-19,109800\r
2022-07-21,100200\r
2022-07-24,116000\r
2022-08-03,117200\r
2022-08-08,114200\r
2022-08-10,115500\r
2022-08-13,110500\r
2022-08-25,108500\r
2022-09-12,117000\r
2022-09-19,104100\r
2022-09-22,107100\r
2022-10-04,103200\r
2022-10-09,107600\r
2022-10-22,101800\r
2022-11-11,91100\r
2022-11-13,108500\r
2023-02-09,96000\r
2023-02-11,96500\r
2023-02-14,88600\r
2023-04-05,98200\r
2023-04-20,104400\r
`;export{n as default};
