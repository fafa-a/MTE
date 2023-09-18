const r=`date,value\r
2017-02-11,610900\r
2017-02-18,610900\r
2017-02-21,608700\r
2017-03-13,989800\r
2017-03-23,959600\r
2017-03-30,964100\r
2017-04-02,964100\r
2017-04-09,965200\r
2017-04-12,1038200\r
2017-04-19,887600\r
2017-04-22,880500\r
2017-04-29,869700\r
2017-05-02,879100\r
2017-05-09,868900\r
2017-06-18,930700\r
2017-06-21,868600\r
2017-06-28,912900\r
2017-07-01,702900\r
2017-08-20,720900\r
2017-08-22,720900\r
2017-08-25,737700\r
2017-08-27,838300\r
2017-10-11,615700\r
2017-10-14,627600\r
2017-10-16,627500\r
2017-10-19,629900\r
2017-10-21,625900\r
2017-10-24,626300\r
2017-10-26,626300\r
2017-10-31,571500\r
2017-11-05,609100\r
2017-11-13,592700\r
2017-11-15,591400\r
2017-11-18,570300\r
2017-11-23,570300\r
2018-03-20,934100\r
2018-03-25,956800\r
2018-03-30,956800\r
2018-04-17,949300\r
2018-04-19,1009500\r
2018-04-22,963800\r
2018-04-24,963800\r
2018-04-27,963800\r
2018-05-04,956400\r
2018-05-07,956400\r
2018-05-19,984300\r
2018-05-22,984300\r
2018-05-24,947200\r
2018-06-21,897900\r
2018-06-23,910800\r
2018-06-26,967800\r
2018-06-28,941100\r
2018-07-01,965200\r
2018-07-03,980300\r
2018-07-08,946400\r
2018-07-11,935300\r
2018-07-13,924000\r
2018-07-16,955500\r
2018-07-18,923600\r
2018-07-21,938700\r
2018-07-23,907900\r
2018-07-26,980200\r
2018-07-31,980600\r
2018-08-02,942300\r
2018-08-05,927600\r
2018-08-07,952700\r
2018-08-10,952700\r
2018-08-12,952700\r
2018-08-15,866400\r
2018-09-09,652000\r
2018-09-11,805900\r
2018-09-14,852800\r
2018-09-16,852800\r
2018-09-26,741100\r
2018-09-29,697200\r
2018-10-01,696000\r
2018-10-04,691400\r
2018-10-09,639900\r
2018-10-14,606600\r
2018-10-16,657300\r
2018-10-19,563000\r
2018-10-21,578500\r
2018-10-24,575100\r
2018-11-18,541400\r
2018-11-20,541400\r
2018-12-10,847000\r
2018-12-20,847000\r
2018-12-25,832600\r
2018-12-28,832600\r
2019-01-09,216900\r
2019-01-17,516700\r
2019-01-19,516700\r
2019-01-22,496600\r
2019-01-24,492700\r
2019-01-27,599600\r
2019-02-03,238800\r
2019-02-13,361400\r
2019-02-16,361400\r
2019-02-18,361400\r
2019-02-21,655100\r
2019-02-23,386500\r
2019-02-26,318400\r
2019-03-03,275700\r
2019-03-08,259600\r
2019-03-10,259600\r
2019-03-13,360900\r
2019-03-23,740200\r
2019-03-25,709900\r
2019-03-28,743500\r
2019-03-30,729200\r
2019-04-04,800500\r
2019-04-07,868200\r
2019-04-09,879900\r
2019-04-12,906800\r
2019-04-14,902500\r
2019-04-19,822000\r
2019-04-22,795000\r
2019-04-27,818900\r
2019-04-29,865800\r
2019-05-12,837800\r
2019-05-14,865700\r
2019-05-19,887400\r
2019-05-24,858300\r
2019-05-27,858300\r
2019-05-29,867200\r
2019-06-01,961000\r
2019-06-03,961000\r
2019-06-06,961000\r
2019-06-13,929700\r
2019-06-18,749600\r
2019-06-21,749600\r
2019-06-26,886400\r
2019-06-28,886400\r
2019-07-01,813900\r
2019-07-03,857800\r
2019-07-06,818900\r
2019-07-08,829600\r
2019-07-13,755800\r
2019-07-16,762500\r
2019-07-23,688800\r
2019-07-28,736400\r
2019-07-31,836600\r
2019-08-02,706400\r
2019-08-05,792100\r
2019-08-22,607400\r
2019-08-25,806500\r
2019-08-27,815700\r
2019-08-30,751800\r
2019-09-01,751600\r
2019-09-04,733000\r
2019-09-06,609600\r
2019-09-11,626400\r
2019-09-16,604300\r
2019-09-19,551700\r
2019-09-21,555600\r
2019-09-24,567100\r
2019-10-01,569200\r
2019-10-11,396300\r
2019-10-14,396300\r
2019-10-21,396300\r
2020-01-19,545500\r
2020-01-22,545500\r
2020-01-24,552000\r
2020-02-01,552000\r
2020-02-03,552000\r
2020-02-06,404500\r
2020-02-18,401700\r
2020-02-21,700000\r
2020-03-19,57100\r
2020-03-24,560100\r
2020-03-27,560100\r
2020-03-29,560100\r
2020-04-01,681700\r
2020-04-03,681700\r
2020-04-08,778600\r
2020-04-11,800400\r
2020-04-13,761700\r
2020-04-16,761700\r
2020-04-18,911100\r
2020-04-23,911100\r
2020-04-26,777000\r
2020-05-06,788900\r
2020-05-16,761100\r
2020-05-18,785300\r
2020-05-21,785300\r
2020-05-23,670000\r
2020-05-26,807200\r
2020-05-28,716000\r
2020-05-31,794800\r
2020-06-02,756900\r
2020-06-05,830600\r
2020-06-07,830600\r
2020-07-12,814500\r
2020-07-15,814500\r
2020-07-17,589200\r
2020-07-20,814500\r
2020-07-22,816600\r
2020-07-27,859500\r
2020-07-30,863900\r
2020-08-01,863900\r
2020-08-04,871300\r
2020-08-06,785000\r
2020-08-09,667800\r
2020-08-11,668000\r
2020-08-14,662400\r
2020-09-08,655600\r
2020-09-10,671500\r
2020-09-13,677900\r
2020-09-15,677900\r
2020-09-20,676100\r
2020-09-25,693200\r
2020-11-04,421300\r
2020-11-09,421300\r
2020-11-12,421300\r
2020-11-14,421300\r
2020-11-19,667300\r
2020-11-22,678600\r
2020-11-27,678600\r
2020-11-29,529400\r
2020-12-12,699300\r
2021-01-08,843900\r
2021-01-11,843900\r
2021-01-18,843900\r
2021-02-27,995200\r
2021-03-02,995200\r
2021-03-04,995200\r
2021-03-09,997600\r
2021-03-17,937100\r
2021-03-19,962500\r
2021-03-22,908200\r
2021-03-24,901600\r
2021-03-27,901600\r
2021-03-29,925700\r
2021-04-01,926600\r
2021-04-03,935200\r
2021-04-06,903900\r
2021-04-08,890900\r
2021-04-11,855900\r
2021-04-13,921400\r
2021-04-16,933700\r
2021-04-18,932600\r
2021-04-21,933700\r
2021-04-23,918900\r
2021-04-28,1008400\r
2021-05-03,897300\r
2021-05-08,1006600\r
2021-05-31,875200\r
2021-06-05,874500\r
2021-06-07,874500\r
2021-06-10,859900\r
2021-07-17,792700\r
2021-07-20,815200\r
2021-07-22,815200\r
2021-07-25,815200\r
2021-07-30,796300\r
2021-08-11,878800\r
2021-08-14,894400\r
2021-08-24,766700\r
2021-08-26,821900\r
2021-08-29,821900\r
2021-08-31,821900\r
2021-09-03,821900\r
2021-09-05,793200\r
2021-09-23,653000\r
2021-09-28,653000\r
2021-09-30,670500\r
2021-10-03,670500\r
2021-10-08,554500\r
2021-10-10,554500\r
2021-10-23,601700\r
2021-10-28,583900\r
2021-11-04,523000\r
2021-11-09,500100\r
2021-11-19,541500\r
2021-11-24,525300\r
2021-12-17,547900\r
2022-01-06,877300\r
2022-01-11,878600\r
2022-01-13,797700\r
2022-01-21,774700\r
2022-01-23,830400\r
2022-01-31,789400\r
2022-03-07,847500\r
2022-03-09,846000\r
2022-03-12,846000\r
2022-03-14,855900\r
2022-03-22,904700\r
2022-03-24,892200\r
2022-03-27,875000\r
2022-04-01,875200\r
2022-04-11,837100\r
2022-04-13,835300\r
2022-04-16,959800\r
2022-04-21,895500\r
2022-04-26,912400\r
2022-05-01,900600\r
2022-05-03,879100\r
2022-05-06,869600\r
2022-05-08,895100\r
2022-05-11,853800\r
2022-05-13,853800\r
2022-05-16,858400\r
2022-05-21,832400\r
2022-05-28,823400\r
2022-05-31,821500\r
2022-06-02,977000\r
2022-06-05,977000\r
2022-06-07,977000\r
2022-06-10,1046800\r
2022-06-12,998200\r
2022-06-15,1011300\r
2022-06-17,1073400\r
2022-06-27,1014700\r
2022-07-02,966800\r
2022-07-05,954100\r
2022-07-07,863000\r
2022-07-10,842900\r
2022-07-12,822500\r
2022-07-15,816100\r
2022-07-17,787400\r
2022-07-20,832800\r
2022-08-06,645600\r
2022-08-09,697100\r
2022-08-11,672200\r
2022-09-18,561000\r
2022-09-20,568700\r
2022-09-30,517000\r
2022-11-12,401000\r
2022-11-17,393800\r
2022-11-19,435400\r
2022-11-22,435000\r
2022-11-29,431900\r
2022-12-09,457600\r
2023-01-11,776700\r
2023-01-13,845600\r
2023-01-16,845600\r
2023-01-21,809000\r
2023-02-05,834300\r
2023-02-07,834600\r
2023-02-10,905000\r
2023-02-12,860400\r
2023-02-15,858900\r
2023-02-20,851000\r
2023-02-27,825800\r
2023-03-02,828700\r
2023-03-04,845200\r
2023-05-26,837600\r
2023-05-28,934200\r
2023-05-31,919500\r
2023-06-02,919500\r
2023-06-05,917900\r
2023-06-07,947800\r
2023-06-10,977500\r
2023-06-15,980500\r
2023-06-22,909700\r
2023-06-25,937700\r
2023-07-07,923600\r
2023-07-10,924800\r
2023-07-15,924800\r
2023-07-17,924800\r
2023-08-09,762600\r
2023-08-19,807800\r
2023-09-03,742900\r
2023-09-05,721800\r
2023-09-08,728300\r
2023-09-10,722500\r
`;export{r as default};
