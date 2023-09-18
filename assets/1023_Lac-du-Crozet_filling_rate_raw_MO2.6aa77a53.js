const r=`date,value\r
2017-06-12,46.88409391226615\r
2017-06-19,45.78318058206604\r
2017-06-22,89.03143399051366\r
2017-07-02,85.95791278958683\r
2017-07-04,57.85508861319796\r
2017-07-07,100.0\r
2017-07-12,98.01299631008796\r
2017-07-17,99.2530102974239\r
2017-08-03,78.5770819655522\r
2017-08-06,78.5770819655522\r
2017-08-13,78.12458238754219\r
2017-08-18,60.484649867937314\r
2017-08-21,94.33036718495866\r
2017-08-23,94.33036718495866\r
2017-08-26,94.33036718495866\r
2017-09-05,80.16902465949278\r
2017-09-07,80.16902465949278\r
2017-09-10,80.16902465949278\r
2017-09-15,97.76573997822399\r
2017-09-17,94.81813191517254\r
2017-09-20,97.27197479734906\r
2017-09-22,93.11534891865226\r
2017-09-27,85.02089328307476\r
2017-10-02,79.71288499028468\r
2018-05-28,7.630268412074129\r
2018-06-02,7.276116232263334\r
2018-06-24,44.15143356764346\r
2018-06-27,57.45468561816164\r
2018-06-29,57.45468561816164\r
2018-07-02,32.283586272579115\r
2018-07-04,32.283586272579115\r
2018-07-07,46.33233327048362\r
2018-07-09,38.20247463898578\r
2018-07-12,38.20247463898578\r
2018-07-19,31.966476789875102\r
2018-07-22,21.00070961507699\r
2018-07-24,21.00070961507699\r
2018-07-27,28.561305045689167\r
2018-07-29,28.561305045689167\r
2018-08-01,27.510110043671272\r
2018-08-03,27.510110043671272\r
2018-08-06,27.510110043671272\r
2018-08-28,21.134712004895682\r
2018-09-02,21.134712004895682\r
2018-09-05,52.35100795606581\r
2018-09-07,52.35100795606581\r
2018-09-10,59.265215457226894\r
2018-09-12,59.265215457226894\r
2018-09-17,49.49327799389225\r
2018-09-20,53.70642675961401\r
2018-09-22,55.07562627482604\r
2018-09-25,55.07562627482604\r
2018-09-27,34.7014876440459\r
2018-09-30,34.7014876440459\r
2018-10-02,42.3661878952225\r
2018-10-05,46.88409391226615\r
2019-06-12,1.4812596648368699\r
2019-06-27,6.172052665007924\r
2019-06-29,3.0611718952221985\r
2019-07-02,59.062940178429315\r
2019-07-04,59.062940178429315\r
2019-07-07,59.062940178429315\r
2019-07-09,59.062940178429315\r
2019-07-12,90.9441773276656\r
2019-07-14,89.7468123817162\r
2019-07-17,95.06239034628152\r
2019-07-19,80.39748356312086\r
2019-07-22,79.03062308210852\r
2019-07-24,72.77627673942813\r
2019-07-29,68.65012907184422\r
2019-08-01,67.79373761464267\r
2019-08-03,67.79373761464267\r
2019-08-06,67.36715090031875\r
2019-08-08,67.79373761464267\r
2019-08-11,64.62059026674481\r
2019-08-16,67.79373761464267\r
2019-08-18,65.88256818288545\r
2019-08-23,64.20209626376584\r
2019-08-26,62.953130128911425\r
2019-08-31,68.22139746023159\r
2019-09-07,68.4356293803435\r
2019-09-12,49.117092038492\r
2019-09-15,49.68179997157783\r
2019-09-17,39.571275981097045\r
2019-09-20,39.571275981097045\r
2019-09-22,39.571275981097045\r
2019-09-27,45.41853076262315\r
2019-09-30,32.60194279367465\r
2019-10-07,36.0193649602495\r
2019-10-10,36.0193649602495\r
2020-05-07,7.630268412074129\r
2020-05-22,8.358550131189263\r
2020-05-24,28.561305045689167\r
2020-05-27,27.808846614730996\r
2020-05-29,27.808846614730996\r
2020-06-01,27.808846614730996\r
2020-06-03,27.808846614730996\r
2020-07-08,65.04016786553916\r
2020-07-13,65.04016786553916\r
2020-07-18,65.04016786553916\r
2020-07-21,65.04016786553916\r
2020-07-23,65.04016786553916\r
2020-07-31,74.76415851716722\r
2020-08-02,74.76415851716722\r
2020-08-05,74.76415851716722\r
2020-08-07,76.10125612851331\r
2020-08-10,76.77334509737432\r
2020-08-12,66.72928595349033\r
2020-08-15,66.72928595349033\r
2020-08-20,65.2503625697173\r
2020-08-22,65.2503625697173\r
2020-08-25,71.89964269648003\r
2020-08-27,62.953130128911425\r
2020-09-01,65.2503625697173\r
2020-09-04,66.72928595349033\r
2020-09-06,60.68885096155275\r
2020-09-09,60.68885096155275\r
2020-09-11,63.57639012324541\r
2020-09-14,12.061226990799149\r
2020-09-16,13.600128667834067\r
2020-09-19,13.600128667834067\r
2021-06-16,48.368158329438316\r
2021-06-18,48.368158329438316\r
2021-06-21,48.368158329438316\r
2021-06-26,49.30504194264848\r
2021-07-23,19.16059140606238\r
2021-08-10,89.26963975425389\r
2021-08-12,89.26963975425389\r
2021-08-15,98.01299631008796\r
2021-08-17,98.01299631008796\r
2021-08-20,92.38935596321612\r
2021-08-25,98.2605016330177\r
2021-08-27,88.55578424945823\r
2021-08-30,88.55578424945823\r
2021-09-01,57.85508861319796\r
2021-09-06,62.953130128911425\r
2021-09-11,62.953130128911425\r
2021-09-24,83.62305478606984\r
2021-10-01,83.62305478606984\r
2022-05-19,7.809853388652672\r
2022-05-27,45.96594131780871\r
2022-05-29,45.96594131780871\r
2022-06-06,72.33743015269212\r
2022-06-11,84.55392053885505\r
2022-06-13,84.55392053885505\r
2022-06-16,71.24495023250572\r
2022-06-18,69.51080216646109\r
2022-06-21,78.12458238754219\r
2022-06-23,63.16061136568928\r
2022-06-26,84.32081891846099\r
2022-06-28,77.44778857213504\r
2022-07-01,100.0\r
2022-07-03,100.0\r
2022-07-06,100.0\r
2022-07-08,53.123841417235184\r
2022-07-11,53.123841417235184\r
2022-07-13,61.30309967552059\r
2022-07-16,92.38935596321612\r
2022-07-18,61.713968151178356\r
2022-07-21,84.32081891846099\r
2022-07-28,61.30309967552059\r
2022-07-31,82.69630303039736\r
2022-08-02,55.07562627482604\r
2022-08-05,85.4888910794742\r
2022-08-07,85.4888910794742\r
2022-08-10,90.46447202234292\r
2022-08-12,82.00394461073778\r
2022-08-22,45.60071031869698\r
2022-09-01,67.15426039591243\r
2022-09-04,67.15426039591243\r
2022-09-06,67.15426039591243\r
2022-09-09,67.15426039591243\r
2022-09-11,61.09807605184624\r
2022-09-19,95.55165868790905\r
2022-09-21,62.12593036539634\r
2023-06-26,97.27197479734906\r
2023-06-28,100.0\r
2023-07-08,79.48520452442871\r
2023-07-11,97.27197479734906\r
2023-07-16,94.81813191517254\r
2023-07-18,94.81813191517254\r
2023-07-21,100.0\r
2023-07-23,100.0\r
2023-07-26,100.0\r
2023-07-31,100.0\r
2023-08-02,75.65450694501219\r
2023-08-07,89.98577897174317\r
2023-08-12,74.76415851716722\r
2023-08-15,80.62620164685357\r
2023-08-17,80.39748356312086\r
2023-08-22,73.43652965595186\r
2023-08-25,76.9978981834888\r
`;export{r as default};
