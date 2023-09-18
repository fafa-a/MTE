const r=`date,value\r
2017-02-23,204000\r
2017-02-26,179000\r
2017-03-08,175900\r
2017-03-15,171400\r
2017-04-04,176100\r
2017-04-24,203000\r
2017-05-04,200100\r
2017-05-14,185700\r
2017-05-17,201600\r
2017-05-24,189300\r
2017-05-27,211000\r
2017-06-03,192700\r
2017-06-06,182600\r
2017-06-13,187100\r
2017-06-16,202900\r
2017-06-23,176200\r
2017-06-26,194400\r
2017-07-03,170800\r
2017-07-06,188600\r
2017-07-08,161800\r
2017-07-11,186600\r
2017-07-13,157100\r
2017-07-18,154500\r
2017-07-21,172800\r
2017-07-23,160900\r
2017-07-28,141500\r
2017-07-31,163400\r
2017-08-02,136900\r
2017-08-05,153800\r
2017-08-07,135700\r
2017-08-12,133200\r
2017-08-15,133300\r
2017-08-17,132300\r
2017-08-20,133700\r
2017-08-22,126800\r
2017-08-25,131400\r
2017-08-30,116300\r
2017-09-01,118000\r
2017-09-21,97900\r
2017-10-11,14800\r
2017-10-14,14500\r
2017-10-16,12700\r
2017-10-24,9500\r
2017-10-26,12700\r
2018-03-10,200900\r
2018-04-02,198700\r
2018-04-14,177100\r
2018-04-17,200600\r
2018-04-19,209800\r
2018-04-22,207600\r
2018-04-24,196700\r
2018-04-27,199200\r
2018-04-29,203300\r
2018-06-03,208700\r
2018-06-18,213000\r
2018-07-01,204000\r
2018-07-06,223100\r
2018-07-08,222100\r
2018-07-13,211000\r
2018-07-18,208800\r
2018-07-21,195800\r
2018-07-26,219900\r
2018-07-28,208900\r
2018-07-31,223200\r
2018-08-02,209400\r
2018-08-07,212500\r
2018-08-12,196100\r
2018-09-09,191600\r
2018-09-11,179900\r
2018-09-16,187900\r
2018-09-24,165200\r
2018-09-26,166300\r
2018-09-29,163400\r
2018-10-09,167800\r
2018-10-19,146400\r
2018-10-21,156000\r
2018-10-24,146600\r
2018-11-18,192400\r
2019-02-06,199500\r
2019-02-13,98600\r
2019-02-16,140800\r
2019-02-18,194000\r
2019-02-23,205500\r
2019-02-28,197300\r
2019-03-03,164300\r
2019-03-18,190300\r
2019-03-20,200900\r
2019-03-23,186800\r
2019-03-28,5900\r
2019-03-30,165700\r
2019-04-14,203200\r
2019-04-17,44500\r
2019-04-19,169500\r
2019-05-02,216300\r
2019-05-09,199200\r
2019-06-03,205400\r
2019-06-11,158400\r
2019-06-13,197500\r
2019-06-16,101700\r
2019-06-23,204900\r
2019-06-26,225200\r
2019-06-28,181200\r
2019-07-01,33600\r
2019-07-03,178600\r
2019-07-06,216000\r
2019-07-08,201600\r
2019-07-13,157300\r
2019-07-18,163400\r
2019-07-21,29400\r
2019-07-23,142100\r
2019-07-26,170900\r
2019-07-31,166800\r
2019-08-02,134200\r
2019-08-05,152000\r
2019-08-07,151300\r
2019-08-10,146400\r
2019-08-15,148500\r
2019-08-20,122800\r
2019-08-25,63500\r
2019-08-27,140900\r
2019-08-30,121200\r
2019-09-06,150500\r
2019-09-09,114000\r
2019-09-11,88700\r
2019-09-16,125900\r
2019-09-26,117900\r
2019-09-29,122500\r
2019-10-01,119300\r
2019-10-06,118100\r
2019-10-11,117800\r
2019-10-14,79400\r
2019-10-19,101600\r
2019-10-26,101300\r
2020-02-06,195900\r
2020-02-16,194700\r
2020-02-26,184600\r
2020-02-28,165900\r
2020-03-04,171900\r
2020-03-19,195900\r
2020-03-24,195900\r
2020-04-01,205600\r
2020-04-11,197000\r
2020-05-06,218500\r
2020-05-23,217700\r
2020-05-26,219400\r
2020-05-28,212300\r
2020-06-12,231800\r
2020-06-15,220400\r
2020-06-20,51500\r
2020-06-22,208500\r
2020-06-27,218500\r
2020-06-30,232200\r
2020-07-02,219200\r
2020-07-05,229900\r
2020-07-07,196900\r
2020-07-17,211200\r
2020-07-22,191000\r
2020-07-27,179400\r
2020-07-30,187300\r
2020-08-01,155400\r
2020-08-09,172000\r
2020-08-11,162300\r
2020-08-14,182700\r
2020-08-16,166100\r
2020-08-21,147900\r
2020-08-26,163800\r
2020-09-05,133300\r
2020-09-13,131600\r
2020-09-15,126700\r
2020-09-30,191500\r
2020-10-08,163500\r
2020-10-28,170200\r
2020-11-07,156400\r
2021-02-15,192800\r
2021-02-20,201600\r
2021-02-25,192300\r
2021-03-04,187700\r
2021-03-24,165800\r
2021-03-29,172000\r
2021-05-03,168500\r
2021-05-06,182800\r
2021-05-08,168900\r
2021-05-18,212300\r
2021-05-21,206300\r
2021-05-26,199200\r
2021-06-10,216900\r
2021-06-22,213300\r
2021-06-25,212800\r
2021-06-27,195200\r
2021-06-30,211400\r
2021-07-05,207400\r
2021-07-10,211200\r
2021-07-12,188800\r
2021-07-20,197900\r
2021-07-22,192800\r
2021-07-30,193200\r
2021-08-06,169200\r
2021-08-11,171500\r
2021-08-14,167500\r
2021-08-16,163800\r
2021-08-21,160800\r
2021-08-24,172300\r
2021-09-03,164900\r
2021-09-18,137600\r
2021-09-23,142900\r
2021-10-03,126300\r
2021-10-10,121600\r
2021-10-20,124300\r
2022-02-02,151200\r
2022-02-10,106600\r
2022-02-12,143700\r
2022-02-20,146200\r
2022-02-22,144200\r
2022-03-02,144900\r
2022-03-22,196200\r
2022-03-24,187400\r
2022-04-11,194300\r
2022-04-16,190200\r
2022-04-18,183200\r
2022-04-26,203500\r
2022-04-28,197400\r
2022-05-11,211100\r
2022-05-13,195500\r
2022-05-16,206300\r
2022-05-18,204200\r
2022-05-21,215000\r
2022-05-23,202200\r
2022-06-02,193300\r
2022-06-07,181600\r
2022-06-12,178200\r
2022-06-15,194200\r
2022-06-17,171000\r
2022-06-20,179800\r
2022-07-05,165500\r
2022-07-07,173500\r
2022-07-12,147700\r
2022-07-15,156100\r
2022-07-17,134100\r
2022-07-22,125100\r
2022-07-25,143000\r
2022-07-27,123500\r
2022-07-30,135500\r
2022-08-06,121000\r
2022-08-14,138100\r
2022-09-10,100700\r
2022-09-13,105400\r
2022-09-23,88200\r
2022-10-05,101100\r
2022-10-08,111500\r
2022-10-18,122900\r
2022-10-20,111300\r
2022-10-23,112600\r
2022-10-25,109200\r
2022-10-28,117000\r
2022-10-30,104200\r
2022-11-14,105100\r
2023-02-02,165900\r
2023-02-10,175700\r
2023-02-12,160200\r
2023-02-15,167400\r
2023-02-22,163100\r
2023-03-12,169500\r
2023-03-24,169300\r
2023-03-27,173100\r
2023-04-06,161800\r
2023-05-11,212800\r
2023-05-26,214800\r
2023-05-28,207600\r
2023-06-17,200800\r
2023-06-20,225400\r
2023-06-25,216500\r
2023-06-27,212700\r
2023-07-10,222400\r
2023-07-12,202800\r
2023-07-15,205300\r
2023-07-17,197800\r
2023-07-20,203000\r
2023-07-25,197500\r
2023-07-27,179800\r
2023-07-30,182400\r
2023-08-06,163200\r
2023-08-09,167700\r
2023-08-11,154900\r
2023-08-14,166400\r
2023-08-16,152500\r
2023-08-19,158400\r
2023-08-21,155300\r
2023-08-24,161000\r
2023-08-26,142100\r
2023-08-31,137700\r
2023-09-03,143800\r
2023-09-05,129700\r
2023-09-08,141300\r
2023-09-10,132600\r
`;export{r as default};
