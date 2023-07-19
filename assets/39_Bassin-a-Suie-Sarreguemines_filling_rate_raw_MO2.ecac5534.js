const r=`date,value\r
2017-02-09,44.453980884163194\r
2017-02-19,44.453980884163194\r
2017-03-11,74.79667873849797\r
2017-03-14,74.79667873849797\r
2017-04-03,62.7121802751361\r
2017-04-10,62.7121802751361\r
2017-04-20,68.65178062030861\r
2017-04-23,72.72582002950303\r
2017-04-30,74.79667873849797\r
2017-05-10,75.84050438204928\r
2017-05-13,68.65178062030861\r
2017-06-02,63.68767905974811\r
2017-06-12,75.84050438204928\r
2017-06-19,82.2199066340574\r
2017-06-22,82.2199066340574\r
2017-06-29,74.79667873849797\r
2017-07-17,70.67747157863248\r
2017-07-19,70.67747157863248\r
2017-07-22,76.88990394239173\r
2017-07-29,71.69882290269318\r
2017-08-06,67.64747869688647\r
2017-08-23,72.72582002950303\r
2017-08-26,72.72582002950303\r
2017-09-02,72.72582002950303\r
2017-09-22,66.64889800767743\r
2017-09-25,69.66178457118359\r
2017-09-27,64.66897836921294\r
2017-10-05,69.66178457118359\r
2017-10-15,55.119522953596245\r
2017-10-17,59.820693084353316\r
2017-10-27,53.28086216318001\r
2017-11-01,52.37058235502838\r
2017-11-06,64.66897836921294\r
2017-11-14,63.68767905974811\r
2018-02-07,100.0\r
2018-02-12,100.0\r
2018-02-14,100.0\r
2018-02-22,83.30239009163338\r
2018-02-24,81.14289531102668\r
2018-02-27,88.79632478628163\r
2018-03-04,88.79632478628163\r
2018-03-14,15.780800067773814\r
2018-03-19,15.780800067773814\r
2018-03-21,62.7121802751361\r
2018-03-24,62.7121802751361\r
2018-04-18,83.30239009163338\r
2018-04-20,100.0\r
2018-05-05,65.656058000441\r
2018-05-08,67.64747869688647\r
2018-05-15,63.68767905974811\r
2018-05-18,68.65178062030861\r
2018-05-25,71.69882290269318\r
2018-05-28,69.66178457118359\r
2018-05-30,56.04785734519925\r
2018-06-04,84.3903293760138\r
2018-06-27,58.86860378356719\r
2018-06-29,58.86860378356719\r
2018-07-02,81.14289531102668\r
2018-07-04,81.14289531102668\r
2018-07-07,81.14289531102668\r
2018-07-09,77.94485996867377\r
2018-07-14,80.07137261167261\r
2018-07-17,75.84050438204928\r
2018-07-19,75.84050438204928\r
2018-07-22,74.79667873849797\r
2018-07-24,75.84050438204928\r
2018-07-27,74.79667873849797\r
2018-07-29,69.66178457118359\r
2018-08-03,65.656058000441\r
2018-08-06,69.66178457118359\r
2018-08-11,74.79667873849797\r
2018-08-16,72.72582002950303\r
2018-08-18,69.66178457118359\r
2018-08-21,69.66178457118359\r
2018-08-23,60.77866641446129\r
2018-08-26,60.77866641446129\r
2018-08-28,75.84050438204928\r
2018-09-12,61.74250248159644\r
2018-09-17,61.74250248159644\r
2018-09-20,61.74250248159644\r
2018-09-22,64.66897836921294\r
2018-09-25,61.74250248159644\r
2018-09-27,48.79035993724589\r
2018-09-30,53.28086216318001\r
2018-10-05,48.79035993724589\r
2018-10-07,44.453980884163194\r
2018-10-10,49.6762319904107\r
2018-10-12,58.86860378356719\r
2018-10-15,42.76331644067535\r
2018-10-17,55.119522953596245\r
2018-10-20,47.910652034653786\r
2018-10-22,47.910652034653786\r
2018-11-04,48.79035993724589\r
2018-11-11,48.79035993724589\r
2018-11-14,50.568242936349996\r
2018-11-16,46.16983166230964\r
2019-02-14,62.7121802751361\r
2019-02-17,62.7121802751361\r
2019-02-24,62.7121802751361\r
2019-02-27,43.60548655119689\r
2019-03-21,76.88990394239173\r
2019-03-24,76.88990394239173\r
2019-03-29,47.910652034653786\r
2019-03-31,67.64747869688647\r
2019-04-15,64.66897836921294\r
2019-04-18,59.820693084353316\r
2019-04-20,77.94485996867377\r
2019-04-30,77.94485996867377\r
2019-05-15,72.72582002950303\r
2019-05-23,72.72582002950303\r
2019-05-25,72.72582002950303\r
2019-06-04,75.84050438204928\r
2019-06-07,81.14289531102668\r
2019-06-19,82.2199066340574\r
2019-06-24,82.2199066340574\r
2019-06-27,91.03164622312654\r
2019-06-29,81.14289531102668\r
2019-07-02,81.14289531102668\r
2019-07-04,77.94485996867377\r
2019-07-17,79.00535521003435\r
2019-07-22,54.19718351662032\r
2019-07-24,80.07137261167261\r
2019-07-29,55.119522953596245\r
2019-08-01,55.119522953596245\r
2019-08-11,56.04785734519925\r
2019-08-13,56.04785734519925\r
2019-08-23,51.46636789513328\r
2019-08-26,55.119522953596245\r
2019-08-28,55.119522953596245\r
2019-08-31,51.46636789513328\r
2019-09-02,51.46636789513328\r
2019-09-10,37.84471771102024\r
2019-09-12,47.910652034653786\r
2019-09-15,24.52992431766434\r
2019-09-20,24.52992431766434\r
2019-12-04,46.16983166230964\r
2019-12-14,46.16983166230964\r
2019-12-19,86.58251108073182\r
2019-12-21,86.58251108073182\r
2019-12-29,86.58251108073182\r
2020-01-20,52.37058235502838\r
2020-02-07,89.91130470265956\r
2020-02-19,89.91130470265956\r
2020-02-22,100.0\r
2020-03-15,56.04785734519925\r
2020-03-18,58.86860378356719\r
2020-03-20,76.88990394239173\r
2020-03-23,76.88990394239173\r
2020-03-25,70.67747157863248\r
2020-03-28,71.69882290269318\r
2020-03-30,68.65178062030861\r
2020-04-02,76.88990394239173\r
2020-04-04,80.07137261167261\r
2020-04-07,76.88990394239173\r
2020-04-09,76.88990394239173\r
2020-04-12,74.79667873849797\r
2020-04-14,75.84050438204928\r
2020-04-17,73.7584446666229\r
2020-04-19,76.88990394239173\r
2020-04-22,79.00535521003435\r
2020-04-24,71.69882290269318\r
2020-04-27,77.94485996867377\r
2020-05-07,74.79667873849797\r
2020-05-12,84.3903293760138\r
2020-05-17,62.7121802751361\r
2020-05-19,73.7584446666229\r
2020-05-27,88.79632478628163\r
2020-05-29,88.79632478628163\r
2020-06-01,69.66178457118359\r
2020-06-03,69.66178457118359\r
2020-06-23,82.2199066340574\r
2020-06-26,82.2199066340574\r
2020-07-03,82.2199066340574\r
2020-07-08,82.2199066340574\r
2020-07-21,70.67747157863248\r
2020-07-23,79.00535521003435\r
2020-07-31,66.64889800767743\r
2020-08-05,73.7584446666229\r
2020-08-07,74.79667873849797\r
2020-08-10,67.64747869688647\r
2020-08-12,76.88990394239173\r
2020-08-17,58.86860378356719\r
2020-08-20,65.656058000441\r
2020-09-04,44.453980884163194\r
2020-09-09,33.92526578947767\r
2020-09-11,54.19718351662032\r
2020-09-14,36.257114656350815\r
2020-09-16,53.28086216318001\r
2020-09-19,39.45844949052121\r
2020-09-21,49.6762319904107\r
2020-10-04,62.7121802751361\r
2020-10-31,37.04763426019603\r
2020-11-05,43.60548655119689\r
2020-11-08,43.60548655119689\r
2020-11-18,41.09806218382657\r
2020-11-25,37.04763426019603\r
2020-11-28,48.79035993724589\r
2020-11-30,48.79035993724589\r
2020-12-05,48.79035993724589\r
2020-12-25,81.14289531102668\r
2021-02-21,74.79667873849797\r
2021-02-23,83.30239009163338\r
2021-02-28,59.820693084353316\r
2021-03-03,70.67747157863248\r
2021-03-30,73.7584446666229\r
2021-04-02,79.00535521003435\r
2021-04-04,79.00535521003435\r
2021-04-09,79.00535521003435\r
2021-04-22,61.74250248159644\r
2021-04-24,61.74250248159644\r
2021-04-27,100.0\r
2021-06-01,80.07137261167261\r
2021-06-11,80.07137261167261\r
2021-06-13,76.88990394239173\r
2021-06-16,94.42468989869424\r
2021-06-18,94.42468989869424\r
2021-06-21,94.42468989869424\r
2021-07-18,62.7121802751361\r
2021-07-21,65.656058000441\r
2021-07-23,62.7121802751361\r
2021-08-15,56.04785734519925\r
2021-08-25,56.04785734519925\r
2021-09-01,38.64833320265242\r
2021-09-04,63.68767905974811\r
2021-09-06,61.74250248159644\r
2021-09-21,29.443361572555926\r
2021-09-24,29.443361572555926\r
2021-10-01,29.443361572555926\r
2021-10-09,52.37058235502838\r
2021-10-14,52.37058235502838\r
2021-10-24,39.45844949052121\r
2021-11-23,41.9274987593049\r
2022-01-12,81.14289531102668\r
2022-01-24,69.66178457118359\r
2022-02-23,97.86545260432888\r
2022-02-26,97.86545260432888\r
2022-02-28,97.86545260432888\r
2022-03-03,93.28835371689767\r
2022-03-05,93.28835371689767\r
2022-03-08,80.07137261167261\r
2022-03-10,76.88990394239173\r
2022-03-13,76.88990394239173\r
2022-03-20,66.64889800767743\r
2022-03-23,60.77866641446129\r
2022-03-25,69.66178457118359\r
2022-03-28,61.74250248159644\r
2022-04-04,62.7121802751361\r
2022-04-09,71.69882290269318\r
2022-04-17,77.94485996867377\r
2022-04-22,94.42468989869424\r
2022-05-09,73.7584446666229\r
2022-05-14,76.88990394239173\r
2022-05-17,76.88990394239173\r
2022-06-01,67.64747869688647\r
2022-06-11,68.65178062030861\r
2022-06-13,62.7121802751361\r
2022-06-16,77.94485996867377\r
2022-06-18,66.64889800767743\r
2022-06-21,66.64889800767743\r
2022-06-23,76.88990394239173\r
2022-07-03,46.16983166230964\r
2022-07-06,63.68767905974811\r
2022-07-08,49.6762319904107\r
2022-07-13,49.6762319904107\r
2022-07-16,55.119522953596245\r
2022-07-18,57.92242009266345\r
2022-07-31,59.820693084353316\r
2022-08-02,59.820693084353316\r
2022-08-07,59.820693084353316\r
2022-08-10,59.820693084353316\r
2022-08-12,59.820693084353316\r
2022-08-17,66.64889800767743\r
2022-08-20,53.28086216318001\r
2022-08-22,56.04785734519925\r
2022-08-25,51.46636789513328\r
2022-08-30,56.982163887284045\r
2022-09-01,52.37058235502838\r
2022-09-04,57.92242009266345\r
2022-09-06,60.77866641446129\r
2022-10-04,52.37058235502838\r
2022-10-09,56.04785734519925\r
2022-11-23,63.68767905974811\r
2023-02-08,56.04785734519925\r
2023-02-13,60.77866641446129\r
2023-02-21,56.982163887284045\r
2023-03-03,67.64747869688647\r
2023-04-27,65.656058000441\r
2023-05-04,67.64747869688647\r
2023-05-24,93.28835371689767\r
2023-05-27,100.0\r
2023-05-29,85.48370835742564\r
2023-06-01,86.58251108073182\r
2023-06-03,87.68672176218757\r
2023-06-06,87.68672176218757\r
2023-06-08,91.03164622312654\r
2023-06-11,89.91130470265956\r
2023-06-13,85.48370835742564\r
2023-06-18,86.58251108073182\r
2023-06-23,85.48370835742564\r
2023-06-26,81.14289531102668\r
2023-07-06,80.07137261167261\r
2023-07-08,81.14289531102668\r
`;export{r as default};
