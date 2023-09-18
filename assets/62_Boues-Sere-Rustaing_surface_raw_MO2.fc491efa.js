const r=`date,value\r
2017-01-26,266500\r
2017-01-29,266500\r
2017-02-15,343000\r
2017-02-18,343000\r
2017-02-25,359700\r
2017-03-17,362000\r
2017-03-27,362000\r
2017-04-06,364400\r
2017-04-09,364400\r
2017-05-06,351800\r
2017-05-09,351800\r
2017-05-16,365900\r
2017-05-19,365900\r
2017-05-26,366100\r
2017-06-05,364100\r
2017-07-05,364800\r
2017-08-14,313100\r
2017-08-17,313100\r
2017-08-22,313100\r
2017-08-24,313200\r
2017-08-27,259300\r
2017-08-29,259300\r
2017-09-01,259300\r
2017-09-03,259300\r
2017-09-08,212600\r
2017-09-13,212600\r
2017-09-16,212600\r
2017-09-23,191000\r
2017-09-26,191000\r
2017-09-28,191000\r
2017-10-03,191000\r
2017-10-08,166600\r
2017-10-11,166600\r
2017-10-13,167400\r
2017-10-16,167400\r
2017-10-18,167400\r
2017-10-23,150400\r
2017-10-26,134800\r
2017-10-28,134800\r
2017-10-31,134800\r
2017-11-17,184100\r
2017-11-20,184100\r
2017-11-22,187300\r
2017-11-25,187300\r
2017-11-27,187300\r
2017-11-30,184700\r
2018-01-31,358600\r
2018-02-10,359100\r
2018-02-15,360700\r
2018-02-25,361600\r
2018-03-02,360600\r
2018-03-07,360600\r
2018-03-22,366500\r
2018-03-30,366500\r
2018-04-21,366000\r
2018-04-24,366000\r
2018-04-26,366000\r
2018-05-11,365700\r
2018-05-21,366900\r
2018-05-24,365100\r
2018-06-20,365900\r
2018-06-23,365900\r
2018-06-25,366400\r
2018-07-08,360100\r
2018-07-10,360100\r
2018-07-15,358200\r
2018-07-18,358200\r
2018-07-23,358200\r
2018-07-25,359100\r
2018-07-30,356000\r
2018-08-02,356000\r
2018-08-04,356400\r
2018-08-12,350800\r
2018-08-19,296500\r
2018-08-22,296500\r
2018-08-27,296500\r
2018-09-03,204000\r
2018-09-08,210700\r
2018-09-11,210700\r
2018-09-16,194000\r
2018-09-18,194000\r
2018-09-23,161100\r
2018-09-26,161100\r
2018-09-28,161100\r
2018-10-03,161700\r
2018-10-06,140300\r
2018-10-13,140300\r
2018-10-23,148300\r
2018-11-12,189500\r
2018-11-15,189500\r
2018-11-17,193300\r
2018-11-22,193300\r
2018-11-27,186100\r
2018-12-07,185700\r
2018-12-10,180900\r
2019-01-11,263400\r
2019-01-16,264800\r
2019-01-19,264800\r
2019-01-24,264800\r
2019-01-26,262300\r
2019-02-15,357700\r
2019-02-18,357700\r
2019-02-20,360300\r
2019-02-23,360300\r
2019-02-25,358500\r
2019-02-28,358500\r
2019-03-12,362100\r
2019-03-22,355700\r
2019-03-25,355700\r
2019-03-27,360800\r
2019-03-30,360800\r
2019-04-01,358400\r
2019-04-09,360400\r
2019-05-01,363300\r
2019-05-06,357000\r
2019-05-09,357000\r
2019-05-11,357000\r
2019-05-14,357000\r
2019-05-16,357000\r
2019-07-05,355100\r
2019-07-08,355100\r
2019-07-10,356500\r
2019-07-13,356500\r
2019-07-15,355400\r
2019-07-20,355400\r
2019-07-23,359400\r
2019-07-25,350300\r
2019-07-28,354600\r
2019-08-02,301200\r
2019-08-04,301500\r
2019-08-09,257700\r
2019-08-14,238600\r
2019-08-17,238600\r
2019-08-22,240000\r
2019-08-24,235100\r
2019-08-29,238000\r
2019-09-03,224800\r
2019-09-06,224800\r
2019-09-08,224800\r
2019-09-13,158900\r
2019-09-16,158900\r
2019-09-18,158900\r
2019-09-21,158900\r
2019-09-26,158900\r
2019-10-08,145200\r
2019-10-11,145200\r
2019-10-13,150000\r
2019-10-26,137100\r
2020-01-11,358800\r
2020-01-14,358800\r
2020-01-16,357800\r
2020-01-19,357800\r
2020-01-29,357000\r
2020-01-31,357000\r
2020-02-05,347300\r
2020-02-10,347900\r
2020-02-15,351700\r
2020-02-18,351700\r
2020-02-20,352000\r
2020-02-23,351000\r
2020-03-11,359200\r
2020-03-21,361400\r
2020-03-24,361400\r
2020-03-26,361400\r
2020-03-31,360500\r
2020-04-03,360500\r
2020-04-05,361100\r
2020-04-08,351700\r
2020-04-10,358200\r
2020-04-15,356500\r
2020-04-25,359600\r
2020-04-30,357700\r
2020-05-05,359800\r
2020-05-08,359800\r
2020-05-18,359800\r
2020-05-20,364300\r
2020-05-25,366700\r
2020-05-28,366700\r
2020-05-30,363000\r
2020-06-12,363100\r
2020-06-14,363100\r
2020-06-24,357900\r
2020-07-04,357900\r
2020-07-07,355200\r
2020-07-09,361400\r
2020-07-19,360300\r
2020-07-22,360300\r
2020-07-24,333700\r
2020-07-27,334200\r
2020-07-29,334200\r
2020-08-03,334200\r
2020-08-06,308000\r
2020-08-08,312000\r
2020-08-18,262100\r
2020-08-21,260600\r
2020-08-23,260600\r
2020-09-02,164900\r
2020-09-05,164900\r
2020-09-07,164900\r
2020-09-10,164900\r
2020-09-12,165000\r
2020-09-17,165000\r
2020-11-21,340400\r
2020-11-26,341600\r
2020-11-29,341600\r
2021-02-14,363700\r
2021-02-17,363700\r
2021-02-19,363700\r
2021-02-24,362100\r
2021-02-27,362800\r
2021-03-01,356100\r
2021-03-04,362600\r
2021-03-09,354200\r
2021-03-31,364800\r
2021-04-03,364800\r
2021-04-05,368700\r
2021-04-08,368700\r
2021-04-15,368700\r
2021-04-20,365900\r
2021-04-23,365900\r
2021-05-20,357100\r
2021-05-28,357100\r
2021-05-30,357100\r
2021-06-09,359100\r
2021-06-14,364100\r
2021-06-22,364100\r
2021-07-19,365100\r
2021-07-22,365100\r
2021-08-28,201800\r
2021-08-31,201800\r
2021-09-05,201800\r
2021-09-12,170000\r
2021-09-17,170000\r
2021-09-22,170000\r
2021-10-07,169200\r
2021-10-12,173700\r
2021-10-15,173700\r
2021-10-17,173500\r
2021-10-20,171700\r
2021-10-27,155400\r
2022-01-15,353000\r
2022-01-23,353000\r
2022-01-25,356300\r
2022-02-09,357400\r
2022-03-01,367300\r
2022-03-09,367300\r
2022-03-26,363600\r
2022-04-05,366700\r
2022-04-10,365600\r
2022-05-10,345400\r
2022-05-15,354000\r
2022-06-19,360600\r
2022-06-22,360600\r
2022-06-24,360600\r
2022-06-29,360600\r
2022-07-14,319300\r
2022-07-17,319300\r
2022-07-24,319300\r
2022-08-03,192500\r
2022-08-06,192500\r
2022-08-08,192500\r
2022-08-11,192500\r
2022-08-13,192500\r
2022-08-28,163200\r
2022-09-05,163200\r
2022-09-22,142800\r
2022-10-02,142800\r
2022-10-05,121400\r
2022-10-07,121400\r
2022-10-12,121400\r
2022-11-06,103700\r
2022-11-11,105200\r
2022-11-16,102300\r
2023-01-10,270200\r
2023-01-18,270200\r
2023-01-20,334900\r
2023-02-04,360500\r
2023-02-09,362600\r
2023-02-12,362600\r
2023-02-14,359800\r
2023-02-17,362200\r
2023-02-19,361600\r
2023-02-24,364200\r
2023-03-01,364900\r
2023-03-16,368300\r
2023-04-05,364300\r
2023-04-08,364300\r
2023-04-10,364300\r
2023-04-20,354400\r
2023-05-05,358500\r
2023-05-10,358500\r
2023-06-24,365300\r
2023-06-27,365300\r
2023-07-14,364700\r
2023-07-17,364700\r
2023-07-22,364700\r
2023-08-08,322800\r
2023-08-11,322800\r
2023-08-16,322800\r
2023-08-18,323500\r
2023-08-21,252200\r
2023-08-23,253700\r
2023-08-28,253700\r
2023-08-31,228600\r
2023-09-07,222800\r
2023-09-10,222800\r
`;export{r as default};
