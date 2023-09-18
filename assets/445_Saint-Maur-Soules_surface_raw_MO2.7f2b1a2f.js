const r=`date,value\r
2017-01-26,35700\r
2017-01-29,35700\r
2017-02-15,36400\r
2017-02-18,36400\r
2017-02-25,38000\r
2017-04-06,49100\r
2017-04-09,49100\r
2017-05-16,57100\r
2017-05-19,57100\r
2017-05-26,57500\r
2017-06-05,59800\r
2017-07-05,60000\r
2017-08-14,53000\r
2017-08-17,53000\r
2017-08-22,53000\r
2017-08-24,53000\r
2017-08-27,43400\r
2017-08-29,43400\r
2017-09-01,43400\r
2017-09-03,43400\r
2017-09-08,51000\r
2017-09-13,51000\r
2017-09-16,51000\r
2017-10-08,46400\r
2017-10-11,46400\r
2017-10-13,47800\r
2017-10-16,47800\r
2017-10-18,47800\r
2017-10-23,51500\r
2017-10-26,51200\r
2017-10-28,55800\r
2017-10-31,55800\r
2017-11-05,54500\r
2017-11-07,58400\r
2017-11-15,58100\r
2017-11-17,59400\r
2017-11-20,57700\r
2017-11-22,59400\r
2017-11-25,59400\r
2017-11-27,59400\r
2017-11-30,57500\r
2017-12-07,64600\r
2017-12-12,65000\r
2017-12-15,65000\r
2017-12-20,58900\r
2018-02-10,82600\r
2018-02-15,86600\r
2018-02-25,93600\r
2018-03-02,94600\r
2018-03-07,94600\r
2018-03-22,94800\r
2018-03-30,94800\r
2018-04-21,95400\r
2018-04-24,95400\r
2018-04-26,95400\r
2018-05-11,96300\r
2018-05-21,97100\r
2018-05-24,95700\r
2018-06-20,95000\r
2018-06-23,95000\r
2018-06-25,97800\r
2018-07-08,90500\r
2018-07-10,91800\r
2018-07-15,92700\r
2018-07-18,92700\r
2018-07-23,90700\r
2018-07-25,92100\r
2018-07-30,92600\r
2018-08-02,92600\r
2018-08-04,90200\r
2018-08-12,85900\r
2018-08-19,82700\r
2018-08-22,82700\r
2018-08-27,82700\r
2018-09-03,70900\r
2018-09-08,77200\r
2018-09-11,77200\r
2018-09-16,77000\r
2018-09-18,77000\r
2018-09-23,71500\r
2018-09-26,71500\r
2018-09-28,71500\r
2018-10-03,72100\r
2018-10-06,69300\r
2018-10-13,69300\r
2018-11-12,67800\r
2018-11-15,67800\r
2018-11-17,70500\r
2018-11-22,70500\r
2018-11-27,65800\r
2018-12-07,67800\r
2018-12-10,66300\r
2018-12-27,70000\r
2019-01-11,70400\r
2019-01-16,72000\r
2019-01-19,72000\r
2019-01-24,72000\r
2019-01-26,71600\r
2019-02-03,75800\r
2019-02-15,81900\r
2019-02-18,81900\r
2019-02-20,82800\r
2019-02-23,82800\r
2019-02-25,80400\r
2019-02-28,80400\r
2019-03-12,78600\r
2019-03-22,78500\r
2019-03-25,78500\r
2019-03-27,82100\r
2019-03-30,83200\r
2019-04-01,83200\r
2019-04-09,82900\r
2019-05-01,81100\r
2019-05-06,86700\r
2019-05-09,86700\r
2019-05-11,86700\r
2019-05-14,86700\r
2019-05-16,86700\r
2019-05-29,96300\r
2019-05-31,96300\r
2019-07-05,84800\r
2019-07-08,84800\r
2019-07-10,88500\r
2019-07-13,88500\r
2019-07-15,86600\r
2019-07-20,87000\r
2019-07-23,90400\r
2019-07-25,87600\r
2019-07-28,88400\r
2019-08-02,81800\r
2019-08-04,80500\r
2019-08-09,78800\r
2019-08-14,77900\r
2019-08-17,77900\r
2019-08-22,79600\r
2019-08-24,76300\r
2019-08-29,75400\r
2019-09-03,77000\r
2019-09-06,77000\r
2019-09-08,77000\r
2019-09-11,75700\r
2019-09-13,76200\r
2019-09-16,72900\r
2019-09-18,72900\r
2019-09-21,72900\r
2019-09-26,72900\r
2019-10-08,71700\r
2019-10-11,71700\r
2019-10-13,73400\r
2019-10-26,67000\r
2019-12-17,91600\r
2019-12-20,91600\r
2019-12-25,87600\r
2019-12-27,87600\r
2019-12-30,87600\r
2020-01-11,95800\r
2020-01-14,95800\r
2020-01-16,97200\r
2020-01-19,97200\r
2020-01-29,95800\r
2020-01-31,95800\r
2020-02-05,92100\r
2020-02-10,92100\r
2020-02-15,92200\r
2020-02-18,92200\r
2020-02-20,88500\r
2020-02-23,88700\r
2020-03-21,94800\r
2020-03-24,94800\r
2020-03-26,92200\r
2020-03-31,92500\r
2020-04-03,92500\r
2020-04-05,85700\r
2020-04-08,85900\r
2020-04-10,85500\r
2020-04-15,87500\r
2020-04-25,91100\r
2020-04-30,90700\r
2020-05-05,94100\r
2020-05-08,94100\r
2020-05-18,94100\r
2020-05-20,96100\r
2020-05-25,96800\r
2020-05-28,96800\r
2020-05-30,93100\r
2020-06-12,92600\r
2020-06-14,92600\r
2020-06-24,88900\r
2020-07-04,88900\r
2020-07-07,88900\r
2020-07-09,90900\r
2020-07-19,91100\r
2020-07-22,91100\r
2020-07-24,83900\r
2020-07-27,85700\r
2020-07-29,85700\r
2020-08-03,85700\r
2020-08-06,78500\r
2020-08-08,82700\r
2020-08-18,79900\r
2020-08-21,79900\r
2020-08-23,79900\r
2020-08-31,70200\r
2020-09-02,71000\r
2020-09-05,62300\r
2020-09-07,65700\r
2020-09-10,65700\r
2020-09-12,62300\r
2020-09-17,62300\r
2020-10-17,63900\r
2020-10-30,63900\r
2020-11-11,70100\r
2020-11-14,70100\r
2020-11-21,73600\r
2020-11-26,71000\r
2020-11-29,73300\r
2020-12-26,95000\r
2021-02-14,98900\r
2021-02-17,98900\r
2021-02-19,99800\r
2021-02-24,97000\r
2021-02-27,97600\r
2021-03-01,91100\r
2021-03-04,97500\r
2021-03-09,89600\r
2021-03-21,6400\r
2021-03-24,6400\r
2021-03-29,6400\r
2021-03-31,93200\r
2021-04-03,93200\r
2021-04-05,94200\r
2021-04-08,94200\r
2021-04-15,95600\r
2021-04-20,95600\r
2021-04-23,95600\r
2021-06-09,89300\r
2021-06-14,94800\r
2021-06-22,94600\r
2021-06-29,90800\r
2021-07-02,93500\r
2021-07-09,93500\r
2021-09-12,79400\r
2021-09-17,79500\r
2021-09-22,79500\r
2021-09-25,72900\r
2021-09-27,72900\r
2021-10-07,79600\r
2021-10-12,81200\r
2021-10-15,81200\r
2021-10-17,81200\r
2021-10-20,80000\r
2021-10-27,75800\r
2021-12-16,98300\r
2021-12-19,98300\r
2021-12-21,98300\r
2022-01-15,91800\r
2022-01-23,91800\r
2022-01-25,93900\r
2022-02-09,89700\r
2022-03-01,98100\r
2022-03-09,98100\r
2022-03-21,95000\r
2022-03-24,95000\r
2022-03-26,95000\r
2022-04-05,90400\r
2022-04-10,93100\r
2022-05-10,96500\r
2022-05-15,96500\r
2022-07-14,76000\r
2022-07-17,76000\r
2022-07-24,76000\r
2022-08-28,56100\r
2022-09-05,56100\r
2022-09-22,41200\r
2022-10-02,41300\r
2022-10-05,37700\r
2022-10-07,42600\r
2022-10-12,41500\r
2022-10-15,42600\r
2022-10-17,42600\r
2022-11-11,44900\r
2022-11-16,44100\r
2022-12-21,52800\r
2022-12-24,52800\r
2023-01-10,58800\r
2023-01-18,58800\r
2023-01-20,58800\r
2023-02-04,74100\r
2023-02-09,75100\r
2023-02-12,75100\r
2023-02-14,72500\r
2023-02-17,73500\r
2023-02-19,73500\r
2023-02-24,72900\r
2023-03-01,69400\r
2023-03-16,76300\r
2023-04-05,80100\r
2023-04-08,80100\r
2023-04-10,82500\r
2023-04-18,81800\r
2023-04-20,81800\r
2023-05-30,90700\r
2023-06-02,90700\r
2023-06-04,90700\r
2023-06-09,90700\r
2023-06-24,93600\r
2023-06-27,93600\r
2023-07-14,94900\r
2023-07-17,94900\r
2023-07-22,94900\r
2023-08-08,84300\r
2023-08-11,84300\r
2023-08-16,84300\r
2023-08-18,87300\r
2023-08-21,83600\r
2023-08-23,84700\r
2023-08-28,84700\r
2023-08-31,80000\r
2023-09-07,75600\r
2023-09-10,75600\r
`;export{r as default};
