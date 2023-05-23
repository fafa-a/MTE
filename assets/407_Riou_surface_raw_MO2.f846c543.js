const r=`date,value\r
2017-02-19,109000\r
2017-02-22,109000\r
2017-03-01,111000\r
2017-03-04,94500\r
2017-03-11,115600\r
2017-03-14,115100\r
2017-03-21,119600\r
2017-04-10,118100\r
2017-04-20,125600\r
2017-04-23,125600\r
2017-04-30,125600\r
2017-06-19,119700\r
2017-06-22,119700\r
2017-07-04,124900\r
2017-07-07,124900\r
2017-07-12,124900\r
2017-07-14,126600\r
2017-07-17,125600\r
2017-07-19,125600\r
2017-07-22,125600\r
2017-07-24,127400\r
2017-07-27,124600\r
2017-07-29,126400\r
2017-08-03,126400\r
2017-08-06,122800\r
2017-08-18,120900\r
2017-08-21,120900\r
2017-08-23,125400\r
2017-08-26,125400\r
2017-09-02,117500\r
2017-09-07,118900\r
2017-09-10,118900\r
2017-09-12,119500\r
2017-09-17,119500\r
2017-09-22,122700\r
2017-09-25,122300\r
2017-09-27,125500\r
2017-10-02,125500\r
2017-10-05,123500\r
2017-10-07,123700\r
2017-10-10,113300\r
2017-10-12,116200\r
2017-10-15,116200\r
2017-10-17,110900\r
2017-10-22,114100\r
2017-10-25,107300\r
2017-10-27,108800\r
2017-10-30,105600\r
2017-11-01,105800\r
2017-11-06,105800\r
2017-11-11,108200\r
2017-11-14,107700\r
2017-11-16,110000\r
2017-11-19,110000\r
2017-11-21,107300\r
2017-11-26,105900\r
2017-11-29,107600\r
2017-12-01,107600\r
2017-12-06,108700\r
2017-12-09,107000\r
2017-12-14,107000\r
2017-12-16,107000\r
2017-12-21,98900\r
2017-12-24,98900\r
2017-12-26,98900\r
2018-01-30,107900\r
2018-02-02,107900\r
2018-02-04,114800\r
2018-02-07,114800\r
2018-02-09,108800\r
2018-02-14,115100\r
2018-02-19,101200\r
2018-02-24,115800\r
2018-02-27,115800\r
2018-03-04,115800\r
2018-03-16,115900\r
2018-03-19,115900\r
2018-03-21,115900\r
2018-03-24,115900\r
2018-03-26,122800\r
2018-03-31,125500\r
2018-04-05,124300\r
2018-04-10,123200\r
2018-04-15,126600\r
2018-04-18,126600\r
2018-04-20,128000\r
2018-04-23,128000\r
2018-04-25,36000\r
2018-04-28,37600\r
2018-05-05,28100\r
2018-05-25,126600\r
2018-05-28,126600\r
2018-06-09,125900\r
2018-06-14,129000\r
2018-06-19,125100\r
2018-06-22,128200\r
2018-06-27,122900\r
2018-06-29,122900\r
2018-07-04,123700\r
2018-07-07,123700\r
2018-07-09,127100\r
2018-07-12,127100\r
2018-07-14,126600\r
2018-07-17,124300\r
2018-07-19,124300\r
2018-07-22,121600\r
2018-07-24,125200\r
2018-07-27,125300\r
2018-07-29,121500\r
2018-08-01,125800\r
2018-08-03,122400\r
2018-08-06,124800\r
2018-08-08,124800\r
2018-08-11,122400\r
2018-08-18,127800\r
2018-08-21,127800\r
2018-08-23,129000\r
2018-08-26,129000\r
2018-08-28,124500\r
2018-08-31,125700\r
2018-09-02,121600\r
2018-09-05,124300\r
2018-09-07,120800\r
2018-09-10,126800\r
2018-09-12,120700\r
2018-09-17,127400\r
2018-09-20,120900\r
2018-09-22,123200\r
2018-09-25,120800\r
2018-09-27,127300\r
2018-10-02,120600\r
2018-10-05,126300\r
2018-10-12,121200\r
2018-10-22,117500\r
2018-10-25,117500\r
2018-10-30,117500\r
2018-11-01,117500\r
2018-11-16,118200\r
2018-11-24,118200\r
2018-11-26,118200\r
2018-12-11,109500\r
2018-12-14,109500\r
2018-12-21,109500\r
2019-01-10,93100\r
2019-01-13,93100\r
2019-01-15,105400\r
2019-01-20,105400\r
2019-01-23,105400\r
2019-01-25,104400\r
2019-01-28,107900\r
2019-01-30,106200\r
2019-02-04,105300\r
2019-02-09,105300\r
2019-02-12,108800\r
2019-02-14,100200\r
2019-02-17,101000\r
2019-02-19,101000\r
2019-02-22,3000\r
2019-02-27,3000\r
2019-03-01,112900\r
2019-03-11,114500\r
2019-03-16,113600\r
2019-03-19,116300\r
2019-03-21,112800\r
2019-03-24,112800\r
2019-03-26,114700\r
2019-03-29,112200\r
2019-03-31,115200\r
2019-04-05,112700\r
2019-04-13,116200\r
2019-04-15,115400\r
2019-04-18,118200\r
2019-04-20,115400\r
2019-04-30,120100\r
2019-05-05,125800\r
2019-05-10,127900\r
2019-05-13,127900\r
2019-05-15,126900\r
2019-05-23,128400\r
2019-05-30,128200\r
2019-06-02,125000\r
2019-06-04,128000\r
2019-06-07,128000\r
2019-06-12,128000\r
2019-06-19,122600\r
2019-06-24,123000\r
2019-06-27,123000\r
2019-06-29,121100\r
2019-07-02,121100\r
2019-07-04,121200\r
2019-07-07,117300\r
2019-07-12,123900\r
2019-07-14,115900\r
2019-07-17,116500\r
2019-07-19,115700\r
2019-07-22,118200\r
2019-07-24,117300\r
2019-07-29,118200\r
2019-08-01,117600\r
2019-08-03,120700\r
2019-08-06,119800\r
2019-08-08,120800\r
2019-08-11,116200\r
2019-08-16,121700\r
2019-08-18,115500\r
2019-08-21,116700\r
2019-08-23,115500\r
2019-08-26,118800\r
2019-08-31,118800\r
2019-09-02,115000\r
2019-09-05,116300\r
2019-09-07,113900\r
2019-09-12,114300\r
2019-09-15,114300\r
2019-09-17,116300\r
2019-09-20,115200\r
2019-09-25,119100\r
2019-09-27,113900\r
2019-09-30,117100\r
2019-10-02,117100\r
2019-10-05,82800\r
2019-10-07,109900\r
2019-10-10,109900\r
2019-10-17,109200\r
2019-10-20,109200\r
2019-12-21,105800\r
2019-12-26,105800\r
2019-12-29,105800\r
2020-01-05,4400\r
2020-01-08,4400\r
2020-01-10,4400\r
2020-01-13,4400\r
2020-01-15,4400\r
2020-01-18,4400\r
2020-01-20,4400\r
2020-01-25,109500\r
2020-01-30,109500\r
2020-02-04,110900\r
2020-02-07,110900\r
2020-02-09,109000\r
2020-02-12,109600\r
2020-02-14,107400\r
2020-02-19,107400\r
2020-02-22,107900\r
2020-02-24,106900\r
2020-03-03,107900\r
2020-03-08,107900\r
2020-03-10,107900\r
2020-03-15,111300\r
2020-03-18,111300\r
2020-03-20,116700\r
2020-03-25,113200\r
2020-03-28,113200\r
2020-03-30,113200\r
2020-04-02,118700\r
2020-04-04,114600\r
2020-04-07,116300\r
2020-04-09,115000\r
2020-04-14,115200\r
2020-04-22,119500\r
2020-04-24,118500\r
2020-04-29,120400\r
2020-05-04,120600\r
2020-05-07,120600\r
2020-05-09,120600\r
2020-05-14,125400\r
2020-05-19,118300\r
2020-05-22,119400\r
2020-05-24,119400\r
2020-05-27,119400\r
2020-05-29,122500\r
2020-06-03,122600\r
2020-06-06,121600\r
2020-06-23,118500\r
2020-06-26,118500\r
2020-06-28,118500\r
2020-07-01,118500\r
2020-07-03,118700\r
2020-07-06,118700\r
2020-07-08,117400\r
2020-07-11,122800\r
2020-07-16,122800\r
2020-07-18,120400\r
2020-07-21,122600\r
2020-07-23,120000\r
2020-07-26,120700\r
2020-07-28,120700\r
2020-07-31,120700\r
2020-08-02,120700\r
2020-08-05,115300\r
2020-08-07,120100\r
2020-08-10,118200\r
2020-08-12,118200\r
2020-08-15,118200\r
2020-08-20,118200\r
2020-08-22,124700\r
2020-08-25,120500\r
2020-08-27,125600\r
2020-09-01,125600\r
2020-09-04,125600\r
2020-09-06,118500\r
2020-09-14,118900\r
2020-09-16,120000\r
2020-09-26,116900\r
2020-09-29,116900\r
2020-10-11,121400\r
2020-10-16,121400\r
2020-10-19,121400\r
2020-10-21,121400\r
2020-10-24,121400\r
2020-10-31,111500\r
2020-11-05,111400\r
2020-11-10,105200\r
2020-11-15,105200\r
2020-11-18,105600\r
2020-11-20,104000\r
2020-11-23,105300\r
2020-11-25,105300\r
2020-11-30,106500\r
2020-12-03,106500\r
2020-12-10,103500\r
2020-12-13,103500\r
2020-12-15,103500\r
2020-12-30,67900\r
2021-01-14,100000\r
2021-01-17,100000\r
2021-01-19,108200\r
2021-01-24,108100\r
2021-02-03,113700\r
2021-02-08,102400\r
2021-02-11,102400\r
2021-02-13,102400\r
2021-02-18,102400\r
2021-02-28,108100\r
2021-03-05,108100\r
2021-03-08,108100\r
2021-03-10,112800\r
2021-03-13,112800\r
2021-03-15,112800\r
2021-03-20,112800\r
2021-03-23,110100\r
2021-03-25,121600\r
2021-03-28,121600\r
2021-03-30,116000\r
2021-04-02,123600\r
2021-04-04,123600\r
2021-04-07,118100\r
2021-04-09,118100\r
2021-05-19,7300\r
2021-05-27,7300\r
2021-06-13,121200\r
2021-06-16,121200\r
2021-06-18,123300\r
2021-06-26,121600\r
2021-07-18,123300\r
2021-07-21,123300\r
2021-07-23,123300\r
2021-07-26,123300\r
2021-07-28,124700\r
2021-08-02,123800\r
2021-08-05,124000\r
2021-08-10,121000\r
2021-08-12,121100\r
2021-08-15,116700\r
2021-08-17,122900\r
2021-08-20,122900\r
2021-08-22,122900\r
2021-08-25,121700\r
2021-08-27,122900\r
2021-08-30,119600\r
2021-09-01,122100\r
2021-09-06,121300\r
2021-09-11,120300\r
2021-09-21,122800\r
2021-09-24,122800\r
2021-09-29,122800\r
2021-10-01,122800\r
2021-10-06,116500\r
2021-10-09,116500\r
2021-10-11,119800\r
2021-10-14,118100\r
2021-10-16,119800\r
2021-10-21,117100\r
2021-10-24,118900\r
2021-10-26,116400\r
2021-10-29,118500\r
2021-11-05,120300\r
2021-11-20,110500\r
2021-11-23,110500\r
2021-11-30,114900\r
2021-12-03,110100\r
2021-12-05,110100\r
2022-01-14,107600\r
2022-01-17,107600\r
2022-01-19,108500\r
2022-01-22,108500\r
2022-01-24,107400\r
2022-01-27,109000\r
2022-01-29,109000\r
2022-02-01,108000\r
2022-02-03,108000\r
2022-02-08,109600\r
2022-02-13,116000\r
2022-02-18,110600\r
2022-02-23,110300\r
2022-02-26,111600\r
2022-02-28,111300\r
2022-03-03,114000\r
2022-03-05,112700\r
2022-03-08,118200\r
2022-03-10,118200\r
2022-04-04,122600\r
2022-04-09,122600\r
2022-04-14,123000\r
2022-04-17,119900\r
2022-04-19,123500\r
2022-04-22,123500\r
2022-04-27,122600\r
2022-04-29,126700\r
2022-05-14,127000\r
2022-05-17,127000\r
2022-05-19,127000\r
2022-05-22,127000\r
2022-05-29,120800\r
2022-06-01,120800\r
2022-06-06,120800\r
2022-06-13,119700\r
2022-06-16,119700\r
2022-06-18,120600\r
2022-06-21,120600\r
2022-06-26,117000\r
2022-06-28,117000\r
2022-07-03,122600\r
2022-07-06,122600\r
2022-07-08,123000\r
2022-07-11,123000\r
2022-07-13,122900\r
2022-07-16,121500\r
2022-07-18,123000\r
2022-07-21,123800\r
2022-07-26,123400\r
2022-07-28,124400\r
2022-07-31,123700\r
2022-08-02,123700\r
2022-08-05,123700\r
2022-08-07,122000\r
2022-08-10,123600\r
2022-08-12,116300\r
2022-08-20,113400\r
2022-08-22,123000\r
2022-08-25,122900\r
2022-08-27,126500\r
2022-09-01,121800\r
2022-09-04,125400\r
2022-09-06,125400\r
2022-09-09,114700\r
2022-09-11,115600\r
2022-09-16,119900\r
2022-09-19,119900\r
2022-09-21,115700\r
2022-09-26,120800\r
2022-10-06,115500\r
2022-10-11,115600\r
2022-10-16,115600\r
2022-10-19,112100\r
2022-10-26,115700\r
2022-10-31,117600\r
2022-11-05,116800\r
2022-11-10,120300\r
2022-11-18,120600\r
2022-11-20,120800\r
2022-11-25,118400\r
2022-11-30,112200\r
2022-12-05,112900\r
2022-12-10,111200\r
2022-12-25,16400\r
2022-12-28,16400\r
2022-12-30,16400\r
2023-01-04,113400\r
2023-01-07,113400\r
2023-01-09,113400\r
2023-01-12,113400\r
2023-01-14,113400\r
2023-01-29,108000\r
2023-02-01,103700\r
2023-02-03,109200\r
2023-02-06,109200\r
2023-02-08,104200\r
2023-02-11,105600\r
2023-02-13,95000\r
2023-02-16,97200\r
2023-02-18,95200\r
2023-02-21,108300\r
2023-02-26,106300\r
2023-02-28,106300\r
2023-03-05,111200\r
2023-03-13,111200\r
2023-03-15,111200\r
2023-03-20,116300\r
2023-03-25,119700\r
2023-03-28,119700\r
2023-03-30,119600\r
2023-04-04,123500\r
2023-04-07,127100\r
2023-04-09,127100\r
2023-04-14,124500\r
2023-04-19,122500\r
2023-04-22,122500\r
2023-04-24,123400\r
`;export{r as default};
