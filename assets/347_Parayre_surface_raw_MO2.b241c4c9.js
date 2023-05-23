const r=`date,value\r
2017-02-25,103200\r
2017-03-17,110300\r
2017-03-27,110300\r
2017-04-06,126600\r
2017-05-06,126500\r
2017-05-13,126500\r
2017-05-16,127300\r
2017-05-26,151400\r
2017-06-02,151400\r
2017-06-05,158500\r
2017-06-12,157300\r
2017-07-05,153400\r
2017-07-07,153400\r
2017-08-14,136100\r
2017-08-17,136100\r
2017-08-19,136100\r
2017-08-21,136100\r
2017-08-22,136100\r
2017-08-24,136100\r
2017-08-26,117300\r
2017-08-29,119600\r
2017-09-03,119600\r
2017-09-05,102000\r
2017-09-08,102000\r
2017-10-08,99600\r
2017-10-10,99600\r
2017-10-11,99600\r
2017-10-13,101300\r
2017-10-15,101300\r
2017-10-16,101300\r
2017-10-18,98600\r
2017-10-20,100000\r
2017-10-23,95200\r
2017-10-25,93400\r
2017-10-26,93400\r
2017-10-28,93200\r
2017-10-30,94400\r
2017-10-31,94400\r
2017-11-02,94400\r
2017-11-07,94300\r
2017-11-14,92100\r
2017-11-15,92100\r
2017-11-17,92700\r
2017-11-19,91700\r
2017-11-22,92900\r
2017-11-24,92900\r
2017-11-25,92900\r
2017-11-27,90300\r
2017-11-30,91500\r
2017-12-07,93200\r
2017-12-09,91200\r
2017-12-12,91200\r
2017-12-14,91200\r
2017-12-15,91200\r
2018-02-10,143900\r
2018-02-12,143900\r
2018-02-15,143900\r
2018-02-25,163600\r
2018-02-27,163600\r
2018-03-02,163600\r
2018-03-07,163600\r
2018-03-22,137600\r
2018-04-01,137600\r
2018-04-21,161000\r
2018-04-23,161000\r
2018-04-24,161000\r
2018-04-26,161000\r
2018-05-06,170300\r
2018-05-11,177600\r
2018-05-19,177600\r
2018-05-21,177600\r
2018-06-20,171100\r
2018-06-22,171100\r
2018-06-23,171100\r
2018-06-25,171700\r
2018-06-28,171700\r
2018-07-02,169200\r
2018-07-03,169200\r
2018-07-07,163300\r
2018-07-08,163300\r
2018-07-10,168700\r
2018-07-12,166400\r
2018-07-15,166400\r
2018-07-18,166400\r
2018-07-25,153300\r
2018-07-27,153300\r
2018-07-30,159100\r
2018-08-01,159100\r
2018-08-02,159100\r
2018-08-04,150700\r
2018-08-06,156500\r
2018-08-11,145000\r
2018-08-12,145000\r
2018-08-19,141600\r
2018-08-21,141600\r
2018-08-22,141600\r
2018-08-26,141600\r
2018-08-27,141600\r
2018-09-03,121600\r
2018-09-05,121600\r
2018-09-08,132000\r
2018-09-10,132000\r
2018-09-11,132000\r
2018-09-16,130500\r
2018-09-18,130500\r
2018-09-23,116400\r
2018-09-25,116400\r
2018-09-26,116400\r
2018-09-28,121300\r
2018-09-30,121300\r
2018-10-03,115900\r
2018-10-05,119800\r
2018-10-06,119800\r
2018-10-23,112600\r
2018-10-25,112600\r
2018-11-12,112100\r
2018-11-15,112100\r
2018-11-17,114400\r
2018-11-22,114400\r
2018-11-24,111600\r
2018-11-27,112300\r
2018-11-29,109100\r
2018-12-05,109100\r
2019-01-11,109600\r
2019-01-16,115400\r
2019-01-19,115400\r
2019-01-23,115400\r
2019-01-26,109900\r
2019-01-28,120700\r
2019-02-15,147400\r
2019-02-17,147400\r
2019-02-18,147400\r
2019-02-20,148700\r
2019-02-22,148700\r
2019-02-23,148700\r
2019-02-25,135500\r
2019-02-27,135500\r
2019-03-07,134400\r
2019-03-12,132400\r
2019-03-22,118700\r
2019-03-24,113200\r
2019-03-25,113200\r
2019-03-27,118100\r
2019-03-29,118100\r
2019-03-30,118100\r
2019-04-01,118100\r
2019-04-08,113300\r
2019-04-09,113300\r
2019-05-01,111700\r
2019-05-06,116400\r
2019-05-11,113800\r
2019-05-13,113800\r
2019-05-14,113800\r
2019-05-16,115100\r
2019-05-23,119100\r
2019-05-31,115700\r
2019-07-05,104000\r
2019-07-08,104000\r
2019-07-10,104000\r
2019-07-12,104000\r
2019-07-13,104000\r
2019-07-15,97900\r
2019-07-17,97900\r
2019-07-22,100700\r
2019-07-23,100700\r
2019-07-25,90200\r
2019-07-28,94400\r
2019-08-02,74900\r
2019-08-04,82800\r
2019-08-09,80800\r
2019-08-14,88000\r
2019-08-16,88000\r
2019-08-17,88000\r
2019-08-21,96300\r
2019-08-22,96300\r
2019-08-24,94300\r
2019-08-26,96800\r
2019-08-29,96800\r
2019-08-31,96500\r
2019-09-03,96600\r
2019-09-06,96600\r
2019-09-08,96600\r
2019-09-11,80300\r
2019-09-13,81500\r
2019-09-15,81500\r
2019-09-16,81500\r
2019-09-20,77000\r
2019-09-21,77000\r
2019-10-08,66900\r
2019-10-11,66900\r
2019-10-13,72800\r
2019-10-15,72800\r
2019-10-25,69900\r
2019-11-27,77300\r
2019-12-05,77300\r
2019-12-10,77300\r
2019-12-27,129200\r
2019-12-29,129200\r
2019-12-30,129200\r
2020-01-06,131600\r
2020-01-09,131600\r
2020-01-11,134400\r
2020-01-14,134400\r
2020-01-16,131100\r
2020-01-19,131100\r
2020-01-28,126800\r
2020-02-05,138100\r
2020-02-07,138100\r
2020-02-08,138100\r
2020-02-15,138100\r
2020-02-18,138100\r
2020-02-20,141900\r
2020-02-22,140900\r
2020-03-21,165300\r
2020-03-24,165300\r
2020-03-26,165300\r
2020-03-28,165300\r
2020-03-29,165300\r
2020-03-31,165300\r
2020-04-03,165300\r
2020-04-05,167600\r
2020-04-08,160700\r
2020-04-10,166800\r
2020-04-12,166800\r
2020-04-15,163100\r
2020-04-25,164700\r
2020-04-28,165700\r
2020-05-05,162500\r
2020-05-07,162500\r
2020-05-08,162500\r
2020-05-17,147500\r
2020-05-18,147500\r
2020-05-20,160100\r
2020-05-22,152400\r
2020-05-25,158000\r
2020-05-27,158000\r
2020-05-28,158000\r
2020-05-30,152100\r
2020-06-12,152100\r
2020-06-14,152100\r
2020-07-19,141800\r
2020-07-21,141800\r
2020-07-22,141800\r
2020-07-24,142700\r
2020-07-27,142700\r
2020-07-29,142700\r
2020-07-31,142700\r
2020-08-03,130800\r
2020-08-05,132600\r
2020-08-06,132600\r
2020-08-08,130500\r
2020-08-10,140800\r
2020-08-15,140800\r
2020-08-20,133800\r
2020-08-21,133800\r
2020-08-23,133800\r
2020-09-02,82200\r
2020-09-04,82200\r
2020-09-05,82200\r
2020-09-07,82200\r
2020-09-10,82200\r
2020-09-12,82200\r
2020-09-14,82200\r
2020-09-17,82700\r
2020-09-19,64100\r
2020-09-29,64100\r
2020-09-30,64100\r
2020-10-17,60700\r
2020-10-24,60700\r
2020-10-30,60700\r
2020-11-01,60700\r
2020-11-11,61200\r
2020-11-14,61200\r
2020-11-16,61200\r
2020-11-18,61200\r
2020-11-19,61200\r
2020-11-21,62100\r
2020-11-23,62100\r
2020-11-26,58800\r
2020-11-29,59700\r
2021-02-24,170900\r
2021-02-27,170100\r
2021-03-01,169200\r
2021-03-04,170300\r
2021-03-09,148700\r
2021-03-31,129300\r
2021-04-02,129300\r
2021-04-03,129300\r
2021-04-05,134400\r
2021-04-07,134800\r
2021-04-15,133900\r
2021-04-17,132800\r
2021-04-20,132800\r
2021-04-22,132800\r
2021-04-23,132800\r
2021-05-20,126400\r
2021-05-27,126400\r
2021-05-28,126400\r
2021-05-30,126400\r
2021-06-09,129100\r
2021-06-11,129100\r
2021-06-14,131700\r
2021-06-16,131700\r
2021-06-19,131700\r
2021-06-21,128300\r
2021-09-12,95700\r
2021-09-17,95700\r
2021-09-22,95800\r
2021-09-24,86700\r
2021-09-25,86700\r
2021-09-27,86700\r
2021-09-30,86700\r
2021-10-12,89100\r
2021-10-14,89100\r
2021-10-17,90000\r
2021-10-19,90000\r
2021-10-20,90000\r
2021-10-24,76200\r
2021-10-27,80800\r
2021-12-16,97500\r
2021-12-18,97500\r
2021-12-19,97500\r
2021-12-21,97500\r
2021-12-23,93700\r
2022-01-15,157100\r
2022-01-22,157100\r
2022-01-23,157100\r
2022-01-25,157300\r
2022-01-27,128400\r
2022-02-01,128400\r
2022-02-09,114200\r
2022-03-21,121100\r
2022-03-23,121100\r
2022-03-24,121100\r
2022-03-26,121100\r
2022-04-05,126400\r
2022-04-10,128400\r
2022-04-15,128100\r
2022-07-14,119800\r
2022-07-16,119800\r
2022-07-17,119800\r
2022-07-19,119800\r
2022-07-21,119800\r
2022-07-22,119800\r
2022-07-24,121700\r
2022-07-26,115100\r
2022-07-27,115100\r
2022-07-31,115100\r
2022-08-01,115100\r
2022-08-03,115100\r
2022-08-13,68300\r
2022-08-15,68300\r
2022-08-18,68300\r
2022-08-20,68300\r
2022-08-23,68300\r
2022-08-28,52900\r
2022-08-30,52900\r
2022-09-04,52900\r
2022-09-05,52900\r
2022-09-22,33000\r
2022-10-02,33000\r
2022-10-22,30100\r
2022-10-24,30100\r
2022-11-01,30100\r
2022-11-06,30200\r
2022-11-08,30200\r
2022-11-11,30200\r
2022-11-13,30200\r
2022-11-16,29600\r
2022-11-24,28800\r
2022-12-21,33700\r
2022-12-28,33700\r
2023-02-04,101800\r
2023-02-06,101800\r
2023-02-09,106900\r
2023-02-11,106900\r
2023-02-12,106900\r
2023-02-14,104100\r
2023-02-16,108300\r
2023-02-17,108300\r
2023-02-19,100400\r
2023-02-21,106000\r
2023-02-24,106000\r
2023-02-26,100300\r
2023-03-01,103700\r
2023-03-03,102900\r
2023-03-04,102900\r
2023-03-09,102900\r
2023-03-16,105000\r
2023-04-05,105300\r
2023-04-07,105300\r
2023-04-08,105300\r
2023-04-15,105300\r
`;export{r as default};
