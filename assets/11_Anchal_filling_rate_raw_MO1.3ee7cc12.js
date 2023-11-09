const n=`date,value\r
2017-02-15,65.75804198898588\r
2017-02-22,43.06940792852189\r
2017-02-25,22.735694855007345\r
2017-03-14,79.81141697220467\r
2017-03-17,27.54793106238506\r
2017-03-27,39.74849717785959\r
2017-04-23,57.09752568222858\r
2017-05-16,46.76843251462258\r
2017-05-26,81.56278842886987\r
2017-06-25,89.77450330877438\r
2017-07-05,94.98765004163154\r
2017-07-07,97.21078732891766\r
2017-08-14,91.4105277258898\r
2017-08-21,90.8641311752747\r
2017-08-26,95.54188310616337\r
2017-08-29,92.59799310882813\r
2017-09-23,75.7441638657998\r
2017-10-05,64.61334756452017\r
2017-10-15,52.07828078760781\r
2017-10-18,56.393733791258704\r
2017-11-17,35.1653589430491\r
2017-11-22,30.831065375568663\r
2017-11-27,79.11429861772318\r
2018-01-23,87.42819767236408\r
2018-01-28,62.26286562200073\r
2018-02-27,44.58066030328855\r
2018-04-06,29.617708563374258\r
2018-04-18,53.606819204179054\r
2018-04-23,85.90491560172876\r
2018-05-06,53.91422871698186\r
2018-05-11,30.766814856206278\r
2018-05-26,74.11947794358262\r
2018-06-20,82.09057830315673\r
2018-06-22,96.65345388359697\r
2018-06-25,93.14771354142657\r
2018-06-27,90.95512411127511\r
2018-07-12,100.0\r
2018-07-27,97.67601816108127\r
2018-08-01,97.02489505254283\r
2018-08-11,96.74627122837579\r
2018-08-19,87.42819767236408\r
2018-08-26,88.05792870424156\r
2018-09-08,95.63435602450473\r
2018-09-10,95.81938812106029\r
2018-09-18,86.71028683552426\r
2018-09-25,64.53183127476152\r
2018-09-28,56.159760904369364\r
2018-10-05,53.07021452364371\r
2018-10-13,53.991169353930914\r
2018-10-18,53.991169353930914\r
2018-10-20,52.764363543503\r
2018-10-23,49.88732325682485\r
2018-10-25,52.68798964786752\r
2018-10-30,21.066052772298466\r
2018-11-14,58.90879801243296\r
2018-11-22,61.86044870140227\r
2019-02-05,31.411254676689037\r
2019-02-15,54.37640119353739\r
2019-02-17,31.735081231655343\r
2019-02-20,92.78111700339674\r
2019-02-22,36.58239617371993\r
2019-02-25,47.210014444008905\r
2019-02-27,44.07504901266404\r
2019-03-22,32.84404115598556\r
2019-03-24,60.65824509697869\r
2019-03-27,43.14099166592163\r
2019-03-29,35.905372214314944\r
2019-04-01,70.40085221553618\r
2019-04-13,37.7426232609072\r
2019-04-18,46.69496533500156\r
2019-05-01,61.86044870140227\r
2019-05-13,58.82966953044077\r
2019-05-16,60.818100265272776\r
2019-05-23,75.4868822066678\r
2019-05-31,64.61334756452017\r
2019-06-02,67.15668572141813\r
2019-06-27,86.8895860838448\r
2019-06-30,91.68412066704974\r
2019-07-05,91.04614632350814\r
2019-07-10,93.69847899513859\r
2019-07-22,90.77316752596977\r
2019-08-04,79.89869492816608\r
2019-08-24,81.91452674959054\r
2019-08-26,84.74587648534767\r
2019-09-03,87.42819767236408\r
2019-09-13,84.1238786584283\r
2019-09-15,89.77450330877438\r
2019-09-20,90.59132812935164\r
2019-10-13,91.50169616272277\r
2019-11-04,60.25919950908719\r
2019-11-22,23.320853886998844\r
2020-01-16,28.670927557000276\r
2020-01-21,57.48973192977655\r
2020-02-12,67.4044859554276\r
2020-02-15,40.86938863406472\r
2020-02-20,49.288270247941824\r
2020-03-18,61.86044870140227\r
2020-03-23,78.85338662177173\r
2020-03-28,30.318270075141523\r
2020-04-02,80.07334281600491\r
2020-04-05,57.01918807578099\r
2020-04-07,71.24058202021622\r
2020-04-10,26.012364184988613\r
2020-04-15,44.00297032064779\r
2020-05-07,25.587506567879693\r
2020-05-20,43.42770847253166\r
2020-05-22,59.38428625775638\r
2020-05-25,60.02017896614388\r
2020-05-27,51.39509174258874\r
2020-05-30,60.65824509697869\r
2020-06-01,55.92610099450438\r
2020-06-24,98.98245652582159\r
2020-06-26,99.54406455234358\r
2020-06-29,100.0\r
2020-07-04,96.09715176687853\r
2020-07-09,100.0\r
2020-07-11,87.24854158979328\r
2020-07-19,93.33118602131269\r
2020-07-24,100.0\r
2020-07-29,88.77939809019084\r
2020-07-31,90.13724288946582\r
2020-08-05,86.7999215751621\r
2020-08-08,90.95512411127511\r
2020-08-10,99.16954568133465\r
2020-08-20,94.61873772587424\r
2020-08-25,86.7999215751621\r
2020-09-04,86.53110670732293\r
2020-09-09,95.63435602450473\r
2020-09-14,77.29374870884406\r
2020-09-17,89.95581431526783\r
2020-11-11,49.21355236753969\r
2020-11-18,35.09833105722569\r
2020-11-21,49.06422598714298\r
2020-11-23,59.78146405982088\r
2020-11-28,69.48085517714625\r
2021-02-14,58.119054320473985\r
2021-02-21,61.539119790149044\r
2021-02-24,69.89855329024432\r
2021-02-26,44.7254608697691\r
2021-03-01,60.97809063310503\r
2021-03-23,55.692754527847924\r
2021-03-28,63.31306639019233\r
2021-03-31,52.30665418603239\r
2021-04-02,53.91422871698186\r
2021-05-27,73.35385293447324\r
2021-06-14,90.50045240301836\r
2021-06-16,94.61873772587424\r
2021-06-26,94.61873772587424\r
2021-07-11,93.14771354142657\r
2021-07-19,92.59799310882813\r
2021-07-21,89.68389191988186\r
2021-07-29,94.98765004163154\r
2021-08-20,99.45039228846878\r
2021-08-25,92.78111700339674\r
2021-09-07,95.72685769944474\r
2021-09-22,44.29151250371672\r
2021-10-14,39.12241531239714\r
2021-10-19,45.74327970322471\r
2021-10-22,49.81231445600651\r
2021-10-24,54.762512487991145\r
2021-10-27,60.4187161217697\r
2022-01-15,26.623190991705698\r
2022-01-25,58.67151519298003\r
2022-01-27,22.21315667419171\r
2022-02-09,60.17949206193438\r
2022-02-11,59.54305522524862\r
2022-02-26,34.763809121230075\r
2022-03-06,35.63570340321433\r
2022-03-08,26.93030900467166\r
2022-03-26,56.159760904369364\r
2022-04-10,35.03134430014308\r
2022-04-17,65.67606396502029\r
2022-05-10,98.23523689207867\r
2022-05-15,70.31705544908739\r
2022-05-17,80.3355444084668\r
2022-05-30,87.24854158979328\r
2022-06-11,90.31878894683508\r
2022-06-19,89.50275742383185\r
2022-06-29,96.09715176687853\r
2022-07-04,94.98765004163154\r
2022-07-06,90.59132812935164\r
2022-07-11,86.44156134075888\r
2022-07-14,96.18979707616404\r
2022-07-16,91.13719780152188\r
2022-07-19,95.35702357901835\r
2022-07-21,87.96787819202952\r
2022-07-24,93.88229932650015\r
2022-08-03,92.78111700339674\r
2022-08-08,92.41498557321933\r
2022-08-10,92.41498557321933\r
2022-08-13,89.50275742383185\r
2022-09-04,73.60877722683715\r
2022-09-12,93.0560208388857\r
2022-09-19,94.1582469011154\r
2022-09-22,96.00453516467543\r
2022-10-04,28.045259214909564\r
2022-10-09,30.57432208008897\r
2022-10-12,25.104718274311544\r
2022-10-22,30.19050395546862\r
2022-11-11,33.10674725191396\r
2023-02-09,40.16765659446251\r
2023-02-11,37.26347269125279\r
2023-02-14,6.234099600385898\r
2023-04-05,34.230721526327685\r
2023-04-07,72.59078855102592\r
2023-05-25,39.539448254268486\r
2023-06-11,80.7731589643059\r
2023-06-24,85.72627260576684\r
2023-07-11,100.0\r
2023-07-14,95.63435602450473\r
2023-07-19,93.14771354142657\r
2023-07-31,93.79037468223457\r
2023-08-10,100.0\r
2023-08-20,93.23943527230135\r
2023-08-23,88.50862529710123\r
2023-09-04,96.28247108265843\r
2023-09-07,90.40960600534044\r
2023-09-17,93.51477453300727\r
2023-09-24,96.65345388359697\r
2023-10-02,83.857759490592\r
2023-10-07,37.67405274296494\r
2023-10-09,41.645792106024395\r
`;export{n as default};
