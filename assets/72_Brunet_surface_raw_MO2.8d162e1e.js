const r=`date,value\r
2017-01-26,93400\r
2017-02-15,117600\r
2017-02-22,118500\r
2017-02-25,105200\r
2017-03-07,103300\r
2017-03-17,141700\r
2017-03-27,149800\r
2017-04-03,148900\r
2017-04-06,148900\r
2017-04-23,174600\r
2017-05-03,175500\r
2017-05-16,182900\r
2017-05-23,182900\r
2017-05-26,188700\r
2017-06-02,187900\r
2017-06-05,187900\r
2017-06-25,187700\r
2017-07-02,186100\r
2017-07-05,186600\r
2017-07-07,178900\r
2017-07-10,178900\r
2017-07-12,178900\r
2017-07-17,175600\r
2017-07-22,171200\r
2017-07-27,171200\r
2017-08-04,161200\r
2017-08-06,166400\r
2017-08-11,166400\r
2017-08-14,158700\r
2017-08-19,150700\r
2017-08-21,149500\r
2017-08-24,145900\r
2017-08-26,144000\r
2017-08-29,147200\r
2017-09-03,136800\r
2017-09-05,130000\r
2017-09-08,131700\r
2017-09-10,125000\r
2017-09-13,125000\r
2017-09-20,126800\r
2017-09-23,128300\r
2017-09-28,128300\r
2017-10-03,125600\r
2017-10-05,127000\r
2017-10-08,130300\r
2017-10-10,130300\r
2017-10-13,127100\r
2017-10-15,128300\r
2017-10-18,128500\r
2017-10-25,128300\r
2017-10-28,125000\r
2017-10-30,123500\r
2017-11-07,128200\r
2017-11-14,127600\r
2017-11-17,135500\r
2017-11-19,135500\r
2017-11-22,135800\r
2017-11-24,135800\r
2017-11-27,135800\r
2017-11-29,125600\r
2017-12-09,132900\r
2017-12-14,132900\r
2017-12-19,132900\r
2018-02-10,176900\r
2018-02-12,176900\r
2018-02-25,183500\r
2018-02-27,183500\r
2018-03-02,192300\r
2018-03-14,177800\r
2018-03-19,177800\r
2018-03-22,177800\r
2018-04-21,184100\r
2018-04-23,184100\r
2018-04-26,186400\r
2018-05-06,187700\r
2018-05-11,191100\r
2018-05-18,187600\r
2018-05-21,187600\r
2018-06-20,187200\r
2018-06-22,187200\r
2018-06-25,193200\r
2018-06-27,193200\r
2018-07-02,192500\r
2018-07-07,185800\r
2018-07-10,185800\r
2018-07-12,183000\r
2018-07-15,186100\r
2018-07-17,186100\r
2018-07-27,199100\r
2018-07-30,187000\r
2018-08-01,191800\r
2018-08-04,186400\r
2018-08-06,182500\r
2018-08-11,180900\r
2018-08-16,181400\r
2018-08-19,172700\r
2018-08-21,164200\r
2018-08-26,171000\r
2018-08-31,161500\r
2018-09-03,152400\r
2018-09-08,163500\r
2018-09-10,163500\r
2018-09-13,163500\r
2018-09-20,148500\r
2018-09-23,149800\r
2018-09-25,147700\r
2018-09-28,148700\r
2018-09-30,146100\r
2018-10-03,144000\r
2018-10-05,142900\r
2018-10-23,162300\r
2018-10-25,168600\r
2018-10-30,168600\r
2018-11-04,166600\r
2018-11-12,164500\r
2018-12-19,159900\r
2018-12-27,164600\r
2018-12-29,164600\r
2019-01-16,165100\r
2019-01-23,165100\r
2019-01-28,165100\r
2019-02-12,147400\r
2019-02-15,177500\r
2019-02-17,165100\r
2019-02-20,172600\r
2019-02-22,167700\r
2019-02-25,168700\r
2019-02-27,167800\r
2019-03-12,169400\r
2019-03-22,173200\r
2019-03-24,171600\r
2019-03-27,173900\r
2019-03-29,173900\r
2019-04-01,172800\r
2019-04-08,175700\r
2019-04-13,175100\r
2019-05-01,175700\r
2019-05-06,187600\r
2019-05-11,187600\r
2019-05-13,184200\r
2019-05-16,184200\r
2019-05-23,182000\r
2019-05-31,179100\r
2019-06-02,185800\r
2019-06-12,184700\r
2019-06-27,170700\r
2019-06-30,188100\r
2019-07-02,188100\r
2019-07-05,177100\r
2019-07-07,177100\r
2019-07-10,177000\r
2019-07-12,175900\r
2019-07-15,174800\r
2019-07-17,171100\r
2019-07-22,170600\r
2019-07-25,166900\r
2019-08-01,151100\r
2019-08-04,151100\r
2019-08-09,137700\r
2019-08-11,139300\r
2019-08-14,130100\r
2019-08-16,130200\r
2019-08-21,123900\r
2019-08-24,117600\r
2019-08-26,115900\r
2019-08-29,115400\r
2019-08-31,108100\r
2019-09-03,106800\r
2019-09-05,106800\r
2019-09-13,98900\r
2019-09-15,91000\r
2019-09-18,91900\r
2019-09-20,91500\r
2019-10-05,98400\r
2019-10-08,83300\r
2019-10-13,97400\r
2019-10-25,103500\r
2019-10-30,98500\r
2019-11-04,98500\r
2019-11-09,98500\r
2019-11-27,118600\r
2019-12-02,118600\r
2020-01-01,161600\r
2020-01-06,172200\r
2020-01-11,159800\r
2020-01-16,159800\r
2020-01-18,160300\r
2020-02-20,157800\r
2020-02-22,156500\r
2020-03-01,156500\r
2020-03-08,178400\r
2020-03-11,178400\r
2020-03-13,180300\r
2020-03-18,174000\r
2020-03-21,180100\r
2020-03-28,177000\r
2020-03-31,182900\r
2020-04-05,186000\r
2020-04-07,171000\r
2020-04-10,182500\r
2020-04-12,180400\r
2020-04-15,180500\r
2020-04-25,177500\r
2020-05-05,181600\r
2020-05-07,181600\r
2020-05-17,189800\r
2020-05-20,183400\r
2020-05-22,182600\r
2020-05-25,185500\r
2020-05-27,183800\r
2020-05-30,186200\r
2020-06-14,185600\r
2020-06-21,174600\r
2020-06-24,174600\r
2020-06-26,174600\r
2020-07-01,174600\r
2020-07-04,176500\r
2020-07-14,175300\r
2020-07-19,164500\r
2020-07-21,159100\r
2020-07-24,156300\r
2020-07-26,157100\r
2020-07-29,152200\r
2020-07-31,145100\r
2020-08-03,145100\r
2020-08-05,136500\r
2020-08-08,132700\r
2020-08-10,122500\r
2020-08-15,123000\r
2020-08-20,113600\r
2020-08-23,109500\r
2020-08-25,92300\r
2020-09-02,81400\r
2020-09-04,81400\r
2020-09-07,77100\r
2020-09-12,73100\r
2020-09-14,70000\r
2020-09-17,72000\r
2020-09-19,74400\r
2020-11-11,82100\r
2020-11-18,82600\r
2020-11-21,78700\r
2020-11-23,78700\r
2020-11-26,78700\r
2020-12-16,99900\r
2020-12-18,99900\r
2021-01-15,140800\r
2021-01-17,140800\r
2021-02-06,186400\r
2021-02-11,186400\r
2021-02-14,186400\r
2021-03-23,172300\r
2021-03-26,172300\r
2021-03-28,178500\r
2021-03-31,173900\r
2021-04-02,173900\r
2021-04-05,177300\r
2021-04-07,177700\r
2021-04-15,182900\r
2021-04-17,183700\r
2021-04-20,184100\r
2021-04-22,183300\r
2021-05-27,193800\r
2021-05-30,195000\r
2021-06-09,194600\r
2021-06-11,189300\r
2021-06-14,189300\r
2021-06-16,188000\r
2021-06-19,191300\r
2021-06-21,182000\r
2021-06-26,185400\r
2021-07-19,186900\r
2021-07-21,184700\r
2021-07-26,184700\r
2021-07-29,191600\r
2021-08-05,184100\r
2021-08-10,179700\r
2021-08-13,179700\r
2021-08-18,179700\r
2021-08-20,179800\r
2021-08-23,166900\r
2021-08-25,167200\r
2021-08-28,169600\r
2021-08-30,165400\r
2021-09-04,159300\r
2021-09-07,159000\r
2021-09-12,153900\r
2021-09-14,155800\r
2021-09-17,155800\r
2021-09-22,149500\r
2021-09-24,151000\r
2021-09-29,149600\r
2021-10-12,147900\r
2021-10-14,154300\r
2021-10-17,146200\r
2021-10-24,145700\r
2021-10-27,144900\r
2021-12-16,181900\r
2021-12-18,191900\r
2021-12-21,183300\r
2021-12-23,183300\r
2022-01-15,183600\r
2022-01-17,183600\r
2022-01-22,186000\r
2022-01-25,182400\r
2022-01-27,176600\r
2022-01-30,176600\r
2022-02-01,176600\r
2022-02-06,173800\r
2022-02-09,176000\r
2022-02-26,169400\r
2022-03-01,173700\r
2022-03-03,173700\r
2022-03-08,172600\r
2022-03-23,178900\r
2022-03-26,178900\r
2022-04-05,181400\r
2022-04-10,181400\r
2022-04-15,181400\r
2022-04-17,176200\r
2022-04-27,176200\r
2022-05-17,185500\r
2022-05-20,185500\r
2022-05-22,192700\r
2022-05-27,192700\r
2022-05-30,184800\r
2022-06-01,186600\r
2022-06-04,182900\r
2022-06-06,182900\r
2022-06-11,182900\r
2022-06-16,174100\r
2022-06-19,174200\r
2022-06-29,166700\r
2022-07-11,140300\r
2022-07-14,150400\r
2022-07-16,145400\r
2022-07-19,145400\r
2022-07-21,137100\r
2022-07-24,133600\r
2022-07-26,128700\r
2022-07-29,129600\r
2022-07-31,123300\r
2022-08-03,117700\r
2022-08-05,104400\r
2022-08-08,95200\r
2022-08-10,95200\r
2022-08-13,89100\r
2022-08-15,86100\r
2022-08-20,87300\r
2022-08-23,79000\r
2022-08-28,66800\r
2022-08-30,68300\r
2022-09-02,68300\r
2022-09-04,65900\r
2022-09-12,62100\r
2022-09-19,60100\r
2022-09-22,58800\r
2022-10-02,61700\r
2022-10-04,63600\r
2022-10-07,63600\r
2022-10-09,62000\r
2022-10-12,62000\r
2022-10-22,56900\r
2022-10-24,57200\r
2022-10-27,57200\r
2022-11-01,57200\r
2022-11-06,60600\r
2022-11-08,66900\r
2022-11-11,60300\r
2022-11-13,67200\r
2022-11-16,63100\r
2023-01-10,94800\r
2023-01-12,94800\r
2023-01-20,94800\r
2023-02-04,116000\r
2023-02-06,125700\r
2023-02-09,123500\r
2023-02-11,118600\r
2023-02-14,120700\r
2023-02-16,118900\r
2023-02-19,119700\r
2023-02-21,119700\r
2023-02-26,121700\r
2023-03-01,129100\r
2023-03-03,132600\r
2023-03-13,130500\r
2023-03-16,136100\r
2023-03-28,144900\r
2023-04-05,150200\r
2023-04-07,148200\r
2023-04-15,153000\r
2023-04-17,151200\r
2023-04-20,153900\r
2023-05-17,176400\r
2023-05-27,188100\r
2023-05-30,185600\r
2023-06-04,187400\r
2023-06-16,187600\r
2023-06-24,187600\r
2023-06-26,187600\r
`;export{r as default};
