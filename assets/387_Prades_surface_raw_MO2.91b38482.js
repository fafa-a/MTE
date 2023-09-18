const r=`date,value\r
2017-02-15,47800\r
2017-02-22,47800\r
2017-02-25,84500\r
2017-03-17,90700\r
2017-03-27,84200\r
2017-04-03,85200\r
2017-04-23,89300\r
2017-05-03,89300\r
2017-05-16,90500\r
2017-05-23,91000\r
2017-05-26,86600\r
2017-06-02,85500\r
2017-06-05,87300\r
2017-06-15,90700\r
2017-06-22,89400\r
2017-06-25,88700\r
2017-07-02,88800\r
2017-07-05,92100\r
2017-07-07,92100\r
2017-07-12,91800\r
2017-07-17,95300\r
2017-08-06,91800\r
2017-08-11,91800\r
2017-08-14,92500\r
2017-08-19,91000\r
2017-08-21,87100\r
2017-08-24,87100\r
2017-08-26,91300\r
2017-08-29,92400\r
2017-09-03,92900\r
2017-10-05,88300\r
2017-10-10,88300\r
2017-10-13,90400\r
2017-10-15,89000\r
2017-10-18,91000\r
2017-10-25,90100\r
2017-10-28,89300\r
2017-10-30,91100\r
2017-11-17,85200\r
2017-11-19,85200\r
2017-11-22,87500\r
2017-11-27,87500\r
2018-01-23,84900\r
2018-01-28,88100\r
2018-01-31,84800\r
2018-02-27,83400\r
2018-03-14,88300\r
2018-03-19,88300\r
2018-03-22,88300\r
2018-05-06,88800\r
2018-05-08,88800\r
2018-05-11,91300\r
2018-05-18,87200\r
2018-05-21,87500\r
2018-06-20,90800\r
2018-06-22,93500\r
2018-06-25,89900\r
2018-06-27,92300\r
2018-07-02,92500\r
2018-07-07,90000\r
2018-07-10,91000\r
2018-07-12,89500\r
2018-07-15,89800\r
2018-07-17,89800\r
2018-07-20,90100\r
2018-07-22,90100\r
2018-07-25,89900\r
2018-07-27,92000\r
2018-07-30,90500\r
2018-08-01,91600\r
2018-08-04,91600\r
2018-08-06,91100\r
2018-08-11,87900\r
2018-08-16,88000\r
2018-08-19,87100\r
2018-08-21,87100\r
2018-08-26,88400\r
2018-09-05,88600\r
2018-09-08,89900\r
2018-09-10,89200\r
2018-09-13,92100\r
2018-09-18,91800\r
2018-09-20,91200\r
2018-09-23,91600\r
2018-09-25,93900\r
2018-09-28,90400\r
2018-10-05,90100\r
2018-10-18,84800\r
2018-10-20,91600\r
2018-10-23,91600\r
2018-10-25,91600\r
2018-10-30,90500\r
2018-11-04,82900\r
2018-11-09,82900\r
2018-11-14,79200\r
2018-11-22,81000\r
2018-11-24,81000\r
2018-11-27,70400\r
2018-12-27,60300\r
2018-12-29,60300\r
2019-02-05,2400\r
2019-02-10,2400\r
2019-02-12,4900\r
2019-02-15,79300\r
2019-02-17,77700\r
2019-02-20,80900\r
2019-02-22,82400\r
2019-02-25,81600\r
2019-02-27,82100\r
2019-03-04,81500\r
2019-03-07,84000\r
2019-03-22,83500\r
2019-03-24,90500\r
2019-03-27,85000\r
2019-03-29,87600\r
2019-04-01,87600\r
2019-04-08,87400\r
2019-04-13,88800\r
2019-05-13,86000\r
2019-05-16,87700\r
2019-05-23,86500\r
2019-05-26,86500\r
2019-05-31,86700\r
2019-06-02,84300\r
2019-06-05,84300\r
2019-06-12,89900\r
2019-06-17,89600\r
2019-06-27,89700\r
2019-06-30,89600\r
2019-07-02,89600\r
2019-07-05,91400\r
2019-07-07,92000\r
2019-07-10,91200\r
2019-07-12,92000\r
2019-07-15,93500\r
2019-07-17,93100\r
2019-07-20,92600\r
2019-07-22,91300\r
2019-07-25,91500\r
2019-08-01,93900\r
2019-08-04,94600\r
2019-08-06,92300\r
2019-08-09,95200\r
2019-08-11,93300\r
2019-08-14,94500\r
2019-08-16,94500\r
2019-08-24,93200\r
2019-08-26,91700\r
2019-08-29,91700\r
2019-08-31,89500\r
2019-09-03,91400\r
2019-09-13,90300\r
2019-09-15,91100\r
2019-09-18,90100\r
2019-09-20,89900\r
2019-09-30,95500\r
2019-10-03,91500\r
2019-12-29,83700\r
2020-01-06,80900\r
2020-01-16,83100\r
2020-01-18,83100\r
2020-01-21,82500\r
2020-01-26,86600\r
2020-02-07,88200\r
2020-02-12,88200\r
2020-02-15,89600\r
2020-02-20,84100\r
2020-02-22,84600\r
2020-03-28,89200\r
2020-03-31,89200\r
2020-04-02,86600\r
2020-04-05,86700\r
2020-04-07,86500\r
2020-04-10,87600\r
2020-04-12,87600\r
2020-04-15,86000\r
2020-04-27,83400\r
2020-05-07,88200\r
2020-05-17,89900\r
2020-05-20,87400\r
2020-05-22,87400\r
2020-05-25,87800\r
2020-05-27,87900\r
2020-05-30,87400\r
2020-06-01,87400\r
2020-06-14,92600\r
2020-06-26,89200\r
2020-06-29,89200\r
2020-07-01,94100\r
2020-07-04,91200\r
2020-07-06,91200\r
2020-07-09,92600\r
2020-07-11,90500\r
2020-07-14,92100\r
2020-07-19,91600\r
2020-07-21,93800\r
2020-07-24,91600\r
2020-07-26,93100\r
2020-07-29,93100\r
2020-07-31,91100\r
2020-08-05,90400\r
2020-08-08,87400\r
2020-08-10,87200\r
2020-08-15,90300\r
2020-08-18,86800\r
2020-08-20,89500\r
2020-08-25,87000\r
2020-09-02,94000\r
2020-09-04,91900\r
2020-09-07,92000\r
2020-09-09,92900\r
2020-09-12,91600\r
2020-09-14,91300\r
2020-09-17,91400\r
2020-11-18,85100\r
2020-11-21,85600\r
2020-11-23,85200\r
2020-11-26,85200\r
2020-11-28,85200\r
2020-12-18,80300\r
2020-12-28,80300\r
2021-02-14,84600\r
2021-02-21,86500\r
2021-02-24,85100\r
2021-02-26,85400\r
2021-03-01,87500\r
2021-03-06,86500\r
2021-03-23,88700\r
2021-03-28,89800\r
2021-03-31,87600\r
2021-04-02,89600\r
2021-04-05,87200\r
2021-04-07,87100\r
2021-04-12,87800\r
2021-05-27,85400\r
2021-05-30,90700\r
2021-06-01,87200\r
2021-06-09,92400\r
2021-06-11,88400\r
2021-06-14,87800\r
2021-06-16,92100\r
2021-06-26,90900\r
2021-07-19,93100\r
2021-07-21,88200\r
2021-07-29,87300\r
2021-08-05,87500\r
2021-08-08,87500\r
2021-08-10,91300\r
2021-08-13,91300\r
2021-08-15,91500\r
2021-08-20,89000\r
2021-08-25,87700\r
2021-08-28,87300\r
2021-09-02,90600\r
2021-09-04,90600\r
2021-09-07,89600\r
2021-09-12,89100\r
2021-09-24,87000\r
2021-10-14,83400\r
2021-10-17,84500\r
2021-10-19,79300\r
2021-10-22,79300\r
2021-10-24,79400\r
2021-10-27,73000\r
2021-12-23,74800\r
2022-01-25,83100\r
2022-01-27,88900\r
2022-02-09,85400\r
2022-02-11,86900\r
2022-02-19,84600\r
2022-02-26,84700\r
2022-03-01,84700\r
2022-03-06,87000\r
2022-03-08,84000\r
2022-03-26,89800\r
2022-04-17,87600\r
2022-04-22,92000\r
2022-04-27,88600\r
2022-04-30,92200\r
2022-05-02,92200\r
2022-05-07,90100\r
2022-05-12,89200\r
2022-05-15,89200\r
2022-05-17,89200\r
2022-06-04,85800\r
2022-06-06,85800\r
2022-06-11,91200\r
2022-06-16,91700\r
2022-06-19,91000\r
2022-06-21,91000\r
2022-06-29,90400\r
2022-07-01,86800\r
2022-07-06,88600\r
2022-07-11,90900\r
2022-07-14,89400\r
2022-07-16,90600\r
2022-07-19,92500\r
2022-07-21,90700\r
2022-07-24,90800\r
2022-07-26,92000\r
2022-07-31,90500\r
2022-08-03,90800\r
2022-08-05,94400\r
2022-08-08,93300\r
2022-08-10,90800\r
2022-08-13,92700\r
2022-08-25,94200\r
2022-08-28,94200\r
2022-08-30,94200\r
2022-09-02,94200\r
2022-09-04,95000\r
2022-09-09,93500\r
2022-09-12,93700\r
2022-09-14,93700\r
2022-09-19,91600\r
2022-09-22,87000\r
2022-10-02,86100\r
2022-10-04,92000\r
2022-10-07,92000\r
2022-10-09,93900\r
2022-10-12,93900\r
2022-10-22,85600\r
2022-11-11,64600\r
2022-11-13,64600\r
2022-12-06,67600\r
2022-12-08,68300\r
2022-12-11,66000\r
2022-12-13,66000\r
2022-12-18,65800\r
2023-02-09,84000\r
2023-02-11,89000\r
2023-02-14,85000\r
2023-02-16,86200\r
2023-02-21,85400\r
2023-02-26,85100\r
2023-04-05,84700\r
2023-04-07,84700\r
2023-05-27,61500\r
2023-05-30,61500\r
2023-06-01,63600\r
2023-06-04,63600\r
2023-06-06,63600\r
2023-06-14,87700\r
2023-06-16,87700\r
2023-06-19,92900\r
2023-06-24,88500\r
2023-06-26,95000\r
2023-07-06,91500\r
2023-07-09,92700\r
2023-07-11,92200\r
2023-07-14,93000\r
2023-07-16,93000\r
2023-07-19,92600\r
2023-07-26,91100\r
2023-07-31,89600\r
2023-08-08,92000\r
2023-08-15,93500\r
2023-08-23,96500\r
2023-08-25,96500\r
`;export{r as default};
