const r=`date,value\r
2017-04-03,75.47951886148066\r
2017-04-06,75.47951886148066\r
2017-04-10,75.09485640198305\r
2017-04-23,83.27125670367803\r
2017-04-30,83.27125670367803\r
2017-06-12,76.63636124994892\r
2017-06-15,76.63636124994892\r
2017-06-19,76.63636124994892\r
2017-06-22,76.63636124994892\r
2017-07-22,90.03716698766104\r
2017-07-25,90.03716698766104\r
2017-07-29,90.03716698766104\r
2017-10-15,85.24787128081972\r
2017-10-17,85.24787128081972\r
2017-10-18,86.83722895201936\r
2017-10-20,86.83722895201936\r
2017-10-25,86.83722895201936\r
2017-10-30,82.09071739692388\r
2017-11-01,82.09071739692388\r
2017-11-04,92.05130978610183\r
2017-11-07,92.05130978610183\r
2018-01-13,96.5201323806664\r
2018-01-16,96.5201323806664\r
2018-01-18,94.07621304512274\r
2018-01-21,96.5201323806664\r
2018-02-22,85.24787128081972\r
2018-02-24,85.24787128081972\r
2018-02-25,85.24787128081972\r
2018-02-27,85.24787128081972\r
2018-03-24,97.33814233054126\r
2018-04-08,77.0229229225367\r
2018-04-11,77.0229229225367\r
2018-04-13,80.52306159385138\r
2018-04-18,78.96278302990382\r
2018-04-20,86.83722895201936\r
2018-04-21,86.83722895201936\r
2018-04-25,85.24787128081972\r
2018-05-08,85.64454174400335\r
2018-05-11,85.64454174400335\r
2018-05-18,85.64454174400335\r
2018-06-27,86.0416588835356\r
2018-07-02,88.43368291405179\r
2018-07-04,88.43368291405179\r
2018-07-07,88.43368291405179\r
2018-07-17,87.23567977663507\r
2018-07-19,87.23567977663507\r
2018-07-20,87.23567977663507\r
2018-07-24,87.23567977663507\r
2018-07-25,87.23567977663507\r
2018-07-27,87.23567977663507\r
2018-07-29,82.87728894472416\r
2018-07-30,82.87728894472416\r
2018-08-03,82.87728894472416\r
2018-08-04,82.87728894472416\r
2018-08-06,86.0416588835356\r
2018-08-11,82.48377547135662\r
2018-08-16,82.48377547135662\r
2018-09-20,76.63636124994892\r
2018-09-22,76.63636124994892\r
2018-09-25,91.64761649877728\r
2018-09-27,91.64761649877728\r
2018-09-28,91.64761649877728\r
2018-09-30,79.74199553687502\r
2018-10-05,85.24787128081972\r
2018-10-10,81.30597193217267\r
2018-10-13,97.33814233054126\r
2018-10-15,97.33814233054126\r
2018-10-17,82.87728894472416\r
2018-10-18,82.87728894472416\r
2018-10-20,84.06055065841126\r
2018-10-22,76.63636124994892\r
2018-11-04,62.67707129342791\r
2018-11-11,62.67707129342791\r
2018-11-14,74.32696650096867\r
2018-11-17,73.94374159244852\r
2018-11-19,73.94374159244852\r
2018-11-22,73.94374159244852\r
2018-12-19,78.96278302990382\r
2019-02-17,75.09485640198305\r
2019-02-20,75.09485640198305\r
2019-02-22,75.09485640198305\r
2019-02-24,75.09485640198305\r
2019-02-25,75.09485640198305\r
2019-02-27,76.63636124994892\r
2019-03-19,60.114617396055834\r
2019-03-21,60.114617396055834\r
2019-03-22,69.76034935316797\r
2019-03-24,59.02442792894864\r
2019-03-29,59.02442792894864\r
2019-03-31,59.02442792894864\r
2019-04-01,59.02442792894864\r
2019-04-11,51.18157430905058\r
2019-05-13,72.03486888549608\r
2019-05-15,72.03486888549608\r
2019-05-16,72.03486888549608\r
2019-05-23,72.03486888549608\r
2019-05-25,72.03486888549608\r
2019-05-26,72.03486888549608\r
2019-06-02,67.50370041285507\r
2019-06-04,67.50370041285507\r
2019-06-05,67.50370041285507\r
2019-06-27,60.4790878420539\r
2019-06-29,60.4790878420539\r
2019-06-30,60.4790878420539\r
2019-07-02,78.18543345761498\r
2019-07-04,78.18543345761498\r
2019-07-05,78.18543345761498\r
2019-07-07,78.18543345761498\r
2019-07-09,78.18543345761498\r
2019-07-10,78.18543345761498\r
2019-07-15,76.25027252751805\r
2019-07-17,83.27125670367803\r
2019-07-22,73.17873825446237\r
2019-07-24,73.17873825446237\r
2019-07-25,73.17873825446237\r
2019-07-29,73.17873825446237\r
2019-07-30,73.17873825446237\r
2019-08-01,76.25027252751805\r
2019-08-04,64.15290479456058\r
2019-08-08,64.15290479456058\r
2019-08-09,64.15290479456058\r
2019-08-13,64.15290479456058\r
2019-08-14,64.15290479456058\r
2019-08-16,64.15290479456058\r
2019-08-21,73.94374159244852\r
2019-08-23,73.94374159244852\r
2019-08-24,73.94374159244852\r
2019-08-26,74.71067186102553\r
2019-08-28,74.71067186102553\r
2019-08-29,74.71067186102553\r
2019-08-31,67.87855477758251\r
2019-09-03,67.87855477758251\r
2019-09-07,70.51655160024205\r
2019-09-10,70.51655160024205\r
2019-09-12,67.50370041285507\r
2019-09-15,78.96278302990382\r
2019-09-18,71.27472838783983\r
2019-09-20,78.57387478578647\r
2019-09-22,78.57387478578647\r
2019-12-04,69.76034935316797\r
2019-12-14,69.76034935316797\r
2019-12-19,94.07621304512274\r
2019-12-29,100.0\r
2020-01-23,98.15782517241006\r
2020-01-25,98.15782517241006\r
2020-01-26,99.80218081112585\r
2020-02-07,94.4824743559263\r
2020-02-10,93.67037735222843\r
2020-02-15,89.23455026367174\r
2020-02-22,84.85164856171772\r
2020-03-28,55.069077244908414\r
2020-03-30,55.069077244908414\r
2020-03-31,55.069077244908414\r
2020-04-02,66.0093459010452\r
2020-04-04,66.0093459010452\r
2020-04-05,66.0093459010452\r
2020-04-07,59.02442792894864\r
2020-04-09,59.02442792894864\r
2020-04-10,59.02442792894864\r
2020-04-12,59.02442792894864\r
2020-04-14,74.32696650096867\r
2020-04-15,74.32696650096867\r
2020-04-17,68.25391255016405\r
2020-04-19,71.27472838783983\r
2020-04-20,71.27472838783983\r
2020-04-22,65.63703031718316\r
2020-04-27,66.0093459010452\r
2020-05-07,67.50370041285507\r
2020-05-15,70.51655160024205\r
2020-05-17,69.76034935316797\r
2020-05-19,69.76034935316797\r
2020-05-20,69.76034935316797\r
2020-05-27,65.63703031718316\r
2020-05-29,65.63703031718316\r
2020-05-30,65.63703031718316\r
2020-06-01,63.78316519199456\r
2020-06-03,77.40995632303695\r
2020-07-21,38.967141306821\r
2020-07-23,38.967141306821\r
2020-07-24,38.967141306821\r
2020-07-29,38.967141306821\r
2020-07-31,75.09485640198305\r
2020-08-02,75.09485640198305\r
2020-08-05,67.1293508917502\r
2020-08-07,72.03486888549608\r
2020-08-08,72.03486888549608\r
2020-08-10,72.03486888549608\r
2020-08-12,72.03486888549608\r
2020-08-13,72.03486888549608\r
2020-08-17,64.52316263437812\r
2020-08-20,73.94374159244852\r
2020-08-25,72.79696240843403\r
2020-09-02,72.79696240843403\r
2020-09-04,72.79696240843403\r
2020-09-14,73.94374159244852\r
2020-09-16,73.94374159244852\r
2020-09-17,73.94374159244852\r
2020-09-21,73.94374159244852\r
2020-09-22,73.94374159244852\r
2020-11-18,89.63564045836895\r
2020-11-20,89.63564045836895\r
2020-11-21,89.63564045836895\r
2020-11-25,89.63564045836895\r
2020-11-26,89.63564045836895\r
2020-11-28,91.64761649877728\r
2020-12-10,73.56099841446347\r
2020-12-18,74.71067186102553\r
2021-02-11,72.41567218099786\r
2021-02-14,72.41567218099786\r
2021-02-21,82.48377547135662\r
2021-02-24,82.09071739692388\r
2021-02-28,82.09071739692388\r
2021-03-01,82.09071739692388\r
2021-03-23,90.8415250483557\r
2021-03-28,93.67037735222843\r
2021-03-30,93.67037735222843\r
2021-03-31,93.67037735222843\r
2021-04-02,80.52306159385138\r
2021-04-04,83.66567764157466\r
2021-04-22,70.13820297645779\r
2021-04-24,70.13820297645779\r
2021-04-25,70.51655160024205\r
2021-04-27,68.25391255016405\r
2021-04-30,68.25391255016405\r
2021-06-01,81.6981158415444\r
2021-06-03,81.6981158415444\r
2021-06-04,81.6981158415444\r
2021-06-11,81.6981158415444\r
2021-06-16,75.09485640198305\r
2021-06-19,75.09485640198305\r
2021-06-21,75.09485640198305\r
2021-08-25,76.25027252751805\r
2021-08-27,76.25027252751805\r
2021-09-01,76.25027252751805\r
2021-09-02,76.25027252751805\r
2021-09-04,90.03716698766104\r
2021-09-06,90.03716698766104\r
2021-09-07,90.03716698766104\r
2021-09-12,90.03716698766104\r
2021-09-24,90.03716698766104\r
2021-10-01,90.03716698766104\r
2021-10-04,90.03716698766104\r
2021-10-09,91.244354593039\r
2021-10-14,100.0\r
2021-10-16,100.0\r
2021-10-19,98.56829167507925\r
2021-10-21,100.0\r
2021-10-24,95.29627006761547\r
2021-10-27,100.0\r
2021-10-29,90.4391288497126\r
2021-11-06,80.13229745359605\r
2021-11-23,97.33814233054126\r
2021-12-18,95.70380259948278\r
2021-12-21,95.70380259948278\r
2022-01-12,100.0\r
2022-01-14,100.0\r
2022-01-15,100.0\r
2022-03-08,88.83389741112404\r
2022-03-10,88.83389741112404\r
2022-03-23,88.43368291405179\r
2022-03-25,88.43368291405179\r
2022-03-26,88.43368291405179\r
2022-03-28,94.88916034244279\r
2022-04-04,93.67037735222843\r
2022-04-17,76.63636124994892\r
2022-04-20,76.63636124994892\r
2022-04-22,80.13229745359605\r
2022-04-27,76.25027252751805\r
2022-05-17,75.09485640198305\r
2022-05-25,75.09485640198305\r
2022-06-01,79.74199553687502\r
2022-06-04,79.74199553687502\r
2022-06-11,88.83389741112404\r
2022-06-21,92.45543348101116\r
2022-06-23,76.63636124994892\r
2022-06-28,76.63636124994892\r
2022-06-29,76.63636124994892\r
2022-07-01,84.45587466076245\r
2022-07-06,92.85998661492265\r
2022-07-08,92.85998661492265\r
2022-07-11,94.4824743559263\r
2022-07-14,94.4824743559263\r
2022-07-16,87.23567977663507\r
2022-07-18,88.83389741112404\r
2022-07-19,88.83389741112404\r
2022-07-24,83.66567764157466\r
2022-07-31,80.91428680266581\r
2022-08-02,80.91428680266581\r
2022-08-03,80.91428680266581\r
2022-08-07,80.91428680266581\r
2022-08-08,80.91428680266581\r
2022-08-10,82.48377547135662\r
2022-08-12,79.74199553687502\r
2022-08-13,79.74199553687502\r
2022-08-15,83.66567764157466\r
2022-08-20,83.66567764157466\r
2022-08-22,74.32696650096867\r
2022-08-23,74.32696650096867\r
2022-08-25,74.32696650096867\r
2022-10-04,78.57387478578647\r
2022-10-07,78.57387478578647\r
2022-10-09,89.23455026367174\r
2022-10-12,89.23455026367174\r
2022-10-19,79.35215700584263\r
2023-01-07,85.64454174400335\r
2023-01-15,85.64454174400335\r
2023-02-21,82.48377547135662\r
2023-03-01,82.48377547135662\r
2023-05-27,86.0416588835356\r
2023-05-29,86.0416588835356\r
2023-06-01,90.4391288497126\r
2023-06-03,90.4391288497126\r
2023-06-04,90.4391288497126\r
2023-06-06,77.40995632303695\r
2023-06-08,84.45587466076245\r
2023-06-09,84.45587466076245\r
2023-06-11,78.96278302990382\r
2023-06-13,86.0416588835356\r
2023-06-14,86.0416588835356\r
2023-06-16,84.45587466076245\r
2023-07-11,88.83389741112404\r
2023-07-14,88.83389741112404\r
2023-07-19,88.83389741112404\r
2023-08-10,82.87728894472416\r
2023-08-18,82.87728894472416\r
2023-08-20,88.43368291405179\r
2023-08-22,87.63457306881295\r
2023-08-23,87.63457306881295\r
`;export{r as default};
