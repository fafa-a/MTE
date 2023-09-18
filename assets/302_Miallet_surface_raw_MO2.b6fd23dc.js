const r=`date,value\r
2017-01-19,480400\r
2017-01-26,494400\r
2017-01-29,494400\r
2017-02-15,491300\r
2017-02-18,516300\r
2017-02-25,493000\r
2017-02-28,513500\r
2017-03-10,550800\r
2017-03-17,558300\r
2017-03-27,571600\r
2017-03-30,589200\r
2017-04-06,578400\r
2017-04-09,563700\r
2017-04-19,577000\r
2017-04-29,587600\r
2017-05-09,616200\r
2017-05-16,634400\r
2017-05-19,634400\r
2017-05-26,628800\r
2017-06-05,594400\r
2017-06-18,603000\r
2017-06-25,622100\r
2017-07-03,628500\r
2017-07-05,629500\r
2017-07-18,619900\r
2017-07-28,619900\r
2017-08-07,675300\r
2017-08-14,670400\r
2017-08-17,576100\r
2017-08-19,566500\r
2017-08-22,583200\r
2017-08-24,560000\r
2017-08-27,574800\r
2017-08-29,554200\r
2017-09-03,546500\r
2017-09-21,491300\r
2017-09-28,491300\r
2017-10-11,513000\r
2017-10-13,513400\r
2017-10-16,528000\r
2017-10-18,528000\r
2017-10-23,522000\r
2017-10-26,484700\r
2017-10-28,389500\r
2017-10-31,391700\r
2017-11-02,404100\r
2017-11-05,407200\r
2017-11-07,400800\r
2017-11-15,410600\r
2017-11-17,386100\r
2017-11-20,403800\r
2017-11-22,387000\r
2017-11-25,387000\r
2017-11-27,390400\r
2017-12-05,415100\r
2017-12-07,415100\r
2017-12-20,437600\r
2018-02-10,643400\r
2018-02-18,643400\r
2018-02-25,603500\r
2018-03-02,627800\r
2018-04-19,664500\r
2018-04-21,654200\r
2018-04-26,646600\r
2018-05-04,657400\r
2018-05-06,635000\r
2018-05-11,629500\r
2018-05-19,618300\r
2018-05-21,618300\r
2018-06-23,633000\r
2018-06-25,617000\r
2018-06-28,624300\r
2018-07-08,618000\r
2018-07-10,621000\r
2018-07-15,610400\r
2018-07-18,622900\r
2018-07-20,619200\r
2018-07-23,639700\r
2018-07-25,628300\r
2018-08-02,637500\r
2018-08-04,639200\r
2018-08-12,641000\r
2018-08-19,646600\r
2018-08-22,608700\r
2018-09-01,596200\r
2018-09-08,570700\r
2018-09-11,562800\r
2018-09-16,557900\r
2018-09-26,587700\r
2018-09-28,595300\r
2018-10-06,560000\r
2018-10-13,567200\r
2018-10-16,567200\r
2018-10-18,580100\r
2018-10-21,563500\r
2018-10-23,564200\r
2018-12-25,599600\r
2018-12-30,599600\r
2019-02-13,586300\r
2019-02-15,607100\r
2019-02-18,603300\r
2019-02-20,613300\r
2019-02-23,604200\r
2019-02-25,608100\r
2019-03-05,618900\r
2019-03-07,602600\r
2019-03-12,592500\r
2019-03-20,619800\r
2019-03-22,643200\r
2019-03-25,610100\r
2019-03-27,630000\r
2019-03-30,624200\r
2019-04-01,624200\r
2019-04-09,624200\r
2019-04-14,666700\r
2019-05-14,666900\r
2019-05-16,667400\r
2019-05-31,627100\r
2019-06-13,659800\r
2019-06-18,714400\r
2019-06-25,717700\r
2019-06-28,684200\r
2019-06-30,684200\r
2019-07-03,711400\r
2019-07-05,681200\r
2019-07-08,663200\r
2019-07-10,666900\r
2019-07-13,655100\r
2019-07-15,646400\r
2019-07-23,653200\r
2019-07-25,646500\r
2019-07-28,624400\r
2019-08-02,640000\r
2019-08-04,644300\r
2019-08-09,607700\r
2019-08-14,594700\r
2019-08-17,594700\r
2019-08-22,558200\r
2019-08-24,543100\r
2019-08-29,539400\r
2019-09-03,515100\r
2019-09-06,491200\r
2019-09-08,447100\r
2019-09-11,413500\r
2019-09-13,398500\r
2019-09-16,389000\r
2019-09-18,389000\r
2019-09-21,399000\r
2019-10-11,385400\r
2019-10-13,395700\r
2019-10-16,383800\r
2019-10-26,383800\r
2019-12-05,549600\r
2019-12-10,571800\r
2019-12-25,634800\r
2019-12-30,641400\r
2020-01-06,624400\r
2020-01-11,628200\r
2020-01-16,622100\r
2020-01-19,625100\r
2020-01-21,625100\r
2020-01-24,633100\r
2020-02-03,673700\r
2020-02-05,674000\r
2020-03-19,630000\r
2020-03-21,647500\r
2020-03-24,624700\r
2020-03-26,624700\r
2020-03-31,629300\r
2020-04-03,624700\r
2020-04-05,623700\r
2020-04-08,630100\r
2020-04-10,629100\r
2020-04-13,620900\r
2020-04-15,627600\r
2020-04-25,643300\r
2020-05-05,707200\r
2020-05-18,683800\r
2020-05-20,663100\r
2020-05-25,649300\r
2020-05-28,676200\r
2020-05-30,656300\r
2020-06-02,664800\r
2020-07-09,646600\r
2020-07-12,661100\r
2020-07-14,667300\r
2020-07-19,635500\r
2020-07-24,672800\r
2020-07-27,696200\r
2020-07-29,681700\r
2020-08-06,689100\r
2020-08-08,679000\r
2020-08-11,669900\r
2020-09-05,644100\r
2020-09-07,642700\r
2020-09-10,640700\r
2020-09-12,636400\r
2020-09-15,633400\r
2020-09-17,631700\r
2020-11-06,609800\r
2020-11-11,609800\r
2020-11-14,609800\r
2020-11-19,620700\r
2020-11-21,612200\r
2020-11-26,627900\r
2020-11-29,620500\r
2021-01-08,612600\r
2021-01-10,624200\r
2021-01-18,611600\r
2021-02-17,626000\r
2021-02-19,647500\r
2021-02-24,628500\r
2021-02-27,636400\r
2021-03-01,644900\r
2021-03-04,629100\r
2021-03-06,637100\r
2021-03-09,636100\r
2021-03-14,643500\r
2021-03-24,648200\r
2021-03-29,664800\r
2021-03-31,623300\r
2021-04-03,635800\r
2021-04-05,619500\r
2021-04-08,635600\r
2021-04-13,644400\r
2021-04-15,645100\r
2021-04-18,645100\r
2021-04-23,642400\r
2021-05-03,641500\r
2021-05-08,662100\r
2021-05-28,629700\r
2021-05-30,676700\r
2021-06-09,659000\r
2021-06-12,627100\r
2021-06-14,652900\r
2021-06-19,652900\r
2021-07-19,683900\r
2021-07-22,691400\r
2021-07-29,658600\r
2021-08-11,607800\r
2021-08-21,620100\r
2021-08-23,623600\r
2021-08-26,621900\r
2021-08-28,618800\r
2021-08-31,635000\r
2021-09-02,654500\r
2021-09-05,657300\r
2021-09-12,627900\r
2021-09-22,613900\r
2021-09-30,622400\r
2021-10-02,622400\r
2021-10-10,616600\r
2021-10-12,603500\r
2021-10-15,599900\r
2021-10-17,599900\r
2021-11-09,597200\r
2021-11-11,597200\r
2021-11-19,602700\r
2021-12-14,605100\r
2021-12-16,626600\r
2021-12-19,608400\r
2021-12-21,615100\r
2022-01-13,633400\r
2022-01-15,615500\r
2022-01-18,605800\r
2022-01-23,613700\r
2022-01-25,624700\r
2022-01-28,612700\r
2022-01-30,604100\r
2022-02-07,589500\r
2022-02-09,617100\r
2022-02-27,631100\r
2022-03-01,650800\r
2022-03-06,634100\r
2022-03-09,633100\r
2022-03-24,638200\r
2022-03-26,643800\r
2022-04-10,599300\r
2022-04-15,624900\r
2022-05-03,636100\r
2022-05-05,636100\r
2022-05-08,636100\r
2022-05-15,675200\r
2022-05-28,622200\r
2022-05-30,627800\r
2022-06-02,621500\r
2022-06-14,607900\r
2022-06-17,629600\r
2022-06-19,609400\r
2022-06-27,626600\r
2022-06-29,648000\r
2022-07-02,644900\r
2022-07-07,632900\r
2022-07-12,651600\r
2022-07-14,659300\r
2022-07-17,662100\r
2022-07-19,663700\r
2022-07-22,663600\r
2022-07-24,646200\r
2022-07-27,652800\r
2022-08-01,663300\r
2022-08-03,652600\r
2022-08-06,653500\r
2022-08-08,660400\r
2022-08-11,639400\r
2022-08-13,617300\r
2022-08-18,605800\r
2022-09-12,458000\r
2022-09-20,448700\r
2022-09-22,423100\r
2022-09-30,420900\r
2022-10-05,422600\r
2022-10-12,420500\r
2022-11-11,416200\r
2022-12-06,438300\r
2022-12-16,438300\r
2023-02-09,535200\r
2023-02-12,551700\r
2023-02-14,528900\r
2023-03-04,533000\r
2023-03-06,533000\r
2023-04-05,599800\r
2023-04-08,615900\r
2023-05-03,686700\r
2023-05-30,654900\r
2023-06-02,654900\r
2023-06-04,659800\r
2023-06-07,669000\r
2023-06-14,648800\r
2023-06-17,648800\r
2023-06-24,639800\r
2023-06-27,630600\r
2023-06-29,630100\r
2023-07-07,639300\r
2023-07-09,653000\r
2023-07-14,641700\r
2023-07-19,644600\r
2023-07-22,647200\r
2023-07-27,651200\r
2023-08-01,666100\r
2023-08-08,608100\r
2023-08-21,490800\r
2023-08-23,500100\r
2023-08-26,500100\r
2023-09-02,492800\r
2023-09-05,323600\r
2023-09-07,395400\r
2023-09-10,347000\r
`;export{r as default};
