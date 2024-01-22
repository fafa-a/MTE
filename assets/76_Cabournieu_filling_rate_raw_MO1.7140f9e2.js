const r=`date,value\r
2017-01-26,69.57263289133536\r
2017-01-29,77.8577380678638\r
2017-02-15,75.675509080528\r
2017-02-18,77.6749190306753\r
2017-02-25,79.63402141504987\r
2017-03-10,83.3608416884207\r
2017-03-30,80.68288483752441\r
2017-04-06,93.63628460701091\r
2017-04-09,91.086798565575\r
2017-04-19,86.71052522997233\r
2017-05-06,89.3386346239755\r
2017-05-09,87.47641076614018\r
2017-05-16,93.04539271796926\r
2017-05-26,89.72591990639599\r
2017-06-18,87.02931003894967\r
2017-07-05,87.92444635820434\r
2017-08-12,67.66183591331647\r
2017-08-14,77.06679013420008\r
2017-08-22,63.6247144894606\r
2017-08-24,71.79977998911026\r
2017-09-21,69.98074287141125\r
2017-09-23,64.80822568839918\r
2017-10-08,63.79324210116959\r
2017-10-11,60.01813526527623\r
2017-10-13,60.5673946602992\r
2017-10-16,58.32843895936184\r
2017-10-23,60.95309085572996\r
2017-10-26,58.00367900497873\r
2017-10-31,64.07452574872593\r
2017-11-17,61.33978599417769\r
2017-11-20,57.41020987935281\r
2017-11-22,59.36172296939128\r
2017-11-27,60.6224329129452\r
2017-11-30,58.22010339615821\r
2017-12-05,60.292509620359105\r
2017-12-25,60.78767009894598\r
2018-01-09,72.6867898974\r
2018-02-25,95.88230171677775\r
2018-03-02,97.6813573268432\r
2018-03-22,100.0\r
2018-03-30,89.98448993178934\r
2018-04-19,88.8876665722277\r
2018-04-21,99.89870798260561\r
2018-04-24,90.95683089382392\r
2018-05-11,100.0\r
2018-05-21,99.69629151710431\r
2018-06-20,96.88009161704281\r
2018-06-23,96.68019633629866\r
2018-06-25,90.37291432452582\r
2018-07-08,89.98448993178934\r
2018-07-10,96.2144297385824\r
2018-07-13,89.59674882474849\r
2018-07-15,90.95683089382392\r
2018-07-23,87.60432557930172\r
2018-07-25,89.53219177547041\r
2018-08-02,88.501864389011\r
2018-08-04,85.4401666454373\r
2018-08-12,85.25027342182229\r
2018-08-19,85.31355199717147\r
2018-08-22,80.559198420931\r
2018-08-27,76.70284994341196\r
2018-09-01,81.36454407293414\r
2018-09-03,74.95373566018313\r
2018-09-08,83.42354404157153\r
2018-09-11,83.29815858360983\r
2018-09-16,72.0358811534559\r
2018-09-23,77.79677889396976\r
2018-09-26,76.33961335918318\r
2018-10-03,76.0978468316085\r
2018-10-06,77.00608460012333\r
2018-11-12,79.26517296023488\r
2018-11-15,76.88473212622178\r
2018-11-17,75.79607908708685\r
2018-11-27,76.76345779683665\r
2018-12-07,78.83573373905402\r
2019-01-11,80.74475709321717\r
2019-01-16,80.99243970175893\r
2019-02-03,99.96621738000721\r
2019-02-13,74.59390852608306\r
2019-02-15,92.97983235115794\r
2019-02-20,87.86038407023852\r
2019-02-23,88.56611717238991\r
2019-02-25,89.53219177547041\r
2019-02-28,91.86819467749082\r
2019-03-20,85.94739149065114\r
2019-03-22,84.93416813735783\r
2019-03-25,90.95683089382392\r
2019-03-27,89.72591990639599\r
2019-03-30,85.06055272223388\r
2019-04-09,87.86038407023852\r
2019-05-01,83.48626564040661\r
2019-05-06,90.63224325616844\r
2019-05-14,91.54228182713092\r
2019-06-08,94.42651425952167\r
2019-06-13,91.47715600858318\r
2019-06-28,100.0\r
2019-07-05,89.66132486922744\r
2019-07-15,97.94904438340558\r
2019-07-23,84.36638733741836\r
2019-07-25,87.47641076614018\r
2019-08-04,87.47641076614018\r
2019-08-09,88.63038899134213\r
2019-08-14,87.98852770716125\r
2019-08-17,85.4401666454373\r
2019-08-22,81.55085730612738\r
2019-08-24,86.77424398270111\r
2019-09-11,81.24043191704445\r
2019-09-13,82.92246431879904\r
2019-09-16,82.4226176828485\r
2019-10-08,82.48503103117989\r
2019-10-11,76.58169287326174\r
2019-10-13,79.75712621398205\r
2019-10-26,82.29784885395361\r
2019-12-05,99.02278103974847\r
2019-12-10,95.48436720747206\r
2019-12-15,75.73578428871635\r
2019-12-25,83.54900648227178\r
2019-12-27,89.91981894894731\r
2019-12-30,83.2354947297962\r
2020-01-09,95.68325000848286\r
2020-01-11,95.41811048656676\r
2020-01-14,93.11097194878329\r
2020-01-16,92.65231356259443\r
2020-01-19,87.73231668748045\r
2020-02-05,91.2818921004576\r
2020-02-15,82.29784885395361\r
2020-02-20,85.37684973924597\r
2020-03-11,98.2840736450593\r
2020-03-21,94.36055825904697\r
2020-03-24,85.31355199717147\r
2020-03-26,67.02973799791573\r
2020-04-03,97.1468807929891\r
2020-04-05,84.80786028211416\r
2020-04-08,88.8876665722277\r
2020-04-10,87.66831159779186\r
2020-05-05,95.2856533782519\r
2020-05-18,86.32861410719653\r
2020-05-20,93.63628460701091\r
2020-05-25,97.815163471654\r
2020-05-28,88.56611717238991\r
2020-05-30,94.03106053712962\r
2020-06-24,90.11388883543296\r
2020-07-07,99.76374504884421\r
2020-07-09,96.81344112892894\r
2020-07-19,89.59674882474849\r
2020-07-22,92.91429085078948\r
2020-07-24,79.2037661965856\r
2020-07-27,87.34857226845676\r
2020-08-06,77.18825978248532\r
2020-08-08,86.39221816313926\r
2020-08-18,80.68288483752441\r
2020-08-21,80.99243970175893\r
2020-08-23,74.65383061979158\r
2020-08-31,76.27914237769366\r
2020-09-02,71.85877561316762\r
2020-09-05,74.83371474121884\r
2020-09-10,78.83573373905402\r
2020-09-12,70.7998836174435\r
2020-09-30,67.43170191161228\r
2020-10-17,69.80571927511076\r
2020-10-30,67.02973799791573\r
2020-11-09,71.50509867332481\r
2020-11-11,72.4498192630296\r
2020-11-14,69.3398648709884\r
2020-11-21,74.05549404994088\r
2020-11-26,71.38736471154824\r
2020-11-29,70.6826253098816\r
2020-12-26,87.98852770716125\r
2021-01-03,100.0\r
2021-02-02,100.0\r
2021-02-14,100.0\r
2021-02-17,98.15000589800566\r
2021-02-19,85.06055272223388\r
2021-02-24,99.96621738000721\r
2021-02-27,98.15000589800566\r
2021-03-01,92.52143818069678\r
2021-03-04,91.3469611427733\r
2021-03-24,85.31355199717147\r
2021-03-29,95.35187254269573\r
2021-03-31,97.815163471654\r
2021-04-05,95.74958181362099\r
2021-04-15,99.02278103974847\r
2021-04-23,96.74680936789217\r
2021-05-03,89.08082450739225\r
2021-05-20,89.1452485198299\r
2021-05-30,100.0\r
2021-06-09,90.7620214630824\r
2021-06-14,94.09692243606652\r
2021-07-02,89.40313467256912\r
2021-07-22,90.82693899309976\r
2021-08-11,91.15181080938112\r
2021-08-26,91.2818921004576\r
2021-08-28,87.41248197658399\r
2021-09-05,85.820470383153\r
2021-09-12,91.21684198850132\r
2021-09-25,89.91981894894731\r
2021-10-07,90.89187547084191\r
2021-10-12,84.99735083990075\r
2021-10-15,88.11674757785701\r
2021-10-17,76.0374541252026\r
2021-10-27,76.33961335918318\r
2021-11-19,78.0407325249167\r
2021-12-14,99.83121720478148\r
2021-12-16,90.95683089382392\r
2021-12-19,93.63628460701091\r
2022-01-13,84.99735083990075\r
2022-01-15,85.18701401580842\r
2022-01-23,97.6813573268432\r
2022-01-25,83.29815858360983\r
2022-02-09,83.48626564040661\r
2022-03-21,98.08300004333374\r
2022-03-24,97.34716919350178\r
2022-04-05,92.06396930501258\r
2022-05-08,93.50484334124208\r
2022-05-10,96.81344112892894\r
2022-05-15,77.18825978248532\r
2022-06-17,95.55064270301992\r
2022-06-22,99.09004820216751\r
2022-07-02,93.04539271796926\r
2022-07-12,92.78326445914848\r
2022-07-14,91.99869219181183\r
2022-07-17,87.22081010673566\r
2022-08-01,75.73578428871635\r
2022-08-28,63.176197741513484\r
2022-09-05,52.13002683820196\r
2022-09-10,50.33133679434116\r
2022-09-20,50.02558251786975\r
2022-09-22,49.46701015106621\r
2022-10-02,43.92658023574533\r
2022-10-05,46.71270246742038\r
2022-10-07,49.112889197414866\r
2022-11-11,47.01003790334137\r
2022-11-16,47.45748405370526\r
2022-12-04,54.53307994273038\r
2022-12-21,56.284152943922116\r
2023-01-10,59.90852861074062\r
2023-01-18,66.11465136200191\r
2023-02-02,79.51099425842212\r
2023-02-04,73.69743613049411\r
2023-02-09,68.99131020046252\r
2023-02-12,77.18825978248532\r
2023-02-14,69.98074287141125\r
2023-02-17,77.49227548904527\r
2023-02-24,76.40010390232706\r
2023-03-09,76.52114366220685\r
2023-03-16,78.28499787909388\r
2023-04-05,77.8577380678638\r
2023-04-08,75.73578428871635\r
2023-04-10,79.51099425842212\r
2023-04-18,76.88473212622178\r
2023-05-05,80.00356865076269\r
2023-05-28,76.88473212622178\r
2023-06-24,84.11453955823897\r
2023-07-07,88.75898972583244\r
2023-07-14,84.744735134653\r
2023-07-17,85.4401666454373\r
2023-07-22,85.63023232265003\r
2023-07-27,81.24043191704445\r
2023-07-29,84.49242647374425\r
2023-08-08,76.40010390232706\r
2023-08-11,70.38982679384301\r
2023-08-18,67.14448470683992\r
2023-08-21,66.97239469308802\r
2023-08-23,67.489205401608\r
2023-08-31,62.89653288990963\r
2023-09-05,70.38982679384301\r
2023-09-07,63.73704600932811\r
2023-09-10,61.83843142855239\r
2023-09-20,59.74427202267727\r
2023-09-25,59.4709203217057\r
2023-09-30,59.68956074539336\r
2023-10-02,58.32843895936184\r
2023-10-05,56.17738470253213\r
2023-10-07,57.248787313838974\r
2023-10-10,58.22010339615821\r
2023-10-12,60.23759388089166\r
2023-11-19,69.2817226331276\r
2023-11-26,58.38263757058838\r
2023-12-06,71.03463821604883\r
`;export{r as default};
