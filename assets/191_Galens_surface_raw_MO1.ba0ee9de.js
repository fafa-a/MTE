const r=`date,value\r
2017-01-03,274200\r
2017-02-22,247700\r
2017-02-25,272900\r
2017-03-17,210800\r
2017-03-27,286600\r
2017-04-06,311600\r
2017-04-23,333000\r
2017-05-16,233400\r
2017-05-26,295600\r
2017-06-02,301400\r
2017-06-25,328700\r
2017-07-07,327200\r
2017-07-17,312900\r
2017-08-04,321000\r
2017-08-14,330100\r
2017-08-19,313900\r
2017-08-21,323200\r
2017-08-29,307000\r
2017-09-20,316200\r
2017-10-05,325000\r
2017-10-10,320000\r
2017-10-13,325000\r
2017-10-15,324000\r
2017-10-25,315900\r
2017-10-28,308600\r
2017-10-30,313000\r
2017-11-17,301300\r
2017-11-19,307000\r
2017-11-22,310800\r
2017-12-24,322800\r
2018-01-28,315700\r
2018-02-12,231100\r
2018-02-25,287700\r
2018-03-14,319400\r
2018-03-22,325700\r
2018-04-06,217800\r
2018-04-21,300300\r
2018-04-26,308000\r
2018-05-11,330200\r
2018-06-10,293000\r
2018-06-20,310800\r
2018-06-22,310500\r
2018-06-25,321600\r
2018-06-27,315000\r
2018-07-02,316400\r
2018-07-10,323700\r
2018-07-15,316500\r
2018-07-30,308300\r
2018-08-01,268800\r
2018-08-06,320600\r
2018-08-11,305600\r
2018-08-19,316000\r
2018-08-21,308100\r
2018-08-26,304100\r
2018-09-03,308300\r
2018-09-08,309200\r
2018-09-10,309200\r
2018-09-20,315700\r
2018-09-28,243800\r
2018-10-05,252600\r
2018-10-20,298300\r
2018-10-23,296500\r
2018-10-25,292600\r
2018-10-30,193000\r
2018-11-22,305700\r
2018-11-29,305600\r
2018-12-19,315000\r
2018-12-27,302900\r
2019-01-01,258200\r
2019-01-03,262500\r
2019-01-06,283200\r
2019-01-16,257900\r
2019-02-05,31300\r
2019-02-12,37900\r
2019-02-15,194600\r
2019-02-17,232500\r
2019-02-20,230900\r
2019-02-22,262700\r
2019-02-25,290600\r
2019-02-27,265400\r
2019-03-22,240400\r
2019-03-24,251500\r
2019-03-27,221000\r
2019-03-29,226600\r
2019-04-01,218200\r
2019-04-13,230300\r
2019-05-01,324400\r
2019-05-06,327700\r
2019-05-13,322500\r
2019-05-23,330500\r
2019-05-31,308100\r
2019-06-02,318300\r
2019-06-17,324400\r
2019-06-27,312400\r
2019-06-30,329400\r
2019-07-02,330900\r
2019-07-05,337100\r
2019-07-10,332500\r
2019-07-15,328600\r
2019-07-22,306500\r
2019-07-25,328800\r
2019-08-04,314400\r
2019-08-09,323200\r
2019-08-14,301900\r
2019-08-16,298600\r
2019-08-21,295900\r
2019-08-24,306200\r
2019-08-26,320400\r
2019-09-03,221700\r
2019-09-13,204600\r
2019-09-18,236800\r
2019-10-08,301600\r
2019-12-02,321600\r
2020-01-06,219100\r
2020-01-11,243300\r
2020-01-16,238400\r
2020-01-18,254800\r
2020-02-05,298600\r
2020-02-07,296000\r
2020-02-20,213700\r
2020-02-22,188900\r
2020-03-11,332400\r
2020-03-18,312900\r
2020-03-21,282900\r
2020-03-28,194900\r
2020-03-31,174600\r
2020-04-05,251500\r
2020-04-10,309900\r
2020-04-15,326600\r
2020-05-07,313100\r
2020-05-17,250900\r
2020-05-20,293200\r
2020-05-22,313700\r
2020-05-25,325000\r
2020-06-21,319500\r
2020-06-24,331200\r
2020-06-26,316600\r
2020-07-01,332100\r
2020-07-04,333300\r
2020-07-06,327600\r
2020-07-09,327700\r
2020-07-11,327400\r
2020-07-19,326400\r
2020-07-24,326900\r
2020-07-29,331700\r
2020-07-31,308100\r
2020-08-05,306700\r
2020-08-08,323900\r
2020-08-15,316300\r
2020-08-20,306600\r
2020-08-25,243800\r
2020-09-04,164300\r
2020-09-14,158100\r
2020-09-17,172900\r
2020-11-11,297700\r
2020-11-18,298400\r
2020-11-21,292500\r
2020-11-23,273800\r
2021-01-07,8300\r
2021-01-10,12000\r
2021-01-17,271700\r
2021-02-14,321400\r
2021-02-19,322500\r
2021-02-24,319200\r
2021-02-26,299300\r
2021-03-01,297500\r
2021-03-21,262000\r
2021-03-23,240400\r
2021-03-28,264600\r
2021-03-31,255900\r
2021-04-02,274900\r
2021-04-15,274800\r
2021-04-17,268300\r
2021-05-27,306700\r
2021-06-16,250700\r
2021-06-26,266300\r
2021-07-01,252000\r
2021-07-11,258900\r
2021-07-19,247800\r
2021-07-21,248100\r
2021-08-10,266800\r
2021-08-13,254500\r
2021-08-20,240300\r
2021-08-30,239700\r
2021-09-22,242600\r
2021-09-24,248900\r
2021-10-07,246500\r
2021-10-12,244100\r
2021-10-14,242900\r
2021-10-17,237000\r
2021-10-27,239900\r
2021-11-11,241700\r
2021-12-11,293400\r
2021-12-16,248400\r
2021-12-18,242000\r
2021-12-21,247500\r
2022-01-15,251900\r
2022-01-17,279400\r
2022-01-22,264900\r
2022-01-25,251500\r
2022-01-27,245600\r
2022-01-30,240600\r
2022-02-09,253400\r
2022-03-01,298700\r
2022-03-08,187800\r
2022-03-23,146100\r
2022-03-26,140800\r
2022-04-10,101500\r
2022-04-15,194300\r
2022-04-17,202300\r
2022-05-17,224100\r
2022-05-27,282800\r
2022-06-01,301300\r
2022-06-06,313900\r
2022-06-11,311000\r
2022-06-19,322400\r
2022-07-06,321500\r
2022-07-11,319600\r
2022-07-14,320400\r
2022-07-16,321100\r
2022-07-19,317800\r
2022-07-24,320600\r
2022-07-26,321000\r
2022-07-31,304800\r
2022-08-03,306300\r
2022-08-05,296000\r
2022-08-08,228000\r
2022-08-10,233000\r
2022-08-13,245200\r
2022-08-28,223800\r
2022-08-30,234700\r
2022-09-04,222800\r
2022-09-12,237400\r
2022-09-19,274800\r
2022-09-22,271100\r
2022-10-04,303500\r
2022-10-07,312600\r
2022-10-09,304400\r
2022-10-22,304200\r
2022-10-24,305400\r
2022-11-11,296900\r
2022-11-13,322100\r
2022-12-06,302100\r
2023-01-20,228800\r
2023-02-04,202000\r
2023-02-14,162300\r
2023-02-16,169200\r
2023-03-06,224500\r
2023-03-16,329600\r
2023-03-28,230500\r
2023-04-05,271100\r
2023-04-07,247700\r
2023-05-27,255100\r
2023-06-16,301300\r
2023-06-24,308300\r
2023-07-09,325000\r
2023-07-14,324100\r
2023-07-31,314700\r
2023-08-15,299600\r
2023-08-20,308000\r
2023-08-23,304800\r
`;export{r as default};
