const n=`date,value\r
2017-02-15,82.36397088737237\r
2017-02-18,71.12678382240478\r
2017-02-25,80.20558774148459\r
2017-03-10,85.19737026847648\r
2017-03-17,92.88404677886052\r
2017-03-30,94.2410319290606\r
2017-04-09,81.98111064672389\r
2017-04-19,74.98947418376382\r
2017-04-29,86.23892670708254\r
2017-05-09,100.0\r
2017-05-16,98.92432563655738\r
2017-05-26,93.56137600459526\r
2017-06-18,100.0\r
2017-07-05,100.0\r
2017-07-18,93.96889041397257\r
2017-08-02,75.9702282184011\r
2017-08-04,84.93791642405517\r
2017-08-07,78.44845923542103\r
2017-08-14,80.71100398081279\r
2017-08-17,67.24469924598866\r
2017-08-22,61.78231468352088\r
2017-09-01,69.93951709347154\r
2017-10-08,67.47704301545392\r
2017-10-11,68.64444441768933\r
2017-10-13,71.84367861043629\r
2017-10-16,69.82131029607402\r
2017-10-18,67.94286727725589\r
2017-10-26,69.93951709347154\r
2017-10-28,68.64444441768933\r
2017-10-31,68.52727823134023\r
2017-11-17,73.52964749498145\r
2017-11-22,72.80482503206484\r
2017-11-27,70.6507430989646\r
2017-12-25,80.83759260281091\r
2018-01-09,82.74767455185274\r
2018-01-24,87.94421424608709\r
2018-02-10,82.61967962973782\r
2018-02-25,83.646261890499\r
2018-03-07,93.29016505917212\r
2018-03-15,81.4719426870885\r
2018-03-22,99.90185731500033\r
2018-04-19,81.2179212903588\r
2018-04-21,90.99991080696115\r
2018-05-06,78.32365450638245\r
2018-05-11,100.0\r
2018-05-21,79.70167308400472\r
2018-06-20,95.60732022428031\r
2018-06-23,100.0\r
2018-06-25,96.84492787592134\r
2018-07-08,88.33998389446374\r
2018-07-10,93.96889041397257\r
2018-07-13,90.33143143534271\r
2018-07-18,82.10863700003144\r
2018-07-23,86.63105300838232\r
2018-07-25,85.06759657141824\r
2018-07-30,81.85367803086112\r
2018-08-02,76.46286451235572\r
2018-08-04,73.04605523774774\r
2018-08-12,69.93951709347154\r
2018-08-19,66.5499422347206\r
2018-08-22,62.67750967448832\r
2018-08-27,53.79119319510348\r
2018-09-01,52.75150334375911\r
2018-09-03,50.29543800230968\r
2018-09-08,57.61341426523919\r
2018-09-11,59.461424662122866\r
2018-09-16,50.194304136626755\r
2018-09-26,56.53924533615376\r
2018-09-28,64.60000463592766\r
2018-10-03,61.337001379099355\r
2018-10-06,61.00401622411361\r
2018-10-23,61.00401622411361\r
2018-11-15,64.82798556338824\r
2018-11-17,68.87906071569358\r
2018-11-22,61.78231468352088\r
2018-11-27,65.74370610381403\r
2019-01-09,68.64444441768933\r
2019-01-16,78.32365450638245\r
2019-01-19,80.45810819543833\r
2019-02-03,92.07432424212395\r
2019-02-13,69.82131029607402\r
2019-02-15,84.03277543524575\r
2019-02-20,76.83332973271749\r
2019-02-23,71.00763192634987\r
2019-02-25,81.85367803086112\r
2019-03-20,70.6507430989646\r
2019-03-22,78.69835057049995\r
2019-03-25,86.50025077375243\r
2019-03-27,89.66528320120779\r
2019-03-30,78.69835057049995\r
2019-05-01,80.96427503371258\r
2019-05-14,89.0014670408138\r
2019-05-31,79.07389214410213\r
2019-06-18,100.0\r
2019-06-25,70.05781843964063\r
2019-07-05,92.88404677886052\r
2019-07-08,86.10840489038534\r
2019-07-10,89.26671359603407\r
2019-07-15,96.84492787592134\r
2019-07-25,81.59909404312158\r
2019-08-02,73.65078131126704\r
2019-08-04,86.36954200409647\r
2019-08-14,84.54943735759983\r
2019-08-17,79.45027900885474\r
2019-08-22,76.70974724716712\r
2019-08-24,83.90384396476578\r
2019-09-03,82.49177840561919\r
2019-09-13,79.19926052187861\r
2019-09-16,74.37956387757036\r
2019-09-18,52.54471712609505\r
2019-10-08,73.52964749498145\r
2019-10-11,72.92539296761663\r
2019-10-13,77.20464156338791\r
2019-12-05,86.23892670708254\r
2019-12-15,57.9375285819924\r
2019-12-17,72.80482503206484\r
2019-12-27,74.37956387757036\r
2019-12-30,71.48480625105601\r
2020-01-06,88.20796730991246\r
2020-01-11,80.96427503371258\r
2020-01-14,77.94980417068976\r
2020-01-16,73.1668118339979\r
2020-01-19,70.53196913879309\r
2020-02-03,66.08866685382733\r
2020-02-05,86.23892670708254\r
2020-02-15,73.52964749498145\r
2020-02-20,82.74767455185274\r
2020-03-21,83.00394545860503\r
2020-03-24,75.11173885390178\r
2020-03-26,76.9570062860748\r
2020-03-31,95.05968899489989\r
2020-04-03,77.70104057108037\r
2020-04-05,83.3890543572257\r
2020-04-08,90.06469235285056\r
2020-04-10,85.19737026847648\r
2020-04-15,90.59854349978731\r
2020-05-08,89.0014670408138\r
2020-05-18,90.33143143534271\r
2020-05-20,84.54943735759983\r
2020-05-25,96.98290440281554\r
2020-05-28,91.80516184206114\r
2020-05-30,85.71740039904337\r
2020-06-19,61.78231468352088\r
2020-06-24,83.77500611391514\r
2020-07-09,86.36954200409647\r
2020-07-19,81.2179212903588\r
2020-07-24,70.88857450135632\r
2020-07-27,78.44845923542103\r
2020-08-06,65.39959915359258\r
2020-08-08,71.6043359455165\r
2020-09-02,62.453140064913725\r
2020-09-05,66.31911490066932\r
2020-09-10,69.82131029607402\r
2020-09-12,66.6654981121047\r
2020-09-30,69.23169484464997\r
2020-10-17,81.4719426870885\r
2020-10-30,84.93791642405517\r
2020-11-14,73.77200941149175\r
2020-11-21,80.07946828378968\r
2020-11-26,76.33956427954817\r
2020-11-29,65.28508661213628\r
2020-12-26,67.8262691435569\r
2021-01-03,86.89293784192562\r
2021-01-10,79.45027900885474\r
2021-01-18,77.70104057108037\r
2021-02-17,95.74446044667737\r
2021-02-19,81.09105126554905\r
2021-02-24,96.56925351114694\r
2021-03-01,80.58450917569415\r
2021-03-04,82.49177840561919\r
2021-03-21,84.42013148651475\r
2021-03-24,76.46286451235572\r
2021-03-29,79.70167308400472\r
2021-03-31,87.15519644351673\r
2021-04-03,79.70167308400472\r
2021-04-05,88.0760440912598\r
2021-04-15,88.6042971309698\r
2021-04-23,85.19737026847648\r
2021-05-03,80.33180104803587\r
2021-05-08,84.16180051755691\r
2021-06-09,79.95344268296363\r
2021-06-14,88.20796730991246\r
2021-07-17,84.54943735759983\r
2021-07-22,79.32472281281753\r
2021-08-11,89.53233337319845\r
2021-08-26,79.57592910193357\r
2021-08-31,77.45265301353841\r
2021-09-05,79.07389214410213\r
2021-09-12,81.72633916035427\r
2021-09-25,71.96349156380253\r
2021-10-12,77.45265301353841\r
2021-10-15,73.89333178724374\r
2021-10-17,76.58625883763892\r
2021-10-27,68.99651080983136\r
2021-11-19,74.62324535778056\r
2021-12-14,80.07946828378968\r
2021-12-16,74.62324535778056\r
2021-12-19,70.76961155602486\r
2021-12-21,78.69835057049995\r
2022-01-15,68.76170524872812\r
2022-01-23,78.32365450638245\r
2022-01-25,79.45027900885474\r
2022-02-09,77.94980417068976\r
2022-02-27,83.77500611391514\r
2022-03-09,74.13625933172277\r
2022-03-19,77.57679978297107\r
2022-03-21,77.08077689903156\r
2022-03-24,77.57679978297107\r
2022-03-26,82.87576316409557\r
2022-04-05,79.32472281281753\r
2022-05-08,81.09105126554905\r
2022-05-10,86.36954200409647\r
2022-05-28,81.72633916035427\r
2022-05-30,89.53233337319845\r
2022-06-17,80.58450917569415\r
2022-07-02,89.26671359603407\r
2022-07-12,92.20904516914844\r
2022-07-14,90.99991080696115\r
2022-07-17,89.79832631215376\r
2022-07-24,84.54943735759983\r
2022-07-27,69.11405552239583\r
2022-08-01,76.46286451235572\r
2022-08-06,70.53196913879309\r
2022-08-08,68.17634762819188\r
2022-08-11,63.91834111266896\r
2022-08-13,57.075134836294424\r
2022-09-05,49.48906310685094\r
2022-09-15,51.209973019998735\r
2022-09-20,50.70093591207959\r
2022-09-22,53.270148824057316\r
2022-10-05,50.49799448876651\r
2022-10-12,56.11225530668925\r
2022-10-15,59.57099008014362\r
2022-10-30,68.05956010840605\r
2022-11-06,63.24009801023187\r
2022-11-16,64.71394762569722\r
2022-12-21,75.11173885390178\r
2023-01-03,81.09105126554905\r
2023-01-18,78.57335792616314\r
2023-02-02,74.01474843011934\r
2023-02-04,87.28646588823156\r
2023-02-09,78.44845923542103\r
2023-02-12,78.19894374716387\r
2023-02-17,86.10840489038534\r
2023-02-19,90.86602848644407\r
2023-02-24,64.25874544497204\r
2023-03-01,89.39947683563526\r
2023-03-09,80.33180104803587\r
2023-04-05,95.33331866307081\r
2023-05-28,99.48235860111888\r
2023-05-30,88.86898374025898\r
2023-06-02,88.33998389446374\r
2023-06-24,92.47876644024238\r
2023-07-07,91.26795506514696\r
2023-07-14,93.4257239942523\r
2023-07-17,97.53573930643674\r
2023-07-22,87.54928502736082\r
2023-07-27,82.61967962973782\r
2023-07-29,81.4719426870885\r
2023-08-08,75.11173885390178\r
2023-08-11,70.05781843964063\r
2023-08-21,61.4481868920111\r
2023-08-23,59.461424662122866\r
2023-09-05,49.38869966218344\r
2023-09-07,42.69690120134968\r
2023-09-10,49.28843256775932\r
`;export{n as default};
