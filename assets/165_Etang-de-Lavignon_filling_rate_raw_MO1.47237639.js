const n=`date,value\r
2017-01-19,69.87725233463557\r
2017-01-26,81.58569275349352\r
2017-02-15,88.73626732313087\r
2017-02-18,78.58670093489077\r
2017-02-25,94.2052340839868\r
2017-03-27,100.0\r
2017-04-09,93.12586418529797\r
2017-04-19,87.88654662214172\r
2017-05-16,100.0\r
2017-05-26,84.51015025603994\r
2017-06-15,93.34146614961976\r
2017-06-18,86.29936212291793\r
2017-08-02,79.72063482897178\r
2017-08-14,74.09578990729202\r
2017-08-22,77.04760926150166\r
2017-08-24,75.21173428699358\r
2017-08-27,74.3996861330522\r
2017-08-29,69.87725233463557\r
2017-09-18,60.68680008591056\r
2017-09-21,57.16826635453292\r
2017-10-13,61.9365680575244\r
2017-10-16,62.805854591699436\r
2017-10-28,65.53131201282642\r
2017-10-31,62.99947823308807\r
2017-11-07,72.07853883644144\r
2018-02-08,88.62993013945855\r
2018-02-10,87.67446586457149\r
2018-02-25,100.0\r
2018-03-20,98.55643538533391\r
2018-04-19,92.58745586934045\r
2018-04-21,96.59175451950928\r
2018-04-24,84.93021912711242\r
2018-05-04,98.6659007085885\r
2018-05-06,100.0\r
2018-05-16,92.26482069143125\r
2018-05-19,88.41736033080272\r
2018-05-21,88.20493006035325\r
2018-06-20,93.0181143040214\r
2018-06-23,94.85448414765563\r
2018-06-25,92.15734404218745\r
2018-06-28,96.59175451950928\r
2018-07-03,92.26482069143125\r
2018-07-15,94.31335779167023\r
2018-07-25,97.24544656963145\r
2018-07-28,92.80271683271773\r
2018-08-04,94.962810859453\r
2018-08-07,86.29936212291793\r
2018-08-12,82.31416560408078\r
2018-08-19,80.85899274713091\r
2018-08-22,77.86742323167472\r
2018-09-01,69.18077000247355\r
2018-09-08,72.98441883926469\r
2018-09-11,71.3761078269747\r
2018-09-16,70.47575126639393\r
2018-09-26,65.53131201282642\r
2018-09-28,69.77763821539996\r
2018-10-06,68.68445183902338\r
2018-10-08,69.0814282865974\r
2018-10-18,72.68211547658949\r
2018-10-21,70.9755638692224\r
2018-10-23,71.07564210963307\r
2018-12-10,81.27403239205184\r
2019-02-13,88.41736033080272\r
2019-02-15,85.24564388454351\r
2019-02-20,92.58745586934045\r
2019-02-23,86.40492825735001\r
2019-02-25,86.29936212291793\r
2019-03-22,83.46247339164884\r
2019-03-30,78.895515249175\r
2019-04-11,96.4829230407836\r
2019-04-19,90.44238601704369\r
2019-05-06,89.37502114406203\r
2019-05-14,89.69486695461313\r
2019-06-30,82.62690919132952\r
2019-07-05,81.58569275349352\r
2019-07-23,65.62923278998473\r
2019-07-25,56.79134227384763\r
2019-08-22,32.15839807711298\r
2019-09-03,19.735461379739185\r
2019-09-06,20.230863376553234\r
2019-09-13,18.82441192788219\r
2019-09-16,15.367725806956825\r
2019-09-18,17.51434387449529\r
2019-09-21,16.700401896750858\r
2019-10-11,23.198355657015366\r
2019-11-22,42.55842888777542\r
2019-12-02,44.04457991027022\r
2019-12-05,46.87939204857416\r
2020-01-06,53.707943623838986\r
2020-01-16,59.73019518580699\r
2020-01-19,59.15823081481669\r
2020-01-21,64.74938667333137\r
2020-01-24,60.495147132485464\r
2020-02-15,69.97690526780794\r
2020-03-19,87.78048874380018\r
2020-03-24,73.99456672535189\r
2020-03-26,92.15734404218745\r
2020-03-31,83.04440416539171\r
2020-04-05,90.97736441985226\r
2020-04-10,88.842639334429\r
2020-04-15,98.44700327054878\r
2020-05-15,91.62047468618493\r
2020-05-18,81.06643999898414\r
2020-05-20,92.80271683271773\r
2020-05-25,88.20493006035325\r
2020-05-28,88.62993013945855\r
2020-05-30,96.59175451950928\r
2020-06-02,89.26847527789215\r
2020-06-24,90.44238601704369\r
2020-07-07,83.04440416539171\r
2020-07-09,92.15734404218745\r
2020-07-14,94.4215153773098\r
2020-07-19,93.233648139788\r
2020-07-22,92.91039851385445\r
2020-07-24,92.26482069143125\r
2020-07-29,85.66670667869175\r
2020-08-06,79.82393953107422\r
2020-08-08,76.53643159165956\r
2020-09-07,56.697217777426054\r
2020-09-10,53.615244687214215\r
2020-09-12,63.87279509319351\r
2020-09-15,53.33741063005216\r
2020-09-17,58.682744687025014\r
2020-11-14,56.603135954596574\r
2020-11-19,60.39938279629188\r
2020-11-21,63.38721346798296\r
2020-11-29,58.77775801056456\r
2021-02-24,99.43308640714652\r
2021-02-27,96.1566298550072\r
2021-03-01,96.91844996612129\r
2021-03-06,93.88106640509699\r
2021-03-09,95.17956558360152\r
2021-03-24,97.24544656963145\r
2021-03-29,92.47987662306402\r
2021-03-31,95.39645525884197\r
2021-04-03,96.59175451950928\r
2021-04-08,94.31335779167023\r
2021-04-23,93.12586418529797\r
2021-04-25,94.09714427188996\r
2021-05-03,91.94249346731279\r
2021-05-28,92.58745586934045\r
2021-06-14,94.52970682329904\r
2021-07-19,99.76237674029126\r
2021-07-22,98.6659007085885\r
2021-08-26,90.97736441985226\r
2021-09-02,90.12181316479207\r
2021-09-07,87.88654662214172\r
2021-09-22,81.37788296393906\r
2021-10-15,82.41837745926145\r
2021-10-22,82.20998978368921\r
2021-10-27,82.83558481488032\r
2021-11-06,83.04440416539171\r
2021-11-09,78.38100869000827\r
2021-11-29,83.56708027184952\r
2021-12-09,81.89767873844148\r
2022-01-05,93.88106640509699\r
2022-01-20,91.08446348162829\r
2022-02-09,90.65627392323955\r
2022-02-12,91.62047468618493\r
2022-03-24,95.17956558360152\r
2022-03-26,95.50495065959214\r
2022-04-15,93.34146614961976\r
2022-05-03,100.0\r
2022-05-08,90.97736441985226\r
2022-05-10,97.46361138759097\r
2022-05-13,86.61616625890743\r
2022-05-18,88.52362780235816\r
2022-05-28,83.2533670788303\r
2022-06-02,86.40492825735001\r
2022-06-12,73.28706470210163\r
2022-06-17,75.11009663464766\r
2022-06-19,76.33222107492155\r
2022-06-29,74.19705088481862\r
2022-07-02,69.37957038090528\r
2022-07-04,71.57661055665105\r
2022-07-12,69.47902899274762\r
2022-07-14,70.37590463889656\r
2022-07-17,65.53131201282642\r
2022-07-19,66.02131496803733\r
2022-08-03,54.730510939790236\r
2022-08-06,49.308374534027976\r
2022-08-08,46.70080684900158\r
2022-08-11,41.604273024986846\r
2022-08-13,38.692907765422\r
2022-08-18,38.43881080876536\r
2022-08-31,34.27239474908711\r
2022-09-20,31.916855602004222\r
2022-09-22,30.87595308081409\r
2022-10-20,40.055772360440535\r
2022-10-27,38.35421355527057\r
2022-12-16,58.303111827448326\r
2023-01-15,70.37590463889656\r
2023-02-07,81.48176975807085\r
2023-02-09,79.51413513183003\r
2023-02-14,80.85899274713091\r
2023-02-27,85.14046680486874\r
2023-03-01,87.88654662214172\r
2023-03-04,85.45610442615799\r
2023-04-05,96.70061951138207\r
2023-04-20,98.88493091366509\r
2023-05-03,84.4052220058013\r
2023-05-28,83.46247339164884\r
2023-06-02,90.65627392323955\r
2023-06-07,87.99263948043348\r
2023-06-14,83.77640137814517\r
2023-06-24,78.27821782256414\r
2023-06-27,79.61736668872325\r
`;export{n as default};
