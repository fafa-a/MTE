const n=`date,value\r
2017-01-19,69.72996822486687\r
2017-01-26,81.41373012294363\r
2017-02-15,88.54923303514404\r
2017-02-18,78.42105944355929\r
2017-02-25,94.00667255539138\r
2017-03-27,100.0\r
2017-04-09,92.92957770372183\r
2017-04-19,87.70130333698938\r
2017-05-16,100.0\r
2017-05-26,84.33202358632957\r
2017-06-15,93.14472523198155\r
2017-06-18,86.11746423341575\r
2017-08-02,79.55260328310115\r
2017-08-14,73.93961415496217\r
2017-08-22,76.8852117979388\r
2017-08-24,75.05320639760876\r
2017-08-27,74.24286984201228\r
2017-08-29,69.72996822486687\r
2017-09-18,60.55888719542425\r
2017-09-21,57.04776967019385\r
2017-10-13,61.806020962673045\r
2017-10-16,62.673475254035985\r
2017-10-28,65.39318807936718\r
2017-10-31,62.866690784276855\r
2017-11-07,71.92661495461627\r
2018-02-08,88.44311998417456\r
2018-02-10,87.48966959364098\r
2018-02-25,100.0\r
2018-03-20,98.3487025915745\r
2018-04-19,92.39230422044389\r
2018-04-21,96.38816279115576\r
2018-04-24,84.75120705524826\r
2018-05-04,98.45793718877522\r
2018-05-06,100.0\r
2018-05-16,92.07034907835995\r
2018-05-19,88.23099822054031\r
2018-05-21,88.01901570100013\r
2018-06-20,92.82205493276817\r
2018-06-23,94.65455415916162\r
2018-06-25,91.96309896353296\r
2018-06-28,96.38816279115576\r
2018-07-03,92.07034907835995\r
2018-07-15,94.11456836481753\r
2018-07-25,97.04047701876132\r
2018-07-28,92.60711146650546\r
2018-08-04,94.76265254481882\r
2018-08-07,86.11746423341575\r
2018-08-12,82.14066753142771\r
2018-08-19,80.6885618219634\r
2018-08-22,77.70329780133099\r
2018-09-01,69.0349539066412\r
2018-09-08,72.83058558457046\r
2018-09-11,71.22566449743869\r
2018-09-16,70.32720566766541\r
2018-09-26,65.39318807936718\r
2018-09-28,69.63056406776317\r
2018-10-06,68.53968186015219\r
2018-10-08,68.9358215787375\r
2018-10-18,72.52891940324061\r
2018-10-21,70.82596478811158\r
2018-10-23,70.92583208813673\r
2018-12-10,81.10272666510579\r
2019-02-13,88.23099822054031\r
2019-02-15,85.06596697465203\r
2019-02-20,92.39230422044389\r
2019-02-23,86.22280786032769\r
2019-02-25,86.11746423341575\r
2019-03-22,83.28655496781451\r
2019-03-30,78.72922285300908\r
2019-04-11,96.27956070249513\r
2019-04-19,90.25175564929417\r
2019-05-06,89.18664051968197\r
2019-05-14,89.50581217371007\r
2019-06-30,82.45275193189828\r
2019-07-05,81.41373012294363\r
2019-07-23,65.49090246354335\r
2019-07-25,56.67164005302594\r
2019-08-22,32.09061606116174\r
2019-09-03,19.693863867486275\r
2019-09-06,20.188221678393745\r
2019-09-13,18.784734684429054\r
2019-09-16,15.335334410056904\r
2019-09-18,17.47742793319032\r
2019-09-21,16.66520154550689\r
2019-10-11,23.149459212938275\r
2019-11-22,42.46872615759546\r
2019-12-02,43.95174473822947\r
2019-12-05,46.780581787814235\r
2020-01-06,53.59474045113461\r
2020-01-16,59.60429858383238\r
2020-01-19,59.03353977345568\r
2020-01-21,64.61291084671213\r
2020-01-24,60.36763819942001\r
2020-02-15,69.82941111409707\r
2020-03-19,87.59546900264354\r
2020-03-24,73.83860432666349\r
2020-03-26,91.96309896353296\r
2020-03-31,82.86936692895033\r
2020-04-05,90.78560644883888\r
2020-04-10,88.65538084033123\r
2020-04-15,98.2395011328479\r
2020-05-15,91.42736119645987\r
2020-05-18,80.89557182588841\r
2020-05-20,92.60711146650546\r
2020-05-25,88.01901570100013\r
2020-05-28,88.44311998417456\r
2020-05-30,96.38816279115576\r
2020-06-02,89.08031922606644\r
2020-06-24,90.25175564929417\r
2020-07-07,82.86936692895033\r
2020-07-09,91.96309896353296\r
2020-07-14,94.22249798079339\r
2020-07-19,93.03713447607099\r
2020-07-22,92.71456618106842\r
2020-07-24,92.07034907835995\r
2020-07-29,85.48614227170042\r
2020-08-06,79.65569024422815\r
2020-08-08,76.37511156525285\r
2020-09-07,56.577713947957776\r
2020-09-10,53.502236901132825\r
2020-09-12,63.73816690663162\r
2020-09-15,53.224988450021456\r
2020-09-17,58.559055853803265\r
2020-11-14,56.48383042653623\r
2020-11-19,60.27207571095988\r
2020-11-21,63.25360876839285\r
2020-11-29,58.65386891255984\r
2021-02-24,99.22350584804128\r
2021-02-27,95.95395526272742\r
2021-03-01,96.7141696438919\r
2021-03-06,93.68318814246305\r
2021-03-09,94.97895040317026\r
2021-03-24,97.04047701876132\r
2021-03-29,92.28495172483363\r
2021-03-31,95.19538292816986\r
2021-04-03,96.38816279115576\r
2021-04-08,94.11456836481753\r
2021-04-23,92.92957770372183\r
2021-04-25,93.89881057010825\r
2021-05-03,91.74870124097568\r
2021-05-28,92.39230422044389\r
2021-06-14,94.33046138574962\r
2021-07-19,99.55210211792576\r
2021-07-22,98.45793718877522\r
2021-08-26,90.78560644883888\r
2021-09-02,89.93185848599113\r
2021-09-07,87.70130333698938\r
2021-09-22,81.20635834545796\r
2021-10-15,82.24465973357675\r
2021-10-22,82.0367112881153\r
2021-10-27,82.66098771841459\r
2021-11-06,82.86936692895033\r
2021-11-09,78.21580074748076\r
2021-11-29,83.39094136236768\r
2021-12-09,81.72505851795327\r
2022-01-05,93.68318814246305\r
2022-01-20,90.89247977205989\r
2022-02-09,90.46519273224209\r
2022-02-12,91.42736119645987\r
2022-03-24,94.97895040317026\r
2022-03-26,95.30364964722492\r
2022-04-15,93.14472523198155\r
2022-05-03,100.0\r
2022-05-08,90.78560644883888\r
2022-05-10,97.25818199879188\r
2022-05-13,86.43360062398622\r
2022-05-18,88.33704170632896\r
2022-05-28,83.07788939981779\r
2022-06-02,86.22280786032769\r
2022-06-12,73.13259354415571\r
2022-06-17,74.95178297250625\r
2022-06-19,76.17133147419929\r
2022-06-29,74.0406616991835\r
2022-07-02,69.23333526263315\r
2022-07-04,71.42574461653635\r
2022-07-12,69.33258424011503\r
2022-07-14,70.22756949237035\r
2022-07-17,65.39318807936718\r
2022-07-19,65.88215822852703\r
2022-08-03,54.61515244597954\r
2022-08-06,49.20444457392297\r
2022-08-08,46.602373002042405\r
2022-08-11,41.51658142134858\r
2022-08-13,38.61135260570705\r
2022-08-18,38.357791223115015\r
2022-08-31,34.200156946631914\r
2022-09-20,31.849582698349604\r
2022-09-22,30.810874144381522\r
2022-10-20,39.97134461641659\r
2022-10-27,38.2733722798822\r
2022-12-16,58.18022316718551\r
2023-01-15,68.24298685781902\r
2023-02-07,78.83201733319423\r
2023-02-09,82.45275193189828\r
2023-02-14,78.11322653797464\r
2023-02-27,82.86936692895033\r
2023-03-01,83.91340862978625\r
2023-03-04,85.17095775944937\r
2023-04-05,93.57542773540692\r
2023-04-20,96.496798322326\r
`;export{n as default};
