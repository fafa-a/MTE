const r=`date,value\r
2017-01-16,447200\r
2017-01-26,495400\r
2017-02-25,586900\r
2017-03-14,598500\r
2017-03-17,538700\r
2017-03-27,564900\r
2017-04-03,586700\r
2017-04-06,552800\r
2017-04-23,599900\r
2017-05-16,656100\r
2017-05-26,607600\r
2017-06-02,587500\r
2017-07-05,587800\r
2017-08-26,564500\r
2017-08-29,564900\r
2017-10-05,524100\r
2017-10-15,521600\r
2017-10-18,520500\r
2017-11-22,489400\r
2018-02-22,549900\r
2018-02-25,559400\r
2018-03-14,581800\r
2018-03-24,584800\r
2018-04-18,594400\r
2018-05-06,583500\r
2018-05-11,601600\r
2018-05-18,577900\r
2018-06-20,608800\r
2018-06-22,579800\r
2018-06-27,613200\r
2018-07-02,602700\r
2018-08-04,602600\r
2018-08-19,587400\r
2018-08-26,587200\r
2018-09-08,563000\r
2018-09-25,559900\r
2018-09-28,555800\r
2018-09-30,550600\r
2018-10-05,548900\r
2018-10-10,537300\r
2018-10-13,536800\r
2018-10-15,537300\r
2018-10-18,531200\r
2018-10-20,525400\r
2018-10-23,522900\r
2019-02-05,583900\r
2019-02-15,573100\r
2019-02-17,584400\r
2019-02-22,580400\r
2019-02-25,562400\r
2019-02-27,571500\r
2019-03-19,560000\r
2019-03-22,581900\r
2019-03-24,573400\r
2019-03-29,598000\r
2019-04-11,591800\r
2019-05-01,587100\r
2019-05-13,616400\r
2019-05-23,600400\r
2019-05-31,606000\r
2019-06-27,616800\r
2019-06-30,612200\r
2019-07-02,617400\r
2019-07-05,608000\r
2019-07-07,607000\r
2019-07-10,603200\r
2019-07-17,608300\r
2019-07-25,597200\r
2019-08-04,590900\r
2019-08-24,560500\r
2019-08-26,563200\r
2019-09-03,543200\r
2019-09-10,547900\r
2019-09-13,519300\r
2019-09-15,543700\r
2019-09-18,534200\r
2019-09-20,545600\r
2019-10-13,503400\r
2020-01-16,556900\r
2020-01-21,562300\r
2020-01-23,560600\r
2020-02-07,554000\r
2020-02-15,558900\r
2020-03-13,577400\r
2020-03-23,628000\r
2020-03-26,580300\r
2020-03-28,578100\r
2020-03-31,583000\r
2020-04-02,584100\r
2020-04-05,584800\r
2020-04-07,595700\r
2020-04-10,610100\r
2020-04-15,594600\r
2020-04-20,601600\r
2020-04-22,615600\r
2020-05-07,588100\r
2020-05-17,607000\r
2020-05-20,603200\r
2020-05-27,617800\r
2020-05-30,624100\r
2020-06-01,602900\r
2020-06-24,602800\r
2020-07-04,597200\r
2020-07-06,583700\r
2020-07-09,602400\r
2020-07-19,595000\r
2020-07-29,589300\r
2020-07-31,576400\r
2020-08-05,580700\r
2020-08-08,572900\r
2020-08-20,567500\r
2020-09-04,535300\r
2020-09-07,549600\r
2020-09-09,522500\r
2020-09-14,535300\r
2020-09-17,541800\r
2020-11-06,427300\r
2020-11-18,502500\r
2020-11-21,507400\r
2020-11-28,489900\r
2021-02-21,557500\r
2021-02-24,574300\r
2021-03-01,561700\r
2021-03-06,572500\r
2021-03-08,598200\r
2021-03-28,591600\r
2021-03-31,564500\r
2021-04-02,643900\r
2021-04-27,630400\r
2021-05-30,596200\r
2021-06-01,603900\r
2021-06-14,611100\r
2021-06-16,615800\r
2021-07-19,589400\r
2021-07-21,603100\r
2021-09-02,590700\r
2021-09-07,578300\r
2021-09-22,568800\r
2021-09-24,574200\r
2021-10-14,570900\r
2021-10-19,568300\r
2021-10-24,563700\r
2022-01-15,557400\r
2022-01-25,551200\r
2022-02-09,566100\r
2022-02-26,553900\r
2022-03-06,560400\r
2022-03-08,579400\r
2022-03-21,629500\r
2022-03-23,590500\r
2022-03-26,567500\r
2022-03-28,601000\r
2022-04-15,589700\r
2022-04-17,600600\r
2022-04-22,611200\r
2022-04-27,568600\r
2022-05-07,606600\r
2022-06-11,590200\r
2022-06-16,617000\r
2022-06-19,608000\r
2022-06-21,582500\r
2022-07-06,605400\r
2022-07-11,605400\r
2022-07-14,606700\r
2022-07-16,611700\r
2022-07-19,609600\r
2022-07-24,612300\r
2022-08-03,592400\r
2022-08-08,592500\r
2022-08-10,596400\r
2022-08-13,584800\r
2022-08-25,587300\r
2022-09-12,572700\r
2022-09-22,561300\r
2022-10-09,561500\r
2022-10-19,531200\r
2022-10-22,531400\r
2022-11-13,514700\r
2023-02-09,544500\r
2023-02-14,566100\r
2023-03-01,591500\r
2023-03-18,605900\r
2023-04-05,619100\r
2023-04-20,597700\r
2023-05-15,605400\r
2023-05-27,594700\r
2023-06-01,598900\r
2023-06-06,584700\r
2023-06-14,609300\r
2023-06-24,607400\r
`;export{r as default};
