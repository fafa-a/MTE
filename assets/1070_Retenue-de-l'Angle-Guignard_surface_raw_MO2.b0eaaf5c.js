const n=`date,value\r
2017-02-11,334000\r
2017-02-18,330000\r
2017-02-21,335400\r
2017-03-30,383100\r
2017-04-02,383100\r
2017-04-09,383000\r
2017-04-12,400600\r
2017-04-19,357800\r
2017-04-22,349600\r
2017-04-29,343200\r
2017-05-02,348800\r
2017-06-18,362100\r
2017-06-21,348000\r
2017-06-28,357400\r
2017-07-01,319200\r
2017-08-07,345800\r
2017-08-20,329900\r
2017-08-22,329900\r
2017-08-25,329900\r
2017-08-27,372200\r
2017-10-11,332200\r
2017-10-14,329900\r
2017-10-16,333300\r
2017-10-19,332700\r
2017-10-21,338900\r
2017-10-24,335100\r
2017-11-13,300700\r
2017-11-15,302900\r
2017-11-18,316100\r
2017-11-23,316100\r
2017-11-25,313400\r
2018-03-20,358900\r
2018-03-25,382400\r
2018-03-30,382400\r
2018-04-17,368400\r
2018-04-19,385900\r
2018-04-22,380500\r
2018-04-24,374400\r
2018-04-27,374400\r
2018-05-04,373300\r
2018-05-07,373200\r
2018-05-19,383200\r
2018-05-22,383200\r
2018-05-24,383400\r
2018-06-21,308900\r
2018-06-23,373700\r
2018-06-26,373700\r
2018-06-28,364100\r
2018-07-01,365200\r
2018-07-03,381400\r
2018-07-08,373200\r
2018-07-11,375500\r
2018-07-13,369500\r
2018-07-16,369600\r
2018-07-18,369600\r
2018-07-21,369600\r
2018-07-26,375800\r
2018-07-31,375800\r
2018-08-02,386000\r
2018-08-05,372700\r
2018-08-07,389000\r
2018-08-10,389000\r
2018-08-12,389000\r
2018-08-15,359100\r
2018-09-01,388500\r
2018-09-04,388500\r
2018-09-09,388500\r
2018-09-11,410300\r
2018-09-14,411900\r
2018-09-16,411900\r
2018-09-26,404800\r
2018-09-29,404800\r
2018-10-01,404800\r
2018-10-04,355400\r
2018-10-09,388300\r
2018-10-14,388300\r
2018-10-16,357500\r
2018-10-19,357600\r
2018-10-21,368500\r
2018-10-24,335700\r
2018-11-15,312300\r
2018-11-18,319600\r
2018-11-20,319600\r
2019-02-03,212500\r
2019-02-13,221000\r
2019-02-16,221000\r
2019-02-18,221000\r
2019-02-21,310500\r
2019-02-23,239800\r
2019-02-26,226400\r
2019-03-03,230200\r
2019-03-08,230200\r
2019-03-10,230200\r
2019-03-13,60500\r
2019-03-23,294400\r
2019-03-25,289000\r
2019-03-28,310900\r
2019-03-30,309800\r
2019-04-04,309800\r
2019-04-07,325000\r
2019-04-09,336900\r
2019-04-12,332300\r
2019-04-14,339600\r
2019-04-19,336400\r
2019-04-22,336200\r
2019-04-27,327900\r
2019-04-29,356900\r
2019-05-07,391200\r
2019-05-12,384800\r
2019-05-14,344500\r
2019-05-19,344500\r
2019-05-24,341600\r
2019-05-27,341600\r
2019-05-29,333000\r
2019-06-01,375700\r
2019-06-03,375700\r
2019-06-06,375700\r
2019-06-13,370400\r
2019-06-18,332600\r
2019-06-21,332600\r
2019-06-26,364700\r
2019-06-28,364700\r
2019-07-01,347800\r
2019-07-03,356700\r
2019-07-06,342500\r
2019-07-08,343400\r
2019-07-13,323700\r
2019-07-16,323500\r
2019-07-23,306900\r
2019-07-28,307100\r
2019-07-31,333200\r
2019-08-02,294800\r
2019-08-05,294800\r
2019-08-22,306100\r
2019-08-25,377500\r
2019-08-27,375000\r
2019-08-30,345400\r
2019-09-01,345200\r
2019-09-04,346100\r
2019-09-06,326600\r
2019-09-11,320700\r
2019-09-16,301800\r
2019-09-19,283900\r
2019-09-21,295200\r
2019-09-24,293400\r
2019-10-01,293400\r
2019-10-11,240200\r
2019-10-14,240200\r
2019-10-21,240200\r
2020-02-06,56400\r
2020-02-18,56400\r
2020-02-21,279600\r
2020-03-19,5700\r
2020-03-24,275600\r
2020-03-27,275600\r
2020-03-29,279600\r
2020-04-01,289500\r
2020-04-03,289500\r
2020-04-08,326800\r
2020-04-11,341700\r
2020-04-13,335700\r
2020-04-16,338700\r
2020-04-18,400600\r
2020-04-23,400600\r
2020-04-26,340100\r
2020-05-18,275600\r
2020-05-21,312300\r
2020-05-23,321400\r
2020-05-26,310000\r
2020-05-28,317700\r
2020-05-31,300100\r
2020-06-02,309100\r
2020-06-05,308900\r
2020-06-07,319800\r
2020-07-07,344400\r
2020-07-10,369900\r
2020-07-12,289200\r
2020-07-15,289200\r
2020-07-17,245300\r
2020-07-20,293100\r
2020-07-22,325400\r
2020-07-27,348400\r
2020-07-30,350700\r
2020-08-01,350700\r
2020-08-04,362100\r
2020-08-06,347500\r
2020-08-09,316100\r
2020-08-11,316100\r
2020-08-14,316100\r
2020-09-08,284000\r
2020-09-10,295200\r
2020-09-13,316400\r
2020-09-15,316400\r
2020-09-20,296600\r
2020-09-25,369200\r
2020-09-28,369200\r
2020-10-18,266000\r
2020-10-23,266000\r
2020-10-30,266000\r
2020-11-04,127000\r
2020-11-09,127000\r
2020-11-12,127000\r
2020-11-14,165600\r
2020-11-19,207200\r
2020-11-22,209000\r
2020-11-27,209000\r
2020-11-29,139300\r
2021-02-17,296200\r
2021-02-27,365300\r
2021-03-02,365300\r
2021-03-04,365800\r
2021-03-09,365800\r
2021-03-17,350900\r
2021-03-19,350900\r
2021-03-22,373400\r
2021-03-24,360900\r
2021-03-27,360900\r
2021-03-29,371400\r
2021-04-01,378500\r
2021-04-03,382400\r
2021-04-06,368800\r
2021-04-08,369100\r
2021-04-11,356200\r
2021-04-13,363200\r
2021-04-16,376100\r
2021-04-18,372100\r
2021-04-21,376100\r
2021-04-23,367800\r
2021-04-28,389100\r
2021-05-03,352600\r
2021-05-08,409600\r
2021-05-11,344400\r
2021-05-13,344400\r
2021-05-28,398700\r
2021-05-31,378700\r
2021-06-05,399000\r
2021-06-07,399000\r
2021-06-10,359500\r
2021-06-15,358900\r
2021-06-22,358900\r
2021-06-25,352400\r
2021-07-17,344600\r
2021-07-20,352700\r
2021-07-22,352700\r
2021-07-25,352700\r
2021-07-30,345800\r
2021-08-11,404200\r
2021-08-14,404600\r
2021-08-24,359300\r
2021-08-26,409600\r
2021-08-29,409600\r
2021-08-31,409600\r
2021-09-03,409600\r
2021-09-05,409600\r
2021-09-23,373700\r
2021-09-28,373700\r
2021-09-30,345900\r
2021-10-03,375800\r
2021-10-08,313400\r
2021-10-10,313400\r
2021-10-23,371600\r
2021-10-28,371900\r
2021-11-04,325700\r
2021-11-09,319300\r
2021-11-17,321100\r
2021-11-19,329500\r
2021-11-24,324100\r
2022-02-05,316600\r
2022-02-07,316600\r
2022-02-12,316600\r
2022-03-07,350100\r
2022-03-09,350100\r
2022-03-12,350300\r
2022-03-14,361700\r
2022-03-22,365900\r
2022-03-24,358800\r
2022-03-27,365400\r
2022-04-01,365400\r
2022-04-11,354600\r
2022-04-13,354600\r
2022-04-16,387300\r
2022-04-21,367200\r
2022-04-26,364400\r
2022-05-01,365100\r
2022-05-03,378800\r
2022-05-06,351400\r
2022-05-08,379600\r
2022-05-11,351600\r
2022-05-13,350900\r
2022-05-16,346100\r
2022-05-21,344200\r
2022-05-28,350400\r
2022-05-31,349800\r
2022-06-02,391400\r
2022-06-05,391400\r
2022-06-07,391400\r
2022-06-10,412600\r
2022-06-12,395900\r
2022-06-15,404400\r
2022-06-17,418400\r
2022-06-27,407500\r
2022-07-02,408500\r
2022-07-05,380300\r
2022-07-07,362500\r
2022-07-10,361300\r
2022-07-12,359500\r
2022-07-15,357600\r
2022-07-17,373200\r
2022-07-20,369400\r
2022-07-27,312300\r
2022-07-30,318100\r
2022-08-06,297100\r
2022-08-09,308200\r
2022-08-11,298800\r
2022-08-29,355500\r
2022-09-03,355500\r
2022-09-05,355500\r
2022-09-08,355500\r
2022-09-18,322000\r
2022-09-20,329200\r
2022-09-30,317100\r
2022-10-08,285700\r
2022-10-18,285700\r
2022-11-12,281800\r
2022-11-17,281800\r
2022-11-19,298800\r
2022-11-22,298800\r
2022-11-29,281400\r
2023-02-05,342000\r
2023-02-07,342000\r
2023-02-10,351200\r
2023-02-12,334700\r
2023-02-15,335500\r
2023-02-20,327500\r
2023-02-27,331200\r
2023-03-02,331200\r
2023-03-04,341500\r
2023-05-26,351800\r
2023-05-28,367100\r
2023-05-31,359800\r
2023-06-02,360100\r
2023-06-05,359900\r
2023-06-07,373800\r
2023-06-10,389400\r
2023-06-15,391900\r
2023-06-22,347600\r
2023-06-25,361300\r
2023-07-07,386300\r
2023-07-10,386400\r
2023-07-15,386400\r
2023-07-17,386400\r
2023-07-20,298300\r
2023-08-09,353600\r
2023-08-19,360800\r
2023-09-03,368600\r
2023-09-05,368600\r
2023-09-08,311600\r
2023-09-10,311600\r
2023-09-13,311600\r
2023-09-15,312600\r
2023-09-18,376200\r
2023-09-30,389200\r
2023-10-03,389200\r
2023-10-05,389200\r
2023-10-08,360900\r
2023-10-10,316300\r
2023-11-04,312800\r
`;export{n as default};
