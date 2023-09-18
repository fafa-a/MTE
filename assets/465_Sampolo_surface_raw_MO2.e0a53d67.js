const r=`date,value\r
2017-01-07,167200\r
2017-01-14,159400\r
2017-02-16,133900\r
2017-02-23,184100\r
2017-02-26,157000\r
2017-03-05,164000\r
2017-03-08,159000\r
2017-03-15,163600\r
2017-03-18,170700\r
2017-03-25,167600\r
2017-03-28,168300\r
2017-04-04,180100\r
2017-04-07,176400\r
2017-04-14,182900\r
2017-04-17,191300\r
2017-05-07,206000\r
2017-05-14,202000\r
2017-05-17,200800\r
2017-05-24,201100\r
2017-05-27,205700\r
2017-06-03,209900\r
2017-06-06,214400\r
2017-06-13,212800\r
2017-06-16,219700\r
2017-06-23,211000\r
2017-06-26,213800\r
2017-07-01,205500\r
2017-07-03,205900\r
2017-07-06,208500\r
2017-07-08,211900\r
2017-07-11,210300\r
2017-07-13,212600\r
2017-07-18,210700\r
2017-07-21,214500\r
2017-07-23,203700\r
2017-07-26,203500\r
2017-07-28,202800\r
2017-07-31,204800\r
2017-08-02,196900\r
2017-08-05,195200\r
2017-08-07,190500\r
2017-08-12,185200\r
2017-08-15,183700\r
2017-08-17,178000\r
2017-08-20,169700\r
2017-08-22,170800\r
2017-08-25,172400\r
2017-08-27,165000\r
2017-08-30,161200\r
2017-09-01,152400\r
2017-09-04,146900\r
2017-09-09,141200\r
2017-09-11,128100\r
2017-09-14,87100\r
2017-09-16,87100\r
2017-09-19,87100\r
2017-09-21,85500\r
2017-09-24,91400\r
2017-10-11,128400\r
2017-10-14,141100\r
2017-10-16,137400\r
2017-10-19,138000\r
2017-10-21,141800\r
2017-10-24,143700\r
2017-10-26,142200\r
2017-10-31,139700\r
2017-11-03,138400\r
2017-11-05,147000\r
2017-11-08,136900\r
2017-11-18,96400\r
2017-11-20,97600\r
2017-11-23,85400\r
2017-11-28,85400\r
2017-11-30,76500\r
2017-12-03,76300\r
2017-12-05,91700\r
2017-12-13,141900\r
2018-01-17,174300\r
2018-01-19,174300\r
2018-01-22,174300\r
2018-01-24,174600\r
2018-01-27,172100\r
2018-02-08,173300\r
2018-02-11,177200\r
2018-02-13,176000\r
2018-02-16,176000\r
2018-02-18,176000\r
2018-03-13,186200\r
2018-03-18,186200\r
2018-03-23,183700\r
2018-04-17,163300\r
2018-04-19,188800\r
2018-04-22,173400\r
2018-04-24,173500\r
2018-04-27,171200\r
2018-04-29,177500\r
2018-05-07,202300\r
2018-06-03,190200\r
2018-06-08,190200\r
2018-06-13,190200\r
2018-06-21,220300\r
2018-06-26,220300\r
2018-06-28,214300\r
2018-07-01,218000\r
2018-07-03,205900\r
2018-07-06,220000\r
2018-07-08,208700\r
2018-07-11,214000\r
2018-07-13,214900\r
2018-07-18,213600\r
2018-07-21,207900\r
2018-07-23,202300\r
2018-07-26,203800\r
2018-07-28,208900\r
2018-07-31,216100\r
2018-08-02,222500\r
2018-08-05,222500\r
2018-08-07,216500\r
2018-08-10,214600\r
2018-08-12,212700\r
2018-08-15,209900\r
2018-08-17,209900\r
2018-08-27,206100\r
2018-08-30,204500\r
2018-09-01,200600\r
2018-09-06,200600\r
2018-09-09,201400\r
2018-09-11,193500\r
2018-09-14,189400\r
2018-09-16,189400\r
2018-09-19,189400\r
2018-09-21,194600\r
2018-09-24,189900\r
2018-09-26,195600\r
2018-09-29,175800\r
2018-10-01,175800\r
2018-10-06,180600\r
2018-10-09,170800\r
2018-10-14,149600\r
2018-10-19,186200\r
2018-10-21,164000\r
2018-10-24,167500\r
2018-10-26,165500\r
2018-12-05,141700\r
2018-12-08,146800\r
2018-12-10,141700\r
2018-12-15,138200\r
2018-12-18,144900\r
2019-01-07,144800\r
2019-01-09,143900\r
2019-01-12,144900\r
2019-01-14,139900\r
2019-01-17,139900\r
2019-01-22,150600\r
2019-01-24,150500\r
2019-01-29,162800\r
2019-02-03,160300\r
2019-02-06,172400\r
2019-02-08,172400\r
2019-02-11,172400\r
2019-02-13,139800\r
2019-02-16,122100\r
2019-02-18,151800\r
2019-02-21,139600\r
2019-02-23,143700\r
2019-02-26,150900\r
2019-02-28,172800\r
2019-03-03,175400\r
2019-03-08,179600\r
2019-03-10,183900\r
2019-03-18,190600\r
2019-03-23,195400\r
2019-03-25,187600\r
2019-03-28,183500\r
2019-03-30,184600\r
2019-04-02,182700\r
2019-04-07,182700\r
2019-04-09,172200\r
2019-04-12,161300\r
2019-04-14,171100\r
2019-04-17,190700\r
2019-04-19,192300\r
2019-04-27,208300\r
2019-04-29,206000\r
2019-05-02,214800\r
2019-05-07,217100\r
2019-05-09,214500\r
2019-05-14,208000\r
2019-05-19,199500\r
2019-05-24,199500\r
2019-06-03,206800\r
2019-06-06,206800\r
2019-06-11,206800\r
2019-06-13,200800\r
2019-06-18,226700\r
2019-06-21,227400\r
2019-06-23,220200\r
2019-06-26,220100\r
2019-06-28,216800\r
2019-07-01,216600\r
2019-07-03,210400\r
2019-07-06,209000\r
2019-07-08,209400\r
2019-07-11,209100\r
2019-07-13,208600\r
2019-07-16,208800\r
2019-07-18,208900\r
2019-07-21,209800\r
2019-07-23,204600\r
2019-07-26,202800\r
2019-07-28,205400\r
2019-07-31,205100\r
2019-08-02,209700\r
2019-08-05,214000\r
2019-08-07,213300\r
2019-08-10,214600\r
2019-08-12,219900\r
2019-08-15,213800\r
2019-08-17,218500\r
2019-08-20,217700\r
2019-08-22,195500\r
2019-08-25,196000\r
2019-08-27,189600\r
2019-08-30,188700\r
2019-09-04,181700\r
2019-09-06,184400\r
2019-09-09,181600\r
2019-09-11,177000\r
2019-09-14,169800\r
2019-09-16,159000\r
2019-09-19,159000\r
2019-09-24,148100\r
2019-09-26,145400\r
2019-09-29,139400\r
2019-10-01,139400\r
2019-10-09,122500\r
2019-10-11,126400\r
2019-10-14,124900\r
2019-10-16,118100\r
2019-10-19,115300\r
2019-11-30,80200\r
2019-12-08,80200\r
2019-12-10,123900\r
2019-12-13,123900\r
2019-12-15,123900\r
2020-01-12,143300\r
2020-01-14,136600\r
2020-01-17,145900\r
2020-01-22,147600\r
2020-01-27,148000\r
2020-02-01,171300\r
2020-02-06,164000\r
2020-02-08,141000\r
2020-02-11,146800\r
2020-02-13,147100\r
2020-02-16,147100\r
2020-02-18,129000\r
2020-02-21,135100\r
2020-02-26,145800\r
2020-02-28,121900\r
2020-03-04,121700\r
2020-03-07,122600\r
2020-03-14,124500\r
2020-03-19,134200\r
2020-03-22,122700\r
2020-03-24,133100\r
2020-03-29,124300\r
2020-04-01,131700\r
2020-04-03,131700\r
2020-04-06,140700\r
2020-04-08,140300\r
2020-04-11,143800\r
2020-04-23,161900\r
2020-04-26,148800\r
2020-05-03,184000\r
2020-05-06,190100\r
2020-05-11,190100\r
2020-05-23,211600\r
2020-05-26,214900\r
2020-05-28,207400\r
2020-05-31,207400\r
2020-06-05,210600\r
2020-06-10,211700\r
2020-06-12,208100\r
2020-06-15,211900\r
2020-06-20,152000\r
2020-06-22,211300\r
2020-06-25,209300\r
2020-06-27,208600\r
2020-06-30,222300\r
2020-07-02,215000\r
2020-07-05,221000\r
2020-07-07,218500\r
2020-07-10,219000\r
2020-07-12,220400\r
2020-07-15,224300\r
2020-07-17,221700\r
2020-07-20,221400\r
2020-07-22,218300\r
2020-07-25,223700\r
2020-07-27,224300\r
2020-07-30,224800\r
2020-08-01,218700\r
2020-08-04,218700\r
2020-08-06,215700\r
2020-08-09,210100\r
2020-08-11,205500\r
2020-08-14,203800\r
2020-08-16,203500\r
2020-08-19,204300\r
2020-08-21,202700\r
2020-08-24,204400\r
2020-08-26,203000\r
2020-09-03,205100\r
2020-09-05,181400\r
2020-09-08,194700\r
2020-09-10,194700\r
2020-09-13,191500\r
2020-09-15,181000\r
2020-09-18,181000\r
2020-09-20,181000\r
2020-09-25,174200\r
2020-09-28,174200\r
2020-09-30,196400\r
2020-10-03,152700\r
2020-10-08,165500\r
2020-10-10,146100\r
2020-10-15,160100\r
2020-10-18,160100\r
2020-10-20,160100\r
2020-10-25,136300\r
2020-10-28,134000\r
2020-10-30,134000\r
2020-11-02,114800\r
2020-11-07,115600\r
2020-11-09,115600\r
2020-11-17,110600\r
2020-11-19,111700\r
2020-11-22,115600\r
2020-11-24,111200\r
2020-12-02,111200\r
2020-12-07,108700\r
2020-12-09,99200\r
2021-01-13,132500\r
2021-01-16,119200\r
2021-01-18,119300\r
2021-01-23,119300\r
2021-01-26,172900\r
2021-01-31,170600\r
2021-02-02,171200\r
2021-02-15,135900\r
2021-02-17,135900\r
2021-02-20,135900\r
2021-02-25,163100\r
2021-02-27,180500\r
2021-03-02,175400\r
2021-03-04,177700\r
2021-03-14,183400\r
2021-03-24,172400\r
2021-03-29,171600\r
2021-04-01,171600\r
2021-04-03,160800\r
2021-04-06,157900\r
2021-04-08,157900\r
2021-04-11,165200\r
2021-04-13,165200\r
2021-05-06,165200\r
2021-05-08,167000\r
2021-05-13,167000\r
2021-05-18,134900\r
2021-05-21,168000\r
2021-05-23,168000\r
2021-05-26,158200\r
2021-05-28,158200\r
2021-05-31,184800\r
2021-06-05,173300\r
2021-06-10,210700\r
2021-06-12,210700\r
2021-06-15,200200\r
2021-06-17,200200\r
2021-06-22,201200\r
2021-06-25,202900\r
2021-06-27,206000\r
2021-06-30,212800\r
2021-07-02,212800\r
2021-07-05,215400\r
2021-07-07,221700\r
2021-07-10,210400\r
2021-07-12,209100\r
2021-07-15,209100\r
2021-07-17,215900\r
2021-07-20,209800\r
2021-07-22,205600\r
2021-07-27,203200\r
2021-07-30,205300\r
2021-08-01,203500\r
2021-08-04,201400\r
2021-08-06,201800\r
2021-08-11,199300\r
2021-08-14,202400\r
2021-08-16,194500\r
2021-08-19,202700\r
2021-08-21,194800\r
2021-08-24,194800\r
2021-08-26,186300\r
2021-08-29,176900\r
2021-08-31,173000\r
2021-09-03,174100\r
2021-09-05,165200\r
2021-09-08,163600\r
2021-10-05,76900\r
2021-10-08,76900\r
2021-10-10,88400\r
2021-10-13,88400\r
2021-10-15,85400\r
2021-10-18,94000\r
2021-10-20,93500\r
2021-10-23,100400\r
2021-11-19,119400\r
2021-11-22,119400\r
2021-11-24,119400\r
2021-11-27,119400\r
2021-12-07,97200\r
2021-12-09,97200\r
2021-12-12,136100\r
2021-12-14,124600\r
2021-12-17,132700\r
2022-01-13,140600\r
2022-01-16,128400\r
2022-01-18,136500\r
2022-01-21,128900\r
2022-01-23,134100\r
2022-01-26,127600\r
2022-01-28,135300\r
2022-01-31,142900\r
2022-02-02,148600\r
2022-02-05,148000\r
2022-02-07,150400\r
2022-02-10,149200\r
2022-02-12,141400\r
2022-02-15,147200\r
2022-02-17,135900\r
2022-02-20,135500\r
2022-02-22,141300\r
2022-02-25,141300\r
2022-02-27,141300\r
2022-03-02,145400\r
2022-03-07,140200\r
2022-03-09,141300\r
2022-03-14,123500\r
2022-03-22,156500\r
2022-03-24,163100\r
2022-03-29,163100\r
2022-04-03,158800\r
2022-04-11,177400\r
2022-04-13,177400\r
2022-04-16,181500\r
2022-04-18,177500\r
2022-04-23,183800\r
2022-04-26,182200\r
2022-04-28,185600\r
2022-05-01,187700\r
2022-05-08,183400\r
2022-05-11,199400\r
2022-05-13,207300\r
2022-05-16,193500\r
2022-05-18,198200\r
2022-05-21,195800\r
2022-05-23,199200\r
2022-05-26,203700\r
2022-05-28,205000\r
2022-05-31,201900\r
2022-06-02,206400\r
2022-06-07,200100\r
2022-06-10,207800\r
2022-06-12,210400\r
2022-06-15,205900\r
2022-06-17,208000\r
2022-06-20,208600\r
2022-06-25,203800\r
2022-06-27,201100\r
2022-07-02,202900\r
2022-07-05,203400\r
2022-07-07,202300\r
2022-07-10,202600\r
2022-07-12,206000\r
2022-07-15,201600\r
2022-07-17,196900\r
2022-07-20,196700\r
2022-07-22,192600\r
2022-07-25,190400\r
2022-07-27,178100\r
2022-07-30,185800\r
2022-08-01,169000\r
2022-08-04,160800\r
2022-08-06,150700\r
2022-08-09,146800\r
2022-08-11,151100\r
2022-08-14,160100\r
2022-08-16,158000\r
2022-08-19,173300\r
2022-08-21,173300\r
2022-08-24,174500\r
2022-08-26,159600\r
2022-08-29,159600\r
2022-09-05,150900\r
2022-09-10,115100\r
2022-09-13,115700\r
2022-09-18,115700\r
2022-09-20,115700\r
2022-09-23,78000\r
2022-10-08,144500\r
2022-10-10,144500\r
2022-10-13,144500\r
2022-10-15,158700\r
2022-10-18,157800\r
2022-10-20,160800\r
2022-10-23,168800\r
2022-10-25,168800\r
2022-10-28,172600\r
2022-10-30,167500\r
2022-11-02,169500\r
2022-11-04,168100\r
2022-11-14,164000\r
2022-11-17,157100\r
2022-11-24,142200\r
2022-11-27,118200\r
2022-12-02,110300\r
2022-12-04,119200\r
2022-12-07,135400\r
2022-12-09,126700\r
2023-01-31,143900\r
2023-02-02,150600\r
2023-02-05,150600\r
2023-02-10,143200\r
2023-02-12,134800\r
2023-02-15,135600\r
2023-02-17,136100\r
2023-02-20,137400\r
2023-02-22,137600\r
2023-03-09,150200\r
2023-03-12,175200\r
2023-03-14,151000\r
2023-03-17,151000\r
2023-03-22,178100\r
2023-03-24,135500\r
2023-03-27,62600\r
2023-04-01,62600\r
2023-04-03,62600\r
2023-04-06,144700\r
2023-04-08,141800\r
2023-04-16,143900\r
2023-05-06,188100\r
2023-05-11,187400\r
2023-05-23,203600\r
2023-05-26,206000\r
2023-05-28,197000\r
2023-06-02,192100\r
2023-06-05,194900\r
2023-06-07,174100\r
2023-06-17,191900\r
2023-06-20,191900\r
2023-06-22,191900\r
2023-06-25,203400\r
2023-06-27,197200\r
2023-06-30,204200\r
2023-07-02,187300\r
2023-07-05,204400\r
2023-07-07,204400\r
2023-07-10,205300\r
2023-07-12,210800\r
2023-07-15,209800\r
2023-07-17,211100\r
2023-07-20,211400\r
2023-07-22,207900\r
2023-07-25,206100\r
2023-07-27,205000\r
2023-07-30,203800\r
2023-08-01,203100\r
2023-08-06,199000\r
2023-08-09,204800\r
2023-08-11,203400\r
2023-08-14,198900\r
2023-08-16,200100\r
2023-08-19,203700\r
2023-08-21,199300\r
2023-08-24,197600\r
2023-08-26,193400\r
2023-08-29,196100\r
2023-08-31,186500\r
2023-09-03,177700\r
2023-09-05,174800\r
2023-09-08,174000\r
2023-09-10,169900\r
`;export{r as default};
