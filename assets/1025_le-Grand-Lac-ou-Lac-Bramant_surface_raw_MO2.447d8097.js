const r=`date,value\r
2017-07-04,106900\r
2017-07-07,106900\r
2017-07-12,106900\r
2017-08-18,124500\r
2017-08-21,124500\r
2017-08-23,124500\r
2017-08-26,124500\r
2017-10-07,54100\r
2017-10-10,54100\r
2017-10-12,120100\r
2017-10-15,120100\r
2017-10-17,114700\r
2017-10-22,125000\r
2017-10-25,118600\r
2017-10-27,118600\r
2018-05-05,72900\r
2018-07-24,70100\r
2018-07-27,70100\r
2018-07-29,70100\r
2018-08-01,70100\r
2018-08-03,70100\r
2018-08-28,123900\r
2018-09-02,123900\r
2018-09-05,123900\r
2018-09-07,123900\r
2018-09-22,130100\r
2018-09-25,118300\r
2018-09-27,129800\r
2018-09-30,129800\r
2018-10-02,129800\r
2018-10-05,117500\r
2018-10-12,62100\r
2018-10-15,62100\r
2018-10-17,62100\r
2018-10-20,62100\r
2018-10-22,121300\r
2018-10-25,120500\r
2018-11-01,125600\r
2018-11-04,123200\r
2018-11-09,123200\r
2018-11-11,123200\r
2018-11-16,123100\r
2019-06-19,700\r
2019-06-24,700\r
2019-06-27,700\r
2019-06-29,86000\r
2019-07-02,86000\r
2019-07-04,86000\r
2019-07-07,85600\r
2019-07-09,85600\r
2019-07-12,85600\r
2019-07-14,85600\r
2019-07-24,125100\r
2019-07-29,130100\r
2019-08-01,130100\r
2019-08-03,126200\r
2019-08-06,126200\r
2019-08-08,127000\r
2019-08-11,128000\r
2019-08-16,127100\r
2019-08-18,128600\r
2019-09-12,120200\r
2019-09-15,120200\r
2019-09-17,120200\r
2019-09-20,120200\r
2019-09-22,120200\r
2019-09-27,120800\r
2020-02-14,100\r
2020-02-22,100\r
2020-04-27,100\r
2020-04-29,100\r
2020-05-04,100\r
2020-05-07,100\r
2020-05-24,300\r
2020-05-27,300\r
2020-05-29,300\r
2020-06-01,300\r
2020-06-03,300\r
2020-07-08,128700\r
2020-07-13,128700\r
2020-07-18,128700\r
2020-07-21,128700\r
2020-07-23,128700\r
2020-08-07,124000\r
2020-08-10,124000\r
2020-08-12,123600\r
2020-08-15,120500\r
2020-08-20,120500\r
2020-08-22,126600\r
2020-08-25,123200\r
2020-08-27,129100\r
2020-09-01,124700\r
2020-09-04,124700\r
2020-09-06,124700\r
2020-09-09,77200\r
2020-09-11,77200\r
2020-09-16,117500\r
2020-09-19,116800\r
2020-10-31,48600\r
2020-11-05,115700\r
2020-11-10,95900\r
2020-11-15,95900\r
2020-11-18,114800\r
2020-11-20,114800\r
2020-11-23,93200\r
2020-11-25,125100\r
2021-06-18,4200\r
2021-06-21,4200\r
2021-06-26,4200\r
2021-07-23,128300\r
2021-08-02,128300\r
2021-08-17,124700\r
2021-08-20,124700\r
2021-08-27,124200\r
2021-08-30,121800\r
2021-09-01,121800\r
2021-09-06,121800\r
2021-10-01,124900\r
2021-10-09,124900\r
2021-10-11,127300\r
2021-10-14,125700\r
2021-10-16,128000\r
2021-10-21,125800\r
2021-10-24,128400\r
2021-10-26,128400\r
2021-10-29,125800\r
2021-11-05,115200\r
2021-11-15,115200\r
2022-06-18,129700\r
2022-06-21,129700\r
2022-06-23,129700\r
2022-06-26,129700\r
2022-06-28,129700\r
2022-07-03,126900\r
2022-07-06,126900\r
2022-07-08,129300\r
2022-07-11,129300\r
2022-07-13,129300\r
2022-07-16,128000\r
2022-07-18,128300\r
2022-07-21,127500\r
2022-07-28,129300\r
2022-07-31,128400\r
2022-08-02,128400\r
2022-08-05,128400\r
2022-08-07,128400\r
2022-08-10,118500\r
2022-08-12,121000\r
2022-08-22,119200\r
2022-09-01,119800\r
2022-09-04,119800\r
2022-09-06,119800\r
2022-09-09,119800\r
2022-09-11,123800\r
2022-09-19,122400\r
2022-09-21,122700\r
2022-10-26,126000\r
2022-10-31,121700\r
2022-11-05,121700\r
2022-11-10,113700\r
2022-11-20,121400\r
2023-06-08,100\r
2023-06-11,100\r
2023-06-16,100\r
2023-06-28,88000\r
2023-07-08,129800\r
2023-07-11,129800\r
2023-07-16,129800\r
2023-07-18,129800\r
2023-07-23,131000\r
2023-07-26,131000\r
2023-07-31,131000\r
2023-08-02,131000\r
2023-08-07,107900\r
2023-08-12,107900\r
2023-08-15,107900\r
2023-08-17,131700\r
2023-08-22,131700\r
2023-08-25,131700\r
`;export{r as default};
