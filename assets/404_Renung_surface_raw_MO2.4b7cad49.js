const n=`date,value\r
2017-01-19,180500\r
2017-01-26,197100\r
2017-01-29,187100\r
2017-02-15,209900\r
2017-02-18,214900\r
2017-02-25,209900\r
2017-03-10,216900\r
2017-03-17,216900\r
2017-03-30,219700\r
2017-04-06,229100\r
2017-04-09,224700\r
2017-04-19,223200\r
2017-04-29,212500\r
2017-05-09,230900\r
2017-05-16,212600\r
2017-05-19,225700\r
2017-05-26,220600\r
2017-06-05,224600\r
2017-06-18,229000\r
2017-06-25,229000\r
2017-06-28,229000\r
2017-07-05,229200\r
2017-07-18,226500\r
2017-08-02,212100\r
2017-08-04,227800\r
2017-08-07,227800\r
2017-08-12,226600\r
2017-08-14,225400\r
2017-08-17,216800\r
2017-08-22,218700\r
2017-08-24,218600\r
2017-08-27,197500\r
2017-08-29,197000\r
2017-09-01,199000\r
2017-09-03,194300\r
2017-09-06,194300\r
2017-09-08,194300\r
2017-09-21,194600\r
2017-09-23,194600\r
2017-09-26,194600\r
2017-09-28,194600\r
2017-10-08,190100\r
2017-10-11,188800\r
2017-10-13,187800\r
2017-10-16,188200\r
2017-10-18,188200\r
2017-10-23,188500\r
2017-10-26,186000\r
2017-10-28,188700\r
2017-10-31,186200\r
2017-11-05,185800\r
2017-11-07,191200\r
2017-11-17,184900\r
2017-11-20,184900\r
2017-11-22,190800\r
2017-11-25,190800\r
2017-11-27,183700\r
2017-11-30,182600\r
2017-12-05,180800\r
2017-12-07,180800\r
2017-12-12,189800\r
2017-12-15,189800\r
2017-12-20,199900\r
2017-12-25,198800\r
2017-12-27,198800\r
2018-03-02,224200\r
2018-03-07,224200\r
2018-03-15,232600\r
2018-03-17,232600\r
2018-03-22,237100\r
2018-03-30,235100\r
2018-04-06,218900\r
2018-04-09,218900\r
2018-04-19,223500\r
2018-04-21,237200\r
2018-04-24,226300\r
2018-04-26,226300\r
2018-05-06,220000\r
2018-05-11,238700\r
2018-05-21,239200\r
2018-05-24,233500\r
2018-06-03,225100\r
2018-06-20,230200\r
2018-06-23,232800\r
2018-06-25,227000\r
2018-07-08,235100\r
2018-07-10,226000\r
2018-07-13,226600\r
2018-07-15,226600\r
2018-07-18,226600\r
2018-07-23,236100\r
2018-07-25,231400\r
2018-07-30,223400\r
2018-08-02,225400\r
2018-08-04,227800\r
2018-08-12,223200\r
2018-08-19,227300\r
2018-08-22,220000\r
2018-08-27,218500\r
2018-09-01,214600\r
2018-09-03,210100\r
2018-09-08,215600\r
2018-09-11,221900\r
2018-09-16,223000\r
2018-09-18,223000\r
2018-09-23,227700\r
2018-09-26,218100\r
2018-09-28,224000\r
2018-10-03,224500\r
2018-10-06,216800\r
2018-10-13,216600\r
2018-11-22,191600\r
2018-11-27,191600\r
2019-02-03,229500\r
2019-02-13,230600\r
2019-02-15,225900\r
2019-02-18,225900\r
2019-02-20,223100\r
2019-02-23,225700\r
2019-02-25,224800\r
2019-02-28,224800\r
2019-03-12,226500\r
2019-03-20,214900\r
2019-03-22,221700\r
2019-03-25,221700\r
2019-03-27,221500\r
2019-03-30,224500\r
2019-04-01,224500\r
2019-04-09,229300\r
2019-04-16,215600\r
2019-04-19,215600\r
2019-05-01,225300\r
2019-05-06,224900\r
2019-05-09,224900\r
2019-05-11,224900\r
2019-05-14,224300\r
2019-05-16,224300\r
2019-05-29,237600\r
2019-06-13,244900\r
2019-06-18,239600\r
2019-06-23,239600\r
2019-06-25,240000\r
2019-06-28,233700\r
2019-07-05,224000\r
2019-07-08,225900\r
2019-07-10,224200\r
2019-07-13,228300\r
2019-07-15,227400\r
2019-07-20,227400\r
2019-07-23,226300\r
2019-07-25,231500\r
2019-07-28,234200\r
2019-08-02,221100\r
2019-08-04,227600\r
2019-08-09,227600\r
2019-08-14,229200\r
2019-08-17,225600\r
2019-08-22,219100\r
2019-08-24,223900\r
2019-08-29,221400\r
2019-09-03,218300\r
2019-09-06,218300\r
2019-09-08,218100\r
2019-09-11,208800\r
2019-09-13,217600\r
2019-09-16,213900\r
2019-09-18,210600\r
2019-09-21,210600\r
2019-09-26,212800\r
2019-10-08,206600\r
2019-10-11,208200\r
2019-10-13,202800\r
2019-10-26,208900\r
2019-12-05,224000\r
2019-12-07,224000\r
2019-12-10,224100\r
2019-12-15,211900\r
2019-12-17,211900\r
2019-12-20,211900\r
2019-12-25,212000\r
2019-12-27,217300\r
2019-12-30,211200\r
2020-01-09,214500\r
2020-01-11,218400\r
2020-01-14,216800\r
2020-01-16,216800\r
2020-01-19,217500\r
2020-01-29,220400\r
2020-01-31,223300\r
2020-02-03,209200\r
2020-02-05,211800\r
2020-02-10,211800\r
2020-02-15,218000\r
2020-02-18,208600\r
2020-02-20,219000\r
2020-02-23,220700\r
2020-03-21,228000\r
2020-03-24,228800\r
2020-03-26,222500\r
2020-03-31,222500\r
2020-04-03,223900\r
2020-04-05,223200\r
2020-04-08,222800\r
2020-04-10,223800\r
2020-04-15,228300\r
2020-04-25,236300\r
2020-04-30,235600\r
2020-05-05,75600\r
2020-05-08,75600\r
2020-05-18,229600\r
2020-05-20,223200\r
2020-05-25,233000\r
2020-05-28,237800\r
2020-05-30,234100\r
2020-06-12,235500\r
2020-06-14,239400\r
2020-06-24,222400\r
2020-07-04,223300\r
2020-07-07,232500\r
2020-07-09,231800\r
2020-07-19,232500\r
2020-07-22,232100\r
2020-07-24,228400\r
2020-07-27,221100\r
2020-07-29,221100\r
2020-08-03,221100\r
2020-08-06,215100\r
2020-08-08,211300\r
2020-08-18,206900\r
2020-08-21,206900\r
2020-08-23,209300\r
2020-08-31,200400\r
2020-09-02,199500\r
2020-09-05,195600\r
2020-09-07,195600\r
2020-09-10,199600\r
2020-09-12,196800\r
2020-09-17,196700\r
2020-09-30,193000\r
2020-10-12,191200\r
2020-10-30,218200\r
2020-11-09,215800\r
2020-11-11,216500\r
2020-11-14,213500\r
2020-11-21,211800\r
2020-11-26,211900\r
2020-11-29,211000\r
2020-12-26,220200\r
2021-01-03,230200\r
2021-01-08,230200\r
2021-01-10,230300\r
2021-01-18,228700\r
2021-02-24,234100\r
2021-02-27,233300\r
2021-03-01,231600\r
2021-03-04,233600\r
2021-03-09,228100\r
2021-03-14,225100\r
2021-03-21,229400\r
2021-03-24,231800\r
2021-03-29,227700\r
2021-03-31,231300\r
2021-04-03,230500\r
2021-04-05,231400\r
2021-04-08,230400\r
2021-04-15,233500\r
2021-04-20,236700\r
2021-04-23,239700\r
2021-05-03,236400\r
2021-05-08,225400\r
2021-05-28,232000\r
2021-05-30,232000\r
2021-06-07,232000\r
2021-06-09,218000\r
2021-06-14,232000\r
2021-06-22,232000\r
2021-07-17,210800\r
2021-07-19,210800\r
2021-07-22,226900\r
2021-08-11,223100\r
2021-08-23,208300\r
2021-08-26,212200\r
2021-08-28,212200\r
2021-08-31,208900\r
2021-09-05,206900\r
2021-09-12,205000\r
2021-09-17,202400\r
2021-09-22,203100\r
2021-09-25,202400\r
2021-09-27,201300\r
2021-09-30,199200\r
2021-10-07,189900\r
2021-10-12,185000\r
2021-10-15,185000\r
2021-10-17,180300\r
2021-10-20,186000\r
2021-10-27,176600\r
2021-11-09,193800\r
2021-11-11,195400\r
2021-11-19,193300\r
2021-12-14,230300\r
2021-12-16,230300\r
2021-12-19,231200\r
2021-12-21,231200\r
2022-01-15,216100\r
2022-01-23,230600\r
2022-01-25,221300\r
2022-02-09,223500\r
2022-03-09,219000\r
2022-03-19,219000\r
2022-03-21,223300\r
2022-03-24,223300\r
2022-03-26,223300\r
2022-04-05,220900\r
2022-04-10,220900\r
2022-05-08,222500\r
2022-05-10,222500\r
2022-05-15,222500\r
2022-05-28,223400\r
2022-05-30,223400\r
2022-06-17,222000\r
2022-06-19,222100\r
2022-06-22,222100\r
2022-06-24,222100\r
2022-07-02,225800\r
2022-07-04,225800\r
2022-07-07,228200\r
2022-07-12,224000\r
2022-07-14,220000\r
2022-07-17,223100\r
2022-07-24,219400\r
2022-07-27,222200\r
2022-08-01,214400\r
2022-08-03,214400\r
2022-08-06,210600\r
2022-08-08,210600\r
2022-08-11,204700\r
2022-08-13,197100\r
2022-08-18,190000\r
2022-08-28,186500\r
2022-09-05,187100\r
2022-09-10,174500\r
2022-09-12,174500\r
2022-09-15,171600\r
2022-09-20,168800\r
2022-09-22,168100\r
2022-10-02,166100\r
2022-10-05,156200\r
2022-10-07,161400\r
2022-10-12,162100\r
2022-10-15,168400\r
2022-10-17,171600\r
2022-10-22,171400\r
2022-11-06,167800\r
2022-11-11,167800\r
2022-11-16,174000\r
2022-12-11,179500\r
2022-12-14,179500\r
2022-12-21,191900\r
2022-12-24,191400\r
2023-01-03,194200\r
2023-01-10,202800\r
2023-01-18,202100\r
2023-01-20,212000\r
2023-02-02,231800\r
2023-02-04,234400\r
2023-02-09,229000\r
2023-02-12,232900\r
2023-02-14,228000\r
2023-02-17,230800\r
2023-02-19,230800\r
2023-02-24,233300\r
2023-03-01,235800\r
2023-03-09,236600\r
2023-04-05,235300\r
2023-04-08,235300\r
2023-04-10,235300\r
2023-04-18,217400\r
2023-04-20,217300\r
2023-05-05,216800\r
2023-05-10,216800\r
2023-05-28,222500\r
2023-05-30,223800\r
2023-06-02,228300\r
2023-06-04,228300\r
2023-06-09,225500\r
2023-06-24,235300\r
2023-06-27,235300\r
2023-07-07,227500\r
2023-07-09,229000\r
2023-07-14,227500\r
2023-07-17,232000\r
2023-07-22,230000\r
2023-07-27,224700\r
2023-07-29,225000\r
2023-08-08,222000\r
2023-08-11,222000\r
2023-08-16,216600\r
2023-08-18,216600\r
2023-08-21,213900\r
2023-08-23,215400\r
2023-08-28,221800\r
2023-08-31,214000\r
2023-09-05,207700\r
2023-09-07,207700\r
2023-09-10,202400\r
2023-09-15,202900\r
2023-09-20,208600\r
2023-09-25,211900\r
2023-09-27,211000\r
2023-09-30,213100\r
2023-10-02,213600\r
2023-10-05,213600\r
2023-10-07,211300\r
2023-10-10,208600\r
2023-10-12,207400\r
2023-10-15,205900\r
`;export{n as default};
