const r=`date,value\r
2017-02-19,146400\r
2017-03-01,162100\r
2017-03-11,161300\r
2017-04-10,164700\r
2017-05-30,163900\r
2017-06-09,164500\r
2017-06-19,165100\r
2017-07-04,165600\r
2017-07-14,166300\r
2017-07-24,157400\r
2017-07-29,165800\r
2017-08-03,162500\r
2017-08-13,161400\r
2017-08-18,163600\r
2017-09-02,155500\r
2017-09-07,165000\r
2017-09-12,159800\r
2017-09-17,152700\r
2017-09-27,156900\r
2017-10-07,151300\r
2017-10-12,141600\r
2017-10-17,146900\r
2017-10-27,145400\r
2017-11-16,151000\r
2017-11-21,147900\r
2017-11-26,153300\r
2017-12-06,149900\r
2017-12-16,140200\r
2017-12-21,145800\r
2018-01-05,153900\r
2018-01-20,160700\r
2018-02-04,149500\r
2018-02-09,145400\r
2018-02-14,161000\r
2018-04-05,155000\r
2018-04-15,163000\r
2018-04-20,155500\r
2018-04-25,160000\r
2018-04-30,158900\r
2018-05-10,163900\r
2018-05-20,164100\r
2018-05-25,164100\r
2018-06-09,164500\r
2018-06-19,163300\r
2018-06-29,164100\r
2018-07-04,163000\r
2018-07-09,159200\r
2018-07-19,161100\r
2018-07-24,159800\r
2018-07-29,165600\r
2018-08-23,159800\r
2018-09-02,163400\r
2018-09-07,161200\r
2018-09-27,161400\r
2018-10-02,155700\r
2018-11-26,150800\r
2018-12-01,154900\r
2018-12-06,152400\r
2018-12-11,144100\r
2019-01-05,128100\r
2019-01-10,111100\r
2019-01-15,121600\r
2019-01-25,124200\r
2019-01-30,127500\r
2019-02-04,97100\r
2019-02-14,140700\r
2019-03-01,130900\r
2019-03-11,132100\r
2019-03-16,136500\r
2019-03-21,119000\r
2019-03-31,133500\r
2019-04-05,140200\r
2019-04-15,155600\r
2019-04-20,159600\r
2019-04-30,156500\r
2019-05-05,141900\r
2019-05-10,134000\r
2019-06-04,154100\r
2019-06-19,160500\r
2019-06-24,142000\r
2019-06-29,140800\r
2019-07-04,156800\r
2019-07-14,146300\r
2019-07-19,141600\r
2019-07-24,142400\r
2019-07-29,151800\r
2019-08-03,144000\r
2019-08-08,129900\r
2019-08-18,153800\r
2019-08-23,141900\r
2019-09-02,146700\r
2019-09-07,136600\r
2019-09-12,132300\r
2019-09-17,145600\r
2019-09-27,114500\r
2019-10-02,145700\r
2019-10-07,91600\r
2019-10-27,125800\r
2019-11-16,144900\r
2019-12-06,116500\r
2019-12-21,111100\r
2019-12-26,141000\r
2020-01-05,123100\r
2020-02-04,118700\r
2020-02-09,143500\r
2020-02-14,122800\r
2020-02-19,139000\r
2020-02-24,132700\r
2020-03-20,151200\r
2020-04-04,136700\r
2020-04-09,153200\r
2020-04-14,150000\r
2020-04-24,157000\r
2020-04-29,150700\r
2020-05-04,163700\r
2020-05-19,157400\r
2020-05-24,152000\r
2020-06-08,164400\r
2020-06-23,158300\r
2020-06-28,162000\r
2020-07-03,150600\r
2020-07-08,148300\r
2020-07-13,166000\r
2020-07-18,158500\r
2020-07-23,155700\r
2020-08-02,154000\r
2020-08-07,144300\r
2020-08-22,157100\r
2020-08-27,141700\r
2020-09-01,147500\r
2020-09-06,142800\r
2020-09-16,145600\r
2020-09-26,135900\r
2020-10-11,133500\r
2020-11-05,113500\r
2020-11-20,128200\r
2020-12-30,130900\r
2021-01-09,151900\r
2021-01-14,131700\r
2021-01-19,148900\r
2021-01-24,148400\r
2021-01-29,144400\r
2021-02-03,158800\r
2021-02-23,150300\r
2021-02-28,153800\r
2021-03-05,151200\r
2021-03-10,153800\r
2021-03-20,155000\r
2021-03-25,153800\r
2021-03-30,156500\r
2021-04-19,160600\r
2021-05-04,160100\r
2021-06-13,162900\r
2021-07-18,164400\r
2021-07-23,166400\r
2021-08-02,157200\r
2021-08-17,164900\r
2021-08-22,159800\r
2021-08-27,163800\r
2021-09-01,159600\r
2021-09-06,161200\r
2021-09-11,161400\r
2021-10-11,153600\r
2021-10-26,153100\r
2021-11-05,148200\r
2021-11-20,148100\r
2021-11-30,141800\r
2021-12-20,141500\r
2022-01-14,144500\r
2022-01-24,158900\r
2022-01-29,138700\r
2022-02-08,143700\r
2022-02-18,150700\r
2022-02-23,151200\r
2022-03-25,157300\r
2022-04-09,154600\r
2022-04-19,160000\r
2022-05-04,159100\r
2022-05-09,166200\r
2022-05-14,165900\r
2022-05-29,166300\r
2022-06-03,164100\r
2022-06-13,163700\r
2022-06-28,164200\r
2022-07-03,164800\r
2022-07-08,161300\r
2022-07-13,165800\r
2022-07-18,165700\r
2022-08-02,164700\r
2022-08-07,161000\r
2022-08-12,159500\r
2022-08-22,163700\r
2022-08-27,163600\r
2022-09-11,164300\r
2022-09-16,157100\r
2022-09-26,157900\r
2022-11-05,145700\r
2022-11-20,143000\r
2022-11-25,150700\r
2022-11-30,148500\r
2022-12-05,148200\r
2022-12-10,144200\r
2022-12-25,153300\r
2023-01-04,142500\r
2023-01-09,149800\r
2023-01-29,151400\r
2023-02-03,147500\r
2023-02-08,148000\r
2023-02-13,151600\r
2023-02-18,150600\r
2023-03-05,151700\r
2023-03-10,153100\r
2023-03-30,165100\r
2023-04-14,158300\r
2023-04-19,157800\r
2023-04-29,155400\r
2023-05-04,163400\r
2023-05-24,164400\r
2023-06-13,164800\r
2023-06-18,164500\r
2023-06-23,162200\r
2023-06-28,166400\r
2023-07-03,166400\r
2023-07-08,166400\r
2023-07-13,164000\r
2023-07-18,166400\r
2023-07-23,165800\r
2023-07-28,158100\r
2023-08-02,164700\r
2023-08-12,166400\r
2023-08-22,164300\r
`;export{r as default};
