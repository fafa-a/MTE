const r=`date,value\r
2017-01-19,277200\r
2017-01-26,278300\r
2017-01-29,269000\r
2017-02-08,261400\r
2017-02-15,294500\r
2017-02-18,315400\r
2017-02-25,301500\r
2017-03-10,304700\r
2017-03-30,302800\r
2017-04-06,310600\r
2017-04-09,311300\r
2017-04-16,319700\r
2017-04-19,318800\r
2017-04-29,326000\r
2017-05-06,323800\r
2017-05-09,318400\r
2017-05-16,310000\r
2017-05-19,315200\r
2017-05-26,315600\r
2017-06-05,309900\r
2017-06-18,312600\r
2017-06-25,312600\r
2017-06-28,312600\r
2017-07-05,305400\r
2017-07-18,299400\r
2017-07-23,299400\r
2017-07-28,299400\r
2017-08-02,290600\r
2017-08-04,301500\r
2017-08-07,307200\r
2017-08-12,306400\r
2017-08-14,306900\r
2017-08-17,304800\r
2017-08-22,304400\r
2017-08-24,313600\r
2017-08-27,297000\r
2017-08-29,296900\r
2017-09-01,296900\r
2017-09-03,283700\r
2017-09-06,283700\r
2017-09-08,283700\r
2017-09-13,279800\r
2017-09-21,296300\r
2017-09-23,296300\r
2017-09-26,292600\r
2017-09-28,292600\r
2017-10-08,290900\r
2017-10-11,291500\r
2017-10-13,290000\r
2017-10-16,298100\r
2017-10-23,296300\r
2017-10-26,291700\r
2017-10-28,293900\r
2017-10-31,290700\r
2017-11-02,290700\r
2017-11-05,296600\r
2017-11-07,290800\r
2017-11-15,288600\r
2017-11-17,289100\r
2017-11-20,292200\r
2017-11-22,286400\r
2017-11-25,286400\r
2017-11-27,286400\r
2017-11-30,287300\r
2017-12-05,289100\r
2017-12-12,297100\r
2017-12-15,291100\r
2017-12-20,298700\r
2017-12-25,306300\r
2017-12-27,306200\r
2017-12-30,306200\r
2018-01-24,320600\r
2018-01-29,321600\r
2018-02-15,315200\r
2018-02-25,316000\r
2018-03-02,313500\r
2018-03-07,313500\r
2018-03-15,321000\r
2018-03-17,321000\r
2018-03-22,321300\r
2018-03-30,321000\r
2018-04-04,302500\r
2018-04-19,309700\r
2018-04-21,321100\r
2018-04-24,317500\r
2018-05-06,302800\r
2018-05-11,318000\r
2018-05-21,315900\r
2018-05-24,306700\r
2018-05-29,306700\r
2018-06-03,314200\r
2018-06-20,314200\r
2018-06-23,316500\r
2018-06-25,313800\r
2018-07-03,314200\r
2018-07-08,318400\r
2018-07-10,318400\r
2018-07-13,321000\r
2018-07-15,321000\r
2018-07-23,319700\r
2018-07-25,304800\r
2018-08-02,312700\r
2018-08-04,313100\r
2018-08-12,311100\r
2018-08-17,313400\r
2018-08-19,314400\r
2018-08-22,301100\r
2018-08-27,298500\r
2018-09-01,290600\r
2018-09-03,288200\r
2018-09-08,286800\r
2018-09-11,288700\r
2018-09-18,293100\r
2018-09-23,275500\r
2018-09-26,285400\r
2018-09-28,276100\r
2018-10-03,281900\r
2018-10-11,289600\r
2018-10-16,283000\r
2018-10-21,283000\r
2018-11-10,253700\r
2018-11-15,267300\r
2018-11-17,262800\r
2018-11-22,284200\r
2018-11-25,284200\r
2018-12-07,279900\r
2018-12-12,279900\r
2018-12-20,286200\r
2018-12-27,286200\r
2019-02-15,294800\r
2019-02-18,290000\r
2019-02-20,294300\r
2019-02-23,290500\r
2019-02-25,293600\r
2019-02-28,294700\r
2019-03-05,295000\r
2019-03-07,299900\r
2019-03-12,299400\r
2019-03-20,314500\r
2019-03-22,309200\r
2019-03-25,298200\r
2019-03-27,298500\r
2019-03-30,295200\r
2019-04-04,295200\r
2019-04-09,288600\r
2019-04-16,293700\r
2019-04-19,293700\r
2019-05-01,290800\r
2019-05-06,304400\r
2019-05-09,304400\r
2019-05-11,304400\r
2019-05-14,291900\r
2019-05-16,291900\r
2019-05-29,265800\r
2019-05-31,290900\r
2019-06-03,290900\r
2019-06-08,304900\r
2019-06-13,295700\r
2019-06-23,206400\r
2019-06-25,207200\r
2019-06-28,308100\r
2019-07-03,308100\r
2019-07-05,298700\r
2019-07-08,298700\r
2019-07-10,305100\r
2019-07-15,304400\r
2019-07-23,310400\r
2019-07-25,310400\r
2019-07-28,305900\r
2019-08-09,282100\r
2019-08-12,282100\r
2019-08-14,294000\r
2019-08-17,277100\r
2019-08-22,277600\r
2019-08-24,276400\r
2019-08-27,287700\r
2019-08-29,287700\r
2019-09-03,292100\r
2019-09-06,292100\r
2019-09-08,291700\r
2019-09-11,244300\r
2019-09-13,286800\r
2019-09-16,267600\r
2019-09-18,268300\r
2019-09-26,267300\r
2019-10-08,279600\r
2019-10-11,271300\r
2019-10-13,272500\r
2019-10-21,272500\r
2019-10-26,286000\r
2019-12-05,276200\r
2019-12-10,300400\r
2019-12-15,285900\r
2019-12-20,285900\r
2019-12-25,296300\r
2019-12-27,300200\r
2019-12-30,299200\r
2020-01-09,309000\r
2020-01-11,310300\r
2020-01-14,307200\r
2020-01-16,306200\r
2020-01-19,300000\r
2020-01-24,300000\r
2020-01-29,284600\r
2020-01-31,274000\r
2020-02-03,270100\r
2020-02-15,309500\r
2020-02-18,306000\r
2020-02-20,301700\r
2020-02-23,302500\r
2020-03-11,314900\r
2020-03-21,314900\r
2020-03-24,310400\r
2020-03-26,302600\r
2020-03-29,300600\r
2020-03-31,300600\r
2020-04-03,295300\r
2020-04-05,295300\r
2020-04-08,283800\r
2020-04-10,298600\r
2020-04-13,302300\r
2020-04-15,302300\r
2020-04-18,302300\r
2020-04-23,302300\r
2020-04-30,305900\r
2020-05-03,305900\r
2020-05-05,305900\r
2020-05-18,258700\r
2020-05-20,305600\r
2020-05-25,305600\r
2020-05-28,296500\r
2020-05-30,309100\r
2020-06-02,309100\r
2020-06-07,315900\r
2020-06-12,315900\r
2020-06-14,314100\r
2020-06-24,293400\r
2020-06-27,293400\r
2020-07-04,293400\r
2020-07-07,293400\r
2020-07-09,293400\r
2020-07-19,286400\r
2020-07-22,302500\r
2020-07-24,290400\r
2020-07-27,289200\r
2020-07-29,289200\r
2020-08-01,289200\r
2020-08-06,285800\r
2020-08-08,275300\r
2020-08-16,207700\r
2020-08-18,207700\r
2020-08-31,205200\r
2020-09-02,245200\r
2020-09-05,245200\r
2020-09-07,245200\r
2020-09-10,235600\r
2020-09-12,231700\r
2020-09-15,226300\r
2020-09-17,227700\r
2020-09-25,223800\r
2020-09-30,208200\r
2020-10-10,219700\r
2020-10-12,181800\r
2020-10-15,181800\r
2020-10-30,237300\r
2020-11-01,237300\r
2020-11-04,237300\r
2020-11-11,273600\r
2020-11-14,267600\r
2020-11-21,275800\r
2020-11-26,275800\r
2020-11-29,270900\r
2020-12-06,276400\r
2020-12-26,292000\r
2021-01-03,221400\r
2021-01-08,221400\r
2021-01-10,221400\r
2021-01-18,317800\r
2021-02-17,319700\r
2021-02-19,321000\r
2021-02-24,309800\r
2021-02-27,312400\r
2021-03-09,309300\r
2021-03-21,309200\r
2021-03-29,320200\r
2021-03-31,313200\r
2021-04-03,316700\r
2021-04-05,314300\r
2021-04-08,314300\r
2021-04-15,315800\r
2021-04-18,317500\r
2021-04-20,314000\r
2021-04-23,322600\r
2021-05-03,321600\r
2021-05-08,312900\r
2021-05-20,302800\r
2021-05-23,302800\r
2021-05-28,321000\r
2021-05-30,313100\r
2021-06-02,319000\r
2021-06-07,312600\r
2021-06-09,313400\r
2021-06-14,319000\r
2021-06-22,318900\r
2021-07-22,300800\r
2021-08-11,209000\r
2021-08-16,209000\r
2021-08-21,209000\r
2021-08-26,284500\r
2021-08-28,288400\r
2021-08-31,281000\r
2021-09-05,287200\r
2021-09-12,290800\r
2021-09-15,290800\r
2021-09-17,288200\r
2021-09-20,288200\r
2021-09-22,288200\r
2021-09-25,277000\r
2021-09-30,276800\r
2021-10-07,282800\r
2021-10-10,282800\r
2021-10-12,280400\r
2021-10-15,280400\r
2021-10-17,280400\r
2021-10-20,267100\r
2021-10-27,277500\r
2021-11-01,257500\r
2021-11-04,257500\r
2021-11-06,257500\r
2021-11-09,247300\r
2021-11-11,278500\r
2021-11-19,273900\r
2021-12-14,315500\r
2021-12-16,321700\r
2021-12-19,315500\r
2022-01-13,320800\r
2022-01-15,321300\r
2022-01-23,319300\r
2022-01-25,297700\r
2022-02-02,323900\r
2022-02-09,298300\r
2022-03-09,308000\r
2022-03-19,326800\r
2022-03-21,326700\r
2022-03-24,326700\r
2022-03-26,326700\r
2022-04-03,291100\r
2022-04-05,312000\r
2022-04-15,312000\r
2022-05-10,314900\r
2022-05-15,316400\r
2022-05-18,316400\r
2022-05-28,306600\r
2022-05-30,312400\r
2022-06-09,308700\r
2022-06-17,302200\r
2022-06-19,302200\r
2022-06-22,302200\r
2022-06-24,302200\r
2022-07-02,305100\r
2022-07-07,305200\r
2022-07-12,312600\r
2022-07-14,308700\r
2022-07-17,299400\r
2022-07-24,293300\r
2022-07-27,296900\r
2022-08-01,289900\r
2022-08-03,281100\r
2022-08-06,277900\r
2022-08-08,277900\r
2022-08-11,277900\r
2022-08-13,276600\r
2022-08-16,268200\r
2022-09-05,232900\r
2022-09-10,236800\r
2022-09-12,234000\r
2022-09-15,234000\r
2022-09-20,229000\r
2022-09-22,205600\r
2022-09-25,205700\r
2022-09-30,205700\r
2022-10-02,204000\r
2022-10-05,195100\r
2022-10-07,195100\r
2022-10-12,195100\r
2022-10-15,187500\r
2022-10-17,194800\r
2022-10-20,194800\r
2022-10-22,189800\r
2022-11-01,194100\r
2022-11-04,183100\r
2022-11-06,196400\r
2022-11-11,191100\r
2022-11-16,189400\r
2022-11-19,198700\r
2022-12-04,259800\r
2022-12-11,259800\r
2022-12-14,266400\r
2022-12-21,281000\r
2022-12-24,275900\r
2022-12-26,283200\r
2023-01-03,268700\r
2023-01-10,273600\r
2023-02-02,317500\r
2023-02-04,317600\r
2023-02-07,317600\r
2023-02-09,309400\r
2023-02-12,311000\r
2023-02-14,307600\r
2023-02-17,311000\r
2023-02-19,311000\r
2023-02-24,319200\r
2023-03-01,304900\r
2023-03-04,304900\r
2023-04-05,310000\r
2023-04-08,318500\r
2023-04-18,319100\r
2023-04-20,318300\r
`;export{r as default};
