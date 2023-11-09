const r=`date,value\r
2017-02-25,184700\r
2017-03-17,196500\r
2017-03-27,196500\r
2017-04-06,219400\r
2017-05-06,217700\r
2017-05-13,217700\r
2017-05-16,221800\r
2017-05-26,236000\r
2017-06-02,236000\r
2017-06-05,257200\r
2017-06-12,256200\r
2017-07-05,259900\r
2017-07-07,259900\r
2017-08-14,235400\r
2017-08-17,235400\r
2017-08-19,235400\r
2017-08-21,235400\r
2017-08-22,235400\r
2017-08-24,235500\r
2017-08-26,207000\r
2017-08-29,207000\r
2017-09-03,207000\r
2017-09-05,180200\r
2017-09-08,182900\r
2017-10-08,178400\r
2017-10-10,178400\r
2017-10-11,178400\r
2017-10-13,182900\r
2017-10-15,182900\r
2017-10-16,182900\r
2017-10-18,179700\r
2017-10-20,182400\r
2017-10-23,176800\r
2017-10-25,177400\r
2017-10-26,177400\r
2017-10-28,176400\r
2017-10-30,177500\r
2017-10-31,177500\r
2017-11-02,177500\r
2017-11-07,181400\r
2017-11-14,179500\r
2017-11-15,179500\r
2017-11-17,184800\r
2017-11-19,182300\r
2017-11-22,184700\r
2017-11-24,184700\r
2017-11-25,184700\r
2017-11-27,182100\r
2017-11-30,184300\r
2017-12-07,184900\r
2018-02-10,253700\r
2018-02-12,253700\r
2018-02-15,253700\r
2018-02-25,252500\r
2018-02-27,252500\r
2018-03-02,257900\r
2018-03-07,257900\r
2018-03-09,257800\r
2018-03-22,258800\r
2018-04-01,258800\r
2018-04-21,259500\r
2018-04-23,259500\r
2018-04-24,259500\r
2018-04-26,259500\r
2018-05-11,259100\r
2018-05-19,259100\r
2018-05-21,259100\r
2018-06-20,259300\r
2018-06-22,259300\r
2018-06-23,259300\r
2018-06-25,259600\r
2018-06-28,259600\r
2018-07-02,259600\r
2018-07-03,259600\r
2018-07-07,258100\r
2018-07-08,258100\r
2018-07-10,258300\r
2018-07-25,253300\r
2018-07-27,253300\r
2018-07-30,258000\r
2018-08-01,258000\r
2018-08-02,258000\r
2018-08-04,253300\r
2018-08-06,258000\r
2018-08-11,247100\r
2018-08-12,247100\r
2018-08-19,250000\r
2018-08-21,250000\r
2018-08-22,250000\r
2018-08-26,250000\r
2018-08-27,250000\r
2018-09-03,186300\r
2018-09-05,186300\r
2018-09-08,197900\r
2018-09-10,197900\r
2018-09-11,197900\r
2018-09-16,196200\r
2018-09-18,196200\r
2018-09-23,173500\r
2018-09-25,173500\r
2018-09-26,173500\r
2018-09-28,179300\r
2018-09-30,179300\r
2018-10-03,170900\r
2018-10-05,176800\r
2018-10-06,176800\r
2018-10-23,155000\r
2018-10-25,155000\r
2018-11-12,175400\r
2018-11-15,175400\r
2018-11-17,177700\r
2018-11-22,177700\r
2018-11-24,171800\r
2018-11-27,173300\r
2018-11-29,171900\r
2018-12-05,171900\r
2019-01-11,180600\r
2019-01-16,185900\r
2019-01-19,185900\r
2019-01-23,185900\r
2019-01-26,185500\r
2019-01-28,197300\r
2019-02-15,241900\r
2019-02-17,241900\r
2019-02-18,241900\r
2019-02-20,244700\r
2019-02-22,244700\r
2019-02-23,244700\r
2019-02-25,244500\r
2019-02-27,244500\r
2019-03-07,253200\r
2019-03-12,253500\r
2019-03-22,251900\r
2019-03-24,249000\r
2019-03-25,249000\r
2019-03-27,255400\r
2019-03-29,255400\r
2019-03-30,255400\r
2019-04-01,255400\r
2019-04-08,254900\r
2019-04-09,254900\r
2019-05-01,252400\r
2019-05-06,256300\r
2019-05-11,254700\r
2019-05-13,254700\r
2019-05-14,254700\r
2019-05-16,256100\r
2019-05-23,259100\r
2019-05-31,258700\r
2019-07-05,255800\r
2019-07-08,255800\r
2019-07-10,255800\r
2019-07-12,255800\r
2019-07-13,255800\r
2019-07-15,255400\r
2019-07-17,255400\r
2019-07-22,256800\r
2019-07-23,256800\r
2019-07-25,251400\r
2019-07-28,255500\r
2019-08-02,210100\r
2019-08-04,210100\r
2019-08-09,181200\r
2019-08-14,165300\r
2019-08-16,165300\r
2019-08-17,165300\r
2019-08-21,165500\r
2019-08-22,165500\r
2019-08-24,161900\r
2019-08-26,164700\r
2019-08-29,162700\r
2019-08-31,168400\r
2019-09-03,165700\r
2019-09-06,165700\r
2019-09-08,165700\r
2019-09-13,161800\r
2019-09-15,147300\r
2019-09-16,147300\r
2019-09-20,147300\r
2019-09-21,147300\r
2019-10-08,131800\r
2019-10-11,131800\r
2019-10-13,139300\r
2019-10-15,139300\r
2019-10-25,137300\r
2019-11-27,178500\r
2019-12-05,178500\r
2019-12-10,178500\r
2019-12-27,255700\r
2019-12-29,255700\r
2019-12-30,255700\r
2020-01-06,256400\r
2020-01-09,256400\r
2020-01-11,257900\r
2020-01-14,257900\r
2020-01-16,256400\r
2020-01-19,256400\r
2020-01-28,254100\r
2020-02-05,247900\r
2020-02-07,247900\r
2020-02-08,247900\r
2020-02-15,247900\r
2020-02-18,247900\r
2020-02-20,253600\r
2020-02-22,253100\r
2020-04-05,256800\r
2020-04-08,254800\r
2020-04-10,260100\r
2020-04-12,260100\r
2020-04-15,258200\r
2020-04-25,258500\r
2020-04-28,259000\r
2020-05-05,256800\r
2020-05-07,256800\r
2020-05-08,256800\r
2020-05-17,252000\r
2020-05-18,252000\r
2020-05-20,259500\r
2020-05-22,258700\r
2020-05-25,259300\r
2020-05-27,259300\r
2020-05-28,259300\r
2020-05-30,258000\r
2020-06-12,258000\r
2020-06-14,258000\r
2020-07-19,252800\r
2020-07-21,252800\r
2020-07-22,252800\r
2020-07-24,252800\r
2020-07-27,252800\r
2020-07-29,251400\r
2020-07-31,251400\r
2020-08-03,250000\r
2020-08-05,231300\r
2020-08-06,231300\r
2020-08-08,228100\r
2020-08-10,182500\r
2020-08-15,176300\r
2020-08-20,174600\r
2020-08-21,174600\r
2020-08-23,174600\r
2020-09-02,133200\r
2020-09-04,133200\r
2020-09-05,133200\r
2020-09-07,133200\r
2020-09-10,133200\r
2020-09-12,133200\r
2020-09-14,133200\r
2020-09-17,133500\r
2020-10-17,133600\r
2020-10-24,133600\r
2020-10-30,133600\r
2020-11-01,134100\r
2020-11-21,136700\r
2020-11-23,136700\r
2020-11-26,135300\r
2020-11-29,137900\r
2021-02-24,255400\r
2021-02-27,255400\r
2021-03-01,252900\r
2021-03-04,255500\r
2021-03-09,245000\r
2021-03-31,252000\r
2021-04-02,252000\r
2021-04-03,252000\r
2021-04-05,256900\r
2021-04-07,257100\r
2021-04-15,257500\r
2021-04-17,257200\r
2021-04-20,257200\r
2021-04-22,257200\r
2021-04-23,257200\r
2021-05-20,251300\r
2021-05-27,251300\r
2021-05-28,251300\r
2021-05-30,251300\r
2021-06-09,257800\r
2021-06-11,257800\r
2021-06-14,259500\r
2021-06-16,259500\r
2021-06-19,259500\r
2021-06-21,257800\r
2021-07-29,249000\r
2021-08-18,210000\r
2021-08-20,210000\r
2021-08-21,210000\r
2021-08-23,210000\r
2021-08-25,210000\r
2021-08-26,210000\r
2021-08-28,210000\r
2021-09-12,156600\r
2021-09-17,157400\r
2021-09-22,158000\r
2021-09-24,156400\r
2021-09-25,156400\r
2021-09-27,156400\r
2021-09-30,156400\r
2021-10-12,168000\r
2021-10-14,168000\r
2021-10-17,169000\r
2021-10-19,169000\r
2021-10-20,169000\r
2021-10-24,153400\r
2021-10-27,158600\r
2021-12-16,184700\r
2021-12-18,184700\r
2021-12-19,184700\r
2021-12-21,184700\r
2021-12-23,184700\r
2022-01-15,246200\r
2022-01-22,246200\r
2022-01-23,246200\r
2022-01-25,246700\r
2022-01-27,238200\r
2022-02-01,238200\r
2022-02-09,251000\r
2022-03-21,257700\r
2022-03-23,257700\r
2022-03-24,257700\r
2022-03-26,257700\r
2022-04-05,253800\r
2022-04-10,253800\r
2022-04-15,256700\r
2022-04-17,256500\r
2022-04-25,256500\r
2022-07-14,179400\r
2022-07-16,179400\r
2022-07-17,179400\r
2022-07-19,179400\r
2022-07-21,179400\r
2022-07-22,179400\r
2022-07-24,180500\r
2022-07-26,156500\r
2022-07-27,156500\r
2022-07-31,156500\r
2022-08-01,156500\r
2022-08-03,156500\r
2022-08-13,87100\r
2022-08-15,87100\r
2022-08-18,87100\r
2022-08-20,87100\r
2022-08-23,89100\r
2022-08-28,62600\r
2022-08-30,62600\r
2022-09-04,60400\r
2022-09-05,60400\r
2022-09-22,63600\r
2022-10-02,63600\r
2022-10-22,74400\r
2022-10-24,74400\r
2022-11-01,74400\r
2022-11-06,81000\r
2022-11-08,81000\r
2022-11-11,81800\r
2022-11-13,81800\r
2022-11-16,81200\r
2022-11-24,86200\r
2022-12-21,106200\r
2022-12-28,106200\r
2023-02-04,187400\r
2023-02-06,187400\r
2023-02-09,189900\r
2023-02-11,189900\r
2023-02-12,189900\r
2023-02-14,189500\r
2023-02-16,193100\r
2023-02-17,193100\r
2023-02-19,184200\r
2023-02-21,192700\r
2023-02-24,192700\r
2023-02-26,182800\r
2023-03-01,194300\r
2023-03-03,194100\r
2023-03-04,194100\r
2023-03-09,194100\r
2023-03-16,194400\r
2023-04-05,200200\r
2023-04-07,200200\r
2023-04-08,200200\r
2023-04-15,200200\r
2023-06-24,260400\r
2023-07-14,260200\r
2023-07-16,260200\r
2023-07-17,260200\r
2023-07-19,260200\r
2023-07-22,260200\r
2023-08-08,256200\r
2023-08-10,257900\r
2023-08-11,257900\r
2023-08-13,257900\r
2023-08-15,257900\r
2023-08-18,258400\r
2023-08-20,235100\r
2023-08-21,235100\r
2023-08-23,235200\r
2023-08-31,211200\r
2023-09-07,186200\r
2023-09-10,186200\r
2023-09-14,186200\r
2023-09-27,142400\r
2023-09-29,142400\r
2023-09-30,142400\r
2023-10-02,143300\r
2023-10-04,143300\r
2023-10-05,143300\r
2023-10-07,142100\r
2023-10-10,144000\r
2023-10-12,142800\r
2023-10-15,145000\r
2023-11-06,148300\r
`;export{r as default};
