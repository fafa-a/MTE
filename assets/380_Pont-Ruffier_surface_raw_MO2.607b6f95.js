const r=`date,value\r
2017-03-13,160900\r
2017-03-16,160900\r
2017-04-12,210600\r
2017-04-19,210600\r
2017-04-22,210600\r
2017-06-21,216500\r
2017-06-24,216500\r
2017-07-01,234500\r
2017-07-06,195800\r
2017-07-09,195800\r
2017-08-25,179500\r
2017-08-27,179500\r
2017-09-02,179500\r
2018-01-17,183800\r
2018-01-19,183800\r
2018-01-25,183800\r
2018-01-27,183800\r
2018-02-21,193000\r
2018-02-24,193000\r
2018-02-26,223100\r
2018-02-28,223100\r
2018-03-05,223100\r
2018-04-17,225000\r
2018-04-19,225000\r
2018-04-20,225000\r
2018-04-22,217200\r
2018-04-24,227600\r
2018-05-07,192100\r
2018-05-09,192100\r
2018-05-14,192100\r
2018-05-15,192100\r
2018-05-17,193900\r
2018-06-26,235600\r
2018-06-28,235600\r
2018-06-29,235600\r
2018-07-01,230800\r
2018-07-04,230800\r
2018-07-06,230800\r
2018-08-05,199700\r
2018-10-04,179800\r
2018-10-07,179800\r
2018-10-09,196500\r
2018-10-12,196500\r
2018-10-19,173100\r
2018-11-03,149800\r
2018-11-06,143000\r
2018-11-08,143000\r
2018-11-11,143000\r
2018-11-18,122100\r
2018-11-20,122100\r
2018-11-21,122100\r
2019-02-26,122500\r
2019-03-11,122500\r
2019-03-13,122500\r
2019-04-12,176000\r
2019-04-14,176000\r
2019-04-17,176000\r
2019-04-19,176000\r
2019-04-20,176000\r
2019-04-22,176100\r
2019-04-25,176100\r
2019-04-27,175900\r
2019-04-30,152800\r
2019-05-05,152800\r
2019-06-01,191300\r
2019-06-06,191300\r
2019-06-08,191300\r
2019-06-26,226100\r
2019-06-28,226100\r
2019-06-29,226100\r
2019-07-03,226100\r
2019-07-04,226100\r
2019-07-06,226100\r
2019-07-08,226100\r
2019-07-09,226100\r
2019-07-11,207400\r
2019-07-13,215000\r
2019-07-14,215000\r
2019-07-16,188500\r
2019-07-23,209200\r
2019-07-24,209200\r
2019-08-20,192400\r
2019-08-22,192400\r
2019-08-23,192400\r
2019-08-25,192400\r
2019-09-14,172300\r
2019-09-16,148200\r
2019-09-19,154700\r
2019-09-21,154700\r
2019-09-24,154700\r
2019-09-27,154700\r
2019-12-03,80200\r
2019-12-05,80200\r
2019-12-08,80200\r
2019-12-13,80200\r
2020-01-17,150000\r
2020-01-19,150000\r
2020-01-20,150000\r
2020-01-22,150200\r
2020-02-04,78200\r
2020-02-06,182200\r
2020-02-11,183300\r
2020-02-26,143700\r
2020-03-17,125800\r
2020-03-24,125800\r
2020-03-25,125800\r
2020-03-27,150000\r
2020-03-30,150000\r
2020-04-01,155700\r
2020-04-03,165000\r
2020-04-04,165000\r
2020-04-08,165000\r
2020-04-09,165000\r
2020-04-11,159300\r
2020-04-14,163000\r
2020-04-16,157600\r
2020-04-18,163400\r
2020-04-21,163400\r
2020-04-23,163400\r
2020-04-26,171700\r
2020-05-26,212900\r
2020-05-28,212900\r
2020-05-29,212900\r
2020-05-31,202300\r
2020-06-02,202300\r
2020-06-08,218000\r
2020-06-25,187900\r
2020-07-07,187900\r
2020-07-10,187900\r
2020-07-30,186100\r
2020-08-02,186100\r
2020-08-04,201700\r
2020-08-06,227400\r
2020-08-07,227400\r
2020-08-09,169500\r
2020-08-11,169500\r
2020-08-14,169500\r
2020-08-21,170100\r
2020-09-08,127500\r
2020-09-13,145800\r
2020-09-16,145800\r
2020-09-26,135700\r
2020-11-12,76500\r
2020-11-15,76500\r
2020-11-19,76500\r
2021-02-10,200900\r
2021-02-18,200900\r
2021-04-01,191400\r
2021-04-03,191400\r
2021-04-04,191400\r
2021-04-06,191400\r
2021-04-08,191400\r
2021-04-21,217300\r
2021-04-23,217300\r
2021-04-24,217300\r
2021-04-26,216000\r
2021-04-28,204700\r
2021-04-29,204700\r
2021-05-01,204700\r
2021-05-31,158300\r
2021-06-05,158300\r
2021-06-08,158300\r
2021-07-20,179800\r
2021-07-22,179800\r
2021-07-28,179100\r
2021-07-30,179100\r
2021-08-14,191800\r
2021-08-22,191800\r
2021-09-13,187200\r
2021-09-16,187200\r
2021-09-21,187200\r
2021-09-23,201800\r
2021-09-26,184600\r
2021-09-30,184600\r
2021-10-03,185400\r
2021-10-08,193900\r
2021-10-11,193900\r
2021-10-15,193500\r
2021-11-22,140200\r
2021-11-24,140200\r
2022-02-05,165300\r
2022-02-10,165300\r
2022-02-12,165300\r
2022-03-07,157900\r
2022-03-09,157900\r
2022-03-14,157900\r
2022-03-17,206100\r
2022-03-22,206300\r
2022-03-24,206300\r
2022-03-25,206300\r
2022-03-27,201700\r
2022-04-01,206700\r
2022-04-03,206600\r
2022-04-11,189700\r
2022-04-13,189700\r
2022-04-14,189700\r
2022-04-16,198400\r
2022-04-21,190200\r
2022-04-26,199000\r
2022-05-01,184500\r
2022-05-21,150600\r
2022-05-24,150600\r
2022-05-28,150600\r
2022-05-29,150600\r
2022-05-31,150600\r
2022-06-15,209800\r
2022-06-17,209800\r
2022-06-25,209800\r
2022-07-10,187700\r
2022-07-12,187700\r
2022-07-13,187700\r
2022-07-15,197400\r
2022-07-17,199200\r
2022-07-18,199200\r
2022-07-20,199200\r
2022-07-23,188700\r
2022-08-09,174700\r
2022-08-11,165100\r
2022-08-12,165100\r
2022-08-16,165100\r
2022-11-12,120300\r
2022-11-15,120300\r
2022-11-17,129200\r
2022-11-19,129200\r
2022-11-20,129200\r
2022-11-22,132000\r
2023-01-21,186500\r
2023-01-23,186500\r
2023-01-31,186500\r
2023-02-15,200600\r
2023-05-31,216900\r
2023-06-02,216900\r
2023-06-03,216900\r
2023-06-05,221900\r
2023-06-07,226900\r
2023-06-08,226900\r
2023-06-12,223900\r
2023-06-13,223900\r
2023-06-15,243000\r
2023-06-20,226500\r
2023-06-22,226500\r
2023-06-23,226500\r
2023-06-25,235800\r
2023-09-03,182600\r
2023-09-05,182000\r
2023-09-06,182000\r
2023-10-08,170200\r
2023-10-10,170200\r
2023-10-16,170200\r
2023-11-07,128600\r
`;export{r as default};
