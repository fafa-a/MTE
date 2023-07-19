const r=`date,value\r
2017-01-26,50300\r
2017-01-29,48800\r
2017-02-15,71900\r
2017-02-18,74800\r
2017-02-25,72400\r
2017-03-10,82200\r
2017-03-17,82200\r
2017-03-30,78700\r
2017-04-06,102400\r
2017-04-09,96700\r
2017-04-19,97700\r
2017-04-29,96900\r
2017-05-06,109000\r
2017-05-09,112900\r
2017-05-16,112000\r
2017-05-19,115300\r
2017-05-26,116100\r
2017-06-05,118100\r
2017-06-18,116300\r
2017-06-25,116300\r
2017-06-28,116300\r
2017-07-05,114400\r
2017-07-18,118200\r
2017-08-02,115200\r
2017-08-04,123400\r
2017-08-07,123400\r
2017-08-12,113500\r
2017-08-14,116600\r
2017-08-17,118300\r
2017-08-22,110000\r
2017-08-24,116700\r
2017-08-27,107900\r
2017-08-29,109400\r
2017-09-01,107300\r
2017-09-03,98300\r
2017-09-06,98300\r
2017-09-08,98300\r
2017-09-13,95500\r
2017-09-21,100300\r
2017-09-23,100300\r
2017-09-26,98700\r
2017-09-28,98700\r
2017-10-08,95800\r
2017-10-11,96500\r
2017-10-13,95100\r
2017-10-16,95300\r
2017-10-18,95300\r
2017-10-23,89500\r
2017-10-26,85600\r
2017-10-28,85800\r
2017-10-31,88300\r
2017-11-05,87800\r
2017-11-07,86300\r
2017-11-17,86400\r
2017-11-20,84000\r
2017-11-22,80600\r
2017-11-25,80600\r
2017-11-27,82900\r
2017-11-30,85900\r
2017-12-05,76800\r
2017-12-07,76800\r
2017-12-12,98200\r
2017-12-15,98200\r
2017-12-20,106100\r
2017-12-25,106300\r
2017-12-27,106300\r
2018-01-09,123700\r
2018-01-11,123700\r
2018-01-19,123700\r
2018-01-24,128700\r
2018-01-29,128700\r
2018-01-31,128700\r
2018-03-02,124600\r
2018-03-07,124600\r
2018-03-15,129400\r
2018-03-17,129400\r
2018-03-22,131900\r
2018-03-30,135500\r
2018-04-04,128800\r
2018-04-06,129900\r
2018-04-09,129900\r
2018-04-19,128600\r
2018-04-21,138500\r
2018-04-24,131300\r
2018-04-26,131300\r
2018-05-06,124900\r
2018-05-11,139200\r
2018-05-21,139300\r
2018-05-24,137300\r
2018-06-20,135900\r
2018-06-23,137900\r
2018-06-25,135600\r
2018-07-08,133300\r
2018-07-10,135700\r
2018-07-13,134100\r
2018-07-15,134100\r
2018-07-18,134100\r
2018-07-23,132900\r
2018-07-25,126900\r
2018-07-30,125700\r
2018-08-02,125800\r
2018-08-04,120900\r
2018-08-12,110400\r
2018-08-19,107400\r
2018-08-22,102800\r
2018-08-27,99500\r
2018-09-01,92100\r
2018-09-03,80100\r
2018-09-08,79900\r
2018-09-11,78100\r
2018-09-16,75200\r
2018-09-18,75400\r
2018-09-23,72400\r
2018-09-26,70600\r
2018-09-28,71300\r
2018-10-03,67800\r
2018-10-06,68200\r
2018-10-13,66600\r
2018-10-23,60100\r
2018-11-15,68300\r
2018-11-17,68300\r
2018-11-22,68400\r
2019-02-13,88600\r
2019-02-15,85300\r
2019-02-18,85300\r
2019-02-20,84300\r
2019-02-23,85000\r
2019-02-25,83600\r
2019-02-28,83600\r
2019-03-12,82500\r
2019-03-20,81400\r
2019-03-22,83700\r
2019-03-25,83600\r
2019-03-27,82300\r
2019-03-30,82200\r
2019-04-01,82200\r
2019-04-09,82400\r
2019-05-01,95500\r
2019-05-06,105300\r
2019-05-09,105300\r
2019-05-11,105300\r
2019-05-14,104100\r
2019-05-16,104100\r
2019-05-29,112300\r
2019-06-13,126100\r
2019-06-28,128300\r
2019-07-05,127700\r
2019-07-08,120800\r
2019-07-10,120200\r
2019-07-13,120200\r
2019-07-15,117900\r
2019-07-20,117900\r
2019-07-23,117300\r
2019-07-25,117400\r
2019-07-28,113800\r
2019-08-02,114300\r
2019-08-04,106100\r
2019-08-09,104700\r
2019-08-14,101900\r
2019-08-17,102100\r
2019-08-22,97900\r
2019-08-24,95400\r
2019-08-29,94100\r
2019-09-03,89000\r
2019-09-06,89000\r
2019-09-08,84300\r
2019-09-11,86300\r
2019-09-13,61100\r
2019-09-16,59200\r
2019-09-18,59200\r
2019-09-21,59200\r
2019-09-26,63600\r
2019-10-11,41700\r
2019-10-13,46900\r
2019-10-26,46900\r
2019-12-05,83700\r
2019-12-07,83700\r
2019-12-10,83800\r
2019-12-15,76800\r
2019-12-17,76800\r
2019-12-20,76800\r
2019-12-25,83000\r
2019-12-27,105400\r
2019-12-30,103100\r
2020-01-09,113100\r
2020-01-11,115800\r
2020-01-14,110600\r
2020-01-16,110600\r
2020-01-19,110900\r
2020-01-29,105000\r
2020-01-31,104700\r
2020-02-03,106300\r
2020-02-05,112100\r
2020-02-10,112100\r
2020-02-15,111700\r
2020-02-18,103500\r
2020-02-20,109900\r
2020-02-23,111600\r
2020-03-21,132000\r
2020-03-24,133100\r
2020-03-26,128300\r
2020-03-31,128300\r
2020-04-03,131200\r
2020-04-05,128900\r
2020-04-08,130400\r
2020-04-10,130500\r
2020-04-15,133700\r
2020-04-25,135800\r
2020-04-30,134700\r
2020-05-18,135400\r
2020-05-20,135700\r
2020-05-25,135600\r
2020-05-28,136800\r
2020-05-30,135500\r
2020-06-12,131000\r
2020-06-14,133300\r
2020-06-24,131000\r
2020-07-04,130000\r
2020-07-07,138400\r
2020-07-09,131100\r
2020-07-19,128300\r
2020-07-22,128300\r
2020-07-24,117800\r
2020-07-27,109400\r
2020-07-29,109400\r
2020-08-03,109400\r
2020-08-06,103900\r
2020-08-08,103900\r
2020-08-18,89800\r
2020-08-21,89800\r
2020-08-23,84100\r
2020-08-31,84100\r
2020-09-02,84700\r
2020-09-05,77300\r
2020-09-07,77300\r
2020-09-10,77300\r
2020-09-12,77400\r
2020-09-17,77400\r
2020-09-30,71900\r
2020-10-12,75200\r
2020-10-30,103700\r
2020-11-09,103700\r
2020-11-11,120500\r
2020-11-14,112400\r
2020-11-21,114600\r
2020-11-26,117400\r
2020-11-29,115800\r
2020-12-26,132200\r
2021-01-03,137000\r
2021-01-08,137000\r
2021-01-10,140400\r
2021-01-15,139900\r
2021-01-18,140800\r
2021-02-19,129600\r
2021-02-24,137200\r
2021-02-27,136000\r
2021-03-01,136900\r
2021-03-04,138600\r
2021-03-09,138000\r
2021-03-14,136400\r
2021-03-21,137300\r
2021-03-24,137700\r
2021-03-29,136800\r
2021-03-31,137700\r
2021-04-03,134700\r
2021-04-05,134300\r
2021-04-08,133700\r
2021-04-15,135100\r
2021-04-20,136900\r
2021-04-23,134300\r
2021-05-03,136600\r
2021-05-08,133700\r
2021-05-28,129700\r
2021-05-30,129700\r
2021-06-07,132300\r
2021-06-09,132200\r
2021-06-14,131100\r
2021-06-22,132600\r
2021-07-22,128800\r
2021-08-11,119600\r
2021-08-23,99500\r
2021-08-26,101100\r
2021-08-28,101100\r
2021-08-31,99300\r
2021-09-05,92100\r
2021-09-12,87800\r
2021-09-17,85700\r
2021-09-22,85700\r
2021-09-25,85900\r
2021-09-27,85900\r
2021-09-30,86700\r
2021-10-07,89300\r
2021-10-12,89400\r
2021-10-15,89400\r
2021-10-17,82600\r
2021-10-20,77500\r
2021-10-27,75300\r
2021-11-09,81900\r
2021-11-11,83900\r
2021-11-19,81500\r
2021-12-14,116100\r
2021-12-16,116100\r
2021-12-19,117400\r
2021-12-21,117400\r
2022-01-13,113500\r
2022-01-15,116800\r
2022-01-23,116300\r
2022-01-25,119300\r
2022-02-09,119100\r
2022-02-22,134900\r
2022-02-27,134900\r
2022-03-01,134900\r
2022-03-21,131900\r
2022-03-24,131900\r
2022-03-26,131900\r
2022-04-05,124300\r
2022-04-10,123500\r
2022-05-08,131600\r
2022-05-10,133400\r
2022-05-15,133400\r
2022-05-28,131100\r
2022-05-30,131100\r
2022-06-17,129200\r
2022-06-19,132100\r
2022-06-22,132100\r
2022-06-24,129000\r
2022-06-29,132100\r
2022-07-02,126800\r
2022-07-04,126800\r
2022-07-07,123800\r
2022-07-12,119700\r
2022-07-14,110800\r
2022-07-17,112100\r
2022-07-24,99900\r
2022-07-27,104200\r
2022-08-01,82500\r
2022-08-03,82500\r
2022-08-06,72800\r
2022-08-08,72800\r
2022-08-11,63800\r
2022-08-13,49000\r
2022-08-18,49000\r
2022-08-28,46400\r
2022-09-05,46500\r
2022-09-10,41900\r
2022-09-12,39300\r
2022-09-15,39300\r
2022-09-20,38000\r
2022-09-22,37600\r
2022-10-02,37900\r
2022-10-15,40000\r
2022-10-17,40800\r
2022-10-22,38700\r
2022-10-30,35100\r
2022-11-01,35100\r
2022-11-06,37400\r
2022-11-11,37400\r
2022-11-16,38600\r
2022-12-04,50200\r
2022-12-11,51200\r
2022-12-14,51200\r
2022-12-21,57400\r
2022-12-24,57300\r
2023-01-03,56700\r
2023-01-10,56700\r
2023-02-02,92600\r
2023-02-04,94400\r
2023-02-09,92000\r
2023-02-12,94900\r
2023-02-14,94300\r
2023-02-17,97100\r
2023-02-19,97100\r
2023-02-24,96200\r
2023-03-01,106800\r
2023-03-09,106800\r
2023-04-05,124800\r
2023-04-08,124800\r
2023-04-10,124800\r
2023-04-18,123800\r
2023-04-20,123800\r
2023-05-05,131900\r
2023-05-10,131900\r
2023-05-28,134800\r
2023-05-30,133100\r
2023-06-02,134300\r
2023-06-04,134300\r
2023-06-09,106000\r
2023-06-24,135000\r
2023-06-27,136500\r
2023-07-07,136200\r
2023-07-09,136300\r
`;export{r as default};
