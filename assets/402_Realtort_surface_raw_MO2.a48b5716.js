const r=`date,value\r
2017-02-19,435700\r
2017-02-22,450700\r
2017-03-01,445800\r
2017-03-11,455300\r
2017-03-14,454500\r
2017-03-21,448500\r
2017-04-10,453000\r
2017-04-20,454900\r
2017-04-23,450800\r
2017-05-30,434400\r
2017-06-02,434600\r
2017-06-09,434900\r
2017-06-12,425100\r
2017-06-19,429900\r
2017-06-22,433300\r
2017-06-29,429200\r
2017-07-02,412500\r
2017-07-04,427000\r
2017-07-07,427000\r
2017-07-09,431400\r
2017-07-12,437000\r
2017-07-14,441900\r
2017-07-17,440500\r
2017-07-19,440500\r
2017-07-22,441600\r
2017-07-24,440500\r
2017-07-29,443100\r
2017-08-03,445500\r
2017-08-06,445500\r
2017-08-11,424700\r
2017-08-13,432500\r
2017-08-18,444500\r
2017-08-21,444500\r
2017-08-23,444500\r
2017-08-26,434600\r
2017-09-02,424200\r
2017-09-05,424200\r
2017-09-07,440900\r
2017-09-10,440900\r
2017-09-12,429000\r
2017-09-17,437700\r
2017-09-27,436500\r
2017-10-02,436300\r
2017-10-05,448100\r
2017-10-07,441400\r
2017-10-10,447800\r
2017-10-12,432000\r
2017-10-15,436500\r
2017-10-17,442100\r
2017-10-20,427800\r
2017-10-22,431200\r
2017-10-25,437600\r
2017-10-27,434600\r
2017-10-30,437000\r
2017-11-01,437000\r
2017-11-06,426900\r
2017-11-14,433500\r
2017-11-16,444100\r
2017-11-19,441300\r
2017-11-21,432900\r
2017-11-26,432900\r
2017-11-29,435200\r
2017-12-01,435500\r
2017-12-06,436300\r
2017-12-09,422100\r
2017-12-14,422100\r
2017-12-16,412200\r
2017-12-19,392200\r
2017-12-21,413300\r
2017-12-24,412600\r
2017-12-26,412600\r
2018-01-05,436800\r
2018-01-10,436800\r
2018-01-13,436800\r
2018-01-15,436800\r
2018-02-04,435200\r
2018-02-07,435000\r
2018-02-09,436800\r
2018-02-12,438300\r
2018-02-14,437100\r
2018-02-19,447100\r
2018-02-22,447700\r
2018-02-24,447700\r
2018-03-16,442800\r
2018-03-19,442800\r
2018-03-26,442100\r
2018-03-31,435600\r
2018-04-05,446100\r
2018-04-10,444600\r
2018-04-15,449000\r
2018-04-18,442700\r
2018-04-20,448500\r
2018-04-25,443000\r
2018-04-28,450900\r
2018-04-30,435800\r
2018-05-03,449200\r
2018-05-05,442100\r
2018-05-08,446900\r
2018-05-10,446900\r
2018-05-15,441300\r
2018-05-25,399700\r
2018-06-02,375100\r
2018-06-04,375100\r
2018-06-09,443800\r
2018-06-12,443800\r
2018-06-14,443900\r
2018-06-19,397800\r
2018-06-22,395500\r
2018-06-24,395500\r
2018-07-09,438200\r
2018-07-12,477800\r
2018-07-14,446900\r
2018-07-17,447200\r
2018-07-19,438900\r
2018-07-22,447100\r
2018-07-24,434700\r
2018-07-27,446200\r
2018-07-29,440800\r
2018-08-01,447700\r
2018-08-03,447700\r
2018-08-06,443600\r
2018-08-08,443200\r
2018-08-11,427000\r
2018-08-13,436100\r
2018-08-16,436100\r
2018-08-18,436100\r
2018-08-21,439400\r
2018-08-28,436000\r
2018-08-31,428300\r
2018-09-02,435500\r
2018-09-05,435500\r
2018-09-07,435400\r
2018-09-10,433600\r
2018-09-12,448600\r
2018-09-17,430200\r
2018-09-27,436500\r
2018-10-02,448500\r
2018-10-05,448500\r
2018-10-07,448500\r
2018-10-22,430700\r
2018-10-25,430700\r
2018-10-30,430700\r
2018-11-01,430700\r
2018-11-26,420600\r
2018-11-29,420500\r
2018-12-01,420800\r
2018-12-04,414000\r
2018-12-06,425200\r
2018-12-11,434400\r
2018-12-14,435300\r
2019-01-05,370100\r
2019-01-10,388900\r
2019-01-15,384300\r
2019-01-18,384400\r
2019-01-23,398400\r
2019-01-25,398000\r
2019-01-28,411800\r
2019-01-30,404600\r
2019-02-04,404100\r
2019-02-12,423700\r
2019-02-14,416200\r
2019-02-17,431400\r
2019-02-19,431400\r
2019-02-22,436700\r
2019-02-27,421800\r
2019-03-01,435100\r
2019-03-04,416100\r
2019-03-11,434300\r
2019-03-14,433400\r
2019-03-16,428400\r
2019-03-19,434900\r
2019-03-21,435000\r
2019-03-24,432100\r
2019-03-26,432200\r
2019-03-29,427200\r
2019-03-31,423000\r
2019-04-05,411900\r
2019-04-08,414000\r
2019-04-13,420600\r
2019-04-15,409200\r
2019-04-18,427000\r
2019-04-20,427000\r
2019-04-28,422700\r
2019-04-30,443000\r
2019-05-05,447200\r
2019-05-10,427700\r
2019-05-13,428100\r
2019-05-15,428100\r
2019-05-23,431700\r
2019-05-25,431700\r
2019-05-30,424900\r
2019-06-02,433800\r
2019-06-04,432400\r
2019-06-07,432400\r
2019-06-12,436100\r
2019-06-14,411000\r
2019-06-19,416300\r
2019-06-22,415800\r
2019-06-24,417000\r
2019-06-27,417000\r
2019-06-29,404600\r
2019-07-02,404600\r
2019-07-04,407400\r
2019-07-07,393700\r
2019-07-12,409300\r
2019-07-14,402600\r
2019-07-17,407100\r
2019-07-19,403100\r
2019-07-22,412600\r
2019-07-24,407600\r
2019-07-27,407600\r
2019-07-29,411900\r
2019-08-01,407900\r
2019-08-03,417400\r
2019-08-06,412800\r
2019-08-08,413300\r
2019-08-11,397300\r
2019-08-13,397300\r
2019-08-16,413000\r
2019-08-18,407100\r
2019-08-21,430100\r
2019-08-23,403300\r
2019-08-26,432200\r
2019-08-31,432200\r
2019-09-02,403600\r
2019-09-05,404400\r
2019-09-07,403200\r
2019-09-12,403700\r
2019-09-15,403700\r
2019-09-17,408500\r
2019-09-20,407800\r
2019-09-25,411400\r
2019-09-27,411300\r
2019-09-30,421800\r
2019-10-02,420500\r
2019-10-05,428000\r
2019-10-07,427700\r
2019-10-10,427700\r
2019-10-27,406600\r
2019-10-30,406600\r
2019-11-04,406600\r
2019-11-06,408000\r
2019-11-09,408000\r
2019-11-16,409600\r
2019-11-21,405100\r
2019-11-29,402000\r
2019-12-06,411000\r
2019-12-09,417200\r
2019-12-14,424300\r
2019-12-21,408600\r
2019-12-24,417300\r
2019-12-26,410100\r
2019-12-29,410100\r
2020-01-05,390100\r
2020-01-08,415900\r
2020-01-10,415900\r
2020-01-18,415900\r
2020-02-04,404800\r
2020-02-07,404000\r
2020-02-09,414900\r
2020-02-12,414900\r
2020-02-14,421500\r
2020-02-19,420900\r
2020-02-22,420800\r
2020-02-24,420000\r
2020-03-03,408600\r
2020-03-08,405800\r
2020-03-10,417900\r
2020-03-20,435600\r
2020-03-25,438500\r
2020-03-28,438000\r
2020-03-30,438900\r
2020-04-02,438900\r
2020-04-04,436000\r
2020-04-07,409100\r
2020-04-09,418400\r
2020-04-12,418400\r
2020-04-14,424200\r
2020-04-24,440500\r
2020-04-29,449100\r
2020-05-02,465400\r
2020-05-04,447800\r
2020-05-07,447800\r
2020-05-09,447800\r
2020-05-12,449400\r
2020-05-17,449300\r
2020-05-19,432900\r
2020-05-22,425700\r
2020-05-24,429200\r
2020-05-27,429200\r
2020-05-29,431100\r
2020-06-01,435700\r
2020-06-03,435700\r
2020-06-06,430800\r
2020-06-08,430300\r
2020-06-11,423100\r
2020-06-23,411300\r
2020-06-26,411300\r
2020-06-28,424500\r
2020-07-01,424500\r
2020-07-03,410300\r
2020-07-06,410500\r
2020-07-08,415800\r
2020-07-11,410800\r
2020-07-13,416300\r
2020-07-16,415500\r
2020-07-18,415000\r
2020-07-21,420300\r
2020-07-23,419300\r
2020-07-26,425900\r
2020-07-31,428300\r
2020-08-02,419400\r
2020-08-05,428100\r
2020-08-07,416800\r
2020-08-10,413500\r
2020-08-15,413500\r
2020-08-20,400700\r
2020-08-22,416300\r
2020-08-25,419100\r
2020-08-27,418000\r
2020-08-30,422500\r
2020-09-01,422500\r
2020-09-04,422500\r
2020-09-06,395900\r
2020-09-11,400900\r
2020-09-14,404900\r
2020-09-16,410700\r
2020-09-21,410700\r
2020-09-26,414000\r
2020-09-29,414000\r
2020-10-11,421100\r
2020-10-14,418000\r
2020-10-16,418000\r
2020-10-19,419100\r
2020-10-24,419100\r
2020-10-26,419100\r
2020-10-31,431200\r
2020-11-05,430200\r
2020-11-08,430200\r
2020-11-10,417700\r
2020-11-18,418300\r
2020-11-20,407300\r
2020-11-23,418700\r
2020-11-30,415100\r
2020-12-03,415100\r
2020-12-30,416200\r
2021-01-09,444400\r
2021-01-12,444400\r
2021-01-14,444500\r
2021-01-17,444500\r
2021-01-19,442200\r
2021-01-24,435700\r
2021-01-27,448200\r
2021-01-29,438900\r
2021-02-03,440200\r
2021-02-11,444900\r
2021-02-13,444900\r
2021-02-23,435500\r
2021-02-26,435500\r
2021-02-28,447900\r
2021-03-05,447900\r
2021-03-08,443900\r
2021-03-10,456200\r
2021-03-13,456000\r
2021-03-15,457400\r
2021-03-18,457400\r
2021-03-20,451400\r
2021-03-23,453000\r
2021-03-25,453000\r
2021-03-28,450400\r
2021-03-30,457500\r
2021-04-02,454600\r
2021-04-04,461200\r
2021-04-07,458000\r
2021-04-12,453600\r
2021-04-14,453700\r
2021-04-19,453400\r
2021-04-22,451300\r
2021-04-24,452600\r
2021-05-02,453900\r
2021-05-04,457000\r
2021-05-07,460700\r
2021-05-09,460700\r
2021-05-12,460400\r
2021-05-14,460200\r
2021-06-13,455200\r
2021-06-16,454100\r
2021-06-18,454100\r
2021-06-21,454100\r
2021-06-23,453400\r
2021-07-03,451600\r
2021-07-08,451600\r
2021-07-11,451300\r
2021-07-18,438200\r
2021-07-21,437800\r
2021-07-23,438300\r
2021-07-26,438300\r
2021-07-28,441700\r
2021-07-31,440100\r
2021-08-02,444500\r
2021-08-05,444500\r
2021-08-10,436400\r
2021-08-12,435900\r
2021-08-17,441600\r
2021-08-20,441600\r
2021-08-22,447000\r
2021-08-25,447100\r
2021-08-27,439700\r
2021-08-30,445100\r
2021-09-01,439500\r
2021-09-04,441600\r
2021-09-06,438300\r
2021-09-11,437100\r
2021-09-19,435300\r
2021-09-21,435300\r
2021-10-01,436800\r
2021-10-06,437500\r
2021-10-09,437500\r
2021-10-11,435500\r
2021-10-14,441300\r
2021-10-16,441300\r
2021-10-21,439300\r
2021-10-26,433600\r
2021-10-29,433600\r
2021-11-05,441300\r
2021-11-13,424500\r
2021-11-20,422200\r
2021-11-23,422200\r
2021-11-28,422600\r
2021-11-30,436200\r
2021-12-03,430300\r
2021-12-20,431000\r
2021-12-25,431000\r
2022-01-14,438200\r
2022-01-17,438100\r
2022-01-22,438500\r
2022-01-24,445500\r
2022-01-27,446600\r
2022-01-29,449000\r
2022-02-01,449000\r
2022-02-03,452200\r
2022-02-06,434700\r
2022-02-08,436500\r
2022-02-11,434800\r
2022-02-18,444100\r
2022-02-21,437100\r
2022-02-23,454700\r
2022-02-26,454700\r
2022-02-28,446200\r
2022-03-03,456100\r
2022-03-05,454900\r
2022-03-25,464900\r
2022-03-28,464900\r
2022-04-04,464900\r
2022-04-09,445900\r
2022-04-14,445900\r
2022-04-17,446000\r
2022-04-19,447200\r
2022-05-14,461800\r
2022-05-17,462200\r
2022-05-19,462600\r
2022-05-22,461800\r
2022-05-29,458000\r
2022-06-01,458000\r
2022-06-03,458000\r
2022-06-06,458000\r
2022-06-13,446400\r
2022-06-16,446400\r
2022-06-18,449100\r
2022-06-23,448500\r
2022-06-26,447100\r
2022-06-28,446700\r
2022-07-01,442800\r
2022-07-03,445400\r
2022-07-06,446600\r
2022-07-08,444900\r
2022-07-11,453000\r
2022-07-13,445700\r
2022-07-16,457500\r
2022-07-18,447500\r
2022-07-21,453500\r
2022-07-23,453500\r
2022-07-26,447800\r
2022-07-28,447800\r
2022-08-02,448700\r
2022-08-05,448700\r
2022-08-07,458000\r
2022-08-10,458000\r
2022-08-12,446500\r
2022-08-15,455800\r
2022-08-20,442000\r
2022-08-22,444000\r
2022-08-25,440200\r
2022-08-27,447900\r
2022-09-04,445000\r
2022-09-06,445000\r
2022-09-11,441500\r
2022-09-16,448500\r
2022-09-19,448500\r
2022-09-21,448500\r
2022-09-26,443900\r
2022-09-29,437400\r
2022-10-04,437400\r
2022-10-06,437400\r
2022-10-26,434800\r
2022-10-31,434800\r
2022-11-05,435500\r
2022-11-10,433700\r
2022-11-18,431900\r
2022-11-20,432100\r
2022-11-25,426500\r
2022-11-30,420500\r
2022-12-05,424400\r
2022-12-10,428500\r
2022-12-18,428900\r
2022-12-25,435400\r
2022-12-28,435400\r
2023-01-04,431000\r
2023-01-09,439300\r
2023-01-19,433600\r
2023-01-22,432000\r
2023-01-24,432000\r
2023-01-27,432000\r
2023-01-29,443400\r
2023-02-01,443400\r
2023-02-03,446800\r
2023-02-06,446600\r
2023-02-08,441100\r
2023-02-11,444000\r
2023-02-13,443500\r
2023-02-16,450100\r
2023-02-18,446000\r
2023-02-26,448000\r
2023-03-05,458900\r
2023-03-10,461700\r
2023-03-13,461700\r
2023-03-15,457000\r
2023-03-18,452600\r
2023-03-20,454000\r
2023-03-25,454900\r
2023-03-28,453300\r
2023-03-30,474700\r
2023-04-02,474700\r
2023-04-04,474700\r
2023-04-07,474700\r
2023-04-09,474700\r
2023-04-14,471300\r
2023-04-17,471300\r
2023-04-19,471900\r
2023-04-24,469800\r
2023-04-29,460400\r
2023-05-02,452600\r
2023-05-04,460800\r
2023-05-07,461000\r
2023-05-14,460500\r
2023-05-24,444900\r
2023-05-27,444900\r
2023-05-29,450800\r
2023-06-01,451000\r
2023-06-03,451000\r
2023-06-18,449500\r
2023-06-23,449600\r
2023-06-26,449600\r
2023-06-28,447400\r
2023-07-03,448200\r
2023-07-06,448200\r
2023-07-08,451600\r
2023-07-11,451600\r
2023-07-13,449000\r
2023-07-16,451700\r
2023-07-18,450800\r
2023-07-21,447800\r
2023-07-23,449200\r
2023-07-26,447000\r
2023-07-28,447500\r
2023-07-31,447100\r
2023-08-02,449800\r
2023-08-05,449000\r
2023-08-07,449000\r
2023-08-10,448200\r
2023-08-12,454600\r
2023-08-15,453900\r
2023-08-17,453900\r
2023-08-22,442000\r
2023-08-25,442000\r
`;export{r as default};
