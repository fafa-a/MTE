const r=`date,value\r
2017-02-25,139700\r
2017-03-07,135500\r
2017-03-17,156700\r
2017-03-27,169400\r
2017-04-03,173600\r
2017-04-06,166700\r
2017-04-16,168700\r
2017-04-23,173800\r
2017-05-13,130100\r
2017-05-16,176000\r
2017-05-23,176000\r
2017-05-26,176200\r
2017-06-02,173300\r
2017-06-05,167200\r
2017-06-12,168900\r
2017-06-15,170300\r
2017-06-22,177800\r
2017-06-25,167300\r
2017-07-02,154300\r
2017-07-05,161900\r
2017-07-07,172200\r
2017-07-10,166200\r
2017-07-12,166200\r
2017-07-17,170900\r
2017-07-22,175500\r
2017-07-25,175500\r
2017-07-27,178600\r
2017-07-30,175000\r
2017-08-04,178100\r
2017-08-06,178100\r
2017-08-11,171100\r
2017-08-14,174300\r
2017-08-19,179000\r
2017-08-21,168400\r
2017-08-24,168400\r
2017-08-26,177100\r
2017-08-29,165500\r
2017-09-05,159500\r
2017-09-08,159500\r
2017-09-10,157400\r
2017-09-13,169500\r
2017-09-20,167100\r
2017-09-23,158800\r
2017-09-28,166400\r
2017-10-03,160000\r
2017-10-05,150400\r
2017-10-08,158600\r
2017-10-10,150700\r
2017-10-13,155300\r
2017-10-15,155300\r
2017-10-18,157600\r
2017-10-20,151000\r
2017-10-23,152400\r
2017-10-25,147700\r
2017-10-28,152400\r
2017-10-30,147400\r
2017-11-07,151500\r
2017-11-12,141900\r
2017-11-14,141900\r
2017-11-17,143600\r
2017-11-19,147100\r
2017-11-22,147100\r
2017-11-24,147100\r
2017-11-27,135300\r
2017-11-29,148200\r
2017-12-07,137300\r
2017-12-09,137500\r
2017-12-12,137500\r
2017-12-14,140500\r
2017-12-17,140500\r
2017-12-19,137000\r
2017-12-24,132000\r
2017-12-27,129500\r
2018-02-25,137000\r
2018-02-27,140200\r
2018-03-02,143600\r
2018-03-07,143600\r
2018-03-09,139900\r
2018-03-14,146600\r
2018-03-17,146600\r
2018-03-19,155900\r
2018-03-27,147900\r
2018-04-01,150200\r
2018-04-06,150200\r
2018-04-11,150200\r
2018-04-18,165500\r
2018-04-21,168600\r
2018-04-26,164800\r
2018-05-11,166900\r
2018-05-18,166900\r
2018-05-21,173100\r
2018-05-23,175300\r
2018-05-31,175300\r
2018-06-02,167200\r
2018-06-20,144600\r
2018-06-22,151400\r
2018-06-25,169100\r
2018-06-27,169100\r
2018-07-02,162200\r
2018-07-05,165800\r
2018-07-07,171600\r
2018-07-10,168200\r
2018-07-12,170500\r
2018-07-15,169200\r
2018-07-17,173200\r
2018-07-20,170900\r
2018-07-25,167800\r
2018-07-27,168500\r
2018-07-30,169600\r
2018-08-01,173200\r
2018-08-04,166700\r
2018-08-06,170100\r
2018-08-11,168700\r
2018-08-14,166500\r
2018-08-16,178900\r
2018-08-19,172400\r
2018-08-21,167900\r
2018-08-24,171800\r
2018-08-26,164600\r
2018-08-29,164600\r
2018-08-31,168200\r
2018-09-03,162600\r
2018-09-05,162600\r
2018-09-08,165100\r
2018-09-10,165100\r
2018-09-13,143900\r
2018-09-20,160000\r
2018-09-23,162900\r
2018-09-25,160000\r
2018-09-28,166100\r
2018-09-30,160200\r
2018-10-03,159500\r
2018-10-05,157800\r
2018-10-13,173000\r
2018-10-23,146000\r
2018-10-25,163900\r
2018-10-30,163900\r
2018-11-04,152900\r
2018-11-12,140400\r
2018-11-14,140400\r
2018-11-24,115600\r
2018-11-27,124500\r
2018-12-02,124500\r
2018-12-04,124500\r
2018-12-07,121700\r
2018-12-19,132400\r
2018-12-27,124800\r
2018-12-29,124800\r
2019-01-03,99800\r
2019-01-06,99800\r
2019-01-11,99800\r
2019-01-16,99800\r
2019-02-12,100000\r
2019-02-15,100000\r
2019-02-17,100000\r
2019-02-20,100000\r
2019-02-22,116200\r
2019-02-25,116200\r
2019-02-27,100200\r
2019-03-02,120400\r
2019-03-07,120400\r
2019-03-09,120400\r
2019-03-12,124700\r
2019-03-14,124700\r
2019-03-17,124200\r
2019-03-19,124200\r
2019-03-22,132000\r
2019-03-24,132000\r
2019-03-27,128200\r
2019-03-29,130400\r
2019-04-01,138400\r
2019-04-08,137400\r
2019-04-13,138800\r
2019-04-28,130000\r
2019-05-01,139100\r
2019-05-06,149800\r
2019-05-13,142300\r
2019-05-16,148700\r
2019-05-23,146300\r
2019-05-28,146300\r
2019-05-31,150100\r
2019-06-02,153700\r
2019-06-07,153700\r
2019-06-12,159200\r
2019-06-17,134800\r
2019-06-22,148200\r
2019-06-25,148200\r
2019-06-27,136800\r
2019-06-30,144500\r
2019-07-02,142900\r
2019-07-05,146300\r
2019-07-07,150800\r
2019-07-10,150200\r
2019-07-12,146300\r
2019-07-15,148900\r
2019-07-17,151400\r
2019-07-20,146900\r
2019-07-22,151200\r
2019-07-25,147900\r
2019-08-01,146200\r
2019-08-04,143600\r
2019-08-06,143600\r
2019-08-09,143600\r
2019-08-11,148800\r
2019-08-14,143100\r
2019-08-16,145700\r
2019-08-21,151300\r
2019-08-24,144500\r
2019-08-26,144500\r
2019-08-29,150700\r
2019-08-31,141700\r
2019-09-03,142300\r
2019-09-05,142300\r
2019-09-08,142300\r
2019-09-13,134500\r
2019-09-15,140400\r
2019-09-18,140100\r
2019-10-03,139100\r
2019-10-05,138900\r
2019-10-08,139200\r
2019-10-10,139200\r
2019-10-13,139200\r
2019-10-15,133500\r
2019-10-25,122800\r
2019-10-30,122800\r
2019-11-02,122800\r
2019-11-04,126400\r
2019-11-09,125100\r
2019-11-12,130600\r
2019-11-17,130600\r
2019-11-19,130600\r
2019-11-24,130600\r
2019-12-07,140800\r
2019-12-09,140800\r
2019-12-14,133700\r
2019-12-17,133700\r
2019-12-22,133700\r
2020-01-01,117400\r
2020-01-06,117400\r
2020-01-08,117400\r
2020-01-11,136700\r
2020-01-16,136700\r
2020-01-31,153400\r
2020-02-02,155400\r
2020-02-05,161900\r
2020-02-07,161900\r
2020-02-10,161900\r
2020-02-15,147000\r
2020-02-17,148200\r
2020-02-20,143200\r
2020-02-22,131600\r
2020-02-27,131600\r
2020-03-01,131600\r
2020-03-08,118500\r
2020-03-11,132800\r
2020-03-13,132800\r
2020-03-18,124900\r
2020-03-21,124900\r
2020-03-28,166000\r
2020-03-31,166000\r
2020-04-05,166400\r
2020-04-07,166400\r
2020-04-10,160300\r
2020-04-15,163600\r
2020-04-25,160500\r
2020-05-07,139900\r
2020-05-17,147700\r
2020-05-20,154800\r
2020-05-22,150700\r
2020-05-25,159300\r
2020-05-27,158600\r
2020-05-30,158600\r
2020-06-06,155600\r
2020-06-19,158900\r
2020-06-21,174900\r
2020-06-24,163400\r
2020-06-26,163400\r
2020-07-01,163600\r
2020-07-04,167200\r
2020-07-06,161000\r
2020-07-09,162900\r
2020-07-11,175900\r
2020-07-14,167900\r
2020-07-16,167900\r
2020-07-19,169200\r
2020-07-21,168900\r
2020-07-24,161800\r
2020-07-26,160700\r
2020-07-29,164900\r
2020-07-31,162000\r
2020-08-03,158400\r
2020-08-05,157100\r
2020-08-08,158300\r
2020-08-10,158400\r
2020-08-13,164500\r
2020-08-15,162200\r
2020-08-20,155700\r
2020-08-23,163000\r
2020-08-25,159700\r
2020-08-30,159800\r
2020-09-02,157900\r
2020-09-04,153700\r
2020-09-07,149200\r
2020-09-12,155700\r
2020-09-14,145700\r
2020-09-17,151500\r
2020-09-19,151500\r
2020-09-24,156400\r
2020-09-27,156400\r
2020-09-29,156400\r
2020-10-04,155300\r
2020-10-17,134300\r
2020-10-24,139200\r
2020-11-01,139200\r
2020-11-08,121500\r
2020-11-11,125800\r
2020-11-16,125800\r
2020-11-18,125800\r
2020-11-21,130100\r
2020-11-23,121300\r
2020-12-03,125700\r
2021-02-11,145500\r
2021-02-14,145500\r
2021-02-19,145500\r
2021-03-21,161500\r
2021-03-23,171900\r
2021-03-28,162100\r
2021-03-31,166700\r
2021-04-02,166200\r
2021-04-05,161200\r
2021-04-07,160500\r
2021-04-12,160100\r
2021-04-15,163700\r
2021-04-20,167500\r
2021-04-22,167500\r
2021-05-12,173700\r
2021-05-17,173700\r
2021-05-20,173700\r
2021-05-27,176700\r
2021-05-30,176700\r
2021-06-06,176700\r
2021-06-09,157200\r
2021-06-11,176100\r
2021-06-14,176100\r
2021-06-16,170300\r
2021-06-19,170300\r
2021-06-21,178000\r
2021-06-26,168400\r
2021-07-11,171800\r
2021-07-14,171800\r
2021-07-16,171800\r
2021-07-19,171800\r
2021-07-21,176100\r
2021-07-26,173400\r
2021-07-29,175200\r
2021-07-31,175200\r
2021-08-05,169000\r
2021-08-10,168600\r
2021-08-13,168900\r
2021-08-15,167000\r
2021-08-18,169500\r
2021-08-20,166300\r
2021-08-23,163600\r
2021-08-25,167000\r
2021-08-28,169000\r
2021-08-30,164900\r
2021-09-04,165100\r
2021-09-12,165100\r
2021-09-22,162500\r
2021-09-27,158700\r
2021-09-29,158700\r
2021-10-02,158700\r
2021-10-12,141500\r
2021-10-14,152200\r
2021-10-17,152200\r
2021-10-19,152200\r
2021-10-22,152200\r
2021-10-24,144900\r
2021-10-27,135100\r
2021-11-06,135100\r
2021-11-18,131600\r
2021-11-21,131600\r
2021-11-26,131600\r
2021-12-16,129900\r
2021-12-18,143200\r
2021-12-21,143200\r
2021-12-23,143200\r
2021-12-26,143200\r
2022-01-12,145400\r
2022-01-15,148200\r
2022-01-17,148200\r
2022-01-20,148200\r
2022-01-22,135600\r
2022-01-25,126900\r
2022-01-27,130300\r
2022-01-30,132800\r
2022-02-01,129500\r
2022-02-06,134400\r
2022-02-09,132000\r
2022-02-26,143400\r
2022-03-01,144700\r
2022-03-03,140600\r
2022-03-08,141300\r
2022-04-05,159400\r
2022-04-10,159400\r
2022-04-17,165100\r
2022-04-22,165100\r
2022-04-25,165100\r
2022-05-17,172700\r
2022-05-20,177300\r
2022-05-22,174500\r
2022-05-27,178200\r
2022-05-30,176700\r
2022-06-01,181500\r
2022-06-04,176800\r
2022-06-06,179300\r
2022-06-09,175100\r
2022-06-11,182700\r
2022-06-14,182700\r
2022-06-16,182700\r
2022-06-19,181000\r
2022-06-29,156800\r
2022-07-01,153800\r
2022-07-04,158200\r
2022-07-09,158200\r
2022-07-11,173100\r
2022-07-14,171000\r
2022-07-16,172300\r
2022-07-19,172300\r
2022-07-21,170000\r
2022-07-24,167200\r
2022-07-26,167500\r
2022-07-31,170200\r
2022-08-03,168300\r
2022-08-05,171300\r
2022-08-08,173600\r
2022-08-10,170100\r
2022-08-13,174100\r
2022-08-15,168200\r
2022-08-20,166700\r
2022-08-23,162400\r
2022-08-28,160500\r
2022-08-30,160500\r
2022-09-02,160300\r
2022-09-04,165700\r
2022-09-12,161800\r
2022-10-02,155600\r
2022-10-04,159200\r
2022-10-09,153000\r
2022-10-12,153600\r
2022-10-22,143800\r
2022-11-01,138100\r
2022-11-06,138100\r
2022-11-08,138100\r
2022-11-11,138100\r
2022-11-16,140200\r
2022-11-18,140200\r
2022-11-23,140200\r
2022-12-06,100600\r
2022-12-16,100600\r
2022-12-23,132000\r
2022-12-26,132000\r
2022-12-28,132000\r
2023-01-10,132800\r
2023-01-12,132800\r
2023-01-17,132800\r
2023-01-20,132800\r
2023-01-30,129200\r
2023-02-01,129200\r
2023-02-04,129200\r
2023-02-06,148800\r
2023-02-09,130100\r
2023-02-11,148400\r
2023-02-14,148400\r
2023-02-16,148400\r
2023-02-19,149300\r
2023-02-24,144500\r
2023-02-26,144500\r
2023-03-01,148500\r
2023-03-03,153100\r
2023-03-06,153100\r
2023-03-13,148400\r
2023-03-16,151600\r
2023-03-28,160300\r
2023-04-02,160300\r
2023-04-05,160300\r
2023-04-07,160300\r
2023-04-17,171800\r
2023-04-20,171800\r
2023-04-27,162100\r
2023-05-02,161500\r
`;export{r as default};
