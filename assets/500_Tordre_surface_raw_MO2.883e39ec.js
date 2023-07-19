const r=`date,value\r
2017-01-26,450000\r
2017-02-25,487900\r
2017-03-17,501600\r
2017-03-27,501600\r
2017-05-16,520000\r
2017-05-26,524500\r
2017-06-02,522300\r
2017-06-05,525200\r
2017-06-25,517300\r
2017-07-02,519000\r
2017-07-05,520900\r
2017-07-07,514700\r
2017-08-04,504000\r
2017-08-06,504000\r
2017-08-07,504000\r
2017-08-11,504000\r
2017-08-12,504000\r
2017-08-14,506500\r
2017-08-17,498800\r
2017-08-19,498800\r
2017-08-21,498800\r
2017-08-22,498800\r
2017-08-24,498800\r
2017-08-29,442500\r
2017-09-03,442500\r
2017-09-05,442500\r
2017-09-08,442500\r
2017-10-08,423600\r
2017-10-10,423600\r
2017-10-11,423600\r
2017-10-13,435900\r
2017-10-15,438500\r
2017-10-16,438500\r
2017-10-18,417700\r
2017-10-20,432100\r
2017-10-23,432100\r
2017-10-25,407900\r
2017-10-26,407900\r
2017-10-28,412900\r
2017-10-30,409400\r
2017-10-31,409400\r
2017-11-02,409400\r
2017-11-07,410200\r
2017-11-14,397400\r
2017-11-15,397400\r
2017-11-17,397400\r
2017-11-22,397500\r
2017-11-24,397500\r
2017-11-25,397500\r
2017-11-27,407700\r
2017-11-30,407700\r
2017-12-07,402600\r
2018-03-17,521500\r
2018-03-19,521500\r
2018-03-22,521500\r
2018-04-21,539300\r
2018-04-23,539300\r
2018-04-24,539300\r
2018-04-26,540600\r
2018-05-06,521200\r
2018-05-11,549600\r
2018-05-19,547300\r
2018-05-21,547600\r
2018-06-20,572900\r
2018-06-22,572900\r
2018-06-23,572900\r
2018-06-25,583200\r
2018-06-28,583200\r
2018-07-02,584600\r
2018-07-03,584600\r
2018-07-07,565000\r
2018-07-08,565000\r
2018-07-10,572100\r
2018-07-12,515300\r
2018-07-15,569900\r
2018-07-18,569900\r
2018-07-22,539900\r
2018-07-23,539900\r
2018-07-25,541700\r
2018-07-27,534300\r
2018-07-30,534300\r
2018-08-01,534300\r
2018-08-02,534300\r
2018-08-04,535700\r
2018-08-06,523900\r
2018-08-11,523900\r
2018-08-12,523900\r
2018-08-19,540900\r
2018-08-21,540900\r
2018-08-22,540900\r
2018-08-26,540900\r
2018-08-27,540900\r
2018-09-03,510100\r
2018-09-05,510100\r
2018-09-08,535600\r
2018-09-10,535600\r
2018-09-11,535600\r
2018-09-16,525900\r
2018-09-18,525900\r
2018-09-23,495300\r
2018-09-25,495300\r
2018-09-26,495300\r
2018-09-28,522900\r
2018-09-30,522900\r
2018-10-03,494300\r
2018-10-05,523800\r
2018-10-06,523800\r
2018-11-12,443100\r
2018-11-15,443100\r
2018-11-17,465700\r
2018-11-22,438500\r
2018-11-24,461800\r
2018-11-27,461800\r
2018-11-29,433300\r
2019-01-11,459200\r
2019-01-16,485700\r
2019-01-19,485700\r
2019-01-23,485700\r
2019-01-26,485700\r
2019-01-28,482000\r
2019-02-15,532000\r
2019-02-17,532000\r
2019-02-18,532000\r
2019-02-20,537500\r
2019-02-22,537500\r
2019-02-23,537500\r
2019-02-25,533000\r
2019-02-27,533000\r
2019-03-07,544900\r
2019-03-12,540000\r
2019-03-22,523200\r
2019-03-24,523200\r
2019-03-25,523200\r
2019-03-27,532000\r
2019-03-29,532000\r
2019-03-30,532000\r
2019-04-01,532000\r
2019-04-08,526000\r
2019-04-09,526000\r
2019-05-01,522800\r
2019-05-06,522800\r
2019-05-11,522800\r
2019-05-13,522800\r
2019-05-14,522800\r
2019-05-16,522800\r
2019-05-31,515400\r
2019-06-02,515400\r
2019-06-08,515400\r
2019-06-12,515400\r
2019-06-13,515400\r
2019-07-05,557100\r
2019-07-08,557100\r
2019-07-10,552600\r
2019-07-12,552600\r
2019-07-13,552600\r
2019-07-15,548700\r
2019-07-17,548600\r
2019-07-22,553200\r
2019-07-23,553200\r
2019-07-25,530200\r
2019-07-28,541400\r
2019-08-02,515500\r
2019-08-04,515700\r
2019-08-09,484000\r
2019-08-14,470100\r
2019-08-16,470100\r
2019-08-17,470100\r
2019-08-21,477100\r
2019-08-22,477100\r
2019-08-24,453700\r
2019-08-26,457300\r
2019-08-29,455200\r
2019-08-31,440700\r
2019-09-03,438600\r
2019-09-06,438600\r
2019-09-08,427000\r
2019-09-11,415900\r
2019-09-13,420500\r
2019-09-15,421200\r
2019-09-16,421200\r
2019-09-20,422300\r
2019-09-21,422300\r
2019-10-08,395400\r
2019-10-11,395400\r
2019-10-13,414900\r
2019-10-15,414900\r
2019-10-25,404300\r
2020-01-11,474900\r
2020-01-14,474900\r
2020-01-16,470600\r
2020-01-19,470600\r
2020-01-28,445500\r
2020-02-05,460800\r
2020-02-07,460800\r
2020-02-08,460800\r
2020-02-15,468600\r
2020-02-18,468600\r
2020-02-20,467800\r
2020-02-22,487500\r
2020-04-05,517700\r
2020-04-08,517700\r
2020-04-10,551000\r
2020-04-12,551000\r
2020-04-15,534300\r
2020-04-25,547000\r
2020-04-28,538700\r
2020-05-20,559500\r
2020-05-22,555300\r
2020-05-25,558900\r
2020-05-27,558900\r
2020-05-28,558900\r
2020-05-30,551900\r
2020-06-12,550600\r
2020-06-14,551200\r
2020-06-24,528100\r
2020-06-26,528100\r
2020-07-19,555700\r
2020-07-21,555700\r
2020-07-22,555700\r
2020-07-24,533000\r
2020-07-27,533000\r
2020-07-29,527900\r
2020-07-31,520200\r
2020-08-03,520700\r
2020-08-05,520700\r
2020-08-06,520700\r
2020-08-08,505000\r
2020-08-10,508000\r
2020-08-15,481500\r
2020-08-20,477100\r
2020-08-21,477100\r
2020-08-23,477500\r
2020-09-02,417800\r
2020-09-04,417800\r
2020-09-05,417800\r
2020-09-07,429000\r
2020-09-10,430900\r
2020-09-12,401400\r
2020-09-14,401400\r
2020-09-17,406800\r
2020-09-19,400400\r
2020-09-29,395400\r
2020-09-30,395400\r
2020-10-17,380100\r
2020-10-24,380100\r
2020-10-30,380100\r
2020-11-01,380100\r
2021-02-14,535000\r
2021-02-17,535000\r
2021-02-19,535600\r
2021-02-24,537600\r
2021-02-27,536300\r
2021-03-01,531100\r
2021-03-04,540900\r
2021-03-09,524200\r
2021-03-31,534600\r
2021-04-02,532100\r
2021-04-03,532100\r
2021-04-05,532100\r
2021-04-07,532100\r
2021-04-15,549300\r
2021-04-17,549300\r
2021-04-20,556100\r
2021-04-22,556100\r
2021-04-23,556100\r
2021-05-30,542700\r
2021-06-01,542700\r
2021-06-09,560000\r
2021-06-11,557000\r
2021-06-14,568500\r
2021-06-16,568500\r
2021-06-19,568500\r
2021-06-21,564800\r
2021-08-23,503700\r
2021-08-25,503700\r
2021-08-26,503700\r
2021-08-28,503700\r
2021-08-30,503700\r
2021-08-31,503700\r
2021-09-17,458900\r
2021-09-22,470500\r
2021-09-24,470500\r
2021-09-25,470500\r
2021-09-27,470500\r
2021-09-30,464600\r
2021-10-27,459300\r
2022-01-15,532500\r
2022-01-22,532500\r
2022-01-23,532500\r
2022-01-25,536600\r
2022-01-27,526400\r
2022-02-01,526400\r
2022-02-09,537100\r
2022-03-26,537900\r
2022-04-05,562500\r
2022-04-10,567800\r
2022-04-15,567800\r
2022-04-17,554000\r
2022-04-30,552600\r
2022-05-07,552600\r
2022-05-08,552600\r
2022-05-10,552600\r
2022-06-29,515000\r
2022-07-01,526200\r
2022-07-02,526200\r
2022-07-04,526200\r
2022-07-06,526200\r
2022-07-07,526200\r
2022-07-14,496800\r
2022-07-16,496800\r
2022-07-17,496800\r
2022-07-19,496800\r
2022-07-21,496800\r
2022-07-22,496800\r
2022-07-24,496800\r
2022-08-08,418100\r
2022-08-10,418100\r
2022-08-11,418100\r
2022-08-13,418100\r
2022-08-15,418100\r
2022-08-18,418100\r
2022-09-12,341500\r
2022-09-15,341500\r
2022-09-19,341500\r
2022-09-20,341500\r
2022-09-22,341800\r
2022-10-02,331200\r
2022-10-07,350500\r
2022-10-09,350500\r
2022-10-12,350700\r
2022-10-15,350700\r
2022-10-22,339400\r
2022-10-24,339400\r
2022-11-01,339400\r
2022-11-11,334500\r
2022-11-13,334500\r
2022-11-16,348800\r
2022-11-24,342900\r
2023-01-10,342700\r
2023-01-12,342700\r
2023-01-18,342700\r
2023-02-04,377700\r
2023-02-06,377700\r
2023-02-09,386200\r
2023-02-11,386200\r
2023-02-12,386200\r
2023-02-14,379700\r
2023-02-16,386000\r
2023-02-17,386000\r
2023-02-19,371400\r
2023-02-21,382900\r
2023-02-24,382900\r
2023-02-26,364900\r
2023-03-01,364900\r
2023-03-16,407400\r
2023-04-05,445100\r
2023-04-07,445100\r
2023-04-08,445100\r
2023-04-15,445600\r
2023-05-30,497500\r
2023-06-02,497500\r
2023-06-04,501900\r
2023-06-07,501900\r
2023-06-24,553000\r
`;export{r as default};