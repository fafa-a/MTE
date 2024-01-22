const r=`date,value\r
2017-01-26,259700\r
2017-01-29,259700\r
2017-02-15,284100\r
2017-02-18,287600\r
2017-02-25,283100\r
2017-03-10,291000\r
2017-03-17,291000\r
2017-03-30,305900\r
2017-04-06,327700\r
2017-04-09,320800\r
2017-04-19,325000\r
2017-04-29,334000\r
2017-05-06,333200\r
2017-05-09,323500\r
2017-05-16,324800\r
2017-05-19,335000\r
2017-05-26,339100\r
2017-06-05,336000\r
2017-06-18,339400\r
2017-06-25,339400\r
2017-06-28,339400\r
2017-07-05,341100\r
2017-07-18,348900\r
2017-08-02,332600\r
2017-08-04,353200\r
2017-08-07,340800\r
2017-08-12,342300\r
2017-08-14,344700\r
2017-08-17,337000\r
2017-08-22,318400\r
2017-08-24,337100\r
2017-08-27,301700\r
2017-08-29,301700\r
2017-09-01,302900\r
2017-09-03,265200\r
2017-09-06,265500\r
2017-09-08,265500\r
2017-09-21,250400\r
2017-09-23,250400\r
2017-09-26,247800\r
2017-09-28,247800\r
2017-10-08,247400\r
2017-10-11,249900\r
2017-10-13,245100\r
2017-10-16,246300\r
2017-10-18,246300\r
2017-10-23,242600\r
2017-10-26,232700\r
2017-10-28,234900\r
2017-10-31,237900\r
2017-11-05,233200\r
2017-11-07,240100\r
2017-11-17,222100\r
2017-11-20,227500\r
2017-11-22,226900\r
2017-11-25,226900\r
2017-11-27,224900\r
2017-11-30,223900\r
2017-12-05,222100\r
2017-12-07,222100\r
2017-12-12,239900\r
2017-12-15,239900\r
2017-12-20,266100\r
2017-12-25,265700\r
2017-12-27,265700\r
2018-02-15,361200\r
2018-02-25,360800\r
2018-03-02,349600\r
2018-03-07,349600\r
2018-03-15,355800\r
2018-03-17,355800\r
2018-03-22,358500\r
2018-03-30,356700\r
2018-04-06,343100\r
2018-04-09,343100\r
2018-04-19,349700\r
2018-04-21,363700\r
2018-04-24,363700\r
2018-04-26,363700\r
2018-05-06,337200\r
2018-05-11,366800\r
2018-05-21,367800\r
2018-05-24,363700\r
2018-06-03,354700\r
2018-06-13,339300\r
2018-06-20,358500\r
2018-06-23,361100\r
2018-06-25,357400\r
2018-07-08,360800\r
2018-07-10,354800\r
2018-07-13,354900\r
2018-07-15,354900\r
2018-07-18,354900\r
2018-07-23,360100\r
2018-07-25,359500\r
2018-07-30,359500\r
2018-08-02,347400\r
2018-08-04,353900\r
2018-08-12,347000\r
2018-08-19,351000\r
2018-08-22,345700\r
2018-08-27,344100\r
2018-09-01,342700\r
2018-09-03,336300\r
2018-09-08,342500\r
2018-09-11,345100\r
2018-09-16,344300\r
2018-09-18,344300\r
2018-09-23,347300\r
2018-09-26,340700\r
2018-09-28,341400\r
2018-10-03,342100\r
2018-10-06,330100\r
2018-10-13,329700\r
2018-12-07,314200\r
2018-12-10,314200\r
2019-01-16,319400\r
2019-01-19,319400\r
2019-01-24,319400\r
2019-01-26,319400\r
2019-02-03,360100\r
2019-02-13,360600\r
2019-02-15,353500\r
2019-02-18,353500\r
2019-02-20,348100\r
2019-02-23,352900\r
2019-02-25,351200\r
2019-02-28,351200\r
2019-03-12,354400\r
2019-03-20,344700\r
2019-03-22,334700\r
2019-03-25,334700\r
2019-03-27,345900\r
2019-03-30,349100\r
2019-04-01,349100\r
2019-04-09,349800\r
2019-05-01,336100\r
2019-05-06,340600\r
2019-05-09,340600\r
2019-05-11,340600\r
2019-05-14,340600\r
2019-05-16,340600\r
2019-05-29,366100\r
2019-06-08,362800\r
2019-06-13,365500\r
2019-06-23,363600\r
2019-06-25,363800\r
2019-06-28,370400\r
2019-07-05,361400\r
2019-07-08,361400\r
2019-07-10,362000\r
2019-07-13,362200\r
2019-07-15,359700\r
2019-07-20,359700\r
2019-07-23,363600\r
2019-07-25,360000\r
2019-07-28,363600\r
2019-08-02,350400\r
2019-08-04,356800\r
2019-08-09,355400\r
2019-08-14,355000\r
2019-08-17,356100\r
2019-08-22,353700\r
2019-08-24,347400\r
2019-08-29,350200\r
2019-09-03,352100\r
2019-09-06,352100\r
2019-09-08,351700\r
2019-09-11,347200\r
2019-09-13,354500\r
2019-09-16,351800\r
2019-09-18,350400\r
2019-09-21,350400\r
2019-09-26,351200\r
2019-10-08,331800\r
2019-10-11,334800\r
2019-10-13,331000\r
2019-10-26,345500\r
2019-12-05,349700\r
2019-12-07,349700\r
2019-12-10,350100\r
2019-12-15,339500\r
2019-12-17,339500\r
2019-12-20,339500\r
2019-12-25,334900\r
2019-12-27,333700\r
2019-12-30,337800\r
2020-01-09,341700\r
2020-01-11,343800\r
2020-01-14,341300\r
2020-01-16,341300\r
2020-01-19,344500\r
2020-01-29,341300\r
2020-01-31,342500\r
2020-02-03,342500\r
2020-02-05,350600\r
2020-02-10,350600\r
2020-02-15,345300\r
2020-02-18,344400\r
2020-02-20,341400\r
2020-02-23,343300\r
2020-03-21,348300\r
2020-03-24,349500\r
2020-03-26,337700\r
2020-03-31,337700\r
2020-04-03,341300\r
2020-04-05,340700\r
2020-04-08,343900\r
2020-04-10,354200\r
2020-04-15,363900\r
2020-04-25,368400\r
2020-04-30,366700\r
2020-05-05,357000\r
2020-05-08,357000\r
2020-05-18,361800\r
2020-05-20,355800\r
2020-05-25,358700\r
2020-05-28,362300\r
2020-05-30,360500\r
2020-06-12,367600\r
2020-06-14,361100\r
2020-06-24,343300\r
2020-07-04,343300\r
2020-07-07,372000\r
2020-07-09,358200\r
2020-07-19,359200\r
2020-07-22,361100\r
2020-07-24,353800\r
2020-07-27,350000\r
2020-07-29,350000\r
2020-08-03,350000\r
2020-08-06,336100\r
2020-08-08,317000\r
2020-08-18,310100\r
2020-08-21,310100\r
2020-08-23,318400\r
2020-09-02,276400\r
2020-09-05,269400\r
2020-09-07,269400\r
2020-09-10,264300\r
2020-09-12,267600\r
2020-09-17,268500\r
2020-10-17,298200\r
2020-10-30,317000\r
2020-11-09,310700\r
2020-11-11,310700\r
2020-11-14,320100\r
2020-11-21,311800\r
2020-11-26,304700\r
2020-11-29,305300\r
2020-12-26,335800\r
2021-01-03,351600\r
2021-01-08,351600\r
2021-01-10,351600\r
2021-01-18,348800\r
2021-02-19,343400\r
2021-02-24,355000\r
2021-02-27,349400\r
2021-03-01,351800\r
2021-03-04,355100\r
2021-03-09,348700\r
2021-03-14,353300\r
2021-03-24,340300\r
2021-03-29,352200\r
2021-03-31,342900\r
2021-04-03,344300\r
2021-04-05,344500\r
2021-04-08,343000\r
2021-04-15,348400\r
2021-04-20,355600\r
2021-04-23,357000\r
2021-05-03,348400\r
2021-05-08,342500\r
2021-05-28,357800\r
2021-05-30,357800\r
2021-06-07,359700\r
2021-06-14,357800\r
2021-06-22,362500\r
2021-07-02,358100\r
2021-07-09,358600\r
2021-07-22,357200\r
2021-08-11,351600\r
2021-08-23,340400\r
2021-08-26,341800\r
2021-08-28,341800\r
2021-08-31,335800\r
2021-09-05,326300\r
2021-09-12,315400\r
2021-09-17,309200\r
2021-09-22,309200\r
2021-09-27,290400\r
2021-09-30,291600\r
2021-10-07,290600\r
2021-10-12,300600\r
2021-10-15,294600\r
2021-10-17,296800\r
2021-10-20,296400\r
2021-10-27,285800\r
2021-11-09,294600\r
2021-11-11,299100\r
2021-11-19,294200\r
2021-12-14,316700\r
2021-12-16,316700\r
2021-12-19,325800\r
2021-12-21,325800\r
2022-01-13,328200\r
2022-01-15,336100\r
2022-01-23,333700\r
2022-01-25,335800\r
2022-02-09,337300\r
2022-03-09,338100\r
2022-03-19,338100\r
2022-03-21,350900\r
2022-03-24,350900\r
2022-03-26,350900\r
2022-04-05,347500\r
2022-04-10,347500\r
2022-05-08,348000\r
2022-05-10,376700\r
2022-05-15,376700\r
2022-05-28,350200\r
2022-05-30,350200\r
2022-06-17,355200\r
2022-06-19,355600\r
2022-06-22,355600\r
2022-06-24,355600\r
2022-07-02,356100\r
2022-07-04,356100\r
2022-07-07,356500\r
2022-07-12,359100\r
2022-07-14,361500\r
2022-07-17,360100\r
2022-07-24,356600\r
2022-07-27,359500\r
2022-08-01,342600\r
2022-08-03,342600\r
2022-08-06,314100\r
2022-08-08,314100\r
2022-08-11,316100\r
2022-09-05,203400\r
2022-09-10,174000\r
2022-09-12,174000\r
2022-09-15,156800\r
2022-09-20,152900\r
2022-09-22,152200\r
2022-10-02,156100\r
2022-10-05,136100\r
2022-10-07,140300\r
2022-10-12,140300\r
2022-10-15,137300\r
2022-10-17,137300\r
2022-10-22,140400\r
2022-11-06,124100\r
2022-11-11,123800\r
2022-11-16,129400\r
2022-12-04,150600\r
2022-12-11,154800\r
2022-12-14,154800\r
2022-12-21,142300\r
2023-01-10,190900\r
2023-01-18,242800\r
2023-01-20,242800\r
2023-02-02,314600\r
2023-02-04,321800\r
2023-02-09,316900\r
2023-02-12,319700\r
2023-02-14,315200\r
2023-02-17,314200\r
2023-02-19,314200\r
2023-02-24,310200\r
2023-03-01,315500\r
2023-04-05,341800\r
2023-04-08,341800\r
2023-04-10,341800\r
2023-04-18,302000\r
2023-04-20,301600\r
2023-05-05,330300\r
2023-05-10,330300\r
2023-05-28,327500\r
2023-05-30,327600\r
2023-06-02,346600\r
2023-06-04,346600\r
2023-06-09,346600\r
2023-06-24,364400\r
2023-06-27,366800\r
2023-07-07,357400\r
2023-07-09,357500\r
2023-07-14,356400\r
2023-07-17,359400\r
2023-07-22,358700\r
2023-07-27,354300\r
2023-07-29,350100\r
2023-08-08,354100\r
2023-08-11,351600\r
2023-08-16,346600\r
2023-08-18,346600\r
2023-08-21,343000\r
2023-08-23,342600\r
2023-08-28,347000\r
2023-08-31,339900\r
2023-09-05,333700\r
2023-09-07,333700\r
2023-09-10,336600\r
2023-09-15,331900\r
2023-09-20,318900\r
2023-09-25,320900\r
2023-09-27,320900\r
2023-09-30,323900\r
2023-10-02,322700\r
2023-10-05,321300\r
2023-10-07,321100\r
2023-10-10,316800\r
2023-10-12,315500\r
2023-10-15,315500\r
2023-11-19,331300\r
2023-11-26,333000\r
2023-12-06,324100\r
`;export{r as default};
