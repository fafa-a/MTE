const r=`date,value\r
2017-02-15,455600\r
2017-02-22,455600\r
2017-02-25,465200\r
2017-03-17,462500\r
2017-03-27,462500\r
2017-04-06,482700\r
2017-05-26,482800\r
2017-06-02,482800\r
2017-06-05,485000\r
2017-06-12,358400\r
2017-07-05,464000\r
2017-07-07,464000\r
2017-08-14,398400\r
2017-08-17,398400\r
2017-08-19,398400\r
2017-08-21,398400\r
2017-08-22,398400\r
2017-08-24,398400\r
2017-08-29,372400\r
2017-09-03,372400\r
2017-10-08,340300\r
2017-10-10,340300\r
2017-10-11,340300\r
2017-10-13,352200\r
2017-10-15,352200\r
2017-10-16,352200\r
2017-10-18,340800\r
2017-10-20,353300\r
2017-10-23,353200\r
2017-10-25,339100\r
2017-10-26,339100\r
2017-10-28,347500\r
2017-10-30,346800\r
2017-10-31,346800\r
2017-11-02,346800\r
2017-11-07,347100\r
2017-11-14,341200\r
2017-11-15,341200\r
2017-11-17,347100\r
2017-11-19,346800\r
2017-11-22,351900\r
2017-11-24,351900\r
2017-11-25,351900\r
2017-11-27,347100\r
2017-11-30,352100\r
2017-12-07,344700\r
2018-02-10,438600\r
2018-02-12,438600\r
2018-02-15,465400\r
2018-02-25,489000\r
2018-02-27,487300\r
2018-03-02,508400\r
2018-03-07,508400\r
2018-03-09,505500\r
2018-04-21,552900\r
2018-04-23,552900\r
2018-04-24,552900\r
2018-04-26,552900\r
2018-05-06,515700\r
2018-05-11,548900\r
2018-05-19,548500\r
2018-05-21,548500\r
2018-06-20,548400\r
2018-06-22,548400\r
2018-06-23,548400\r
2018-06-25,552400\r
2018-06-28,552400\r
2018-07-02,548000\r
2018-07-03,548000\r
2018-07-07,541600\r
2018-07-08,541600\r
2018-07-10,544600\r
2018-07-15,535500\r
2018-07-18,535500\r
2018-07-22,526800\r
2018-07-23,526800\r
2018-07-25,528600\r
2018-07-27,525600\r
2018-07-30,543800\r
2018-08-01,543800\r
2018-08-02,543800\r
2018-08-04,525000\r
2018-08-06,543400\r
2018-08-11,506000\r
2018-08-12,506000\r
2018-08-19,523600\r
2018-08-21,523600\r
2018-08-22,523600\r
2018-08-26,523600\r
2018-08-27,523600\r
2018-09-03,476700\r
2018-09-05,476700\r
2018-09-08,504400\r
2018-09-10,504400\r
2018-09-11,504400\r
2018-09-16,498500\r
2018-09-18,498500\r
2018-09-23,481900\r
2018-09-25,481900\r
2018-09-26,481900\r
2018-09-28,496600\r
2018-09-30,496600\r
2018-10-03,480000\r
2018-10-05,495400\r
2018-10-06,495400\r
2018-11-12,464000\r
2018-11-15,464000\r
2018-11-17,471700\r
2018-11-22,471700\r
2018-11-24,456700\r
2018-11-27,468100\r
2018-11-29,466800\r
2018-12-05,466800\r
2019-01-11,441500\r
2019-01-16,467100\r
2019-01-19,467100\r
2019-01-23,467100\r
2019-01-26,463300\r
2019-01-28,492800\r
2019-02-15,504600\r
2019-02-17,504600\r
2019-02-18,504600\r
2019-02-20,510400\r
2019-02-22,510400\r
2019-02-23,510400\r
2019-02-25,505400\r
2019-02-27,505400\r
2019-03-07,521600\r
2019-03-12,520600\r
2019-03-22,519400\r
2019-03-24,509600\r
2019-03-25,509600\r
2019-03-27,525200\r
2019-03-29,525200\r
2019-03-30,525200\r
2019-04-01,525200\r
2019-04-08,520700\r
2019-04-09,520700\r
2019-05-01,517400\r
2019-05-06,522900\r
2019-05-11,522900\r
2019-05-13,522900\r
2019-05-14,522900\r
2019-05-16,530700\r
2019-05-23,544000\r
2019-05-31,544000\r
2019-07-05,527000\r
2019-07-08,527000\r
2019-07-10,528100\r
2019-07-12,528100\r
2019-07-13,528100\r
2019-07-15,525800\r
2019-07-17,525800\r
2019-07-22,539300\r
2019-07-23,539300\r
2019-07-25,517900\r
2019-07-28,531700\r
2019-08-02,500000\r
2019-08-04,500200\r
2019-08-09,478900\r
2019-08-14,468500\r
2019-08-16,468500\r
2019-08-17,468500\r
2019-08-21,472200\r
2019-08-22,472200\r
2019-08-24,457600\r
2019-08-26,460100\r
2019-08-29,459200\r
2019-08-31,456000\r
2019-09-03,451900\r
2019-09-06,451900\r
2019-09-08,451900\r
2019-09-13,442000\r
2019-09-15,442500\r
2019-09-16,442500\r
2019-09-20,438800\r
2019-09-21,438800\r
2019-10-08,414100\r
2019-10-11,414100\r
2019-10-13,436700\r
2019-10-15,436700\r
2019-10-25,429700\r
2019-11-27,420100\r
2019-12-05,420100\r
2019-12-10,420100\r
2019-12-27,503600\r
2019-12-29,503600\r
2019-12-30,503600\r
2020-01-06,503300\r
2020-01-09,503300\r
2020-01-11,507800\r
2020-01-14,507800\r
2020-01-16,500600\r
2020-01-19,500600\r
2020-01-28,492500\r
2020-02-05,493100\r
2020-02-07,493100\r
2020-02-08,493100\r
2020-02-15,493100\r
2020-02-18,493100\r
2020-02-20,494600\r
2020-02-22,485500\r
2020-03-21,525400\r
2020-03-24,525400\r
2020-03-26,526200\r
2020-03-28,525700\r
2020-03-29,525700\r
2020-03-31,525700\r
2020-04-03,525700\r
2020-04-05,527600\r
2020-04-08,512600\r
2020-04-10,534900\r
2020-04-12,541700\r
2020-04-15,523900\r
2020-04-25,524800\r
2020-04-28,525600\r
2020-05-05,523700\r
2020-05-07,523700\r
2020-05-08,523700\r
2020-05-17,522300\r
2020-05-18,522300\r
2020-05-20,548600\r
2020-05-22,541800\r
2020-05-25,548200\r
2020-05-27,548200\r
2020-05-28,548200\r
2020-05-30,539100\r
2020-06-12,537400\r
2020-06-14,538100\r
2020-07-19,481400\r
2020-07-21,481400\r
2020-07-22,481400\r
2020-07-24,485500\r
2020-07-27,485500\r
2020-07-29,484300\r
2020-07-31,484300\r
2020-08-03,470400\r
2020-08-05,457000\r
2020-08-06,457000\r
2020-08-08,454700\r
2020-08-10,441500\r
2020-08-15,443200\r
2020-08-20,423600\r
2020-08-21,423600\r
2020-08-23,423600\r
2020-09-02,383400\r
2020-09-04,383400\r
2020-09-05,383400\r
2020-09-07,383400\r
2020-09-10,383400\r
2020-09-12,383400\r
2020-09-14,383400\r
2020-09-17,386100\r
2020-10-17,376900\r
2020-10-24,376900\r
2020-10-30,376900\r
2020-11-01,383100\r
2020-11-11,363700\r
2020-11-14,363700\r
2020-11-16,363700\r
2020-11-18,360800\r
2020-11-19,360800\r
2020-11-21,378100\r
2020-11-23,378100\r
2020-11-26,371800\r
2020-11-29,378000\r
2021-02-19,523500\r
2021-02-24,546300\r
2021-02-27,546300\r
2021-03-01,523500\r
2021-03-04,546700\r
2021-03-09,517000\r
2021-03-31,542900\r
2021-04-02,542900\r
2021-04-03,542900\r
2021-04-05,549400\r
2021-04-07,552100\r
2021-04-15,551000\r
2021-04-17,548700\r
2021-04-20,552100\r
2021-04-22,552100\r
2021-04-23,552100\r
2021-05-20,528600\r
2021-05-27,528600\r
2021-05-28,528600\r
2021-05-30,528600\r
2021-06-09,544600\r
2021-06-11,544600\r
2021-06-14,549300\r
2021-06-16,549300\r
2021-06-19,549300\r
2021-06-21,542900\r
2021-07-29,513200\r
2021-09-12,456700\r
2021-09-17,456700\r
2021-09-22,458600\r
2021-09-24,443900\r
2021-09-25,443900\r
2021-09-27,443900\r
2021-09-30,443900\r
2021-10-12,459600\r
2021-10-14,459600\r
2021-10-17,457800\r
2021-10-19,463100\r
2021-10-20,463100\r
2021-10-24,425800\r
2021-10-27,434100\r
2021-12-16,466100\r
2021-12-18,466100\r
2021-12-19,466100\r
2021-12-21,478600\r
2021-12-23,485300\r
2022-01-15,513400\r
2022-01-22,513400\r
2022-01-23,513400\r
2022-01-25,516300\r
2022-01-27,500000\r
2022-02-01,500000\r
2022-02-09,511500\r
2022-03-21,527200\r
2022-03-23,527200\r
2022-03-24,527200\r
2022-03-26,527200\r
2022-04-05,524100\r
2022-04-10,524100\r
2022-04-15,529900\r
2022-07-14,453400\r
2022-07-16,453400\r
2022-07-17,453400\r
2022-07-19,453400\r
2022-07-21,453400\r
2022-07-22,453400\r
2022-07-24,455000\r
2022-07-26,434900\r
2022-07-27,434900\r
2022-07-31,434900\r
2022-08-01,434900\r
2022-08-03,434900\r
2022-08-13,341800\r
2022-08-15,341800\r
2022-08-18,341800\r
2022-08-20,341800\r
2022-08-23,341800\r
2022-08-28,322600\r
2022-08-30,322600\r
2022-09-04,322600\r
2022-09-05,322600\r
2022-09-22,299900\r
2022-10-02,301000\r
2022-11-06,292000\r
2022-11-08,292000\r
2022-11-11,292100\r
2022-11-13,292100\r
2022-11-16,289000\r
2022-11-24,288500\r
2022-12-21,301500\r
2022-12-28,301500\r
2023-02-04,358200\r
2023-02-06,358200\r
2023-02-09,372200\r
2023-02-11,372200\r
2023-02-12,372200\r
2023-02-14,364100\r
2023-02-16,374600\r
2023-02-17,374600\r
2023-02-19,355600\r
2023-02-21,366400\r
2023-02-24,366400\r
2023-02-26,351100\r
2023-03-01,358400\r
2023-03-03,351000\r
2023-03-04,351000\r
2023-03-09,351000\r
2023-03-16,319600\r
2023-04-05,318200\r
2023-04-07,318200\r
2023-04-08,318200\r
2023-04-15,318200\r
2023-06-24,353100\r
`;export{r as default};
