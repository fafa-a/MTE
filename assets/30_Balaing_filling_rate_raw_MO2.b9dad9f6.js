const n=`date,value\r
2017-01-19,54.31341666382835\r
2017-01-26,54.51637300993541\r
2017-01-29,54.51637300993541\r
2017-02-15,57.98111268276054\r
2017-02-18,61.03828399191238\r
2017-02-25,59.23802191795649\r
2017-03-10,66.35525843009378\r
2017-03-17,66.35525843009378\r
2017-03-30,64.01711535263988\r
2017-04-06,80.48644119258441\r
2017-04-09,77.19796659927346\r
2017-04-19,79.01326830840947\r
2017-04-29,83.83324373151413\r
2017-05-06,83.79257505343222\r
2017-05-09,78.77546974990605\r
2017-05-16,79.09260241901471\r
2017-05-19,79.45002602360307\r
2017-05-26,80.80649014406728\r
2017-06-05,80.28668574547801\r
2017-06-18,81.28757888394068\r
2017-06-25,81.28757888394068\r
2017-06-28,81.28757888394068\r
2017-07-05,81.85038770338778\r
2017-07-18,80.96671772175652\r
2017-08-02,76.53165275208484\r
2017-08-04,80.12703384029761\r
2017-08-07,80.12703384029761\r
2017-08-12,74.77978803586451\r
2017-08-14,78.61710723883886\r
2017-08-17,78.221795768881\r
2017-08-22,69.06574927793501\r
2017-08-24,70.15534184928913\r
2017-08-27,70.2684732987303\r
2017-08-29,70.64613945581331\r
2017-09-01,68.16952409812149\r
2017-09-03,72.93023695907665\r
2017-09-06,14.063251774903204\r
2017-09-08,61.46521201242277\r
2017-09-13,57.842166226779334\r
2017-09-16,57.842166226779334\r
2017-09-21,61.500846623881564\r
2017-09-23,61.500846623881564\r
2017-09-26,58.60813022086442\r
2017-09-28,58.60813022086442\r
2017-10-08,57.218667729634944\r
2017-10-11,58.25943201936792\r
2017-10-13,56.35748352333888\r
2017-10-16,56.4948985932425\r
2017-10-18,56.4948985932425\r
2017-10-23,54.48252453314818\r
2017-10-26,52.434754372431534\r
2017-10-28,55.26330638313871\r
2017-10-31,52.86835747550334\r
2017-11-05,55.60425372331472\r
2017-11-07,54.61797223140559\r
2017-11-17,54.38103290535536\r
2017-11-20,54.99119271483026\r
2017-11-22,53.57200770577894\r
2017-11-25,53.57200770577894\r
2017-11-27,53.57200770577894\r
2017-11-30,49.96301264648271\r
2017-12-05,51.34091789669423\r
2017-12-07,51.34091789669423\r
2017-12-12,56.014570504961924\r
2017-12-15,54.110783261060526\r
2017-12-20,57.35697385173088\r
2017-12-25,59.34328298219732\r
2017-12-27,58.67797633627514\r
2018-01-24,96.02299261574457\r
2018-01-29,94.34847366734746\r
2018-01-31,94.34847366734746\r
2018-02-15,97.05970477250064\r
2018-02-25,98.01419227580287\r
2018-03-02,97.49306886321904\r
2018-03-07,97.49306886321904\r
2018-03-15,98.754477686073\r
2018-03-17,98.754477686073\r
2018-03-22,100.0\r
2018-03-30,100.0\r
2018-04-04,93.23911487370567\r
2018-04-06,93.23911487370567\r
2018-04-09,95.07684738367495\r
2018-04-19,94.51964076687615\r
2018-04-21,100.0\r
2018-04-24,93.75043122372345\r
2018-04-26,93.75043122372345\r
2018-05-06,90.02852497909211\r
2018-05-11,99.19104900777077\r
2018-05-21,99.49713749415253\r
2018-05-24,96.06609413438346\r
2018-06-20,99.49713749415253\r
2018-06-23,100.0\r
2018-06-25,99.5846652171234\r
2018-07-08,100.0\r
2018-07-10,99.14735491921216\r
2018-07-13,98.18816332574517\r
2018-07-15,95.9368143285643\r
2018-07-18,95.9368143285643\r
2018-07-23,96.71360652644671\r
2018-07-25,93.32425143522359\r
2018-07-30,92.81392929156874\r
2018-08-02,94.26293974266065\r
2018-08-04,95.97989934695673\r
2018-08-12,91.33231272736366\r
2018-08-19,91.37450346017673\r
2018-08-22,84.81181547036434\r
2018-08-27,82.0114943456811\r
2018-09-01,71.89855747933588\r
2018-09-03,66.68692548236454\r
2018-09-08,66.98233253124852\r
2018-09-11,69.55328775999715\r
2018-09-16,67.27829627736985\r
2018-09-18,67.27829627736985\r
2018-09-23,66.17130378849282\r
2018-09-26,59.76512394664201\r
2018-09-28,62.46630820062726\r
2018-10-03,57.42618031015273\r
2018-10-06,59.87078326095434\r
2018-10-13,55.501875617374644\r
2018-11-15,54.787483521834524\r
2018-11-17,60.152930472827634\r
2018-11-22,60.152930472827634\r
2018-11-27,53.63922887661581\r
2018-12-07,54.110783261060526\r
2018-12-10,54.110783261060526\r
2018-12-20,63.293792171067366\r
2018-12-27,63.293792171067366\r
2019-02-13,78.221795768881\r
2019-02-15,83.02147003651234\r
2019-02-18,83.02147003651234\r
2019-02-20,82.25340759793582\r
2019-02-23,85.302916643692\r
2019-02-25,82.89999463680633\r
2019-02-28,84.97538148346784\r
2019-03-12,83.87392082573781\r
2019-03-20,83.3052075942378\r
2019-03-22,79.33080845401221\r
2019-03-25,81.81013215580705\r
2019-03-27,80.80649014406728\r
2019-03-30,80.92664813685269\r
2019-04-01,80.92664813685269\r
2019-04-09,83.10249577826674\r
2019-04-16,86.49473311914657\r
2019-04-19,86.49473311914657\r
2019-05-01,81.93092413536117\r
2019-05-06,85.58995063940431\r
2019-05-09,83.54873975755083\r
2019-05-11,83.54873975755083\r
2019-05-14,84.24039330117826\r
2019-05-16,84.24039330117826\r
2019-05-29,90.53226850252088\r
2019-06-08,94.26293974266065\r
2019-06-13,98.88536283982633\r
2019-06-18,90.82667233849617\r
2019-06-23,100.0\r
2019-06-25,100.0\r
2019-06-28,97.66664501017208\r
2019-07-05,96.49756294294043\r
2019-07-08,96.49756294294043\r
2019-07-10,100.0\r
2019-07-13,100.0\r
2019-07-15,97.75348246156328\r
2019-07-20,97.75348246156328\r
2019-07-23,99.8474453083038\r
2019-07-25,91.75459394900342\r
2019-07-28,91.75459394900342\r
2019-08-02,95.76455676984278\r
2019-08-04,94.73378568989102\r
2019-08-09,93.28167901193903\r
2019-08-14,91.58558176668173\r
2019-08-17,86.53595598481793\r
2019-08-22,89.4005321910805\r
2019-08-24,85.09814418925752\r
2019-08-29,87.15530387906223\r
2019-09-03,92.22006251945808\r
2019-09-06,92.22006251945808\r
2019-09-08,87.27939946243049\r
2019-09-11,79.72849722303827\r
2019-09-13,85.22098247376164\r
2019-09-16,79.13228220733033\r
2019-09-18,79.13228220733033\r
2019-09-21,79.13228220733033\r
2019-09-26,79.13228220733033\r
2019-10-08,71.86046756327636\r
2019-10-11,73.16034996543806\r
2019-10-13,70.38168248447974\r
2019-10-26,74.66361262856704\r
2019-12-05,94.34847366734746\r
2019-12-07,94.34847366734746\r
2019-12-10,94.51964076687615\r
2019-12-15,90.70044934901377\r
2019-12-17,90.70044934901377\r
2019-12-20,90.70044934901377\r
2019-12-25,85.83630701674224\r
2019-12-27,86.04183464522582\r
2019-12-30,84.93447737957979\r
2020-01-09,95.50641803627984\r
2020-01-11,94.26293974266065\r
2020-01-14,92.98390406152178\r
2020-01-16,92.98390406152178\r
2020-01-19,92.89890009642399\r
2020-01-29,90.78458969031593\r
2020-01-31,91.58558176668173\r
2020-02-03,94.77663947547245\r
2020-02-05,93.75043122372345\r
2020-02-10,93.75043122372345\r
2020-02-15,92.77145632562596\r
2020-02-18,89.69336217448226\r
2020-02-20,88.69107479229751\r
2020-02-23,88.31645608802218\r
2020-03-11,93.79309474593585\r
2020-03-21,95.67847750702161\r
2020-03-24,95.63545025665482\r
2020-03-26,94.77663947547245\r
2020-03-31,95.1626954367764\r
2020-04-03,92.55921588308169\r
2020-04-05,93.1114721748723\r
2020-04-08,91.58558176668173\r
2020-04-10,88.98291233465513\r
2020-04-15,95.1626954367764\r
2020-04-25,91.96604603920866\r
2020-04-30,91.50112551784689\r
2020-05-03,93.57985992990002\r
2020-05-05,91.24795619473808\r
2020-05-08,91.24795619473808\r
2020-05-18,96.32487646262527\r
2020-05-20,96.36803571499345\r
2020-05-25,97.97072007447163\r
2020-05-28,97.97072007447163\r
2020-05-30,99.67222576329864\r
2020-06-12,95.97989934695673\r
2020-06-14,97.84035282582992\r
2020-06-24,90.78458969031593\r
2020-07-04,90.78458969031593\r
2020-07-07,99.80362811679481\r
2020-07-09,94.09197116549886\r
2020-07-19,92.98390406152178\r
2020-07-22,93.19655902107938\r
2020-07-24,88.81609795581443\r
2020-07-27,86.45351863103933\r
2020-07-29,86.45351863103933\r
2020-08-03,86.45351863103933\r
2020-08-06,77.00173623471734\r
2020-08-08,73.16034996543806\r
2020-08-18,63.47429427861931\r
2020-08-21,63.47429427861931\r
2020-08-31,60.152930472827634\r
2020-09-02,57.77274632379452\r
2020-09-05,57.77274632379452\r
2020-09-07,57.77274632379452\r
2020-09-10,59.09779783282545\r
2020-09-12,53.63922887661581\r
2020-09-17,54.99119271483026\r
2020-09-30,50.91271543027774\r
2020-10-12,50.91271543027774\r
2020-10-30,53.03553328284715\r
2020-11-09,53.03553328284715\r
2020-11-11,57.59935214794783\r
2020-11-14,54.787483521834524\r
2020-11-21,56.15162859635701\r
2020-11-26,57.59935214794783\r
2020-11-29,57.322383970679525\r
2020-12-26,85.67203587605782\r
2021-01-03,95.03393574965277\r
2021-01-08,95.03393574965277\r
2021-01-10,95.03393574965277\r
2021-02-14,99.97894609645162\r
2021-02-17,99.97894609645162\r
2021-02-19,99.97894609645162\r
2021-02-24,99.45338594269454\r
2021-02-27,96.71360652644671\r
2021-03-01,98.01419227580287\r
2021-03-04,98.27519818998375\r
2021-03-09,94.819501526764\r
2021-03-14,93.40942113472367\r
2021-03-24,90.91086258708165\r
2021-03-29,97.79691352985581\r
2021-03-31,94.43404067688881\r
2021-04-03,94.43404067688881\r
2021-04-05,95.42043783709624\r
2021-04-08,94.99103237804724\r
2021-04-15,95.76455676984278\r
2021-04-20,97.31962441940463\r
2021-04-23,98.71086573258812\r
2021-05-03,94.43404067688881\r
2021-05-08,90.78458969031593\r
2021-05-20,89.23338417274564\r
2021-05-28,93.15401145461617\r
2021-05-30,90.32222968394493\r
2021-06-07,91.75459394900342\r
2021-06-09,92.77145632562596\r
2021-06-14,94.04924970613875\r
2021-06-22,94.56245321566023\r
2021-07-02,91.24795619473808\r
2021-07-09,91.24795619473808\r
2021-07-22,86.70093121141235\r
2021-08-11,74.97358488045226\r
2021-08-26,56.04882163471058\r
2021-08-28,56.56365964460004\r
2021-08-31,52.901774627761625\r
2021-09-05,53.03553328284715\r
2021-09-12,47.766111645076016\r
2021-09-17,47.25532655530942\r
2021-09-22,47.25532655530942\r
2021-09-25,44.08524835239577\r
2021-09-27,44.08524835239577\r
2021-09-30,40.08458356158446\r
2021-10-07,42.91692295692156\r
2021-10-12,44.30192463088223\r
2021-10-15,44.30192463088223\r
2021-10-17,44.30192463088223\r
2021-10-20,42.429005242644386\r
2021-10-27,39.49262336893506\r
2021-11-11,41.43020035653079\r
2021-11-19,40.29265648827373\r
2021-12-14,81.85038770338778\r
2021-12-16,85.34389632095626\r
2021-12-19,79.96751749141409\r
2021-12-21,79.96751749141409\r
2022-01-13,81.97120501853293\r
2022-01-15,86.78346907484801\r
2022-01-23,84.93447737957979\r
2022-01-25,87.9425138906195\r
2022-02-09,89.35873267960821\r
2022-03-09,92.60164738477344\r
2022-03-19,93.79309474593585\r
2022-03-26,92.47437776383482\r
2022-04-05,93.62249033299386\r
2022-04-10,92.98390406152178\r
2022-05-08,93.53723780797142\r
2022-05-10,97.92725609867465\r
2022-05-15,93.53723780797142\r
2022-06-17,92.77145632562596\r
2022-06-19,92.77145632562596\r
2022-06-22,92.77145632562596\r
2022-06-24,92.77145632562596\r
2022-07-02,89.73522836568473\r
2022-07-04,89.73522836568473\r
2022-07-07,89.73522836568473\r
2022-07-12,92.51679267591582\r
2022-07-14,89.27515866986737\r
2022-07-17,84.28115452384716\r
2022-07-24,84.77094497009178\r
2022-07-27,80.80649014406728\r
2022-08-01,60.93175034162462\r
2022-08-03,60.93175034162462\r
2022-08-06,57.98111268276054\r
2022-08-08,57.98111268276054\r
2022-08-11,55.331424294572095\r
2022-08-13,52.10225040416538\r
2022-08-18,45.61148239576502\r
2022-08-28,35.53923892846086\r
2022-09-05,35.59567045879883\r
2022-09-10,29.306683506063518\r
2022-09-12,29.306683506063518\r
2022-09-15,29.306683506063518\r
2022-09-20,27.841853844468005\r
2022-09-22,24.117429922583618\r
2022-10-02,23.051854428888703\r
2022-10-05,21.98389735344122\r
2022-10-07,21.231101560426445\r
2022-10-12,21.231101560426445\r
2022-10-15,21.16322085233949\r
2022-10-17,20.735464990883976\r
2022-10-22,19.409204168845395\r
2022-10-30,20.06766148548548\r
2022-11-01,20.06766148548548\r
2022-11-06,21.18583745346386\r
2022-11-11,19.583876360847242\r
2022-11-16,18.4178274505501\r
2022-12-14,41.039520921351865\r
2022-12-21,45.54875379796944\r
2022-12-24,44.30192463088223\r
2023-01-10,50.060903947968924\r
2023-01-18,66.90842856454748\r
2023-01-20,66.90842856454748\r
2023-02-04,79.01326830840947\r
2023-02-09,78.02445883048243\r
2023-02-12,78.37981836465411\r
2023-02-14,78.41934526459893\r
2023-02-17,78.53797695675732\r
2023-02-19,78.53797695675732\r
2023-02-24,78.37981836465411\r
2023-04-05,85.50789896484748\r
2023-04-08,85.50789896484748\r
2023-04-10,85.50789896484748\r
2023-04-20,82.61684711585005\r
2023-05-05,84.77094497009178\r
2023-05-10,84.77094497009178\r
2023-05-28,92.60164738477344\r
2023-05-30,90.36422080111544\r
2023-06-02,90.36422080111544\r
2023-06-04,90.36422080111544\r
2023-06-09,99.27846181609543\r
2023-06-24,97.71005962148956\r
2023-06-27,97.71005962148956\r
2023-07-14,95.63545025665482\r
2023-07-17,97.62323862814841\r
2023-07-22,94.99103237804724\r
2023-07-27,90.7425153602995\r
2023-07-29,89.81898574469434\r
2023-08-08,89.4005321910805\r
2023-08-11,87.4863927559413\r
2023-08-16,87.4863927559413\r
2023-08-18,87.4863927559413\r
2023-08-21,83.75191479209235\r
2023-08-23,77.82733452834398\r
2023-08-28,76.0627975376452\r
2023-08-31,74.70232920452419\r
2023-09-05,67.35237415555187\r
2023-09-07,67.35237415555187\r
2023-09-10,66.79763786479639\r
`;export{n as default};
