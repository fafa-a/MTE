const r=`date,value\r
2017-02-25,4406100\r
2017-03-27,4309800\r
2017-03-31,4309800\r
2017-04-03,4346900\r
2017-04-06,4346900\r
2017-04-10,4340600\r
2017-04-23,4314800\r
2017-04-30,4314800\r
2017-05-16,4419500\r
2017-05-23,4419500\r
2017-05-26,4420200\r
2017-06-02,4325800\r
2017-06-05,4335000\r
2017-06-12,4316800\r
2017-06-15,4322100\r
2017-06-22,4316400\r
2017-07-02,4270800\r
2017-07-05,4302900\r
2017-07-07,4302900\r
2017-08-14,4329100\r
2017-08-19,4322300\r
2017-08-21,4322300\r
2017-08-23,4322300\r
2017-08-24,4323100\r
2017-08-29,4338700\r
2017-09-03,4337400\r
2017-10-15,4396600\r
2017-10-17,4396600\r
2017-10-18,4373200\r
2017-10-20,4373200\r
2017-10-25,4401900\r
2017-11-22,4302200\r
2017-11-29,4262300\r
2017-12-01,4299600\r
2017-12-02,4299600\r
2018-02-22,4335100\r
2018-02-24,4329900\r
2018-02-25,4332600\r
2018-02-27,4332600\r
2018-03-24,4380900\r
2018-04-08,4366300\r
2018-04-11,4366300\r
2018-04-13,4366300\r
2018-04-18,4410900\r
2018-04-20,4402300\r
2018-04-21,4408200\r
2018-04-25,4408200\r
2018-05-06,4317400\r
2018-05-08,4415600\r
2018-05-11,4370500\r
2018-05-18,4383700\r
2018-05-20,4357100\r
2018-05-21,4352700\r
2018-06-20,4371900\r
2018-06-22,4383900\r
2018-06-27,4386100\r
2018-07-02,4418400\r
2018-07-04,4418400\r
2018-07-07,4390700\r
2018-07-15,4448900\r
2018-07-17,4419300\r
2018-07-19,4459700\r
2018-07-20,4425700\r
2018-07-24,4424600\r
2018-07-25,4406800\r
2018-07-27,4378200\r
2018-07-29,4368000\r
2018-07-30,4368000\r
2018-08-03,4380000\r
2018-08-04,4380000\r
2018-08-06,4372900\r
2018-08-11,4381000\r
2018-08-16,4379800\r
2018-08-26,4374000\r
2018-08-29,4341900\r
2018-09-18,4147100\r
2018-09-20,4350700\r
2018-09-22,4350700\r
2018-09-25,4308800\r
2018-09-27,4308800\r
2018-09-28,4314700\r
2018-09-30,4323900\r
2018-10-05,4318600\r
2018-10-10,4310200\r
2018-10-13,4265200\r
2018-10-15,4265200\r
2018-10-17,4292900\r
2018-10-18,4245900\r
2018-10-20,4249200\r
2018-10-22,4264700\r
2018-11-04,4037200\r
2018-11-11,4037200\r
2018-11-14,4081600\r
2018-11-17,4048900\r
2018-11-19,4048900\r
2018-11-22,4022200\r
2019-02-15,4319600\r
2019-02-17,4306800\r
2019-02-20,4306800\r
2019-02-22,4312400\r
2019-02-24,4312400\r
2019-02-25,4272300\r
2019-02-27,4319100\r
2019-03-19,3315100\r
2019-03-21,3315100\r
2019-03-22,3740200\r
2019-03-24,3739100\r
2019-03-29,3976900\r
2019-03-31,3976900\r
2019-04-01,3948500\r
2019-04-11,4130400\r
2019-04-15,4147500\r
2019-04-18,4188900\r
2019-04-20,4188900\r
2019-04-26,4188900\r
2019-05-01,4195800\r
2019-05-06,4173800\r
2019-05-13,4231500\r
2019-05-15,4231500\r
2019-05-16,4287300\r
2019-06-02,4334200\r
2019-06-04,4334200\r
2019-06-05,4322800\r
2019-06-27,4289700\r
2019-06-29,4289700\r
2019-06-30,4273100\r
2019-07-02,4303200\r
2019-07-04,4262300\r
2019-07-05,4333800\r
2019-07-07,4326500\r
2019-07-09,4326500\r
2019-07-10,4333400\r
2019-07-15,4357500\r
2019-07-17,4351800\r
2019-07-22,4359100\r
2019-07-24,4360400\r
2019-07-25,4362500\r
2019-07-29,4377100\r
2019-07-30,4377100\r
2019-08-01,4304700\r
2019-08-04,4308700\r
2019-08-08,4308700\r
2019-08-09,4316400\r
2019-08-13,4328700\r
2019-08-14,4324700\r
2019-08-16,4324700\r
2019-08-21,4215400\r
2019-08-23,4215400\r
2019-08-24,4297400\r
2019-08-26,4266400\r
2019-08-28,4266400\r
2019-08-29,4266900\r
2019-08-31,4301000\r
2019-09-03,4282400\r
2019-09-07,4298600\r
2019-09-10,4303500\r
2019-09-12,4305900\r
2019-09-15,4340000\r
2019-09-18,4313100\r
2019-09-20,4343300\r
2019-09-22,4343300\r
2019-12-02,3979000\r
2019-12-04,4148800\r
2019-12-14,4148800\r
2019-12-19,4129500\r
2020-01-16,4076900\r
2020-01-20,4147700\r
2020-01-21,4119900\r
2020-01-23,4158100\r
2020-01-25,4158100\r
2020-01-26,4203300\r
2020-02-07,4165600\r
2020-02-10,4229000\r
2020-02-15,3676600\r
2020-02-22,3369100\r
2020-03-26,4215100\r
2020-03-28,4192600\r
2020-03-30,4192600\r
2020-03-31,4182900\r
2020-04-02,4199100\r
2020-04-04,4199100\r
2020-04-05,4174400\r
2020-04-07,4178400\r
2020-04-09,4178400\r
2020-04-10,4158900\r
2020-04-12,4164400\r
2020-04-14,4173100\r
2020-04-15,4149500\r
2020-04-17,4147300\r
2020-04-19,4144100\r
2020-04-20,4152500\r
2020-04-22,4165300\r
2020-04-27,4213800\r
2020-05-07,4236500\r
2020-05-15,4321400\r
2020-05-17,4242200\r
2020-05-19,4242200\r
2020-05-20,4291400\r
2020-05-27,4297600\r
2020-05-29,4297600\r
2020-05-30,4287900\r
2020-06-01,4276100\r
2020-06-03,4368700\r
2020-06-24,4268900\r
2020-07-01,4268900\r
2020-07-04,4311300\r
2020-07-06,4302300\r
2020-07-08,4302300\r
2020-07-09,4396400\r
2020-07-11,4387100\r
2020-07-13,4387100\r
2020-07-19,4387100\r
2020-07-21,4423200\r
2020-07-23,4424700\r
2020-07-24,4387200\r
2020-07-29,4334900\r
2020-07-31,4321500\r
2020-08-02,4321500\r
2020-08-05,4334500\r
2020-08-07,4318300\r
2020-08-08,4296100\r
2020-08-10,4312400\r
2020-08-12,4312400\r
2020-08-13,4312400\r
2020-08-17,4319200\r
2020-08-20,4288600\r
2020-08-25,4345200\r
2020-09-02,4270700\r
2020-09-04,4345200\r
2020-09-12,4366400\r
2020-09-14,4372100\r
2020-09-16,4372100\r
2020-09-17,4356300\r
2020-09-21,4369500\r
2020-09-22,4350300\r
2020-11-18,4123100\r
2020-11-20,4123100\r
2020-11-21,4160200\r
2020-11-25,4160200\r
2020-11-26,4102000\r
2020-11-28,4137800\r
2020-12-10,4204700\r
2021-01-10,4067800\r
2021-01-15,4067800\r
2021-02-14,4092300\r
2021-02-21,4094300\r
2021-02-24,4210500\r
2021-02-28,4249200\r
2021-03-01,4230500\r
2021-03-06,4236500\r
2021-03-08,4302100\r
2021-03-28,4418800\r
2021-03-30,4418800\r
2021-03-31,4395100\r
2021-04-02,4360800\r
2021-04-04,4316100\r
2021-04-22,4351800\r
2021-04-24,4351800\r
2021-04-25,4364800\r
2021-04-27,4347900\r
2021-04-30,4347900\r
2021-05-30,4401000\r
2021-06-01,4408100\r
2021-06-03,4424300\r
2021-06-04,4424300\r
2021-06-11,4439200\r
2021-06-14,4364300\r
2021-06-16,4407000\r
2021-06-19,4352800\r
2021-06-21,4352800\r
2021-07-19,4294400\r
2021-07-21,4374300\r
2021-07-23,4374300\r
2021-08-25,4316900\r
2021-08-27,4316600\r
2021-09-01,4316600\r
2021-09-02,4388200\r
2021-09-04,4354400\r
2021-09-06,4415500\r
2021-09-07,4387600\r
2021-09-12,4387700\r
2021-09-17,4389000\r
2021-09-22,4369800\r
2021-09-24,4385400\r
2021-10-01,4389400\r
2021-10-04,4362300\r
2021-10-09,4362200\r
2021-10-14,4407400\r
2021-10-16,4413500\r
2021-10-19,4413500\r
2021-10-21,4351000\r
2021-10-24,4356200\r
2021-10-27,4307300\r
2021-10-29,4279800\r
2021-11-06,4354400\r
2021-11-23,3278000\r
2022-02-09,4417800\r
2022-02-11,4415700\r
2022-02-13,4415700\r
2022-02-19,4417700\r
2022-03-06,4354100\r
2022-03-08,4357300\r
2022-03-10,4399800\r
2022-03-21,4404800\r
2022-03-23,4459300\r
2022-03-25,4459300\r
2022-03-26,4401900\r
2022-03-28,4439600\r
2022-04-04,4452800\r
2022-04-17,4413400\r
2022-04-20,4413400\r
2022-04-22,4418900\r
2022-04-27,4414800\r
2022-05-17,4334200\r
2022-05-25,4334200\r
2022-06-04,4284500\r
2022-06-11,4322600\r
2022-06-13,4324200\r
2022-06-19,4332500\r
2022-06-21,4306300\r
2022-06-23,4384600\r
2022-06-28,4384600\r
2022-06-29,4311300\r
2022-07-01,4402100\r
2022-07-06,4438200\r
2022-07-08,4438200\r
2022-07-11,4445700\r
2022-07-14,4439100\r
2022-07-16,4413500\r
2022-07-18,4417000\r
2022-07-19,4386000\r
2022-07-24,4367500\r
2022-07-31,4363700\r
2022-08-02,4363700\r
2022-08-03,4313800\r
2022-08-07,4331400\r
2022-08-08,4314800\r
2022-08-10,4337000\r
2022-08-12,4316700\r
2022-08-13,4345800\r
2022-08-15,4331300\r
2022-08-20,4341200\r
2022-08-22,4319700\r
2022-08-23,4291600\r
2022-09-12,4349200\r
2022-09-19,4349300\r
2022-09-21,4349300\r
2022-09-22,4349000\r
2022-10-09,4259400\r
2022-10-12,4267000\r
2022-10-19,4237100\r
2022-10-22,4238000\r
2022-10-24,4305800\r
2022-10-26,4305800\r
2022-11-01,4257200\r
2023-02-09,4329300\r
2023-02-11,4384600\r
2023-02-13,4384600\r
2023-02-14,4341200\r
2023-02-21,4363900\r
2023-03-01,4353500\r
2023-03-11,4401800\r
2023-04-05,4316800\r
2023-04-09,4316800\r
`;export{r as default};
