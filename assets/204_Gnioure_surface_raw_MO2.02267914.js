const r=`date,value\r
2017-02-15,100\r
2017-02-22,400\r
2017-03-04,300\r
2017-03-14,300\r
2017-03-17,2400\r
2017-04-03,3800\r
2017-04-06,8300\r
2017-04-16,166000\r
2017-04-23,378800\r
2017-05-23,525500\r
2017-05-26,517900\r
2017-06-02,517800\r
2017-06-12,607100\r
2017-06-15,646200\r
2017-06-22,645000\r
2017-06-25,637000\r
2017-07-05,677500\r
2017-07-07,677500\r
2017-07-12,677500\r
2017-07-27,670600\r
2017-07-30,668700\r
2017-08-04,649300\r
2017-08-11,573900\r
2017-08-14,578200\r
2017-08-16,567400\r
2017-08-19,567400\r
2017-08-21,566400\r
2017-08-24,538700\r
2017-08-26,519300\r
2017-08-29,517900\r
2017-09-05,520600\r
2017-09-08,499100\r
2017-09-10,499100\r
2017-09-13,473900\r
2017-09-20,502100\r
2017-09-23,494800\r
2017-09-28,496200\r
2017-10-03,465800\r
2017-10-05,462900\r
2017-10-08,454500\r
2017-10-10,453700\r
2017-10-13,459500\r
2017-10-15,453900\r
2017-10-18,459700\r
2017-10-20,456700\r
2017-10-23,460500\r
2017-10-25,457300\r
2017-10-28,431100\r
2017-10-30,420300\r
2017-11-07,414400\r
2017-11-12,424600\r
2017-11-14,414600\r
2017-11-17,419700\r
2018-02-25,12100\r
2018-02-27,10900\r
2018-03-02,12000\r
2018-03-07,12000\r
2018-03-09,3000\r
2018-03-22,300\r
2018-03-24,300\r
2018-03-27,300\r
2018-03-29,300\r
2018-04-18,36400\r
2018-04-21,180100\r
2018-04-26,173500\r
2018-05-11,431500\r
2018-05-13,431500\r
2018-05-21,431500\r
2018-06-25,712800\r
2018-06-27,733400\r
2018-07-02,718000\r
2018-07-07,727800\r
2018-07-10,721400\r
2018-07-27,726500\r
2018-07-30,710000\r
2018-08-01,710000\r
2018-08-06,713700\r
2018-08-11,733300\r
2018-08-14,733300\r
2018-08-16,728400\r
2018-08-19,663700\r
2018-08-21,657400\r
2018-08-24,658200\r
2018-08-26,640400\r
2018-08-29,594200\r
2018-08-31,594200\r
2018-09-03,577000\r
2018-09-05,577000\r
2018-09-08,557200\r
2018-09-10,557200\r
2018-09-13,559800\r
2018-09-18,565800\r
2018-09-20,558000\r
2018-09-23,536500\r
2018-09-25,537000\r
2018-09-28,515200\r
2018-09-30,494600\r
2018-10-03,495000\r
2018-10-05,487900\r
2018-10-10,489500\r
2018-10-13,491000\r
2018-10-23,487300\r
2018-10-25,485800\r
2018-11-04,466800\r
2019-02-20,45800\r
2019-02-22,44300\r
2019-02-25,52000\r
2019-02-27,55100\r
2019-03-02,53500\r
2019-03-04,55800\r
2019-03-07,54000\r
2019-03-12,55900\r
2019-03-14,53800\r
2019-03-17,44000\r
2019-03-22,23000\r
2019-03-24,23000\r
2019-03-27,27500\r
2019-03-29,26900\r
2019-04-01,19800\r
2019-04-13,59700\r
2019-05-01,492000\r
2019-05-06,486700\r
2019-05-13,497800\r
2019-05-16,538900\r
2019-05-23,570100\r
2019-05-28,570100\r
2019-05-31,653800\r
2019-06-02,681700\r
2019-06-12,693700\r
2019-06-15,693700\r
2019-06-17,718100\r
2019-06-22,718100\r
2019-06-25,718100\r
2019-06-27,756500\r
2019-06-30,755800\r
2019-07-05,762700\r
2019-07-07,763800\r
2019-07-10,763500\r
2019-07-12,768500\r
2019-07-15,775100\r
2019-07-20,778000\r
2019-07-22,777600\r
2019-07-25,776500\r
2019-08-01,775800\r
2019-08-04,775800\r
2019-08-06,765500\r
2019-08-09,741200\r
2019-08-14,735000\r
2019-08-16,735000\r
2019-08-21,706500\r
2019-08-24,702300\r
2019-08-26,693600\r
2019-08-29,693200\r
2019-08-31,686600\r
2019-09-03,682900\r
2019-09-05,682900\r
2019-09-08,666900\r
2019-09-13,647200\r
2019-09-15,637200\r
2019-09-18,627000\r
2019-09-20,622300\r
2019-09-28,624600\r
2019-09-30,601300\r
2019-10-03,592300\r
2019-10-05,579100\r
2019-10-08,562400\r
2019-10-10,557500\r
2019-10-13,555900\r
2019-10-15,552500\r
2019-10-25,545100\r
2019-10-30,553000\r
2019-11-04,578700\r
2019-11-09,555800\r
2019-11-12,577500\r
2019-11-17,550200\r
2019-11-19,569700\r
2020-02-20,551100\r
2020-02-22,551400\r
2020-02-27,551400\r
2020-03-01,551400\r
2020-03-08,655100\r
2020-03-11,716200\r
2020-03-18,711300\r
2020-03-21,712200\r
2020-03-26,733400\r
2020-03-28,734400\r
2020-04-05,744700\r
2020-04-10,747300\r
2020-04-15,745900\r
2020-04-25,763800\r
2020-05-07,778900\r
2020-05-17,776300\r
2020-05-20,780500\r
2020-05-22,781500\r
2020-05-25,779800\r
2020-05-27,780800\r
2020-05-30,780400\r
2020-06-21,775500\r
2020-06-24,787400\r
2020-06-26,780600\r
2020-07-01,781200\r
2020-07-04,781600\r
2020-07-06,781600\r
2020-07-09,780500\r
2020-07-11,786600\r
2020-07-14,765300\r
2020-07-16,780900\r
2020-07-19,777000\r
2020-07-21,783500\r
2020-07-24,782800\r
2020-07-26,785300\r
2020-07-31,784300\r
2020-08-03,782100\r
2020-08-05,777900\r
2020-08-08,774000\r
2020-08-10,774000\r
2020-08-13,773000\r
2020-08-15,773000\r
2020-08-20,774300\r
2020-08-23,771900\r
2020-08-25,769900\r
2020-08-30,779200\r
2020-09-02,779200\r
2020-09-04,754800\r
2020-09-07,768600\r
2020-09-12,753600\r
2020-09-14,743900\r
2020-09-17,745500\r
2020-09-19,745500\r
2020-09-27,760600\r
2020-09-29,792000\r
2020-10-09,794500\r
2020-10-12,794500\r
2020-10-17,786900\r
2020-10-19,790400\r
2020-10-24,775200\r
2020-10-27,775200\r
2020-10-29,775200\r
2020-11-01,775300\r
2020-11-08,762800\r
2020-11-11,728000\r
2020-11-13,728000\r
2020-11-16,728000\r
2020-11-18,738700\r
2020-11-21,735000\r
2020-11-23,729500\r
2020-11-26,729500\r
2021-02-19,6400\r
2021-02-24,28200\r
2021-03-01,335500\r
2021-03-26,655200\r
2021-03-28,664300\r
2021-03-31,651200\r
2021-04-02,651200\r
2021-04-05,649100\r
2021-04-07,635900\r
2021-04-12,629300\r
2021-04-15,630500\r
2021-04-20,563700\r
2021-04-22,563700\r
2021-05-20,639900\r
2021-05-22,639900\r
2021-05-25,639900\r
2021-05-27,639900\r
2021-05-30,639200\r
2021-06-14,725200\r
2021-06-16,725200\r
2021-06-19,725200\r
2021-06-21,750000\r
2021-06-24,750000\r
2021-06-26,753600\r
2021-06-29,753600\r
2021-07-01,752500\r
2021-07-09,745400\r
2021-07-11,737000\r
2021-07-14,746000\r
2021-07-16,735400\r
2021-07-19,737300\r
2021-07-21,731300\r
2021-07-24,720300\r
2021-07-29,729000\r
2021-08-05,685500\r
2021-08-10,693800\r
2021-08-13,677000\r
2021-08-15,677000\r
2021-08-18,666500\r
2021-08-20,669500\r
2021-08-23,657000\r
2021-08-25,661600\r
2021-08-28,661600\r
2021-08-30,654000\r
2021-09-17,495700\r
2021-09-19,500800\r
2021-09-22,496800\r
2021-09-27,498100\r
2021-10-02,520100\r
2021-10-04,523400\r
2021-10-07,519200\r
2021-10-09,488200\r
2021-10-12,491500\r
2021-10-14,485400\r
2021-10-17,485400\r
2021-10-19,479500\r
2021-10-22,473300\r
2021-10-24,461900\r
2021-10-27,457100\r
2021-11-06,458700\r
2021-11-13,450000\r
2021-11-16,450000\r
2022-02-24,10400\r
2022-02-26,10400\r
2022-03-01,10400\r
2022-03-03,8200\r
2022-03-23,269500\r
2022-03-26,256600\r
2022-03-28,254600\r
2022-04-05,265100\r
2022-04-10,261300\r
2022-04-12,261300\r
2022-04-15,261300\r
2022-04-17,333500\r
2022-04-25,353100\r
2022-04-27,353100\r
2022-05-10,393800\r
2022-05-12,430700\r
2022-05-15,430700\r
2022-05-17,429800\r
2022-05-20,483800\r
2022-05-22,499300\r
2022-05-27,517500\r
2022-05-30,510500\r
2022-06-01,543600\r
2022-06-04,593300\r
2022-06-06,587500\r
2022-06-09,606000\r
2022-06-11,606000\r
2022-06-14,631300\r
2022-06-16,633200\r
2022-06-19,650900\r
2022-06-26,676400\r
2022-06-29,659500\r
2022-07-01,672900\r
2022-07-04,672500\r
2022-07-09,664200\r
2022-07-11,645800\r
2022-07-14,643400\r
2022-07-16,618300\r
2022-07-19,619000\r
2022-07-21,597600\r
2022-07-24,598600\r
2022-07-26,572100\r
2022-07-31,567400\r
2022-08-03,514900\r
2022-08-05,494500\r
2022-08-08,496000\r
2022-08-10,494200\r
2022-08-13,484700\r
2022-08-15,489500\r
2022-08-20,407800\r
2022-08-23,403200\r
2022-08-25,403200\r
2022-08-28,389400\r
2022-08-30,389400\r
2022-09-04,386400\r
2022-09-19,265600\r
2022-09-22,268100\r
2022-10-02,232200\r
2022-10-04,240500\r
2022-10-07,240500\r
2022-10-09,239000\r
2022-10-12,241300\r
2022-10-14,243000\r
2022-11-01,272400\r
2022-11-06,269000\r
2022-11-08,267200\r
2022-11-11,274000\r
2022-11-13,276400\r
2022-11-16,278000\r
2022-11-18,280600\r
2023-02-19,100\r
2023-02-21,1700\r
2023-02-24,1700\r
2023-02-26,1400\r
2023-03-16,170800\r
2023-03-23,249100\r
2023-04-05,420000\r
2023-04-07,417800\r
2023-04-10,426200\r
2023-04-12,426200\r
2023-04-15,426200\r
2023-04-17,432400\r
2023-04-20,456900\r
2023-04-27,447100\r
2023-05-02,518600\r
2023-05-05,518600\r
2023-05-10,518600\r
2023-06-16,748100\r
2023-06-21,748100\r
2023-06-24,777000\r
2023-07-09,768100\r
2023-07-11,772400\r
2023-07-14,771300\r
2023-07-16,771300\r
2023-07-19,772600\r
2023-07-24,779000\r
2023-07-26,772500\r
2023-07-29,763000\r
2023-07-31,764700\r
2023-08-03,764700\r
2023-08-05,764700\r
2023-08-08,759100\r
2023-08-10,759200\r
2023-08-13,761000\r
2023-08-15,761300\r
2023-08-18,761300\r
2023-08-20,754600\r
2023-08-23,747000\r
2023-08-25,733700\r
`;export{r as default};
