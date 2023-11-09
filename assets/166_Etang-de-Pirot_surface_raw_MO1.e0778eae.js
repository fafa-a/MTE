const r=`date,value\r
2017-02-15,439500\r
2017-02-25,442600\r
2017-03-17,486400\r
2017-03-27,476200\r
2017-04-03,485800\r
2017-04-23,491900\r
2017-05-16,533300\r
2017-05-26,492400\r
2017-06-15,495000\r
2017-06-22,501300\r
2017-07-05,519000\r
2017-07-17,505100\r
2017-07-22,501300\r
2017-08-14,505700\r
2017-08-21,501700\r
2017-08-29,494400\r
2017-10-05,461600\r
2017-10-13,449700\r
2017-10-15,455100\r
2017-10-18,443900\r
2017-11-22,376600\r
2018-02-25,448800\r
2018-02-27,421900\r
2018-03-14,479000\r
2018-04-18,490100\r
2018-04-21,488900\r
2018-05-06,474200\r
2018-05-08,482100\r
2018-05-11,484200\r
2018-05-18,478200\r
2018-06-20,504600\r
2018-06-22,497200\r
2018-06-27,494400\r
2018-07-07,484000\r
2018-07-25,494800\r
2018-07-27,500400\r
2018-08-06,500800\r
2018-08-19,504300\r
2018-08-26,501000\r
2018-09-08,490800\r
2018-09-10,488300\r
2018-09-18,496700\r
2018-09-20,497800\r
2018-09-25,489800\r
2018-09-30,498500\r
2018-10-05,477600\r
2018-10-13,473600\r
2018-10-18,472500\r
2018-10-20,486200\r
2018-11-04,474100\r
2018-11-09,470700\r
2018-11-19,416100\r
2019-01-28,387600\r
2019-02-05,448100\r
2019-02-15,427600\r
2019-02-17,444800\r
2019-02-20,456900\r
2019-02-22,441400\r
2019-02-25,425900\r
2019-02-27,456300\r
2019-03-22,466300\r
2019-03-29,467600\r
2019-04-01,463200\r
2019-05-13,493300\r
2019-05-16,505400\r
2019-05-23,499600\r
2019-06-02,495900\r
2019-06-27,492200\r
2019-06-30,495300\r
2019-07-02,489200\r
2019-07-05,512700\r
2019-07-07,511800\r
2019-07-10,508900\r
2019-07-17,504300\r
2019-07-22,496700\r
2019-07-25,515400\r
2019-08-04,516700\r
2019-08-24,488400\r
2019-08-26,492400\r
2019-09-13,474500\r
2019-09-15,485500\r
2019-09-18,468700\r
2019-09-20,476500\r
2019-10-13,440200\r
2019-11-07,448000\r
2019-11-22,411800\r
2019-11-24,421300\r
2020-01-06,380200\r
2020-01-16,377300\r
2020-01-21,373100\r
2020-02-07,429800\r
2020-02-15,448400\r
2020-02-22,448000\r
2020-03-18,475400\r
2020-03-23,483800\r
2020-03-26,470000\r
2020-03-28,494000\r
2020-03-31,489000\r
2020-04-02,487400\r
2020-04-05,481700\r
2020-04-10,476500\r
2020-04-12,494700\r
2020-04-15,493500\r
2020-04-17,516900\r
2020-05-07,500600\r
2020-05-20,512600\r
2020-05-30,517700\r
2020-06-24,523500\r
2020-06-26,492500\r
2020-07-04,516800\r
2020-07-06,515900\r
2020-07-09,513700\r
2020-07-11,499800\r
2020-07-19,526900\r
2020-07-24,515400\r
2020-07-29,519800\r
2020-08-05,527200\r
2020-08-08,514500\r
2020-08-10,512400\r
2020-08-15,504900\r
2020-08-20,517300\r
2020-09-04,509600\r
2020-09-09,509800\r
2020-09-12,500900\r
2020-09-14,500500\r
2020-09-17,494100\r
2020-11-18,422300\r
2020-11-21,418400\r
2020-11-28,412600\r
2020-12-18,422100\r
2021-01-10,333800\r
2021-02-14,447700\r
2021-02-21,444400\r
2021-02-24,473000\r
2021-03-01,466400\r
2021-03-06,466300\r
2021-03-08,470300\r
2021-03-23,479600\r
2021-03-28,489600\r
2021-03-31,491800\r
2021-04-02,486800\r
2021-04-22,484100\r
2021-04-27,498000\r
2021-06-14,509400\r
2021-06-16,501900\r
2021-07-19,501900\r
2021-07-21,492500\r
2021-08-10,489700\r
2021-08-20,484300\r
2021-09-02,502300\r
2021-09-07,490800\r
2021-09-22,479900\r
2021-09-24,486500\r
2021-10-02,498100\r
2021-10-14,466900\r
2021-10-19,462600\r
2021-10-22,458200\r
2021-10-24,466300\r
2021-11-11,435000\r
2021-12-18,368700\r
2021-12-23,358300\r
2022-01-15,353400\r
2022-02-09,361000\r
2022-02-26,341200\r
2022-03-06,335000\r
2022-03-08,329500\r
2022-03-23,343000\r
2022-03-26,342500\r
2022-04-17,375200\r
2022-06-11,417300\r
2022-06-16,412900\r
2022-06-29,411400\r
2022-07-11,449600\r
2022-07-14,441800\r
2022-07-16,444600\r
2022-07-19,444700\r
2022-07-24,441000\r
2022-07-31,448700\r
2022-08-03,432700\r
2022-08-08,425300\r
2022-08-10,435500\r
2022-08-13,419000\r
2022-09-02,375700\r
2022-09-04,382600\r
2022-09-12,371900\r
2022-09-22,357000\r
2022-10-09,373000\r
2022-10-22,364700\r
2022-11-11,357300\r
2022-12-11,373200\r
2023-02-09,428400\r
2023-02-11,403200\r
2023-02-14,414200\r
2023-03-01,432300\r
2023-04-05,475400\r
2023-04-20,461900\r
2023-06-01,478800\r
2023-06-06,485000\r
2023-06-14,511100\r
2023-06-19,503000\r
2023-06-24,508600\r
2023-07-09,515900\r
2023-07-11,494900\r
2023-08-23,515300\r
2023-09-04,502000\r
2023-09-07,497300\r
2023-09-09,501200\r
2023-10-02,480400\r
2023-10-07,476700\r
2023-10-19,477700\r
`;export{r as default};
