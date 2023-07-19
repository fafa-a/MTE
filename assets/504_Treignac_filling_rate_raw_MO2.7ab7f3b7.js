const r=`date,value\r
2017-02-15,89.91628517210826\r
2017-02-22,89.91628517210826\r
2017-02-25,91.26985354844378\r
2017-03-07,87.77951807743169\r
2017-03-17,89.9391473329332\r
2017-03-27,90.58040345454326\r
2017-04-03,84.3535998045613\r
2017-04-06,88.82213404601526\r
2017-05-16,100.0\r
2017-05-23,100.0\r
2017-05-26,100.0\r
2017-06-02,88.34543508145228\r
2017-06-05,88.34543508145228\r
2017-06-25,91.52327118801715\r
2017-07-02,89.4596191298488\r
2017-07-05,89.66498279312624\r
2017-07-07,82.87367752499172\r
2017-07-12,82.87367752499172\r
2017-08-14,92.74893903761726\r
2017-08-19,97.25358294475484\r
2017-08-21,97.25358294475484\r
2017-08-24,91.50021949221103\r
2017-08-26,95.74081342100604\r
2017-08-29,91.10876077124563\r
2017-09-03,97.5384753704603\r
2017-10-18,84.61996803358332\r
2017-10-25,84.61996803358332\r
2017-10-28,85.95776356683183\r
2017-10-30,69.08056914192903\r
2017-11-04,69.08056914192903\r
2017-11-07,69.3229517125513\r
2017-11-14,51.734297048762926\r
2017-11-17,59.03892743112878\r
2018-02-25,89.25447813303026\r
2018-02-27,89.25447813303026\r
2018-04-06,65.33570311675567\r
2018-04-16,67.77464212469314\r
2018-04-18,64.78640585100747\r
2018-04-21,70.3371985804711\r
2018-04-23,70.3371985804711\r
2018-04-26,67.51487123906135\r
2018-05-06,77.07802454003901\r
2018-05-11,84.3535998045613\r
2018-05-13,84.3535998045613\r
2018-05-18,83.27005173822329\r
2018-05-21,83.27005173822329\r
2018-05-26,64.7472542479707\r
2018-06-02,64.7472542479707\r
2018-06-20,91.26985354844378\r
2018-06-22,91.26985354844378\r
2018-06-25,93.23671308729786\r
2018-06-27,93.23671308729786\r
2018-07-02,94.02900686715651\r
2018-07-07,90.78697892726284\r
2018-07-10,91.7077835916164\r
2018-07-12,83.15985808997179\r
2018-07-15,92.88817960579706\r
2018-07-17,92.88817960579706\r
2018-07-25,92.37811374779315\r
2018-08-19,89.48242631929061\r
2018-08-21,89.48242631929061\r
2018-08-26,89.48242631929061\r
2018-09-08,94.91826203639032\r
2018-09-10,94.91826203639032\r
2018-09-13,94.91826203639032\r
2018-09-18,91.31590477057921\r
2018-09-28,88.5268916625163\r
2018-09-30,88.5268916625163\r
2018-10-05,88.5268916625163\r
2018-10-08,91.89247169208831\r
2018-10-13,96.30678785803771\r
2018-10-18,91.01676817218525\r
2018-10-20,100.0\r
2018-10-23,91.26985354844378\r
2018-10-25,97.63352707014033\r
2018-10-30,88.61768596710611\r
2019-02-15,80.97048122069253\r
2019-02-17,80.97048122069253\r
2019-02-20,84.88673331222815\r
2019-02-22,84.88673331222815\r
2019-02-25,82.5660047913708\r
2019-02-27,82.5660047913708\r
2019-03-12,88.75395993466833\r
2019-03-22,84.13192963124632\r
2019-03-24,84.13192963124632\r
2019-03-27,84.10977778312045\r
2019-03-29,84.68662213249698\r
2019-04-01,84.68662213249698\r
2019-05-01,91.84628319643923\r
2019-05-06,92.40126974866409\r
2019-05-13,92.40126974866409\r
2019-05-16,85.37683399058497\r
2019-05-23,89.82486401126954\r
2019-05-31,98.34780998690634\r
2019-06-02,90.30531563147366\r
2019-06-25,78.76579086613629\r
2019-06-27,78.76579086613629\r
2019-06-30,92.10045579387406\r
2019-07-02,92.10045579387406\r
2019-07-05,89.52804894492768\r
2019-07-07,89.52804894492768\r
2019-07-10,93.95897108973354\r
2019-07-15,95.29386912083635\r
2019-07-17,94.66043906686194\r
2019-07-20,94.66043906686194\r
2019-07-22,99.75974584167442\r
2019-07-25,96.35402358874249\r
2019-08-04,93.63246373407338\r
2019-08-09,92.91139596912537\r
2019-08-14,90.46573545009862\r
2019-08-16,90.46573545009862\r
2019-08-21,93.00428885525817\r
2019-08-24,91.31590477057921\r
2019-08-26,89.80201559186497\r
2019-08-29,89.73348682419142\r
2019-09-03,85.66706594343115\r
2019-09-13,83.97692461784604\r
2019-09-15,85.9801442081486\r
2019-09-18,85.9801442081486\r
2019-09-20,77.01427289020128\r
2020-02-15,67.6347068819618\r
2020-02-20,81.34072646139687\r
2020-02-22,81.34072646139687\r
2020-03-31,84.42015463469652\r
2020-04-02,84.42015463469652\r
2020-04-05,83.62313501769675\r
2020-04-07,82.91767494184222\r
2020-04-10,83.84417075612889\r
2020-04-12,81.77733147299868\r
2020-04-15,85.64472387482094\r
2020-05-20,87.59878784525078\r
2020-05-22,87.59878784525078\r
2020-05-25,93.21345832088826\r
2020-05-27,93.21345832088826\r
2020-05-30,87.26039341446482\r
2020-06-01,87.26039341446482\r
2020-07-09,100.0\r
2020-07-11,100.0\r
2020-07-14,100.0\r
2020-07-19,97.0401722230864\r
2020-07-21,99.61572451582468\r
2020-07-24,98.01417159597437\r
2020-07-29,95.81147396219613\r
2020-07-31,93.53927463173585\r
2020-08-05,100.0\r
2020-08-08,91.96177502269451\r
2020-08-10,94.30939670522879\r
2020-08-15,93.98231360727549\r
2020-08-20,93.98231360727549\r
2020-09-12,92.4244284936751\r
2020-09-14,92.4244284936751\r
2020-09-17,92.8185469761\r
2020-11-06,84.28706979427861\r
2020-11-08,84.28706979427861\r
2020-11-11,88.41346066909588\r
2020-11-18,88.41346066909588\r
2020-11-21,78.83022385675136\r
2020-11-23,81.88665538928271\r
2021-02-14,79.49748992329857\r
2021-02-19,79.49748992329857\r
2021-02-21,79.49748992329857\r
2021-02-24,85.10934096390159\r
2021-02-26,82.10551038280504\r
2021-03-01,84.17624160192584\r
2021-03-06,84.17624160192584\r
2021-03-31,53.687735076973375\r
2021-04-02,51.38280607520981\r
2021-04-05,51.38280607520981\r
2021-04-07,44.9367457350118\r
2021-04-15,43.57968552028755\r
2021-04-17,43.57968552028755\r
2021-04-22,43.57968552028755\r
2021-06-14,85.39914299078345\r
2021-06-16,85.39914299078345\r
2021-07-19,88.48151101327598\r
2021-07-21,88.48151101327598\r
2021-07-29,91.06275897908198\r
2021-09-22,69.80892090248028\r
2021-09-24,69.80892090248028\r
2021-09-27,69.80892090248028\r
2021-10-02,69.80892090248028\r
2021-10-27,60.471072643252164\r
2021-11-06,76.56870980603473\r
2021-11-11,75.97652756527378\r
2022-03-26,46.330172307024974\r
2022-04-15,78.93766753246263\r
2022-04-17,78.93766753246263\r
2022-04-22,78.91617326170966\r
2022-06-19,93.44612940644488\r
2022-06-21,93.44612940644488\r
2022-06-29,91.50021949221103\r
2022-07-01,87.05765403808591\r
2022-07-04,87.05765403808591\r
2022-07-06,87.05765403808591\r
2022-07-14,89.11784118578929\r
2022-07-16,89.11784118578929\r
2022-07-19,89.71064939860699\r
2022-07-21,89.71064939860699\r
2022-07-24,86.76520196389757\r
2022-07-26,87.50848877857408\r
2022-07-31,85.9801442081486\r
2022-08-03,87.59878784525078\r
2022-08-08,85.57771420206278\r
2022-08-10,85.57771420206278\r
2022-08-13,82.17122073802263\r
2022-09-12,80.99223824321732\r
2022-09-19,80.99223824321732\r
2022-09-22,82.5440488735425\r
2022-10-12,77.43975497910452\r
2022-10-19,77.43975497910452\r
2022-10-22,77.69557621007831\r
2022-10-24,71.66612811078053\r
2022-11-11,65.6899805242896\r
2022-11-13,65.6899805242896\r
2023-02-14,47.25342746279625\r
2023-02-16,50.3351341750593\r
2023-03-06,58.45942502945112\r
2023-03-13,58.45942502945112\r
2023-03-16,58.45942502945112\r
2023-06-14,83.97692461784604\r
2023-06-16,83.97692461784604\r
2023-06-24,89.57368256598227\r
2023-06-26,89.09507798441805\r
2023-07-04,87.48592089246982\r
2023-07-09,88.30009844383257\r
`;export{r as default};
