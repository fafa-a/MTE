const r=`date,value\r
2017-02-25,471000\r
2017-03-07,471000\r
2017-03-14,493800\r
2017-03-17,509600\r
2017-03-27,501400\r
2017-04-03,490900\r
2017-04-06,490900\r
2017-04-23,492200\r
2017-05-03,492200\r
2017-05-16,346000\r
2017-05-23,346000\r
2017-05-26,495700\r
2017-06-02,502700\r
2017-06-05,505400\r
2017-06-12,469500\r
2017-06-25,496600\r
2017-07-02,495600\r
2017-07-05,500600\r
2017-07-07,491200\r
2017-07-10,491200\r
2017-07-12,491200\r
2017-07-17,483300\r
2017-07-22,475400\r
2017-07-27,477800\r
2017-08-06,486800\r
2017-08-11,475400\r
2017-08-14,484500\r
2017-08-19,482500\r
2017-08-21,478900\r
2017-08-24,479500\r
2017-08-26,483200\r
2017-08-29,451100\r
2017-09-03,457800\r
2017-09-05,456700\r
2017-09-08,448100\r
2017-09-20,447800\r
2017-09-23,447800\r
2017-09-28,447800\r
2017-10-05,442800\r
2017-10-08,442800\r
2017-10-10,452800\r
2017-10-13,443700\r
2017-10-15,446200\r
2017-10-18,442500\r
2017-10-25,422700\r
2017-10-28,417700\r
2017-10-30,415200\r
2017-11-07,417600\r
2017-11-14,391200\r
2017-11-17,410800\r
2017-11-19,410800\r
2017-11-22,392300\r
2017-11-24,392400\r
2017-11-27,411600\r
2017-11-29,386100\r
2017-12-09,387700\r
2017-12-14,387700\r
2017-12-19,401200\r
2017-12-24,395400\r
2017-12-27,395400\r
2018-02-02,462500\r
2018-02-10,480000\r
2018-02-12,475800\r
2018-03-14,469100\r
2018-03-19,469100\r
2018-03-22,469100\r
2018-04-18,506000\r
2018-04-21,511600\r
2018-04-23,508900\r
2018-04-26,502300\r
2018-05-06,493200\r
2018-05-11,503800\r
2018-05-18,494400\r
2018-05-21,494800\r
2018-06-20,503300\r
2018-06-22,503300\r
2018-06-25,513800\r
2018-06-27,513800\r
2018-07-02,493400\r
2018-07-07,488500\r
2018-07-10,495300\r
2018-07-12,494800\r
2018-07-15,500100\r
2018-07-17,500100\r
2018-07-20,503200\r
2018-07-22,507100\r
2018-07-25,501100\r
2018-07-27,511300\r
2018-07-30,493600\r
2018-08-01,502800\r
2018-08-04,490700\r
2018-08-06,490700\r
2018-08-11,479600\r
2018-08-16,503900\r
2018-08-19,491200\r
2018-08-21,470800\r
2018-08-26,492700\r
2018-08-31,475000\r
2018-09-08,479800\r
2018-09-10,473700\r
2018-09-13,468400\r
2018-09-20,475700\r
2018-09-23,468200\r
2018-09-25,460300\r
2018-09-28,465400\r
2018-09-30,458000\r
2018-10-03,454200\r
2018-10-05,452500\r
2018-10-23,410400\r
2018-10-25,410400\r
2018-10-30,406200\r
2018-11-29,360200\r
2018-12-19,405300\r
2018-12-27,422100\r
2018-12-29,422100\r
2019-01-03,430600\r
2019-01-11,430600\r
2019-01-16,448000\r
2019-01-23,431800\r
2019-01-28,431800\r
2019-02-12,465100\r
2019-02-15,465400\r
2019-02-17,454900\r
2019-02-20,462600\r
2019-02-22,457500\r
2019-02-25,463700\r
2019-02-27,458300\r
2019-03-12,464400\r
2019-03-22,475700\r
2019-03-24,469000\r
2019-03-27,475800\r
2019-03-29,478200\r
2019-04-01,472200\r
2019-04-08,479600\r
2019-04-13,487700\r
2019-05-06,492600\r
2019-05-11,490600\r
2019-05-13,489700\r
2019-05-16,489700\r
2019-05-23,476500\r
2019-05-31,505900\r
2019-06-02,487300\r
2019-06-12,504700\r
2019-06-17,480300\r
2019-06-22,480300\r
2019-06-25,480300\r
2019-06-27,480700\r
2019-06-30,480700\r
2019-07-02,480700\r
2019-07-05,496900\r
2019-07-07,496900\r
2019-07-10,496900\r
2019-07-12,502100\r
2019-07-15,508300\r
2019-07-17,494300\r
2019-07-22,488300\r
2019-07-25,493100\r
2019-08-01,494800\r
2019-08-04,466700\r
2019-08-09,467700\r
2019-08-11,486100\r
2019-08-14,467300\r
2019-08-16,472900\r
2019-08-21,499800\r
2019-08-24,487400\r
2019-08-26,486700\r
2019-08-29,486700\r
2019-08-31,490900\r
2019-09-03,458700\r
2019-09-05,458700\r
2019-09-13,470200\r
2019-09-15,461900\r
2019-09-18,466900\r
2019-09-20,466300\r
2019-10-08,418000\r
2019-10-13,461300\r
2019-10-25,453200\r
2020-01-06,430600\r
2020-01-11,465200\r
2020-01-16,442000\r
2020-01-18,442000\r
2020-02-15,450100\r
2020-02-20,436600\r
2020-02-22,433900\r
2020-03-01,433400\r
2020-03-08,439400\r
2020-03-13,492000\r
2020-03-18,497100\r
2020-03-21,488200\r
2020-03-28,478900\r
2020-03-31,481500\r
2020-04-05,483500\r
2020-04-07,484700\r
2020-04-10,499000\r
2020-04-12,484000\r
2020-04-15,487000\r
2020-04-25,501200\r
2020-05-07,458800\r
2020-05-17,469800\r
2020-05-20,468100\r
2020-05-22,473800\r
2020-05-25,483400\r
2020-05-27,474600\r
2020-05-30,477900\r
2020-06-19,470100\r
2020-06-21,494000\r
2020-06-24,480800\r
2020-06-26,488300\r
2020-07-01,488300\r
2020-07-04,483000\r
2020-07-09,501200\r
2020-07-11,483800\r
2020-07-14,499900\r
2020-07-19,501400\r
2020-07-21,490600\r
2020-07-24,481400\r
2020-07-26,490400\r
2020-07-29,485900\r
2020-07-31,472300\r
2020-08-03,472300\r
2020-08-05,466200\r
2020-08-08,472100\r
2020-08-10,496300\r
2020-08-15,461600\r
2020-08-20,462200\r
2020-08-23,459500\r
2020-08-25,440400\r
2020-09-02,443600\r
2020-09-04,445300\r
2020-09-07,424400\r
2020-09-12,440500\r
2020-09-14,425200\r
2020-09-17,443200\r
2020-09-19,440300\r
2020-11-11,415600\r
2020-11-18,408900\r
2020-11-21,408900\r
2020-11-23,417500\r
2020-11-26,411400\r
2020-12-18,461800\r
2021-02-14,500700\r
2021-02-19,497100\r
2021-02-24,493700\r
2021-03-01,494300\r
2021-03-23,490300\r
2021-03-26,490300\r
2021-03-28,498600\r
2021-03-31,493200\r
2021-04-02,506300\r
2021-04-05,499700\r
2021-04-07,496700\r
2021-04-15,503200\r
2021-04-17,510200\r
2021-04-20,508800\r
2021-04-22,510700\r
2021-05-27,505800\r
2021-05-30,508900\r
2021-06-11,479600\r
2021-06-14,490800\r
2021-06-16,483900\r
2021-06-19,483900\r
2021-06-21,488000\r
2021-06-26,475400\r
2021-07-01,495400\r
2021-07-09,479400\r
2021-07-29,491900\r
2021-08-05,488600\r
2021-08-10,485200\r
2021-08-13,485200\r
2021-08-18,485200\r
2021-08-20,487300\r
2021-08-23,481900\r
2021-08-25,484400\r
2021-08-28,474800\r
2021-08-30,475300\r
2021-09-04,470500\r
2021-09-07,467100\r
2021-09-17,470100\r
2021-09-22,471300\r
2021-09-24,468900\r
2021-09-29,476000\r
2021-10-14,458000\r
2021-10-17,443900\r
2021-10-24,434400\r
2021-10-27,429600\r
2021-12-16,439400\r
2021-12-18,472400\r
2021-12-21,461700\r
2021-12-23,448400\r
2022-01-15,458000\r
2022-01-17,452300\r
2022-01-22,466000\r
2022-01-25,452100\r
2022-01-27,452000\r
2022-01-30,452000\r
2022-02-01,452000\r
2022-02-06,456600\r
2022-02-09,466700\r
2022-02-26,465700\r
2022-03-01,465700\r
2022-03-03,465700\r
2022-03-08,481000\r
2022-03-23,458700\r
2022-03-26,469400\r
2022-04-05,498900\r
2022-04-10,495000\r
2022-04-15,487400\r
2022-04-17,477200\r
2022-04-27,470200\r
2022-05-15,480700\r
2022-05-17,492100\r
2022-05-20,492100\r
2022-05-22,492100\r
2022-05-27,488500\r
2022-06-01,483100\r
2022-06-04,482100\r
2022-06-06,484100\r
2022-06-11,482900\r
2022-06-16,478100\r
2022-06-19,473200\r
2022-06-29,484000\r
2022-07-01,481100\r
2022-07-04,481100\r
2022-07-06,481100\r
2022-07-11,480100\r
2022-07-14,492600\r
2022-07-16,476500\r
2022-07-19,484100\r
2022-07-21,475300\r
2022-07-24,474700\r
2022-07-26,467400\r
2022-07-29,472700\r
2022-07-31,466600\r
2022-08-03,468000\r
2022-08-05,462200\r
2022-08-08,473500\r
2022-08-10,457100\r
2022-08-13,456700\r
2022-08-15,474900\r
2022-08-20,466600\r
2022-08-23,455100\r
2022-08-28,458300\r
2022-08-30,458300\r
2022-09-02,458200\r
2022-09-04,460100\r
2022-09-12,455100\r
2022-09-19,447000\r
2022-09-22,432300\r
2022-10-02,431800\r
2022-10-04,421700\r
2022-10-07,455300\r
2022-10-09,424200\r
2022-10-12,424200\r
2022-10-22,411900\r
2022-10-24,413100\r
2022-10-27,413100\r
2022-11-01,413100\r
2022-11-11,374800\r
2022-11-13,374800\r
2022-11-16,411500\r
2022-12-28,356800\r
2023-02-06,385800\r
2023-02-09,408700\r
2023-02-11,393300\r
2023-02-14,401100\r
2023-02-16,397000\r
2023-02-19,399600\r
2023-02-21,403800\r
2023-02-26,398500\r
2023-03-01,404200\r
2023-03-03,419100\r
2023-03-16,482500\r
2023-03-28,479200\r
2023-04-05,501900\r
2023-04-07,490100\r
2023-04-15,503600\r
2023-04-17,488300\r
2023-04-20,475800\r
2023-05-02,487800\r
2023-05-27,476800\r
2023-05-30,482500\r
2023-06-04,484300\r
2023-06-24,496000\r
2023-06-26,496000\r
2023-06-29,505600\r
2023-07-14,503700\r
2023-07-16,502300\r
2023-07-19,502300\r
2023-07-21,502300\r
2023-07-31,478000\r
2023-08-03,478000\r
2023-08-05,478000\r
2023-08-08,478800\r
2023-08-10,482300\r
2023-08-13,472200\r
2023-08-15,461400\r
2023-08-18,461000\r
2023-08-20,450500\r
2023-08-23,450200\r
`;export{r as default};
