const r=`date,value\r
2017-01-26,653300\r
2017-02-25,769500\r
2017-03-17,821400\r
2017-03-27,790900\r
2017-04-23,803300\r
2017-05-16,807900\r
2017-05-26,811700\r
2017-06-02,766100\r
2017-06-25,804600\r
2017-07-07,786000\r
2017-07-17,791700\r
2017-08-04,788900\r
2017-08-14,791000\r
2017-08-19,766000\r
2017-08-21,771100\r
2017-08-24,747100\r
2017-08-26,722600\r
2017-08-29,724100\r
2017-09-05,698700\r
2017-09-20,700600\r
2017-09-23,702000\r
2017-10-05,669600\r
2017-10-10,667800\r
2017-10-13,665900\r
2017-10-15,630500\r
2017-10-18,623500\r
2017-10-25,625200\r
2017-11-17,607200\r
2017-11-22,572700\r
2017-12-09,595600\r
2018-02-25,796700\r
2018-03-14,783800\r
2018-04-01,831300\r
2018-04-21,818100\r
2018-04-26,799200\r
2018-05-11,803200\r
2018-06-20,806200\r
2018-06-25,806600\r
2018-07-07,795200\r
2018-07-25,804800\r
2018-08-01,789400\r
2018-08-04,790800\r
2018-08-06,798000\r
2018-08-11,776500\r
2018-08-19,791500\r
2018-08-21,783400\r
2018-09-03,768400\r
2018-09-08,780400\r
2018-09-20,769200\r
2018-09-23,766100\r
2018-09-28,763700\r
2018-10-03,757600\r
2018-10-05,762800\r
2018-10-23,737900\r
2018-11-24,752800\r
2018-11-29,727500\r
2019-01-16,780100\r
2019-02-12,800300\r
2019-02-15,773200\r
2019-02-17,766300\r
2019-02-20,792700\r
2019-02-22,775700\r
2019-02-27,774100\r
2019-03-22,784800\r
2019-03-24,770700\r
2019-03-27,777800\r
2019-03-29,778900\r
2019-04-01,640700\r
2019-04-08,815500\r
2019-04-13,780500\r
2019-05-01,794700\r
2019-05-06,815100\r
2019-05-13,788500\r
2019-05-23,789100\r
2019-05-31,799100\r
2019-06-02,801600\r
2019-06-17,780200\r
2019-06-27,776200\r
2019-06-30,824000\r
2019-07-05,809400\r
2019-07-12,800200\r
2019-07-15,800400\r
2019-07-22,764000\r
2019-07-25,799600\r
2019-08-04,771100\r
2019-08-09,789400\r
2019-08-14,797500\r
2019-08-16,758100\r
2019-08-24,717100\r
2019-08-29,700500\r
2019-09-13,662000\r
2019-09-15,661700\r
2019-09-18,660800\r
2019-09-20,674200\r
2019-10-08,597400\r
2019-10-13,625800\r
2020-01-06,760700\r
2020-01-11,783400\r
2020-01-16,765700\r
2020-02-05,763300\r
2020-02-15,748500\r
2020-02-20,742400\r
2020-02-22,744700\r
2020-03-08,764700\r
2020-03-18,790200\r
2020-03-21,784600\r
2020-04-05,797200\r
2020-04-10,820200\r
2020-05-07,774900\r
2020-05-20,819100\r
2020-05-22,780000\r
2020-05-25,795400\r
2020-05-27,790400\r
2020-06-19,770700\r
2020-06-21,765600\r
2020-07-04,796000\r
2020-07-09,793500\r
2020-07-14,805200\r
2020-07-19,783000\r
2020-07-21,749100\r
2020-07-24,786900\r
2020-07-29,807000\r
2020-07-31,746800\r
2020-08-05,757900\r
2020-08-08,792100\r
2020-08-10,781500\r
2020-08-15,740300\r
2020-08-20,730500\r
2020-08-25,697900\r
2020-09-02,691700\r
2020-09-04,668100\r
2020-09-14,685600\r
2020-09-17,682600\r
2020-11-08,647400\r
2020-11-11,659800\r
2020-11-18,631800\r
2020-11-21,672900\r
2020-11-23,630500\r
2020-11-26,655400\r
2021-02-06,837200\r
2021-02-14,817100\r
2021-02-19,792300\r
2021-02-24,802200\r
2021-03-01,778400\r
2021-03-23,788000\r
2021-03-28,808600\r
2021-03-31,826500\r
2021-04-02,820900\r
2021-04-15,831600\r
2021-05-27,815800\r
2021-05-30,793700\r
2021-06-09,797400\r
2021-06-11,786200\r
2021-06-16,791500\r
2021-07-19,788600\r
2021-07-29,805900\r
2021-08-10,800800\r
2021-08-20,795200\r
2021-08-23,786500\r
2021-08-28,705900\r
2021-09-22,660900\r
2021-09-24,653700\r
2021-10-14,626100\r
2021-10-17,617700\r
2021-10-27,607300\r
2021-12-16,693100\r
2021-12-21,701600\r
2022-01-15,780800\r
2022-01-22,779700\r
2022-01-25,774100\r
2022-01-27,782300\r
2022-02-09,785400\r
2022-02-26,787300\r
2022-03-08,807600\r
2022-03-23,772900\r
2022-04-05,821000\r
2022-04-10,812300\r
2022-04-17,789100\r
2022-05-15,790100\r
2022-05-17,802500\r
2022-06-01,796400\r
2022-06-06,804500\r
2022-06-16,782600\r
2022-06-19,792300\r
2022-06-29,777000\r
2022-07-06,773600\r
2022-07-11,769600\r
2022-07-14,775700\r
2022-07-16,734900\r
2022-07-19,735600\r
2022-07-21,706200\r
2022-07-24,704100\r
2022-07-26,696600\r
2022-07-29,688200\r
2022-07-31,678300\r
2022-08-03,665800\r
2022-08-10,649800\r
2022-08-13,632400\r
2022-08-28,539900\r
2022-08-30,540700\r
2022-09-04,527900\r
2022-09-12,504200\r
2022-09-19,476600\r
2022-09-22,486100\r
2022-10-04,475200\r
2022-10-09,467600\r
2022-10-22,463400\r
2022-10-24,453100\r
2022-10-27,467700\r
2022-11-11,448300\r
2022-11-13,454400\r
2022-11-16,452800\r
2023-02-06,465700\r
2023-02-11,471600\r
2023-02-14,477100\r
2023-02-16,468400\r
2023-02-19,471500\r
2023-02-26,461100\r
2023-03-01,479200\r
2023-03-16,515100\r
2023-03-28,540700\r
2023-04-05,556400\r
2023-04-07,560200\r
2023-04-20,560300\r
2023-05-27,634700\r
2023-05-30,628700\r
2023-07-09,678500\r
2023-07-14,694900\r
2023-07-29,701100\r
2023-07-31,682600\r
2023-08-08,694400\r
2023-08-18,668800\r
2023-08-20,673000\r
2023-08-23,667800\r
`;export{r as default};
