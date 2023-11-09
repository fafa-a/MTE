const n=`date,value\r
2017-01-26,191900\r
2017-01-29,191900\r
2017-02-05,192100\r
2017-02-25,192300\r
2017-02-28,192300\r
2017-03-27,186700\r
2017-03-30,186700\r
2017-04-06,186700\r
2017-05-26,181600\r
2017-05-29,179200\r
2017-06-05,179200\r
2017-07-05,184100\r
2017-08-14,183100\r
2017-08-17,183100\r
2017-08-22,183100\r
2017-08-24,183100\r
2017-08-29,189900\r
2017-09-03,189900\r
2017-09-06,189900\r
2017-10-13,198900\r
2017-10-16,191300\r
2017-10-18,191300\r
2017-11-07,191000\r
2017-11-15,191000\r
2017-11-17,193300\r
2017-11-22,192600\r
2017-11-25,192600\r
2017-11-27,192600\r
2017-11-30,178000\r
2018-02-25,188300\r
2018-03-02,188300\r
2018-04-21,190700\r
2018-04-24,190700\r
2018-04-26,190700\r
2018-05-06,182500\r
2018-05-11,192300\r
2018-05-16,192300\r
2018-05-19,184300\r
2018-05-21,187600\r
2018-05-24,183200\r
2018-06-20,188600\r
2018-06-23,188100\r
2018-06-25,196400\r
2018-06-28,196400\r
2018-07-03,195400\r
2018-07-08,190400\r
2018-07-10,190900\r
2018-08-04,193700\r
2018-08-07,192500\r
2018-08-12,192500\r
2018-08-14,192800\r
2018-08-19,202400\r
2018-08-22,202400\r
2018-09-08,189300\r
2018-09-11,189300\r
2018-09-16,189300\r
2018-09-28,188600\r
2018-10-01,188600\r
2018-10-06,188600\r
2018-10-18,192500\r
2018-10-21,192500\r
2018-10-23,202500\r
2019-02-15,183000\r
2019-02-18,183000\r
2019-02-20,187800\r
2019-02-23,187800\r
2019-02-25,183400\r
2019-03-07,188400\r
2019-03-22,183700\r
2019-03-27,202500\r
2019-03-30,202500\r
2019-04-01,202400\r
2019-04-11,214700\r
2019-04-14,214600\r
2019-06-25,204600\r
2019-06-28,204600\r
2019-06-30,211300\r
2019-07-03,211300\r
2019-07-05,206900\r
2019-07-08,206900\r
2019-07-10,206900\r
2019-07-13,208700\r
2019-07-15,205300\r
2019-07-23,166500\r
2019-07-25,208200\r
2019-07-28,208200\r
2019-08-02,207600\r
2019-08-04,207600\r
2019-08-29,204200\r
2019-09-03,203800\r
2019-09-06,203800\r
2019-09-08,203800\r
2019-09-11,203800\r
2019-09-13,208100\r
2019-09-16,205400\r
2019-09-18,210200\r
2019-09-21,210200\r
2019-10-13,198900\r
2019-10-16,198900\r
2020-01-21,187300\r
2020-01-24,187900\r
2020-02-05,183900\r
2020-02-15,188400\r
2020-02-18,188400\r
2020-02-23,183800\r
2020-03-26,182700\r
2020-03-31,188100\r
2020-04-03,188100\r
2020-04-05,187600\r
2020-04-08,187600\r
2020-04-10,192300\r
2020-04-13,191300\r
2020-04-15,192100\r
2020-04-23,198300\r
2020-05-15,191700\r
2020-05-18,191700\r
2020-05-20,193900\r
2020-05-25,186800\r
2020-05-28,186800\r
2020-05-30,189300\r
2020-06-02,176100\r
2020-07-04,196300\r
2020-07-07,196300\r
2020-07-09,189700\r
2020-07-14,191700\r
2020-07-19,192400\r
2020-07-22,193700\r
2020-07-24,195500\r
2020-07-27,199900\r
2020-07-29,193200\r
2020-08-08,188400\r
2020-08-18,196800\r
2020-09-02,189900\r
2020-09-12,197100\r
2020-09-15,197100\r
2020-09-17,200300\r
2020-11-21,186100\r
2020-11-26,186100\r
2020-11-29,186100\r
2021-02-24,185600\r
2021-02-27,185600\r
2021-03-01,193300\r
2021-03-04,193300\r
2021-03-06,189200\r
2021-03-09,196800\r
2021-03-14,190600\r
2021-03-31,189400\r
2021-04-03,189400\r
2021-04-05,189400\r
2021-04-08,189400\r
2021-06-14,182500\r
2021-06-19,182500\r
2021-07-19,196800\r
2021-07-22,196800\r
2021-07-29,196800\r
2021-09-02,187600\r
2021-09-05,187600\r
2021-09-07,189900\r
2021-09-12,187500\r
2021-09-22,183300\r
2021-09-30,182400\r
2021-10-22,179300\r
2021-10-27,183600\r
2021-11-01,183600\r
2021-11-06,158400\r
2022-01-25,188200\r
2022-02-09,190500\r
2022-02-12,190500\r
2022-03-06,191800\r
2022-03-09,191800\r
2022-03-26,187100\r
2022-05-15,197200\r
2022-05-30,191100\r
2022-06-02,191100\r
2022-06-04,192200\r
2022-06-14,206200\r
2022-06-17,205600\r
2022-06-19,209400\r
2022-06-24,209400\r
2022-06-27,195100\r
2022-06-29,198200\r
2022-07-02,198600\r
2022-07-04,198600\r
2022-07-14,199000\r
2022-07-17,199000\r
2022-07-19,200000\r
2022-07-24,199500\r
2022-08-01,207400\r
2022-08-03,208100\r
2022-08-06,202300\r
2022-08-08,203700\r
2022-08-11,203700\r
2022-08-13,197300\r
2022-08-18,200200\r
2022-08-28,191600\r
2022-09-05,191600\r
2022-09-22,198900\r
2022-09-30,198900\r
2022-11-11,183700\r
2022-11-19,183700\r
2023-02-09,188200\r
2023-02-12,188200\r
2023-02-14,195900\r
2023-03-01,190300\r
2023-03-04,190300\r
2023-04-05,193200\r
2023-04-08,193200\r
2023-04-20,185900\r
2023-04-30,185900\r
2023-06-14,182800\r
2023-06-24,193800\r
2023-06-27,193800\r
2023-07-09,192900\r
2023-07-14,203900\r
2023-07-17,203900\r
2023-07-19,193000\r
2023-07-22,203600\r
2023-08-08,212500\r
2023-08-11,212500\r
2023-08-16,212500\r
2023-08-23,202400\r
2023-09-02,199500\r
2023-09-07,189300\r
2023-09-10,189300\r
2023-09-15,189300\r
2023-10-02,192500\r
2023-10-05,192500\r
2023-10-07,207900\r
2023-10-10,207900\r
`;export{n as default};
