const r=`date,value\r
2017-02-11,321700\r
2017-02-18,305900\r
2017-02-21,318100\r
2017-03-10,331500\r
2017-03-13,453400\r
2017-03-23,453200\r
2017-03-30,514900\r
2017-04-02,514900\r
2017-04-09,514800\r
2017-04-12,531100\r
2017-04-19,441600\r
2017-04-22,417200\r
2017-04-29,414600\r
2017-05-02,435900\r
2017-06-18,483400\r
2017-06-21,478900\r
2017-06-28,484600\r
2017-07-01,433700\r
2017-08-20,348800\r
2017-08-22,348800\r
2017-08-25,412200\r
2017-08-27,364000\r
2017-10-11,252000\r
2017-10-14,259900\r
2017-10-16,259900\r
2017-10-19,245600\r
2017-10-21,245600\r
2017-10-24,257400\r
2017-10-26,273200\r
2017-10-31,264500\r
2017-11-05,311800\r
2017-11-13,300100\r
2017-11-15,300100\r
2017-11-18,263200\r
2017-11-23,263200\r
2018-01-17,356100\r
2018-01-19,356100\r
2018-01-22,356100\r
2018-01-24,361100\r
2018-01-27,361100\r
2018-03-20,445700\r
2018-03-25,445700\r
2018-03-30,445700\r
2018-04-17,464500\r
2018-04-19,510600\r
2018-04-22,510600\r
2018-04-24,504200\r
2018-04-27,504200\r
2018-05-04,485100\r
2018-05-07,485100\r
2018-05-19,500200\r
2018-05-22,500200\r
2018-05-24,500200\r
2018-06-21,433800\r
2018-06-23,466300\r
2018-06-26,491000\r
2018-06-28,478200\r
2018-07-01,468300\r
2018-07-03,483700\r
2018-07-08,467600\r
2018-07-11,468500\r
2018-07-13,473300\r
2018-07-16,478500\r
2018-07-18,469400\r
2018-07-21,479300\r
2018-07-23,487800\r
2018-07-26,501100\r
2018-07-31,482200\r
2018-08-02,478800\r
2018-08-05,437300\r
2018-08-07,445600\r
2018-08-10,445600\r
2018-08-12,445600\r
2018-08-15,396800\r
2018-09-01,351300\r
2018-09-04,348200\r
2018-09-09,352900\r
2018-09-11,368800\r
2018-09-14,370400\r
2018-09-16,370400\r
2018-09-24,219300\r
2018-09-26,318900\r
2018-09-29,295500\r
2018-10-01,295500\r
2018-10-04,296600\r
2018-10-09,284700\r
2018-10-14,311500\r
2018-10-16,276500\r
2018-10-19,276200\r
2018-10-21,271000\r
2018-10-24,232300\r
2018-11-15,254900\r
2018-11-18,259800\r
2018-11-20,255600\r
2018-12-10,364500\r
2018-12-20,364500\r
2019-01-17,304700\r
2019-01-19,304700\r
2019-01-22,105100\r
2019-01-24,40300\r
2019-01-27,242800\r
2019-02-03,19400\r
2019-02-13,260800\r
2019-02-16,260800\r
2019-02-18,260800\r
2019-02-21,260800\r
2019-02-23,266200\r
2019-02-26,204900\r
2019-03-03,211200\r
2019-03-08,211200\r
2019-03-10,215200\r
2019-03-13,322300\r
2019-03-23,359600\r
2019-03-25,341300\r
2019-03-28,376400\r
2019-03-30,370000\r
2019-04-04,370300\r
2019-04-07,419400\r
2019-04-09,434100\r
2019-04-12,435200\r
2019-04-14,412300\r
2019-04-19,383800\r
2019-04-22,403600\r
2019-04-27,400300\r
2019-05-12,446200\r
2019-05-14,445600\r
2019-05-19,445600\r
2019-05-24,457700\r
2019-05-27,457700\r
2019-06-01,478900\r
2019-06-03,478900\r
2019-06-06,481500\r
2019-06-13,480200\r
2019-06-16,365900\r
2019-06-18,467600\r
2019-06-21,467600\r
2019-06-26,437400\r
2019-06-28,437400\r
2019-07-01,447800\r
2019-07-03,437600\r
2019-07-06,432000\r
2019-07-08,416600\r
2019-07-13,366800\r
2019-07-16,387300\r
2019-07-23,347100\r
2019-07-28,421600\r
2019-08-22,339600\r
2019-08-25,339600\r
2019-08-27,339600\r
2019-08-30,275100\r
2019-09-01,275600\r
2019-09-04,292900\r
2019-09-06,238800\r
2019-09-11,250300\r
2019-09-16,270400\r
2019-09-19,245200\r
2019-09-21,251500\r
2019-09-24,271000\r
2019-10-01,261300\r
2020-01-19,267100\r
2020-01-22,267100\r
2020-01-24,371900\r
2020-02-01,371900\r
2020-02-03,371900\r
2020-02-06,373300\r
2020-02-18,274600\r
2020-02-21,274600\r
2020-03-19,100\r
2020-03-24,328700\r
2020-03-27,328400\r
2020-03-29,328400\r
2020-04-01,369900\r
2020-04-03,369900\r
2020-04-08,369900\r
2020-04-11,395600\r
2020-04-13,422700\r
2020-04-16,422700\r
2020-04-18,421900\r
2020-04-23,421900\r
2020-04-26,421900\r
2020-05-18,346900\r
2020-05-21,346900\r
2020-05-23,316300\r
2020-05-26,342900\r
2020-05-28,327200\r
2020-05-31,377400\r
2020-06-02,359600\r
2020-06-05,403200\r
2020-06-07,403200\r
2020-07-12,282100\r
2020-07-15,282100\r
2020-07-17,302500\r
2020-07-20,302500\r
2020-07-22,436400\r
2020-07-27,436400\r
2020-07-30,443300\r
2020-08-01,443300\r
2020-08-04,446300\r
2020-08-06,389700\r
2020-08-09,361300\r
2020-08-11,328700\r
2020-08-14,328500\r
2020-09-08,290600\r
2020-09-10,239700\r
2020-09-13,278400\r
2020-09-15,278400\r
2020-09-20,297500\r
2020-09-25,287200\r
2020-09-28,345600\r
2020-11-04,164400\r
2020-11-09,141200\r
2020-11-12,141200\r
2020-11-14,141200\r
2020-11-19,296500\r
2020-11-22,296700\r
2020-11-27,296700\r
2020-11-29,241600\r
2020-12-12,346700\r
2020-12-17,339700\r
2021-01-08,411100\r
2021-01-11,411100\r
2021-01-18,411100\r
2021-02-27,495200\r
2021-03-02,496400\r
2021-03-04,501700\r
2021-03-09,501700\r
2021-03-17,431800\r
2021-03-19,440700\r
2021-03-22,472800\r
2021-03-24,463100\r
2021-03-27,463100\r
2021-03-29,482300\r
2021-04-01,482300\r
2021-04-03,482700\r
2021-04-06,443600\r
2021-04-08,436500\r
2021-04-11,391000\r
2021-04-13,431900\r
2021-04-16,459000\r
2021-04-18,459000\r
2021-04-21,461200\r
2021-04-23,426500\r
2021-04-28,468900\r
2021-05-03,493800\r
2021-05-08,494600\r
2021-05-11,400300\r
2021-05-13,400300\r
2021-05-16,399600\r
2021-05-31,435300\r
2021-06-05,434200\r
2021-06-07,434200\r
2021-06-10,434200\r
2021-07-17,427600\r
2021-07-20,438600\r
2021-07-22,415700\r
2021-07-25,415700\r
2021-07-30,414200\r
2021-08-01,379300\r
2021-08-11,517600\r
2021-08-14,519800\r
2021-08-24,433300\r
2021-08-26,478600\r
2021-08-29,478900\r
2021-08-31,478900\r
2021-09-03,478900\r
2021-09-05,431200\r
2021-09-08,362300\r
2021-09-10,348500\r
2021-09-23,340000\r
2021-09-28,340000\r
2021-09-30,345600\r
2021-10-03,345600\r
2021-10-08,322500\r
2021-10-10,320900\r
2021-10-15,318300\r
2021-10-23,315500\r
2021-10-28,322800\r
2021-11-04,298700\r
2021-11-09,321200\r
2021-11-17,309200\r
2021-11-19,354200\r
2021-11-24,350600\r
2021-12-17,327100\r
2022-01-11,149900\r
2022-01-13,347400\r
2022-01-21,334000\r
2022-01-23,378800\r
2022-01-31,349100\r
2022-03-07,383000\r
2022-03-09,377200\r
2022-03-12,377200\r
2022-03-14,431300\r
2022-03-22,461200\r
2022-03-24,444100\r
2022-03-27,439700\r
2022-04-01,439700\r
2022-04-11,421400\r
2022-04-13,421400\r
2022-04-16,489300\r
2022-04-21,460700\r
2022-04-26,470800\r
2022-05-01,405700\r
2022-05-03,472000\r
2022-05-06,444700\r
2022-05-08,474200\r
2022-05-11,436600\r
2022-05-13,436600\r
2022-05-16,423700\r
2022-05-21,431800\r
2022-05-28,431000\r
2022-05-31,430100\r
2022-06-02,518000\r
2022-06-05,518000\r
2022-06-07,518000\r
2022-06-10,546900\r
2022-06-12,518400\r
2022-06-15,539200\r
2022-06-17,549800\r
2022-06-27,537000\r
2022-07-02,541600\r
2022-07-05,541600\r
2022-07-07,449400\r
2022-07-10,450700\r
2022-07-12,434300\r
2022-07-15,432800\r
2022-07-17,426000\r
2022-07-20,438000\r
2022-08-09,334600\r
2022-08-11,353400\r
2022-08-24,267400\r
2022-08-26,267400\r
2022-08-29,267400\r
2022-09-03,267400\r
2022-09-18,275200\r
2022-09-20,282100\r
2022-09-30,263600\r
2022-10-08,254900\r
2022-10-18,254900\r
2022-11-12,230800\r
2022-11-17,231200\r
2022-11-19,255700\r
2022-11-22,255700\r
2022-11-29,271300\r
2022-12-09,272500\r
2023-01-03,281500\r
2023-01-11,317200\r
2023-01-13,316300\r
2023-01-16,401300\r
2023-01-21,335600\r
2023-02-10,394200\r
2023-02-12,388300\r
2023-02-15,384600\r
2023-02-20,384600\r
2023-02-27,370400\r
2023-03-02,370400\r
2023-03-04,386900\r
2023-04-21,433400\r
2023-04-23,433400\r
2023-05-01,433400\r
2023-05-26,423400\r
2023-05-28,462900\r
2023-05-31,457400\r
2023-06-02,457400\r
2023-06-05,457400\r
2023-06-07,477200\r
2023-06-10,467400\r
2023-06-15,492100\r
2023-06-22,462100\r
2023-06-25,397300\r
2023-07-10,405400\r
2023-07-15,448400\r
2023-07-17,437700\r
2023-07-20,368200\r
2023-08-09,354600\r
2023-08-19,354100\r
2023-09-03,324900\r
2023-09-05,353300\r
2023-09-08,333300\r
2023-09-10,328800\r
2023-09-13,328800\r
2023-09-15,325700\r
2023-09-18,299300\r
2023-09-30,353300\r
2023-10-03,330600\r
2023-10-05,321900\r
2023-10-08,319700\r
2023-10-10,300400\r
`;export{r as default};
