const r=`date,value\r
2017-03-17,65.89119958615927\r
2017-03-27,66.05174730866432\r
2017-04-03,66.58954798885124\r
2017-04-06,69.67862811876434\r
2017-04-23,66.77206796112802\r
2017-05-03,68.90818080363623\r
2017-05-16,45.266138202867715\r
2017-05-23,70.02296796105597\r
2017-05-26,85.17956209587888\r
2017-06-02,92.02847578985038\r
2017-06-25,86.35885289987556\r
2017-07-02,88.21051108864954\r
2017-07-05,84.30325404390926\r
2017-07-07,90.95439254385724\r
2017-07-17,90.7358663821903\r
2017-08-04,90.86209803790578\r
2017-08-06,91.44326006606337\r
2017-08-11,91.44569509361628\r
2017-08-14,91.36291998853861\r
2017-08-19,94.89226222906612\r
2017-08-21,89.21982095777533\r
2017-08-24,90.4157752535636\r
2017-08-26,87.41860223385939\r
2017-08-29,84.22570753553778\r
2017-09-03,85.97208332011417\r
2017-10-05,80.9622039054162\r
2017-10-08,80.9714415848458\r
2017-10-10,80.03385995292346\r
2017-10-13,79.78127561072804\r
2017-10-15,79.00732809303221\r
2018-04-06,96.24257949059142\r
2018-04-21,88.88763936372494\r
2018-04-23,87.63839792648336\r
2018-04-26,87.15134914191682\r
2018-05-06,84.55019953174875\r
2018-05-11,81.92537804596499\r
2018-05-18,80.78446798616626\r
2018-05-21,80.80292614185639\r
2018-06-22,90.42789094612948\r
2018-06-25,91.35074993059094\r
2018-06-27,91.3556178691011\r
2018-07-02,94.25475903715294\r
2018-07-07,95.54156229530291\r
2018-07-10,96.29985300637216\r
2018-07-12,94.41272492673944\r
2018-07-15,95.22162793593833\r
2018-07-17,95.30342715157781\r
2018-07-20,96.25751897811172\r
2018-07-22,92.96084083644071\r
2018-07-25,93.22833267255007\r
2018-07-27,88.49117375378603\r
2018-07-30,90.2777062982384\r
2018-08-01,89.58391271400791\r
2018-08-04,89.62011600176439\r
2018-08-06,90.2244410885529\r
2018-08-11,90.82810507897324\r
2018-08-16,92.83089687918007\r
2018-08-19,97.12073584469869\r
2018-08-21,92.15304340627854\r
2018-08-26,93.35606129565195\r
2018-08-31,93.37326134538935\r
2018-09-03,94.47199181331781\r
2018-09-08,93.38800534275127\r
2018-09-10,89.11144162215803\r
2018-09-13,89.36200516151636\r
2018-09-18,90.61941264850837\r
2018-09-20,89.7263490358981\r
2018-09-23,90.2559143315388\r
2018-09-25,90.21717871091793\r
2018-09-28,89.87371724479189\r
2018-09-30,89.52117542984065\r
2018-10-03,90.94710465286944\r
2018-10-05,87.2825449978779\r
2019-03-22,84.77154117453331\r
2019-03-24,84.94360786571661\r
2019-03-27,82.70694302485259\r
2019-03-29,83.79389651600941\r
2019-04-01,82.83985026191597\r
2019-04-13,77.8275966301845\r
2019-05-13,61.2890551442194\r
2019-05-16,62.13035366389795\r
2019-05-23,61.40162230349123\r
2019-05-31,72.98073092354367\r
2019-06-02,66.92291688000313\r
2019-06-17,67.48938585603528\r
2019-06-27,67.97872397891102\r
2019-06-30,67.96374325225291\r
2019-07-02,74.3126046939731\r
2019-07-05,84.28915236865568\r
2019-07-07,81.41307452006302\r
2019-07-10,83.81733968155757\r
2019-07-12,83.8009291660006\r
2019-07-15,85.29764601797379\r
2019-07-17,85.21970264134573\r
2019-07-20,87.12273600607035\r
2019-07-22,82.87484128630044\r
2019-07-25,84.90352397747652\r
2019-08-04,80.49399415503305\r
2019-08-09,81.15397973214526\r
2019-08-14,79.34352307883692\r
2019-08-16,80.73833062643708\r
2019-08-21,81.42233455246163\r
2019-08-24,79.00275829592657\r
2019-08-26,77.6347494124504\r
2019-08-29,77.6347494124504\r
2019-08-31,78.8337566815572\r
2019-09-03,78.8771339587717\r
2019-09-05,79.16734345856811\r
2019-09-08,81.63775950452428\r
2019-09-13,76.90157162551228\r
2019-09-15,77.74362577882854\r
2019-09-18,77.23384187297864\r
2019-09-20,76.0365435854303\r
2019-10-03,77.61887715745135\r
2020-03-18,94.9392840626637\r
2020-03-21,94.50657163866468\r
2020-03-28,94.03774393693305\r
2020-03-31,93.10313430210141\r
2020-04-02,92.56390232639131\r
2020-04-05,90.70917331938\r
2020-04-07,89.21018491752956\r
2020-04-10,89.60563392272574\r
2020-04-12,89.60563392272574\r
2020-04-15,89.28246625985422\r
2020-04-25,91.2047642739415\r
2020-05-17,90.76256286299765\r
2020-05-20,91.06617202956404\r
2020-05-22,92.16525986467434\r
2020-05-25,97.60870808280589\r
2020-05-30,97.91705324203906\r
2020-06-21,94.5856319200949\r
2020-06-24,100.0\r
2020-06-26,97.10073920217658\r
2020-06-29,97.11073729943396\r
2020-07-01,98.17307507448191\r
2020-07-04,100.0\r
2020-07-06,99.46512307212458\r
2020-07-09,100.0\r
2020-07-11,99.53838231280784\r
2020-07-14,100.0\r
2020-07-19,100.0\r
2020-07-21,99.57375724414692\r
2020-07-24,99.85948372022297\r
2020-07-26,99.21016208787276\r
2020-07-29,100.0\r
2020-07-31,98.8723366826994\r
2020-08-05,94.57821879647702\r
2020-08-08,98.75396449384502\r
2020-08-10,99.84683342199165\r
2020-08-15,96.1753642857729\r
2020-08-20,96.1355426974161\r
2020-08-25,93.793862220936\r
2020-09-02,91.63571417901677\r
2020-09-04,91.32641193144771\r
2020-09-07,91.53824705031217\r
2020-09-12,91.29721005807532\r
2020-09-14,89.04403452755602\r
2020-09-17,87.94220613099715\r
2021-03-21,87.02977155632888\r
2021-03-23,89.6273574232437\r
2021-03-28,87.43054147899916\r
2021-03-31,88.82751923990432\r
2021-04-02,90.7358663821903\r
2021-04-05,91.07103336253361\r
2021-04-15,91.12937816708306\r
2021-04-17,84.05662297093684\r
2021-05-27,73.32764628486333\r
2021-05-30,73.36746576446863\r
2021-06-01,73.36746576446863\r
2021-06-16,83.6486125965861\r
2021-06-19,83.6486125965861\r
2021-06-26,86.69878811262804\r
2021-07-01,89.27041760020218\r
2021-07-11,85.84648668983421\r
2021-07-19,88.60642964577264\r
2021-07-21,81.22565749254427\r
2021-07-26,83.10594331659838\r
2021-07-29,83.10594331659838\r
2021-08-20,82.54385069141873\r
2021-08-23,82.30877870673066\r
2021-08-25,80.41108528182144\r
2021-08-28,78.67859678837439\r
2021-08-30,79.258844066159\r
2021-09-04,79.2085130395821\r
2021-09-22,64.35567655635163\r
2021-09-24,67.06965846082102\r
2022-03-23,91.47735301973393\r
2022-03-26,93.50107631293825\r
2022-03-28,93.35114724902061\r
2022-04-05,96.2002564231485\r
2022-04-15,92.11884107224367\r
2022-04-17,86.98211423573449\r
2022-04-22,85.57660629589179\r
2022-05-17,84.9011663581221\r
2022-05-20,87.46397514043136\r
2022-05-22,87.46397514043136\r
2022-05-27,89.22704828521137\r
2022-05-30,91.05644970244103\r
2022-06-01,91.44326006606337\r
2022-06-04,91.22665564438702\r
2022-06-06,91.56260960037633\r
2022-06-11,89.94139691036337\r
2022-06-14,88.18893772608786\r
2022-06-16,88.09547969369181\r
2022-06-19,88.090688136636\r
2022-07-06,83.39813879448626\r
2022-07-11,83.29991132676989\r
2022-07-14,81.69107484868593\r
2022-07-16,82.12743766573958\r
2022-07-19,81.29967632409222\r
2022-07-21,81.29967632409222\r
2022-07-24,80.13729004897992\r
2022-07-26,77.66649815961391\r
2022-07-31,77.14336645973432\r
2022-08-03,74.89650053841544\r
2022-08-05,75.82319661029166\r
2022-08-08,73.51576539234289\r
2022-08-10,73.87487900165668\r
2022-08-13,73.36967823363241\r
2022-08-20,78.41194193452668\r
2022-09-12,71.06041674114483\r
2022-09-19,72.5222263635318\r
2022-09-22,68.04936675833648\r
2022-10-04,67.90383471564357\r
2022-10-07,69.68944516415354\r
2022-10-09,69.25733350233612\r
2022-10-12,69.91027238079555\r
2023-03-16,100.0\r
2023-03-28,96.59891182867206\r
2023-04-05,98.26350518145061\r
2023-04-07,98.22582156663144\r
2023-05-27,92.76472943089506\r
2023-05-30,89.75533118699262\r
2023-06-04,90.70674684679831\r
2023-06-24,92.65449598202753\r
2023-06-26,94.0352791073488\r
2023-06-29,94.0352791073488\r
2023-07-06,93.56747178714022\r
2023-07-09,100.0\r
2023-07-11,99.17988862362414\r
2023-07-14,100.0\r
2023-07-16,99.98602506228148\r
2023-07-19,100.0\r
2023-07-31,95.58375901400393\r
2023-08-08,99.10170078609552\r
2023-08-10,99.10170078609552\r
2023-08-13,98.05004788075432\r
2023-08-15,96.65128861023659\r
2023-08-18,96.52660230188562\r
2023-08-20,94.55103950666185\r
2023-08-23,94.9392840626637\r
2023-09-04,95.2984687531931\r
2023-09-07,95.61603256435028\r
2023-09-14,95.59120633552871\r
2023-09-24,91.555300539098\r
2023-09-27,91.85762004347\r
2023-09-29,93.0491497686572\r
2023-10-02,91.81126875652596\r
2023-10-04,91.3410143922498\r
2023-10-07,90.92767151944273\r
2023-10-09,89.78914884495394\r
2023-10-12,88.62564530843477\r
`;export{r as default};
