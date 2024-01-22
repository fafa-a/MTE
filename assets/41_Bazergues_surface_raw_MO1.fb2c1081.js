const r=`date,value\r
2017-01-26,7900\r
2017-02-15,74400\r
2017-02-25,72000\r
2017-03-17,87700\r
2017-03-27,86600\r
2017-04-03,94200\r
2017-05-16,119800\r
2017-05-26,89700\r
2017-06-22,93800\r
2017-06-25,88500\r
2017-07-05,104000\r
2017-07-07,82800\r
2017-07-17,96700\r
2017-08-14,84200\r
2017-08-21,85800\r
2017-08-24,83200\r
2017-08-29,80000\r
2017-10-05,60900\r
2017-10-13,61000\r
2017-10-15,65500\r
2017-10-18,60200\r
2017-11-17,53400\r
2017-11-22,47100\r
2018-01-13,86900\r
2018-02-10,48900\r
2018-02-25,101700\r
2018-02-27,88400\r
2018-03-14,91500\r
2018-04-13,104000\r
2018-04-18,96700\r
2018-04-21,96600\r
2018-05-06,85100\r
2018-05-08,97700\r
2018-05-11,90500\r
2018-05-26,87600\r
2018-06-20,94700\r
2018-06-22,99400\r
2018-06-25,99200\r
2018-06-27,96400\r
2018-07-07,90200\r
2018-07-12,91100\r
2018-07-27,90500\r
2018-07-30,95100\r
2018-08-06,88800\r
2018-08-11,83100\r
2018-08-19,76800\r
2018-08-26,86200\r
2018-09-08,72500\r
2018-09-10,78100\r
2018-09-18,78600\r
2018-09-20,83300\r
2018-09-25,77100\r
2018-09-28,68700\r
2018-09-30,77700\r
2018-10-05,68000\r
2018-10-13,63100\r
2018-10-18,63600\r
2018-10-20,72000\r
2018-10-30,59200\r
2018-11-14,54000\r
2018-11-22,58600\r
2018-11-24,58100\r
2019-02-15,38800\r
2019-02-17,49300\r
2019-02-20,52000\r
2019-02-22,48700\r
2019-02-25,38300\r
2019-02-27,53600\r
2019-03-22,45900\r
2019-03-29,45800\r
2019-05-01,52700\r
2019-05-13,43200\r
2019-05-23,50100\r
2019-05-31,48400\r
2019-06-02,42300\r
2019-06-17,51800\r
2019-06-27,41000\r
2019-06-30,49600\r
2019-07-02,38900\r
2019-07-05,43800\r
2019-07-10,42900\r
2019-07-15,41100\r
2019-07-17,40400\r
2019-07-22,39700\r
2019-08-04,34100\r
2019-08-09,21000\r
2019-08-14,32000\r
2019-08-24,28300\r
2019-08-26,31500\r
2019-08-29,33400\r
2019-09-03,29800\r
2019-09-10,28900\r
2019-09-13,25700\r
2019-09-15,29200\r
2019-09-18,26300\r
2019-09-20,27900\r
2019-10-03,24700\r
2019-10-08,34000\r
2019-10-13,24000\r
2019-11-04,35300\r
2019-11-22,34400\r
2019-12-04,38900\r
2020-01-06,74500\r
2020-01-16,82700\r
2020-02-15,84300\r
2020-02-20,81200\r
2020-02-22,88000\r
2020-03-18,88900\r
2020-03-23,96100\r
2020-03-26,99500\r
2020-03-28,108500\r
2020-03-31,99100\r
2020-04-02,98800\r
2020-04-05,89600\r
2020-04-10,86600\r
2020-04-15,100500\r
2020-05-07,86800\r
2020-05-17,76200\r
2020-05-20,101300\r
2020-05-25,98100\r
2020-05-27,93200\r
2020-05-30,110300\r
2020-06-26,94100\r
2020-07-04,104900\r
2020-07-09,102700\r
2020-07-19,113200\r
2020-07-24,107700\r
2020-07-29,104900\r
2020-07-31,107500\r
2020-08-08,101100\r
2020-08-20,100200\r
2020-08-25,86900\r
2020-09-04,94400\r
2020-09-09,94100\r
2020-09-12,76100\r
2020-09-14,84900\r
2020-09-17,78000\r
2020-11-11,70800\r
2020-11-18,74400\r
2020-11-28,69800\r
2020-12-11,78900\r
2020-12-18,74600\r
2021-02-14,90400\r
2021-02-21,85000\r
2021-02-24,93500\r
2021-03-01,85500\r
2021-03-06,97500\r
2021-03-28,103700\r
2021-03-31,101000\r
2021-04-02,91600\r
2021-04-15,97900\r
2021-04-27,108400\r
2021-05-27,81700\r
2021-05-30,105200\r
2021-06-01,92000\r
2021-06-14,106000\r
2021-06-16,101900\r
2021-06-26,88400\r
2021-07-19,97500\r
2021-07-21,93100\r
2021-09-07,101200\r
2021-09-12,102000\r
2021-09-22,90400\r
2021-09-24,98000\r
2021-10-02,99900\r
2021-10-14,94800\r
2021-10-17,89600\r
2021-10-19,91200\r
2021-10-22,88100\r
2021-10-24,94000\r
2021-10-27,89400\r
2021-12-21,87400\r
2021-12-23,84900\r
2022-01-15,86000\r
2022-01-25,90500\r
2022-02-09,86600\r
2022-02-26,82400\r
2022-03-06,86600\r
2022-03-08,90300\r
2022-03-26,89900\r
2022-04-17,101100\r
2022-05-15,106600\r
2022-05-17,94800\r
2022-05-30,96200\r
2022-06-11,101500\r
2022-06-16,96400\r
2022-06-29,103200\r
2022-07-06,92900\r
2022-07-11,102500\r
2022-07-14,101100\r
2022-07-16,102500\r
2022-07-19,95700\r
2022-07-21,85200\r
2022-07-24,100600\r
2022-07-31,100700\r
2022-08-03,96300\r
2022-08-08,94300\r
2022-08-10,98700\r
2022-08-13,94000\r
2022-08-18,99700\r
2022-08-25,88100\r
2022-09-04,88200\r
2022-09-12,93900\r
2022-09-19,80900\r
2022-09-22,83300\r
2022-10-04,81000\r
2022-10-09,84000\r
2022-10-22,76600\r
2022-11-11,71100\r
2022-12-08,64300\r
2022-12-28,63200\r
2023-01-15,57700\r
2023-02-09,62000\r
2023-02-11,51700\r
2023-02-14,55300\r
2023-04-05,59600\r
2023-04-20,59300\r
2023-06-01,79300\r
2023-06-04,83200\r
2023-06-14,90800\r
2023-06-16,89300\r
2023-06-24,85200\r
2023-07-09,87700\r
2023-07-31,78700\r
2023-08-08,71200\r
2023-08-18,73600\r
2023-08-20,87500\r
2023-08-23,79700\r
2023-09-04,77200\r
2023-09-07,78100\r
2023-09-09,74400\r
2023-10-02,57100\r
2023-10-07,61000\r
2023-10-09,59400\r
2023-11-08,52600\r
2023-12-16,82200\r
2023-12-26,93100\r
`;export{r as default};
