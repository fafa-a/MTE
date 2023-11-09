const r=`date,value\r
2017-01-13,69400\r
2017-02-22,181100\r
2017-02-25,181100\r
2017-03-14,183900\r
2017-03-17,183900\r
2017-04-03,178700\r
2017-04-06,178700\r
2017-04-23,176100\r
2017-05-23,177700\r
2017-05-26,177700\r
2017-06-02,180000\r
2017-06-12,181600\r
2017-06-15,179600\r
2017-06-22,180300\r
2017-06-25,173400\r
2017-07-02,174500\r
2017-07-07,162000\r
2017-07-10,162000\r
2017-07-12,162900\r
2017-07-17,159200\r
2017-07-22,166600\r
2017-07-25,160800\r
2017-07-27,160500\r
2017-07-30,157100\r
2017-08-04,156900\r
2017-08-06,156900\r
2017-08-21,140600\r
2017-08-24,140600\r
2017-08-26,140600\r
2017-08-29,140600\r
2017-09-05,131800\r
2017-09-08,131800\r
2017-09-10,131800\r
2017-09-13,131800\r
2017-09-20,128800\r
2017-09-23,128800\r
2017-09-28,128800\r
2017-10-05,120700\r
2017-10-08,120700\r
2017-10-10,124100\r
2017-10-13,124100\r
2017-10-15,124100\r
2017-10-18,117100\r
2017-10-20,117100\r
2017-10-25,133100\r
2017-10-28,133100\r
2017-10-30,135600\r
2017-11-07,126800\r
2017-12-09,119000\r
2017-12-12,119000\r
2017-12-14,121000\r
2017-12-17,121000\r
2017-12-19,127000\r
2017-12-24,128200\r
2017-12-27,128700\r
2018-01-28,152600\r
2018-01-31,152600\r
2018-02-02,135000\r
2018-02-07,134900\r
2018-02-10,117800\r
2018-02-12,132400\r
2018-03-14,145500\r
2018-03-17,145500\r
2018-03-19,153300\r
2018-03-27,146500\r
2018-04-18,172400\r
2018-04-21,172400\r
2018-04-26,172400\r
2018-05-23,175700\r
2018-05-31,171300\r
2018-06-02,171300\r
2018-06-22,159100\r
2018-06-25,159100\r
2018-06-27,159100\r
2018-07-02,161200\r
2018-07-07,161700\r
2018-07-10,161700\r
2018-07-12,163300\r
2018-07-15,163700\r
2018-07-17,160700\r
2018-07-20,163700\r
2018-07-25,159300\r
2018-07-27,162600\r
2018-07-30,159100\r
2018-08-01,164100\r
2018-08-04,164100\r
2018-08-06,150300\r
2018-08-11,145600\r
2018-08-14,150500\r
2018-08-16,150500\r
2018-08-19,142100\r
2018-08-21,143000\r
2018-08-24,139600\r
2018-08-26,144300\r
2018-08-29,144300\r
2018-08-31,138900\r
2018-09-03,143700\r
2018-09-05,143700\r
2018-09-08,135200\r
2018-09-10,135200\r
2018-09-20,125700\r
2018-09-23,125700\r
2018-09-25,127600\r
2018-09-28,127600\r
2018-09-30,125900\r
2018-10-03,124100\r
2018-10-05,127500\r
2018-10-13,120600\r
2018-10-25,155000\r
2018-10-30,164800\r
2018-11-04,165100\r
2018-11-24,150400\r
2018-11-27,150400\r
2018-12-02,150400\r
2018-12-04,150400\r
2018-12-19,159800\r
2018-12-27,159700\r
2018-12-29,164900\r
2019-01-03,96500\r
2019-01-06,96500\r
2019-01-11,96500\r
2019-01-16,96500\r
2019-02-07,135300\r
2019-02-10,135300\r
2019-02-12,146100\r
2019-02-15,146100\r
2019-02-17,146100\r
2019-02-20,146100\r
2019-02-22,134400\r
2019-02-25,144100\r
2019-02-27,126300\r
2019-03-02,126800\r
2019-03-07,126800\r
2019-03-09,126800\r
2019-03-12,123700\r
2019-03-14,123700\r
2019-03-19,161300\r
2019-03-22,161300\r
2019-03-24,161300\r
2019-03-27,161300\r
2019-03-29,161300\r
2019-04-01,161300\r
2019-04-08,149100\r
2019-04-13,142700\r
2019-04-28,142600\r
2019-05-13,141700\r
2019-05-16,141700\r
2019-05-23,146700\r
2019-05-28,146700\r
2019-05-31,145600\r
2019-06-02,153200\r
2019-06-07,153200\r
2019-06-12,152800\r
2019-06-17,132200\r
2019-06-22,133100\r
2019-06-25,133100\r
2019-06-27,128800\r
2019-06-30,128800\r
2019-07-02,130500\r
2019-07-05,127800\r
2019-07-07,130300\r
2019-07-10,129200\r
2019-07-12,131100\r
2019-07-15,130200\r
2019-07-17,130200\r
2019-07-20,134500\r
2019-07-22,126800\r
2019-07-25,129300\r
2019-08-01,122200\r
2019-08-04,122200\r
2019-08-06,122200\r
2019-08-09,109700\r
2019-08-11,112600\r
2019-08-14,112600\r
2019-08-16,115500\r
2019-08-21,116900\r
2019-08-24,116900\r
2019-08-26,116900\r
2019-08-29,115200\r
2019-08-31,116700\r
2019-09-03,99500\r
2019-09-05,99500\r
2019-09-08,99500\r
2019-09-13,99500\r
2019-09-15,102900\r
2019-09-18,90800\r
2019-09-20,90800\r
2019-09-28,90800\r
2019-09-30,94100\r
2019-10-05,102600\r
2019-10-08,102600\r
2019-10-10,102600\r
2019-10-13,102600\r
2019-10-15,102600\r
2019-10-25,90200\r
2019-10-30,84700\r
2019-11-02,84700\r
2019-11-04,110500\r
2019-11-09,105000\r
2019-11-12,112900\r
2019-11-17,112900\r
2019-11-19,112100\r
2019-11-24,123700\r
2019-11-27,123600\r
2019-11-29,125500\r
2019-12-02,125500\r
2019-12-09,129300\r
2019-12-14,137000\r
2019-12-17,142600\r
2019-12-22,142600\r
2019-12-24,127300\r
2019-12-27,135000\r
2019-12-29,109000\r
2020-02-22,80600\r
2020-02-27,80600\r
2020-03-01,80600\r
2020-03-08,103500\r
2020-03-11,123600\r
2020-03-13,138000\r
2020-03-18,127400\r
2020-03-21,127400\r
2020-03-28,143500\r
2020-03-31,151500\r
2020-04-05,151500\r
2020-04-07,151500\r
2020-04-10,151500\r
2020-05-07,107700\r
2020-05-17,145800\r
2020-05-20,145800\r
2020-05-22,129100\r
2020-05-25,146700\r
2020-05-27,136600\r
2020-05-30,136600\r
2020-06-06,137100\r
2020-06-21,141000\r
2020-06-24,141000\r
2020-06-26,141000\r
2020-07-01,141000\r
2020-07-04,141000\r
2020-07-06,142200\r
2020-07-11,131000\r
2020-07-14,131000\r
2020-07-16,129700\r
2020-07-19,129700\r
2020-07-21,130800\r
2020-07-24,128300\r
2020-07-26,127800\r
2020-07-29,132000\r
2020-07-31,128700\r
2020-08-03,127000\r
2020-08-05,127300\r
2020-08-08,116900\r
2020-08-10,116900\r
2020-08-13,126800\r
2020-08-15,115300\r
2020-08-20,118800\r
2020-08-23,118800\r
2020-08-25,122100\r
2020-08-30,122100\r
2020-09-02,118200\r
2020-09-04,118200\r
2020-09-07,118200\r
2020-09-12,91200\r
2020-09-14,111300\r
2020-09-17,111300\r
2020-09-19,111300\r
2020-09-24,111300\r
2020-09-27,111300\r
2020-09-29,113500\r
2020-10-04,88300\r
2020-10-12,88300\r
2020-10-14,88300\r
2020-10-24,91300\r
2020-11-01,91300\r
2020-11-08,91300\r
2020-11-23,95200\r
2020-12-03,95200\r
2020-12-13,78400\r
2020-12-18,78400\r
2020-12-21,78400\r
2020-12-26,78400\r
2020-12-28,78400\r
2021-02-11,108000\r
2021-02-14,108000\r
2021-02-19,108000\r
2021-03-13,113500\r
2021-03-16,113500\r
2021-03-21,113500\r
2021-03-23,117300\r
2021-03-28,115100\r
2021-03-31,115100\r
2021-04-02,115100\r
2021-04-05,105500\r
2021-04-07,109100\r
2021-04-12,100400\r
2021-04-15,100400\r
2021-04-20,89600\r
2021-04-22,89600\r
2021-05-12,106100\r
2021-05-17,106100\r
2021-05-20,106100\r
2021-05-27,109600\r
2021-05-30,109600\r
2021-06-06,114800\r
2021-06-16,112700\r
2021-06-19,111600\r
2021-06-21,117800\r
2021-06-26,113100\r
2021-06-29,111500\r
2021-07-01,112000\r
2021-07-11,105700\r
2021-07-14,105700\r
2021-07-16,105700\r
2021-07-19,105700\r
2021-07-21,108400\r
2021-07-26,103800\r
2021-07-29,103800\r
2021-07-31,103800\r
2021-08-05,101800\r
2021-08-10,101800\r
2021-08-13,101800\r
2021-08-15,91000\r
2021-08-18,94800\r
2021-08-20,90400\r
2021-08-23,91000\r
2021-08-25,88000\r
2021-08-28,90100\r
2021-08-30,84700\r
2021-09-04,85600\r
2021-09-19,86400\r
2021-09-22,86400\r
2021-09-27,86400\r
2021-09-29,86500\r
2021-10-14,72100\r
2021-10-17,72100\r
2021-10-19,72100\r
2021-10-22,72100\r
2021-10-24,72100\r
2021-11-18,76800\r
2021-11-21,76800\r
2021-11-26,76800\r
2021-12-18,99100\r
2021-12-21,99100\r
2021-12-23,99100\r
2021-12-26,99100\r
2022-01-12,95100\r
2022-01-15,95100\r
2022-01-17,95100\r
2022-01-20,95000\r
2022-01-22,95600\r
2022-01-25,92400\r
2022-01-27,94100\r
2022-01-30,94100\r
2022-02-01,94100\r
2022-02-06,89000\r
2022-02-09,88000\r
2022-02-26,91100\r
2022-03-01,91100\r
2022-03-03,94400\r
2022-03-08,94400\r
2022-04-17,100600\r
2022-04-22,100600\r
2022-04-25,100600\r
2022-05-17,86400\r
2022-05-20,86400\r
2022-05-22,86400\r
2022-05-27,86400\r
2022-05-30,80400\r
2022-06-01,80400\r
2022-06-04,80400\r
2022-06-06,82900\r
2022-06-09,82200\r
2022-06-11,88000\r
2022-06-14,88000\r
2022-06-16,88000\r
2022-06-19,85600\r
2022-07-01,80300\r
2022-07-04,80300\r
2022-07-09,80300\r
2022-07-11,81400\r
2022-07-14,78400\r
2022-07-16,82100\r
2022-07-19,82100\r
2022-07-21,76200\r
2022-07-24,79600\r
2022-07-26,70000\r
2022-07-31,73700\r
2022-08-03,74500\r
2022-08-05,74500\r
2022-08-08,73100\r
2022-08-10,73600\r
2022-08-13,68300\r
2022-08-15,69300\r
2022-08-20,67300\r
2022-08-23,68500\r
2022-08-28,66100\r
2022-08-30,66100\r
2022-09-19,61000\r
2022-09-22,61000\r
2022-09-27,61000\r
2022-10-04,61800\r
2022-10-09,67000\r
2022-10-12,67000\r
2023-01-12,80800\r
2023-01-17,80900\r
2023-01-20,80900\r
2023-01-22,80900\r
2023-02-06,59700\r
2023-02-09,59700\r
2023-02-11,68800\r
2023-02-14,68800\r
2023-02-16,68800\r
2023-02-19,67300\r
2023-02-26,61300\r
2023-03-01,61300\r
2023-03-03,65800\r
2023-03-06,65800\r
2023-03-13,61800\r
2023-03-28,54300\r
2023-04-02,54300\r
2023-04-05,54300\r
2023-04-07,54300\r
2023-04-12,45000\r
2023-04-15,45000\r
2023-04-17,52400\r
2023-04-20,50000\r
2023-04-27,50000\r
2023-05-02,46700\r
2023-05-10,46700\r
2023-05-12,46700\r
2023-05-17,45100\r
2023-05-27,45100\r
2023-06-26,34200\r
2023-06-29,32100\r
2023-07-01,58000\r
2023-07-06,58300\r
2023-07-09,58300\r
2023-07-11,53700\r
2023-07-14,54300\r
2023-07-16,54300\r
2023-07-19,50000\r
2023-07-21,50600\r
2023-07-24,41900\r
2023-07-26,41900\r
2023-07-29,41900\r
2023-07-31,41900\r
2023-08-05,39100\r
2023-08-08,39100\r
2023-08-10,37600\r
2023-08-13,37700\r
2023-08-15,36500\r
2023-08-18,37300\r
2023-08-20,36000\r
2023-08-23,36200\r
2023-08-25,32900\r
2023-08-30,36900\r
2023-09-04,31200\r
2023-09-07,29500\r
2023-09-14,29600\r
2023-09-17,25100\r
2023-09-19,25300\r
2023-09-24,23900\r
2023-09-27,23900\r
2023-09-29,24000\r
2023-10-02,24000\r
2023-10-04,19100\r
2023-10-07,19200\r
2023-10-12,17500\r
2023-10-24,22500\r
2023-10-27,22500\r
2023-11-01,22500\r
2023-11-03,22500\r
`;export{r as default};
