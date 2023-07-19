const r=`date,value\r
2017-03-01,211300\r
2017-03-11,195700\r
2017-04-10,215500\r
2017-04-20,211000\r
2017-05-30,216200\r
2017-06-09,221000\r
2017-06-19,211500\r
2017-06-29,202400\r
2017-07-04,190200\r
2017-07-14,176300\r
2017-07-29,129200\r
2017-08-13,96200\r
2017-08-18,93200\r
2017-08-23,101600\r
2017-09-02,83700\r
2017-09-07,75000\r
2017-09-12,73200\r
2017-10-07,54500\r
2017-10-12,48500\r
2017-10-17,47700\r
2017-10-22,45900\r
2017-11-01,48900\r
2017-11-16,45900\r
2017-11-21,46000\r
2017-11-26,41600\r
2017-12-06,42200\r
2017-12-16,44900\r
2017-12-21,45100\r
2018-01-30,57900\r
2018-02-04,59000\r
2018-02-09,64400\r
2018-02-14,65500\r
2018-03-21,218100\r
2018-03-26,212100\r
2018-04-05,214700\r
2018-04-15,210400\r
2018-04-20,198800\r
2018-04-25,207400\r
2018-05-05,204500\r
2018-05-15,212500\r
2018-05-25,220700\r
2018-06-09,216500\r
2018-06-14,209400\r
2018-06-19,215000\r
2018-07-04,215200\r
2018-07-19,205200\r
2018-08-28,190900\r
2018-09-02,191100\r
2018-09-07,182000\r
2018-09-17,180500\r
2018-09-27,175600\r
2018-10-02,170300\r
2018-12-06,191700\r
2018-12-11,189600\r
2019-01-10,166800\r
2019-01-15,173500\r
2019-01-25,67900\r
2019-01-30,178300\r
2019-02-04,133800\r
2019-02-14,147500\r
2019-02-19,194200\r
2019-03-01,163200\r
2019-03-11,190200\r
2019-03-16,168000\r
2019-03-21,173500\r
2019-03-26,189300\r
2019-03-31,147700\r
2019-04-05,179900\r
2019-04-15,177000\r
2019-04-20,216200\r
2019-04-30,174000\r
2019-05-10,186200\r
2019-05-30,202700\r
2019-06-04,207600\r
2019-06-19,195000\r
2019-06-24,188800\r
2019-06-29,185800\r
2019-07-04,180800\r
2019-07-14,183700\r
2019-07-19,162200\r
2019-07-29,128700\r
2019-08-03,128200\r
2019-08-08,123100\r
2019-08-18,102400\r
2019-08-23,91900\r
2019-09-02,78400\r
2019-09-07,80300\r
2019-09-12,75100\r
2019-09-17,73700\r
2019-09-27,63200\r
2019-10-02,67600\r
2019-10-07,68200\r
2019-10-27,142300\r
2019-11-06,142400\r
2019-11-16,180400\r
2019-12-06,181900\r
2019-12-21,107400\r
2020-01-05,164000\r
2020-01-30,195900\r
2020-02-04,173300\r
2020-02-09,192800\r
2020-02-14,138600\r
2020-02-24,164200\r
2020-03-20,180500\r
2020-04-04,169400\r
2020-04-09,177900\r
2020-04-14,167500\r
2020-05-04,180000\r
2020-05-19,216700\r
2020-06-23,204200\r
2020-06-28,205300\r
2020-07-03,192900\r
2020-07-08,192300\r
2020-07-23,186900\r
2020-08-07,141000\r
2020-08-12,118600\r
2020-08-22,80700\r
2020-08-27,91800\r
2020-09-01,86700\r
2020-09-06,82400\r
2020-09-16,84400\r
2020-09-26,88800\r
2020-10-11,93400\r
2020-10-31,95100\r
2020-11-05,94200\r
2020-11-10,83500\r
2020-11-20,83200\r
2020-11-25,95600\r
2020-11-30,109500\r
2020-12-25,80300\r
2020-12-30,69900\r
2021-01-14,104200\r
2021-01-19,105600\r
2021-01-24,106700\r
2021-02-23,157500\r
2021-02-28,151600\r
2021-03-10,161900\r
2021-03-30,165300\r
2021-05-04,197700\r
2021-05-19,192800\r
2021-06-03,210900\r
2021-06-13,212800\r
2021-06-18,206600\r
2021-07-13,199400\r
2021-07-18,193400\r
2021-07-23,181700\r
2021-07-28,169500\r
2021-08-02,152500\r
2021-08-17,109300\r
2021-08-22,96300\r
2021-08-27,86400\r
2021-09-01,84200\r
2021-09-11,75500\r
2021-09-21,72100\r
2021-10-01,70000\r
2021-10-06,72500\r
2021-10-11,71800\r
2021-10-16,69700\r
2021-11-05,73000\r
2021-11-20,78500\r
2021-11-30,77700\r
2021-12-20,95200\r
2022-01-09,146100\r
2022-01-14,141400\r
2022-01-24,146300\r
2022-01-29,158600\r
2022-02-08,151500\r
2022-02-13,158700\r
2022-02-18,159600\r
2022-02-23,168100\r
2022-02-28,165400\r
2022-03-25,179200\r
2022-04-09,168200\r
2022-04-14,164300\r
2022-04-19,161300\r
2022-05-14,182200\r
2022-05-19,173300\r
2022-05-29,155300\r
2022-06-13,107800\r
2022-06-28,96400\r
2022-07-03,90000\r
2022-07-08,80600\r
2022-07-23,64900\r
2022-08-02,59700\r
2022-08-07,55000\r
2022-08-12,55400\r
2022-08-22,59500\r
2022-08-27,60100\r
2022-09-11,55700\r
2022-09-16,56000\r
2022-09-21,56900\r
2022-09-26,57100\r
2022-10-06,54900\r
2022-10-26,57800\r
2022-10-31,56500\r
2022-11-05,54400\r
2022-11-20,57600\r
2022-11-25,59700\r
2022-11-30,61800\r
2022-12-05,74000\r
2022-12-25,186500\r
2023-01-04,193700\r
2023-01-19,190000\r
2023-01-29,182700\r
2023-02-03,181000\r
2023-02-08,180500\r
2023-02-13,178300\r
2023-02-18,191000\r
2023-03-05,196600\r
2023-03-20,198000\r
2023-03-30,207900\r
2023-04-14,203400\r
2023-04-19,211800\r
2023-04-24,204200\r
2023-05-04,200900\r
2023-05-24,192700\r
2023-06-03,203100\r
2023-06-23,202800\r
2023-06-28,206400\r
2023-07-03,201000\r
2023-07-08,200700\r
`;export{r as default};
