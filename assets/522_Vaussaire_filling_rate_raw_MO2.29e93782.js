const r=`date,value\r
2017-02-22,100.0\r
2017-02-25,98.57610429204291\r
2017-03-07,68.77113633686471\r
2017-03-14,66.73239725113541\r
2017-03-17,76.39907428637875\r
2017-03-27,72.0231267495894\r
2017-04-03,79.47547835211941\r
2017-04-06,76.85750418433085\r
2017-04-23,51.957896106785775\r
2017-05-03,51.957896106785775\r
2017-05-16,60.90087805547045\r
2017-05-23,74.72735731961001\r
2017-05-26,74.72735731961001\r
2017-06-02,67.74876775671505\r
2017-06-15,61.46060387555401\r
2017-06-22,64.71772986053178\r
2017-06-25,46.30860307175895\r
2017-07-02,54.34169628309833\r
2017-07-05,43.94835042809287\r
2017-07-07,49.87422779549174\r
2017-07-12,49.87422779549174\r
2017-07-17,51.564670345130835\r
2017-07-22,47.316788013576776\r
2017-07-27,47.316788013576776\r
2017-08-04,92.90826283744494\r
2017-08-06,92.90826283744494\r
2017-08-14,75.48543554107792\r
2017-08-19,72.7703897545871\r
2017-08-21,54.475353486624925\r
2017-08-24,62.8686622255663\r
2017-08-26,67.3124447909895\r
2017-08-29,56.08923290258075\r
2017-09-03,61.04062174003927\r
2017-09-13,32.558757373384154\r
2017-09-20,51.43385481606526\r
2017-09-23,51.43385481606526\r
2017-09-28,51.43385481606526\r
2017-10-05,51.564670345130835\r
2017-10-10,51.564670345130835\r
2017-10-13,51.69561578442523\r
2017-10-15,55.14556361347472\r
2017-10-18,49.87422779549174\r
2017-10-25,49.48726037468295\r
2018-02-22,72.0231267495894\r
2018-02-25,80.7193038949337\r
2018-02-27,71.13039776815097\r
2018-03-17,88.50135063906045\r
2018-03-22,100.0\r
2018-03-29,88.66307380929906\r
2018-04-01,88.66307380929906\r
2018-04-06,81.18768396301171\r
2018-04-16,81.18768396301171\r
2018-04-18,97.39848068771191\r
2018-04-21,100.0\r
2018-04-23,92.08585696894977\r
2018-04-26,93.89892030739372\r
2018-05-06,59.23374403579742\r
2018-05-11,65.7220446068336\r
2018-05-13,65.7220446068336\r
2018-05-18,68.04026187605284\r
2018-05-21,60.76125965535005\r
2018-05-26,63.01015337825916\r
2018-06-02,63.01015337825916\r
2018-06-20,50.78172834657136\r
2018-06-22,64.00407008718668\r
2018-06-25,46.30860307175895\r
2018-06-27,49.48726037468295\r
2018-07-02,54.34169628309833\r
2018-07-07,45.93272589124898\r
2018-07-10,42.72558160532364\r
2018-07-12,56.90306768394075\r
2018-07-15,63.719473304503595\r
2018-07-17,63.719473304503595\r
2018-07-25,38.90409461594031\r
2018-07-27,61.60084807362441\r
2018-07-30,68.04026187605284\r
2018-08-01,68.04026187605284\r
2018-08-04,68.04026187605284\r
2018-08-06,68.04026187605284\r
2018-08-11,57.17536386600823\r
2018-08-16,57.17536386600823\r
2018-08-19,65.2908834895204\r
2018-08-21,56.631280108445345\r
2018-08-26,49.22993736753655\r
2018-09-03,39.96471655372466\r
2018-09-05,39.96471655372466\r
2018-09-08,60.34315678893609\r
2018-09-10,67.3124447909895\r
2018-09-13,66.58769225400978\r
2018-09-18,69.35803243667213\r
2018-09-20,71.27888345938057\r
2018-09-23,65.2908834895204\r
2018-09-25,57.039152232247595\r
2018-09-28,63.435372744136295\r
2018-09-30,62.163073975803776\r
2018-10-05,62.8686622255663\r
2018-10-08,68.04026187605284\r
2018-10-13,92.25010933719848\r
2018-10-20,82.28468718966072\r
2018-10-23,69.35803243667213\r
2018-10-25,61.180490646509156\r
2018-10-30,61.180490646509156\r
2019-02-15,100.0\r
2019-02-17,66.15431472262749\r
2019-02-20,71.87403629627396\r
2019-02-22,56.49557721396291\r
2019-02-25,57.17536386600823\r
2019-02-27,49.48726037468295\r
2019-03-12,55.41454430744067\r
2019-03-22,93.40307795223963\r
2019-03-24,55.81897434020252\r
2019-03-27,58.8197922322784\r
2019-03-29,46.559852935655876\r
2019-04-01,56.90306768394075\r
2019-04-13,99.92872732303292\r
2019-04-18,60.204040154463264\r
2019-05-06,65.00405964048697\r
2019-05-13,71.27888345938057\r
2019-05-16,71.27888345938057\r
2019-05-23,66.010101559862\r
2019-05-31,87.37252464223427\r
2019-06-02,60.76125965535005\r
2019-06-17,32.997271952193415\r
2019-06-25,32.997271952193415\r
2019-06-27,37.97071073889888\r
2019-06-30,36.01683918262068\r
2019-07-02,36.01683918262068\r
2019-07-05,48.20590047215763\r
2019-07-07,51.69561578442523\r
2019-07-10,50.65169379445072\r
2019-07-15,63.435372744136295\r
2019-07-17,55.95403981219368\r
2019-07-20,55.95403981219368\r
2019-07-22,48.844937256642105\r
2019-07-25,75.18184520750997\r
2019-08-04,49.48726037468295\r
2019-08-09,65.2908834895204\r
2019-08-14,30.613972656978554\r
2019-08-16,59.37198014462211\r
2019-08-21,59.37198014462211\r
2019-08-24,61.46060387555401\r
2019-08-26,40.32073230435017\r
2019-08-29,32.44948746289721\r
2019-08-31,26.968038052348742\r
2019-09-03,21.51815613015656\r
2019-09-13,25.065247760063585\r
2019-09-15,36.358703454075055\r
2019-09-18,48.71686669236146\r
2019-09-20,57.72147993701452\r
2019-09-30,57.17536386600823\r
2019-10-03,93.7335254577366\r
2020-02-20,62.5860532394628\r
2020-02-22,55.54922652040766\r
2020-03-28,46.81163412943841\r
2020-03-31,43.94835042809287\r
2020-04-02,49.22993736753655\r
2020-04-05,40.4396784632325\r
2020-04-07,40.20192320766796\r
2020-04-10,47.316788013576776\r
2020-04-12,51.957896106785775\r
2020-04-15,57.72147993701452\r
2020-05-20,64.14655441133483\r
2020-05-22,64.14655441133483\r
2020-05-25,79.63054328395242\r
2020-05-27,47.44340759419746\r
2020-05-30,62.022330257460744\r
2020-06-01,62.022330257460744\r
2020-06-24,95.55913194875782\r
2020-06-26,76.09405049851296\r
2020-06-29,76.09405049851296\r
2020-07-01,82.44187166165207\r
2020-07-04,86.08938731773223\r
2020-07-09,95.05987398345516\r
2020-07-11,76.70457505864738\r
2020-07-14,75.33358056852971\r
2020-07-19,63.719473304503595\r
2020-07-21,56.90306768394075\r
2020-07-24,66.010101559862\r
2020-07-29,61.60084807362441\r
2020-07-31,50.39201601373181\r
2020-08-05,39.84631917341366\r
2020-08-08,45.93272589124898\r
2020-08-10,43.457624115213335\r
2020-08-15,44.56478426633709\r
2020-08-20,46.30860307175895\r
2020-08-25,57.311702519196594\r
2020-09-04,34.214979611458155\r
2020-09-07,37.7387516015081\r
2020-09-09,37.7387516015081\r
2020-09-12,35.449876190336724\r
2020-09-14,35.562987256604025\r
2020-09-17,34.10356661078517\r
2021-02-21,66.010101559862\r
2021-02-24,49.61611853452034\r
2021-02-26,52.74784748648095\r
2021-03-01,60.76125965535005\r
2021-03-06,51.826691062182206\r
2021-03-21,88.33974295503968\r
2021-03-23,100.0\r
2021-03-26,100.0\r
2021-03-28,83.54544421399365\r
2021-03-31,86.08938731773223\r
2021-04-02,90.28664718360105\r
2021-04-05,98.57610429204291\r
2021-04-07,80.87531282486763\r
2021-04-15,84.02015902709009\r
2021-04-17,92.90826283744494\r
2021-04-22,92.74355294692582\r
2021-04-27,100.0\r
2021-05-05,100.0\r
2021-05-27,38.786937203766705\r
2021-05-30,38.786937203766705\r
2021-06-01,42.36138635460844\r
2021-06-09,38.319690718926886\r
2021-06-11,39.02139016255945\r
2021-06-14,47.1903007994854\r
2021-06-16,52.352289127758\r
2021-06-26,55.95403981219368\r
2021-07-01,59.23374403579742\r
2021-07-11,52.87995890626752\r
2021-07-19,72.47112262224884\r
2021-07-21,41.036462120323876\r
2021-07-29,50.65169379445072\r
2021-08-20,64.71772986053178\r
2021-08-25,64.71772986053178\r
2021-08-28,49.22993736753655\r
2021-08-30,49.22993736753655\r
2021-09-02,58.54445544183252\r
2021-09-07,49.101472669200405\r
2021-09-22,38.66991801683811\r
2021-09-24,46.057885164504576\r
2021-09-27,46.057885164504576\r
2021-10-02,46.057885164504576\r
2021-10-07,45.558047741047815\r
2021-10-09,48.07848830446309\r
2021-10-12,45.93272589124898\r
2021-10-14,50.78172834657136\r
2021-10-17,50.78172834657136\r
2021-10-19,53.40969587587268\r
2021-10-22,52.87995890626752\r
2021-10-24,51.957896106785775\r
2021-10-27,45.558047741047815\r
2022-02-19,78.85640137604966\r
2022-03-08,64.71772986053178\r
2022-03-23,51.17261377643971\r
2022-03-26,66.87722506134003\r
2022-04-10,65.7220446068336\r
2022-04-15,78.70192807185113\r
2022-04-17,68.18619240655\r
2022-04-22,84.49592505029536\r
2022-04-27,73.22019419637982\r
2022-05-17,42.48264928826739\r
2022-05-27,53.80835249807468\r
2022-05-30,52.87995890626752\r
2022-06-01,68.62471719678021\r
2022-06-04,60.06504911896433\r
2022-06-06,60.06504911896433\r
2022-06-11,54.877095014530866\r
2022-06-14,51.69561578442523\r
2022-06-19,52.08923084676962\r
2022-06-21,52.08923084676962\r
2022-06-29,61.3204847124511\r
2022-07-01,81.03143953071981\r
2022-07-04,57.039152232247595\r
2022-07-06,57.44816812591661\r
2022-07-11,48.844937256642105\r
2022-07-14,47.6970435470011\r
2022-07-16,37.39185602458131\r
2022-07-19,44.56478426633709\r
2022-07-21,34.88643724391742\r
2022-07-24,40.32073230435017\r
2022-07-26,37.16128881517004\r
2022-07-31,39.60993675011723\r
2022-08-03,46.559852935655876\r
2022-08-08,51.04218841016823\r
2022-08-10,44.4412289616358\r
2022-08-13,47.6970435470011\r
2022-08-28,30.934846015606233\r
2022-08-30,31.257026249415006\r
2022-09-02,29.448666364829375\r
2022-09-04,31.90529558028348\r
2022-09-12,43.457624115213335\r
2022-09-19,45.1845707627774\r
2022-09-22,42.24025901669235\r
2022-10-04,38.20322534552629\r
2022-10-09,40.20192320766796\r
2022-10-12,37.39185602458131\r
2022-10-19,62.444935528243505\r
2022-10-22,64.8608329622006\r
2022-10-24,49.87422779549174\r
2023-02-16,64.57475039496391\r
2023-02-26,62.30394241989674\r
2023-03-01,82.44187166165207\r
2023-03-06,66.44311012806294\r
2023-03-13,95.72577847145467\r
2023-03-16,82.75659241089166\r
2023-04-05,54.743052920854886\r
2023-04-07,68.33224517480157\r
2023-05-30,34.55007053772225\r
2023-06-01,38.90409461594031\r
2023-06-06,38.90409461594031\r
2023-06-14,53.6753381544556\r
2023-06-16,58.132398165171864\r
2023-06-24,52.61586533638971\r
2023-06-26,64.28916261060927\r
2023-07-04,84.33721965467578\r
2023-07-06,92.25010933719848\r
2023-07-09,84.81368576621689\r
2023-07-11,84.81368576621689\r
2023-07-14,85.45060556321604\r
2023-07-19,63.86170969819578\r
2023-07-26,46.81163412943841\r
2023-07-31,52.74784748648095\r
2023-08-08,64.8608329622006\r
2023-08-10,64.8608329622006\r
2023-08-15,70.98203319400987\r
2023-08-20,74.72735731961001\r
2023-08-23,65.14740983601588\r
2023-09-04,62.022330257460744\r
2023-09-07,62.727295492287915\r
2023-09-17,44.4412289616358\r
2023-09-24,73.52066569095041\r
2023-09-27,73.52066569095041\r
2023-09-29,73.52066569095041\r
2023-10-02,59.78744409807179\r
2023-10-04,59.78744409807179\r
2023-10-07,55.41454430744067\r
2023-10-09,60.90087805547045\r
2023-10-12,57.72147993701452\r
`;export{r as default};
