const r=`date,value\r
2017-01-19,480400\r
2017-02-15,491300\r
2017-02-18,508800\r
2017-02-25,479200\r
2017-03-10,550800\r
2017-03-17,527700\r
2017-03-30,560500\r
2017-04-09,559900\r
2017-04-19,570200\r
2017-04-29,580500\r
2017-05-09,613700\r
2017-05-16,617900\r
2017-05-26,593000\r
2017-06-18,596900\r
2017-06-25,621500\r
2017-07-05,612300\r
2017-07-18,619900\r
2017-08-14,569900\r
2017-08-17,561900\r
2017-08-19,567100\r
2017-08-22,542300\r
2017-08-24,546500\r
2017-09-21,491300\r
2017-10-11,513000\r
2017-10-16,522000\r
2017-10-26,388800\r
2017-10-31,400500\r
2017-11-02,429300\r
2017-11-07,389200\r
2017-11-15,401300\r
2017-11-17,379500\r
2017-11-22,379200\r
2017-11-27,407600\r
2017-12-20,436600\r
2018-02-10,643400\r
2018-02-25,603500\r
2018-04-19,636800\r
2018-04-21,623700\r
2018-05-04,651500\r
2018-05-06,610600\r
2018-05-11,618300\r
2018-06-23,629400\r
2018-06-25,618100\r
2018-07-08,598600\r
2018-07-10,649500\r
2018-07-15,608400\r
2018-07-18,642400\r
2018-07-25,601000\r
2018-08-02,622700\r
2018-08-12,608100\r
2018-08-19,637500\r
2018-08-22,580600\r
2018-09-08,560100\r
2018-09-11,549300\r
2018-09-16,574800\r
2018-09-26,559500\r
2018-09-28,556800\r
2018-10-06,565000\r
2018-10-18,571400\r
2018-10-21,552900\r
2018-10-23,548200\r
2018-12-25,599600\r
2019-02-13,586300\r
2019-02-15,591300\r
2019-02-18,624700\r
2019-02-20,612100\r
2019-02-23,603100\r
2019-02-25,592500\r
2019-03-20,619800\r
2019-03-22,621800\r
2019-03-25,595500\r
2019-03-27,630100\r
2019-03-30,624600\r
2019-05-14,656200\r
2019-05-31,626000\r
2019-06-18,714400\r
2019-06-25,654000\r
2019-06-28,683700\r
2019-07-03,721500\r
2019-07-05,634600\r
2019-07-08,635100\r
2019-07-10,635600\r
2019-07-15,637500\r
2019-07-23,647500\r
2019-07-25,613900\r
2019-08-02,632300\r
2019-08-04,601000\r
2019-08-14,535600\r
2019-08-22,534700\r
2019-09-03,375500\r
2019-09-11,431700\r
2019-09-13,373000\r
2019-09-16,392100\r
2019-10-11,385400\r
2019-10-13,362600\r
2019-10-16,415200\r
2019-12-05,549500\r
2019-12-10,564900\r
2019-12-25,602900\r
2019-12-30,626100\r
2020-01-06,624400\r
2020-01-11,614900\r
2020-01-16,626600\r
2020-01-19,619100\r
2020-01-24,673100\r
2020-03-19,630000\r
2020-03-21,616500\r
2020-03-31,631400\r
2020-04-03,625500\r
2020-04-05,611400\r
2020-04-10,612500\r
2020-04-13,618000\r
2020-04-15,628100\r
2020-04-25,696900\r
2020-05-18,674000\r
2020-05-20,614900\r
2020-05-25,635400\r
2020-05-28,689300\r
2020-06-02,681800\r
2020-07-09,606800\r
2020-07-12,670700\r
2020-07-19,635300\r
2020-07-24,713400\r
2020-07-27,665700\r
2020-07-29,653800\r
2020-08-06,660300\r
2020-08-08,678800\r
2020-08-11,674100\r
2020-09-05,639900\r
2020-09-12,635700\r
2020-09-15,620100\r
2020-09-17,625600\r
2020-11-06,609300\r
2020-11-21,613000\r
2020-11-29,627500\r
2021-01-08,612600\r
2021-01-10,603000\r
2021-01-18,614000\r
2021-02-17,626000\r
2021-02-19,643600\r
2021-02-24,626000\r
2021-02-27,632200\r
2021-03-01,631600\r
2021-03-06,632000\r
2021-03-09,618500\r
2021-03-24,648000\r
2021-03-29,620500\r
2021-03-31,616700\r
2021-04-03,625500\r
2021-04-08,650700\r
2021-04-15,633900\r
2021-04-23,641500\r
2021-05-08,662100\r
2021-05-28,629700\r
2021-05-30,659000\r
2021-06-12,626600\r
2021-06-14,620500\r
2021-07-19,671300\r
2021-07-22,699000\r
2021-07-29,612700\r
2021-08-11,607800\r
2021-08-21,617700\r
2021-08-26,607200\r
2021-08-31,677100\r
2021-09-05,627900\r
2021-09-22,613900\r
2021-09-30,611100\r
2021-10-10,594800\r
2021-10-12,593100\r
2021-10-15,619800\r
2021-11-09,597200\r
2021-11-19,585200\r
2021-12-14,605100\r
2021-12-16,603700\r
2021-12-19,613700\r
2021-12-21,610500\r
2022-01-13,603100\r
2022-01-15,614000\r
2022-01-18,605700\r
2022-01-23,616100\r
2022-01-25,612900\r
2022-01-28,589500\r
2022-02-09,617100\r
2022-02-27,629100\r
2022-03-01,678100\r
2022-03-06,624800\r
2022-03-24,638200\r
2022-04-10,599300\r
2022-04-15,614300\r
2022-05-15,675200\r
2022-05-28,622200\r
2022-05-30,618600\r
2022-06-02,620300\r
2022-06-14,607900\r
2022-06-17,595200\r
2022-06-19,625500\r
2022-06-29,647200\r
2022-07-02,625600\r
2022-07-12,664400\r
2022-07-14,642900\r
2022-07-24,638000\r
2022-08-01,660700\r
2022-08-03,662200\r
2022-08-06,635800\r
2022-08-08,615400\r
2022-08-11,597000\r
2022-08-13,597700\r
2022-09-12,440600\r
2022-09-20,424700\r
2022-09-22,401100\r
2022-10-05,420500\r
2022-11-11,416200\r
2022-12-06,438300\r
2023-02-09,535200\r
2023-02-12,527400\r
2023-02-14,522500\r
2023-03-04,532900\r
2023-04-05,599800\r
2023-04-08,615100\r
2023-05-03,635600\r
2023-05-30,644300\r
2023-06-04,640200\r
2023-06-07,630800\r
2023-06-14,638300\r
2023-06-24,616600\r
2023-07-07,639300\r
2023-07-09,546500\r
2023-07-14,646600\r
2023-08-08,608100\r
2023-08-21,490800\r
2023-08-23,492800\r
2023-09-05,328200\r
2023-09-07,378400\r
2023-09-10,324200\r
2023-09-20,368500\r
2023-09-25,363700\r
2023-10-02,351100\r
2023-10-05,378900\r
2023-10-07,333500\r
2023-10-10,380500\r
`;export{r as default};
