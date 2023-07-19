const r=`date,value\r
2017-01-26,52000\r
2017-01-29,55500\r
2017-02-15,71900\r
2017-02-18,72800\r
2017-02-25,73300\r
2017-03-10,80300\r
2017-03-30,83100\r
2017-04-06,90200\r
2017-04-09,87800\r
2017-04-19,83500\r
2017-04-29,94000\r
2017-05-09,92800\r
2017-05-16,85600\r
2017-05-26,94800\r
2017-06-18,95400\r
2017-07-05,98000\r
2017-07-18,97300\r
2017-08-02,91400\r
2017-08-12,89400\r
2017-08-14,93100\r
2017-08-22,84100\r
2017-09-01,88100\r
2017-09-03,91800\r
2017-09-06,46800\r
2017-09-21,86000\r
2017-10-08,86100\r
2017-10-11,85100\r
2017-10-13,85800\r
2017-10-16,83500\r
2017-10-23,86000\r
2017-10-26,84400\r
2017-10-31,84700\r
2017-11-07,85000\r
2017-11-17,83100\r
2017-11-20,85100\r
2017-11-22,86500\r
2017-11-30,84300\r
2017-12-05,82400\r
2017-12-12,84200\r
2017-12-20,85300\r
2017-12-25,83100\r
2018-01-09,97400\r
2018-01-24,100700\r
2018-02-10,100000\r
2018-02-15,101200\r
2018-03-02,95200\r
2018-03-15,95100\r
2018-03-22,99300\r
2018-03-30,79200\r
2018-04-06,88200\r
2018-04-19,93200\r
2018-04-21,98800\r
2018-05-06,88000\r
2018-05-11,101400\r
2018-05-21,100200\r
2018-05-24,89800\r
2018-06-20,97700\r
2018-06-23,91900\r
2018-06-25,94200\r
2018-07-13,88900\r
2018-07-23,90400\r
2018-07-25,91100\r
2018-08-02,87200\r
2018-08-04,84400\r
2018-08-12,80500\r
2018-08-19,79700\r
2018-08-22,73800\r
2018-08-27,69100\r
2018-09-01,62500\r
2018-09-03,57500\r
2018-09-08,60400\r
2018-09-11,57100\r
2018-09-16,57600\r
2018-09-23,56300\r
2018-09-26,55400\r
2018-10-03,55600\r
2018-10-23,54500\r
2018-11-15,56300\r
2018-11-22,58800\r
2018-12-27,60200\r
2019-01-16,67900\r
2019-02-13,78600\r
2019-02-15,90400\r
2019-02-20,91600\r
2019-02-23,90400\r
2019-02-25,89700\r
2019-03-20,85200\r
2019-03-22,86000\r
2019-03-27,90300\r
2019-03-30,85000\r
2019-05-01,82900\r
2019-05-06,85400\r
2019-05-14,91100\r
2019-06-08,88900\r
2019-06-13,84100\r
2019-06-28,95000\r
2019-07-05,89000\r
2019-07-15,93700\r
2019-07-23,88400\r
2019-07-25,87200\r
2019-08-04,87600\r
2019-08-09,85300\r
2019-08-14,84800\r
2019-08-17,82100\r
2019-08-22,83200\r
2019-08-24,87100\r
2019-08-29,84900\r
2019-09-11,75800\r
2019-09-13,78400\r
2019-09-16,77000\r
2019-10-08,72400\r
2019-10-11,66500\r
2019-10-13,71000\r
2019-12-05,92400\r
2019-12-10,87100\r
2019-12-15,77200\r
2019-12-25,88100\r
2019-12-30,87400\r
2020-01-09,90100\r
2020-01-11,90200\r
2020-01-14,90800\r
2020-01-19,89200\r
2020-01-31,96700\r
2020-02-05,90800\r
2020-02-15,86900\r
2020-02-20,88900\r
2020-03-21,97300\r
2020-03-24,93700\r
2020-03-26,92000\r
2020-04-03,95500\r
2020-04-05,93200\r
2020-04-08,94600\r
2020-04-10,97900\r
2020-05-05,96600\r
2020-05-18,91600\r
2020-05-20,94900\r
2020-05-25,91900\r
2020-05-28,96300\r
2020-05-30,95000\r
2020-06-12,88100\r
2020-06-24,90600\r
2020-07-07,97000\r
2020-07-19,82000\r
2020-07-22,80000\r
2020-07-24,72900\r
2020-07-27,74400\r
2020-08-06,59300\r
2020-08-18,57200\r
2020-09-02,50300\r
2020-09-12,42500\r
2020-09-17,46500\r
2020-09-30,43600\r
2020-10-30,78700\r
2020-11-11,85700\r
2020-11-14,81800\r
2020-11-21,83500\r
2020-11-26,82600\r
2020-11-29,75600\r
2020-12-26,87800\r
2021-01-03,95900\r
2021-01-18,92700\r
2021-02-17,65700\r
2021-02-19,90200\r
2021-02-24,99100\r
2021-02-27,98100\r
2021-03-01,99100\r
2021-03-04,100100\r
2021-03-21,92800\r
2021-03-24,89900\r
2021-03-29,93600\r
2021-03-31,95100\r
2021-04-03,94900\r
2021-04-08,95800\r
2021-04-15,100200\r
2021-04-23,97800\r
2021-05-03,90500\r
2021-05-28,91000\r
2021-06-09,89500\r
2021-06-14,95200\r
2021-07-22,86800\r
2021-08-11,87600\r
2021-08-23,73400\r
2021-08-26,69000\r
2021-08-31,60600\r
2021-09-05,52800\r
2021-09-12,54800\r
2021-10-07,55500\r
2021-10-12,54000\r
2021-10-15,52700\r
2021-10-17,50800\r
2021-10-27,51700\r
2021-11-09,54600\r
2021-11-11,55100\r
2021-11-19,54700\r
2021-12-14,89900\r
2021-12-19,88900\r
2022-01-13,86100\r
2022-01-15,85900\r
2022-01-23,91900\r
2022-01-25,90200\r
2022-02-09,91500\r
2022-02-22,99900\r
2022-03-21,93700\r
2022-04-05,92100\r
2022-05-08,92300\r
2022-05-10,92500\r
2022-05-28,90700\r
2022-06-17,84500\r
2022-06-24,90700\r
2022-07-02,88700\r
2022-07-07,84300\r
2022-07-12,88400\r
2022-07-14,87000\r
2022-07-17,84400\r
2022-07-24,73300\r
2022-08-01,68200\r
2022-08-06,49100\r
2022-08-11,42200\r
2022-08-28,34900\r
2022-09-05,29300\r
2022-09-10,28800\r
2022-09-20,29000\r
2022-09-22,29300\r
2022-10-07,29700\r
2022-10-15,30400\r
2022-10-22,26900\r
2022-11-01,30100\r
2022-11-06,28400\r
2022-11-16,28100\r
2022-12-04,54700\r
2022-12-11,52800\r
2022-12-21,62500\r
2023-01-03,64800\r
2023-01-10,70700\r
2023-02-02,89000\r
2023-02-04,90400\r
2023-02-09,87200\r
2023-02-12,87900\r
2023-02-17,88400\r
2023-02-24,77800\r
2023-03-01,91300\r
2023-04-05,95800\r
2023-04-18,82300\r
2023-05-05,83000\r
2023-05-28,85100\r
2023-06-02,92000\r
2023-06-24,97700\r
2023-06-27,94300\r
2023-07-07,94400\r
`;export{r as default};
