const r=`date,value\r
2017-01-04,133200\r
2017-01-07,133200\r
2017-01-14,139600\r
2017-02-03,166800\r
2017-02-06,166800\r
2017-02-16,178500\r
2017-02-23,190300\r
2017-02-26,178200\r
2017-03-05,174600\r
2017-03-08,174000\r
2017-03-15,179800\r
2017-03-18,186800\r
2017-03-25,186800\r
2017-03-28,187300\r
2017-04-04,194700\r
2017-04-07,193100\r
2017-04-14,196400\r
2017-04-17,195000\r
2017-04-24,190800\r
2017-05-04,193800\r
2017-05-07,197400\r
2017-05-14,197200\r
2017-05-17,197800\r
2017-05-24,193400\r
2017-05-27,197600\r
2017-06-03,192100\r
2017-06-06,199500\r
2017-06-13,195200\r
2017-06-16,200600\r
2017-06-23,195500\r
2017-06-26,196400\r
2017-07-01,190900\r
2017-07-03,190100\r
2017-07-06,192100\r
2017-07-08,189200\r
2017-07-11,189000\r
2017-07-13,187000\r
2017-07-18,182200\r
2017-07-21,183200\r
2017-07-23,174100\r
2017-07-26,175400\r
2017-07-28,169600\r
2017-07-31,167100\r
2017-08-02,164900\r
2017-08-05,162900\r
2017-08-07,164700\r
2017-08-12,154500\r
2017-08-15,154900\r
2017-08-17,153100\r
2017-08-20,145900\r
2017-08-22,148500\r
2017-08-25,151200\r
2017-08-27,152700\r
2017-08-30,151300\r
2017-09-01,151300\r
2017-09-04,139300\r
2017-09-09,134600\r
2017-09-14,117700\r
2017-09-16,117700\r
2017-09-19,117700\r
2017-09-21,122000\r
2017-09-24,122000\r
2017-10-06,101400\r
2017-10-09,111500\r
2017-10-11,104700\r
2017-10-14,104900\r
2017-10-16,104900\r
2017-10-19,103400\r
2017-10-21,104000\r
2017-10-24,103600\r
2017-10-26,109200\r
2017-10-31,108800\r
2017-11-03,107000\r
2017-11-05,112000\r
2017-11-08,104900\r
2017-11-15,92100\r
2017-11-18,94700\r
2017-11-20,92100\r
2017-11-23,92100\r
2017-11-28,100700\r
2017-11-30,101300\r
2017-12-03,101300\r
2017-12-05,102100\r
2017-12-13,102900\r
2017-12-18,95000\r
2017-12-20,95000\r
2017-12-23,98800\r
2017-12-25,97200\r
2017-12-28,99100\r
2017-12-30,99100\r
2018-01-17,103400\r
2018-01-19,103400\r
2018-01-22,103400\r
2018-01-24,103400\r
2018-01-27,97900\r
2018-02-08,125600\r
2018-02-11,127700\r
2018-02-13,127700\r
2018-02-16,127700\r
2018-02-18,127700\r
2018-03-13,171900\r
2018-03-18,171900\r
2018-03-23,171900\r
2018-04-14,194500\r
2018-04-17,197800\r
2018-04-19,195500\r
2018-04-22,199900\r
2018-04-24,196300\r
2018-04-27,200400\r
2018-04-29,203000\r
2018-05-07,204300\r
2018-05-09,204300\r
2018-05-17,210300\r
2018-05-19,210800\r
2018-05-22,210800\r
2018-05-29,204300\r
2018-06-03,199900\r
2018-06-08,199900\r
2018-06-13,203700\r
2018-06-16,207400\r
2018-06-18,206900\r
2018-06-21,205200\r
2018-06-26,207300\r
2018-06-28,203800\r
2018-07-01,203900\r
2018-07-03,207000\r
2018-07-06,206800\r
2018-07-08,206500\r
2018-07-11,206500\r
2018-07-13,206700\r
2018-07-18,203400\r
2018-07-21,199500\r
2018-07-23,201800\r
2018-07-26,199600\r
2018-07-28,199100\r
2018-07-31,201100\r
2018-08-02,200900\r
2018-08-05,202100\r
2018-08-07,202900\r
2018-08-10,201400\r
2018-08-12,201900\r
2018-08-15,200500\r
2018-08-17,198000\r
2018-08-20,201400\r
2018-08-22,200600\r
2018-08-25,200600\r
2018-08-27,198000\r
2018-08-30,198500\r
2018-09-01,196700\r
2018-09-06,194800\r
2018-09-09,200900\r
2018-09-11,187400\r
2018-09-14,184800\r
2018-09-16,184800\r
2018-09-19,184800\r
2018-09-21,182100\r
2018-09-24,189500\r
2018-09-26,188400\r
2018-09-29,179100\r
2018-10-01,179100\r
2018-10-06,180500\r
2018-10-09,177100\r
2018-10-14,181400\r
2018-10-19,196700\r
2018-10-21,184700\r
2018-10-24,185600\r
2018-10-26,184500\r
2018-11-08,180600\r
2018-11-10,180600\r
2018-11-15,180600\r
2018-11-18,180600\r
2018-11-28,182200\r
2018-12-03,187800\r
2018-12-05,182700\r
2018-12-08,184300\r
2018-12-10,186700\r
2018-12-15,183500\r
2018-12-18,183000\r
2018-12-23,181200\r
2018-12-25,184000\r
2018-12-28,184000\r
2019-01-02,178400\r
2019-01-04,178400\r
2019-01-07,180900\r
2019-01-09,180000\r
2019-01-12,180200\r
2019-01-14,178600\r
2019-01-17,182600\r
2019-01-22,181700\r
2019-01-24,186100\r
2019-01-29,185600\r
2019-02-03,180500\r
2019-02-06,188900\r
2019-02-08,188900\r
2019-02-11,188900\r
2019-02-13,179000\r
2019-02-16,166300\r
2019-02-18,182200\r
2019-02-21,179600\r
2019-02-23,171600\r
2019-02-26,171600\r
2019-02-28,184400\r
2019-03-03,185200\r
2019-03-08,192200\r
2019-03-10,196500\r
2019-03-18,174100\r
2019-03-20,196900\r
2019-03-23,196900\r
2019-03-25,191800\r
2019-03-28,196800\r
2019-03-30,189900\r
2019-04-02,189900\r
2019-04-07,193300\r
2019-04-09,192800\r
2019-04-12,171000\r
2019-04-14,171600\r
2019-04-17,195300\r
2019-04-19,192000\r
2019-04-27,199800\r
2019-04-29,199800\r
2019-05-02,199800\r
2019-05-07,205500\r
2019-05-09,206800\r
2019-05-14,210000\r
2019-05-19,210000\r
2019-05-24,209800\r
2019-05-29,211500\r
2019-06-01,211600\r
2019-06-03,205100\r
2019-06-06,205100\r
2019-06-11,205100\r
2019-06-13,201000\r
2019-06-18,209100\r
2019-06-21,210000\r
2019-06-23,210000\r
2019-06-26,208500\r
2019-06-28,209300\r
2019-07-01,206600\r
2019-07-03,206600\r
2019-07-06,206400\r
2019-07-08,205900\r
2019-07-11,204100\r
2019-07-13,202200\r
2019-07-16,201000\r
2019-07-18,205000\r
2019-07-21,204000\r
2019-07-23,196700\r
2019-07-26,195900\r
2019-07-28,199500\r
2019-07-31,198700\r
2019-08-02,200100\r
2019-08-05,200800\r
2019-08-07,203700\r
2019-08-10,200500\r
2019-08-12,201300\r
2019-08-15,199700\r
2019-08-17,203700\r
2019-08-20,203900\r
2019-08-22,191600\r
2019-08-25,202800\r
2019-08-27,201200\r
2019-08-30,201500\r
2019-09-04,189800\r
2019-09-06,186300\r
2019-09-09,186700\r
2019-09-11,178500\r
2019-09-14,170700\r
2019-09-16,170100\r
2019-09-19,170100\r
2019-09-24,168500\r
2019-09-26,172000\r
2019-09-29,168600\r
2019-10-01,184000\r
2019-10-04,168800\r
2019-10-06,167500\r
2019-10-09,167800\r
2019-10-11,172600\r
2019-10-14,172600\r
2019-10-16,172600\r
2019-10-19,172800\r
2019-10-26,176200\r
2019-10-29,176200\r
2019-11-05,176200\r
2019-11-13,164200\r
2019-11-20,164200\r
2019-11-28,164200\r
2019-11-30,154800\r
2019-12-08,154800\r
2019-12-10,169800\r
2019-12-13,169800\r
2019-12-15,169800\r
2019-12-23,171300\r
2019-12-25,164500\r
2019-12-28,166600\r
2019-12-30,160800\r
2020-01-02,159900\r
2020-01-04,176000\r
2020-01-09,167400\r
2020-01-12,168400\r
2020-01-14,166300\r
2020-01-17,170200\r
2020-01-22,172100\r
2020-01-27,179600\r
2020-02-01,186500\r
2020-02-06,187100\r
2020-02-08,189600\r
2020-02-11,189600\r
2020-02-13,185700\r
2020-02-16,185700\r
2020-02-18,187100\r
2020-02-21,186900\r
2020-02-26,183000\r
2020-02-28,175800\r
2020-03-04,172400\r
2020-03-07,172400\r
2020-03-14,171000\r
2020-03-19,179900\r
2020-03-22,182200\r
2020-03-24,178300\r
2020-03-29,184400\r
2020-04-01,184100\r
2020-04-03,184100\r
2020-04-06,190000\r
2020-04-08,197400\r
2020-04-11,198400\r
2020-04-23,202500\r
2020-04-26,205900\r
2020-04-28,208700\r
2020-05-03,205700\r
2020-05-06,208700\r
2020-05-11,208600\r
2020-05-21,210500\r
2020-05-23,205700\r
2020-05-26,204100\r
2020-05-28,205900\r
2020-05-31,205900\r
2020-06-05,205900\r
2020-06-10,207600\r
2020-06-12,209400\r
2020-06-15,209000\r
2020-06-20,166000\r
2020-06-22,207500\r
2020-06-25,202100\r
2020-06-27,206300\r
2020-06-30,206300\r
2020-07-02,204500\r
2020-07-05,206300\r
2020-07-07,204400\r
2020-07-10,206300\r
2020-07-12,204800\r
2020-07-15,207200\r
2020-07-17,206100\r
2020-07-20,207900\r
2020-07-22,207800\r
2020-07-25,208000\r
2020-07-27,206000\r
2020-07-30,206300\r
2020-08-01,204700\r
2020-08-04,204800\r
2020-08-06,202200\r
2020-08-09,200400\r
2020-08-11,197700\r
2020-08-14,198000\r
2020-08-16,198400\r
2020-08-19,199600\r
2020-08-21,197800\r
2020-08-24,200000\r
2020-08-26,200600\r
2020-09-03,201600\r
2020-09-05,196400\r
2020-09-08,201100\r
2020-09-10,201100\r
2020-09-13,196500\r
2020-09-15,196500\r
2020-09-18,194600\r
2020-09-20,198500\r
2020-09-25,196900\r
2020-09-28,197400\r
2020-09-30,194200\r
2020-10-03,194200\r
2020-10-08,185500\r
2020-10-10,193200\r
2020-10-15,183500\r
2020-10-18,183500\r
2020-10-20,183500\r
2020-10-25,185400\r
2020-10-28,172000\r
2020-10-30,172000\r
2020-11-02,172000\r
2020-11-07,169200\r
2020-11-09,169200\r
2020-11-17,172800\r
2020-11-19,173000\r
2020-11-22,175400\r
2020-11-24,177600\r
2020-12-02,177500\r
2020-12-07,181400\r
2020-12-09,191200\r
2020-12-12,191300\r
2020-12-19,187700\r
2020-12-22,185900\r
2020-12-27,169400\r
2021-01-06,174200\r
2021-01-13,174900\r
2021-01-16,172400\r
2021-01-18,172200\r
2021-01-23,172200\r
2021-01-26,174300\r
2021-01-31,173300\r
2021-02-02,173300\r
2021-02-15,171700\r
2021-02-17,177500\r
2021-02-20,177500\r
2021-02-25,174600\r
2021-02-27,183000\r
2021-03-02,180100\r
2021-03-04,180300\r
2021-03-14,173100\r
2021-03-17,184500\r
2021-03-19,184500\r
2021-03-22,188000\r
2021-03-24,179000\r
2021-03-29,178300\r
2021-04-01,178300\r
2021-04-03,177500\r
2021-04-06,176300\r
2021-04-08,176300\r
2021-04-11,176900\r
2021-04-13,176900\r
2021-04-23,173800\r
2021-04-28,173800\r
2021-05-03,174700\r
2021-05-13,174100\r
2021-05-18,173500\r
2021-05-21,173100\r
2021-05-23,173100\r
2021-05-26,174500\r
2021-05-28,174500\r
2021-05-31,187900\r
2021-06-05,179000\r
2021-06-10,183500\r
2021-06-12,183500\r
2021-06-15,182200\r
2021-06-17,182200\r
2021-06-22,183600\r
2021-06-25,173000\r
2021-06-27,170600\r
2021-06-30,167900\r
2021-07-02,167400\r
2021-07-05,161000\r
2021-07-07,162800\r
2021-07-10,163900\r
2021-07-12,164800\r
2021-07-15,166800\r
2021-07-17,165300\r
2021-07-20,159500\r
2021-07-22,151400\r
2021-07-27,148600\r
2021-07-30,151700\r
2021-08-01,147900\r
2021-08-04,139000\r
2021-08-06,139900\r
2021-08-11,133100\r
2021-08-14,124800\r
2021-08-16,123800\r
2021-08-19,123600\r
2021-08-21,120600\r
2021-08-24,120700\r
2021-08-26,120000\r
2021-08-29,115100\r
2021-08-31,111500\r
2021-09-03,115200\r
2021-09-05,108100\r
2021-09-08,108300\r
2021-09-30,89500\r
2021-10-03,85000\r
2021-10-05,84900\r
2021-10-08,84900\r
2021-10-10,87900\r
2021-10-13,90300\r
2021-10-15,90300\r
2021-10-18,86900\r
2021-10-20,88700\r
2021-10-23,88000\r
2021-11-02,88200\r
2021-11-04,88200\r
2021-11-19,101900\r
2021-11-22,102700\r
2021-11-24,102700\r
2021-11-27,102700\r
2021-12-07,92600\r
2021-12-09,92600\r
2021-12-12,99300\r
2021-12-14,94100\r
2021-12-17,95900\r
2021-12-19,98400\r
2021-12-24,94600\r
2021-12-29,99300\r
2022-01-08,140300\r
2022-01-11,154900\r
2022-01-13,148200\r
2022-01-16,153500\r
2022-01-18,153200\r
2022-01-21,157100\r
2022-01-23,160500\r
2022-01-26,164000\r
2022-01-28,169300\r
2022-01-31,172700\r
2022-02-02,177500\r
2022-02-05,176900\r
2022-02-07,178600\r
2022-02-10,180300\r
2022-02-12,176900\r
2022-02-15,181300\r
2022-02-17,179100\r
2022-02-20,176000\r
2022-02-22,180100\r
2022-02-25,181000\r
2022-02-27,181000\r
2022-03-02,180700\r
2022-03-07,183800\r
2022-03-09,185500\r
2022-03-14,182800\r
2022-03-22,190500\r
2022-03-24,191600\r
2022-03-29,191600\r
2022-04-03,188400\r
2022-04-11,191800\r
2022-04-13,193400\r
2022-04-16,187900\r
2022-04-18,190900\r
2022-04-23,193200\r
2022-04-26,195200\r
2022-04-28,195300\r
2022-05-01,194600\r
2022-05-08,189500\r
2022-05-11,201300\r
2022-05-13,206000\r
2022-05-16,201200\r
2022-05-18,203600\r
2022-05-21,202200\r
2022-05-23,203400\r
2022-05-26,205000\r
2022-05-28,204100\r
2022-05-31,209000\r
2022-06-02,206600\r
2022-06-10,205800\r
2022-06-12,205400\r
2022-06-15,203600\r
2022-06-17,205300\r
2022-06-20,203200\r
2022-06-25,205300\r
2022-06-27,203800\r
2022-07-02,206400\r
2022-07-05,206700\r
2022-07-07,204500\r
2022-07-10,205400\r
2022-07-12,206100\r
2022-07-15,206100\r
2022-07-17,205200\r
2022-07-20,204200\r
2022-07-22,204100\r
2022-07-25,204600\r
2022-07-27,205300\r
2022-07-30,205300\r
2022-08-01,199600\r
2022-08-04,202800\r
2022-08-06,200600\r
2022-08-09,202400\r
2022-08-11,200700\r
2022-08-14,201700\r
2022-08-16,200300\r
2022-08-19,202000\r
2022-08-21,199200\r
2022-08-24,201600\r
2022-08-26,197700\r
2022-08-29,202500\r
2022-09-05,201800\r
2022-09-10,201300\r
2022-09-13,192900\r
2022-09-18,193000\r
2022-09-20,189000\r
2022-09-23,184100\r
2022-10-08,175200\r
2022-10-10,175200\r
2022-10-13,177300\r
2022-10-15,170900\r
2022-10-18,175300\r
2022-10-20,173200\r
2022-10-23,172500\r
2022-10-25,176700\r
2022-10-28,175700\r
2022-10-30,169500\r
2022-11-02,161600\r
2022-11-04,150700\r
2022-11-14,149500\r
2022-11-17,145500\r
2022-11-24,147900\r
2022-11-27,138000\r
2022-12-02,137400\r
2022-12-04,140700\r
2022-12-07,139900\r
2022-12-09,143000\r
2022-12-27,135000\r
2022-12-29,146600\r
2023-01-03,138400\r
2023-01-31,134600\r
2023-02-02,136900\r
2023-02-05,136900\r
2023-02-10,136000\r
2023-02-12,135200\r
2023-02-15,131800\r
2023-02-17,131800\r
2023-02-20,131800\r
2023-02-22,127900\r
2023-03-12,125000\r
2023-03-14,120600\r
2023-03-17,123200\r
2023-03-22,130700\r
2023-03-24,134400\r
2023-03-27,158200\r
2023-04-01,172000\r
2023-04-03,183500\r
2023-04-06,181700\r
2023-04-08,190900\r
2023-04-16,192200\r
2023-04-21,190500\r
2023-04-23,190500\r
2023-04-26,196500\r
2023-04-28,195200\r
2023-05-03,197500\r
2023-05-06,195500\r
2023-05-11,201200\r
2023-05-23,202700\r
2023-05-26,205100\r
2023-05-28,202500\r
2023-06-02,201400\r
2023-06-05,198700\r
2023-06-07,198700\r
2023-06-10,199100\r
2023-06-12,199100\r
2023-06-15,202300\r
2023-06-17,202300\r
2023-06-20,200700\r
2023-06-22,200700\r
2023-06-25,202400\r
2023-06-27,206400\r
2023-07-02,206500\r
2023-07-05,204800\r
2023-07-07,205600\r
2023-07-10,205300\r
`;export{r as default};
