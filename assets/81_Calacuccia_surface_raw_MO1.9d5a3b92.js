const r=`date,value\r
2017-02-16,1054800\r
2017-02-23,965600\r
2017-02-26,958700\r
2017-03-05,959200\r
2017-03-08,938400\r
2017-03-15,904000\r
2017-03-28,814600\r
2017-04-07,936800\r
2017-04-14,1003400\r
2017-04-17,1027000\r
2017-04-24,1042700\r
2017-05-04,981900\r
2017-05-07,1002100\r
2017-05-14,997000\r
2017-05-17,1081400\r
2017-05-24,1058800\r
2017-05-27,1108300\r
2017-06-03,1096000\r
2017-06-06,1114500\r
2017-06-13,1090000\r
2017-06-16,1111100\r
2017-06-26,1098700\r
2017-07-01,1094200\r
2017-07-06,1097000\r
2017-07-08,1066900\r
2017-07-11,1081200\r
2017-07-13,1044400\r
2017-07-18,1028300\r
2017-07-21,1042900\r
2017-07-23,1018500\r
2017-07-28,982000\r
2017-07-31,987100\r
2017-08-02,964000\r
2017-08-05,950700\r
2017-08-07,934600\r
2017-08-12,907700\r
2017-08-15,891000\r
2017-08-17,905800\r
2017-08-20,861200\r
2017-08-22,862100\r
2017-08-25,850100\r
2017-08-27,836600\r
2017-09-01,809900\r
2017-09-09,754200\r
2017-09-11,757500\r
2017-09-14,731900\r
2017-09-21,708400\r
2017-10-06,670700\r
2017-10-09,652300\r
2017-10-11,678400\r
2017-10-14,646500\r
2017-10-16,670500\r
2017-10-19,527500\r
2017-10-21,643700\r
2017-10-24,625800\r
2017-10-26,646200\r
2017-10-31,591100\r
2017-11-03,634100\r
2018-02-11,898500\r
2018-02-13,908400\r
2018-02-18,885900\r
2018-03-23,1103100\r
2018-04-02,1070200\r
2018-04-17,1058300\r
2018-04-22,1078200\r
2018-04-27,1070000\r
2018-05-29,1090400\r
2018-06-01,1094300\r
2018-06-03,1055800\r
2018-06-16,1105100\r
2018-06-18,1067300\r
2018-06-21,1102900\r
2018-06-26,1097000\r
2018-07-01,1094400\r
2018-07-06,1110200\r
2018-07-08,1104000\r
2018-07-11,1110800\r
2018-07-13,1093500\r
2018-07-18,1086500\r
2018-07-21,1091800\r
2018-07-23,1089400\r
2018-07-26,1091300\r
2018-07-28,1085700\r
2018-08-07,1079600\r
2018-08-12,1022400\r
2018-08-27,971200\r
2018-08-30,955500\r
2018-09-01,945600\r
2018-09-09,871600\r
2018-09-11,862700\r
2018-09-14,848600\r
2018-09-21,813200\r
2018-09-24,781500\r
2018-09-26,777500\r
2018-09-29,768200\r
2018-10-14,715700\r
2018-10-19,740700\r
2018-10-21,766400\r
2018-10-24,746400\r
2018-10-26,719100\r
2019-02-13,930000\r
2019-02-16,884600\r
2019-02-18,954200\r
2019-02-21,834500\r
2019-02-23,908300\r
2019-02-28,809300\r
2019-03-03,531000\r
2019-03-08,798800\r
2019-03-18,813100\r
2019-03-23,862800\r
2019-03-25,902700\r
2019-03-28,808700\r
2019-03-30,803600\r
2019-04-09,904800\r
2019-04-14,948800\r
2019-04-19,997200\r
2019-04-27,1053200\r
2019-05-02,1074200\r
2019-05-07,1072900\r
2019-05-09,1059100\r
2019-06-01,1072600\r
2019-06-03,1015900\r
2019-06-06,1092600\r
2019-06-11,1049400\r
2019-06-13,1051300\r
2019-06-16,720000\r
2019-06-18,1091200\r
2019-06-21,1092800\r
2019-06-23,1076400\r
2019-06-26,1103000\r
2019-06-28,1035900\r
2019-07-01,40600\r
2019-07-06,1090300\r
2019-07-08,1073300\r
2019-07-13,985700\r
2019-07-16,998300\r
2019-07-21,430900\r
2019-07-23,966400\r
2019-07-31,1046900\r
2019-08-05,1045500\r
2019-08-10,1014400\r
2019-08-15,1010900\r
2019-08-20,978600\r
2019-08-30,903400\r
2019-09-04,907400\r
2019-09-09,855900\r
2019-09-11,786500\r
2019-09-16,840000\r
2019-09-19,848800\r
2019-09-24,754100\r
2019-09-29,767900\r
2019-10-01,794000\r
2019-10-06,766300\r
2019-10-09,739700\r
2019-10-11,786200\r
2019-10-14,774300\r
2020-02-11,866700\r
2020-02-13,866100\r
2020-02-16,818400\r
2020-02-21,766600\r
2020-02-28,760200\r
2020-03-14,1071500\r
2020-03-19,999700\r
2020-04-01,106100\r
2020-04-06,923800\r
2020-04-08,946800\r
2020-04-11,903900\r
2020-05-03,1053700\r
2020-05-06,1074200\r
2020-05-21,853600\r
2020-05-23,1077000\r
2020-05-26,1089100\r
2020-05-28,1064100\r
2020-06-15,1099000\r
2020-06-17,1067600\r
2020-06-20,1057800\r
2020-06-22,1064200\r
2020-06-27,1074300\r
2020-06-30,1111300\r
2020-07-02,1079400\r
2020-07-05,1102700\r
2020-07-07,1021300\r
2020-07-10,1028900\r
2020-07-12,1038000\r
2020-07-17,1054600\r
2020-07-20,1051800\r
2020-07-22,1009500\r
2020-07-25,1040400\r
2020-07-27,986000\r
2020-07-30,978300\r
2020-08-01,919600\r
2020-08-06,932100\r
2020-08-09,928000\r
2020-08-11,916700\r
2020-08-14,942200\r
2020-08-16,930100\r
2020-08-21,868100\r
2020-08-24,925700\r
2020-08-26,868200\r
2020-09-03,768300\r
2020-09-05,775900\r
2020-09-13,714000\r
2020-09-30,791000\r
2020-10-03,732600\r
2020-10-08,687500\r
2020-10-18,907100\r
2020-10-25,764000\r
2020-10-28,616200\r
2020-11-02,705600\r
2020-11-07,375800\r
2021-02-15,1092600\r
2021-02-17,1090700\r
2021-02-20,1074000\r
2021-02-25,1037500\r
2021-02-27,1010500\r
2021-03-04,976100\r
2021-03-17,850000\r
2021-03-24,652500\r
2021-03-29,650900\r
2021-04-01,661700\r
2021-04-03,700200\r
2021-04-06,731400\r
2021-04-11,754500\r
2021-05-03,1041300\r
2021-05-06,1047700\r
2021-05-08,1037900\r
2021-05-18,1096600\r
2021-05-21,1087000\r
2021-05-26,1082900\r
2021-05-28,1101000\r
2021-06-07,1053600\r
2021-06-12,1066900\r
2021-06-22,1092300\r
2021-06-25,1094100\r
2021-06-27,1076500\r
2021-06-30,1099100\r
2021-07-05,1094300\r
2021-07-07,1079800\r
2021-07-10,1091800\r
2021-07-12,1039200\r
2021-07-15,1074300\r
2021-07-20,1053800\r
2021-07-22,1043300\r
2021-08-01,992300\r
2021-08-11,927300\r
2021-08-14,920300\r
2021-08-16,910800\r
2021-08-21,874900\r
2021-08-24,878500\r
2021-08-31,815100\r
2021-09-05,789500\r
2021-09-18,692100\r
2021-09-30,633100\r
2021-10-05,626000\r
2021-10-10,630000\r
2021-10-15,614700\r
2021-10-20,611700\r
2022-02-10,908600\r
2022-02-17,852800\r
2022-02-20,879700\r
2022-02-22,862900\r
2022-03-02,817800\r
2022-03-09,743300\r
2022-03-22,770600\r
2022-03-24,766200\r
2022-04-11,951000\r
2022-04-16,956400\r
2022-04-18,935800\r
2022-04-26,1099300\r
2022-04-28,1091000\r
2022-05-13,1066700\r
2022-05-16,1076200\r
2022-05-18,1075700\r
2022-05-21,1055200\r
2022-05-23,1046300\r
2022-06-02,1072200\r
2022-06-15,1084700\r
2022-06-17,1059900\r
2022-06-20,1066300\r
2022-07-02,1026100\r
2022-07-05,1046600\r
2022-07-12,1014500\r
2022-07-15,1020900\r
2022-07-17,992000\r
2022-07-22,953900\r
2022-07-25,978900\r
2022-07-27,933500\r
2022-08-01,918900\r
2022-08-04,932800\r
2022-08-06,921100\r
2022-08-14,922600\r
2022-08-24,906400\r
2022-09-05,874900\r
2022-09-10,798600\r
2022-09-13,773500\r
2022-09-18,719700\r
2022-09-23,710500\r
2022-10-05,842500\r
2022-10-08,854300\r
2022-10-15,856000\r
2022-10-18,886600\r
2022-10-20,868100\r
2022-10-23,857200\r
2022-10-28,826200\r
2022-10-30,801200\r
2022-11-02,744800\r
2023-02-10,815100\r
2023-02-12,737200\r
2023-02-15,698000\r
2023-02-17,654600\r
2023-02-20,637900\r
2023-02-22,617600\r
2023-03-12,711300\r
2023-03-17,769300\r
2023-03-22,797200\r
2023-03-24,801200\r
2023-03-27,832100\r
2023-04-06,832400\r
2023-04-26,1034900\r
2023-04-28,1037500\r
2023-05-06,1036600\r
2023-05-11,1069700\r
2023-05-26,1085300\r
2023-06-15,1099200\r
2023-06-25,1092600\r
2023-06-27,1087500\r
2023-07-02,1088900\r
2023-07-05,1097400\r
2023-07-07,1079600\r
2023-07-10,1094300\r
`;export{r as default};
