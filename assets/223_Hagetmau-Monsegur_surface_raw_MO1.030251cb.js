const r=`date,value\r
2017-01-26,236900\r
2017-02-15,307600\r
2017-02-18,341100\r
2017-02-25,310000\r
2017-03-10,369900\r
2017-03-30,388500\r
2017-04-09,430900\r
2017-04-19,423000\r
2017-04-29,408000\r
2017-05-06,407200\r
2017-05-09,404000\r
2017-05-16,420300\r
2017-05-26,419300\r
2017-06-05,412300\r
2017-06-18,421600\r
2017-07-05,406900\r
2017-07-18,391400\r
2017-08-02,383900\r
2017-08-14,389200\r
2017-08-22,392000\r
2017-09-21,340000\r
2017-10-08,341500\r
2017-10-11,329300\r
2017-10-13,359200\r
2017-10-16,358700\r
2017-10-23,355600\r
2017-10-26,356200\r
2017-10-31,347600\r
2017-11-17,338700\r
2017-11-20,347700\r
2017-11-22,330400\r
2017-11-27,334100\r
2017-11-30,344900\r
2017-12-05,330900\r
2017-12-12,358900\r
2017-12-20,384100\r
2017-12-25,376400\r
2018-03-02,459700\r
2018-03-22,465200\r
2018-04-19,452000\r
2018-04-21,464900\r
2018-05-06,449700\r
2018-05-11,475500\r
2018-05-24,431200\r
2018-06-20,443100\r
2018-06-23,435600\r
2018-06-25,426500\r
2018-07-08,424600\r
2018-07-13,442900\r
2018-07-23,433200\r
2018-07-25,422900\r
2018-08-02,426500\r
2018-08-04,396400\r
2018-08-12,430000\r
2018-08-19,407500\r
2018-08-22,399400\r
2018-08-27,404600\r
2018-09-01,382700\r
2018-09-03,389800\r
2018-09-08,390600\r
2018-09-11,384100\r
2018-09-23,378700\r
2018-09-26,386100\r
2018-10-03,386400\r
2018-11-15,369300\r
2018-12-07,352900\r
2019-02-03,410000\r
2019-02-13,419500\r
2019-02-15,444900\r
2019-02-18,422900\r
2019-02-20,454800\r
2019-02-23,416200\r
2019-02-25,445900\r
2019-03-20,381100\r
2019-03-22,438500\r
2019-03-27,445700\r
2019-03-30,404600\r
2019-04-09,411800\r
2019-05-01,419200\r
2019-05-31,409000\r
2019-06-08,426700\r
2019-06-13,397900\r
2019-06-18,414500\r
2019-06-23,372900\r
2019-06-28,435000\r
2019-07-05,408800\r
2019-07-08,440500\r
2019-07-15,426600\r
2019-08-04,374700\r
2019-08-09,394500\r
2019-08-14,389900\r
2019-08-17,298900\r
2019-08-22,345600\r
2019-08-24,387500\r
2019-08-29,400700\r
2019-09-13,363200\r
2019-09-16,330700\r
2019-10-11,298500\r
2019-10-13,353400\r
2019-12-15,436900\r
2019-12-25,436600\r
2019-12-27,421000\r
2019-12-30,421900\r
2020-01-09,414600\r
2020-01-11,423800\r
2020-01-14,443400\r
2020-01-19,400000\r
2020-01-31,485600\r
2020-02-05,438600\r
2020-02-15,428300\r
2020-02-20,429600\r
2020-03-21,431100\r
2020-03-24,345700\r
2020-03-26,422800\r
2020-04-03,392300\r
2020-04-08,245500\r
2020-04-10,421300\r
2020-04-13,409900\r
2020-04-15,405600\r
2020-05-05,393200\r
2020-05-18,268200\r
2020-05-20,411000\r
2020-05-25,410200\r
2020-05-28,379000\r
2020-05-30,411900\r
2020-06-24,383200\r
2020-07-09,409000\r
2020-07-19,383700\r
2020-07-22,400800\r
2020-07-27,377300\r
2020-08-06,336800\r
2020-09-02,366700\r
2020-09-05,375500\r
2020-09-10,335300\r
2020-09-12,360100\r
2020-09-17,362100\r
2020-09-30,315700\r
2020-10-30,352100\r
2020-11-11,391600\r
2020-11-14,398900\r
2020-11-21,384300\r
2020-11-29,356200\r
2020-12-26,404000\r
2021-01-03,424000\r
2021-01-18,431300\r
2021-02-24,440400\r
2021-02-27,423500\r
2021-03-29,418800\r
2021-03-31,401000\r
2021-04-03,418600\r
2021-04-08,420200\r
2021-04-15,401700\r
2021-04-20,389400\r
2021-04-23,418300\r
2021-05-03,415300\r
2021-05-28,388200\r
2021-06-14,416800\r
2021-08-11,399700\r
2021-08-28,365000\r
2021-08-31,381500\r
2021-09-05,391800\r
2021-09-12,393400\r
2021-09-25,378000\r
2021-09-30,382700\r
2021-10-07,388500\r
2021-10-12,382000\r
2021-10-27,366900\r
2021-11-19,371700\r
2021-12-14,439200\r
2021-12-19,434000\r
2022-01-13,443100\r
2022-01-15,411000\r
2022-01-23,435200\r
2022-01-25,420600\r
2022-02-09,430800\r
2022-03-24,431800\r
2022-03-26,409800\r
2022-04-05,440800\r
2022-05-10,414400\r
2022-05-28,399800\r
2022-05-30,407400\r
2022-06-17,390700\r
2022-07-02,404900\r
2022-07-12,395700\r
2022-07-14,389900\r
2022-07-17,393100\r
2022-07-24,384600\r
2022-08-01,356700\r
2022-09-05,249200\r
2022-09-10,246000\r
2022-09-12,249600\r
2022-09-20,240300\r
2022-09-22,241100\r
2022-10-05,230200\r
2022-10-15,238700\r
2022-10-17,248500\r
2022-10-20,238400\r
2022-10-22,239000\r
2022-11-01,238700\r
2022-11-06,240200\r
2022-11-11,236500\r
2022-11-16,236400\r
2022-12-04,302000\r
2022-12-11,305400\r
2022-12-21,347400\r
2023-02-02,462800\r
2023-02-04,454700\r
2023-02-09,452800\r
2023-02-12,451000\r
2023-02-17,446000\r
2023-02-24,454900\r
2023-04-05,452400\r
2023-04-20,424000\r
2023-05-28,405300\r
2023-06-24,421700\r
2023-07-07,403400\r
2023-07-14,419300\r
2023-07-17,420200\r
2023-07-22,405400\r
2023-07-27,391000\r
2023-07-29,418900\r
2023-08-08,392000\r
2023-08-11,378400\r
2023-08-16,381500\r
2023-08-21,373300\r
2023-08-23,359900\r
2023-08-31,338500\r
2023-09-10,304800\r
2023-09-20,291300\r
2023-09-25,289600\r
2023-09-30,292600\r
2023-10-07,296800\r
2023-10-10,270500\r
2023-10-12,293000\r
2023-11-19,419800\r
`;export{r as default};
