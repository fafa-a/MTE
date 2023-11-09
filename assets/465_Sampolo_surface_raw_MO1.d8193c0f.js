const r=`date,value\r
2017-01-07,147100\r
2017-01-14,169400\r
2017-02-16,133900\r
2017-02-23,182000\r
2017-02-26,156100\r
2017-03-05,162100\r
2017-03-08,161700\r
2017-03-15,167600\r
2017-03-28,168300\r
2017-04-04,177200\r
2017-05-07,205500\r
2017-05-17,198700\r
2017-05-24,204300\r
2017-05-27,211600\r
2017-06-13,208900\r
2017-06-16,216200\r
2017-07-01,209200\r
2017-07-03,201000\r
2017-07-06,214100\r
2017-07-08,211200\r
2017-07-11,214600\r
2017-07-18,196100\r
2017-07-23,198800\r
2017-07-28,196500\r
2017-07-31,200000\r
2017-08-02,175400\r
2017-08-05,196800\r
2017-08-07,184800\r
2017-08-12,170600\r
2017-08-15,170400\r
2017-08-17,167900\r
2017-08-22,157000\r
2017-08-25,162200\r
2017-08-27,140200\r
2017-08-30,134500\r
2017-09-11,90600\r
2017-09-14,75900\r
2017-09-21,90600\r
2017-10-11,128500\r
2017-10-16,137500\r
2017-10-21,142000\r
2017-10-24,134100\r
2017-10-26,142600\r
2017-11-03,136900\r
2017-11-18,96400\r
2017-11-20,77200\r
2017-11-30,62900\r
2017-12-05,91300\r
2018-01-17,171800\r
2018-02-08,173300\r
2018-02-11,166500\r
2018-03-13,183700\r
2018-04-17,163300\r
2018-04-19,182000\r
2018-04-22,172100\r
2018-04-24,140300\r
2018-06-03,190200\r
2018-06-21,214000\r
2018-07-01,205900\r
2018-07-08,212300\r
2018-07-11,211500\r
2018-07-13,203300\r
2018-07-18,207700\r
2018-07-21,196200\r
2018-07-26,210500\r
2018-07-28,211200\r
2018-07-31,217100\r
2018-08-02,206200\r
2018-08-07,209500\r
2018-08-27,195100\r
2018-08-30,204500\r
2018-09-01,195400\r
2018-09-09,201900\r
2018-09-11,188400\r
2018-09-14,188700\r
2018-09-24,183100\r
2018-09-26,177700\r
2018-09-29,170800\r
2018-10-14,149600\r
2018-10-19,178400\r
2018-10-21,166900\r
2018-10-24,154400\r
2018-12-05,124700\r
2018-12-08,145200\r
2019-01-07,125900\r
2019-01-12,120300\r
2019-01-14,152800\r
2019-01-29,160300\r
2019-02-06,63900\r
2019-02-13,113600\r
2019-02-16,124200\r
2019-02-18,178600\r
2019-02-26,184600\r
2019-02-28,180200\r
2019-03-03,163700\r
2019-03-23,186400\r
2019-03-25,187200\r
2019-03-28,24300\r
2019-03-30,156900\r
2019-04-09,166800\r
2019-04-14,198800\r
2019-04-27,213900\r
2019-05-09,199500\r
2019-06-03,199000\r
2019-06-18,226700\r
2019-06-23,213600\r
2019-06-26,215300\r
2019-06-28,198800\r
2019-07-01,80300\r
2019-07-03,198000\r
2019-07-06,224500\r
2019-07-08,226000\r
2019-07-13,207500\r
2019-07-21,87200\r
2019-07-23,203800\r
2019-07-26,216400\r
2019-07-31,213400\r
2019-08-02,213200\r
2019-08-05,220000\r
2019-08-10,205800\r
2019-08-15,210800\r
2019-08-20,182000\r
2019-08-30,171200\r
2019-09-04,84500\r
2019-09-09,163200\r
2019-09-16,138700\r
2019-10-09,112200\r
2019-11-30,80200\r
2020-01-12,125800\r
2020-01-14,140500\r
2020-01-17,163400\r
2020-02-06,119100\r
2020-02-11,151000\r
2020-02-26,122400\r
2020-02-28,78100\r
2020-03-04,124100\r
2020-03-19,118600\r
2020-03-24,130800\r
2020-03-29,121400\r
2020-04-01,66300\r
2020-04-06,143600\r
2020-04-08,160200\r
2020-04-11,143300\r
2020-05-03,180900\r
2020-05-23,208800\r
2020-05-26,208200\r
2020-05-28,197200\r
2020-06-20,145000\r
2020-06-22,194500\r
2020-06-25,217700\r
2020-06-30,227600\r
2020-07-02,221400\r
2020-07-05,226300\r
2020-07-07,201200\r
2020-07-12,219200\r
2020-07-22,211500\r
2020-07-25,225400\r
2020-07-27,207400\r
2020-07-30,209800\r
2020-08-01,190100\r
2020-08-06,193500\r
2020-08-09,203700\r
2020-08-11,190400\r
2020-08-16,207700\r
2020-08-21,190300\r
2020-08-26,194600\r
2020-09-05,169300\r
2020-09-13,176000\r
2020-09-25,152700\r
2020-10-08,151400\r
2020-10-10,124400\r
2020-10-25,134000\r
2020-10-28,85300\r
2020-11-02,113700\r
2020-11-07,97000\r
2020-11-17,118600\r
2020-11-19,108500\r
2020-11-22,103200\r
2020-11-24,99200\r
2021-01-13,119200\r
2021-01-18,90800\r
2021-01-26,170600\r
2021-02-15,135900\r
2021-02-25,161700\r
2021-03-02,169000\r
2021-03-04,174000\r
2021-03-24,163400\r
2021-03-29,166200\r
2021-04-06,162800\r
2021-05-06,165200\r
2021-05-18,129300\r
2021-05-21,166500\r
2021-05-26,173300\r
2021-06-10,210700\r
2021-06-12,187600\r
2021-06-15,200200\r
2021-06-27,203200\r
2021-07-05,208800\r
2021-07-10,210500\r
2021-07-12,210000\r
2021-07-20,207100\r
2021-07-22,201000\r
2021-07-27,196900\r
2021-07-30,202200\r
2021-08-01,197900\r
2021-08-06,190300\r
2021-08-14,200100\r
2021-08-16,196300\r
2021-08-21,174900\r
2021-08-26,171500\r
2021-09-05,146600\r
2021-10-05,76900\r
2021-10-15,91600\r
2021-11-19,119400\r
2021-12-07,97200\r
2022-01-13,126700\r
2022-01-16,113800\r
2022-01-18,135000\r
2022-01-23,123900\r
2022-01-28,140700\r
2022-01-31,154200\r
2022-02-02,144400\r
2022-02-07,144600\r
2022-02-10,130400\r
2022-02-17,130200\r
2022-02-22,141800\r
2022-03-02,140200\r
2022-03-09,123500\r
2022-03-22,156500\r
2022-03-24,158800\r
2022-04-11,177400\r
2022-04-16,168900\r
2022-04-18,180900\r
2022-04-28,183400\r
2022-05-11,199400\r
2022-05-13,185500\r
2022-05-16,192600\r
2022-05-18,197200\r
2022-05-21,209400\r
2022-05-23,205900\r
2022-05-28,199000\r
2022-06-02,210700\r
2022-06-07,194400\r
2022-06-12,217500\r
2022-06-17,208700\r
2022-06-20,197800\r
2022-06-27,196100\r
2022-07-05,203600\r
2022-07-10,198400\r
2022-07-15,197800\r
2022-07-17,178100\r
2022-07-20,196400\r
2022-07-22,175000\r
2022-07-25,187300\r
2022-07-27,156300\r
2022-08-01,144300\r
2022-08-04,150500\r
2022-08-06,133100\r
2022-08-11,154700\r
2022-08-24,155900\r
2022-08-26,150900\r
2022-09-10,115100\r
2022-09-23,76200\r
2022-10-08,144500\r
2022-10-15,153400\r
2022-10-18,178000\r
2022-10-23,168200\r
2022-10-28,171300\r
2022-10-30,156400\r
2022-11-02,158600\r
2022-11-04,162200\r
2022-11-14,157000\r
2022-11-17,127300\r
2022-11-27,108800\r
2022-12-04,126700\r
2023-01-31,143900\r
2023-02-02,143000\r
2023-02-10,133500\r
2023-02-12,133700\r
2023-02-15,134700\r
2023-02-20,146600\r
2023-02-22,139700\r
2023-03-09,149900\r
2023-03-12,173800\r
2023-03-14,135500\r
2023-03-27,62600\r
2023-04-06,141800\r
2023-05-06,187400\r
2023-05-23,203600\r
2023-05-26,196600\r
2023-05-28,181900\r
2023-06-17,191900\r
2023-06-25,201400\r
2023-06-27,208400\r
2023-07-02,187300\r
2023-07-10,216800\r
2023-07-12,201400\r
2023-07-17,205000\r
2023-07-20,205100\r
2023-07-27,178900\r
2023-07-30,198900\r
2023-08-06,198200\r
2023-08-11,199600\r
2023-08-14,201000\r
2023-08-16,196300\r
2023-08-19,200900\r
2023-08-21,197300\r
2023-08-24,184600\r
2023-08-26,173000\r
2023-09-03,179600\r
2023-09-05,167700\r
2023-09-08,168100\r
2023-09-10,157600\r
2023-09-23,146700\r
2023-09-28,149800\r
2023-10-03,113200\r
2023-10-05,121200\r
2023-10-08,113800\r
2023-10-10,112100\r
2023-10-13,100600\r
`;export{r as default};
