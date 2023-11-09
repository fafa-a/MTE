const r=`date,value\r
2017-02-22,8878500\r
2017-02-25,8878500\r
2017-04-23,9082700\r
2017-05-03,9082700\r
2017-06-12,9018800\r
2017-06-15,9018800\r
2017-06-22,9023600\r
2017-07-07,9078900\r
2017-07-10,9078900\r
2017-07-12,9096900\r
2017-07-17,9082400\r
2017-07-22,9086000\r
2017-07-27,9085300\r
2017-08-06,9083500\r
2017-08-14,8778100\r
2017-08-21,8612100\r
2017-08-24,8612100\r
2017-08-26,8673600\r
2017-08-29,8673600\r
2017-09-03,8497700\r
2017-10-05,8013800\r
2017-10-08,8013800\r
2017-10-10,8035600\r
2017-10-13,8035600\r
2017-10-15,8182900\r
2017-10-25,7733400\r
2018-01-23,7168700\r
2018-01-28,7226400\r
2018-01-31,7226400\r
2018-02-02,7226400\r
2018-04-18,9069000\r
2018-04-21,9069000\r
2018-04-23,9069000\r
2018-04-26,9069000\r
2018-06-22,9079400\r
2018-06-25,9079400\r
2018-06-27,9090400\r
2018-07-02,9083700\r
2018-07-07,9086800\r
2018-07-12,9083900\r
2018-07-20,9075400\r
2018-07-22,9075400\r
2018-07-27,9063100\r
2018-07-30,9063100\r
2018-08-01,9063100\r
2018-08-04,9063100\r
2018-08-06,9063400\r
2018-08-11,8964900\r
2018-08-16,9019100\r
2018-08-19,9019700\r
2018-08-21,8927800\r
2018-08-26,8929800\r
2018-08-31,8960500\r
2018-09-03,8825700\r
2018-09-05,8826300\r
2018-09-10,8495900\r
2018-09-13,8495900\r
2018-09-18,8451900\r
2018-09-20,8458600\r
2018-09-23,8174700\r
2018-09-25,8309100\r
2018-09-28,8309100\r
2018-10-03,8178400\r
2018-10-05,8278500\r
2018-10-13,7938300\r
2018-10-25,7610000\r
2018-10-30,7293600\r
2018-11-04,7409200\r
2018-12-29,8375700\r
2019-01-03,8326500\r
2019-01-06,8326500\r
2019-01-11,8326500\r
2019-01-16,8326500\r
2019-02-17,8598900\r
2019-02-20,8598900\r
2019-02-22,8611100\r
2019-02-25,8634000\r
2019-02-27,8634600\r
2019-03-24,8795900\r
2019-03-27,8795900\r
2019-03-29,8827300\r
2019-04-01,8827300\r
2019-04-08,8823200\r
2019-04-13,8981100\r
2019-04-18,9022700\r
2019-04-28,9020700\r
2019-05-01,8981300\r
2019-05-23,9101900\r
2019-05-26,9101900\r
2019-05-31,9097600\r
2019-06-02,9099600\r
2019-06-17,9040100\r
2019-06-22,9062600\r
2019-06-27,9064400\r
2019-06-30,9064400\r
2019-07-02,9065200\r
2019-07-05,9073600\r
2019-07-07,9081800\r
2019-07-10,9009500\r
2019-07-12,9080100\r
2019-07-22,9039100\r
2019-07-25,9024600\r
2019-08-01,8850600\r
2019-08-04,8850600\r
2019-08-06,8736300\r
2019-08-09,8776900\r
2019-08-11,8776900\r
2019-08-14,8776900\r
2019-08-16,8776900\r
2019-08-21,8605700\r
2019-09-30,7612200\r
2020-02-12,8925400\r
2020-02-15,8925400\r
2020-02-20,8925400\r
2020-02-22,8897500\r
2020-03-08,8962400\r
2020-03-18,9022000\r
2020-03-21,9022000\r
2020-03-28,9046200\r
2020-03-31,9046200\r
2020-04-02,9044900\r
2020-04-05,9045000\r
2020-04-07,9045100\r
2020-04-10,9045100\r
2020-04-12,9045100\r
2020-04-15,8997400\r
2020-05-07,9012800\r
2020-05-17,9073200\r
2020-05-20,9073200\r
2020-05-22,9073200\r
2020-05-25,9072000\r
2020-05-27,9083400\r
2020-05-30,9083400\r
2020-06-01,9079200\r
2020-06-14,9038400\r
2020-06-21,9075100\r
2020-06-24,9075100\r
2020-06-26,9075100\r
2020-06-29,9075100\r
2020-07-01,9075100\r
2020-07-04,9075100\r
2020-07-06,9099900\r
2020-07-31,9085300\r
2020-08-05,9081200\r
2020-08-08,9077600\r
2020-08-10,9077600\r
2020-08-15,9008100\r
2020-08-20,9032800\r
2020-08-23,8820500\r
2020-08-25,8826000\r
2020-09-02,8709300\r
2020-09-04,8678000\r
2020-09-12,8286800\r
2020-09-14,8304000\r
2020-09-17,8304000\r
2020-09-29,8058700\r
2020-11-18,7489800\r
2020-11-21,7489800\r
2020-11-23,7530700\r
2020-12-06,7469500\r
2021-03-23,8784600\r
2021-03-26,8784600\r
2021-03-28,8870800\r
2021-03-31,8870800\r
2021-04-05,8854400\r
2021-04-07,8863600\r
2021-05-27,9082000\r
2021-05-30,9082000\r
2021-06-01,9082000\r
2021-06-26,9064400\r
2021-07-01,9071500\r
2021-07-11,9073700\r
2021-07-19,9071900\r
2021-07-21,9083800\r
2021-07-26,9057300\r
2021-07-29,9057300\r
2021-08-10,9067400\r
2021-08-13,9067400\r
2021-08-15,9047500\r
2021-08-18,9060100\r
2021-08-20,9036900\r
2021-08-23,9021900\r
2021-08-25,8961900\r
2021-08-28,8979400\r
2021-08-30,8979400\r
2021-09-04,8778500\r
2021-09-24,8249600\r
2021-09-29,8249600\r
2021-10-14,8082700\r
2021-10-17,8082700\r
2021-10-19,8082700\r
2021-10-24,8089800\r
2021-10-27,7967200\r
2021-12-03,7880500\r
2021-12-11,7880500\r
2022-01-27,7907400\r
2022-01-30,7907400\r
2022-02-01,7907400\r
2022-02-06,7907400\r
2022-03-23,8079500\r
2022-03-26,8079500\r
2022-03-28,8079500\r
2022-04-17,8392900\r
2022-04-22,8460900\r
2022-04-27,8453700\r
2022-04-30,8388500\r
2022-05-02,8473700\r
2022-05-07,8465400\r
2022-05-12,8465100\r
2022-05-17,8480100\r
2022-05-20,8480100\r
2022-05-22,8480100\r
2022-05-27,8489400\r
2022-06-01,8431800\r
2022-06-04,8431800\r
2022-06-06,8442200\r
2022-06-11,8348500\r
2022-06-14,8348500\r
2022-06-16,8334200\r
2022-06-19,8280500\r
2022-06-21,8283100\r
2022-07-11,8097800\r
2022-07-14,8189200\r
2022-07-16,8030400\r
2022-07-19,8213700\r
2022-07-21,8028900\r
2022-07-24,8239200\r
2022-07-26,8042800\r
2022-07-31,8136100\r
2022-08-03,8144500\r
2022-08-05,8144500\r
2022-08-25,7545300\r
2022-08-28,7531900\r
2022-09-04,7531900\r
2022-09-19,6763000\r
2022-09-22,6763000\r
2022-10-04,7084600\r
2022-10-07,7084600\r
2022-10-09,7084700\r
2022-10-12,7084700\r
2023-02-16,4981000\r
2023-02-19,4981000\r
2023-02-26,4965100\r
2023-03-28,6176700\r
2023-04-05,6176700\r
2023-04-07,6176700\r
2023-07-11,7035900\r
2023-07-14,7035900\r
2023-07-16,6861000\r
2023-07-19,6951500\r
2023-07-21,6784600\r
2023-07-26,6973000\r
2023-07-31,6781700\r
2023-08-05,6320400\r
2023-08-08,6308300\r
2023-08-10,6444600\r
2023-08-15,6105400\r
2023-08-23,5870700\r
2023-08-25,5870900\r
2023-08-30,5755200\r
2023-09-04,5540200\r
2023-09-07,5262900\r
2023-09-12,5234400\r
2023-09-14,5234400\r
2023-09-24,4757500\r
2023-09-27,4757500\r
2023-09-29,4757800\r
2023-10-02,4757800\r
2023-10-04,4587000\r
2023-10-07,4574000\r
2023-10-09,4476200\r
2023-10-12,4455400\r
`;export{r as default};
