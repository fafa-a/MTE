const r=`date,value\r
2017-02-11,312300\r
2017-03-10,331500\r
2017-03-13,453200\r
2017-03-30,514900\r
2017-04-09,440900\r
2017-04-12,530600\r
2017-04-19,399900\r
2017-04-22,410000\r
2017-06-18,483400\r
2017-06-21,441500\r
2017-08-20,348800\r
2017-08-25,372300\r
2017-08-27,372000\r
2017-10-11,252000\r
2017-10-14,247800\r
2017-10-19,233100\r
2017-10-26,264500\r
2017-11-13,263200\r
2018-01-17,356100\r
2018-03-20,445700\r
2018-04-17,464500\r
2018-04-19,495300\r
2018-05-04,485100\r
2018-05-19,500200\r
2018-06-21,412000\r
2018-06-23,477000\r
2018-06-28,512800\r
2018-07-08,456500\r
2018-07-11,478100\r
2018-07-16,530400\r
2018-07-18,433200\r
2018-07-26,479100\r
2018-08-02,443800\r
2018-08-05,396800\r
2018-09-01,348200\r
2018-09-11,361900\r
2018-09-24,219300\r
2018-09-26,316100\r
2018-10-04,261800\r
2018-10-09,276500\r
2018-10-19,215200\r
2018-10-21,245400\r
2018-10-24,230600\r
2018-11-15,254900\r
2018-11-18,232100\r
2018-12-10,364500\r
2019-01-17,304700\r
2019-01-22,19300\r
2019-02-03,100\r
2019-02-13,260800\r
2019-02-23,154000\r
2019-02-26,184900\r
2019-03-23,324300\r
2019-03-28,436900\r
2019-04-12,411500\r
2019-05-12,445000\r
2019-06-01,465300\r
2019-06-16,365900\r
2019-06-18,427400\r
2019-06-26,443000\r
2019-07-03,397400\r
2019-07-08,332800\r
2019-07-13,310400\r
2019-08-22,272600\r
2019-09-04,263200\r
2019-09-06,132700\r
2019-09-11,269500\r
2019-09-16,269900\r
2019-09-19,239400\r
2019-09-21,260600\r
2020-01-19,267100\r
2020-02-06,274600\r
2020-03-19,100\r
2020-03-24,328700\r
2020-03-27,399000\r
2020-04-01,362400\r
2020-04-11,417900\r
2020-05-18,316300\r
2020-05-26,138600\r
2020-05-28,368800\r
2020-05-31,432100\r
2020-06-02,379700\r
2020-07-12,282100\r
2020-07-17,208700\r
2020-07-20,491600\r
2020-07-22,440400\r
2020-07-30,359000\r
2020-08-06,292500\r
2020-08-11,144100\r
2020-09-08,263400\r
2020-09-10,189600\r
2020-09-13,311600\r
2020-09-20,317600\r
2020-11-04,141200\r
2020-11-19,296400\r
2020-11-22,240600\r
2020-11-29,165500\r
2020-12-12,339700\r
2021-01-08,411100\r
2021-02-27,495200\r
2021-03-17,431800\r
2021-03-22,428600\r
2021-03-24,475600\r
2021-03-29,503500\r
2021-04-03,434300\r
2021-04-08,357600\r
2021-04-13,459000\r
2021-04-23,409200\r
2021-04-28,561800\r
2021-05-08,399600\r
2021-05-31,434200\r
2021-07-17,425800\r
2021-07-20,428000\r
2021-07-22,375500\r
2021-08-11,517600\r
2021-08-14,433300\r
2021-08-26,478600\r
2021-08-29,350600\r
2021-09-08,343800\r
2021-09-23,340000\r
2021-09-30,269300\r
2021-10-08,318300\r
2021-10-15,208600\r
2021-10-23,304600\r
2021-10-28,270900\r
2021-11-04,291800\r
2021-11-09,309200\r
2021-11-19,350600\r
2021-12-17,327100\r
2022-01-11,6000\r
2022-01-13,363700\r
2022-01-21,349100\r
2022-03-07,377200\r
2022-03-22,454800\r
2022-03-24,376700\r
2022-04-11,421400\r
2022-04-16,487800\r
2022-05-03,471800\r
2022-05-11,397500\r
2022-05-21,426400\r
2022-05-28,394200\r
2022-05-31,555300\r
2022-06-02,518400\r
2022-06-15,539200\r
2022-06-17,537000\r
2022-07-02,541600\r
2022-07-05,440600\r
2022-07-07,411100\r
2022-07-10,413300\r
2022-07-12,431800\r
2022-08-09,328800\r
2022-08-11,359400\r
2022-08-24,267400\r
2022-09-18,275000\r
2022-09-20,263600\r
2022-10-08,254900\r
2022-11-12,231200\r
2022-11-19,245700\r
2022-11-29,264400\r
2022-12-09,259600\r
2023-01-03,307400\r
2023-01-11,320500\r
2023-01-16,402400\r
2023-01-21,325600\r
2023-02-10,379200\r
2023-02-12,417300\r
2023-02-15,355800\r
2023-02-27,360800\r
2023-03-04,371800\r
2023-04-21,443900\r
`;export{r as default};
