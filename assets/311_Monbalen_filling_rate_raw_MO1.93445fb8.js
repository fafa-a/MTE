const n=`date,value\r
2017-01-26,73.58520657736204\r
2017-02-15,64.11364276257999\r
2017-02-25,57.43034553116024\r
2017-03-17,53.175408933537085\r
2017-03-27,71.15734205996094\r
2017-04-06,71.15734205996094\r
2017-05-16,36.021106737238284\r
2017-05-26,68.76944252825247\r
2017-06-25,83.69581097245006\r
2017-07-05,88.99026037340799\r
2017-08-04,97.2303432989341\r
2017-08-14,100.0\r
2017-08-19,78.56072899157597\r
2017-08-29,68.76944252825247\r
2017-10-08,71.15734205996094\r
2017-10-13,49.08122144685941\r
2017-10-28,55.28279852611892\r
2017-11-07,51.1082064629497\r
2017-11-17,55.28279852611892\r
2017-11-22,59.61802083745099\r
2017-11-27,51.1082064629497\r
2018-02-10,39.550666874962054\r
2018-04-21,64.11364276257999\r
2018-05-06,45.14802838181873\r
2018-05-11,78.56072899157597\r
2018-05-21,49.08122144685941\r
2018-06-20,64.11364276257999\r
2018-06-25,68.76944252825247\r
2018-07-10,81.1083371960781\r
2018-07-15,66.42153394816124\r
2018-07-25,49.08122144685941\r
2018-07-30,81.1083371960781\r
2018-08-04,55.28279852611892\r
2018-08-19,78.56072899157597\r
2018-09-03,68.76944252825247\r
2018-09-08,78.56072899157597\r
2018-09-18,81.1083371960781\r
2018-09-28,68.76944252825247\r
2018-10-23,59.61802083745099\r
2018-11-17,53.175408933537085\r
2018-12-17,66.42153394816124\r
2019-01-16,76.05301057488995\r
2019-02-15,41.37608589598657\r
2019-02-20,45.14802838181873\r
2019-02-25,76.05301057488995\r
2019-03-22,71.15734205996094\r
2019-03-27,68.76944252825247\r
2019-05-01,66.42153394816124\r
2019-05-31,41.37608589598657\r
2019-07-05,100.0\r
2019-07-10,73.58520657736204\r
2019-07-15,86.3231265066019\r
2019-07-25,66.42153394816124\r
2019-08-04,86.3231265066019\r
2019-08-14,83.69581097245006\r
2019-08-24,83.69581097245006\r
2019-09-03,86.3231265066019\r
2019-09-13,88.99026037340799\r
2019-10-08,59.61802083745099\r
2020-01-06,51.1082064629497\r
2020-01-11,61.84579590888878\r
2020-01-16,49.08122144685941\r
2020-02-05,57.43034553116024\r
2020-02-15,68.76944252825247\r
2020-02-20,45.14802838181873\r
2020-03-21,57.43034553116024\r
2020-04-05,53.175408933537085\r
2020-04-10,76.05301057488995\r
2020-04-15,71.15734205996094\r
2020-05-20,51.1082064629497\r
2020-05-25,57.43034553116024\r
2020-05-30,64.11364276257999\r
2020-06-14,55.28279852611892\r
2020-07-09,81.1083371960781\r
2020-07-14,83.69581097245006\r
2020-07-19,66.42153394816124\r
2020-07-24,68.76944252825247\r
2020-07-29,71.15734205996094\r
2020-09-02,59.61802083745099\r
2020-09-12,61.84579590888878\r
2020-09-17,97.2303432989341\r
2020-10-17,64.11364276257999\r
2020-11-21,51.1082064629497\r
2020-11-26,41.37608589598657\r
2021-01-10,36.021106737238284\r
2021-02-14,64.11364276257999\r
2021-02-19,59.61802083745099\r
2021-02-24,68.76944252825247\r
2021-03-01,57.43034553116024\r
2021-03-21,51.1082064629497\r
2021-03-31,61.84579590888878\r
2021-04-05,66.42153394816124\r
2021-04-15,76.05301057488995\r
2021-05-30,57.43034553116024\r
2021-06-14,71.15734205996094\r
2021-07-19,57.43034553116024\r
2021-08-23,64.11364276257999\r
2021-08-28,53.175408933537085\r
2021-09-12,68.76944252825247\r
2021-10-12,57.43034553116024\r
2021-10-17,45.14802838181873\r
2021-10-27,51.1082064629497\r
2021-11-06,47.09448486692381\r
2021-11-11,61.84579590888878\r
2021-12-11,97.2303432989341\r
2021-12-16,51.1082064629497\r
2022-01-25,14.734079529438942\r
2022-02-09,12.592064587312276\r
2022-02-24,73.58520657736204\r
2022-03-06,51.1082064629497\r
2022-03-26,61.84579590888878\r
2022-04-05,100.0\r
2022-04-10,94.4438912761635\r
2022-04-15,81.1083371960781\r
2022-04-30,76.05301057488995\r
2022-05-10,39.550666874962054\r
2022-05-30,78.56072899157597\r
2022-07-04,53.175408933537085\r
2022-07-19,86.3231265066019\r
2022-07-24,100.0\r
2022-08-03,81.1083371960781\r
2022-08-08,81.1083371960781\r
2022-08-13,57.43034553116024\r
2022-08-28,88.99026037340799\r
2022-09-12,24.944993758810902\r
2022-09-22,14.734079529438942\r
2022-10-07,14.734079529438942\r
2022-10-12,9.688993892032347\r
2022-11-06,18.25581802300143\r
2022-11-11,14.734079529438942\r
2022-11-16,24.944993758810902\r
2022-12-11,24.944993758810902\r
2023-01-10,64.11364276257999\r
2023-02-04,61.84579590888878\r
2023-02-09,45.14802838181873\r
2023-02-14,64.11364276257999\r
2023-02-19,64.11364276257999\r
2023-03-01,71.15734205996094\r
2023-04-20,45.14802838181873\r
2023-05-30,47.09448486692381\r
2023-06-14,59.61802083745099\r
2023-07-14,88.99026037340799\r
2023-08-08,94.4438912761635\r
2023-08-23,97.2303432989341\r
2023-09-07,88.99026037340799\r
2023-10-02,68.76944252825247\r
2023-10-07,68.76944252825247\r
2023-10-12,71.15734205996094\r
2023-11-26,49.08122144685941\r
`;export{n as default};