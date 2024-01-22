const r=`date,value\r
2017-02-25,471000\r
2017-03-14,493800\r
2017-03-17,500100\r
2017-03-27,490900\r
2017-04-23,492200\r
2017-05-16,346000\r
2017-05-26,506500\r
2017-06-02,466900\r
2017-06-25,496600\r
2017-07-05,493900\r
2017-07-07,471600\r
2017-07-17,475400\r
2017-08-06,474600\r
2017-08-14,480200\r
2017-08-21,471900\r
2017-08-26,444600\r
2017-08-29,448000\r
2017-09-20,447800\r
2017-10-05,442100\r
2017-10-10,451700\r
2017-10-13,441900\r
2017-10-15,429800\r
2017-10-25,419700\r
2017-10-28,404000\r
2017-11-14,391200\r
2017-11-17,407300\r
2017-11-22,386000\r
2017-12-09,387700\r
2017-12-19,395400\r
2018-02-02,462500\r
2018-02-10,478000\r
2018-03-14,469100\r
2018-04-18,506000\r
2018-04-21,501500\r
2018-04-26,484800\r
2018-05-06,482200\r
2018-05-11,494400\r
2018-06-20,503300\r
2018-06-25,500300\r
2018-07-02,464800\r
2018-07-07,486600\r
2018-07-12,502900\r
2018-07-15,499200\r
2018-07-25,492000\r
2018-07-27,494900\r
2018-07-30,491100\r
2018-08-01,478400\r
2018-08-04,478700\r
2018-08-06,487800\r
2018-08-11,464100\r
2018-08-19,469400\r
2018-08-21,473200\r
2018-09-08,476100\r
2018-09-20,466400\r
2018-09-23,452400\r
2018-09-25,463000\r
2018-09-28,448800\r
2018-10-05,449800\r
2018-10-23,399300\r
2018-11-29,360200\r
2018-12-19,405300\r
2019-01-03,430600\r
2019-01-16,431800\r
2019-02-12,465100\r
2019-02-15,432200\r
2019-02-17,453000\r
2019-02-20,470100\r
2019-02-22,459300\r
2019-02-25,477700\r
2019-02-27,463600\r
2019-03-12,463400\r
2019-03-22,474000\r
2019-03-24,465500\r
2019-03-27,462300\r
2019-03-29,469800\r
2019-04-01,478300\r
2019-04-13,452800\r
2019-05-06,490900\r
2019-05-11,490000\r
2019-05-13,472100\r
2019-05-31,485500\r
2019-06-02,486600\r
2019-06-17,480300\r
2019-06-27,454500\r
2019-06-30,512700\r
2019-07-05,503300\r
2019-07-15,494100\r
2019-07-22,462000\r
2019-07-25,491400\r
2019-08-04,457400\r
2019-08-09,481800\r
2019-08-14,492200\r
2019-08-24,464300\r
2019-08-26,477500\r
2019-09-03,456800\r
2019-09-13,464900\r
2019-09-15,460400\r
2019-10-08,418000\r
2019-10-13,453100\r
2020-01-06,430600\r
2020-01-11,464500\r
2020-01-16,444500\r
2020-02-15,432400\r
2020-02-20,422200\r
2020-02-22,431000\r
2020-03-13,492000\r
2020-03-18,462700\r
2020-04-05,468300\r
2020-04-10,499400\r
2020-05-07,458800\r
2020-05-17,456900\r
2020-05-20,505900\r
2020-05-22,464800\r
2020-05-25,493400\r
2020-05-27,474300\r
2020-06-19,470100\r
2020-06-21,455000\r
2020-06-24,495400\r
2020-06-26,480200\r
2020-07-04,494100\r
2020-07-09,493500\r
2020-07-14,500800\r
2020-07-19,472800\r
2020-07-21,445400\r
2020-07-24,483500\r
2020-07-29,506600\r
2020-07-31,448200\r
2020-08-05,444900\r
2020-08-08,488900\r
2020-08-15,455300\r
2020-08-20,451800\r
2020-08-25,426900\r
2020-09-04,416300\r
2020-09-14,440100\r
2020-09-17,444100\r
2020-11-11,407500\r
2020-11-18,410200\r
2020-11-23,417100\r
2020-12-18,461800\r
2021-02-14,492600\r
2021-02-24,484900\r
2021-03-01,481100\r
2021-03-23,490300\r
2021-03-28,495700\r
2021-03-31,500900\r
2021-04-02,488500\r
2021-04-05,487500\r
2021-04-15,508800\r
2021-05-27,505800\r
2021-06-11,479600\r
2021-06-14,489400\r
2021-06-16,472600\r
2021-06-26,469900\r
2021-07-01,479400\r
2021-07-29,488600\r
2021-08-10,485200\r
2021-08-20,480200\r
2021-08-25,470200\r
2021-08-28,465800\r
2021-08-30,471800\r
2021-09-22,462600\r
2021-09-24,471700\r
2021-10-14,438600\r
2021-10-24,425400\r
2021-10-27,415500\r
2021-12-16,439400\r
2021-12-18,445800\r
2021-12-23,437300\r
2022-01-15,452300\r
2022-01-22,451600\r
2022-01-25,450600\r
2022-01-27,456600\r
2022-02-09,466700\r
2022-02-26,465700\r
2022-03-23,458700\r
2022-03-26,465300\r
2022-04-05,490800\r
2022-04-10,485400\r
2022-04-15,493300\r
2022-04-17,470200\r
2022-05-15,480700\r
2022-05-17,486800\r
2022-06-01,479900\r
2022-06-16,450300\r
2022-06-19,478400\r
2022-06-29,475200\r
2022-07-11,470700\r
2022-07-14,480900\r
2022-07-16,462100\r
2022-07-19,482100\r
2022-07-21,462900\r
2022-07-24,464600\r
2022-07-26,460900\r
2022-07-31,463000\r
2022-08-03,464000\r
2022-08-10,449000\r
2022-08-13,453000\r
2022-08-28,458200\r
2022-09-04,454400\r
2022-09-12,442200\r
2022-09-19,423900\r
2022-09-22,431800\r
2022-10-04,421700\r
2022-10-07,454300\r
2022-10-09,409600\r
2022-10-22,411900\r
2022-10-24,399300\r
2022-11-11,374800\r
2022-11-16,386100\r
2022-12-28,356800\r
2023-02-06,385800\r
2023-02-09,381900\r
2023-02-11,397300\r
2023-02-14,405900\r
2023-02-16,402500\r
2023-02-19,397100\r
2023-02-26,395700\r
2023-03-01,417700\r
2023-03-16,482500\r
2023-03-28,479200\r
2023-04-05,500300\r
2023-04-07,488300\r
2023-04-20,475800\r
2023-05-02,487800\r
2023-05-27,471200\r
2023-05-30,461100\r
2023-06-24,496000\r
2023-07-14,503700\r
2023-07-31,465400\r
2023-08-08,471000\r
2023-08-20,446200\r
2023-08-23,443900\r
2023-09-04,391800\r
2023-09-07,439500\r
2023-09-24,412900\r
2023-09-29,412800\r
2023-10-07,392900\r
2023-10-12,393900\r
2023-11-26,344900\r
2023-12-03,365900\r
`;export{r as default};
