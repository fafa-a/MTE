const r=`date,value\r
2017-02-22,185300\r
2017-02-25,185300\r
2017-04-03,174400\r
2017-04-06,174400\r
2017-04-23,170500\r
2017-05-03,170500\r
2017-05-13,310300\r
2017-05-16,310300\r
2017-05-23,318200\r
2017-06-02,269300\r
2017-06-12,252100\r
2017-06-15,243300\r
2017-06-22,243300\r
2017-07-07,276400\r
2017-07-10,276400\r
2017-07-12,276400\r
2017-07-17,279500\r
2017-07-22,270500\r
2017-07-27,276500\r
2017-07-30,265800\r
2017-08-04,265800\r
2017-08-06,267000\r
2017-08-14,197100\r
2017-08-21,187100\r
2017-08-24,187100\r
2017-08-26,208800\r
2017-08-29,208800\r
2017-09-03,176400\r
2017-09-10,197200\r
2017-09-13,197200\r
2017-09-15,197200\r
2017-09-20,203700\r
2017-09-23,187000\r
2017-09-28,187000\r
2017-10-05,138900\r
2017-10-08,138900\r
2017-10-10,150000\r
2017-10-13,150000\r
2017-10-15,150000\r
2017-10-30,149400\r
2017-11-07,149400\r
2017-11-09,151600\r
2018-02-22,154900\r
2018-02-25,154900\r
2018-02-27,171400\r
2018-03-14,207900\r
2018-03-17,207900\r
2018-03-19,207900\r
2018-03-22,207900\r
2018-04-18,213900\r
2018-04-21,213900\r
2018-04-23,219500\r
2018-04-26,219500\r
2018-06-22,278600\r
2018-06-25,278400\r
2018-06-27,282000\r
2018-07-02,284300\r
2018-07-07,273600\r
2018-07-12,270100\r
2018-07-27,235000\r
2018-07-30,235000\r
2018-08-01,235000\r
2018-08-04,235000\r
2018-08-06,235000\r
2018-08-16,199500\r
2018-08-19,199500\r
2018-08-21,210600\r
2018-08-26,210600\r
2018-08-31,189400\r
2018-09-03,179200\r
2018-09-05,179200\r
2018-09-08,179200\r
2018-09-10,179300\r
2018-09-13,158000\r
2018-09-18,158000\r
2018-09-20,162200\r
2018-09-23,141900\r
2018-09-25,141900\r
2018-09-28,141900\r
2018-10-05,130300\r
2018-10-13,130300\r
2018-10-20,145600\r
2018-10-23,145600\r
2018-10-25,153800\r
2018-10-30,153800\r
2018-11-04,138000\r
2019-02-22,158500\r
2019-02-25,159200\r
2019-02-27,160400\r
2019-03-24,153500\r
2019-03-27,153500\r
2019-03-29,175400\r
2019-04-01,175400\r
2019-04-08,174000\r
2019-04-13,183600\r
2019-04-18,211700\r
2019-04-28,172600\r
2019-05-13,275500\r
2019-05-16,275500\r
2019-05-23,307700\r
2019-05-26,307700\r
2019-05-31,304400\r
2019-06-02,329100\r
2019-06-12,328300\r
2019-06-17,253400\r
2019-06-22,268200\r
2019-06-27,271000\r
2019-06-30,271000\r
2019-07-02,277700\r
2019-07-05,304500\r
2019-07-07,304500\r
2019-07-10,305500\r
2019-07-12,305500\r
2019-07-15,301700\r
2019-07-17,302100\r
2019-08-01,250100\r
2019-08-04,250300\r
2019-08-06,238700\r
2019-08-09,257000\r
2019-08-11,257000\r
2019-08-14,257000\r
2019-08-16,257000\r
2019-08-26,151800\r
2019-08-29,151800\r
2019-08-31,188400\r
2019-09-03,188400\r
2019-09-05,165600\r
2019-09-13,206800\r
2019-09-15,205100\r
2019-09-18,184200\r
2019-09-20,184200\r
2019-09-30,128900\r
2019-10-03,125900\r
2019-10-08,125900\r
2019-10-10,126600\r
2019-10-13,126600\r
2019-10-25,184300\r
2019-10-30,183900\r
2019-11-09,183900\r
2020-02-22,140900\r
2020-03-08,176100\r
2020-03-11,146900\r
2020-03-13,185400\r
2020-03-18,171200\r
2020-03-21,171200\r
2020-03-28,189300\r
2020-03-31,170800\r
2020-04-02,175400\r
2020-04-07,161000\r
2020-04-10,161000\r
2020-04-12,161000\r
2020-04-15,161000\r
2020-05-17,251900\r
2020-05-20,251900\r
2020-05-22,251900\r
2020-05-25,251600\r
2020-05-27,294600\r
2020-05-30,294600\r
2020-06-01,294600\r
2020-06-21,275100\r
2020-06-24,275100\r
2020-06-26,332400\r
2020-06-29,332400\r
2020-07-01,332400\r
2020-07-04,332400\r
2020-07-06,288000\r
2020-07-09,323600\r
2020-07-11,284100\r
2020-07-14,287100\r
2020-07-16,280800\r
2020-07-19,280800\r
2020-07-21,280600\r
2020-07-24,276100\r
2020-07-26,279800\r
2020-07-29,295000\r
2020-07-31,274300\r
2020-08-05,250400\r
2020-08-08,249200\r
2020-08-10,249200\r
2020-08-15,194600\r
2020-08-20,209400\r
2020-08-23,165400\r
2020-08-25,170700\r
2020-09-02,155300\r
2020-09-04,155800\r
2020-09-12,126900\r
2020-09-14,150100\r
2020-09-17,150100\r
2020-09-29,158600\r
2020-10-24,196400\r
2020-11-01,196400\r
2020-11-06,196400\r
2021-03-23,175600\r
2021-03-26,175600\r
2021-03-28,188300\r
2021-03-31,188300\r
2021-04-05,182700\r
2021-04-07,204800\r
2021-04-12,201600\r
2021-04-15,201600\r
2021-04-17,201600\r
2021-04-22,193900\r
2021-05-07,215400\r
2021-05-27,288300\r
2021-05-30,288300\r
2021-06-01,288300\r
2021-07-11,285000\r
2021-07-19,270000\r
2021-07-21,279600\r
2021-07-26,248600\r
2021-07-29,248600\r
2021-08-10,235700\r
2021-08-13,235700\r
2021-08-15,241000\r
2021-08-18,241000\r
2021-08-20,222700\r
2021-08-23,228200\r
2021-08-25,195000\r
2021-08-28,196700\r
2021-08-30,177700\r
2021-09-04,169200\r
2021-09-07,185200\r
2021-09-12,165300\r
2021-09-14,165300\r
2021-09-24,132100\r
2021-09-29,135600\r
2021-10-14,138600\r
2021-10-17,138600\r
2021-10-19,138600\r
2021-10-24,138600\r
2022-02-26,158900\r
2022-03-01,158900\r
2022-03-06,158900\r
2022-03-08,158900\r
2022-03-23,175800\r
2022-03-26,175800\r
2022-03-28,175800\r
2022-04-17,174700\r
2022-04-22,189900\r
2022-04-27,189900\r
2022-04-30,164000\r
2022-05-02,164000\r
2022-05-12,210000\r
2022-05-15,210000\r
2022-05-17,223600\r
2022-05-20,225400\r
2022-05-22,207500\r
2022-05-27,205700\r
2022-06-01,226400\r
2022-06-04,205000\r
2022-06-06,207100\r
2022-06-11,204200\r
2022-06-14,204200\r
2022-06-16,205900\r
2022-06-19,220600\r
2022-06-21,220600\r
2022-07-01,192400\r
2022-07-06,209600\r
2022-07-11,185700\r
2022-07-14,202400\r
2022-07-16,191000\r
2022-07-19,211000\r
2022-07-21,189500\r
2022-07-24,219000\r
2022-07-26,192000\r
2022-07-31,189000\r
2022-08-03,195600\r
2022-08-05,174800\r
2022-08-08,181800\r
2022-08-10,160700\r
2022-08-13,162700\r
2022-08-15,151100\r
2022-08-20,150000\r
2022-08-25,142500\r
2022-08-28,156800\r
2022-09-04,137400\r
2022-09-19,106100\r
2022-09-22,106100\r
2022-10-04,100800\r
2022-10-07,100800\r
2022-10-09,100800\r
2022-10-12,100800\r
2023-02-16,181700\r
2023-02-19,191100\r
2023-02-26,182000\r
2023-03-03,180300\r
2023-03-06,180300\r
2023-03-13,165100\r
2023-03-28,197500\r
2023-04-05,197500\r
2023-04-07,197500\r
2023-05-02,170900\r
2023-05-27,174500\r
2023-05-30,174500\r
2023-06-04,185900\r
2023-06-06,185900\r
2023-06-26,286300\r
2023-07-06,252700\r
2023-07-09,252700\r
2023-07-11,315000\r
2023-07-14,315000\r
2023-07-16,274400\r
2023-07-19,316600\r
2023-07-21,285800\r
2023-07-26,266700\r
2023-07-31,250200\r
2023-08-05,240100\r
2023-08-08,251200\r
2023-08-10,243900\r
2023-08-13,257300\r
2023-08-15,230300\r
2023-08-23,198000\r
2023-08-25,198000\r
2023-08-30,216400\r
2023-09-04,185900\r
2023-09-07,185900\r
2023-09-12,169000\r
2023-09-14,169000\r
2023-09-19,128000\r
2023-09-24,126300\r
2023-09-27,126300\r
2023-09-29,128900\r
2023-10-02,128900\r
2023-10-04,128900\r
2023-10-07,112400\r
2023-10-09,129700\r
2023-10-12,122300\r
`;export{r as default};
