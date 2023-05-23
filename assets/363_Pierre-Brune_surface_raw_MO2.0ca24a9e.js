const r=`date,value\r
2017-02-18,272000\r
2017-02-21,252800\r
2017-02-28,267800\r
2017-04-09,379400\r
2017-04-12,379400\r
2017-04-19,381500\r
2017-04-22,343900\r
2017-04-29,378300\r
2017-06-18,416400\r
2017-06-21,416400\r
2017-06-28,416400\r
2017-08-02,297900\r
2017-08-05,297900\r
2017-08-07,384900\r
2017-08-27,285900\r
2017-10-11,195100\r
2017-10-14,195100\r
2017-10-16,202600\r
2017-10-19,202600\r
2017-10-21,238200\r
2017-10-24,248800\r
2017-10-26,248800\r
2018-03-20,374600\r
2018-03-25,374600\r
2018-03-30,364200\r
2018-04-19,433800\r
2018-04-22,433800\r
2018-04-24,436200\r
2018-04-27,436200\r
2018-05-04,438000\r
2018-05-07,437800\r
2018-05-19,450800\r
2018-05-22,450800\r
2018-05-24,453700\r
2018-06-23,428800\r
2018-06-26,428100\r
2018-06-28,489100\r
2018-07-01,468200\r
2018-07-03,462400\r
2018-07-08,440100\r
2018-07-11,423800\r
2018-07-13,435800\r
2018-07-16,430800\r
2018-07-18,410600\r
2018-07-21,420400\r
2018-07-23,407500\r
2018-07-26,418600\r
2018-08-02,413200\r
2018-08-05,397100\r
2018-08-07,397100\r
2018-08-10,397100\r
2018-08-12,397100\r
2018-08-22,249500\r
2018-08-30,249500\r
2018-09-01,263800\r
2018-09-11,304800\r
2018-09-14,297200\r
2018-09-16,297200\r
2018-09-26,291700\r
2018-09-29,291700\r
2018-10-01,291700\r
2018-10-04,291700\r
2018-10-21,237600\r
2018-10-24,237600\r
2019-02-03,171000\r
2019-02-13,100400\r
2019-02-16,100400\r
2019-02-18,100400\r
2019-02-21,194500\r
2019-02-23,115600\r
2019-02-26,115600\r
2019-03-03,221000\r
2019-03-08,105400\r
2019-03-10,105400\r
2019-03-30,254000\r
2019-04-04,254000\r
2019-04-07,244700\r
2019-04-09,262900\r
2019-04-12,262100\r
2019-04-14,265400\r
2019-04-19,153800\r
2019-04-22,153800\r
2019-04-27,78400\r
2019-04-29,103400\r
2019-05-14,295600\r
2019-05-19,285000\r
2019-05-24,285000\r
2019-05-27,285000\r
2019-05-29,304400\r
2019-07-03,390000\r
2019-07-06,363100\r
2019-07-08,365000\r
2019-07-13,300700\r
2019-07-16,300700\r
2019-07-23,281300\r
2019-07-28,317600\r
2019-07-31,319700\r
2019-08-02,310800\r
2019-08-05,310800\r
2019-08-22,179900\r
2019-08-25,179900\r
2019-08-27,179900\r
2019-08-30,179900\r
2019-09-01,179900\r
2019-09-04,179900\r
2019-09-06,179900\r
2019-09-11,181300\r
2019-09-16,151800\r
2019-09-19,151800\r
2019-09-21,151800\r
2019-09-24,185600\r
2019-10-01,156000\r
2020-03-19,12100\r
2020-03-24,126900\r
2020-03-27,126900\r
2020-03-29,126900\r
2020-04-01,126900\r
2020-04-03,126900\r
2020-04-08,126600\r
2020-05-18,278600\r
2020-05-21,278600\r
2020-05-23,278600\r
2020-05-26,278600\r
2020-05-28,325500\r
2020-05-31,325500\r
2020-06-02,301200\r
2020-06-05,349900\r
2020-06-07,349900\r
2020-07-12,293000\r
2020-07-15,293000\r
2020-07-17,257600\r
2020-07-20,257600\r
2020-07-22,299400\r
2020-07-27,290300\r
2020-07-30,269400\r
2020-08-01,269400\r
2020-08-04,390200\r
2020-08-06,315400\r
2020-08-09,338900\r
2020-08-11,292100\r
2020-08-14,314600\r
2020-09-10,179800\r
2020-09-13,179800\r
2020-09-15,179800\r
2020-09-20,179100\r
2020-09-25,179100\r
2020-11-04,140500\r
2020-11-09,140500\r
2020-11-12,140500\r
2020-11-14,170700\r
2020-11-19,164000\r
2021-02-27,351400\r
2021-03-02,351400\r
2021-03-04,351400\r
2021-03-09,351700\r
2021-03-12,301100\r
2021-03-14,301100\r
2021-03-17,301100\r
2021-03-19,302200\r
2021-03-24,361400\r
2021-03-27,361400\r
2021-03-29,414400\r
2021-04-01,416100\r
2021-04-03,393500\r
2021-04-06,427500\r
2021-04-08,415400\r
2021-04-11,371700\r
2021-04-13,381800\r
2021-04-23,377900\r
2021-04-28,494200\r
2021-05-03,383800\r
2021-05-08,444500\r
2021-05-11,366000\r
2021-05-13,366000\r
2021-06-07,437300\r
2021-07-17,376400\r
2021-07-20,376400\r
2021-07-22,376400\r
2021-07-25,376400\r
2021-08-11,515000\r
2021-08-14,515000\r
2021-08-26,361300\r
2021-08-29,361300\r
2021-08-31,361300\r
2021-09-03,361300\r
2021-09-05,361300\r
2021-09-30,173400\r
2021-10-03,169100\r
2021-10-08,169100\r
2021-10-10,170200\r
2021-11-09,228000\r
2021-11-17,207400\r
2021-11-19,263300\r
2022-02-27,278900\r
2022-03-07,278900\r
2022-03-09,318300\r
2022-03-12,311400\r
2022-03-14,311400\r
2022-03-19,334500\r
2022-03-24,306800\r
2022-03-27,306800\r
2022-04-01,239400\r
2022-05-08,422300\r
2022-05-11,422300\r
2022-05-13,422300\r
2022-05-28,353200\r
2022-05-31,353200\r
2022-06-02,471400\r
2022-06-05,471400\r
2022-06-07,471400\r
2022-06-10,471400\r
2022-06-12,471400\r
2022-06-17,500400\r
2022-06-27,500400\r
2022-07-02,512200\r
2022-07-05,512200\r
2022-07-07,505000\r
2022-07-10,512300\r
2022-07-12,435300\r
2022-07-15,436000\r
2022-07-17,436000\r
2022-07-20,426100\r
2022-08-06,351600\r
2022-08-09,351600\r
2022-08-11,391400\r
2022-09-20,269400\r
2022-09-30,269400\r
2023-02-27,245300\r
2023-03-02,245300\r
2023-03-04,289100\r
`;export{r as default};