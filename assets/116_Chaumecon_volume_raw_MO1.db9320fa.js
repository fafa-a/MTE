const n=`date,value\r
2017-02-25,11349795.421008445\r
2017-03-14,12188903.135850044\r
2017-03-17,11097554.898358276\r
2017-03-27,11358186.190382905\r
2017-04-03,11162487.623366939\r
2017-04-06,11064314.381154485\r
2017-04-23,12032233.330503844\r
2017-05-16,9534550.810905723\r
2017-05-26,11734910.19238188\r
2017-06-02,11427083.244466562\r
2017-07-05,11179161.238845196\r
2017-07-22,9852923.88175924\r
2017-08-21,7316718.246846191\r
2017-08-29,6913829.210521942\r
2017-10-05,5567940.058609796\r
2017-10-15,5698833.517072981\r
2017-10-18,5550241.952052716\r
2017-11-14,3533002.067627205\r
2017-11-22,3388456.009924085\r
2018-02-25,11595817.190796299\r
2018-02-27,10766933.276180962\r
2018-03-14,10085610.67594451\r
2018-03-24,10437044.661057208\r
2018-04-18,12142334.81559988\r
2018-05-11,12445420.71348791\r
2018-05-18,10921831.350126779\r
2018-06-22,11204190.16937239\r
2018-06-27,12758493.077906398\r
2018-07-07,11736610.507421248\r
2018-07-27,11192507.238545747\r
2018-08-04,10542752.412799016\r
2018-08-06,10074405.322249133\r
2018-08-19,8295566.790194013\r
2018-08-26,7463909.906134256\r
2018-09-08,5313511.944630032\r
2018-09-25,3258579.64576643\r
2018-09-28,3198458.508661939\r
2018-09-30,3169070.4525111374\r
2018-10-05,3154921.65420769\r
2018-10-10,2731750.9100455213\r
2018-10-13,2781519.564448078\r
2018-10-18,2671932.822504748\r
2018-10-20,2638927.935458094\r
2018-10-23,2702250.957659989\r
2018-11-04,2767126.6505667144\r
2018-11-19,3198458.508661939\r
2019-02-15,8496551.8483062\r
2019-02-17,9026468.221898794\r
2019-02-20,9775313.907692114\r
2019-02-22,8791738.66325876\r
2019-02-25,8521996.245182842\r
2019-02-27,8977491.419064872\r
2019-03-19,9935551.544885065\r
2019-03-22,10489032.590953011\r
2019-03-24,9479809.453019213\r
2019-03-29,10341460.769732662\r
2019-04-11,10380300.25913842\r
2019-05-01,9633400.060709147\r
2019-05-13,11329667.612255735\r
2019-05-16,11085916.217941094\r
2019-05-23,10809689.594583986\r
2019-06-02,11896876.051689584\r
2019-06-27,11789368.729881268\r
2019-07-02,11772339.692818237\r
2019-07-05,11731509.855484618\r
2019-07-10,11422036.393035194\r
2019-07-15,10484154.370076396\r
2019-07-17,10748864.305532573\r
2019-07-25,9965810.669282245\r
2019-08-04,8819047.873358289\r
2019-08-14,7204286.65254169\r
2019-08-24,6618647.872508885\r
2019-08-26,6660697.521136587\r
2019-08-31,5291180.090662098\r
2019-09-03,5499799.185579179\r
2019-09-10,5588193.825457219\r
2019-09-13,4555494.263028101\r
2019-09-15,5686072.565384986\r
2019-09-18,5183769.597698784\r
2019-09-20,5570470.183902898\r
2019-10-13,4428873.550241383\r
2020-01-21,7880463.664998896\r
2020-02-07,8374244.424385738\r
2020-02-15,9464192.038119147\r
2020-02-22,9806962.03983438\r
2020-03-28,11169155.884834815\r
2020-03-31,11007896.325057242\r
2020-04-02,10411089.136229666\r
2020-04-05,10445161.01956996\r
2020-04-07,10847568.504480597\r
2020-04-10,12003054.530206222\r
2020-04-15,11748515.448784221\r
2020-04-22,12429761.190113872\r
2020-05-07,12330765.944005968\r
2020-05-10,11296152.767178513\r
2020-05-12,11117518.191418499\r
2020-05-17,12361993.672629768\r
2020-05-20,12726871.499729877\r
2020-05-27,13053352.73061543\r
2020-05-30,13363407.763629789\r
2020-06-24,12865886.436177596\r
2020-07-04,12737408.566927642\r
2020-07-09,12360257.9768804\r
2020-07-19,10903659.651307868\r
2020-07-24,10854161.50569451\r
2020-07-29,9856096.805825477\r
2020-07-31,9093983.803191729\r
2020-08-05,8542973.110859293\r
2020-08-08,7689747.413906747\r
2020-08-20,6787479.354802862\r
2020-08-25,6059419.312087588\r
2020-09-04,4930528.798053658\r
2020-09-09,4205898.438686559\r
2020-09-12,4247854.929050598\r
2020-09-14,4217221.73633918\r
2020-09-17,3995276.336907154\r
2020-11-06,2450726.322939109\r
2020-11-23,2978215.283958707\r
2020-11-28,2607022.069792487\r
2021-02-21,10098422.844346996\r
2021-02-24,11042729.262110109\r
2021-03-01,10197935.770160884\r
2021-03-06,10762004.181159794\r
2021-03-08,11570444.57233213\r
2021-03-23,11469174.7245941\r
2021-03-28,12199261.25274271\r
2021-03-31,11728109.909515489\r
2021-04-02,14251983.75110938\r
2021-04-27,13541104.919522472\r
2021-06-01,12405417.48030131\r
2021-06-14,12709317.409469504\r
2021-06-16,13085293.407129982\r
2021-07-19,11980760.297090895\r
2021-07-21,11931086.278025443\r
2021-09-02,9251263.708366867\r
2021-09-07,8699440.859450815\r
2021-09-22,7839853.8972119\r
2021-09-24,8153807.621156706\r
2021-10-14,8298530.406827769\r
2021-10-19,8346005.360345312\r
2021-10-22,8344520.142136325\r
2021-10-24,8529485.634375265\r
2021-11-11,8048125.279829912\r
2022-01-25,8454709.25385797\r
2022-02-09,8174420.438483476\r
2022-02-26,8770521.40181327\r
2022-03-06,9081693.400234591\r
2022-03-08,9437665.881812602\r
2022-03-23,9611398.615509328\r
2022-03-26,8508521.922404444\r
2022-03-28,9672737.973613147\r
2022-04-17,10058406.247139188\r
2022-04-27,10175431.279201368\r
2022-05-07,11472544.694745224\r
2022-05-15,11768935.057255134\r
2022-06-11,10933401.407495596\r
2022-06-16,11992762.841078414\r
2022-06-19,11975617.809236687\r
2022-06-21,10918526.512084743\r
2022-06-29,10095219.197343\r
2022-07-06,11504578.995482724\r
2022-07-11,10971451.516546723\r
2022-07-14,11187501.748426512\r
2022-07-16,10925136.584916046\r
2022-07-19,11065975.467463901\r
2022-07-24,10443537.547643485\r
2022-08-03,8975962.597589318\r
2022-08-08,8773551.193970809\r
2022-08-10,8548970.25814065\r
2022-08-13,8356404.823534113\r
2022-09-19,6845046.121929315\r
2022-09-22,6502547.854916256\r
2022-10-09,7059160.13118941\r
2022-10-22,6937277.572247875\r
2022-11-13,6648478.676647779\r
2023-02-11,9280679.05237124\r
2023-02-14,9203349.81536276\r
2023-03-01,9918049.791970227\r
2023-04-05,11373295.773400506\r
2023-04-20,12200987.944884818\r
2023-06-01,12252833.77487347\r
2023-06-14,12899409.728702119\r
2023-06-24,13113711.110084068\r
2023-09-02,8812976.256555872\r
2023-09-04,8305941.285471984\r
2023-09-07,8574476.755106019\r
2023-09-24,8386145.874583482\r
2023-10-02,7428421.153891959\r
2023-10-07,7445447.381147297\r
2023-10-09,7309671.047037723\r
`;export{n as default};
