const r=`date,value\r
2017-04-03,599100\r
2017-04-06,599100\r
2017-04-10,599100\r
2017-04-23,606500\r
2017-04-30,606500\r
2017-05-23,567200\r
2017-05-26,567200\r
2017-06-02,572200\r
2017-07-17,349900\r
2017-10-05,256900\r
2017-10-07,256900\r
2017-10-13,256900\r
2017-10-15,260300\r
2017-10-17,248900\r
2017-10-18,248900\r
2017-10-20,248900\r
2017-10-25,248900\r
2018-02-22,594600\r
2018-02-24,594600\r
2018-02-25,594600\r
2018-02-27,595000\r
2018-03-24,603700\r
2018-04-18,631400\r
2018-04-20,631400\r
2018-04-21,631400\r
2018-04-25,631400\r
2018-05-08,650200\r
2018-05-11,650200\r
2018-05-18,650200\r
2018-06-22,606900\r
2018-06-27,616000\r
2018-07-02,619000\r
2018-07-04,619000\r
2018-07-07,619000\r
2018-07-09,594400\r
2018-07-10,594400\r
2018-08-16,438600\r
2018-08-18,437100\r
2018-08-19,437100\r
2018-08-21,429000\r
2018-08-23,431100\r
2018-08-26,431100\r
2018-09-20,309500\r
2018-09-22,309500\r
2018-09-25,320900\r
2018-09-27,320900\r
2018-09-28,320900\r
2018-09-30,297200\r
2018-10-05,270300\r
2018-10-10,254000\r
2018-10-13,257300\r
2018-10-15,257300\r
2018-10-17,240400\r
2018-10-18,240400\r
2018-10-20,240800\r
2018-10-22,222000\r
2019-02-17,555800\r
2019-02-20,555800\r
2019-02-22,574600\r
2019-02-24,574600\r
2019-02-25,574600\r
2019-02-27,565300\r
2019-03-24,644500\r
2019-03-29,651300\r
2019-03-31,651300\r
2019-04-01,651300\r
2019-04-11,634800\r
2019-05-23,664600\r
2019-05-25,664600\r
2019-05-26,664600\r
2019-06-02,664600\r
2019-06-04,664600\r
2019-06-05,664600\r
2019-06-27,560400\r
2019-06-29,560400\r
2019-06-30,560400\r
2019-07-02,575100\r
2019-07-04,575100\r
2019-07-05,575100\r
2019-07-07,569700\r
2019-07-09,569700\r
2019-07-10,569700\r
2019-07-15,585100\r
2019-07-17,565100\r
2019-07-22,583200\r
2019-07-24,544600\r
2019-07-25,544600\r
2019-07-29,544600\r
2019-07-30,544600\r
2019-08-01,548900\r
2019-08-04,492500\r
2019-08-08,492500\r
2019-08-09,492500\r
2019-08-13,492500\r
2019-08-14,492500\r
2019-08-16,492500\r
2019-08-21,420200\r
2019-08-23,420200\r
2019-08-24,420200\r
2019-08-26,422200\r
2019-08-28,422200\r
2019-08-29,422200\r
2019-08-31,394600\r
2019-09-03,394600\r
2019-09-07,396700\r
2019-09-10,375200\r
2019-09-12,383800\r
2019-09-15,355900\r
2019-09-18,358200\r
2019-09-20,338600\r
2019-09-22,338600\r
2020-02-07,527700\r
2020-02-10,514500\r
2020-02-15,514500\r
2020-02-22,582700\r
2020-03-28,592600\r
2020-03-30,592600\r
2020-03-31,592600\r
2020-04-02,600400\r
2020-04-04,600400\r
2020-04-05,600400\r
2020-04-07,594400\r
2020-04-09,594400\r
2020-04-10,594400\r
2020-04-12,612200\r
2020-04-14,611700\r
2020-04-15,611700\r
2020-04-17,611700\r
2020-04-19,632800\r
2020-04-20,632800\r
2020-04-22,606500\r
2020-04-27,569500\r
2020-05-07,542100\r
2020-05-15,524100\r
2020-05-17,524200\r
2020-05-19,524200\r
2020-05-20,524200\r
2020-05-27,490700\r
2020-05-29,490700\r
2020-05-30,490700\r
2020-06-01,471800\r
2020-06-03,481100\r
2020-07-31,288800\r
2020-08-02,288800\r
2020-08-05,291000\r
2020-08-07,291000\r
2020-08-08,291000\r
2020-08-10,289800\r
2020-08-12,289800\r
2020-08-13,289800\r
2020-08-17,263700\r
2020-08-20,272200\r
2020-08-25,254200\r
2020-09-02,254100\r
2020-09-04,254200\r
2020-09-07,226000\r
2020-09-09,234500\r
2020-09-11,234500\r
2020-09-12,234500\r
2020-09-14,220700\r
2020-09-16,220700\r
2020-09-17,220700\r
2020-09-21,229200\r
2020-09-22,229200\r
2020-10-14,303200\r
2020-10-19,303200\r
2021-02-21,586600\r
2021-02-24,586600\r
2021-02-28,586600\r
2021-03-01,586600\r
2021-03-08,611000\r
2021-03-23,639500\r
2021-03-28,647200\r
2021-03-30,647200\r
2021-03-31,647200\r
2021-04-02,631500\r
2021-04-04,641000\r
2021-04-22,587700\r
2021-04-24,587700\r
2021-04-25,587700\r
2021-04-27,598400\r
2021-04-30,598400\r
2021-06-01,549700\r
2021-06-03,549700\r
2021-06-04,549700\r
2021-06-11,530900\r
2021-06-16,492100\r
2021-06-19,492100\r
2021-06-21,513000\r
2021-07-21,465000\r
2021-07-23,465000\r
2021-10-14,280700\r
2021-10-16,280700\r
2021-10-19,280700\r
2021-10-21,280700\r
2021-10-24,282500\r
2021-10-27,253300\r
2021-10-29,266600\r
2021-11-06,245100\r
2022-02-26,574600\r
2022-02-28,574600\r
2022-03-03,607400\r
2022-03-05,607400\r
2022-03-06,607400\r
2022-03-08,600800\r
2022-03-10,619900\r
2022-03-23,630700\r
2022-03-25,630700\r
2022-03-26,630700\r
2022-03-28,635900\r
2022-04-04,622500\r
2022-04-17,625500\r
2022-04-20,625500\r
2022-04-22,635000\r
2022-04-27,622700\r
2022-06-16,588900\r
2022-06-18,588900\r
2022-06-19,588900\r
2022-06-21,577200\r
2022-06-23,591200\r
2022-06-28,545900\r
2022-06-29,545900\r
2022-07-01,552100\r
2022-07-06,548400\r
2022-07-08,548400\r
2022-07-11,550400\r
2022-07-14,550400\r
2022-07-16,536800\r
2022-07-18,539100\r
2022-07-19,539100\r
2022-07-24,523900\r
2022-08-10,459000\r
2022-08-12,459000\r
2022-08-13,459000\r
2022-08-15,459000\r
2022-08-20,460900\r
2022-10-09,398300\r
2022-10-12,398300\r
2022-10-19,398300\r
2023-02-11,587200\r
2023-02-13,587200\r
2023-02-14,587200\r
2023-02-21,605500\r
2023-03-01,605400\r
`;export{r as default};
