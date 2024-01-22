const r=`date,value\r
2017-02-15,2200\r
2017-02-22,2600\r
2017-02-25,1400\r
2017-03-04,400\r
2017-03-07,1500\r
2017-03-14,165400\r
2017-03-17,170800\r
2017-04-03,50300\r
2017-04-06,87500\r
2017-04-16,165300\r
2017-04-23,179600\r
2017-05-16,243600\r
2017-05-23,248200\r
2017-05-26,248200\r
2017-06-02,270900\r
2017-06-05,266500\r
2017-06-12,265600\r
2017-06-15,247800\r
2017-06-22,262100\r
2017-06-25,284700\r
2017-07-02,300400\r
2017-07-05,294400\r
2017-07-07,294400\r
2017-07-12,297300\r
2017-07-17,294600\r
2017-07-22,301000\r
2017-07-27,308500\r
2017-07-30,310700\r
2017-08-04,306100\r
2017-08-11,284800\r
2017-08-14,285600\r
2017-08-16,269100\r
2017-08-19,269100\r
2017-08-21,269200\r
2017-08-24,227400\r
2017-08-26,196700\r
2017-08-29,196700\r
2017-09-05,178800\r
2017-09-08,172600\r
2017-09-10,172600\r
2017-09-13,175700\r
2017-09-20,222100\r
2017-09-23,212400\r
2017-09-28,214700\r
2017-10-03,218600\r
2017-10-05,219300\r
2017-10-08,218000\r
2017-10-10,223300\r
2017-10-13,228800\r
2017-10-15,226700\r
2017-10-18,230000\r
2017-10-20,228700\r
2017-10-23,228400\r
2017-10-25,238700\r
2017-10-28,245500\r
2017-10-30,244700\r
2017-11-07,251200\r
2018-02-15,1200\r
2018-02-22,1200\r
2018-02-25,1200\r
2018-03-02,1100\r
2018-03-07,1100\r
2018-03-09,1100\r
2018-03-14,3300\r
2018-03-19,2100\r
2018-03-22,5600\r
2018-03-24,5600\r
2018-03-27,3600\r
2018-03-29,3600\r
2018-04-01,1500\r
2018-04-21,205700\r
2018-04-26,205700\r
2018-05-11,317600\r
2018-05-13,317600\r
2018-05-21,317600\r
2018-06-17,332000\r
2018-06-22,332000\r
2018-06-25,333900\r
2018-06-27,330000\r
2018-07-02,320700\r
2018-07-07,321300\r
2018-07-10,321800\r
2018-07-12,321100\r
2018-07-17,321100\r
2018-07-25,309100\r
2018-07-27,314400\r
2018-07-30,314400\r
2018-08-01,305700\r
2018-08-06,312600\r
2018-08-11,309300\r
2018-08-16,310800\r
2018-08-19,310800\r
2018-08-21,308500\r
2018-08-24,308900\r
2018-08-26,308900\r
2018-08-29,310400\r
2018-08-31,310400\r
2018-09-03,311800\r
2018-09-05,311800\r
2018-09-08,304900\r
2018-09-10,304900\r
2018-09-13,294600\r
2018-09-18,294800\r
2018-09-20,285900\r
2018-09-23,288100\r
2018-09-25,280200\r
2018-09-28,273700\r
2018-09-30,261500\r
2018-10-03,258800\r
2018-10-05,255000\r
2018-10-10,253100\r
2018-10-13,255600\r
2018-10-23,286700\r
2018-10-25,292500\r
2018-11-04,278300\r
2019-02-15,15900\r
2019-02-17,21500\r
2019-02-20,16500\r
2019-02-22,17200\r
2019-02-25,15700\r
2019-02-27,19400\r
2019-03-02,16300\r
2019-03-04,21100\r
2019-03-07,18100\r
2019-03-12,66600\r
2019-03-14,141800\r
2019-03-17,137900\r
2019-03-22,139700\r
2019-03-24,139700\r
2019-03-27,139900\r
2019-03-29,117400\r
2019-04-01,110900\r
2019-04-13,134200\r
2019-04-28,265100\r
2019-05-01,266600\r
2019-05-06,249700\r
2019-05-13,263100\r
2019-05-16,270600\r
2019-05-23,287000\r
2019-05-28,287000\r
2019-05-31,311700\r
2019-06-02,317400\r
2019-06-12,316500\r
2019-06-15,316500\r
2019-06-17,302900\r
2019-06-22,309000\r
2019-06-25,309000\r
2019-06-27,301400\r
2019-06-30,301400\r
2019-07-05,307600\r
2019-07-07,307600\r
2019-07-10,299300\r
2019-07-12,312900\r
2019-07-15,313500\r
2019-07-20,313500\r
2019-07-22,298400\r
2019-07-25,298800\r
2019-08-01,287700\r
2019-08-04,287700\r
2019-08-06,287700\r
2019-08-09,255000\r
2019-08-14,223000\r
2019-08-16,223000\r
2019-08-21,222900\r
2019-08-24,233800\r
2019-08-26,237100\r
2019-08-29,237100\r
2019-08-31,237100\r
2019-09-03,236900\r
2019-09-05,236900\r
2019-09-08,217600\r
2019-09-13,219000\r
2019-09-15,219000\r
2019-09-18,219000\r
2019-09-20,236700\r
2019-09-28,238200\r
2019-09-30,233200\r
2019-10-03,242000\r
2019-10-05,237400\r
2019-10-08,238300\r
2019-10-10,238300\r
2019-10-13,240100\r
2019-10-15,239200\r
2019-10-25,294400\r
2019-10-30,294200\r
2019-11-04,308700\r
2019-11-09,301800\r
2019-11-12,308800\r
2019-11-17,306800\r
2019-11-19,310600\r
2020-02-15,233100\r
2020-02-17,238000\r
2020-02-20,219500\r
2020-02-22,198500\r
2020-02-27,198500\r
2020-03-01,198500\r
2020-03-08,185200\r
2020-03-11,193500\r
2020-03-18,193000\r
2020-03-21,225500\r
2020-03-26,230100\r
2020-03-28,258200\r
2020-04-05,229800\r
2020-04-15,196600\r
2020-04-25,206600\r
2020-05-05,293900\r
2020-05-07,295300\r
2020-05-17,287800\r
2020-05-20,286300\r
2020-05-22,283400\r
2020-05-25,277900\r
2020-05-27,287400\r
2020-05-30,287400\r
2020-06-21,323000\r
2020-06-24,325700\r
2020-06-26,321200\r
2020-07-01,323000\r
2020-07-04,318900\r
2020-07-06,318900\r
2020-07-09,320500\r
2020-07-11,316400\r
2020-07-14,321100\r
2020-07-16,318000\r
2020-07-19,318100\r
2020-07-21,323600\r
2020-07-24,323600\r
2020-07-26,322300\r
2020-07-31,323800\r
2020-08-03,323200\r
2020-08-05,319400\r
2020-08-08,319600\r
2020-08-10,264300\r
2020-08-13,254300\r
2020-08-15,254300\r
2020-08-20,233900\r
2020-08-23,233300\r
2020-08-25,226400\r
2020-08-30,218300\r
2020-09-02,218300\r
2020-09-04,200900\r
2020-09-07,201000\r
2020-09-12,207800\r
2020-09-14,203500\r
2020-09-17,206100\r
2020-09-19,206100\r
2020-09-27,210600\r
2020-09-29,213900\r
2020-10-17,317800\r
2020-10-19,317800\r
2020-10-24,317800\r
2020-10-27,317800\r
2020-10-29,317800\r
2020-11-01,314700\r
2020-11-08,58800\r
2020-11-11,293300\r
2020-11-13,293300\r
2020-11-16,293300\r
2021-02-14,8300\r
2021-02-16,14300\r
2021-02-19,8500\r
2021-02-24,161800\r
2021-03-01,192700\r
2021-03-13,152000\r
2021-03-16,154500\r
2021-03-18,154500\r
2021-03-21,154500\r
2021-03-23,143200\r
2021-03-26,95500\r
2021-03-28,119900\r
2021-03-31,119000\r
2021-04-02,119000\r
2021-04-05,147400\r
2021-04-07,161500\r
2021-04-12,178500\r
2021-04-15,172300\r
2021-04-20,142600\r
2021-04-22,142600\r
2021-05-20,304900\r
2021-05-22,304900\r
2021-05-25,304900\r
2021-05-27,304900\r
2021-05-30,304900\r
2021-06-09,297200\r
2021-06-14,297400\r
2021-06-16,313200\r
2021-06-19,313200\r
2021-07-09,316200\r
2021-07-11,325200\r
2021-07-14,327200\r
2021-07-16,327200\r
2021-07-19,322900\r
2021-07-21,327300\r
2021-07-24,327900\r
2021-07-29,328100\r
2021-08-10,324800\r
2021-08-13,321700\r
2021-08-15,315300\r
2021-08-18,315400\r
2021-08-20,298300\r
2021-08-23,298400\r
2021-08-25,270700\r
2021-08-28,261800\r
2021-08-30,251000\r
2021-09-22,184100\r
2021-09-27,184100\r
2021-10-02,184100\r
2021-10-07,154900\r
2021-10-09,160500\r
2021-10-12,154700\r
2021-10-14,159500\r
2021-10-17,156700\r
2021-10-19,161500\r
2021-10-22,163200\r
2021-10-24,162500\r
2021-10-27,161000\r
2021-11-06,159700\r
2022-02-24,1800\r
2022-02-26,1800\r
2022-03-01,1300\r
2022-03-03,1500\r
2022-03-23,142200\r
2022-03-26,150800\r
2022-03-28,150800\r
2022-04-05,141900\r
2022-04-10,146300\r
2022-04-12,146100\r
2022-04-15,146100\r
2022-04-17,215800\r
2022-04-25,209600\r
2022-04-27,209600\r
2022-05-10,228700\r
2022-05-12,256100\r
2022-05-15,256100\r
2022-05-17,255600\r
2022-05-20,255600\r
2022-05-22,303500\r
2022-05-27,316900\r
2022-05-30,318300\r
2022-06-01,317300\r
2022-06-04,317300\r
2022-06-06,317300\r
2022-06-09,319300\r
2022-06-11,316300\r
2022-06-19,262400\r
2022-06-26,262400\r
2022-06-29,270000\r
2022-07-01,257100\r
2022-07-04,257100\r
2022-07-09,257100\r
2022-07-11,265600\r
2022-07-14,266500\r
2022-07-16,259700\r
2022-07-19,259900\r
2022-07-21,258500\r
2022-07-24,261800\r
2022-07-26,260800\r
2022-07-31,277500\r
2022-08-03,277700\r
2022-08-05,253500\r
2022-08-08,253800\r
2022-08-10,240300\r
2022-08-13,240300\r
2022-08-15,230000\r
2022-08-20,221600\r
2022-08-23,182500\r
2022-08-25,182600\r
2022-08-28,177600\r
2022-08-30,177600\r
2022-09-04,181400\r
2022-09-09,174800\r
2022-09-22,120300\r
2022-10-02,123300\r
2022-10-04,138900\r
2022-10-07,138900\r
2022-10-09,142100\r
2022-10-12,140900\r
2022-10-14,143800\r
2022-10-22,129000\r
2022-11-01,167500\r
2022-11-06,167300\r
2022-11-08,167300\r
2022-11-11,181200\r
2023-02-14,2000\r
2023-02-16,2000\r
2023-02-19,2800\r
2023-02-21,2800\r
2023-02-24,2600\r
2023-02-26,2900\r
2023-03-13,100000\r
2023-03-16,160700\r
2023-03-23,223000\r
2023-03-28,253400\r
2023-04-02,253400\r
2023-04-05,258500\r
2023-04-07,279300\r
2023-04-10,282300\r
2023-04-12,282300\r
2023-04-15,282300\r
2023-04-17,302200\r
2023-04-20,301000\r
2023-04-27,301000\r
2023-05-02,327500\r
2023-05-05,327500\r
2023-05-10,327500\r
2023-06-16,330900\r
2023-06-21,330900\r
2023-06-24,330900\r
2023-07-26,323000\r
2023-07-29,323000\r
2023-07-31,324400\r
2023-08-03,324400\r
2023-08-05,324400\r
2023-08-08,322300\r
2023-08-10,317100\r
2023-08-13,311400\r
2023-08-15,311500\r
2023-08-18,311500\r
2023-08-20,301400\r
2023-08-23,277400\r
2023-08-25,258700\r
2023-09-14,238600\r
2023-09-17,209700\r
2023-09-19,192600\r
2023-09-24,175000\r
2023-09-27,182800\r
2023-09-29,163700\r
2023-10-02,164600\r
2023-10-04,148400\r
2023-10-07,125900\r
2023-10-12,121700\r
2023-10-17,123000\r
`;export{r as default};