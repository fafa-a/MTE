const r=`date,value\r
2017-03-14,153300\r
2017-03-17,155300\r
2017-03-27,153600\r
2017-07-07,173000\r
2017-07-12,168400\r
2017-07-17,167800\r
2017-07-22,164000\r
2017-08-21,132600\r
2017-08-24,132600\r
2017-08-26,132600\r
2017-08-29,132600\r
2017-10-05,119300\r
2017-10-10,119300\r
2017-10-13,119300\r
2017-10-15,121900\r
2017-10-18,123600\r
2017-10-25,123600\r
2017-10-28,118100\r
2018-03-14,157100\r
2018-03-19,157100\r
2018-03-24,157100\r
2018-07-12,165300\r
2018-07-15,164500\r
2018-07-17,164800\r
2018-07-20,167600\r
2018-07-22,167600\r
2018-07-25,166000\r
2018-07-27,167000\r
2018-07-30,173000\r
2018-08-01,174300\r
2018-08-04,174300\r
2018-08-06,177900\r
2018-08-11,158200\r
2018-08-16,157100\r
2018-08-19,157100\r
2018-08-21,145300\r
2018-08-26,145900\r
2018-08-29,153400\r
2018-09-03,140700\r
2018-09-20,133600\r
2018-09-25,143100\r
2018-09-28,143100\r
2018-09-30,143100\r
2018-10-05,139000\r
2018-10-10,132200\r
2018-10-13,132300\r
2018-10-15,132300\r
2018-10-20,131400\r
2018-10-23,131400\r
2019-02-17,145100\r
2019-02-20,148000\r
2019-02-22,149100\r
2019-02-25,148500\r
2019-02-27,148300\r
2019-03-04,146800\r
2019-03-07,154600\r
2019-03-24,156500\r
2019-03-27,152000\r
2019-03-29,156100\r
2019-04-08,153900\r
2019-04-11,157200\r
2019-04-13,161400\r
2019-05-13,176900\r
2019-05-16,180500\r
2019-05-23,179000\r
2019-05-31,180200\r
2019-06-02,185100\r
2019-06-05,177900\r
2019-06-17,167700\r
2019-06-25,167700\r
2019-06-27,172500\r
2019-06-30,172500\r
2019-07-02,168300\r
2019-07-05,172400\r
2019-07-07,170900\r
2019-07-10,170900\r
2019-07-12,170900\r
2019-07-15,168000\r
2019-07-17,165600\r
2019-07-20,159900\r
2019-07-22,162300\r
2019-07-25,164500\r
2019-08-04,155000\r
2019-08-26,123500\r
2019-08-29,123500\r
2019-08-31,142900\r
2019-09-03,142900\r
2019-09-10,142900\r
2019-09-13,147900\r
2019-09-15,142800\r
2019-09-18,139200\r
2019-09-20,138000\r
2019-10-03,132000\r
2020-02-15,156200\r
2020-02-20,146200\r
2020-02-22,151700\r
2020-03-08,151400\r
2020-03-18,164100\r
2020-03-21,165900\r
2020-03-23,165900\r
2020-03-26,163200\r
2020-03-28,166700\r
2020-03-31,166700\r
2020-04-02,164300\r
2020-04-05,164000\r
2020-04-07,163200\r
2020-04-10,166600\r
2020-04-12,166000\r
2020-04-15,163500\r
2020-04-17,163500\r
2020-04-22,167300\r
2020-04-25,165000\r
2020-04-27,167700\r
2020-05-17,171500\r
2020-05-20,171500\r
2020-05-25,176200\r
2020-05-27,178000\r
2020-05-30,178000\r
2020-06-01,178000\r
2020-06-26,175800\r
2020-06-29,174500\r
2020-07-04,180300\r
2020-07-06,180300\r
2020-07-09,177400\r
2020-07-11,173500\r
2020-07-31,174900\r
2020-08-05,173900\r
2020-08-08,173800\r
2020-08-10,166400\r
2020-08-15,163700\r
2020-08-20,156500\r
2020-08-25,162500\r
2020-09-04,148100\r
2020-09-07,155100\r
2020-09-09,148400\r
2020-09-12,155700\r
2020-09-14,149900\r
2020-09-17,149900\r
2021-02-21,159700\r
2021-02-24,159700\r
2021-02-26,164200\r
2021-03-01,165000\r
2021-03-23,169500\r
2021-03-28,172900\r
2021-03-31,172600\r
2021-04-02,170700\r
2021-04-05,179100\r
2021-04-07,179100\r
2021-04-12,177100\r
2021-04-17,156900\r
2021-04-22,156900\r
2021-04-27,161600\r
2021-05-05,155200\r
2021-06-01,169600\r
2021-06-11,171900\r
2021-06-16,178600\r
2021-06-19,178700\r
2021-06-26,181900\r
2021-07-21,165800\r
2021-07-29,165800\r
2021-08-10,178800\r
2021-08-15,178900\r
2021-08-20,177000\r
2021-08-28,175800\r
2021-09-24,146500\r
2021-09-27,146500\r
2021-10-02,146500\r
2021-10-04,145900\r
2021-10-14,131400\r
2021-10-17,131400\r
2021-10-19,135900\r
2021-10-22,135900\r
2021-10-24,127700\r
2021-10-27,133300\r
2021-11-01,122200\r
2022-02-26,156600\r
2022-03-06,154300\r
2022-03-08,165500\r
2022-03-23,160600\r
2022-03-26,160600\r
2022-03-28,160600\r
2022-04-17,158900\r
2022-04-22,168700\r
2022-04-27,159900\r
2022-05-02,168700\r
2022-05-07,160200\r
2022-06-11,134100\r
2022-06-16,139500\r
2022-06-19,139500\r
2022-06-21,134600\r
2022-06-29,134100\r
2022-07-01,133300\r
2022-07-06,119000\r
2022-07-11,122900\r
2022-07-14,122900\r
2022-07-16,120700\r
2022-07-19,129000\r
2022-07-21,129000\r
2022-07-24,126900\r
2022-07-26,126900\r
2022-08-10,106900\r
2022-08-13,106900\r
2022-08-25,97900\r
2022-08-28,97900\r
2022-09-04,99500\r
2022-09-12,86700\r
2022-09-14,86700\r
2022-09-19,71000\r
2022-09-22,71000\r
2022-10-04,68900\r
2022-10-09,73300\r
2022-10-17,69400\r
2022-10-19,69400\r
2023-02-16,92200\r
2023-02-26,92800\r
`;export{r as default};
