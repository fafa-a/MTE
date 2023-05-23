const r=`date,value\r
2017-02-15,122300\r
2017-02-18,122800\r
2017-02-25,117800\r
2017-03-10,124500\r
2017-03-17,131800\r
2017-03-27,130300\r
2017-03-30,131300\r
2017-04-06,131300\r
2017-04-09,128100\r
2017-04-19,122000\r
2017-04-29,125800\r
2017-05-06,125300\r
2017-05-09,136700\r
2017-05-16,137400\r
2017-05-19,137400\r
2017-05-26,135000\r
2017-06-05,130900\r
2017-06-18,137300\r
2017-06-25,137300\r
2017-06-28,131400\r
2017-07-05,130100\r
2017-07-18,131100\r
2017-08-02,117200\r
2017-08-04,130400\r
2017-08-07,122200\r
2017-08-12,122200\r
2017-08-14,121300\r
2017-08-17,116300\r
2017-08-22,115000\r
2017-08-24,117600\r
2017-08-27,114100\r
2017-08-29,113500\r
2017-09-01,109400\r
2017-09-03,116400\r
2017-09-06,110900\r
2017-09-08,112400\r
2017-10-08,110100\r
2017-10-11,112400\r
2017-10-13,111200\r
2017-10-16,113900\r
2017-10-18,111000\r
2017-10-23,113500\r
2017-10-26,111900\r
2017-10-28,110900\r
2017-10-31,111200\r
2017-11-05,111200\r
2017-11-07,114300\r
2017-11-17,115200\r
2017-11-20,115200\r
2017-11-22,117500\r
2017-11-25,117500\r
2017-11-27,115100\r
2017-11-30,118300\r
2017-12-05,112800\r
2017-12-07,112800\r
2017-12-25,121100\r
2017-12-27,121100\r
2018-01-09,122600\r
2018-01-11,122600\r
2018-01-19,122600\r
2018-01-24,126600\r
2018-01-29,126600\r
2018-01-31,126600\r
2018-02-10,122500\r
2018-02-15,122500\r
2018-02-25,123300\r
2018-03-02,123300\r
2018-03-07,132800\r
2018-03-15,131400\r
2018-03-17,131400\r
2018-03-22,136000\r
2018-03-30,135400\r
2018-04-19,121400\r
2018-04-21,135000\r
2018-04-24,135000\r
2018-04-26,135000\r
2018-05-06,119100\r
2018-05-11,137900\r
2018-05-21,137900\r
2018-05-24,121000\r
2018-06-20,132300\r
2018-06-23,136900\r
2018-06-25,133300\r
2018-07-08,136200\r
2018-07-10,131300\r
2018-07-13,129600\r
2018-07-15,133500\r
2018-07-18,128300\r
2018-07-23,126200\r
2018-07-25,125500\r
2018-07-30,124600\r
2018-08-02,124900\r
2018-08-04,122700\r
2018-08-12,114500\r
2018-08-19,115000\r
2018-08-22,108500\r
2018-08-27,107800\r
2018-09-01,100000\r
2018-09-03,96100\r
2018-09-08,100700\r
2018-09-11,102900\r
2018-09-16,101100\r
2018-09-18,101100\r
2018-09-23,96200\r
2018-09-26,102700\r
2018-09-28,109400\r
2018-10-03,104800\r
2018-10-06,105300\r
2018-10-13,107500\r
2018-10-16,104400\r
2018-10-23,104400\r
2018-11-15,107800\r
2018-11-17,114400\r
2018-11-22,107100\r
2018-11-27,107900\r
2018-12-07,108600\r
2019-01-09,111100\r
2019-01-11,111100\r
2019-01-16,122000\r
2019-01-19,118200\r
2019-01-24,118200\r
2019-01-26,129500\r
2019-02-03,133700\r
2019-02-13,132800\r
2019-02-15,124200\r
2019-02-18,124200\r
2019-02-20,117700\r
2019-02-23,118100\r
2019-02-25,117000\r
2019-02-28,117000\r
2019-03-12,121900\r
2019-03-20,112800\r
2019-03-22,122600\r
2019-03-25,121200\r
2019-03-27,125200\r
2019-03-30,123300\r
2019-04-01,123300\r
2019-04-09,127400\r
2019-05-01,121200\r
2019-05-06,121200\r
2019-05-09,121200\r
2019-05-11,129300\r
2019-05-14,127500\r
2019-05-16,127500\r
2019-05-29,127400\r
2019-05-31,119700\r
2019-06-08,119700\r
2019-06-13,119700\r
2019-06-18,137300\r
2019-06-23,137300\r
2019-06-25,137700\r
2019-06-28,137700\r
2019-07-05,130500\r
2019-07-08,126100\r
2019-07-10,129900\r
2019-07-13,129300\r
2019-07-15,131000\r
2019-07-20,131000\r
2019-07-23,131000\r
2019-07-25,128900\r
2019-07-28,126200\r
2019-08-02,124600\r
2019-08-04,126500\r
2019-08-09,124300\r
2019-08-14,124600\r
2019-08-17,126300\r
2019-08-22,122600\r
2019-08-24,124700\r
2019-08-29,124700\r
2019-09-03,122300\r
2019-09-06,122300\r
2019-09-08,128400\r
2019-09-11,122400\r
2019-09-13,123200\r
2019-09-16,121000\r
2019-09-18,121400\r
2019-09-21,118600\r
2019-09-26,118600\r
2019-10-08,115200\r
2019-10-11,117300\r
2019-10-13,116000\r
2019-10-26,123100\r
2019-12-05,125300\r
2019-12-07,125300\r
2019-12-10,125300\r
2019-12-15,114500\r
2019-12-17,116200\r
2019-12-20,116200\r
2019-12-25,111000\r
2019-12-27,111200\r
2019-12-30,114900\r
2020-01-06,126800\r
2020-01-09,126900\r
2020-01-11,123100\r
2020-01-14,124400\r
2020-01-16,121400\r
2020-01-19,121300\r
2020-01-29,115300\r
2020-01-31,116800\r
2020-02-03,121100\r
2020-02-05,124400\r
2020-02-10,124400\r
2020-02-15,122700\r
2020-02-18,121300\r
2020-02-20,122100\r
2020-02-23,123000\r
2020-03-21,122800\r
2020-03-24,123700\r
2020-03-26,122000\r
2020-03-31,126500\r
2020-04-03,122600\r
2020-04-05,125400\r
2020-04-08,127200\r
2020-04-10,126400\r
2020-04-15,128500\r
2020-04-25,128900\r
2020-04-30,128600\r
2020-05-08,129400\r
2020-05-18,130400\r
2020-05-20,131000\r
2020-05-25,130200\r
2020-05-28,132200\r
2020-05-30,130100\r
2020-06-12,133900\r
2020-06-14,124900\r
2020-06-19,105100\r
2020-06-24,128600\r
2020-07-04,128600\r
2020-07-07,123400\r
2020-07-09,132400\r
2020-07-19,131300\r
2020-07-22,131300\r
2020-07-24,121100\r
2020-07-27,117500\r
2020-07-29,117500\r
2020-08-03,117500\r
2020-08-06,115700\r
2020-08-08,118100\r
2020-08-18,117200\r
2020-08-21,117200\r
2020-08-23,113600\r
2020-09-02,105700\r
2020-09-05,112700\r
2020-09-07,110800\r
2020-09-10,113300\r
2020-09-12,111100\r
2020-09-17,111100\r
2020-09-30,111600\r
2020-10-12,111600\r
2020-10-17,121600\r
2020-10-30,127300\r
2020-11-09,124300\r
2020-11-11,125000\r
2020-11-14,120400\r
2020-11-21,118900\r
2020-11-26,119900\r
2020-11-29,119300\r
2020-12-26,110400\r
2021-01-03,125800\r
2021-01-08,125800\r
2021-01-10,127000\r
2021-01-15,120000\r
2021-01-18,126300\r
2021-02-17,132400\r
2021-02-19,133900\r
2021-02-24,132400\r
2021-02-27,132400\r
2021-03-01,122200\r
2021-03-04,123300\r
2021-03-09,124000\r
2021-03-14,122400\r
2021-03-21,123900\r
2021-03-24,124400\r
2021-03-29,122400\r
2021-03-31,128400\r
2021-04-03,125400\r
2021-04-05,123200\r
2021-04-08,123200\r
2021-04-15,128200\r
2021-04-20,127100\r
2021-04-23,128700\r
2021-05-03,125500\r
2021-05-08,123700\r
2021-06-09,120400\r
2021-06-14,127000\r
2021-06-22,126800\r
2021-07-17,124000\r
2021-07-19,124000\r
2021-07-22,125700\r
2021-08-11,127800\r
2021-08-26,120100\r
2021-08-28,120100\r
2021-08-31,121700\r
2021-09-05,119500\r
2021-09-12,122100\r
2021-09-17,121800\r
2021-09-22,121800\r
2021-09-25,113900\r
2021-09-27,113900\r
2021-09-30,114200\r
2021-10-12,118400\r
2021-10-15,123100\r
2021-10-17,118400\r
2021-10-20,118400\r
2021-10-27,118500\r
2021-11-19,116100\r
2021-12-14,120500\r
2021-12-16,128500\r
2021-12-19,114700\r
2021-12-21,119800\r
2022-01-15,111200\r
2022-01-23,122500\r
2022-01-25,114500\r
2022-02-09,118800\r
2022-02-27,123400\r
2022-03-01,123400\r
2022-03-09,123400\r
2022-03-19,118500\r
2022-03-21,121000\r
2022-03-24,117300\r
2022-03-26,120200\r
2022-04-05,125800\r
2022-04-10,119900\r
2022-05-08,121300\r
2022-05-10,125600\r
2022-05-15,125600\r
2022-05-28,121800\r
2022-05-30,128000\r
2022-06-09,127800\r
2022-06-17,120900\r
2022-06-19,120900\r
2022-06-22,120900\r
2022-06-24,120900\r
2022-07-02,127600\r
2022-07-04,127600\r
2022-07-07,128300\r
2022-07-12,130100\r
2022-07-14,130500\r
2022-07-17,128900\r
2022-07-24,127600\r
2022-07-27,122300\r
2022-08-01,117700\r
2022-08-03,117700\r
2022-08-06,114600\r
2022-08-08,114300\r
2022-08-11,115000\r
2022-08-13,112600\r
2022-08-18,107000\r
2022-09-05,93500\r
2022-09-10,93500\r
2022-09-12,93500\r
2022-09-15,96300\r
2022-09-20,96600\r
2022-09-22,95400\r
2022-10-02,97200\r
2022-10-05,94500\r
2022-10-07,94500\r
2022-10-12,100900\r
2022-10-15,99900\r
2022-10-17,104200\r
2022-10-22,104200\r
2022-10-30,110600\r
2022-11-01,110600\r
2022-11-06,117200\r
2022-11-11,106400\r
2022-11-16,114100\r
2022-12-21,116500\r
2022-12-24,116500\r
2023-01-03,119800\r
2023-01-10,119800\r
2023-01-18,122400\r
2023-01-20,122400\r
2023-02-02,117500\r
2023-02-04,124000\r
2023-02-09,120300\r
2023-02-12,122100\r
2023-02-14,120500\r
2023-02-17,121300\r
2023-02-19,130400\r
2023-02-24,124200\r
2023-03-01,129500\r
2023-03-09,132700\r
2023-03-16,120200\r
2023-04-05,123700\r
2023-04-08,125800\r
2023-04-10,125800\r
`;export{r as default};
