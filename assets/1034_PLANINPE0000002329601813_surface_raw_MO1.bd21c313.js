const r=`date,value\r
2017-02-22,163100\r
2017-02-25,165900\r
2017-03-14,175900\r
2017-03-17,169600\r
2017-04-03,179600\r
2017-04-06,163700\r
2017-04-16,193000\r
2017-04-23,207800\r
2017-05-13,213400\r
2017-05-16,215600\r
2017-05-26,221400\r
2017-06-02,218100\r
2017-06-05,219800\r
2017-06-12,226900\r
2017-06-15,223300\r
2017-06-25,220500\r
2017-07-05,222500\r
2017-07-07,223600\r
2017-07-17,223400\r
2017-07-27,220300\r
2017-08-04,215700\r
2017-08-14,212700\r
2017-08-19,207100\r
2017-08-21,208200\r
2017-08-24,205500\r
2017-08-29,196700\r
2017-09-05,196000\r
2017-09-08,185300\r
2017-09-10,199900\r
2017-09-13,186800\r
2017-09-20,189400\r
2017-09-23,186700\r
2017-10-05,182500\r
2017-10-08,180600\r
2017-10-10,179400\r
2017-10-13,180900\r
2017-10-18,187000\r
2017-10-25,177200\r
2017-10-28,190200\r
2017-11-07,180700\r
2017-11-14,185200\r
2017-11-19,177400\r
2017-11-27,187400\r
2017-12-09,180100\r
2017-12-19,179700\r
2017-12-24,177500\r
2018-01-01,172500\r
2018-02-10,186000\r
2018-02-12,192900\r
2018-02-25,183100\r
2018-03-02,186500\r
2018-03-14,186800\r
2018-03-19,187400\r
2018-04-01,185300\r
2018-04-18,212200\r
2018-04-21,213200\r
2018-04-26,222900\r
2018-05-11,218600\r
2018-05-23,224400\r
2018-06-20,226000\r
2018-06-25,227200\r
2018-07-02,227600\r
2018-07-05,221200\r
2018-07-07,227000\r
2018-07-10,225900\r
2018-07-12,222900\r
2018-07-15,219000\r
2018-07-25,220700\r
2018-07-27,223700\r
2018-07-30,220300\r
2018-08-01,218800\r
2018-08-06,216000\r
2018-08-11,214200\r
2018-08-16,214800\r
2018-08-19,210600\r
2018-08-21,214000\r
2018-08-26,212800\r
2018-08-31,211000\r
2018-09-03,200100\r
2018-09-20,202400\r
2018-09-23,197200\r
2018-09-25,203200\r
2018-09-28,196300\r
2018-10-03,194800\r
2018-10-05,199300\r
2018-10-23,198700\r
2018-10-25,200600\r
2018-11-04,193700\r
2018-11-24,193700\r
2018-11-27,195500\r
2018-12-19,196000\r
2019-01-03,177200\r
2019-02-12,192700\r
2019-02-20,198100\r
2019-02-22,195500\r
2019-02-27,186000\r
2019-03-07,208400\r
2019-03-12,197200\r
2019-03-22,195100\r
2019-03-27,193200\r
2019-03-29,200700\r
2019-04-01,207600\r
2019-05-01,211000\r
2019-05-06,213900\r
2019-05-13,214100\r
2019-05-16,221100\r
2019-05-23,225200\r
2019-05-31,228100\r
2019-06-02,235400\r
2019-06-27,218400\r
2019-06-30,227700\r
2019-07-05,222200\r
2019-07-07,223200\r
2019-07-10,217200\r
2019-07-12,215200\r
2019-07-15,216800\r
2019-07-25,208800\r
2019-08-01,200500\r
2019-08-04,207500\r
2019-08-14,198400\r
2019-08-16,194800\r
2019-08-24,192600\r
2019-08-29,183100\r
2019-08-31,171200\r
2019-09-03,177400\r
2019-09-08,176200\r
2019-09-15,165100\r
2019-09-28,180600\r
2019-10-08,176600\r
2019-10-25,163300\r
2019-10-30,172800\r
2019-11-04,175400\r
2019-11-09,178100\r
2019-11-27,174800\r
2019-12-07,170600\r
2019-12-27,180700\r
2020-01-01,170200\r
2020-01-11,183000\r
2020-02-05,191300\r
2020-02-15,186300\r
2020-02-20,184100\r
2020-02-22,173300\r
2020-03-08,178100\r
2020-03-11,186600\r
2020-03-13,198200\r
2020-03-18,183900\r
2020-04-05,189600\r
2020-04-10,200700\r
2020-04-15,211800\r
2020-05-20,224800\r
2020-05-22,219900\r
2020-05-25,225800\r
2020-05-27,221300\r
2020-05-30,227500\r
2020-06-19,225400\r
2020-06-21,221800\r
2020-06-24,225600\r
2020-07-09,221500\r
2020-07-14,221600\r
2020-07-19,211700\r
2020-07-21,209500\r
2020-07-24,210000\r
2020-07-29,207700\r
2020-07-31,205500\r
2020-08-03,210900\r
2020-08-05,198600\r
2020-08-08,205800\r
2020-08-10,197600\r
2020-08-15,197300\r
2020-08-25,177800\r
2020-09-04,164900\r
2020-09-12,181200\r
2020-09-14,176600\r
2020-09-17,181700\r
2020-09-24,181600\r
2020-10-17,166700\r
2020-10-24,165500\r
2020-11-11,173800\r
2020-11-21,178100\r
2020-11-23,165200\r
2021-02-11,182500\r
2021-03-21,198800\r
2021-03-23,186600\r
2021-03-28,184600\r
2021-03-31,182100\r
2021-04-02,184000\r
2021-04-05,182900\r
2021-04-15,202500\r
2021-05-27,226100\r
2021-06-09,225800\r
2021-06-11,227400\r
2021-06-16,222000\r
2021-06-21,229700\r
2021-07-11,225800\r
2021-07-21,222000\r
2021-07-29,217600\r
2021-08-10,214200\r
2021-08-13,211700\r
2021-08-15,212800\r
2021-08-18,210400\r
2021-08-20,209900\r
2021-08-30,206400\r
2021-09-12,207000\r
2021-09-22,202400\r
2021-10-07,189900\r
2021-10-12,190900\r
2021-10-14,196000\r
2021-10-27,188500\r
2021-12-03,195300\r
2021-12-16,189800\r
2021-12-18,194700\r
2022-01-12,195100\r
2022-01-15,185800\r
2022-01-22,189200\r
2022-01-25,184600\r
2022-01-27,192000\r
2022-02-01,188700\r
2022-02-06,192200\r
2022-02-09,185700\r
2022-02-26,180900\r
2022-03-01,169900\r
2022-03-03,180100\r
2022-04-05,175600\r
2022-04-17,191900\r
2022-05-17,211300\r
2022-05-20,202100\r
2022-05-22,215800\r
2022-06-06,212800\r
2022-06-11,215300\r
2022-06-14,27700\r
2022-06-29,196100\r
2022-07-04,42400\r
2022-07-11,219300\r
2022-07-14,218400\r
2022-07-16,215100\r
2022-07-19,196600\r
2022-07-21,212900\r
2022-07-24,207300\r
2022-07-26,207300\r
2022-07-31,208400\r
2022-08-08,207500\r
2022-08-10,203700\r
2022-08-13,197600\r
2022-08-15,197300\r
2022-08-20,199300\r
2022-08-28,190600\r
2022-09-02,190500\r
2022-09-04,190300\r
2022-09-19,186400\r
2022-10-02,187500\r
2022-10-04,185300\r
2022-10-09,188100\r
2022-10-22,168900\r
2022-11-01,190700\r
2022-11-16,188800\r
2023-01-10,192400\r
2023-02-04,190700\r
2023-02-06,186300\r
2023-02-09,188100\r
2023-02-11,191700\r
2023-02-19,184200\r
2023-03-01,185300\r
2023-03-13,181100\r
2023-03-16,183300\r
2023-03-28,185000\r
2023-04-07,191600\r
2023-04-17,207300\r
2023-05-02,218400\r
2023-05-17,217500\r
2023-05-30,186900\r
2023-06-04,197200\r
2023-06-11,212400\r
2023-06-24,20200\r
2023-06-29,223100\r
2023-07-14,226100\r
2023-07-29,222300\r
2023-07-31,220500\r
2023-08-08,220400\r
2023-08-10,222800\r
2023-08-13,214400\r
2023-08-20,216800\r
2023-08-23,218000\r
`;export{r as default};
