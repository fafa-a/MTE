const n=`date,value\r
2017-02-15,54.41046883027898\r
2017-02-25,49.75154874530593\r
2017-03-17,59.22827434213441\r
2017-03-27,63.08332726996869\r
2017-04-03,80.02983957620916\r
2017-04-23,84.97379134312831\r
2017-05-16,100.0\r
2017-05-26,74.01161849781471\r
2017-06-02,61.97234662189205\r
2017-06-15,79.41988875189956\r
2017-06-25,72.2416324567391\r
2017-07-05,68.17613787658634\r
2017-07-07,53.88490645118246\r
2017-07-17,63.08332726996869\r
2017-08-11,41.396785845194124\r
2017-08-14,41.396785845194124\r
2017-08-21,56.5322881119761\r
2017-08-24,45.746341793491304\r
2017-08-26,50.77296791691317\r
2017-09-23,32.77519806078477\r
2017-10-05,30.63682498809631\r
2017-10-13,34.084725310066965\r
2017-10-15,39.51772384738915\r
2017-10-18,1.710052281454625\r
2017-11-04,33.64602325957795\r
2017-11-17,32.34308817607676\r
2017-11-22,25.341286424062943\r
2018-02-27,54.937992519426594\r
2018-03-14,65.32800599526847\r
2018-04-18,80.02983957620916\r
2018-04-21,75.79804962266086\r
2018-05-11,59.22827434213441\r
2018-05-26,57.06761388036826\r
2018-06-20,57.06761388036826\r
2018-06-22,47.73277425163837\r
2018-06-27,39.053222018729365\r
2018-07-12,44.277932796349724\r
2018-07-27,50.77296791691317\r
2018-07-30,44.765352763810796\r
2018-08-06,51.28666902516316\r
2018-08-19,36.76258335882602\r
2018-08-26,41.87178694849864\r
2018-09-08,32.34308817607676\r
2018-09-10,37.672441181971216\r
2018-09-25,46.23990064519543\r
2018-09-28,34.52561160666327\r
2018-09-30,44.277932796349724\r
2018-10-05,34.968675697187784\r
2018-10-13,29.797096620886805\r
2018-10-18,29.797096620886805\r
2018-10-20,38.59083708068531\r
2018-10-23,24.561225785725576\r
2018-10-30,25.341286424062943\r
2018-11-14,27.737330868601667\r
2018-11-22,34.968675697187784\r
2018-11-24,36.31087124453433\r
2019-02-05,35.8613117972401\r
2019-02-15,21.16856453917681\r
2019-02-17,30.215837969409442\r
2019-02-20,34.52561160666327\r
2019-02-22,26.52889554184706\r
2019-02-25,18.318443540621438\r
2019-02-27,39.053222018729365\r
2019-03-22,40.923873424961194\r
2019-03-24,31.485507554870694\r
2019-03-27,56.5322881119761\r
2019-03-29,39.9843368130449\r
2019-04-13,50.77296791691317\r
2019-04-18,41.396785845194124\r
2019-05-01,53.88490645118246\r
2019-05-13,52.83968320670457\r
2019-05-23,58.68521391237833\r
2019-05-31,54.41046883027898\r
2019-06-02,51.28666902516316\r
2019-06-17,60.86897973225987\r
2019-06-25,76.39716551304775\r
2019-06-27,44.765352763810796\r
2019-06-30,57.604879550889486\r
2019-07-05,55.46747316753522\r
2019-07-07,57.06761388036826\r
2019-07-10,52.32003122424595\r
2019-07-17,51.802358318735806\r
2019-07-22,52.83968320670457\r
2019-07-25,60.32016128731098\r
2019-08-04,55.998906458753005\r
2019-08-14,52.83968320670457\r
2019-08-24,44.765352763810796\r
2019-08-26,53.88490645118246\r
2019-08-31,43.792569412855094\r
2019-09-03,52.83968320670457\r
2019-09-10,48.23444798394013\r
2019-09-13,48.23444798394013\r
2019-09-15,49.24384002584629\r
2019-09-20,44.277932796349724\r
2019-10-03,39.9843368130449\r
2019-10-13,26.52889554184706\r
2019-11-22,34.52561160666327\r
2019-11-24,30.63682498809631\r
2019-12-04,26.13070108670334\r
2020-01-06,43.309267837780006\r
2020-01-16,53.36130976896537\r
2020-01-18,59.7732581507162\r
2020-01-21,45.746341793491304\r
2020-02-15,60.32016128731098\r
2020-02-20,51.28666902516316\r
2020-02-22,60.32016128731098\r
2020-03-13,81.25512197090492\r
2020-03-18,60.32016128731098\r
2020-03-23,74.01161849781471\r
2020-03-26,75.79804962266086\r
2020-03-28,86.22754041242142\r
2020-03-31,79.41988875189956\r
2020-04-02,80.64158503017262\r
2020-04-05,68.17613787658634\r
2020-04-07,100.0\r
2020-04-10,67.0312733418624\r
2020-04-15,82.48755784150413\r
2020-05-07,59.7732581507162\r
2020-05-17,72.8297949389552\r
2020-05-20,86.22754041242142\r
2020-05-25,84.34957037107382\r
2020-05-27,76.39716551304775\r
2020-05-30,97.16697712317581\r
2020-06-26,77.60083579226439\r
2020-07-04,91.95639614997648\r
2020-07-09,84.34957037107382\r
2020-07-19,100.0\r
2020-07-24,98.48683895737496\r
2020-07-29,90.03103178802183\r
2020-07-31,100.0\r
2020-08-08,81.87044727563897\r
2020-08-20,81.87044727563897\r
2020-08-25,67.0312733418624\r
2020-09-04,78.81173572047192\r
2020-09-09,81.25512197090492\r
2020-09-12,52.32003122424595\r
2020-09-14,64.76400618510955\r
2020-09-17,54.937992519426594\r
2020-11-18,61.419709496646306\r
2020-11-21,61.97234662189205\r
2020-11-28,60.86897973225987\r
2020-12-11,78.81173572047192\r
2020-12-18,52.32003122424595\r
2021-02-14,54.937992519426594\r
2021-02-21,62.52688717936073\r
2021-02-24,73.4197914202912\r
2021-03-01,59.22827434213441\r
2021-03-23,77.60083579226439\r
2021-03-28,86.85706255219178\r
2021-03-31,83.72712244332344\r
2021-04-02,83.10645058530837\r
2021-04-22,85.59978235289542\r
2021-05-05,61.97234662189205\r
2021-05-27,61.419709496646306\r
2021-05-30,100.0\r
2021-06-01,76.99809532573086\r
2021-06-14,93.24866787091091\r
2021-06-16,90.67107705774838\r
2021-06-26,68.75136508617254\r
2021-07-04,80.02983957620916\r
2021-07-19,87.48834582093531\r
2021-07-21,80.64158503017262\r
2021-07-29,34.084725310066965\r
2021-08-10,78.20538366572575\r
2021-08-20,82.48755784150413\r
2021-09-07,78.20538366572575\r
2021-09-22,60.86897973225987\r
2021-09-24,75.79804962266086\r
2021-10-14,74.01161849781471\r
2021-10-19,68.17613787658634\r
2021-10-24,76.99809532573086\r
2021-10-27,70.48818338599257\r
2021-12-21,67.6027727539942\r
2021-12-23,73.4197914202912\r
2022-01-15,63.08332726996869\r
2022-01-25,65.89388627331057\r
2022-02-09,62.52688717936073\r
2022-02-26,58.14408094383426\r
2022-03-06,62.52688717936073\r
2022-03-08,69.32845078499554\r
2022-03-23,69.90739140069367\r
2022-03-26,74.01161849781471\r
2022-04-17,82.48755784150413\r
2022-05-10,76.39716551304775\r
2022-05-15,93.24866787091091\r
2022-05-17,88.7561840303205\r
2022-05-30,80.02983957620916\r
2022-06-01,75.79804962266086\r
2022-06-11,89.3927331579162\r
2022-06-16,75.79804962266086\r
2022-06-21,89.3927331579162\r
2022-06-29,80.64158503017262\r
2022-07-04,78.20538366572575\r
2022-07-06,72.8297949389552\r
2022-07-11,93.89740398880161\r
2022-07-14,81.87044727563897\r
2022-07-16,89.3927331579162\r
2022-07-19,79.41988875189956\r
2022-07-21,63.08332726996869\r
2022-07-24,81.87044727563897\r
2022-08-03,78.20538366572575\r
2022-08-08,75.79804962266086\r
2022-08-10,88.12138728543145\r
2022-08-13,71.65530739992094\r
2022-09-04,69.32845078499554\r
2022-09-12,58.14408094383426\r
2022-09-19,56.5322881119761\r
2022-09-22,51.802358318735806\r
2022-10-04,54.937992519426594\r
2022-10-09,59.7732581507162\r
2022-10-22,54.41046883027898\r
2022-11-11,43.309267837780006\r
2022-12-06,45.25482413907267\r
2022-12-08,41.396785845194124\r
2022-12-28,44.765352763810796\r
2023-01-15,1.3129863737986236\r
2023-02-11,39.053222018729365\r
2023-02-14,39.51772384738915\r
2023-04-05,57.604879550889486\r
2023-04-20,61.419709496646306\r
2023-05-27,83.10645058530837\r
2023-06-14,95.20006292571878\r
2023-06-24,84.97379134312831\r
2023-07-09,99.81354448299332\r
`;export{n as default};