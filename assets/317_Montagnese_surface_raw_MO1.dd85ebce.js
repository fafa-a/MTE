const n=`date,value\r
2017-02-22,149700\r
2017-02-25,196600\r
2017-03-17,214400\r
2017-03-27,208100\r
2017-04-23,211500\r
2017-05-16,214900\r
2017-05-26,217300\r
2017-06-25,217200\r
2017-07-05,217700\r
2017-07-07,209600\r
2017-07-17,210500\r
2017-07-27,213300\r
2017-08-04,214100\r
2017-08-14,217600\r
2017-08-21,211700\r
2017-08-24,215600\r
2017-08-26,204900\r
2017-09-05,201600\r
2017-09-20,206400\r
2017-09-23,211600\r
2017-10-05,208000\r
2017-10-08,207500\r
2017-10-10,207000\r
2017-10-13,208300\r
2017-10-15,209400\r
2017-10-18,203200\r
2017-10-25,202800\r
2017-10-28,199300\r
2017-12-24,208000\r
2018-01-01,206800\r
2018-02-25,201300\r
2018-03-14,204800\r
2018-04-18,211300\r
2018-04-21,215100\r
2018-04-26,213500\r
2018-05-11,214900\r
2018-06-20,213300\r
2018-06-25,213700\r
2018-06-27,206700\r
2018-07-02,210200\r
2018-07-07,208400\r
2018-07-12,212800\r
2018-07-15,210000\r
2018-07-25,213900\r
2018-07-27,211900\r
2018-07-30,214200\r
2018-08-01,206900\r
2018-08-04,212000\r
2018-08-06,213100\r
2018-08-11,209400\r
2018-08-19,211600\r
2018-08-21,209000\r
2018-09-03,206300\r
2018-09-08,211500\r
2018-09-20,210600\r
2018-09-23,207400\r
2018-09-28,207700\r
2018-10-03,204400\r
2018-10-05,206700\r
2018-10-23,195200\r
2018-10-25,198200\r
2018-12-27,193000\r
2019-01-03,194300\r
2019-01-16,201200\r
2019-02-12,196100\r
2019-02-15,196300\r
2019-02-17,191900\r
2019-02-20,196100\r
2019-02-22,193900\r
2019-02-25,197500\r
2019-02-27,196400\r
2019-03-12,198100\r
2019-03-22,198300\r
2019-03-24,195400\r
2019-03-27,193700\r
2019-03-29,194100\r
2019-04-13,197500\r
2019-05-01,202400\r
2019-05-06,213100\r
2019-05-13,205500\r
2019-05-23,206800\r
2019-06-02,208900\r
2019-06-17,201700\r
2019-06-22,216100\r
2019-06-27,205100\r
2019-06-30,217900\r
2019-07-05,216100\r
2019-07-12,212900\r
2019-07-15,214500\r
2019-07-22,206100\r
2019-07-25,214900\r
2019-08-01,213000\r
2019-08-04,212200\r
2019-08-09,215400\r
2019-08-14,217100\r
2019-08-16,211900\r
2019-08-21,206000\r
2019-08-24,212800\r
2019-08-29,208700\r
2019-08-31,214000\r
2019-09-03,209200\r
2019-09-13,212600\r
2019-09-15,212500\r
2019-10-08,201900\r
2019-10-30,197300\r
2019-12-29,173500\r
2020-01-01,174100\r
2020-01-06,187100\r
2020-02-05,188200\r
2020-02-20,180200\r
2020-02-22,186100\r
2020-03-08,205800\r
2020-03-18,198600\r
2020-04-05,202100\r
2020-04-10,206000\r
2020-05-07,205600\r
2020-05-20,214600\r
2020-05-25,207600\r
2020-05-27,205500\r
2020-06-19,203300\r
2020-06-21,196400\r
2020-07-04,213500\r
2020-07-09,214900\r
2020-07-14,215600\r
2020-07-19,212800\r
2020-07-21,197600\r
2020-07-24,213600\r
2020-07-31,203600\r
2020-08-05,204700\r
2020-08-08,217200\r
2020-08-10,211800\r
2020-08-20,208300\r
2020-08-25,203000\r
2020-09-02,203500\r
2020-09-04,198000\r
2020-09-12,201700\r
2020-09-14,202700\r
2020-09-17,207200\r
2020-09-19,207900\r
2020-11-11,188600\r
2020-11-18,193700\r
2020-11-21,186200\r
2021-02-24,209200\r
2021-03-23,200800\r
2021-03-26,207900\r
2021-03-28,208400\r
2021-04-05,207700\r
2021-04-07,208300\r
2021-04-15,218100\r
2021-05-12,215900\r
2021-05-27,214100\r
2021-06-11,211400\r
2021-06-14,213300\r
2021-06-16,209200\r
2021-06-26,205500\r
2021-07-19,204000\r
2021-07-29,211500\r
2021-08-10,210600\r
2021-08-20,210800\r
2021-08-28,203300\r
2021-08-30,205200\r
2021-09-12,209000\r
2021-09-14,206300\r
2021-09-22,204500\r
2021-09-24,203200\r
2021-10-12,200300\r
2021-10-14,196400\r
2021-10-17,196100\r
2021-10-27,191300\r
2021-12-16,192100\r
2021-12-18,193600\r
2021-12-21,191200\r
2022-01-15,188200\r
2022-01-17,187200\r
2022-01-22,191300\r
2022-01-25,190500\r
2022-01-27,188300\r
2022-02-09,196800\r
2022-02-26,192300\r
2022-03-01,198800\r
2022-03-26,195900\r
2022-04-05,207900\r
2022-04-10,208800\r
2022-04-17,202600\r
2022-05-12,208600\r
2022-05-17,211000\r
2022-05-22,207500\r
2022-06-01,209800\r
2022-06-06,214100\r
2022-06-16,209800\r
2022-06-19,213500\r
2022-07-11,210700\r
2022-07-14,216200\r
2022-07-16,212100\r
2022-07-19,215800\r
2022-07-21,211500\r
2022-07-24,212700\r
2022-07-26,213700\r
2022-07-31,211300\r
2022-08-03,214600\r
2022-08-08,209200\r
2022-08-10,210100\r
2022-08-20,204600\r
2022-08-28,209200\r
2022-08-30,209900\r
2022-09-04,210200\r
2022-09-12,207500\r
2022-09-19,201800\r
2022-10-02,198000\r
2022-10-04,195700\r
2022-10-09,197400\r
2022-11-01,170200\r
2022-11-06,187700\r
2022-11-08,195300\r
2022-11-13,189500\r
2022-11-16,188500\r
2022-12-06,199400\r
2022-12-28,195200\r
2023-02-11,197100\r
2023-02-14,201600\r
2023-02-16,200100\r
2023-03-01,208900\r
2023-03-13,210400\r
2023-03-16,202700\r
2023-03-28,206700\r
2023-04-05,213800\r
2023-04-07,210000\r
2023-06-16,204800\r
2023-07-09,214200\r
2023-07-11,214900\r
2023-07-14,217100\r
2023-07-29,216800\r
2023-07-31,208700\r
2023-08-08,214000\r
2023-08-13,213400\r
2023-08-20,209900\r
2023-08-23,209600\r
2023-09-04,209800\r
2023-09-07,208300\r
2023-09-14,202600\r
2023-09-24,197600\r
2023-09-29,198700\r
2023-10-02,197500\r
2023-10-04,196000\r
2023-10-07,191700\r
2023-10-12,191800\r
2023-11-08,188100\r
2023-11-26,192500\r
2023-12-03,194700\r
`;export{n as default};
