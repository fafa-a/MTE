const r=`date,value\r
2017-02-22,534300\r
2017-02-25,533300\r
2017-03-07,502600\r
2017-03-17,653700\r
2017-03-27,639000\r
2017-04-23,663900\r
2017-05-03,667300\r
2017-05-16,667800\r
2017-05-23,667800\r
2017-05-26,665900\r
2017-07-05,617200\r
2017-07-07,610700\r
2017-07-10,610700\r
2017-07-12,610700\r
2017-07-17,581500\r
2017-07-22,562200\r
2017-07-27,621600\r
2017-08-04,620000\r
2017-08-06,620000\r
2017-08-11,545100\r
2017-08-14,556000\r
2017-08-19,543900\r
2017-08-21,552600\r
2017-08-24,538200\r
2017-08-26,521700\r
2017-08-29,540700\r
2017-09-03,512800\r
2017-09-05,491200\r
2017-09-08,508400\r
2017-09-10,460100\r
2017-09-13,455700\r
2017-09-20,500300\r
2017-09-23,525400\r
2017-09-28,527500\r
2017-10-03,503000\r
2017-10-05,486700\r
2017-10-08,503600\r
2017-10-10,487200\r
2017-10-13,498300\r
2017-10-15,484400\r
2017-10-18,471300\r
2017-10-25,455100\r
2017-10-28,434700\r
2017-10-30,475900\r
2017-11-07,437100\r
2018-02-25,646300\r
2018-02-27,647800\r
2018-03-02,666000\r
2018-03-14,634400\r
2018-03-19,645600\r
2018-03-22,645600\r
2018-04-01,672100\r
2018-04-21,695000\r
2018-04-23,695000\r
2018-04-26,707900\r
2018-05-06,702100\r
2018-05-11,714600\r
2018-05-18,706000\r
2018-05-21,706000\r
2018-06-25,694000\r
2018-06-27,694000\r
2018-07-02,707000\r
2018-07-07,695100\r
2018-07-10,687800\r
2018-07-12,684900\r
2018-07-15,690800\r
2018-07-17,690800\r
2018-07-20,682400\r
2018-07-22,698600\r
2018-07-25,686400\r
2018-07-27,715800\r
2018-07-30,679000\r
2018-08-01,688900\r
2018-08-04,670000\r
2018-08-06,688300\r
2018-08-11,647100\r
2018-08-16,639700\r
2018-08-19,672500\r
2018-08-21,639900\r
2018-08-26,666200\r
2018-08-31,638900\r
2018-09-03,612800\r
2018-09-08,662100\r
2018-09-10,662100\r
2018-09-13,662100\r
2018-09-23,600800\r
2018-09-25,599200\r
2018-09-28,602600\r
2018-09-30,586100\r
2018-10-03,571600\r
2018-10-05,582900\r
2018-10-23,538000\r
2018-10-25,582500\r
2018-10-30,582500\r
2018-11-04,549600\r
2019-02-15,658700\r
2019-02-17,627100\r
2019-02-20,639900\r
2019-02-22,631800\r
2019-02-25,635300\r
2019-02-27,635500\r
2019-03-12,659000\r
2019-03-22,666200\r
2019-03-24,659400\r
2019-03-27,667100\r
2019-03-29,662500\r
2019-04-01,653000\r
2019-04-08,661400\r
2019-04-13,637400\r
2019-05-01,667400\r
2019-05-06,704600\r
2019-05-11,704600\r
2019-05-13,687500\r
2019-05-16,687500\r
2019-05-23,682500\r
2019-06-02,698800\r
2019-06-12,692800\r
2019-06-27,668900\r
2019-06-30,681800\r
2019-07-02,681800\r
2019-07-05,692100\r
2019-07-07,692100\r
2019-07-10,691900\r
2019-07-12,697000\r
2019-07-15,701800\r
2019-07-17,689500\r
2019-07-22,691000\r
2019-07-25,671300\r
2019-08-01,678200\r
2019-08-04,647900\r
2019-08-09,597200\r
2019-08-11,605600\r
2019-08-14,584100\r
2019-08-16,587500\r
2019-08-21,563900\r
2019-08-24,590800\r
2019-08-26,578900\r
2019-08-29,588500\r
2019-08-31,582800\r
2019-09-03,581200\r
2019-09-05,581200\r
2019-09-13,566600\r
2019-09-15,571900\r
2019-09-18,573600\r
2019-09-20,582400\r
2019-10-08,496300\r
2019-10-13,496300\r
2019-10-25,487700\r
2019-10-30,500400\r
2019-11-04,495800\r
2019-11-09,495800\r
2020-02-20,597100\r
2020-02-22,625600\r
2020-03-01,625600\r
2020-03-08,662000\r
2020-03-11,661700\r
2020-03-13,661800\r
2020-03-18,663400\r
2020-03-21,658400\r
2020-03-28,656200\r
2020-03-31,658500\r
2020-04-05,664300\r
2020-04-07,654500\r
2020-04-10,703900\r
2020-04-12,692500\r
2020-04-15,692500\r
2020-04-25,695200\r
2020-05-05,679900\r
2020-05-07,689200\r
2020-05-17,689200\r
2020-05-20,669600\r
2020-05-22,660800\r
2020-05-25,673900\r
2020-05-27,684500\r
2020-05-30,680400\r
2020-06-21,646700\r
2020-06-24,646700\r
2020-06-26,646700\r
2020-07-01,646700\r
2020-07-04,682700\r
2020-07-09,720700\r
2020-07-11,720700\r
2020-07-14,694400\r
2020-07-19,680300\r
2020-07-21,660700\r
2020-07-24,640100\r
2020-07-26,650900\r
2020-07-29,636100\r
2020-07-31,610600\r
2020-08-03,610600\r
2020-08-05,568200\r
2020-08-08,598800\r
2020-08-10,578600\r
2020-08-15,584100\r
2020-08-20,579600\r
2020-08-23,577100\r
2020-08-25,539800\r
2020-09-02,497000\r
2020-09-04,497500\r
2020-09-07,445200\r
2020-09-12,464700\r
2020-09-14,482400\r
2020-09-17,482100\r
2020-09-19,512400\r
2021-03-23,649600\r
2021-03-26,649600\r
2021-03-28,682200\r
2021-03-31,681400\r
2021-04-02,681400\r
2021-04-05,726300\r
2021-04-07,716900\r
2021-04-15,727200\r
2021-04-17,727700\r
2021-04-20,711900\r
2021-04-22,711900\r
2021-05-27,711400\r
2021-05-30,712100\r
2021-06-11,693900\r
2021-06-14,693900\r
2021-06-16,681900\r
2021-06-19,680800\r
2021-06-21,709400\r
2021-06-26,669000\r
2021-07-19,644200\r
2021-07-21,666300\r
2021-07-26,666300\r
2021-07-29,656300\r
2021-08-10,679300\r
2021-08-13,679300\r
2021-08-18,680300\r
2021-08-20,684000\r
2021-08-23,672200\r
2021-08-25,665200\r
2021-08-28,653000\r
2021-08-30,640100\r
2021-09-04,638300\r
2021-09-07,652800\r
2021-09-12,644500\r
2021-09-14,644600\r
2021-09-17,646700\r
2021-09-22,638800\r
2021-10-12,615000\r
2021-10-14,627500\r
2021-10-17,592000\r
2021-10-24,582400\r
2021-10-27,579900\r
2022-03-03,656900\r
2022-03-08,673100\r
2022-04-05,701900\r
2022-04-10,701800\r
2022-04-15,701800\r
2022-04-17,707400\r
2022-04-27,707400\r
2022-05-17,692900\r
2022-05-20,692900\r
2022-05-22,679600\r
2022-05-27,708000\r
2022-05-30,677000\r
2022-06-01,700000\r
2022-06-04,693100\r
2022-06-06,713200\r
2022-06-11,713200\r
2022-06-14,701700\r
2022-06-16,698300\r
2022-06-19,674700\r
2022-06-29,675500\r
2022-07-11,651900\r
2022-07-14,670800\r
2022-07-16,645900\r
2022-07-19,649900\r
2022-07-21,636900\r
2022-07-24,625100\r
2022-07-26,611500\r
2022-07-29,610900\r
2022-07-31,595700\r
2022-08-03,589600\r
2022-08-05,587500\r
2022-08-08,588900\r
2022-08-10,589500\r
2022-08-13,585500\r
2022-08-15,572800\r
2022-08-20,560000\r
2022-08-23,588600\r
2022-08-28,570000\r
2022-08-30,563800\r
2022-09-02,561100\r
2022-09-04,565500\r
2022-09-12,546300\r
2022-09-19,536200\r
2022-09-22,511500\r
2022-10-02,529400\r
2022-10-04,530500\r
2022-10-07,530500\r
2022-10-09,500400\r
2022-10-12,502200\r
2022-10-22,496000\r
2022-10-24,494800\r
2022-10-27,494800\r
2022-11-01,501400\r
2022-11-08,500300\r
2022-11-11,487900\r
2023-02-14,436500\r
2023-02-16,434000\r
2023-02-19,433400\r
2023-02-21,445100\r
2023-02-26,438100\r
2023-03-01,451600\r
2023-03-03,456900\r
2023-03-13,456800\r
2023-03-16,465200\r
2023-03-28,457200\r
2023-04-05,496100\r
2023-04-07,473400\r
2023-04-15,505400\r
2023-04-17,482100\r
2023-05-02,559600\r
2023-05-27,616400\r
2023-05-30,615900\r
2023-06-04,630600\r
`;export{r as default};
