const r=`date,value\r
2017-01-26,101300\r
2017-02-25,108900\r
2017-03-17,118600\r
2017-03-27,126200\r
2017-04-03,126200\r
2017-04-06,129100\r
2017-05-16,149600\r
2017-05-26,160600\r
2017-06-02,160400\r
2017-06-05,160400\r
2017-07-05,163100\r
2017-07-07,163100\r
2017-08-14,129400\r
2017-08-17,122300\r
2017-08-19,122300\r
2017-08-21,122300\r
2017-08-22,122300\r
2017-08-24,122300\r
2017-08-26,103000\r
2017-08-29,106100\r
2017-09-03,106100\r
2017-09-05,87100\r
2017-09-08,87100\r
2017-10-08,93700\r
2017-10-10,93700\r
2017-10-11,93700\r
2017-10-13,97500\r
2017-10-15,97500\r
2017-10-16,97500\r
2017-10-18,94300\r
2017-10-20,98700\r
2017-10-23,96100\r
2017-10-25,97200\r
2017-10-26,97200\r
2017-10-28,93300\r
2017-10-30,99600\r
2017-10-31,99600\r
2017-11-02,99600\r
2017-11-07,94400\r
2017-11-14,87800\r
2017-11-15,87800\r
2017-11-17,90700\r
2017-11-19,90600\r
2017-11-22,92800\r
2017-11-24,92800\r
2017-11-25,92800\r
2017-11-27,90700\r
2017-11-30,94200\r
2017-12-07,91800\r
2018-02-10,148100\r
2018-02-12,148100\r
2018-02-15,148100\r
2018-02-25,174600\r
2018-02-27,174600\r
2018-03-02,174600\r
2018-03-07,174600\r
2018-03-22,187100\r
2018-04-01,187100\r
2018-04-21,185500\r
2018-04-23,185500\r
2018-04-24,185500\r
2018-04-26,185500\r
2018-05-11,193800\r
2018-05-19,193800\r
2018-05-21,193900\r
2018-05-23,185100\r
2018-06-20,194300\r
2018-06-22,194300\r
2018-06-23,194300\r
2018-06-25,196700\r
2018-06-28,196700\r
2018-07-02,194900\r
2018-07-03,194900\r
2018-07-07,186300\r
2018-07-08,186300\r
2018-07-10,186300\r
2018-07-15,176100\r
2018-07-18,176100\r
2018-07-22,176100\r
2018-07-23,176100\r
2018-07-25,178300\r
2018-07-30,187000\r
2018-08-01,187000\r
2018-08-02,187000\r
2018-08-04,178500\r
2018-08-06,186300\r
2018-08-11,171100\r
2018-08-12,171100\r
2018-08-19,160800\r
2018-08-21,160800\r
2018-08-22,160800\r
2018-08-26,160800\r
2018-08-27,160800\r
2018-09-03,130200\r
2018-09-05,130200\r
2018-09-08,139800\r
2018-09-10,139800\r
2018-09-11,139800\r
2018-09-16,134500\r
2018-09-18,134500\r
2018-09-23,120200\r
2018-09-25,120200\r
2018-09-26,120200\r
2018-09-28,125700\r
2018-09-30,125700\r
2018-10-03,120300\r
2018-10-05,126100\r
2018-10-06,126100\r
2018-10-23,118900\r
2018-10-25,118900\r
2018-11-17,122500\r
2018-11-22,122500\r
2018-11-24,122500\r
2018-11-27,126100\r
2018-11-29,122900\r
2018-12-05,122900\r
2019-01-11,124700\r
2019-01-16,131400\r
2019-01-19,131400\r
2019-01-23,131400\r
2019-01-26,131400\r
2019-01-28,125000\r
2019-02-15,167800\r
2019-02-17,167800\r
2019-02-18,167800\r
2019-02-20,174000\r
2019-02-22,174000\r
2019-02-23,174000\r
2019-02-25,168300\r
2019-02-27,168300\r
2019-03-07,178400\r
2019-03-12,180200\r
2019-03-22,186800\r
2019-03-24,177900\r
2019-03-25,177900\r
2019-03-27,182900\r
2019-03-29,182900\r
2019-03-30,182900\r
2019-04-01,182800\r
2019-04-08,191400\r
2019-04-09,191400\r
2019-05-06,182300\r
2019-05-11,182300\r
2019-05-13,182300\r
2019-05-14,182300\r
2019-05-16,187000\r
2019-05-23,185300\r
2019-05-31,185300\r
2019-07-05,183200\r
2019-07-08,183200\r
2019-07-10,183100\r
2019-07-12,183100\r
2019-07-13,183100\r
2019-07-15,182400\r
2019-07-17,182400\r
2019-07-22,190100\r
2019-07-23,190100\r
2019-07-25,172600\r
2019-07-28,183800\r
2019-08-02,162500\r
2019-08-04,163500\r
2019-08-09,151000\r
2019-08-14,145600\r
2019-08-16,145600\r
2019-08-17,145600\r
2019-08-21,147600\r
2019-08-22,147600\r
2019-08-24,139200\r
2019-08-26,142800\r
2019-08-29,142600\r
2019-08-31,134800\r
2019-09-03,134800\r
2019-09-06,134800\r
2019-09-08,138200\r
2019-09-11,110400\r
2019-09-13,112300\r
2019-09-15,114300\r
2019-09-16,114300\r
2019-09-20,114300\r
2019-09-21,114300\r
2019-10-08,92200\r
2019-10-11,92200\r
2019-10-13,98600\r
2019-10-15,98600\r
2019-10-25,93500\r
2019-11-27,100100\r
2019-12-05,100100\r
2019-12-10,100100\r
2019-12-27,159800\r
2019-12-29,159800\r
2019-12-30,159800\r
2020-01-06,161200\r
2020-01-09,161200\r
2020-01-11,164500\r
2020-01-14,164500\r
2020-01-16,159800\r
2020-01-19,159800\r
2020-01-28,159600\r
2020-02-05,174100\r
2020-02-07,174100\r
2020-02-08,174100\r
2020-02-15,174100\r
2020-02-18,174100\r
2020-02-20,181400\r
2020-02-22,179500\r
2020-03-21,178400\r
2020-03-24,178400\r
2020-03-26,178400\r
2020-03-28,178400\r
2020-03-29,178400\r
2020-03-31,180000\r
2020-04-03,180000\r
2020-04-05,181600\r
2020-04-08,178100\r
2020-04-10,186500\r
2020-04-12,186500\r
2020-04-15,179400\r
2020-04-25,178000\r
2020-04-28,179500\r
2020-05-05,170700\r
2020-05-07,170700\r
2020-05-08,170700\r
2020-05-17,169000\r
2020-05-18,169000\r
2020-05-20,189500\r
2020-05-22,184300\r
2020-05-25,191000\r
2020-05-27,191000\r
2020-05-28,191000\r
2020-05-30,183200\r
2020-06-12,183700\r
2020-06-14,183700\r
2020-07-19,175400\r
2020-07-21,175400\r
2020-07-22,175400\r
2020-07-24,179700\r
2020-07-27,179700\r
2020-07-29,170500\r
2020-07-31,170500\r
2020-08-03,172300\r
2020-08-05,162500\r
2020-08-06,162500\r
2020-08-08,163400\r
2020-08-10,145200\r
2020-08-15,146600\r
2020-08-20,140700\r
2020-08-21,140700\r
2020-08-23,143600\r
2020-09-02,115000\r
2020-09-04,115000\r
2020-09-05,115000\r
2020-09-07,104000\r
2020-09-10,107400\r
2020-09-12,107400\r
2020-09-14,107400\r
2020-09-17,89100\r
2020-09-19,93000\r
2020-09-29,77800\r
2020-09-30,77800\r
2020-10-17,88500\r
2020-10-24,88500\r
2020-10-30,88500\r
2020-11-01,90200\r
2020-11-21,98500\r
2020-11-23,98500\r
2020-11-26,98500\r
2020-11-29,98500\r
2020-12-26,125800\r
2021-02-14,190800\r
2021-02-17,190800\r
2021-02-19,191800\r
2021-02-24,189800\r
2021-02-27,194400\r
2021-03-01,182400\r
2021-03-04,196500\r
2021-03-09,183300\r
2021-03-31,183800\r
2021-04-02,183800\r
2021-04-03,183800\r
2021-04-05,198200\r
2021-04-07,198200\r
2021-04-15,195700\r
2021-04-17,190500\r
2021-04-20,190500\r
2021-04-22,190500\r
2021-04-23,190500\r
2021-05-30,166300\r
2021-06-01,166300\r
2021-06-09,191500\r
2021-06-11,190900\r
2021-06-14,190900\r
2021-06-16,190900\r
2021-06-19,190900\r
2021-09-22,147600\r
2021-09-24,147600\r
2021-09-25,147600\r
2021-09-27,147600\r
2021-09-30,146100\r
2021-10-12,153900\r
2021-10-14,153900\r
2021-10-17,160600\r
2021-10-19,160600\r
2021-10-20,160600\r
2021-10-24,145300\r
2021-10-27,145300\r
2021-12-16,173600\r
2021-12-18,173600\r
2021-12-19,173600\r
2021-12-21,173600\r
2021-12-23,173600\r
2022-01-15,183400\r
2022-01-22,183400\r
2022-01-23,183400\r
2022-01-25,185400\r
2022-01-27,178700\r
2022-02-01,178700\r
2022-02-09,185700\r
2022-03-21,170200\r
2022-03-23,170200\r
2022-03-24,170200\r
2022-03-26,193500\r
2022-04-05,197100\r
2022-04-10,195800\r
2022-04-15,195800\r
2022-05-30,183500\r
2022-06-01,183500\r
2022-06-06,183500\r
2022-06-09,185900\r
2022-07-14,175400\r
2022-07-16,175400\r
2022-07-17,175400\r
2022-07-19,175400\r
2022-07-21,175400\r
2022-07-22,175400\r
2022-07-24,175400\r
2022-08-08,107100\r
2022-08-10,107100\r
2022-08-11,107100\r
2022-08-13,110000\r
2022-08-15,110000\r
2022-08-18,110000\r
2022-08-20,92500\r
2022-08-23,92500\r
2022-08-28,79400\r
2022-08-30,79400\r
2022-09-04,79400\r
2022-09-05,79400\r
2022-09-12,66500\r
2022-09-15,66500\r
2022-09-19,66500\r
2022-09-20,66500\r
2022-09-22,66500\r
2022-10-02,63800\r
2022-10-12,67100\r
2022-10-15,67100\r
2022-10-22,66400\r
2022-11-11,70400\r
2022-11-13,62300\r
2022-11-16,69600\r
2022-11-24,65300\r
2022-12-11,72400\r
2022-12-21,75000\r
2022-12-28,73900\r
2023-01-30,112600\r
2023-02-02,112600\r
2023-02-04,125000\r
2023-02-06,125000\r
2023-02-09,114000\r
2023-02-11,127200\r
2023-02-12,127200\r
2023-02-14,120100\r
2023-02-16,127700\r
2023-02-17,127700\r
2023-02-19,115500\r
2023-02-21,121400\r
2023-02-24,120700\r
2023-02-26,119300\r
2023-03-01,123800\r
2023-03-03,126700\r
2023-03-04,126700\r
2023-03-09,125800\r
2023-03-16,128600\r
2023-04-05,137100\r
2023-04-07,137100\r
2023-04-08,137100\r
2023-04-15,137100\r
2023-06-24,187900\r
2023-07-14,173900\r
2023-07-16,173900\r
2023-07-17,173900\r
2023-07-19,173900\r
2023-07-22,173900\r
2023-07-29,144100\r
2023-07-31,144100\r
2023-08-03,144100\r
2023-08-05,144100\r
2023-08-06,144100\r
2023-08-08,144400\r
2023-08-10,129400\r
2023-08-11,129400\r
2023-08-13,129400\r
2023-08-15,129400\r
2023-08-18,116300\r
2023-08-20,116300\r
2023-08-21,116300\r
2023-08-23,108500\r
`;export{r as default};
