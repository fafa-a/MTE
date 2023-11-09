const r=`date,value\r
2017-02-19,17800\r
2017-02-22,17800\r
2017-03-01,17800\r
2017-05-30,79200\r
2017-06-02,79200\r
2017-06-09,80400\r
2017-07-04,76400\r
2017-07-07,76400\r
2017-07-12,76400\r
2017-07-14,81400\r
2017-07-17,81400\r
2017-07-19,81400\r
2017-07-22,81400\r
2017-07-24,81400\r
2017-08-03,77700\r
2017-08-06,77700\r
2017-08-11,77700\r
2017-08-13,77700\r
2017-08-18,70900\r
2017-08-21,70900\r
2017-08-23,80800\r
2017-08-26,80800\r
2017-09-02,77200\r
2017-09-07,77700\r
2017-09-10,77700\r
2017-09-12,77700\r
2017-09-17,77700\r
2017-09-22,45900\r
2017-09-25,45900\r
2017-09-27,45900\r
2017-10-02,45900\r
2017-10-07,74400\r
2017-10-10,74400\r
2017-10-12,78700\r
2017-10-15,78700\r
2017-10-17,74900\r
2017-10-22,78900\r
2017-10-25,72100\r
2017-10-27,72100\r
2017-11-16,82500\r
2017-11-19,82500\r
2017-11-21,93800\r
2017-11-26,93800\r
2018-02-24,28400\r
2018-05-25,500\r
2018-05-28,500\r
2018-06-14,79400\r
2018-06-19,81800\r
2018-06-22,81800\r
2018-06-27,78300\r
2018-06-29,78300\r
2018-07-29,78500\r
2018-08-01,78500\r
2018-08-03,78500\r
2018-08-06,75900\r
2018-08-08,75900\r
2018-08-28,78400\r
2018-08-31,78400\r
2018-09-02,78400\r
2018-09-05,78400\r
2018-09-07,78400\r
2018-09-22,48300\r
2018-09-25,48300\r
2018-09-27,79200\r
2018-10-02,79200\r
2018-10-05,74900\r
2018-10-22,73700\r
2018-10-25,73600\r
2018-10-30,73600\r
2018-11-01,73600\r
2019-05-30,1300\r
2019-06-02,1300\r
2019-06-04,7000\r
2019-06-07,7000\r
2019-06-12,7000\r
2019-06-29,76400\r
2019-07-02,76400\r
2019-07-04,76400\r
2019-07-07,76400\r
2019-07-12,76400\r
2019-07-14,78200\r
2019-07-17,75400\r
2019-07-19,77600\r
2019-07-22,77600\r
2019-07-24,75300\r
2019-07-29,76600\r
2019-08-01,75300\r
2019-08-03,76900\r
2019-08-06,74600\r
2019-08-08,77400\r
2019-08-11,75300\r
2019-08-16,79600\r
2019-08-18,79600\r
2019-08-21,75600\r
2019-08-23,75700\r
2019-09-07,78600\r
2019-09-12,79500\r
2019-09-15,79500\r
2019-09-17,77000\r
2019-09-20,76400\r
2019-09-25,78300\r
2019-09-27,75200\r
2019-09-30,76900\r
2019-10-02,76900\r
2019-10-05,75800\r
2019-10-07,77400\r
2019-10-10,77400\r
2020-05-14,900\r
2020-05-19,900\r
2020-05-22,73700\r
2020-05-24,68400\r
2020-05-27,83400\r
2020-05-29,77700\r
2020-06-03,77700\r
2020-06-06,81800\r
2020-07-08,78100\r
2020-07-11,78100\r
2020-07-16,78100\r
2020-07-18,78500\r
2020-07-21,78500\r
2020-07-23,77100\r
2020-07-26,78500\r
2020-07-28,77000\r
2020-07-31,77000\r
2020-08-02,77000\r
2020-08-05,79200\r
2020-08-07,75900\r
2020-08-10,77700\r
2020-08-12,74800\r
2020-08-15,75300\r
2020-08-20,75300\r
2020-08-22,74700\r
2020-08-25,71300\r
2020-08-27,74800\r
2020-09-01,78300\r
2020-09-04,78300\r
2020-09-06,77600\r
2020-09-14,81700\r
2020-09-16,77500\r
2020-09-26,72200\r
2020-09-29,72200\r
2020-11-10,84100\r
2020-11-15,84100\r
2020-11-18,84100\r
2020-11-20,84100\r
2020-11-23,82600\r
2020-11-25,85300\r
2021-07-23,81600\r
2021-07-26,81600\r
2021-07-28,81600\r
2021-08-02,79300\r
2021-08-05,78500\r
2021-08-10,78500\r
2021-08-12,79300\r
2021-08-15,77900\r
2021-08-17,80200\r
2021-08-20,80200\r
2021-08-22,80200\r
2021-08-25,79400\r
2021-08-27,81300\r
2021-08-30,80800\r
2021-09-01,82500\r
2021-09-06,82500\r
2021-09-11,80900\r
2021-09-21,80100\r
2021-09-24,79600\r
2021-09-29,79600\r
2021-10-01,79600\r
2021-10-06,77400\r
2021-10-09,77400\r
2021-10-11,78600\r
2021-10-14,77500\r
2021-10-16,79200\r
2021-10-21,78200\r
2021-10-24,76800\r
2021-10-26,76800\r
2021-10-29,75300\r
2021-11-05,82200\r
2022-05-19,79100\r
2022-05-22,79100\r
2022-05-27,79100\r
2022-05-29,80300\r
2022-06-01,78100\r
2022-06-06,78100\r
2022-06-13,80300\r
2022-06-16,80300\r
2022-06-18,80300\r
2022-06-21,80300\r
2022-07-08,81500\r
2022-07-11,81500\r
2022-07-13,81500\r
2022-07-16,80100\r
2022-07-18,80600\r
2022-07-21,79100\r
2022-07-26,79100\r
2022-07-28,79300\r
2022-07-31,77700\r
2022-08-02,78200\r
2022-08-05,78200\r
2022-08-07,78200\r
2022-08-10,77200\r
2022-08-12,77600\r
2022-08-20,75800\r
2022-08-22,82100\r
2022-08-25,82100\r
2022-08-27,82100\r
2022-09-01,82100\r
2022-09-04,76600\r
2022-09-06,76600\r
2022-09-09,76600\r
2022-09-11,77100\r
2022-09-16,77200\r
2022-09-19,77200\r
2022-09-21,75800\r
2022-09-26,76300\r
2022-10-04,75200\r
2022-10-06,78400\r
2022-10-11,77800\r
2022-10-16,77800\r
2022-10-19,75200\r
2022-10-26,65400\r
2022-10-31,72900\r
2022-11-05,79500\r
2022-11-10,84900\r
2022-11-18,87600\r
2022-11-20,94900\r
2023-06-23,76700\r
2023-06-26,76700\r
2023-06-28,81500\r
2023-07-03,80400\r
2023-07-06,80400\r
2023-07-08,80400\r
2023-07-11,80400\r
2023-07-13,80400\r
2023-07-18,80100\r
2023-07-21,80100\r
2023-07-23,80100\r
2023-07-26,80100\r
2023-07-28,80100\r
2023-07-31,74400\r
2023-08-02,77700\r
2023-08-05,77700\r
2023-08-07,76100\r
2023-08-10,77400\r
2023-08-12,76300\r
2023-08-15,77000\r
2023-08-17,76300\r
2023-08-22,75100\r
2023-08-25,76100\r
2023-08-30,74300\r
2023-09-01,77800\r
2023-09-04,77200\r
2023-09-06,80900\r
2023-09-11,80200\r
2023-09-19,80600\r
2023-09-26,79300\r
2023-09-29,79300\r
2023-10-01,80700\r
2023-10-04,80700\r
2023-10-06,77700\r
2023-10-09,79000\r
2023-10-11,76700\r
2023-10-21,75900\r
`;export{r as default};
