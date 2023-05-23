const r=`date,value\r
2017-02-19,373700\r
2017-02-22,373700\r
2017-02-26,373700\r
2017-03-01,373700\r
2017-03-11,393900\r
2017-03-14,393900\r
2017-04-10,458300\r
2017-04-17,458300\r
2017-04-20,475000\r
2017-04-23,474500\r
2017-06-19,444800\r
2017-06-22,444800\r
2017-06-26,444800\r
2017-06-29,445800\r
2017-07-04,414300\r
2017-07-06,414300\r
2017-07-07,414300\r
2017-07-12,409300\r
2017-07-14,411200\r
2017-07-17,377200\r
2017-07-19,377200\r
2017-07-21,377200\r
2017-07-22,377200\r
2017-07-24,377200\r
2017-08-08,344200\r
2017-08-11,340700\r
2017-08-13,340700\r
2017-08-15,340700\r
2017-08-18,340800\r
2017-08-20,282400\r
2017-08-21,282400\r
2017-08-23,282500\r
2017-08-25,282500\r
2017-08-26,282500\r
2017-09-02,246700\r
2017-09-04,246400\r
2017-09-05,246400\r
2017-09-07,251800\r
2017-09-10,251800\r
2017-09-12,251800\r
2017-09-17,208700\r
2017-09-20,198400\r
2017-09-22,198400\r
2017-09-27,209100\r
2017-10-04,205700\r
2017-10-05,205700\r
2017-10-07,206600\r
2017-10-09,189900\r
2017-10-10,189900\r
2017-10-12,194900\r
2017-10-14,194900\r
2017-10-15,194900\r
2017-10-17,189900\r
2017-10-19,197500\r
2017-10-20,197500\r
2017-10-22,184300\r
2017-10-24,197100\r
2017-10-25,197100\r
2017-10-27,183400\r
2017-10-29,191400\r
2017-10-30,191400\r
2017-11-01,187600\r
2017-11-03,197700\r
2017-11-06,197700\r
2018-02-14,294200\r
2018-02-16,288700\r
2018-02-19,288700\r
2018-02-21,288700\r
2018-02-24,288700\r
2018-04-05,456700\r
2018-04-10,474600\r
2018-04-15,474600\r
2018-04-20,469600\r
2018-04-22,458300\r
2018-04-25,503400\r
2018-04-27,503400\r
2018-04-28,503400\r
2018-04-30,469600\r
2018-05-03,495600\r
2018-05-05,495600\r
2018-05-25,500200\r
2018-06-01,496000\r
2018-06-02,496000\r
2018-06-09,499100\r
2018-06-14,501300\r
2018-06-16,501300\r
2018-06-17,501300\r
2018-06-19,493200\r
2018-06-21,490300\r
2018-06-22,490300\r
2018-06-24,490300\r
2018-06-26,478700\r
2018-06-27,478700\r
2018-06-29,478700\r
2018-07-09,460200\r
2018-07-11,460200\r
2018-07-12,460200\r
2018-07-14,467500\r
2018-07-17,467500\r
2018-07-19,458700\r
2018-07-21,445800\r
2018-07-22,445800\r
2018-07-24,451700\r
2018-07-26,454200\r
2018-07-27,454200\r
2018-07-29,454300\r
2018-07-31,447400\r
2018-08-01,447400\r
2018-08-03,448200\r
2018-08-28,352900\r
2018-08-30,352900\r
2018-08-31,352900\r
2018-09-02,352900\r
2018-09-04,352900\r
2018-09-05,352900\r
2018-09-07,352900\r
2018-09-22,293300\r
2018-09-24,292800\r
2018-09-25,292800\r
2018-09-27,317000\r
2018-09-29,317000\r
2018-10-02,277000\r
2018-10-04,298000\r
2018-10-05,298000\r
2018-10-09,273100\r
2018-10-12,273100\r
2018-10-22,368300\r
2018-10-24,368300\r
2018-10-25,368300\r
2018-10-30,368300\r
2019-02-14,402800\r
2019-02-16,403100\r
2019-02-17,403100\r
2019-02-19,403100\r
2019-02-21,399000\r
2019-02-22,399000\r
2019-02-27,399000\r
2019-03-01,428200\r
2019-03-03,391900\r
2019-03-08,391900\r
2019-03-11,438900\r
2019-03-13,438900\r
2019-03-16,423300\r
2019-03-18,439300\r
2019-03-19,439300\r
2019-03-21,424500\r
2019-03-23,424500\r
2019-03-24,424500\r
2019-03-26,429300\r
2019-03-28,427000\r
2019-03-29,427000\r
2019-03-31,422100\r
2019-04-02,420800\r
2019-04-05,420700\r
2019-04-07,423900\r
2019-04-08,423900\r
2019-04-13,428300\r
2019-04-15,396300\r
2019-04-17,406200\r
2019-04-18,406200\r
2019-04-20,406200\r
2019-04-22,381600\r
2019-04-27,381600\r
2019-04-30,451200\r
2019-05-02,449000\r
2019-05-05,449000\r
2019-05-07,449000\r
2019-05-10,450400\r
2019-05-12,450400\r
2019-05-13,450400\r
2019-05-15,452400\r
2019-05-30,461200\r
2019-06-01,460600\r
2019-06-02,460600\r
2019-06-04,502700\r
2019-06-06,502700\r
2019-06-07,502700\r
2019-06-11,502700\r
2019-06-12,502700\r
2019-06-19,420200\r
2019-06-22,420200\r
2019-06-24,420200\r
2019-06-26,420200\r
2019-06-27,420200\r
2019-06-29,450000\r
2019-07-01,450000\r
2019-07-02,450000\r
2019-07-04,450000\r
2019-07-06,372200\r
2019-07-07,372200\r
2019-07-11,372200\r
2019-07-12,372200\r
2019-07-14,385800\r
2019-07-24,371400\r
2019-07-26,371400\r
2019-07-29,373500\r
2019-07-31,374600\r
2019-08-03,354200\r
2019-08-05,348900\r
2019-08-06,348900\r
2019-08-08,348900\r
2019-08-10,367600\r
2019-08-11,367600\r
2019-08-15,317300\r
2019-08-16,317300\r
2019-08-18,337900\r
2019-08-23,312300\r
2019-08-25,312300\r
2019-08-26,312300\r
2019-08-30,312300\r
2019-08-31,312300\r
2019-09-02,303900\r
2019-09-04,275300\r
2019-09-05,275300\r
2019-09-07,275300\r
2019-09-12,230700\r
2019-09-14,230700\r
2019-09-15,230700\r
2019-09-17,239100\r
2019-09-19,240000\r
2019-09-25,240000\r
2019-09-27,223700\r
2019-09-29,229300\r
2019-09-30,229300\r
2019-10-02,220500\r
2019-10-05,224900\r
2019-10-07,202700\r
2019-10-10,202700\r
2019-10-19,197300\r
2019-10-27,218500\r
2019-10-29,218500\r
2019-10-30,218500\r
2019-11-06,223400\r
2019-11-08,223400\r
2019-11-09,223400\r
2019-11-13,196200\r
2019-11-16,226600\r
2020-02-14,395000\r
2020-02-19,395000\r
2020-02-22,347000\r
2020-02-24,423000\r
2020-02-26,423000\r
2020-03-03,418000\r
2020-03-07,418000\r
2020-03-08,418000\r
2020-03-10,418000\r
2020-04-04,412800\r
2020-04-06,412800\r
2020-04-07,412800\r
2020-04-09,441600\r
2020-04-11,441600\r
2020-04-14,438700\r
2020-04-24,454700\r
2020-04-26,433000\r
2020-04-29,441300\r
2020-05-04,462700\r
2020-05-06,462700\r
2020-05-09,462700\r
2020-05-14,475200\r
2020-05-19,464800\r
2020-05-24,487400\r
2020-05-26,487400\r
2020-05-31,487400\r
2020-06-01,487400\r
2020-06-03,497400\r
2020-06-05,497400\r
2020-06-06,497400\r
2020-06-08,497400\r
2020-06-10,386500\r
2020-06-15,386500\r
2020-06-23,504000\r
2020-06-25,504000\r
2020-06-26,504000\r
2020-06-28,513800\r
2020-06-30,513800\r
2020-07-01,513800\r
2020-07-03,478400\r
2020-07-05,478400\r
2020-07-06,478400\r
2020-07-08,483500\r
2020-07-10,466100\r
2020-07-11,466100\r
2020-07-15,478400\r
2020-07-16,478400\r
2020-07-18,478400\r
2020-07-20,457800\r
2020-07-21,457800\r
2020-07-23,475600\r
2020-08-02,435300\r
2020-08-04,435300\r
2020-08-05,435300\r
2020-08-07,400700\r
2020-08-09,400700\r
2020-08-10,400700\r
2020-08-12,400700\r
2020-08-14,400700\r
2020-08-15,400700\r
2020-08-17,397300\r
2020-08-19,369400\r
2020-08-20,369400\r
2020-08-22,368000\r
2020-08-24,312100\r
2020-08-25,312100\r
2020-08-27,337100\r
2020-09-01,337100\r
2020-09-03,338700\r
2020-09-04,338700\r
2020-09-06,293700\r
2020-09-08,313700\r
2020-09-09,313700\r
2020-09-13,258400\r
2020-09-14,258400\r
2020-09-16,264400\r
2020-09-18,264400\r
2020-09-21,264400\r
2020-09-26,273300\r
2020-09-28,273300\r
2020-09-29,273300\r
2020-10-01,273300\r
2020-10-03,270300\r
2020-10-08,270300\r
2020-10-11,270300\r
2020-11-05,267200\r
2020-11-07,267200\r
2020-11-10,267200\r
2020-11-12,267200\r
2020-11-17,267200\r
2020-11-18,267200\r
2020-11-20,285600\r
2021-02-23,408500\r
2021-02-25,408500\r
2021-02-26,408500\r
2021-02-28,423000\r
2021-03-02,423000\r
2021-03-05,423000\r
2021-03-07,406500\r
2021-03-08,406500\r
2021-03-10,421600\r
2021-03-12,418800\r
2021-03-13,418800\r
2021-03-15,440700\r
2021-03-17,440700\r
2021-03-20,440700\r
2021-03-22,424600\r
2021-03-23,424600\r
2021-03-25,454100\r
2021-03-27,453600\r
2021-03-28,453600\r
2021-03-30,467300\r
2021-04-01,467300\r
2021-04-02,467300\r
2021-04-06,440200\r
2021-04-09,440200\r
2021-05-04,477800\r
2021-05-06,477800\r
2021-05-07,477800\r
2021-05-09,494400\r
2021-05-11,494400\r
2021-05-12,494400\r
2021-05-14,494400\r
2021-05-19,492400\r
2021-05-21,473500\r
2021-05-26,473500\r
2021-05-27,473500\r
2021-06-13,471000\r
2021-06-15,465900\r
2021-06-16,465900\r
2021-06-18,465900\r
2021-07-13,432300\r
2021-07-15,404200\r
2021-07-16,404200\r
2021-07-18,415700\r
2021-07-20,415700\r
2021-07-21,415700\r
2021-07-23,403600\r
2021-07-25,413900\r
2021-07-28,390400\r
2021-07-30,396800\r
2021-08-02,379200\r
2021-08-05,380400\r
2021-08-09,355700\r
2021-08-10,355700\r
2021-08-12,355700\r
2021-08-17,304000\r
2021-08-19,304000\r
2021-08-20,304000\r
2021-08-22,316600\r
2021-08-27,295500\r
2021-08-29,306200\r
2021-08-30,306200\r
2021-09-01,285100\r
2021-09-06,263500\r
2021-09-11,246500\r
2021-09-13,245700\r
2021-09-18,234400\r
2021-09-19,234400\r
2021-09-21,234400\r
2021-10-06,214600\r
2021-10-11,221900\r
2021-10-13,222800\r
2021-10-14,222800\r
2021-10-16,208900\r
2021-10-18,216300\r
2021-10-23,198400\r
2021-10-24,198400\r
2021-10-26,198400\r
2022-02-08,364600\r
2022-02-10,347700\r
2022-02-11,347700\r
2022-02-13,347700\r
2022-02-15,347700\r
2022-02-18,375900\r
2022-02-20,352200\r
2022-02-21,352200\r
2022-02-23,380300\r
2022-02-26,380300\r
2022-02-28,368700\r
2022-03-02,386400\r
2022-03-03,386400\r
2022-03-07,373600\r
2022-03-08,373600\r
2022-03-25,410500\r
2022-03-27,410500\r
2022-03-28,410500\r
2022-04-01,410500\r
2022-04-04,414300\r
2022-04-09,420400\r
2022-04-14,414500\r
2022-04-16,423200\r
2022-04-17,423200\r
2022-04-19,416500\r
2022-04-29,429100\r
2022-05-01,424800\r
2022-05-02,424800\r
2022-05-04,424800\r
2022-05-07,424800\r
2022-05-09,424800\r
2022-05-14,462100\r
2022-05-16,462100\r
2022-05-17,462100\r
2022-05-19,470700\r
2022-05-21,470700\r
2022-05-22,470700\r
2022-05-24,470700\r
2022-05-27,466200\r
2022-05-29,466200\r
2022-06-18,441000\r
2022-06-20,441000\r
2022-06-25,441000\r
2022-06-26,441000\r
2022-06-28,441000\r
2022-07-03,407000\r
2022-07-05,407000\r
2022-07-06,407000\r
2022-07-08,415200\r
2022-07-10,415200\r
2022-07-11,415200\r
2022-07-13,410800\r
2022-07-15,413400\r
2022-07-16,413400\r
2022-07-18,403400\r
2022-07-20,410700\r
2022-07-21,410700\r
2022-07-23,397200\r
2022-07-25,399900\r
2022-07-26,399900\r
2022-07-28,399900\r
2022-07-30,383300\r
2022-07-31,383300\r
2022-08-02,388500\r
2022-08-04,357200\r
2022-08-05,357200\r
2022-08-07,358300\r
2022-08-09,358300\r
2022-08-10,358300\r
2022-08-12,343300\r
2022-08-22,315100\r
2022-08-24,301500\r
2022-08-25,301500\r
2022-08-27,301500\r
2022-08-29,301500\r
2022-09-01,301500\r
2022-09-06,274600\r
2022-09-08,274600\r
2022-09-09,274600\r
2022-09-11,276300\r
2022-09-16,246300\r
2022-09-18,248000\r
2022-09-19,248000\r
2022-09-21,248000\r
2022-09-26,233200\r
2022-09-28,225800\r
2022-10-01,251800\r
2022-10-03,251800\r
2022-10-04,251800\r
2022-10-06,226300\r
2022-10-11,250600\r
2022-10-16,220100\r
2022-11-05,231200\r
2022-11-10,231200\r
2023-02-08,341300\r
2023-02-10,351800\r
2023-02-11,351800\r
2023-02-13,346200\r
2023-02-15,360900\r
2023-02-16,360900\r
2023-02-18,355500\r
2023-02-20,358400\r
2023-02-21,358400\r
2023-03-05,368200\r
2023-03-07,368200\r
2023-03-10,377800\r
2023-03-12,377800\r
2023-03-13,377800\r
2023-03-30,388300\r
2023-04-01,284800\r
2023-04-02,284800\r
2023-04-14,413100\r
2023-04-16,413100\r
2023-04-17,413100\r
2023-04-19,417300\r
2023-04-24,413500\r
2023-04-26,414400\r
2023-04-29,411900\r
2023-05-02,420800\r
`;export{r as default};
