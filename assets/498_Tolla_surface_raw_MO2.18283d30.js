const r=`date,value\r
2017-02-26,860500\r
2017-03-05,865100\r
2017-03-08,844700\r
2017-03-15,863300\r
2017-03-18,863300\r
2017-03-28,890600\r
2017-04-04,948500\r
2017-04-07,923300\r
2017-04-14,944300\r
2017-04-17,955500\r
2017-04-24,982700\r
2017-05-04,998400\r
2017-05-07,968100\r
2017-05-14,968100\r
2017-05-17,957800\r
2017-05-24,1015400\r
2017-05-27,974500\r
2017-06-03,980500\r
2017-06-06,984400\r
2017-06-13,1012500\r
2017-06-16,1012300\r
2017-06-23,1008800\r
2017-06-26,973100\r
2017-07-01,1002100\r
2017-07-03,991600\r
2017-07-06,977500\r
2017-07-08,987900\r
2017-07-11,990100\r
2017-07-13,979600\r
2017-07-18,994700\r
2017-07-21,977600\r
2017-07-26,973900\r
2017-07-28,988200\r
2017-08-02,978900\r
2017-08-05,985000\r
2017-08-07,980500\r
2017-08-12,975100\r
2017-08-15,963000\r
2017-08-17,966600\r
2017-08-20,965700\r
2017-08-22,953700\r
2017-08-25,949500\r
2017-08-27,956000\r
2017-08-30,967500\r
2017-09-01,960000\r
2017-09-04,951400\r
2017-09-06,963700\r
2017-09-21,920000\r
2017-09-24,922900\r
2017-10-04,893300\r
2017-10-11,867400\r
2017-10-14,855000\r
2017-10-16,841000\r
2017-10-19,837100\r
2017-10-21,839400\r
2017-10-24,831800\r
2017-10-26,842100\r
2017-10-29,843200\r
2017-10-31,847600\r
2018-03-23,963500\r
2018-03-25,957200\r
2018-03-28,957200\r
2018-03-30,957200\r
2018-04-02,962900\r
2018-04-07,940600\r
2018-04-09,940600\r
2018-04-14,949400\r
2018-04-17,953400\r
2018-04-19,953400\r
2018-04-22,935300\r
2018-04-24,952200\r
2018-04-27,941600\r
2018-04-29,959000\r
2018-05-07,988400\r
2018-05-24,1011500\r
2018-06-01,1011500\r
2018-06-03,997000\r
2018-06-08,990200\r
2018-06-16,1010000\r
2018-06-18,1005800\r
2018-06-21,1007700\r
2018-06-23,1007700\r
2018-06-26,1003300\r
2018-06-28,1007700\r
2018-07-01,975500\r
2018-07-03,959800\r
2018-07-06,966500\r
2018-07-08,1001400\r
2018-07-11,978900\r
2018-07-13,984600\r
2018-07-18,1001400\r
2018-07-21,983600\r
2018-07-23,973400\r
2018-07-26,964300\r
2018-07-28,988600\r
2018-07-31,977600\r
2018-08-02,993000\r
2018-08-05,989800\r
2018-08-07,1011900\r
2018-08-10,1007200\r
2018-08-12,1000600\r
2018-08-15,980300\r
2018-08-17,983700\r
2018-08-20,985100\r
2018-08-22,985200\r
2018-09-11,916400\r
2018-09-14,903600\r
2018-09-16,903600\r
2018-09-19,903600\r
2018-09-21,907600\r
2018-09-24,919300\r
2018-09-26,904600\r
2018-09-29,887300\r
2018-10-01,887300\r
2018-10-04,879800\r
2018-10-09,898900\r
2018-10-14,878900\r
2018-10-19,899900\r
2018-10-21,884400\r
2018-10-24,866700\r
2018-10-26,881200\r
2019-02-26,889800\r
2019-02-28,892500\r
2019-03-03,888300\r
2019-03-08,896900\r
2019-03-18,912100\r
2019-03-20,918000\r
2019-03-23,915500\r
2019-03-25,903600\r
2019-03-28,897300\r
2019-03-30,898200\r
2019-04-02,898200\r
2019-04-09,906900\r
2019-04-14,925100\r
2019-04-17,945000\r
2019-04-19,966200\r
2019-04-27,976300\r
2019-04-29,972900\r
2019-05-02,965800\r
2019-05-07,995700\r
2019-05-09,958900\r
2019-05-12,958900\r
2019-05-14,958900\r
2019-05-24,979100\r
2019-05-29,921000\r
2019-06-01,921000\r
2019-06-03,993800\r
2019-06-06,993800\r
2019-06-11,995200\r
2019-06-13,990600\r
2019-06-18,968800\r
2019-06-21,999300\r
2019-06-23,979100\r
2019-06-26,996300\r
2019-06-28,998800\r
2019-07-01,998200\r
2019-07-03,988500\r
2019-07-06,992500\r
2019-07-08,989900\r
2019-07-11,996300\r
2019-07-13,986900\r
2019-07-16,981300\r
2019-07-18,970100\r
2019-07-21,969700\r
2019-07-23,965500\r
2019-07-26,966000\r
2019-07-31,962900\r
2019-08-02,945400\r
2019-08-05,957700\r
2019-08-07,939900\r
2019-08-10,929800\r
2019-08-12,910700\r
2019-08-15,894000\r
2019-08-17,879400\r
2019-08-20,871800\r
2019-08-25,859100\r
2019-08-27,839700\r
2019-08-30,838700\r
2019-09-01,839000\r
2019-09-04,846100\r
2019-09-06,833600\r
2019-09-09,842500\r
2019-09-11,823000\r
2019-09-14,826500\r
2019-09-16,827000\r
2019-09-19,830300\r
2019-09-24,841600\r
2019-09-26,841500\r
2019-09-29,873900\r
2019-10-01,850800\r
2019-10-04,872200\r
2019-10-06,838900\r
2019-10-09,835100\r
2019-10-11,814200\r
2019-10-14,804300\r
2019-10-19,795100\r
2019-10-21,813600\r
2019-10-26,798400\r
2020-02-28,829700\r
2020-03-04,823600\r
2020-03-07,823600\r
2020-03-12,744800\r
2020-03-14,852900\r
2020-03-19,862800\r
2020-03-22,870900\r
2020-03-24,869800\r
2020-03-27,869800\r
2020-03-29,874200\r
2020-04-01,873700\r
2020-04-03,873700\r
2020-04-06,879100\r
2020-04-08,841400\r
2020-04-11,833400\r
2020-04-16,824800\r
2020-04-23,887900\r
2020-04-26,942800\r
2020-05-06,969700\r
2020-05-11,969700\r
2020-05-21,971500\r
2020-05-28,956700\r
2020-05-31,956700\r
2020-06-05,956700\r
2020-06-07,967100\r
2020-06-10,989900\r
2020-06-15,1020900\r
2020-06-20,1028700\r
2020-06-22,996600\r
2020-06-25,999100\r
2020-06-27,1001400\r
2020-06-30,1009600\r
2020-07-02,1000800\r
2020-07-05,976800\r
2020-07-07,986100\r
2020-07-10,990600\r
2020-07-12,1000100\r
2020-07-15,1000700\r
2020-07-17,997200\r
2020-07-20,996600\r
2020-07-22,994600\r
2020-07-25,995700\r
2020-07-27,983300\r
2020-07-30,988000\r
2020-08-01,985300\r
2020-08-04,967800\r
2020-08-06,955500\r
2020-08-09,970400\r
2020-08-11,934200\r
2020-08-14,928600\r
2020-08-16,916400\r
2020-08-19,916400\r
2020-08-21,892900\r
2020-08-24,890200\r
2020-08-26,876900\r
2020-08-31,865900\r
2020-09-03,874500\r
2020-09-05,863300\r
2020-09-08,884600\r
2020-09-10,889000\r
2020-09-13,894200\r
2020-09-15,879500\r
2020-09-18,891800\r
2020-09-20,883300\r
2020-09-23,913400\r
2020-09-30,930200\r
2020-10-03,935200\r
2020-10-08,884400\r
2020-10-13,882600\r
2020-10-18,882400\r
2020-10-20,882400\r
2021-02-25,945000\r
2021-02-27,935100\r
2021-03-02,937900\r
2021-03-04,935100\r
2021-03-07,935100\r
2021-03-12,936100\r
2021-03-22,826600\r
2021-03-24,849700\r
2021-03-27,849700\r
2021-03-29,838400\r
2021-04-01,838400\r
2021-04-03,867500\r
2021-04-06,858400\r
2021-04-23,912700\r
2021-04-26,912700\r
2021-05-03,964800\r
2021-05-06,969500\r
2021-05-08,960900\r
2021-05-16,975600\r
2021-05-18,1009600\r
2021-05-21,1003100\r
2021-05-26,976300\r
2021-05-28,976300\r
2021-05-31,983100\r
2021-06-02,972500\r
2021-06-15,988000\r
2021-06-22,1011600\r
2021-06-25,1001500\r
2021-06-27,1007100\r
2021-06-30,1015100\r
2021-07-02,1015100\r
2021-07-07,1015600\r
2021-07-10,1014100\r
2021-07-12,1013500\r
2021-07-15,1014500\r
2021-07-17,1014500\r
2021-07-20,1002000\r
2021-07-22,1002800\r
2021-07-25,998000\r
2021-07-27,980400\r
2021-07-30,983700\r
2021-08-01,970300\r
2021-08-06,959900\r
2021-08-09,966300\r
2021-08-14,951100\r
2021-08-16,927300\r
2021-08-19,910700\r
2021-08-21,919200\r
2021-08-24,905700\r
2021-08-26,917000\r
2021-08-29,903300\r
2021-08-31,899800\r
2021-09-13,856100\r
2021-09-18,847600\r
2021-09-20,860100\r
2021-09-23,824700\r
2021-09-25,831700\r
2021-09-28,812900\r
2021-09-30,817300\r
2021-10-03,798300\r
2021-10-05,805200\r
2021-10-08,805200\r
2021-10-10,812900\r
2021-10-13,801900\r
2021-10-15,787500\r
2021-10-23,781000\r
2021-10-25,786400\r
2022-02-27,897600\r
2022-03-02,901300\r
2022-03-07,896500\r
2022-03-09,895200\r
2022-03-14,889800\r
2022-03-22,853700\r
2022-03-24,909400\r
2022-03-27,909400\r
2022-03-29,909400\r
2022-04-03,908400\r
2022-04-11,957000\r
2022-04-13,965800\r
2022-04-16,955000\r
2022-04-18,959800\r
2022-04-26,960900\r
2022-04-28,982900\r
2022-05-01,978300\r
2022-05-03,983800\r
2022-05-06,983800\r
2022-05-11,976500\r
2022-05-13,1008900\r
2022-05-16,975900\r
2022-05-18,1010400\r
2022-05-21,981700\r
2022-05-23,1002800\r
2022-05-26,1005400\r
2022-05-28,1004600\r
2022-05-31,996000\r
2022-06-02,1003100\r
2022-06-07,1000600\r
2022-06-10,1001100\r
2022-06-12,1004000\r
2022-06-15,1002600\r
2022-06-17,1008800\r
2022-06-20,1001000\r
2022-06-25,953100\r
2022-06-27,1013900\r
2022-07-02,933300\r
2022-07-05,958100\r
2022-07-07,958100\r
2022-07-10,950300\r
2022-07-12,963500\r
2022-07-15,966700\r
2022-07-17,988100\r
2022-07-20,966900\r
2022-07-22,980300\r
2022-07-25,964600\r
2022-07-27,970900\r
2022-07-30,963600\r
2022-08-01,964800\r
2022-08-04,958300\r
2022-08-06,958900\r
2022-08-09,958100\r
2022-08-11,963700\r
2022-08-14,952000\r
2022-08-16,957200\r
2022-08-19,946600\r
2022-08-21,952100\r
2022-08-24,949600\r
2022-08-26,928800\r
2022-08-29,911100\r
2022-09-03,907100\r
2022-09-05,911000\r
2022-09-08,894500\r
2022-09-10,914100\r
2022-09-13,872300\r
2022-09-18,868000\r
2022-09-20,875900\r
2022-09-23,863700\r
2022-10-05,902500\r
2022-10-08,905100\r
2022-10-10,905100\r
2022-10-13,905100\r
2022-10-15,905100\r
2022-10-18,862600\r
2022-10-20,889100\r
2022-10-23,859500\r
2022-10-25,881800\r
2022-10-28,858500\r
2022-10-30,857700\r
2022-11-02,864700\r
2023-03-12,781500\r
2023-03-14,781500\r
2023-03-17,789700\r
2023-03-22,802100\r
2023-03-24,748400\r
2023-03-27,802100\r
2023-04-06,867700\r
2023-04-08,857600\r
2023-04-16,867100\r
2023-04-21,941500\r
2023-04-23,941500\r
2023-04-26,958800\r
2023-04-28,960800\r
2023-05-01,960800\r
2023-05-03,949600\r
2023-05-06,966300\r
2023-05-11,950400\r
2023-05-16,950400\r
2023-05-26,954700\r
2023-05-28,994600\r
2023-05-31,1003200\r
2023-06-02,1003200\r
2023-06-05,1003200\r
2023-06-07,1001200\r
2023-06-17,998700\r
2023-06-20,1000200\r
2023-06-25,999700\r
2023-06-27,996700\r
`;export{r as default};
