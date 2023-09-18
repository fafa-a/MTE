const r=`date,value\r
2017-02-09,480600\r
2017-02-19,322800\r
2017-03-11,528500\r
2017-03-14,465500\r
2017-04-03,428200\r
2017-04-10,515800\r
2017-04-20,515600\r
2017-04-23,500100\r
2017-05-10,383900\r
2017-06-02,334000\r
2017-06-12,374800\r
2017-06-19,369900\r
2017-06-22,296600\r
2017-07-04,524500\r
2017-07-07,519100\r
2017-08-03,529400\r
2017-08-18,526100\r
2017-08-21,537600\r
2017-08-26,528700\r
2017-09-05,405400\r
2017-09-27,393600\r
2017-10-05,429600\r
2017-10-07,452200\r
2017-10-10,456900\r
2017-10-15,384100\r
2017-10-17,322400\r
2017-10-25,287000\r
2017-11-21,457800\r
2018-03-04,326500\r
2018-03-14,357500\r
2018-03-24,537100\r
2018-04-18,509400\r
2018-04-20,494100\r
2018-05-20,412400\r
2018-05-25,394000\r
2018-05-30,366600\r
2018-06-19,489100\r
2018-06-24,500200\r
2018-06-27,490900\r
2018-07-02,475600\r
2018-07-04,513700\r
2018-07-09,507200\r
2018-07-12,512000\r
2018-07-17,526700\r
2018-07-19,517500\r
2018-07-24,540500\r
2018-07-29,535000\r
2018-08-01,527000\r
2018-08-03,508700\r
2018-08-06,528800\r
2018-08-11,473800\r
2018-08-16,505100\r
2018-08-21,504900\r
2018-08-23,507000\r
2018-08-28,500600\r
2018-09-12,504100\r
2018-09-17,374000\r
2018-09-20,302000\r
2018-09-25,337300\r
2018-09-27,355000\r
2018-10-05,361800\r
2018-10-20,342300\r
2018-10-22,324600\r
2018-11-24,442500\r
2018-12-11,503900\r
2019-01-03,434300\r
2019-01-25,214500\r
2019-02-04,469500\r
2019-02-12,424400\r
2019-02-14,416100\r
2019-02-17,340400\r
2019-02-19,374900\r
2019-02-22,281500\r
2019-02-24,362600\r
2019-02-27,336600\r
2019-03-16,503000\r
2019-03-21,289900\r
2019-03-24,255600\r
2019-03-26,308800\r
2019-03-29,410900\r
2019-03-31,260000\r
2019-04-15,222500\r
2019-04-18,199500\r
2019-04-20,265800\r
2019-04-30,294100\r
2019-05-13,367400\r
2019-05-15,404900\r
2019-05-23,263400\r
2019-06-02,298100\r
2019-06-04,361700\r
2019-06-17,515900\r
2019-06-24,425500\r
2019-06-27,429300\r
2019-06-29,445600\r
2019-07-02,550000\r
2019-07-04,529400\r
2019-07-07,535300\r
2019-07-09,515600\r
2019-07-17,554000\r
2019-08-03,481600\r
2019-08-08,434800\r
2019-08-23,496000\r
2019-08-26,519900\r
2019-08-28,484500\r
2019-08-31,479500\r
2019-09-07,465900\r
2019-09-15,492600\r
2019-09-17,459600\r
2019-09-20,494300\r
2019-11-16,409800\r
2019-12-06,463200\r
2019-12-19,428800\r
2020-01-20,421400\r
2020-02-07,432500\r
2020-02-22,284900\r
2020-02-24,331400\r
2020-03-18,246800\r
2020-03-20,200000\r
2020-03-23,407500\r
2020-03-28,499000\r
2020-04-04,410500\r
2020-04-09,379000\r
2020-04-12,420800\r
2020-04-14,312100\r
2020-04-17,255300\r
2020-04-22,267000\r
2020-04-24,249300\r
2020-05-07,241700\r
2020-05-09,215500\r
2020-05-17,441300\r
2020-05-19,361400\r
2020-05-27,465600\r
2020-05-29,426100\r
2020-06-01,466500\r
2020-06-23,468900\r
2020-07-08,488200\r
2020-07-13,480300\r
2020-07-31,482400\r
2020-08-05,485700\r
2020-08-07,461900\r
2020-08-10,481800\r
2020-08-15,429800\r
2020-08-20,473400\r
2020-08-27,498200\r
2020-09-04,437000\r
2020-09-09,255200\r
2020-09-16,295900\r
2020-10-31,232000\r
2020-11-05,253100\r
2020-11-15,237200\r
2020-11-18,248200\r
2020-11-28,257100\r
2020-12-10,256200\r
2021-02-21,393900\r
2021-02-23,459900\r
2021-02-28,485100\r
2021-03-20,195300\r
2021-03-23,207100\r
2021-03-25,206300\r
2021-03-28,494500\r
2021-03-30,505900\r
2021-04-02,222000\r
2021-04-04,251800\r
2021-04-09,63500\r
2021-04-14,75200\r
2021-04-17,198100\r
2021-04-22,103300\r
2021-04-24,198800\r
2021-06-01,138000\r
2021-06-11,436200\r
2021-06-13,486200\r
2021-06-16,498800\r
2021-07-18,523000\r
2021-07-21,509800\r
2021-08-25,460200\r
2021-09-01,263300\r
2021-09-06,193500\r
2021-09-24,208000\r
2021-10-01,176200\r
2021-10-11,169900\r
2021-10-14,92800\r
2021-10-19,140700\r
2021-10-24,211300\r
2021-10-29,176300\r
2022-01-22,465800\r
2022-02-08,460000\r
2022-02-13,195900\r
2022-02-18,498000\r
2022-02-23,390200\r
2022-02-26,467200\r
2022-02-28,506100\r
2022-03-03,427600\r
2022-03-08,308200\r
2022-03-20,421200\r
2022-03-23,491800\r
2022-03-25,500000\r
2022-04-14,361000\r
2022-04-17,437500\r
2022-05-14,199300\r
2022-05-27,426100\r
2022-06-11,511600\r
2022-06-13,483900\r
2022-06-16,522800\r
2022-06-18,487900\r
2022-07-06,501300\r
2022-07-08,512200\r
2022-07-11,529100\r
2022-07-18,500500\r
2022-07-21,487800\r
2022-08-02,496400\r
2022-08-07,503200\r
2022-08-10,493000\r
2022-08-12,493900\r
2022-08-22,547200\r
2022-08-25,532500\r
2022-09-01,540100\r
2022-09-11,491800\r
2022-09-19,327000\r
2022-09-21,358100\r
2022-10-06,451100\r
2022-10-26,370000\r
2022-10-31,400300\r
2022-12-08,472400\r
2023-02-08,395900\r
2023-02-11,262600\r
2023-02-13,322600\r
2023-02-16,207800\r
2023-03-05,476200\r
2023-04-04,575000\r
2023-04-09,258400\r
2023-04-19,544400\r
2023-05-27,205200\r
2023-05-29,326500\r
2023-06-03,443800\r
2023-06-28,487300\r
2023-07-08,531100\r
2023-07-11,522200\r
2023-07-31,511400\r
2023-08-02,507900\r
2023-08-17,505800\r
2023-08-22,500700\r
`;export{r as default};
