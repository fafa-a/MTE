const n=`date,value\r
2017-01-19,96500\r
2017-01-26,108000\r
2017-01-29,103900\r
2017-02-05,108000\r
2017-02-15,114800\r
2017-02-18,114800\r
2017-02-25,114000\r
2017-02-28,119900\r
2017-03-27,128700\r
2017-03-30,128700\r
2017-04-06,129100\r
2017-04-09,120900\r
2017-04-19,118900\r
2017-04-29,115300\r
2017-05-16,126200\r
2017-05-19,126200\r
2017-05-26,126200\r
2017-05-29,110800\r
2017-06-05,114300\r
2017-06-15,122200\r
2017-06-18,119300\r
2017-06-25,119300\r
2017-08-02,106600\r
2017-08-04,106000\r
2017-08-14,101500\r
2017-08-19,100700\r
2017-08-22,108200\r
2017-08-24,101300\r
2017-08-27,101600\r
2017-08-29,105000\r
2017-09-03,101400\r
2017-09-06,105400\r
2017-09-18,87100\r
2017-09-21,88400\r
2017-09-28,88400\r
2017-10-13,89600\r
2017-10-16,89600\r
2017-10-18,89600\r
2017-10-21,89600\r
2017-10-26,89300\r
2017-10-28,92100\r
2017-10-31,95500\r
2017-11-05,95500\r
2017-11-07,95000\r
2017-11-15,98700\r
2017-11-17,98700\r
2018-02-08,114700\r
2018-02-10,115800\r
2018-02-18,115800\r
2018-02-25,127100\r
2018-02-28,128300\r
2018-03-10,126000\r
2018-03-20,123300\r
2018-03-25,121000\r
2018-04-19,118400\r
2018-04-21,127600\r
2018-04-24,116300\r
2018-05-04,124000\r
2018-05-06,131700\r
2018-05-09,131700\r
2018-05-11,131700\r
2018-05-16,128500\r
2018-05-19,119700\r
2018-05-21,116000\r
2018-05-24,116000\r
2018-06-20,118800\r
2018-06-23,122300\r
2018-06-25,119200\r
2018-06-28,121900\r
2018-07-03,122600\r
2018-07-08,121400\r
2018-07-10,124300\r
2018-07-13,118300\r
2018-07-15,120000\r
2018-07-18,120000\r
2018-07-23,120000\r
2018-07-25,123400\r
2018-07-28,123800\r
2018-08-02,123800\r
2018-08-04,120000\r
2018-08-07,118000\r
2018-08-12,115200\r
2018-08-17,117900\r
2018-08-19,112300\r
2018-08-22,107100\r
2018-09-01,104500\r
2018-09-08,100800\r
2018-09-11,97100\r
2018-09-16,99100\r
2018-09-26,100200\r
2018-09-28,103900\r
2018-10-01,103900\r
2018-10-06,93500\r
2018-10-08,96100\r
2018-10-11,104100\r
2018-10-13,104100\r
2018-10-18,99700\r
2018-10-21,100400\r
2018-10-23,98500\r
2018-11-02,97700\r
2018-12-10,107700\r
2018-12-12,107700\r
2018-12-17,108300\r
2018-12-20,108300\r
2019-02-13,114500\r
2019-02-15,116200\r
2019-02-18,116200\r
2019-02-20,115200\r
2019-02-23,116000\r
2019-02-25,113100\r
2019-03-10,114900\r
2019-03-22,109800\r
2019-03-27,109800\r
2019-03-30,113600\r
2019-04-01,113600\r
2019-04-04,113600\r
2019-04-11,123600\r
2019-04-14,123600\r
2019-04-19,126900\r
2019-05-06,115400\r
2019-05-14,120100\r
2019-05-16,120100\r
2019-05-29,115700\r
2019-06-30,109000\r
2019-07-03,109000\r
2019-07-05,112800\r
2019-07-08,112800\r
2019-07-10,112800\r
2019-07-15,108100\r
2019-07-20,105900\r
2019-07-23,95000\r
2019-07-25,92800\r
2019-07-30,92800\r
2019-08-02,89700\r
2019-08-22,54900\r
2019-08-24,54900\r
2019-08-29,54900\r
2019-09-01,54900\r
2019-09-03,54900\r
2019-09-06,40300\r
2019-09-11,40300\r
2019-09-13,38000\r
2019-09-16,38000\r
2019-09-18,36700\r
2019-09-21,36100\r
2019-10-11,43300\r
2019-10-13,43300\r
2019-10-21,43300\r
2019-11-22,67300\r
2019-12-02,71400\r
2019-12-05,70200\r
2019-12-10,73900\r
2019-12-20,72200\r
2020-01-06,79700\r
2020-01-11,79700\r
2020-01-16,86500\r
2020-01-19,83300\r
2020-01-21,87900\r
2020-01-24,89000\r
2020-02-05,92700\r
2020-02-15,96600\r
2020-02-18,96600\r
2020-03-19,113900\r
2020-03-24,114000\r
2020-03-26,113400\r
2020-03-31,114000\r
2020-04-05,115500\r
2020-04-08,115500\r
2020-04-10,116800\r
2020-04-13,113600\r
2020-04-15,118500\r
2020-04-23,119600\r
2020-05-15,117500\r
2020-05-18,117700\r
2020-05-20,113600\r
2020-05-25,116300\r
2020-05-28,113700\r
2020-05-30,117100\r
2020-06-02,117800\r
2020-06-09,120200\r
2020-06-14,122700\r
2020-06-24,116400\r
2020-07-07,117500\r
2020-07-09,111300\r
2020-07-12,117100\r
2020-07-14,114900\r
2020-07-19,116100\r
2020-07-22,118000\r
2020-07-24,119200\r
2020-07-27,118500\r
2020-07-29,117700\r
2020-08-06,116800\r
2020-08-08,111400\r
2020-09-07,82900\r
2020-09-10,84900\r
2020-09-12,82700\r
2020-09-15,86700\r
2020-09-17,84500\r
2020-09-22,84500\r
2020-11-14,85100\r
2020-11-19,89300\r
2020-11-21,87100\r
2020-11-29,89600\r
2020-12-01,88400\r
2020-12-04,88400\r
2021-02-24,124700\r
2021-02-27,124900\r
2021-03-01,123600\r
2021-03-06,123600\r
2021-03-09,122000\r
2021-03-24,122700\r
2021-03-29,127100\r
2021-03-31,119700\r
2021-04-03,123100\r
2021-04-08,122900\r
2021-04-18,120000\r
2021-04-23,118900\r
2021-04-25,122200\r
2021-05-03,118300\r
2021-05-08,117800\r
2021-05-28,118400\r
2021-05-30,120900\r
2021-06-14,120200\r
2021-06-24,120200\r
2021-07-19,125000\r
2021-07-22,130600\r
2021-08-26,116900\r
2021-09-02,118400\r
2021-09-05,118400\r
2021-09-07,118100\r
2021-09-17,114000\r
2021-09-22,107800\r
2021-09-30,107800\r
2021-10-15,108800\r
2021-10-17,108800\r
2021-10-22,111400\r
2021-10-27,118100\r
2021-11-06,111000\r
2021-11-09,114000\r
2021-11-19,104900\r
2021-11-29,109900\r
2021-12-09,112200\r
2021-12-16,108300\r
2022-01-05,119600\r
2022-01-20,117000\r
2022-02-09,116600\r
2022-02-12,123900\r
2022-02-17,123900\r
2022-02-19,123900\r
2022-03-24,120800\r
2022-03-26,124400\r
2022-04-15,119100\r
2022-05-03,128300\r
2022-05-05,128300\r
2022-05-08,128300\r
2022-05-10,122900\r
2022-05-13,122900\r
2022-05-15,117300\r
2022-05-18,118500\r
2022-05-28,116800\r
2022-05-30,109600\r
2022-06-02,113000\r
2022-06-04,113000\r
2022-06-12,112600\r
2022-06-14,99900\r
2022-06-17,103300\r
2022-06-19,101800\r
2022-06-27,104000\r
2022-06-29,104100\r
2022-07-02,99800\r
2022-07-04,97900\r
2022-07-12,96200\r
2022-07-14,96700\r
2022-07-17,95100\r
2022-07-19,95900\r
2022-08-03,80800\r
2022-08-06,81100\r
2022-08-08,77400\r
2022-08-11,77400\r
2022-08-13,72700\r
2022-08-18,69100\r
2022-08-31,57500\r
2022-09-05,57500\r
2022-09-20,54600\r
2022-09-22,55300\r
2022-09-30,55300\r
2022-10-20,64400\r
2022-10-27,66000\r
2022-11-01,62400\r
2022-12-16,84600\r
2023-01-15,95000\r
2023-01-18,97900\r
2023-01-20,97900\r
2023-02-07,105500\r
2023-02-09,113800\r
2023-02-12,113800\r
2023-02-14,105400\r
2023-02-27,109400\r
2023-03-01,111600\r
2023-03-04,109600\r
2023-03-14,111600\r
2023-04-05,119500\r
2023-04-08,120200\r
2023-04-13,120200\r
2023-04-20,122200\r
2023-04-30,122200\r
`;export{n as default};
