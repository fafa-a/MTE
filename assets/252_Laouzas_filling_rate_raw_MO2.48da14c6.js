const r=`date,value\r
2017-02-22,98.30200085645286\r
2017-02-25,98.59849210036448\r
2017-03-07,95.14344668276962\r
2017-03-17,100.0\r
2017-03-27,100.0\r
2017-04-06,98.08142433104204\r
2017-04-16,97.92398201536668\r
2017-04-23,89.29437268557612\r
2017-05-03,89.29437268557612\r
2017-05-16,88.2683012451127\r
2017-05-23,87.84458833528626\r
2017-05-26,89.33088192036415\r
2017-06-12,92.38035405013848\r
2017-06-15,87.84458833528626\r
2017-06-22,92.86140842144341\r
2017-06-25,89.37348301089526\r
2017-07-02,87.17424960729407\r
2017-07-05,90.73456254283568\r
2017-07-07,90.83863417913794\r
2017-07-10,90.83863417913794\r
2017-07-12,90.83863417913794\r
2017-07-17,90.59383005874999\r
2017-07-22,89.73894357495232\r
2017-07-27,92.32490731891797\r
2017-08-04,92.21405083620775\r
2017-08-06,92.21405083620775\r
2017-08-11,88.0926714583612\r
2017-08-14,88.94173505828927\r
2017-08-19,88.88706173960966\r
2017-08-21,87.76598193023342\r
2017-08-24,87.89297445655274\r
2017-08-26,87.0777810433411\r
2017-08-29,87.78411955730479\r
2017-09-03,85.23446409393213\r
2017-09-05,85.23446409393213\r
2017-09-08,84.88785730914724\r
2017-09-20,69.5909998112149\r
2017-09-23,72.66704586540138\r
2017-09-28,73.12421484397412\r
2017-10-03,67.92300286686817\r
2017-10-05,53.498707177115115\r
2017-10-08,53.4936740287162\r
2017-10-10,54.16462010014539\r
2017-10-13,51.82741217636916\r
2017-10-15,51.85726198440568\r
2017-10-18,52.510567173162535\r
2017-10-25,50.61892221974919\r
2017-10-28,50.84594430122876\r
2017-10-30,50.84594430122876\r
2017-11-07,47.028456711403614\r
2018-02-25,68.00549647106052\r
2018-02-27,68.1045377221192\r
2018-03-02,71.08931149409233\r
2018-03-14,84.06527654862573\r
2018-03-19,95.16213445561733\r
2018-03-22,95.16213445561733\r
2018-04-18,99.55961860483711\r
2018-04-21,100.0\r
2018-04-23,100.0\r
2018-04-26,100.0\r
2018-05-06,99.93996017779706\r
2018-05-11,100.0\r
2018-05-18,100.0\r
2018-05-21,100.0\r
2018-06-25,94.75131746605946\r
2018-06-27,93.85727590731004\r
2018-07-02,93.81389557131573\r
2018-07-07,94.8197412611103\r
2018-07-10,95.25559370095962\r
2018-07-12,97.03776235377258\r
2018-07-15,96.66155301274854\r
2018-07-17,96.76182259595954\r
2018-07-20,95.64849329755185\r
2018-07-22,96.57384870480028\r
2018-07-25,94.58344569845151\r
2018-07-27,94.01226628183102\r
2018-07-30,93.28772714035036\r
2018-08-01,92.32490731891797\r
2018-08-04,92.10939833202481\r
2018-08-06,93.83248623468745\r
2018-08-11,91.05303835915419\r
2018-08-16,93.77671833626393\r
2018-08-19,91.66050851756935\r
2018-08-21,91.36579076431369\r
2018-08-26,92.3618704369684\r
2018-08-31,91.78955800741747\r
2018-09-03,90.56936310096508\r
2018-09-08,88.8688400661568\r
2018-09-10,87.57864105294605\r
2018-09-13,86.1993339450533\r
2018-09-20,83.75014662314526\r
2018-09-23,73.81479168164779\r
2018-09-25,73.81479168164779\r
2018-09-28,71.02781071317733\r
2018-09-30,71.02781071317733\r
2018-10-03,67.06726952139196\r
2018-10-05,64.60520554337774\r
2018-10-20,76.5952960627727\r
2018-10-23,79.21569541382296\r
2018-10-25,77.86382004341867\r
2018-10-30,78.43137009371115\r
2018-11-04,80.54102591715368\r
2019-02-20,49.435685006614435\r
2019-02-22,48.26768663546477\r
2019-02-25,47.50441202906817\r
2019-02-27,47.47551575899331\r
2019-03-12,48.306453171133874\r
2019-03-22,43.630045834704674\r
2019-03-24,43.9244482927541\r
2019-03-27,42.71419390762611\r
2019-03-29,43.14100607657183\r
2019-04-01,43.1828437662699\r
2019-04-08,43.0713099659141\r
2019-04-13,44.717808514634136\r
2019-05-06,69.48007361675884\r
2019-05-11,69.48007361675884\r
2019-05-13,70.34146355694027\r
2019-05-16,70.01311649869353\r
2019-05-23,72.2784435313492\r
2019-05-31,78.22270500190908\r
2019-06-02,76.79083644168266\r
2019-06-12,79.57104127466847\r
2019-06-17,79.10513422368804\r
2019-06-22,90.172118109542\r
2019-06-25,89.22137079413636\r
2019-06-27,82.71865366722476\r
2019-06-30,85.08500049912145\r
2019-07-02,85.08500049912145\r
2019-07-05,88.74739759452662\r
2019-07-07,88.74739759452662\r
2019-07-10,87.4880454596475\r
2019-07-12,87.28885738270193\r
2019-07-15,88.41374795366008\r
2019-07-17,88.96603830614586\r
2019-07-22,88.72918652730594\r
2019-07-25,87.97767390352031\r
2019-08-01,88.46224988977953\r
2019-08-04,87.01750827520534\r
2019-08-09,88.57141524931772\r
2019-08-11,87.15615873931749\r
2019-08-14,90.75292491603136\r
2019-08-16,87.80830521852958\r
2019-08-21,88.90528479616508\r
2019-08-24,89.23961919454601\r
2019-08-26,89.13622986329175\r
2019-08-29,87.83854076377085\r
2019-08-31,87.27075771199493\r
2019-09-03,86.67424865158698\r
2019-09-05,86.67424865158698\r
2019-09-13,85.66546161200976\r
2019-09-15,85.36008855461995\r
2019-09-18,83.07380618507058\r
2019-09-20,84.39276124212253\r
2019-10-08,68.94854052923814\r
2019-10-13,68.94854052923814\r
2019-10-25,70.9551533831249\r
2019-10-30,71.21796770610047\r
2019-11-04,71.21796770610047\r
2019-11-09,71.21796770610047\r
2020-02-20,72.21093929278575\r
2020-02-22,70.3804577233263\r
2020-03-01,70.3804577233263\r
2020-03-08,75.02051666266549\r
2020-03-11,79.41368440623181\r
2020-03-13,79.32631376526766\r
2020-03-18,80.3068968554635\r
2020-03-21,80.3068968554635\r
2020-03-28,82.41721718354891\r
2020-03-31,80.48246999510566\r
2020-04-05,80.55273899359308\r
2020-04-07,83.64916005462383\r
2020-04-10,81.69190114187424\r
2020-04-12,81.72133923159834\r
2020-04-15,80.70506636516414\r
2020-04-25,81.64480836671994\r
2020-05-05,83.09157859590934\r
2020-05-07,83.34054010136843\r
2020-05-17,84.38680276797166\r
2020-05-20,85.64748731599579\r
2020-05-22,94.19217370557094\r
2020-05-25,95.47379733355751\r
2020-05-27,95.7983267852232\r
2020-05-30,95.7983267852232\r
2020-06-19,92.76265519697144\r
2020-06-21,98.26417470966052\r
2020-06-24,98.17593466357233\r
2020-06-26,96.0544931425548\r
2020-07-01,96.5237451926398\r
2020-07-04,95.1559050470166\r
2020-07-09,98.03733104344276\r
2020-07-11,98.04362963508964\r
2020-07-14,97.00011707527139\r
2020-07-19,99.08494713600827\r
2020-07-21,98.54169159215253\r
2020-07-24,98.03733104344276\r
2020-07-26,97.59051412446634\r
2020-07-29,97.65340035634634\r
2020-07-31,96.26085973100074\r
2020-08-03,96.26085973100074\r
2020-08-05,96.11075867670633\r
2020-08-08,97.75404952053222\r
2020-08-10,98.16963292629129\r
2020-08-15,100.0\r
2020-08-20,98.99643484432589\r
2020-08-23,100.0\r
2020-08-25,98.49752179773661\r
2020-09-02,96.49243538629429\r
2020-09-04,95.33038555040515\r
2020-09-07,94.72644062039109\r
2020-09-12,94.7450980279094\r
2020-09-14,94.23561871213514\r
2020-09-17,94.73887874091295\r
2020-09-19,94.81352016044072\r
2021-03-23,83.46512423965399\r
2021-03-26,82.5471986362236\r
2021-03-28,85.61154291352383\r
2021-03-31,85.61154291352383\r
2021-04-02,84.05932664574998\r
2021-04-05,82.29321473819027\r
2021-04-07,82.17518145184643\r
2021-04-15,83.1389785724595\r
2021-04-17,69.95196217668955\r
2021-04-20,68.95959871561693\r
2021-04-22,68.95959871561693\r
2021-05-27,75.28880213271097\r
2021-05-30,75.28880213271097\r
2021-06-14,81.32719520415961\r
2021-06-16,86.57798538788741\r
2021-06-19,86.57798538788741\r
2021-06-21,86.57798538788741\r
2021-06-26,84.62526319968532\r
2021-07-01,83.58383984592538\r
2021-07-19,89.18487813865768\r
2021-07-21,85.36607238031752\r
2021-07-26,85.59357280721802\r
2021-07-29,90.56936310096508\r
2021-08-05,90.39205084572937\r
2021-08-10,91.40261126378579\r
2021-08-13,92.40500099776322\r
2021-08-18,91.58065442969483\r
2021-08-20,91.85718218352956\r
2021-08-23,92.09708916548149\r
2021-08-25,91.80185194065143\r
2021-08-28,92.15864108856184\r
2021-08-30,91.29830078239529\r
2021-09-04,90.1537993365358\r
2021-09-07,89.84868938603844\r
2021-09-12,77.39587546442912\r
2021-09-14,77.39587546442912\r
2021-09-17,77.21129639287328\r
2021-09-22,77.67304989528603\r
2021-09-24,56.11397713338888\r
2021-09-29,56.11397713338888\r
2021-10-07,52.091305541698354\r
2021-10-12,53.01632502850604\r
2021-10-14,52.39564565199921\r
2021-10-17,52.39564565199921\r
2021-10-24,51.55408559079141\r
2021-10-27,50.64851246208968\r
2022-04-10,85.90525229777104\r
2022-04-15,85.90525229777104\r
2022-04-17,81.53888638754881\r
2022-04-27,89.67190114044526\r
2022-04-30,90.83251109553603\r
2022-05-07,90.83251109553603\r
2022-05-12,81.03351781951027\r
2022-05-15,81.93340937072698\r
2022-05-17,80.68748469255144\r
2022-05-20,80.68748469255144\r
2022-05-22,80.68748469255144\r
2022-05-27,81.03938751184116\r
2022-06-01,79.6410146730763\r
2022-06-04,79.62935085865124\r
2022-06-06,84.6312279020662\r
2022-06-11,84.98342074099597\r
2022-06-14,86.12727954767985\r
2022-06-16,85.73137931060838\r
2022-06-19,85.3122235401249\r
2022-06-29,87.42163075732928\r
2022-07-01,88.82632820724574\r
2022-07-04,88.82632820724574\r
2022-07-06,88.82632820724574\r
2022-07-11,89.40391696514568\r
2022-07-14,89.55005333913054\r
2022-07-16,89.34305289315884\r
2022-07-19,89.74503926156848\r
2022-07-21,89.04504083828968\r
2022-07-24,89.1909598640582\r
2022-07-26,89.08759141617934\r
2022-07-29,89.11798929380137\r
2022-07-31,89.87308408759039\r
2022-08-03,89.95238379961732\r
2022-08-05,89.52569114050957\r
2022-08-08,88.95996226371096\r
2022-08-10,89.73894357495232\r
2022-08-13,89.6353403592961\r
2022-08-15,89.92188084597969\r
2022-08-20,89.72065743490336\r
2022-08-30,90.16601169876301\r
2022-09-02,90.38593892480439\r
2022-09-04,90.25762393542381\r
2022-09-19,89.0815123014087\r
2022-09-22,88.64421984426248\r
2022-10-04,81.45653782853144\r
2022-10-07,81.45653782853144\r
2022-10-09,82.48219843015505\r
2022-10-12,82.48219843015505\r
2022-10-24,79.10513422368804\r
2022-10-27,79.10513422368804\r
2022-11-01,78.93068035487804\r
2023-02-19,43.448164277353825\r
2023-02-21,43.448164277353825\r
2023-02-26,42.095348259617694\r
2023-03-01,42.64475401989889\r
2023-03-03,44.689551920408675\r
2023-03-16,58.96812286509563\r
2023-03-28,63.70081298548259\r
2023-04-05,65.4058367434535\r
2023-04-07,61.37050935407286\r
2023-04-15,62.390389116481984\r
2023-07-29,94.82596251290255\r
2023-07-31,94.37220844272403\r
2023-08-03,94.5958768643086\r
2023-08-05,94.5958768643086\r
2023-08-08,94.67047656082511\r
2023-08-10,94.85707103861431\r
2023-08-13,94.2728631924683\r
2023-08-15,93.78291416322824\r
2023-08-18,93.45474424076008\r
2023-08-20,92.7688261337222\r
2023-08-23,92.670109385424\r
2023-09-04,92.10939833202481\r
2023-09-07,92.7318027930507\r
2023-09-14,90.28816900154285\r
2023-09-19,84.09502840172627\r
2023-09-24,74.16666081898065\r
2023-09-27,74.28598271270266\r
2023-09-29,73.74109126258554\r
2023-10-02,73.74109126258554\r
2023-10-04,70.93839021706685\r
2023-10-07,68.74408254409828\r
2023-10-12,63.15937586645144\r
`;export{r as default};
