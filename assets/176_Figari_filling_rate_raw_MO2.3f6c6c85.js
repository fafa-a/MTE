const r=`date,value\r
2017-01-14,30.357129070362042\r
2017-02-23,87.86092246681446\r
2017-02-26,83.72290244987197\r
2017-03-05,86.57534829487318\r
2017-03-08,81.98009030911774\r
2017-03-15,85.38771581584788\r
2017-03-18,87.58486873728536\r
2017-03-25,87.30912760682568\r
2017-03-28,90.45244819608838\r
2017-04-04,91.6960063732905\r
2017-04-07,91.32229779750341\r
2017-04-14,91.72717352753551\r
2017-04-17,91.10455473589917\r
2017-04-24,90.35942772210286\r
2017-05-04,92.38256320795053\r
2017-05-07,95.3051116306432\r
2017-05-14,88.04513181635078\r
2017-05-17,90.35942772210286\r
2017-05-24,87.15607326540685\r
2017-05-27,91.88306643434173\r
2017-06-03,89.431118307945\r
2017-06-06,91.07346384856334\r
2017-06-13,86.72803524883588\r
2017-06-16,89.431118307945\r
2017-06-23,91.26006641743797\r
2017-06-26,91.13564944004622\r
2017-07-01,81.59127163213894\r
2017-07-03,79.47948644715855\r
2017-07-06,78.68165206382649\r
2017-07-08,77.27044393365537\r
2017-07-11,74.99689494281226\r
2017-07-13,69.95726286462873\r
2017-07-18,67.6525819520095\r
2017-07-21,64.85226465181964\r
2017-07-23,58.635975801697846\r
2017-07-26,58.132584311523225\r
2017-07-28,58.238431703291425\r
2017-07-31,57.525307270365204\r
2017-08-02,53.21089678379022\r
2017-08-05,51.504032324272664\r
2017-08-07,48.07667698571663\r
2017-08-12,46.74920715816073\r
2017-08-15,43.10879313993766\r
2017-08-17,40.80344043522317\r
2017-08-20,39.50667022431524\r
2017-08-22,37.27382015840607\r
2017-08-25,34.95580698457055\r
2017-08-27,34.53813051596934\r
2017-08-30,32.47700644826899\r
2017-09-01,31.00878049066923\r
2017-09-04,32.0916382021992\r
2017-09-09,31.601635831592034\r
2017-09-11,30.37807230920419\r
2017-09-19,26.453442983699027\r
2017-09-21,26.493312066869695\r
2017-09-24,23.12549535939345\r
2017-10-04,22.31419997775552\r
2017-10-14,13.964231510157827\r
2017-10-16,14.36218464962787\r
2017-10-19,14.36218464962787\r
2017-10-21,14.346189394470448\r
2017-10-24,13.056586769946973\r
2017-10-26,11.558740769852236\r
2017-10-31,10.899837861037936\r
2017-11-03,10.015040609845641\r
2017-11-05,10.525516284673756\r
2017-11-08,9.239287300291714\r
2017-11-18,10.26913750893026\r
2017-11-20,5.0396447767216745\r
2017-11-23,5.0396447767216745\r
2017-11-28,5.0396447767216745\r
2017-12-05,5.690613792654984\r
2017-12-13,5.840389982508956\r
2017-12-23,8.092445129486187\r
2017-12-25,7.988561079383192\r
2017-12-28,7.988561079383192\r
2017-12-30,7.988561079383192\r
2018-01-17,27.780474078404595\r
2018-01-19,27.780474078404595\r
2018-01-22,31.453043562190913\r
2018-01-24,31.453043562190913\r
2018-01-27,31.453043562190913\r
2018-02-08,59.19416979821147\r
2018-02-11,63.15444236952803\r
2018-02-13,63.15444236952803\r
2018-02-16,63.15444236952803\r
2018-02-18,63.15444236952803\r
2018-03-18,95.7162431220042\r
2018-03-23,95.77955060416514\r
2018-04-02,91.75834449130346\r
2018-04-07,89.46200637821975\r
2018-04-12,89.46200637821975\r
2018-04-17,90.76276498031298\r
2018-04-19,94.83152064520067\r
2018-04-22,92.883033273474\r
2018-04-24,93.85545822415388\r
2018-04-27,93.76119344069055\r
2018-04-29,95.14715368945983\r
2018-05-07,96.0646205310806\r
2018-05-09,95.17873773792344\r
2018-05-19,96.98524991566282\r
2018-05-22,96.98524991566282\r
2018-05-29,95.02085520500594\r
2018-06-03,96.47692588113769\r
2018-06-08,97.62200493683585\r
2018-06-13,98.13248721864973\r
2018-06-16,100.0\r
2018-06-18,95.62131013176584\r
2018-06-21,100.0\r
2018-06-26,100.0\r
2018-06-28,98.51597699746775\r
2018-07-01,98.57994425180162\r
2018-07-03,97.65388201764752\r
2018-07-06,99.22043766659905\r
2018-07-08,96.60391680283645\r
2018-07-11,98.06862457215473\r
2018-07-13,97.94094414657212\r
2018-07-18,96.92165687677755\r
2018-07-21,93.9183203391228\r
2018-07-23,88.81416310911166\r
2018-07-26,88.59859191169707\r
2018-07-28,90.29743320025479\r
2018-07-31,93.32174182494015\r
2018-08-02,94.29581081649057\r
2018-08-05,94.29581081649057\r
2018-08-07,92.97697964570163\r
2018-08-10,91.54022775762957\r
2018-08-12,86.91138729638959\r
2018-08-15,90.29743320025479\r
2018-08-17,90.29743320025479\r
2018-08-20,77.85733074766914\r
2018-08-22,77.85733074766914\r
2018-09-01,71.97511502066519\r
2018-09-06,71.68966299877961\r
2018-09-09,72.20377026138074\r
2018-09-11,70.66541918576694\r
2018-09-14,65.40339806199556\r
2018-09-16,66.15008526236387\r
2018-09-19,66.15008526236387\r
2018-09-21,65.07251669653274\r
2018-09-24,60.07516808832647\r
2018-09-26,57.1304942101668\r
2018-09-29,52.7759182014068\r
2018-10-01,52.7759182014068\r
2018-10-06,54.62695378451957\r
2018-10-09,52.597182901002036\r
2018-10-14,51.1751731783329\r
2018-10-19,55.95193634230181\r
2018-10-21,50.998409206944096\r
2018-10-24,51.70678353365232\r
2018-10-26,50.06774673991472\r
2018-11-18,52.85258578804712\r
2018-11-28,53.287790950177985\r
2018-12-03,49.19307878743551\r
2018-12-05,51.55469326300049\r
2018-12-08,50.39403355375192\r
2018-12-10,52.21491369901046\r
2018-12-15,52.21491369901046\r
2018-12-18,57.68350617624491\r
2018-12-25,62.61022067440525\r
2018-12-28,62.61022067440525\r
2019-01-02,60.88013014560742\r
2019-01-04,60.88013014560742\r
2019-01-07,61.445893143606945\r
2019-01-09,61.445893143606945\r
2019-01-12,56.527016176566356\r
2019-01-14,56.527016176566356\r
2019-01-17,56.527016176566356\r
2019-01-22,57.104208125570565\r
2019-01-24,51.80826654348356\r
2019-01-29,76.18892110025595\r
2019-02-03,76.18892110025595\r
2019-02-06,85.14482887557085\r
2019-02-08,85.14482887557085\r
2019-02-11,84.9325070194279\r
2019-02-13,77.5930340291626\r
2019-02-16,76.24724152727056\r
2019-02-18,82.87989855370084\r
2019-02-21,81.89030391678183\r
2019-02-23,83.60228551599151\r
2019-02-26,87.03369935217685\r
2019-02-28,86.85025447266625\r
2019-03-03,86.85025447266625\r
2019-03-08,87.98371328151403\r
2019-03-10,93.13363282961332\r
2019-03-18,85.66126095866501\r
2019-03-20,93.32174182494015\r
2019-03-23,87.0642870323022\r
2019-03-25,87.0642870323022\r
2019-03-28,89.02992267143486\r
2019-03-30,85.63085151525125\r
2019-04-02,85.63085151525125\r
2019-04-07,85.02347875225234\r
2019-04-09,87.73819334556204\r
2019-04-12,87.73819334556204\r
2019-04-14,77.32906071862206\r
2019-04-17,88.50626195022457\r
2019-04-19,85.50925258307201\r
2019-04-27,88.38320920769654\r
2019-04-29,85.6916742854522\r
2019-05-02,91.75834449130346\r
2019-05-07,95.11557341158495\r
2019-05-09,94.32729293544278\r
2019-05-14,94.64232195323724\r
2019-05-19,95.55804029768605\r
2019-05-24,86.54482251801798\r
2019-05-29,100.0\r
2019-06-01,100.0\r
2019-06-03,99.7660291580358\r
2019-06-06,100.0\r
2019-06-11,99.63755788839057\r
2019-06-13,96.41345295448816\r
2019-06-16,99.5412435171048\r
2019-06-18,100.0\r
2019-06-21,99.66967012348245\r
2019-06-23,100.0\r
2019-06-26,99.15632120359376\r
2019-06-28,99.15632120359376\r
2019-07-01,97.04885795613282\r
2019-07-03,94.51626501167088\r
2019-07-06,94.83152064520067\r
2019-07-08,91.6960063732905\r
2019-07-11,92.32007285402757\r
2019-07-13,87.67685192754158\r
2019-07-16,92.47632725232685\r
2019-07-18,90.35942772210286\r
2019-07-21,89.49289828484322\r
2019-07-23,80.22079998450256\r
2019-07-26,77.18254873747499\r
2019-07-28,72.66186275172547\r
2019-07-31,72.63320144984019\r
2019-08-02,72.66186275172547\r
2019-08-05,67.5687917903815\r
2019-08-07,66.371910924529\r
2019-08-10,65.23788192632709\r
2019-08-12,64.19312188702258\r
2019-08-15,62.63739150895231\r
2019-08-17,60.90702854003387\r
2019-08-20,60.4771674003041\r
2019-08-22,58.71560130006933\r
2019-08-25,59.03449172899353\r
2019-08-27,57.49895598146815\r
2019-08-30,52.087713636624656\r
2019-09-04,47.70659513645541\r
2019-09-06,48.96906147635774\r
2019-09-09,40.687045692322975\r
2019-09-11,39.43762621504281\r
2019-09-14,34.801716109472444\r
2019-09-16,36.734150776639794\r
2019-09-19,36.734150776639794\r
2019-09-24,34.187805764847226\r
2019-09-26,32.86402650398341\r
2019-09-29,32.67031034396698\r
2019-10-01,34.31902698710368\r
2019-10-04,32.30552741706054\r
2019-10-06,31.814347099496754\r
2019-10-09,31.49547278987064\r
2019-10-11,31.49547278987064\r
2019-10-14,30.882266133798225\r
2019-10-16,30.73490133321072\r
2019-10-19,27.134147740114024\r
2019-10-26,24.97402695438806\r
2019-10-29,24.97402695438806\r
2019-11-20,39.78328033485115\r
2019-11-28,39.78328033485115\r
2019-11-30,39.94495658132369\r
2019-12-08,43.967051579835655\r
2019-12-10,37.07111244369518\r
2019-12-13,37.07111244369518\r
2019-12-15,37.07111244369518\r
2019-12-23,41.69194041496836\r
2019-12-25,41.90338143293072\r
2019-12-28,44.30245954103898\r
2019-12-30,45.92027189941542\r
2020-01-09,55.84760376721098\r
2020-01-12,84.53870115287242\r
2020-01-14,84.53870115287242\r
2020-01-17,84.53870115287242\r
2020-01-22,84.53870115287242\r
2020-01-27,93.47860358075\r
2020-02-01,90.26644167867858\r
2020-02-06,90.39043072163787\r
2020-02-08,90.39043072163787\r
2020-02-11,76.15976690633946\r
2020-02-13,77.35837510608324\r
2020-02-16,75.08388696601429\r
2020-02-18,75.08388696601429\r
2020-02-21,76.01405614991175\r
2020-02-26,75.05488559467209\r
2020-02-28,69.33621017672685\r
2020-03-04,66.62178390987415\r
2020-03-07,66.62178390987415\r
2020-03-14,67.76436025535317\r
2020-03-19,85.17517613229614\r
2020-03-22,89.06076083529983\r
2020-03-24,85.99602105382291\r
2020-03-29,90.35942772210286\r
2020-04-01,89.36935367792891\r
2020-04-03,89.36935367792891\r
2020-04-06,92.63267667155577\r
2020-04-08,95.43154582470764\r
2020-04-11,94.83152064520067\r
2020-04-23,96.445187539674\r
2020-04-26,100.0\r
2020-04-28,99.99099711629799\r
2020-05-03,99.99099711629799\r
2020-05-06,99.4449626538771\r
2020-05-11,99.4449626538771\r
2020-05-21,94.2643324776496\r
2020-05-23,100.0\r
2020-05-26,98.00477688055106\r
2020-05-28,99.02813300630332\r
2020-05-31,99.02813300630332\r
2020-06-05,99.02813300630332\r
2020-06-10,99.86242167944292\r
2020-06-12,96.22312434464398\r
2020-06-15,100.0\r
2020-06-17,89.15329837254976\r
2020-06-20,99.22043766659905\r
2020-06-22,89.77109801885923\r
2020-06-25,93.35310659524676\r
2020-06-27,90.73171610205625\r
2020-06-30,93.94975707333839\r
2020-07-02,91.9454502535601\r
2020-07-05,94.83152064520067\r
2020-07-07,92.13269306720888\r
2020-07-10,95.55804029768605\r
2020-07-12,93.38447515633838\r
2020-07-15,97.97285864368759\r
2020-07-17,92.66395795394877\r
2020-07-20,91.44680632577862\r
2020-07-22,87.64618700550749\r
2020-07-25,88.41396662011955\r
2020-07-27,85.32697075184845\r
2020-07-30,82.72968525181835\r
2020-08-01,82.72968525181835\r
2020-08-04,78.88821994850841\r
2020-08-06,78.85869832480257\r
2020-08-09,70.97781997058968\r
2020-08-11,66.87199443921078\r
2020-08-14,61.87821273616776\r
2020-08-16,60.262647758783686\r
2020-08-19,58.29138136631921\r
2020-08-21,58.02680619494145\r
2020-08-24,56.89407614789982\r
2020-08-26,54.704577462114756\r
2020-09-03,47.82984144702432\r
2020-09-05,42.94261715575877\r
2020-09-08,41.50431603356137\r
2020-09-10,41.621545603437944\r
2020-09-13,35.66333410490794\r
2020-09-15,32.134375153549676\r
2020-09-18,32.2627086977096\r
2020-09-20,31.283532497615056\r
2020-09-25,29.378675073200576\r
2020-09-28,29.378675073200576\r
2020-09-30,30.064469729213222\r
2020-10-03,36.085836197996684\r
2020-10-08,35.952221169680485\r
2020-10-10,35.952221169680485\r
2020-10-15,39.829449480065776\r
2020-10-18,22.389229109473646\r
2020-10-20,22.389229109473646\r
2020-10-28,33.512715754902565\r
2020-10-30,33.512715754902565\r
2020-11-02,35.485974473101024\r
2020-11-07,31.24120623204263\r
2020-11-09,31.24120623204263\r
2020-11-17,31.580392944558632\r
2020-11-19,34.25339377454808\r
2020-11-22,42.32741627699563\r
2020-11-24,42.32741627699563\r
2020-12-02,42.32741627699563\r
2020-12-07,43.39420290674214\r
2020-12-27,62.36587404672651\r
2021-01-13,84.62952099442657\r
2021-01-16,84.62952099442657\r
2021-01-18,84.81126587522239\r
2021-01-23,87.52356590605119\r
2021-01-26,88.93743123072169\r
2021-01-31,90.73171610205625\r
2021-02-02,86.72803524883588\r
2021-02-10,87.24789427960525\r
2021-02-15,88.50626195022457\r
2021-02-17,88.50626195022457\r
2021-02-20,88.50626195022457\r
2021-02-25,91.16674796063894\r
2021-02-27,90.8248741989776\r
2021-03-02,90.8248741989776\r
2021-03-04,92.66395795394877\r
2021-03-14,94.92617094637814\r
2021-03-17,93.16497484769852\r
2021-03-19,93.16497484769852\r
2021-03-22,96.25483638487336\r
2021-03-24,92.85172540790433\r
2021-03-29,93.0709601736706\r
2021-04-01,93.0709601736706\r
2021-04-03,94.01264189345481\r
2021-04-23,87.76886984079125\r
2021-04-28,87.67685192754158\r
2021-05-03,90.17349007576526\r
2021-05-06,94.42176196942663\r
2021-05-08,90.20447011606501\r
2021-05-13,91.07346384856334\r
2021-05-18,94.73690431098149\r
2021-05-21,96.31827174006777\r
2021-05-23,96.31827174006777\r
2021-05-26,95.17873773792344\r
2021-05-28,95.17873773792344\r
2021-05-31,99.0922196492599\r
2021-06-05,98.32416486017212\r
2021-06-07,97.46267569236583\r
2021-06-10,99.25250148800832\r
2021-06-12,95.39993162416762\r
2021-06-15,96.15971154065859\r
2021-06-17,93.13363282961332\r
2021-06-22,89.61650426739257\r
2021-06-25,91.91425644027828\r
2021-06-27,88.38320920769654\r
2021-06-30,88.41396662011955\r
2021-07-02,88.41396662011955\r
2021-07-05,89.67833026710157\r
2021-07-07,94.04408997864515\r
2021-07-10,88.72175238049955\r
2021-07-12,86.05693696934632\r
2021-07-15,86.422758136494\r
2021-07-17,82.81980147161633\r
2021-07-20,77.8279484844486\r
2021-07-22,72.71919755587652\r
2021-07-27,73.84047261802398\r
2021-07-30,70.46687687614457\r
2021-08-01,66.62178390987415\r
2021-08-04,68.35228431976017\r
2021-08-06,60.18227360071807\r
2021-08-11,56.92032740522023\r
2021-08-14,55.14519321638757\r
2021-08-16,56.00412889056583\r
2021-08-19,54.575226694833475\r
2021-08-21,51.757516092246355\r
2021-08-24,51.83364847730553\r
2021-08-26,50.34378597285977\r
2021-08-29,46.67585139434933\r
2021-08-31,43.53716166655178\r
2021-09-03,40.594016035988325\r
2021-09-05,40.594016035988325\r
2021-09-08,41.27021391803646\r
2021-09-18,29.710470725574332\r
2021-09-23,30.608790562722277\r
2021-09-30,29.42007620553696\r
2021-10-03,29.42007620553696\r
2021-10-08,25.897548112884827\r
2021-10-10,25.11080731819874\r
2021-10-13,21.107740714644567\r
2021-10-15,20.814479701624077\r
2021-10-18,20.814479701624077\r
2021-10-20,19.6741945765627\r
2021-10-23,18.487076843301328\r
2021-11-04,13.695927930380725\r
2021-11-19,18.90925619773753\r
2021-11-22,18.90925619773753\r
2021-11-24,21.847324661031294\r
2021-11-27,21.847324661031294\r
2021-12-07,26.593079219820225\r
2021-12-09,26.813041279841578\r
2021-12-12,29.523670745842473\r
2021-12-14,29.56514522404532\r
2021-12-17,29.668923002567016\r
2021-12-19,31.15661555636996\r
2021-12-24,31.13548077972877\r
2021-12-29,32.41266354932086\r
2022-01-13,47.411270967294634\r
2022-01-16,49.44241794446273\r
2022-01-18,49.44241794446273\r
2022-01-21,51.4533893028571\r
2022-01-23,50.193151443870676\r
2022-01-26,54.808137354728444\r
2022-01-28,58.3443483348895\r
2022-01-31,58.3443483348895\r
2022-02-02,54.239430514776224\r
2022-02-05,58.07968659162196\r
2022-02-07,58.07968659162196\r
2022-02-10,56.39613053248195\r
2022-02-12,55.66519036276273\r
2022-02-15,58.68905514895748\r
2022-02-17,58.3443483348895\r
2022-02-20,57.07792639241447\r
2022-02-22,57.65712884085137\r
2022-02-25,58.71560130006933\r
2022-02-27,57.47260903560685\r
2022-03-02,58.68905514895748\r
2022-03-07,58.21196336273522\r
2022-03-09,58.9281258962469\r
2022-03-14,60.77257931269462\r
2022-03-22,71.00624461391585\r
2022-03-24,73.40848278412854\r
2022-03-29,72.89129953898397\r
2022-04-03,77.5636876849098\r
2022-04-11,88.56781141056882\r
2022-04-13,88.56781141056882\r
2022-04-16,90.57652903620712\r
2022-04-18,88.53703475661955\r
2022-04-23,90.29743320025479\r
2022-04-26,89.86390026435296\r
2022-04-28,90.98021409107969\r
2022-05-01,93.76119344069055\r
2022-05-08,91.0112935257878\r
2022-05-11,99.4449626538771\r
2022-05-13,100.0\r
2022-05-16,97.71764740844411\r
2022-05-18,98.2602573653878\r
2022-05-21,97.97285864368759\r
2022-05-23,96.12801077759802\r
2022-05-26,98.70792355699737\r
2022-05-28,98.22830922283791\r
2022-05-31,100.0\r
2022-06-02,99.02813300630332\r
2022-06-07,94.98929001299986\r
2022-06-10,93.6041611959535\r
2022-06-12,95.02085520500594\r
2022-06-15,94.8630669719564\r
2022-06-17,91.10455473589917\r
2022-06-20,91.82069784595534\r
2022-06-25,91.22895644970004\r
2022-06-27,92.6952430350174\r
2022-07-02,89.06076083529983\r
2022-07-05,89.92578758626337\r
2022-07-07,90.29743320025479\r
2022-07-10,87.15607326540685\r
2022-07-12,83.96432389543295\r
2022-07-15,83.00013974883413\r
2022-07-17,79.47948644715855\r
2022-07-20,78.09253241771117\r
2022-07-22,73.60996458318556\r
2022-07-25,71.06310618011261\r
2022-07-27,71.17687841781569\r
2022-07-30,68.49253533161266\r
2022-08-01,63.42718800174127\r
2022-08-04,62.040613494768635\r
2022-08-06,57.89468102140457\r
2022-08-09,56.16081152328627\r
2022-08-11,56.527016176566356\r
2022-08-14,56.21307404826265\r
2022-08-16,53.62146021741832\r
2022-08-19,52.34222531464729\r
2022-08-21,50.39403355375192\r
2022-08-24,47.90384411868508\r
2022-08-26,46.11483538944151\r
2022-08-29,44.95190240928977\r
2022-09-05,42.895180716224964\r
2022-09-10,34.56006844347821\r
2022-09-13,35.952221169680485\r
2022-09-18,32.8855759404555\r
2022-09-20,32.84248214875334\r
2022-09-23,30.482866403101106\r
2022-10-05,23.315658605536317\r
2022-10-08,25.542434615209007\r
2022-10-10,24.740172215573146\r
2022-10-13,23.83189049335664\r
2022-10-15,23.12549535939345\r
2022-10-18,23.030623953187643\r
2022-10-20,22.426777635160878\r
2022-10-23,20.924279610644017\r
2022-10-25,20.777925925580913\r
2022-10-28,20.268605440510477\r
2022-10-30,18.96226938012224\r
2022-11-02,17.946855820237694\r
2022-11-04,16.883823251095883\r
2022-11-14,15.333559204976224\r
2022-11-27,24.623541861935344\r
2022-12-02,24.954508845611574\r
2022-12-04,24.954508845611574\r
2022-12-07,24.623541861935344\r
2022-12-29,66.70514993231659\r
2023-01-21,69.36439661407431\r
2023-01-26,86.88081895052895\r
2023-01-31,86.88081895052895\r
2023-02-02,85.35734134022378\r
2023-02-05,85.35734134022378\r
2023-02-10,86.02647707221473\r
2023-02-12,86.422758136494\r
2023-02-15,83.6927423528179\r
2023-02-17,84.26645215044107\r
2023-02-20,84.26645215044107\r
2023-02-22,83.21071266485974\r
2023-03-12,84.87187866037347\r
2023-03-14,86.45326842222357\r
2023-03-17,86.45326842222357\r
2023-03-22,86.422758136494\r
2023-03-24,87.46227851483849\r
2023-03-27,87.12547398929823\r
2023-04-01,87.12547398929823\r
2023-04-03,87.24789427960525\r
2023-04-06,88.56781141056882\r
2023-04-08,87.15607326540685\r
2023-04-16,87.15607326540685\r
2023-04-26,91.22895644970004\r
2023-04-28,91.22895644970004\r
`;export{r as default};