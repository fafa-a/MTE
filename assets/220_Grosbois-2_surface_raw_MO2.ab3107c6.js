const r=`date,value\r
2017-03-14,876700\r
2017-03-17,876700\r
2017-04-23,851300\r
2017-04-30,851300\r
2017-05-23,854200\r
2017-05-26,854200\r
2017-06-02,855300\r
2017-06-05,820200\r
2017-06-09,820200\r
2017-06-12,824900\r
2017-10-05,398000\r
2017-10-07,398000\r
2017-10-10,398000\r
2017-10-12,398000\r
2017-10-13,398000\r
2017-10-15,400100\r
2017-10-17,364800\r
2017-10-18,364800\r
2017-10-22,364800\r
2017-10-25,364800\r
2017-11-04,293300\r
2017-11-06,293300\r
2017-11-11,293300\r
2017-11-14,293300\r
2018-02-22,907300\r
2018-02-24,907300\r
2018-02-25,907300\r
2018-02-27,907300\r
2018-05-18,919300\r
2018-05-20,896500\r
2018-05-25,896500\r
2018-06-22,914400\r
2018-06-27,926500\r
2018-07-02,902600\r
2018-07-04,932200\r
2018-07-07,906400\r
2018-07-09,906500\r
2018-07-12,889700\r
2018-07-15,888500\r
2018-07-17,888200\r
2018-09-25,612300\r
2018-09-27,612300\r
2018-09-28,612300\r
2018-09-30,595100\r
2018-10-05,576100\r
2018-10-10,553900\r
2018-10-12,565200\r
2018-10-13,565200\r
2018-10-15,518000\r
2018-10-17,523700\r
2018-10-18,523700\r
2018-10-20,465200\r
2018-10-22,465600\r
2018-10-23,465600\r
2019-01-03,510600\r
2019-01-15,510600\r
2019-01-28,530000\r
2019-02-04,530000\r
2019-02-05,530000\r
2019-02-17,697800\r
2019-02-19,697800\r
2019-02-20,697800\r
2019-02-22,697800\r
2019-02-24,697800\r
2019-02-25,697800\r
2019-02-27,709200\r
2019-03-29,772300\r
2019-03-31,772300\r
2019-04-10,771700\r
2019-04-11,771700\r
2019-04-13,771700\r
2019-05-13,797800\r
2019-05-15,797800\r
2019-05-16,797800\r
2019-05-23,803000\r
2019-05-28,803000\r
2019-05-30,789000\r
2019-05-31,789000\r
2019-06-02,800600\r
2019-06-04,800600\r
2019-06-17,734500\r
2019-06-19,734500\r
2019-06-24,734500\r
2019-06-25,734500\r
2019-06-27,736300\r
2019-06-29,736300\r
2019-06-30,736300\r
2019-07-02,719100\r
2019-07-04,722900\r
2019-07-05,722900\r
2019-07-07,705100\r
2019-07-09,705100\r
2019-07-10,705100\r
2019-07-15,702100\r
2019-07-17,683000\r
2019-07-22,662400\r
2019-07-24,671800\r
2019-07-25,671800\r
2019-07-29,671800\r
2019-08-01,645600\r
2019-08-04,653400\r
2019-08-08,628200\r
2019-08-09,628200\r
2019-08-14,628200\r
2019-08-21,594400\r
2019-08-23,594400\r
2019-08-24,594400\r
2019-08-26,595400\r
2019-08-28,595400\r
2019-08-29,595400\r
2019-08-31,571900\r
2019-09-02,571900\r
2019-09-03,571900\r
2019-09-07,572800\r
2019-09-10,541600\r
2019-09-12,555300\r
2019-09-13,555300\r
2019-09-15,523600\r
2019-09-17,525900\r
2019-09-18,525900\r
2019-09-20,499900\r
2019-09-22,499900\r
2019-09-30,502400\r
2019-12-04,448400\r
2019-12-14,514200\r
2019-12-19,493800\r
2019-12-29,525600\r
2020-01-23,680600\r
2020-01-26,680600\r
2020-02-07,779800\r
2020-02-15,779000\r
2020-02-22,861700\r
2020-03-13,917300\r
2020-03-15,917300\r
2020-03-18,917300\r
2020-03-23,928000\r
2020-03-25,928000\r
2020-03-26,928000\r
2020-03-28,934900\r
2020-03-30,930700\r
2020-03-31,930700\r
2020-04-02,931700\r
2020-04-04,931700\r
2020-04-05,931700\r
2020-04-07,928100\r
2020-04-09,920800\r
2020-04-10,920800\r
2020-04-12,920800\r
2020-04-14,937800\r
2020-04-15,937800\r
2020-04-17,937800\r
2020-04-20,919500\r
2020-04-22,951500\r
2020-04-24,948200\r
2020-04-25,948200\r
2020-04-27,948200\r
2020-05-04,948200\r
2020-05-07,957200\r
2020-05-09,936700\r
2020-05-10,936700\r
2020-05-12,936700\r
2020-05-17,941300\r
2020-05-19,941300\r
2020-05-20,941300\r
2020-05-27,934000\r
2020-05-29,934000\r
2020-05-30,934000\r
2020-06-01,925900\r
2020-06-03,949800\r
2020-06-08,949800\r
2020-07-06,808800\r
2020-07-08,780800\r
2020-07-09,780800\r
2020-07-11,780800\r
2020-07-13,780800\r
2020-07-14,780800\r
2020-07-18,780800\r
2020-07-19,780800\r
2020-07-21,780800\r
2020-07-31,647300\r
2020-08-05,664900\r
2020-08-07,665000\r
2020-08-08,665000\r
2020-08-10,630000\r
2020-08-12,630000\r
2020-08-13,630000\r
2020-08-15,630000\r
2020-08-17,647000\r
2020-08-20,613500\r
2020-08-25,625800\r
2020-09-04,589700\r
2020-09-07,510000\r
2020-09-09,517100\r
2020-09-11,517100\r
2020-09-12,517100\r
2020-09-14,498500\r
2020-09-16,498500\r
2020-09-17,498500\r
2020-09-19,499700\r
2020-09-21,464700\r
2020-09-22,464700\r
2020-11-18,495100\r
2020-11-20,495100\r
2020-11-21,495100\r
2020-11-23,495500\r
2020-11-25,495500\r
2020-11-26,495500\r
2020-11-28,503300\r
2020-12-06,489500\r
2020-12-10,489200\r
2020-12-13,489200\r
2021-02-21,901800\r
2021-02-23,901800\r
2021-02-24,901800\r
2021-02-28,901800\r
2021-03-01,901800\r
2021-03-23,928700\r
2021-03-25,928700\r
2021-03-28,944500\r
2021-03-30,944500\r
2021-03-31,944500\r
2021-04-02,938200\r
2021-04-04,966300\r
2021-04-09,957400\r
2021-04-27,943400\r
2021-06-01,939900\r
2021-06-03,939900\r
2021-06-11,941400\r
2021-06-16,934000\r
2021-06-19,934000\r
2021-06-21,934000\r
2021-06-23,933500\r
2021-06-26,933500\r
2021-07-21,924100\r
2021-07-23,924100\r
2021-07-29,924100\r
2021-09-24,777200\r
2021-10-01,777200\r
2021-10-14,677000\r
2021-10-16,677000\r
2021-10-19,696400\r
2021-10-24,655100\r
2021-10-29,671900\r
2021-11-23,611000\r
2021-12-18,783300\r
2021-12-21,783300\r
2021-12-23,792000\r
2022-02-26,894900\r
2022-02-28,894900\r
2022-03-03,894900\r
2022-03-05,894900\r
2022-03-06,894900\r
2022-03-23,930500\r
2022-03-25,930500\r
2022-03-26,930500\r
2022-03-28,935200\r
2022-04-17,946400\r
2022-04-20,946400\r
2022-04-22,947700\r
2022-04-27,945200\r
2022-05-04,931700\r
2022-05-07,931700\r
2022-05-17,919900\r
2022-05-25,919900\r
2022-06-11,877600\r
2022-06-13,877600\r
2022-06-16,881700\r
2022-06-18,881700\r
2022-06-19,881700\r
2022-06-21,870700\r
2022-06-29,852100\r
2022-07-01,859500\r
2022-07-11,787000\r
2022-07-13,787000\r
2022-07-14,787000\r
2022-07-18,786100\r
2022-07-19,786100\r
2022-07-21,786100\r
2022-08-10,679200\r
2022-08-12,592600\r
2022-08-13,592600\r
2022-08-17,592600\r
2022-08-20,606600\r
2022-10-09,392600\r
2022-10-12,392600\r
2022-10-16,392600\r
2022-10-17,392600\r
2022-10-19,397700\r
2022-11-13,315000\r
2022-11-20,315000\r
2023-05-27,790400\r
2023-05-29,790400\r
2023-06-01,794400\r
2023-06-03,794400\r
2023-06-04,794400\r
2023-06-06,794400\r
2023-07-11,637800\r
2023-07-14,637800\r
2023-07-18,623200\r
2023-07-19,623200\r
2023-09-24,307500\r
2023-09-26,307500\r
2023-10-01,307500\r
2023-10-02,307500\r
2023-10-09,281500\r
2023-10-11,281500\r
2023-10-16,281500\r
2023-10-17,281500\r
2023-11-08,463400\r
`;export{r as default};
