const r=`date,value\r
2017-02-25,180800\r
2017-03-17,210800\r
2017-03-27,250100\r
2017-04-03,257300\r
2017-04-06,257300\r
2017-04-23,262800\r
2017-05-03,262800\r
2017-05-16,261900\r
2017-05-23,261900\r
2017-05-26,261500\r
2017-06-02,247600\r
2017-06-05,247600\r
2017-06-25,247900\r
2017-07-05,250700\r
2017-07-07,262400\r
2017-07-12,262400\r
2017-07-17,261000\r
2017-07-22,231600\r
2017-08-14,172900\r
2017-08-19,172900\r
2017-08-21,173500\r
2017-08-24,170300\r
2017-08-26,149200\r
2017-08-29,163100\r
2017-09-03,144300\r
2017-10-05,119000\r
2017-10-10,119000\r
2017-10-13,119100\r
2017-10-15,125600\r
2017-10-18,130100\r
2017-10-25,131700\r
2017-10-28,127000\r
2018-03-14,223200\r
2018-03-19,237300\r
2018-03-24,237300\r
2018-04-06,230500\r
2018-04-13,230500\r
2018-04-16,230500\r
2018-04-18,253100\r
2018-04-21,258300\r
2018-04-26,258300\r
2018-05-01,243000\r
2018-05-18,264000\r
2018-06-20,233900\r
2018-06-22,260900\r
2018-06-25,236800\r
2018-06-27,257400\r
2018-07-02,261800\r
2018-07-07,259900\r
2018-07-10,266000\r
2018-07-12,244500\r
2018-07-15,244500\r
2018-07-17,243700\r
2018-07-20,216600\r
2018-07-22,216600\r
2018-07-27,199000\r
2018-07-30,199000\r
2018-08-01,206400\r
2018-08-04,201100\r
2018-08-06,202500\r
2018-08-11,177500\r
2018-08-16,129300\r
2018-08-19,139100\r
2018-08-21,126200\r
2018-08-26,117800\r
2018-08-29,117800\r
2018-09-03,111500\r
2018-09-08,95000\r
2018-09-10,95100\r
2018-09-13,95100\r
2018-09-18,91300\r
2018-09-20,84500\r
2018-09-25,81600\r
2018-09-28,81600\r
2018-09-30,86300\r
2018-10-05,81700\r
2018-10-10,66400\r
2018-10-13,89800\r
2018-10-15,89800\r
2018-10-18,88300\r
2018-10-20,65000\r
2018-10-23,69700\r
2019-02-15,129300\r
2019-02-17,104900\r
2019-02-20,110900\r
2019-02-22,110700\r
2019-02-25,109700\r
2019-02-27,115100\r
2019-03-04,113100\r
2019-03-07,124100\r
2019-03-22,103300\r
2019-03-24,105200\r
2019-03-27,102900\r
2019-03-29,103600\r
2019-04-08,96700\r
2019-04-11,111500\r
2019-04-13,93300\r
2019-05-01,141800\r
2019-05-13,142700\r
2019-05-16,119800\r
2019-05-23,109700\r
2019-05-31,116800\r
2019-06-02,120700\r
2019-06-05,120700\r
2019-06-17,95400\r
2019-06-25,95400\r
2019-06-27,114400\r
2019-06-30,112200\r
2019-07-02,111900\r
2019-07-05,133400\r
2019-07-07,141600\r
2019-07-10,130500\r
2019-07-12,130500\r
2019-07-15,133200\r
2019-07-17,131000\r
2019-07-20,131300\r
2019-07-22,115400\r
2019-07-25,102400\r
2019-08-04,89200\r
2019-08-09,93100\r
2019-08-14,69600\r
2019-08-21,61900\r
2019-08-24,63400\r
2019-08-26,53700\r
2019-08-29,54300\r
2019-08-31,47700\r
2019-09-03,44000\r
2019-09-10,42600\r
2019-09-13,42300\r
2019-09-15,33600\r
2019-09-18,33600\r
2019-09-20,31000\r
2019-10-03,28000\r
2019-10-13,28400\r
2020-02-15,167100\r
2020-02-20,154300\r
2020-02-22,167000\r
2020-03-08,171800\r
2020-03-18,205200\r
2020-03-21,210200\r
2020-03-23,208700\r
2020-03-26,218200\r
2020-03-28,217400\r
2020-03-31,220700\r
2020-04-02,218900\r
2020-04-05,221100\r
2020-04-07,224300\r
2020-04-10,226200\r
2020-04-12,223800\r
2020-04-15,228600\r
2020-04-17,227200\r
2020-04-22,230200\r
2020-04-25,230200\r
2020-04-27,246200\r
2020-05-07,216400\r
2020-05-17,262700\r
2020-05-20,252900\r
2020-05-25,264800\r
2020-05-27,276800\r
2020-05-30,274600\r
2020-06-01,277000\r
2020-06-24,261800\r
2020-06-26,261500\r
2020-06-29,260700\r
2020-07-04,262400\r
2020-07-06,263400\r
2020-07-09,263300\r
2020-07-11,260900\r
2020-07-14,261100\r
2020-07-19,262600\r
2020-07-21,258200\r
2020-07-24,246800\r
2020-07-26,250000\r
2020-07-29,246100\r
2020-07-31,227900\r
2020-08-05,229400\r
2020-08-08,208300\r
2020-08-10,190200\r
2020-08-15,187000\r
2020-08-20,167200\r
2020-08-25,126800\r
2020-09-04,106400\r
2020-09-07,112100\r
2020-09-09,100300\r
2020-09-12,97600\r
2020-09-14,101400\r
2020-09-17,95600\r
2020-11-06,75300\r
2020-11-11,105100\r
2020-11-18,98200\r
2020-11-21,98200\r
2021-02-21,211400\r
2021-02-24,234000\r
2021-02-26,233000\r
2021-03-01,219900\r
2021-03-06,225300\r
2021-03-08,228600\r
2021-03-23,242200\r
2021-03-28,255600\r
2021-03-31,247000\r
2021-04-02,259900\r
2021-04-05,256400\r
2021-04-07,256600\r
2021-04-12,264400\r
2021-04-22,249200\r
2021-04-25,249200\r
2021-04-27,261900\r
2021-05-05,259300\r
2021-06-14,256200\r
2021-06-16,268500\r
2021-06-19,268500\r
2021-06-26,261000\r
2021-07-19,262800\r
2021-07-21,252800\r
2021-07-29,248900\r
2021-08-20,254300\r
2021-08-28,252300\r
2021-09-07,249700\r
2021-09-12,249700\r
2021-09-17,249700\r
2021-09-22,228300\r
2021-09-24,235300\r
2021-09-27,235300\r
2021-10-02,235300\r
2021-10-04,222400\r
2021-10-14,221200\r
2021-10-17,221200\r
2021-10-19,225400\r
2021-10-22,225400\r
2021-10-24,216600\r
2021-10-27,224900\r
2021-11-01,205600\r
2022-02-09,209900\r
2022-02-11,209900\r
2022-02-19,249200\r
2022-02-26,251100\r
2022-03-06,247500\r
2022-03-08,241700\r
2022-04-17,267800\r
2022-04-22,267800\r
2022-04-27,249400\r
2022-05-17,260900\r
2022-05-20,260900\r
2022-05-25,260900\r
2022-05-30,249200\r
2022-06-04,249200\r
2022-06-11,248100\r
2022-06-16,249900\r
2022-06-19,244500\r
2022-06-21,251300\r
2022-06-29,266500\r
2022-07-01,248600\r
2022-07-11,251500\r
2022-07-14,247400\r
2022-07-16,244100\r
2022-07-19,246200\r
2022-07-21,245000\r
2022-07-24,241100\r
2022-07-26,236700\r
2022-07-31,220900\r
2022-08-03,223700\r
2022-08-08,199800\r
2022-08-10,177300\r
2022-08-13,181400\r
2022-09-04,124300\r
2022-09-12,124000\r
2022-09-14,124000\r
2022-09-19,123300\r
2022-09-22,121200\r
2022-10-04,113000\r
2022-10-09,124200\r
2022-10-17,125500\r
2022-10-19,125500\r
2022-10-22,142600\r
2022-10-24,142600\r
2022-11-01,139800\r
2023-02-09,139800\r
2023-02-11,157300\r
2023-02-14,149900\r
2023-02-16,149900\r
2023-03-01,157800\r
2023-03-28,170600\r
2023-03-31,170600\r
2023-04-05,176400\r
2023-05-27,231000\r
2023-06-01,243400\r
2023-06-04,238200\r
2023-06-06,238200\r
2023-06-09,233200\r
2023-06-24,237900\r
`;export{r as default};
