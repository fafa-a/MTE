const r=`date,value\r
2017-01-26,266800\r
2017-02-15,332900\r
2017-02-18,337900\r
2017-02-25,346300\r
2017-03-10,349500\r
2017-03-30,381400\r
2017-04-06,402400\r
2017-04-09,402600\r
2017-04-19,387000\r
2017-05-09,390400\r
2017-05-26,402600\r
2017-06-18,400600\r
2017-07-05,389500\r
2017-08-02,317200\r
2017-08-12,277000\r
2017-08-14,298400\r
2017-08-17,259900\r
2017-08-22,237900\r
2017-08-24,254500\r
2017-09-23,200700\r
2017-10-08,200800\r
2017-10-11,193300\r
2017-10-13,189900\r
2017-10-16,184700\r
2017-10-23,193400\r
2017-10-26,182100\r
2017-10-31,191400\r
2017-11-07,194700\r
2017-11-15,196800\r
2017-11-17,195900\r
2017-11-20,182900\r
2017-11-22,192200\r
2017-11-30,191400\r
2017-12-05,196600\r
2017-12-12,212000\r
2017-12-25,225300\r
2018-01-29,376600\r
2018-02-15,422700\r
2018-02-25,420600\r
2018-03-02,420200\r
2018-03-15,423200\r
2018-03-22,429400\r
2018-03-30,413000\r
2018-04-19,423900\r
2018-04-21,432400\r
2018-04-24,406300\r
2018-05-06,399500\r
2018-05-11,432700\r
2018-05-21,430200\r
2018-05-24,360900\r
2018-06-20,429900\r
2018-06-23,405100\r
2018-06-25,422800\r
2018-07-13,420400\r
2018-07-18,412300\r
2018-07-23,419300\r
2018-08-02,425700\r
2018-08-04,423800\r
2018-08-12,411300\r
2018-08-19,400800\r
2018-08-22,396700\r
2018-08-27,372500\r
2018-09-03,351600\r
2018-09-08,357900\r
2018-09-11,351900\r
2018-09-16,323200\r
2018-09-18,329600\r
2018-09-23,302400\r
2018-09-26,292900\r
2018-10-03,287500\r
2018-10-06,276600\r
2018-10-21,238500\r
2018-10-23,240700\r
2018-11-15,209300\r
2018-11-17,201900\r
2018-11-27,194100\r
2018-12-07,195200\r
2018-12-20,211800\r
2019-01-11,233300\r
2019-01-16,218200\r
2019-02-03,329000\r
2019-02-13,322600\r
2019-02-15,348800\r
2019-02-20,355600\r
2019-02-23,344800\r
2019-02-25,352100\r
2019-02-28,361800\r
2019-03-12,329000\r
2019-03-20,348100\r
2019-03-22,357500\r
2019-03-27,359100\r
2019-03-30,345000\r
2019-05-01,355200\r
2019-05-06,377600\r
2019-05-14,381300\r
2019-06-08,382700\r
2019-06-13,394200\r
2019-06-23,394300\r
2019-06-28,419100\r
2019-07-05,401600\r
2019-07-10,401400\r
2019-07-15,407400\r
2019-07-25,350900\r
2019-08-09,321200\r
2019-08-14,316600\r
2019-08-17,295500\r
2019-08-22,289300\r
2019-08-24,299600\r
2019-09-11,256500\r
2019-09-13,258100\r
2019-09-16,248700\r
2019-10-08,203800\r
2019-10-11,192800\r
2019-10-13,197900\r
2019-10-26,207100\r
2019-12-05,310100\r
2019-12-10,304300\r
2019-12-25,402000\r
2019-12-30,404600\r
2020-01-06,423300\r
2020-01-09,419700\r
2020-01-11,416500\r
2020-01-19,412000\r
2020-01-29,407400\r
2020-02-05,412700\r
2020-02-10,414500\r
2020-02-15,408800\r
2020-02-20,416400\r
2020-02-23,404900\r
2020-03-11,419300\r
2020-03-21,427800\r
2020-03-24,422800\r
2020-03-26,417100\r
2020-04-10,431600\r
2020-05-05,375100\r
2020-05-18,426000\r
2020-05-20,431300\r
2020-05-30,433500\r
2020-06-14,393500\r
2020-06-24,420800\r
2020-07-07,420200\r
2020-07-09,429800\r
2020-07-19,403100\r
2020-07-22,371400\r
2020-07-27,375600\r
2020-08-06,317100\r
2020-08-08,345000\r
2020-08-21,279500\r
2020-08-31,246400\r
2020-09-02,248300\r
2020-09-05,242400\r
2020-09-10,229200\r
2020-09-12,212500\r
2020-09-17,194600\r
2020-09-30,184600\r
2020-10-30,220800\r
2020-11-09,235900\r
2020-11-14,223300\r
2020-11-21,251300\r
2020-11-26,236900\r
2020-11-29,224400\r
2020-12-26,373800\r
2021-01-03,409900\r
2021-01-18,411300\r
2021-02-17,438700\r
2021-02-19,426000\r
2021-02-24,436600\r
2021-03-01,422200\r
2021-03-04,427600\r
2021-03-21,431300\r
2021-03-24,419400\r
2021-03-29,425300\r
2021-03-31,436600\r
2021-04-05,432500\r
2021-04-08,429000\r
2021-04-15,434200\r
2021-04-23,424000\r
2021-05-20,418100\r
2021-06-14,428500\r
2021-06-29,421900\r
2021-07-17,420300\r
2021-07-22,414600\r
2021-08-11,394700\r
2021-08-26,338900\r
2021-08-28,314600\r
2021-08-31,309000\r
2021-09-05,307100\r
2021-09-12,293900\r
2021-09-27,282200\r
2021-10-07,270900\r
2021-10-12,274300\r
2021-10-27,244800\r
2021-11-19,253200\r
2021-12-14,394500\r
2021-12-19,361900\r
2022-01-13,346500\r
2022-01-15,347400\r
2022-01-23,373400\r
2022-01-25,376200\r
2022-02-09,378200\r
2022-03-09,392000\r
2022-03-19,397300\r
2022-03-24,417800\r
2022-03-26,402700\r
2022-04-05,413600\r
2022-05-08,427200\r
2022-05-10,434100\r
2022-05-15,403900\r
2022-07-12,402000\r
2022-07-14,391700\r
2022-07-17,376000\r
2022-08-01,332500\r
2022-08-06,308400\r
2022-08-11,292700\r
2022-08-28,255200\r
2022-09-05,205600\r
2022-09-10,196500\r
2022-09-20,190800\r
2022-09-22,184900\r
2022-10-02,166400\r
2022-10-05,162700\r
2022-10-15,150600\r
2022-10-17,143000\r
2022-10-22,130200\r
2022-10-30,114300\r
2022-11-06,103500\r
2022-11-11,94300\r
2022-11-16,89800\r
2022-12-04,88600\r
2022-12-14,91800\r
2022-12-21,91800\r
2022-12-24,93700\r
2023-01-10,112000\r
2023-01-18,164800\r
2023-02-02,83100\r
2023-02-09,76800\r
2023-02-12,76300\r
2023-02-14,77400\r
2023-02-17,73600\r
2023-03-09,84400\r
2023-04-05,86100\r
2023-04-08,79600\r
2023-04-10,83900\r
2023-04-20,81700\r
2023-05-05,52500\r
2023-06-09,33400\r
2023-06-24,25000\r
2023-07-07,20800\r
2023-07-14,21200\r
2023-07-17,20900\r
2023-07-27,17700\r
2023-08-08,19300\r
2023-08-11,18100\r
2023-08-18,21600\r
2023-08-21,18100\r
2023-08-23,20500\r
2023-08-31,18000\r
2023-09-20,17400\r
2023-09-25,18100\r
2023-09-27,21900\r
2023-09-30,18300\r
2023-10-05,18800\r
2023-10-07,17700\r
2023-10-10,16600\r
2023-10-12,18500\r
2023-11-06,17600\r
`;export{r as default};
