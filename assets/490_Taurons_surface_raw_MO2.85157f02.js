const r=`date,value\r
2017-01-03,118200\r
2017-01-13,118200\r
2017-02-15,128200\r
2017-02-22,128200\r
2017-02-25,131000\r
2017-03-07,128300\r
2017-03-14,135100\r
2017-03-17,135700\r
2017-03-27,127000\r
2017-04-03,134900\r
2017-04-06,134700\r
2017-04-23,122800\r
2017-05-03,122800\r
2017-05-16,147000\r
2017-05-23,147200\r
2017-05-26,146600\r
2017-06-02,138700\r
2017-06-05,125200\r
2017-06-15,136300\r
2017-06-22,136400\r
2017-06-25,125700\r
2017-07-02,128800\r
2017-07-05,121800\r
2017-07-07,123600\r
2017-07-12,123600\r
2017-07-17,123300\r
2017-08-14,141100\r
2017-08-19,132200\r
2017-08-21,124400\r
2017-08-24,127100\r
2017-08-26,129900\r
2017-08-29,125100\r
2017-09-03,126600\r
2017-09-20,123700\r
2017-09-23,143100\r
2017-09-28,143100\r
2017-10-05,123800\r
2017-10-10,123800\r
2017-10-13,132100\r
2017-10-15,124500\r
2017-10-18,131200\r
2017-10-25,123000\r
2017-10-28,119000\r
2017-10-30,127200\r
2017-11-04,127200\r
2017-11-07,127200\r
2017-11-14,127200\r
2017-11-17,127600\r
2017-11-19,125200\r
2017-11-22,125800\r
2017-11-27,123100\r
2017-11-29,124500\r
2017-12-07,125800\r
2017-12-12,15500\r
2017-12-14,15500\r
2017-12-19,15500\r
2017-12-24,87600\r
2017-12-27,93200\r
2018-01-28,142900\r
2018-01-31,142900\r
2018-02-02,142900\r
2018-02-25,117500\r
2018-02-27,118500\r
2018-03-22,127100\r
2018-03-29,124200\r
2018-04-01,124200\r
2018-04-06,130700\r
2018-04-16,130700\r
2018-04-18,143900\r
2018-04-21,144300\r
2018-04-23,144300\r
2018-04-26,139000\r
2018-05-06,132600\r
2018-05-11,124500\r
2018-05-13,124500\r
2018-05-18,126700\r
2018-05-21,127000\r
2018-05-26,135300\r
2018-06-02,131200\r
2018-06-20,101100\r
2018-06-22,125600\r
2018-06-25,117700\r
2018-06-27,119700\r
2018-07-02,120900\r
2018-07-07,117500\r
2018-07-10,98500\r
2018-07-12,101400\r
2018-07-15,128800\r
2018-07-17,128800\r
2018-07-25,123100\r
2018-07-27,126000\r
2018-07-30,126700\r
2018-08-01,126700\r
2018-08-04,126700\r
2018-08-06,126700\r
2018-08-11,123000\r
2018-08-16,123000\r
2018-08-19,126200\r
2018-08-21,126200\r
2018-08-26,118300\r
2018-09-03,124500\r
2018-09-05,124000\r
2018-09-08,127100\r
2018-09-10,123600\r
2018-09-13,123600\r
2018-09-18,120100\r
2018-09-20,122600\r
2018-09-23,126500\r
2018-09-25,119200\r
2018-09-28,121800\r
2018-09-30,121600\r
2018-10-05,123200\r
2018-10-08,124500\r
2018-10-13,127900\r
2018-10-18,129900\r
2018-10-20,127600\r
2018-10-23,120400\r
2018-10-25,119200\r
2018-10-30,119200\r
2018-11-04,118000\r
2018-11-14,118100\r
2018-11-19,118100\r
2018-11-22,125000\r
2018-11-29,118600\r
2018-12-19,125400\r
2018-12-27,127800\r
2018-12-29,122700\r
2019-01-01,109900\r
2019-01-03,121600\r
2019-01-06,120000\r
2019-01-11,120000\r
2019-01-16,120000\r
2019-02-12,16500\r
2019-02-15,16500\r
2019-02-17,8700\r
2019-02-20,8700\r
2019-02-22,14800\r
2019-02-25,18500\r
2019-02-27,18500\r
2019-03-12,116400\r
2019-03-22,136900\r
2019-03-24,118000\r
2019-03-27,118700\r
2019-03-29,114100\r
2019-04-01,117600\r
2019-04-13,130600\r
2019-04-18,123700\r
2019-05-13,125300\r
2019-05-16,125300\r
2019-05-23,128200\r
2019-05-31,140100\r
2019-06-02,127600\r
2019-06-17,113300\r
2019-06-25,113300\r
2019-06-27,119500\r
2019-06-30,119500\r
2019-07-02,129000\r
2019-07-05,129900\r
2019-07-07,123400\r
2019-07-10,127600\r
2019-07-15,130100\r
2019-07-17,127800\r
2019-07-20,122200\r
2019-07-22,121100\r
2019-07-25,125200\r
2019-08-04,120800\r
2019-08-09,125700\r
2019-08-14,116900\r
2019-08-16,114300\r
2019-08-21,119200\r
2019-08-24,112900\r
2019-08-26,114100\r
2019-08-29,109900\r
2019-08-31,105200\r
2019-09-03,103400\r
2019-09-13,107800\r
2019-09-15,111400\r
2019-09-18,119200\r
2019-09-20,121400\r
2019-09-30,121400\r
2019-10-03,134300\r
2019-12-29,115300\r
2020-01-06,109400\r
2020-01-11,109400\r
2020-01-16,115500\r
2020-01-18,115500\r
2020-01-21,115500\r
2020-02-05,124900\r
2020-02-07,126000\r
2020-02-12,124800\r
2020-02-15,124800\r
2020-02-20,121600\r
2020-02-22,115600\r
2020-03-21,116400\r
2020-03-23,116400\r
2020-03-26,116400\r
2020-03-28,121200\r
2020-03-31,111800\r
2020-04-02,111800\r
2020-04-05,115700\r
2020-04-07,117200\r
2020-04-10,117200\r
2020-04-12,119400\r
2020-04-15,119000\r
2020-05-07,108600\r
2020-05-17,108600\r
2020-05-20,126300\r
2020-05-22,126300\r
2020-05-25,135200\r
2020-05-27,119500\r
2020-05-30,126900\r
2020-06-01,126900\r
2020-06-21,132400\r
2020-06-24,138900\r
2020-06-26,135000\r
2020-06-29,135000\r
2020-07-01,135000\r
2020-07-04,137600\r
2020-07-09,142000\r
2020-07-11,136200\r
2020-07-14,126900\r
2020-07-19,129400\r
2020-07-21,122100\r
2020-07-24,122100\r
2020-07-29,116300\r
2020-07-31,117200\r
2020-08-05,114100\r
2020-08-08,114200\r
2020-08-10,113600\r
2020-08-15,111800\r
2020-08-20,114900\r
2020-08-25,121600\r
2020-09-04,110700\r
2020-09-07,111900\r
2020-09-09,111900\r
2020-09-12,107200\r
2020-09-14,108500\r
2020-09-17,107200\r
2020-11-06,110200\r
2020-11-08,110200\r
2020-11-11,110200\r
2020-11-18,115300\r
2020-11-21,111300\r
2020-11-23,113500\r
2020-11-28,113500\r
2020-12-18,126100\r
2020-12-28,126100\r
2021-01-10,100\r
2021-02-14,116900\r
2021-02-19,116900\r
2021-02-21,117400\r
2021-02-24,117200\r
2021-02-26,118400\r
2021-03-01,121700\r
2021-03-06,117600\r
2021-03-23,134700\r
2021-03-26,134700\r
2021-03-28,129100\r
2021-03-31,130200\r
2021-04-02,132300\r
2021-04-05,135800\r
2021-04-07,128400\r
2021-04-15,130700\r
2021-04-17,136600\r
2021-04-22,136300\r
2021-05-27,120300\r
2021-05-30,120300\r
2021-06-01,120300\r
2021-06-14,121800\r
2021-06-16,130000\r
2021-06-26,124200\r
2021-07-01,128900\r
2021-07-11,121200\r
2021-07-19,128900\r
2021-07-21,118200\r
2021-07-29,122800\r
2021-08-20,130000\r
2021-08-25,130000\r
2021-08-28,134100\r
2021-08-30,134100\r
2021-09-02,119500\r
2021-09-07,119500\r
2021-09-22,115800\r
2021-09-24,117700\r
2021-09-27,117700\r
2021-10-02,117700\r
2021-10-07,119400\r
2021-10-09,119600\r
2021-10-12,118500\r
2021-10-14,120500\r
2021-10-17,117500\r
2021-10-19,119900\r
2021-10-22,117300\r
2021-10-24,116400\r
2021-10-27,114900\r
2021-11-06,117800\r
2021-12-16,120200\r
2021-12-18,127400\r
2021-12-21,120400\r
2021-12-23,125400\r
2022-01-12,113100\r
2022-01-15,122400\r
2022-01-17,114200\r
2022-01-22,114300\r
2022-01-25,109000\r
2022-01-27,96200\r
2022-01-30,96700\r
2022-02-09,126100\r
2022-02-11,130400\r
2022-02-19,128500\r
2022-02-26,139600\r
2022-03-06,121200\r
2022-03-08,123700\r
2022-03-23,117800\r
2022-03-26,124900\r
2022-04-10,123000\r
2022-04-15,127000\r
2022-04-17,125300\r
2022-04-22,132600\r
2022-04-27,132200\r
2022-04-30,133300\r
2022-05-02,133300\r
2022-05-07,133100\r
2022-05-10,141400\r
2022-05-15,142300\r
2022-05-17,141200\r
2022-05-27,120300\r
2022-05-30,116300\r
2022-06-01,129300\r
2022-06-04,124900\r
2022-06-06,124900\r
2022-06-11,124000\r
2022-06-14,119900\r
2022-06-19,119200\r
2022-06-21,119800\r
2022-06-29,128800\r
2022-07-01,136000\r
2022-07-04,127200\r
2022-07-06,127200\r
2022-07-11,122400\r
2022-07-14,121200\r
2022-07-16,116700\r
2022-07-19,115600\r
2022-07-21,111800\r
2022-07-24,113900\r
2022-07-26,113500\r
2022-07-31,117600\r
2022-08-03,120000\r
2022-08-08,117600\r
2022-08-10,117700\r
2022-08-13,119700\r
2022-08-25,120500\r
2022-08-28,120700\r
2022-08-30,120700\r
2022-09-02,119800\r
2022-09-04,119800\r
2022-09-12,127100\r
2022-09-19,123000\r
2022-09-22,122100\r
2022-10-04,114600\r
2022-10-09,118500\r
2022-10-12,117700\r
2022-10-19,126600\r
2022-10-22,126700\r
2022-10-24,119900\r
2022-11-11,116500\r
2022-11-13,116500\r
2023-02-11,5900\r
2023-02-14,5900\r
2023-02-16,7000\r
2023-02-26,7700\r
2023-03-06,124600\r
2023-03-13,130000\r
2023-03-16,124300\r
2023-04-05,119100\r
2023-04-07,119100\r
2023-04-30,136800\r
2023-05-02,143200\r
2023-05-17,130900\r
2023-05-22,130900\r
2023-05-25,137300\r
2023-05-27,123200\r
2023-05-30,123100\r
2023-06-01,127900\r
2023-06-06,124500\r
2023-06-14,119900\r
2023-06-16,119900\r
2023-06-24,125700\r
2023-06-26,123100\r
2023-07-04,138400\r
2023-07-06,144200\r
2023-07-09,137900\r
2023-07-11,137900\r
2023-07-14,139000\r
2023-07-19,126900\r
2023-07-26,122000\r
2023-07-31,122100\r
2023-08-08,129100\r
2023-08-10,129100\r
2023-08-15,130700\r
2023-08-20,132100\r
2023-08-23,128100\r
2023-09-04,118200\r
2023-09-07,119800\r
2023-09-17,124300\r
2023-09-24,129300\r
2023-09-27,129300\r
2023-09-29,129300\r
2023-10-02,122400\r
2023-10-04,122400\r
2023-10-07,120300\r
2023-10-09,122000\r
2023-10-12,121700\r
2023-12-03,124000\r
2023-12-06,124000\r
2023-12-16,120100\r
2023-12-18,123700\r
`;export{r as default};
