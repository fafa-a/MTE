const r=`date,value\r
2017-01-03,139100\r
2017-01-13,139100\r
2017-02-22,170500\r
2017-02-25,171700\r
2017-03-07,162400\r
2017-03-17,206600\r
2017-03-27,206500\r
2017-04-23,204300\r
2017-05-03,204300\r
2017-05-16,200500\r
2017-05-23,200500\r
2017-05-26,206700\r
2017-06-02,204700\r
2017-06-05,192800\r
2017-06-25,201700\r
2017-07-02,198800\r
2017-07-05,201300\r
2017-07-07,199700\r
2017-07-10,199700\r
2017-07-12,199700\r
2017-07-17,190200\r
2017-07-22,185200\r
2017-07-27,188300\r
2017-08-04,183500\r
2017-08-06,183500\r
2017-08-11,177700\r
2017-08-14,176900\r
2017-08-19,182600\r
2017-08-21,173000\r
2017-08-24,177500\r
2017-08-26,172300\r
2017-08-29,175200\r
2017-09-03,169100\r
2017-09-05,162700\r
2017-09-08,164600\r
2017-09-10,149600\r
2017-09-13,156400\r
2017-09-20,155600\r
2017-09-23,151900\r
2017-09-28,153200\r
2017-10-03,149000\r
2017-10-05,139400\r
2017-10-08,144900\r
2017-10-10,140200\r
2017-10-13,146000\r
2017-10-15,141200\r
2017-10-18,140800\r
2017-10-25,139800\r
2017-10-28,137400\r
2017-10-30,145100\r
2017-11-07,136600\r
2017-11-17,150200\r
2017-11-19,160600\r
2017-11-22,153800\r
2017-11-24,153800\r
2017-11-27,153800\r
2017-11-29,158800\r
2017-12-24,178400\r
2017-12-27,178400\r
2018-02-25,181700\r
2018-02-27,182000\r
2018-03-02,183100\r
2018-03-14,182600\r
2018-03-19,199300\r
2018-03-22,199300\r
2018-04-01,194400\r
2018-04-18,199400\r
2018-04-21,203800\r
2018-04-23,203800\r
2018-04-26,200000\r
2018-05-06,196900\r
2018-05-11,200100\r
2018-05-18,200100\r
2018-05-21,200100\r
2018-06-20,199000\r
2018-06-22,199000\r
2018-06-25,203800\r
2018-06-27,203800\r
2018-07-02,202800\r
2018-07-07,200200\r
2018-07-10,198200\r
2018-07-12,197900\r
2018-07-15,196200\r
2018-07-17,196200\r
2018-07-20,195300\r
2018-07-22,191300\r
2018-07-25,198000\r
2018-07-27,205000\r
2018-07-30,197800\r
2018-08-01,198500\r
2018-08-04,194100\r
2018-08-06,198300\r
2018-08-11,188200\r
2018-08-16,186300\r
2018-08-19,192200\r
2018-08-21,186000\r
2018-08-26,191300\r
2018-08-31,181900\r
2018-09-03,176300\r
2018-09-08,188000\r
2018-09-10,188000\r
2018-09-13,188000\r
2018-09-20,170600\r
2018-09-23,172900\r
2018-09-25,169500\r
2018-09-28,169500\r
2018-09-30,169600\r
2018-10-03,165200\r
2018-10-05,165800\r
2018-10-23,164300\r
2018-10-25,175000\r
2018-10-30,175000\r
2018-11-04,164000\r
2018-11-29,148700\r
2018-12-19,148000\r
2018-12-27,157600\r
2018-12-29,157600\r
2019-01-01,166800\r
2019-01-03,171500\r
2019-01-11,171500\r
2019-01-16,167300\r
2019-02-12,166700\r
2019-02-15,174700\r
2019-02-17,166100\r
2019-02-20,171200\r
2019-02-22,168200\r
2019-02-25,168400\r
2019-02-27,170200\r
2019-03-12,179300\r
2019-03-22,177300\r
2019-03-24,174100\r
2019-03-27,175700\r
2019-03-29,174900\r
2019-04-01,172600\r
2019-04-08,174800\r
2019-04-13,173800\r
2019-05-01,188600\r
2019-05-06,199100\r
2019-05-11,199100\r
2019-05-13,192900\r
2019-05-16,192900\r
2019-05-23,190600\r
2019-06-02,195400\r
2019-06-12,195400\r
2019-06-17,187500\r
2019-06-22,200900\r
2019-06-25,200900\r
2019-06-27,189300\r
2019-06-30,196800\r
2019-07-02,196800\r
2019-07-05,203100\r
2019-07-07,203100\r
2019-07-10,196100\r
2019-07-12,202800\r
2019-07-15,203800\r
2019-07-17,195100\r
2019-07-22,202000\r
2019-07-25,197400\r
2019-08-01,199000\r
2019-08-04,199400\r
2019-08-09,186800\r
2019-08-11,188400\r
2019-08-14,183000\r
2019-08-16,184500\r
2019-08-21,180500\r
2019-08-24,184000\r
2019-08-26,181200\r
2019-08-29,183800\r
2019-08-31,181000\r
2019-09-03,182100\r
2019-09-05,182100\r
2019-09-13,177200\r
2019-09-15,175100\r
2019-09-18,171900\r
2019-09-20,172400\r
2019-10-08,158000\r
2019-10-13,158000\r
2019-10-25,155200\r
2019-10-30,164900\r
2019-11-04,162400\r
2019-11-09,162400\r
2020-01-01,155800\r
2020-01-06,168200\r
2020-01-11,164300\r
2020-01-16,164300\r
2020-01-18,172200\r
2020-02-05,170100\r
2020-02-07,170100\r
2020-02-15,170100\r
2020-02-20,171600\r
2020-02-22,166400\r
2020-03-01,166400\r
2020-03-08,183700\r
2020-03-11,183700\r
2020-03-13,186700\r
2020-03-18,181500\r
2020-03-21,182700\r
2020-03-28,175700\r
2020-03-31,176400\r
2020-04-05,179700\r
2020-04-07,178400\r
2020-04-10,191400\r
2020-04-12,191400\r
2020-04-15,191400\r
2020-04-25,190700\r
2020-05-05,189300\r
2020-05-07,192800\r
2020-05-17,191300\r
2020-05-20,190300\r
2020-05-22,190200\r
2020-05-25,192300\r
2020-05-27,191800\r
2020-05-30,191800\r
2020-06-21,194200\r
2020-06-24,194200\r
2020-06-26,194200\r
2020-07-01,194200\r
2020-07-04,187600\r
2020-07-09,210300\r
2020-07-11,210300\r
2020-07-14,198900\r
2020-07-19,202600\r
2020-07-21,198500\r
2020-07-24,194700\r
2020-07-26,198100\r
2020-07-29,197300\r
2020-07-31,193600\r
2020-08-03,193600\r
2020-08-05,185100\r
2020-08-08,193400\r
2020-08-10,189200\r
2020-08-15,189900\r
2020-08-20,190800\r
2020-08-23,187900\r
2020-08-25,181200\r
2020-09-02,176600\r
2020-09-04,176900\r
2020-09-07,164600\r
2020-09-12,168400\r
2020-09-14,170800\r
2020-09-17,170500\r
2020-09-19,167400\r
2020-10-17,165200\r
2020-10-24,168300\r
2020-11-01,168300\r
2020-11-11,127800\r
2020-11-18,132000\r
2020-11-21,127300\r
2020-11-23,127300\r
2020-11-26,127300\r
2021-02-11,154400\r
2021-02-14,154400\r
2021-02-19,154400\r
2021-03-23,180300\r
2021-03-26,176300\r
2021-03-28,193100\r
2021-03-31,193100\r
2021-04-02,193100\r
2021-04-05,201800\r
2021-04-07,201800\r
2021-04-15,204500\r
2021-04-20,203800\r
2021-04-22,203800\r
2021-05-12,205400\r
2021-05-20,205400\r
2021-05-27,205200\r
2021-05-30,206000\r
2021-06-09,197200\r
2021-06-11,199100\r
2021-06-14,199100\r
2021-06-16,195500\r
2021-06-19,195500\r
2021-06-21,202500\r
2021-06-26,193800\r
2021-07-01,186100\r
2021-07-19,186800\r
2021-07-21,186800\r
2021-07-26,186800\r
2021-07-29,196000\r
2021-08-05,194200\r
2021-08-10,196400\r
2021-08-13,196400\r
2021-08-18,196400\r
2021-08-20,199200\r
2021-08-23,196800\r
2021-08-25,196800\r
2021-08-28,199700\r
2021-08-30,186600\r
2021-09-04,189000\r
2021-09-07,189000\r
2021-09-12,184000\r
2021-09-14,184000\r
2021-09-17,185900\r
2021-09-22,181100\r
2021-09-24,174900\r
2021-09-29,174300\r
2021-10-12,170900\r
2021-10-14,174600\r
2021-10-17,174600\r
2021-10-24,165300\r
2021-10-27,162600\r
2021-12-16,168800\r
2021-12-18,175600\r
2021-12-21,169500\r
2021-12-23,169500\r
2022-01-12,172600\r
2022-01-15,175100\r
2022-01-17,169800\r
2022-01-22,171700\r
2022-01-25,171500\r
2022-01-27,171300\r
2022-01-30,168300\r
2022-02-01,168300\r
2022-02-06,165600\r
2022-02-09,173900\r
2022-02-26,168000\r
2022-03-01,171700\r
2022-03-03,174500\r
2022-03-08,174300\r
2022-03-26,169000\r
2022-04-05,188100\r
2022-04-10,188100\r
2022-04-15,192100\r
2022-04-17,188000\r
2022-04-27,176600\r
2022-05-17,192100\r
2022-05-20,192100\r
2022-05-22,193600\r
2022-05-27,194900\r
2022-05-30,188000\r
2022-06-01,192900\r
2022-06-04,188400\r
2022-06-06,195500\r
2022-06-11,195500\r
2022-06-14,193800\r
2022-06-16,193800\r
2022-06-19,192600\r
2022-06-29,192300\r
2022-07-11,183100\r
2022-07-14,188500\r
2022-07-16,184300\r
2022-07-19,186200\r
2022-07-21,183900\r
2022-07-24,182500\r
2022-07-26,181700\r
2022-07-29,179200\r
2022-07-31,172600\r
2022-08-03,172300\r
2022-08-05,173800\r
2022-08-08,171100\r
2022-08-10,171100\r
2022-08-13,168300\r
2022-08-15,163400\r
2022-08-20,157100\r
2022-08-23,163300\r
2022-08-28,152400\r
2022-08-30,148200\r
2022-09-02,148700\r
2022-09-04,145100\r
2022-09-12,137600\r
2022-09-19,121700\r
2022-09-22,113900\r
2022-10-02,106800\r
2022-10-04,107500\r
2022-10-07,107500\r
2022-10-09,101900\r
2022-10-12,101900\r
2022-10-22,98000\r
2022-10-24,98000\r
2022-10-27,98000\r
2022-11-01,99900\r
2022-11-06,91700\r
2022-11-08,94700\r
2022-11-11,94700\r
2022-11-13,96100\r
2022-11-16,94200\r
2022-12-06,131100\r
2022-12-26,139600\r
2022-12-28,143700\r
2023-01-10,103100\r
2023-01-12,134300\r
2023-01-20,134300\r
2023-02-06,157900\r
2023-02-09,157900\r
2023-02-11,162600\r
2023-02-14,162500\r
2023-02-16,164900\r
2023-02-19,166800\r
2023-02-21,166800\r
2023-02-26,166400\r
2023-03-01,169400\r
2023-03-03,175300\r
2023-03-13,184600\r
2023-03-16,183500\r
2023-03-28,194000\r
2023-04-05,207000\r
2023-04-07,198400\r
2023-04-15,207500\r
2023-04-17,200300\r
2023-05-02,197600\r
2023-05-27,187600\r
2023-05-30,187600\r
2023-06-04,191100\r
2023-06-16,188800\r
2023-06-24,188800\r
2023-06-26,188800\r
2023-07-09,195500\r
2023-07-11,195500\r
2023-07-14,207300\r
2023-07-16,202200\r
2023-07-19,202200\r
2023-07-21,210100\r
2023-07-26,204100\r
2023-07-29,201600\r
2023-07-31,202000\r
2023-08-03,202000\r
2023-08-05,202000\r
2023-08-08,200200\r
2023-08-10,197800\r
2023-08-13,200000\r
2023-08-15,200000\r
2023-08-18,200000\r
2023-08-20,197300\r
2023-08-23,194100\r
2023-09-04,194100\r
2023-09-07,194300\r
2023-09-14,184300\r
2023-09-19,173700\r
2023-09-24,153300\r
2023-09-27,157600\r
2023-09-29,151000\r
2023-10-02,151700\r
2023-10-04,147000\r
2023-10-07,143000\r
2023-10-12,140200\r
2023-10-27,127500\r
2023-11-06,129400\r
`;export{r as default};
