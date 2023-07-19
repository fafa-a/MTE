const r=`date,value\r
2017-01-26,344200\r
2017-01-29,344200\r
2017-02-15,402200\r
2017-02-18,402200\r
2017-02-25,457700\r
2017-03-17,536500\r
2017-03-27,536500\r
2017-04-06,578800\r
2017-04-09,578800\r
2017-05-16,625100\r
2017-05-19,624700\r
2017-05-26,636600\r
2017-06-05,636300\r
2017-07-05,636300\r
2017-08-14,610100\r
2017-08-17,610100\r
2017-08-22,610100\r
2017-08-24,610200\r
2017-08-27,576400\r
2017-08-29,576400\r
2017-09-01,576400\r
2017-09-03,576400\r
2017-09-08,527600\r
2017-09-13,527700\r
2017-09-16,527700\r
2017-10-08,396000\r
2017-10-11,396000\r
2017-10-13,397700\r
2017-10-16,397700\r
2017-10-18,397700\r
2017-10-23,381300\r
2017-10-26,341200\r
2017-10-28,341200\r
2017-10-31,341200\r
2017-11-07,311500\r
2017-11-15,311500\r
2017-11-17,316200\r
2017-11-20,312700\r
2017-11-22,316800\r
2017-11-25,316800\r
2017-11-27,316800\r
2017-11-30,304100\r
2018-01-31,543900\r
2018-02-10,543900\r
2018-02-15,590900\r
2018-02-25,607100\r
2018-03-02,611800\r
2018-03-07,611800\r
2018-03-22,621800\r
2018-03-30,621800\r
2018-04-06,613800\r
2018-04-09,613800\r
2018-04-21,634900\r
2018-04-24,634900\r
2018-04-26,634900\r
2018-05-11,638700\r
2018-05-21,641000\r
2018-05-24,637500\r
2018-06-20,633600\r
2018-06-23,633600\r
2018-06-25,635800\r
2018-07-08,623100\r
2018-07-10,623100\r
2018-07-15,627500\r
2018-07-18,627500\r
2018-07-23,627500\r
2018-07-25,628600\r
2018-07-30,620600\r
2018-08-02,620600\r
2018-08-04,625900\r
2018-08-12,624100\r
2018-08-19,617500\r
2018-08-22,617500\r
2018-08-27,617500\r
2018-09-03,587200\r
2018-09-08,602300\r
2018-09-11,602300\r
2018-09-16,598400\r
2018-09-18,598400\r
2018-09-23,579900\r
2018-09-26,579900\r
2018-09-28,579900\r
2018-10-03,580800\r
2018-10-06,567500\r
2018-10-13,567800\r
2018-10-16,559900\r
2018-10-21,559900\r
2018-10-23,561400\r
2018-11-12,549100\r
2018-11-15,549100\r
2018-11-17,556400\r
2018-11-22,556400\r
2018-11-27,547700\r
2018-12-07,541000\r
2019-01-26,502100\r
2019-02-03,214300\r
2019-02-15,523600\r
2019-02-18,523600\r
2019-02-20,530700\r
2019-02-23,530700\r
2019-02-25,523800\r
2019-02-28,523800\r
2019-03-12,523100\r
2019-03-22,546600\r
2019-03-25,546600\r
2019-03-27,559300\r
2019-03-30,559300\r
2019-04-01,558800\r
2019-04-09,558400\r
2019-05-01,582500\r
2019-05-06,596000\r
2019-05-09,596000\r
2019-05-11,596000\r
2019-05-14,596000\r
2019-05-16,595700\r
2019-05-29,629100\r
2019-05-31,629100\r
2019-07-05,608300\r
2019-07-08,608300\r
2019-07-10,622900\r
2019-07-13,622900\r
2019-07-15,615500\r
2019-07-20,615500\r
2019-07-23,633900\r
2019-07-25,620600\r
2019-07-28,626700\r
2019-08-02,601400\r
2019-08-04,603000\r
2019-08-09,593300\r
2019-08-14,587300\r
2019-08-17,587300\r
2019-08-22,593200\r
2019-08-24,576800\r
2019-08-29,578900\r
2019-09-03,569700\r
2019-09-06,569700\r
2019-09-08,574400\r
2019-09-11,536400\r
2019-09-13,542400\r
2019-09-16,542400\r
2019-09-18,542400\r
2019-09-21,542400\r
2019-09-26,527500\r
2019-10-08,388900\r
2019-10-11,388900\r
2019-10-13,394700\r
2019-10-26,370600\r
2020-02-05,579200\r
2020-02-10,575300\r
2020-02-15,583800\r
2020-02-18,583800\r
2020-02-20,576300\r
2020-02-23,578800\r
2020-03-11,602100\r
2020-03-21,611100\r
2020-03-24,611100\r
2020-03-26,605800\r
2020-03-31,612500\r
2020-04-03,612500\r
2020-04-05,603200\r
2020-04-08,605500\r
2020-04-10,603500\r
2020-04-15,610200\r
2020-04-25,618200\r
2020-05-05,628900\r
2020-05-08,628900\r
2020-05-18,628700\r
2020-05-20,637600\r
2020-05-25,626700\r
2020-05-28,626700\r
2020-05-30,627500\r
2020-06-12,626500\r
2020-06-14,627700\r
2020-06-24,626600\r
2020-07-04,626600\r
2020-07-07,620000\r
2020-07-09,626200\r
2020-07-19,624000\r
2020-07-22,624700\r
2020-07-24,618000\r
2020-07-27,621500\r
2020-07-29,620700\r
2020-08-03,620700\r
2020-08-06,632000\r
2020-08-08,619500\r
2020-08-18,607100\r
2020-08-21,607100\r
2020-08-23,607100\r
2020-09-02,565700\r
2020-09-05,565700\r
2020-09-07,565700\r
2020-09-10,565700\r
2020-09-12,567000\r
2020-09-17,543000\r
2020-09-30,524800\r
2020-11-11,521100\r
2020-11-14,521100\r
2020-11-21,529400\r
2020-11-26,524400\r
2020-11-29,528200\r
2021-02-19,619000\r
2021-02-24,630900\r
2021-02-27,632800\r
2021-03-01,617000\r
2021-03-04,632200\r
2021-03-09,615400\r
2021-03-31,628100\r
2021-04-03,627900\r
2021-04-05,630200\r
2021-04-08,630200\r
2021-04-15,609000\r
2021-04-20,562700\r
2021-04-23,562700\r
2021-06-09,597800\r
2021-06-14,619500\r
2021-06-22,619100\r
2021-07-19,638600\r
2021-07-22,638600\r
2021-08-28,591200\r
2021-08-31,591200\r
2021-09-05,591200\r
2021-09-12,570800\r
2021-09-17,570900\r
2021-09-22,568500\r
2021-10-07,508000\r
2021-10-12,516000\r
2021-10-15,516000\r
2021-10-17,516000\r
2021-10-20,512300\r
2021-10-27,422400\r
2022-01-25,531200\r
2022-02-09,547900\r
2022-03-01,583000\r
2022-03-09,583000\r
2022-03-26,600800\r
2022-04-05,624600\r
2022-04-10,624100\r
2022-05-15,612200\r
2022-07-14,626900\r
2022-07-17,626900\r
2022-07-24,626900\r
2022-08-03,603400\r
2022-08-06,603400\r
2022-08-08,603400\r
2022-08-11,603400\r
2022-08-13,603400\r
2022-08-28,574100\r
2022-09-05,574100\r
2022-09-22,490700\r
2022-10-02,490700\r
2022-10-05,442700\r
2022-10-07,442700\r
2022-10-12,442700\r
2022-11-01,344900\r
2022-11-06,354700\r
2022-11-11,338700\r
2022-11-16,330700\r
2023-02-04,410300\r
2023-02-09,426100\r
2023-02-12,426100\r
2023-02-14,426100\r
2023-02-17,416500\r
2023-02-19,416500\r
2023-02-24,462000\r
2023-03-01,462000\r
2023-03-16,497000\r
2023-04-05,541500\r
2023-04-08,541500\r
2023-04-10,541500\r
2023-05-05,591200\r
2023-05-10,591200\r
2023-06-24,631900\r
2023-06-27,631900\r
`;export{r as default};
