const r=`date,value\r
2017-02-22,459100\r
2017-02-25,463600\r
2017-03-07,446000\r
2017-03-17,566200\r
2017-03-27,565200\r
2017-04-23,587700\r
2017-05-03,587700\r
2017-05-16,588000\r
2017-05-23,588000\r
2017-05-26,592900\r
2017-06-02,576100\r
2017-06-05,576100\r
2017-06-12,591700\r
2017-06-15,592100\r
2017-06-22,589600\r
2017-06-25,584500\r
2017-07-02,582500\r
2017-07-05,588200\r
2017-07-07,583900\r
2017-07-10,583900\r
2017-07-12,583900\r
2017-07-17,565900\r
2017-07-22,558400\r
2017-07-27,581100\r
2017-08-04,582000\r
2017-08-06,582000\r
2017-08-11,557800\r
2017-08-14,578500\r
2017-08-19,577900\r
2017-08-21,577400\r
2017-08-24,574400\r
2017-08-26,569400\r
2017-08-29,570200\r
2017-09-03,562000\r
2017-09-20,552100\r
2017-09-23,548400\r
2017-09-28,563100\r
2017-10-03,551000\r
2017-10-05,503800\r
2017-10-08,506400\r
2017-10-10,500100\r
2017-10-13,501800\r
2017-10-15,491600\r
2017-10-18,480000\r
2017-10-25,462100\r
2017-10-28,448800\r
2017-10-30,462500\r
2017-11-07,429100\r
2017-11-17,430600\r
2017-11-19,456000\r
2017-11-22,442500\r
2017-11-24,442500\r
2017-11-27,442500\r
2017-11-29,452600\r
2018-02-25,542300\r
2018-02-27,542400\r
2018-03-02,542400\r
2018-03-14,554700\r
2018-03-19,583400\r
2018-03-22,583400\r
2018-04-01,569100\r
2018-04-18,578700\r
2018-04-21,593100\r
2018-04-23,593100\r
2018-04-26,587800\r
2018-05-06,587500\r
2018-05-11,587400\r
2018-05-18,587400\r
2018-05-21,587400\r
2018-06-20,577300\r
2018-06-22,577300\r
2018-06-25,591100\r
2018-06-27,583100\r
2018-07-02,586900\r
2018-07-07,578400\r
2018-07-10,576100\r
2018-07-12,575300\r
2018-07-15,566200\r
2018-07-17,566200\r
2018-07-20,567500\r
2018-07-22,565200\r
2018-07-25,571300\r
2018-07-27,576800\r
2018-07-30,578400\r
2018-08-01,582300\r
2018-08-04,568900\r
2018-08-06,576900\r
2018-08-11,570100\r
2018-08-16,579200\r
2018-08-19,585900\r
2018-08-21,569600\r
2018-08-26,580200\r
2018-08-31,568100\r
2018-09-03,548500\r
2018-09-08,578800\r
2018-09-10,578800\r
2018-09-13,578800\r
2018-09-20,568600\r
2018-09-23,571500\r
2018-09-25,566500\r
2018-09-28,575100\r
2018-09-30,565100\r
2018-10-03,555300\r
2018-10-05,559900\r
2018-10-23,529100\r
2018-10-25,563700\r
2018-10-30,563700\r
2018-11-04,544400\r
2019-02-12,535500\r
2019-02-15,545400\r
2019-02-17,539100\r
2019-02-20,538100\r
2019-02-22,540100\r
2019-02-25,540100\r
2019-02-27,540700\r
2019-03-12,563200\r
2019-03-22,558600\r
2019-03-24,551700\r
2019-03-27,555700\r
2019-03-29,551400\r
2019-04-01,542300\r
2019-04-08,542100\r
2019-04-13,534300\r
2019-05-01,531700\r
2019-05-06,564400\r
2019-05-11,564400\r
2019-05-13,540200\r
2019-05-16,540200\r
2019-05-23,527000\r
2019-06-02,579900\r
2019-06-12,579100\r
2019-06-17,558400\r
2019-06-22,560200\r
2019-06-25,560200\r
2019-06-27,567500\r
2019-06-30,567300\r
2019-07-02,567300\r
2019-07-05,581900\r
2019-07-07,581900\r
2019-07-10,579700\r
2019-07-12,580700\r
2019-07-15,589100\r
2019-07-17,589100\r
2019-07-22,587600\r
2019-07-25,587900\r
2019-08-01,592000\r
2019-08-04,580100\r
2019-08-09,586000\r
2019-08-11,575400\r
2019-08-14,584300\r
2019-08-16,577000\r
2019-08-21,574500\r
2019-08-24,582600\r
2019-08-26,573700\r
2019-08-29,577000\r
2019-08-31,571600\r
2019-09-03,560500\r
2019-09-05,560500\r
2019-09-13,547600\r
2019-09-15,541300\r
2019-09-18,526700\r
2019-09-20,541000\r
2019-10-08,488500\r
2019-10-13,488500\r
2019-10-25,472400\r
2019-10-30,496700\r
2019-11-04,493200\r
2019-11-09,493200\r
2020-02-20,523200\r
2020-02-22,539500\r
2020-03-01,539500\r
2020-03-08,561800\r
2020-03-11,578700\r
2020-03-13,562700\r
2020-03-18,565600\r
2020-03-21,564400\r
2020-03-28,563300\r
2020-03-31,558100\r
2020-04-05,553500\r
2020-04-07,592400\r
2020-04-10,572100\r
2020-04-12,572100\r
2020-04-15,572100\r
2020-04-25,575800\r
2020-05-07,563900\r
2020-05-17,563900\r
2020-05-20,567300\r
2020-05-22,552900\r
2020-05-25,564600\r
2020-05-27,570600\r
2020-05-30,570600\r
2020-06-14,556600\r
2020-06-19,577100\r
2020-06-21,582500\r
2020-06-24,582500\r
2020-06-26,582500\r
2020-07-01,582500\r
2020-07-04,569600\r
2020-07-09,609200\r
2020-07-11,609200\r
2020-07-14,584200\r
2020-07-19,592300\r
2020-07-21,585600\r
2020-07-24,572700\r
2020-07-26,577200\r
2020-07-29,578100\r
2020-07-31,570900\r
2020-08-03,570900\r
2020-08-05,555600\r
2020-08-08,567100\r
2020-08-10,563100\r
2020-08-15,562400\r
2020-08-20,560800\r
2020-08-23,553200\r
2020-08-25,529500\r
2020-09-02,499200\r
2020-09-04,492900\r
2020-09-07,456200\r
2020-09-12,451900\r
2020-09-14,461000\r
2020-09-17,456100\r
2020-09-19,464700\r
2020-11-11,370600\r
2020-11-18,390400\r
2020-11-21,376000\r
2020-11-23,376000\r
2020-11-26,376000\r
2021-02-11,520100\r
2021-02-14,520100\r
2021-02-19,520100\r
2021-03-23,553100\r
2021-03-26,553100\r
2021-03-28,579100\r
2021-03-31,579100\r
2021-04-02,579100\r
2021-04-05,598400\r
2021-04-07,581000\r
2021-04-15,593200\r
2021-04-17,597500\r
2021-04-20,597800\r
2021-04-22,597800\r
2021-05-27,593000\r
2021-05-30,593100\r
2021-06-09,572400\r
2021-06-11,581800\r
2021-06-14,574000\r
2021-06-16,578600\r
2021-06-19,574400\r
2021-06-21,577600\r
2021-06-26,564700\r
2021-07-01,551700\r
2021-07-19,561900\r
2021-07-21,546300\r
2021-07-26,546300\r
2021-07-29,572600\r
2021-08-05,570500\r
2021-08-10,566000\r
2021-08-13,566000\r
2021-08-18,576400\r
2021-08-20,566400\r
2021-08-23,573000\r
2021-08-25,554900\r
2021-08-28,550300\r
2021-08-30,550400\r
2021-09-04,542900\r
2021-09-07,544600\r
2021-09-17,549700\r
2021-09-22,546000\r
2021-09-24,551900\r
2021-09-29,552300\r
2021-10-12,522800\r
2021-10-14,531500\r
2021-10-17,511200\r
2021-10-24,512000\r
2021-10-27,503800\r
2022-01-22,525700\r
2022-01-25,530000\r
2022-01-27,532000\r
2022-01-30,530200\r
2022-02-01,530200\r
2022-02-06,528200\r
2022-02-09,538200\r
2022-02-26,527700\r
2022-03-01,554900\r
2022-03-03,540500\r
2022-03-08,551700\r
2022-03-26,540400\r
2022-04-05,558200\r
2022-04-15,577900\r
2022-04-17,574800\r
2022-04-27,574000\r
2022-05-17,577100\r
2022-05-20,577100\r
2022-05-22,575300\r
2022-05-27,591100\r
2022-05-30,572000\r
2022-06-01,588000\r
2022-06-04,578100\r
2022-06-06,595500\r
2022-06-11,595500\r
2022-06-14,584800\r
2022-06-16,584900\r
2022-06-19,577700\r
2022-06-29,577700\r
2022-07-11,551800\r
2022-07-14,567200\r
2022-07-16,556800\r
2022-07-19,563400\r
2022-07-21,556600\r
2022-07-24,556600\r
2022-07-26,551600\r
2022-07-29,558400\r
2022-07-31,553600\r
2022-08-03,553400\r
2022-08-05,544900\r
2022-08-08,542700\r
2022-08-10,546200\r
2022-08-13,543700\r
2022-08-15,536400\r
2022-08-20,528300\r
2022-08-23,539500\r
2022-08-28,527900\r
2022-08-30,523500\r
2022-09-02,533600\r
2022-09-04,525200\r
2022-09-12,529600\r
2022-09-19,516600\r
2022-09-22,510000\r
2022-10-02,500200\r
2022-10-04,503500\r
2022-10-07,503500\r
2022-10-09,488200\r
2022-10-12,488200\r
2022-10-22,472900\r
2022-10-24,472900\r
2022-10-27,472900\r
2022-11-01,482300\r
2022-11-06,475500\r
2022-11-08,470400\r
2022-11-11,470400\r
2022-11-13,473400\r
2022-11-16,473400\r
2023-02-06,399500\r
2023-02-09,396700\r
2023-02-11,403000\r
2023-02-14,402100\r
2023-02-16,402200\r
2023-02-19,398800\r
2023-02-21,401900\r
2023-02-26,393600\r
2023-03-01,391500\r
2023-03-13,414600\r
2023-03-16,416400\r
2023-03-28,451000\r
2023-04-05,473800\r
2023-04-07,459000\r
2023-04-15,484500\r
2023-04-17,471900\r
2023-05-02,524400\r
2023-05-27,552600\r
2023-05-30,552600\r
2023-06-04,563000\r
2023-06-16,558500\r
2023-06-24,548500\r
2023-06-26,548500\r
2023-07-09,567600\r
2023-07-11,567600\r
2023-07-14,592100\r
2023-07-16,582500\r
2023-07-19,582500\r
2023-07-21,598500\r
2023-07-26,587100\r
2023-07-29,583200\r
2023-07-31,583900\r
2023-08-03,583900\r
2023-08-05,583900\r
2023-08-08,579100\r
2023-08-10,582400\r
2023-08-13,581200\r
2023-08-15,578800\r
2023-08-18,578800\r
2023-08-20,578900\r
2023-08-23,572800\r
`;export{r as default};
