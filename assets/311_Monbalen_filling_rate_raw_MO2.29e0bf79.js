const n=`date,value\r
2017-01-26,67.65011373962024\r
2017-01-29,67.65011373962024\r
2017-02-15,58.94248894429624\r
2017-02-18,58.94248894429624\r
2017-02-25,65.41807120843707\r
2017-03-07,52.798240135455785\r
2017-03-17,48.886489959400244\r
2017-03-27,67.65011373962024\r
2017-03-30,65.41807120843707\r
2017-04-06,72.22433011939941\r
2017-04-09,65.41807120843707\r
2017-05-16,33.115786190520055\r
2017-05-19,33.115786190520055\r
2017-05-26,63.22277024466207\r
2017-06-05,63.22277024466207\r
2017-06-25,76.9452366198546\r
2017-07-03,69.91887438982427\r
2017-07-05,81.8126565921953\r
2017-08-04,89.38812689477153\r
2017-08-07,89.38812689477153\r
2017-08-14,97.29231465198538\r
2017-08-17,91.98635863351696\r
2017-08-19,100.0\r
2017-08-22,100.0\r
2017-08-24,100.0\r
2017-08-27,72.22433011939941\r
2017-08-29,72.22433011939941\r
2017-09-03,63.22277024466207\r
2017-10-08,65.41807120843707\r
2017-10-11,65.41807120843707\r
2017-10-13,65.41807120843707\r
2017-10-16,65.41807120843707\r
2017-10-18,65.41807120843707\r
2017-10-23,45.122523504350795\r
2017-10-28,50.8239058105329\r
2017-10-31,50.8239058105329\r
2017-11-02,50.8239058105329\r
2017-11-07,50.8239058105329\r
2017-11-15,46.98601989533871\r
2017-11-17,52.798240135455785\r
2017-11-20,50.8239058105329\r
2017-11-22,63.22277024466207\r
2017-11-25,63.22277024466207\r
2017-11-27,50.8239058105329\r
2017-12-05,46.98601989533871\r
2018-02-10,36.36066591395756\r
2018-04-21,58.94248894429624\r
2018-04-26,58.94248894429624\r
2018-05-06,41.506566295205104\r
2018-05-11,74.56645828367066\r
2018-05-19,72.22433011939941\r
2018-05-21,72.22433011939941\r
2018-05-26,45.122523504350795\r
2018-06-20,58.94248894429624\r
2018-06-23,58.94248894429624\r
2018-06-25,69.91887438982427\r
2018-06-28,69.91887438982427\r
2018-07-03,89.38812689477153\r
2018-07-08,69.91887438982427\r
2018-07-10,79.36064323461189\r
2018-07-15,81.8126565921953\r
2018-07-18,81.8126565921953\r
2018-07-20,81.8126565921953\r
2018-07-23,61.064234719910736\r
2018-07-25,61.064234719910736\r
2018-07-30,74.56645828367066\r
2018-08-02,74.56645828367066\r
2018-08-04,50.8239058105329\r
2018-08-12,50.8239058105329\r
2018-08-19,72.22433011939941\r
2018-08-22,72.22433011939941\r
2018-08-27,72.22433011939941\r
2018-09-03,63.22277024466207\r
2018-09-08,94.6210944226226\r
2018-09-11,94.6210944226226\r
2018-09-16,72.22433011939941\r
2018-09-18,79.36064323461189\r
2018-09-23,74.56645828367066\r
2018-09-26,74.56645828367066\r
2018-09-28,74.56645828367066\r
2018-10-03,63.22277024466207\r
2018-10-06,63.22277024466207\r
2018-10-23,54.809466170954316\r
2018-11-17,61.064234719910736\r
2018-11-20,61.064234719910736\r
2018-11-22,61.064234719910736\r
2018-11-27,48.886489959400244\r
2018-12-17,61.064234719910736\r
2018-12-25,61.064234719910736\r
2019-01-16,69.91887438982427\r
2019-01-24,69.91887438982427\r
2019-02-15,38.03885382887422\r
2019-02-18,38.03885382887422\r
2019-02-20,50.8239058105329\r
2019-02-23,50.8239058105329\r
2019-02-25,46.98601989533871\r
2019-03-05,74.56645828367066\r
2019-03-07,74.56645828367066\r
2019-03-12,69.91887438982427\r
2019-03-22,65.41807120843707\r
2019-03-25,65.41807120843707\r
2019-03-27,72.22433011939941\r
2019-03-30,72.22433011939941\r
2019-04-09,63.22277024466207\r
2019-05-01,61.064234719910736\r
2019-05-06,61.064234719910736\r
2019-05-11,61.064234719910736\r
2019-05-14,61.064234719910736\r
2019-05-16,61.064234719910736\r
2019-05-31,38.03885382887422\r
2019-06-08,38.03885382887422\r
2019-06-13,38.03885382887422\r
2019-07-05,91.98635863351696\r
2019-07-08,91.98635863351696\r
2019-07-10,91.98635863351696\r
2019-07-13,91.98635863351696\r
2019-07-15,91.98635863351696\r
2019-07-23,100.0\r
2019-07-25,67.65011373962024\r
2019-08-02,61.064234719910736\r
2019-08-04,84.30125550315569\r
2019-08-09,84.30125550315569\r
2019-08-14,89.38812689477153\r
2019-08-17,89.38812689477153\r
2019-08-22,76.9452366198546\r
2019-08-24,79.36064323461189\r
2019-08-29,79.36064323461189\r
2019-09-03,86.82641911357169\r
2019-09-06,86.82641911357169\r
2019-09-11,79.36064323461189\r
2019-09-13,86.82641911357169\r
2019-09-16,86.82641911357169\r
2019-09-18,86.82641911357169\r
2019-09-21,81.8126565921953\r
2019-10-08,54.809466170954316\r
2019-10-11,54.809466170954316\r
2019-10-13,54.809466170954316\r
2020-01-06,46.98601989533871\r
2020-01-11,56.857557682535685\r
2020-01-14,56.857557682535685\r
2020-01-16,48.886489959400244\r
2020-01-19,48.886489959400244\r
2020-01-21,48.886489959400244\r
2020-02-05,52.798240135455785\r
2020-02-15,67.65011373962024\r
2020-02-20,54.809466170954316\r
2020-02-23,63.22277024466207\r
2020-03-21,52.798240135455785\r
2020-03-24,52.798240135455785\r
2020-03-29,52.798240135455785\r
2020-03-31,52.798240135455785\r
2020-04-03,52.798240135455785\r
2020-04-05,67.65011373962024\r
2020-04-08,48.886489959400244\r
2020-04-10,81.8126565921953\r
2020-04-13,81.8126565921953\r
2020-04-15,65.41807120843707\r
2020-04-18,65.41807120843707\r
2020-04-25,81.8126565921953\r
2020-05-20,46.98601989533871\r
2020-05-25,69.91887438982427\r
2020-05-28,69.91887438982427\r
2020-05-30,58.94248894429624\r
2020-06-02,58.94248894429624\r
2020-06-14,69.91887438982427\r
2020-07-09,74.56645828367066\r
2020-07-12,74.56645828367066\r
2020-07-14,97.29231465198538\r
2020-07-19,65.41807120843707\r
2020-07-24,74.56645828367066\r
2020-07-27,72.22433011939941\r
2020-07-29,74.56645828367066\r
2020-08-03,63.22277024466207\r
2020-08-06,81.8126565921953\r
2020-08-08,67.65011373962024\r
2020-08-11,65.41807120843707\r
2020-09-02,54.809466170954316\r
2020-09-05,54.809466170954316\r
2020-09-07,54.809466170954316\r
2020-09-10,54.809466170954316\r
2020-09-12,56.857557682535685\r
2020-09-15,56.857557682535685\r
2020-09-17,56.857557682535685\r
2020-09-30,89.38812689477153\r
2020-10-17,58.94248894429624\r
2020-10-30,58.94248894429624\r
2020-11-21,46.98601989533871\r
2020-11-26,46.98601989533871\r
2020-11-29,46.98601989533871\r
2021-01-10,33.115786190520055\r
2021-01-18,33.115786190520055\r
2021-02-14,58.94248894429624\r
2021-02-17,58.94248894429624\r
2021-02-19,63.22277024466207\r
2021-02-24,58.94248894429624\r
2021-02-27,72.22433011939941\r
2021-03-01,52.798240135455785\r
2021-03-04,72.22433011939941\r
2021-03-09,52.798240135455785\r
2021-03-21,46.98601989533871\r
2021-03-24,46.98601989533871\r
2021-03-29,46.98601989533871\r
2021-03-31,74.56645828367066\r
2021-04-03,56.857557682535685\r
2021-04-05,74.56645828367066\r
2021-04-08,74.56645828367066\r
2021-04-13,61.064234719910736\r
2021-04-15,72.22433011939941\r
2021-04-23,69.91887438982427\r
2021-05-30,52.798240135455785\r
2021-06-09,52.798240135455785\r
2021-06-14,65.41807120843707\r
2021-06-19,65.41807120843707\r
2021-07-19,52.798240135455785\r
2021-07-22,52.798240135455785\r
2021-08-23,58.94248894429624\r
2021-08-26,58.94248894429624\r
2021-08-28,72.22433011939941\r
2021-08-31,72.22433011939941\r
2021-09-05,48.886489959400244\r
2021-09-07,48.886489959400244\r
2021-09-12,63.22277024466207\r
2021-09-15,63.22277024466207\r
2021-09-17,63.22277024466207\r
2021-09-22,63.22277024466207\r
2021-10-12,52.798240135455785\r
2021-10-15,52.798240135455785\r
2021-10-17,72.22433011939941\r
2021-10-20,72.22433011939941\r
2021-10-27,48.886489959400244\r
2021-11-06,46.98601989533871\r
2021-11-09,43.29602926923567\r
2021-11-11,69.91887438982427\r
2021-11-19,56.857557682535685\r
2021-12-11,89.38812689477153\r
2021-12-14,89.38812689477153\r
2021-12-16,89.38812689477153\r
2021-12-19,89.38812689477153\r
2021-12-21,89.38812689477153\r
2022-01-25,13.54568672668239\r
2022-02-09,11.576438270275736\r
2022-02-24,67.65011373962024\r
2022-02-27,67.65011373962024\r
2022-03-01,67.65011373962024\r
2022-03-06,67.65011373962024\r
2022-03-09,46.98601989533871\r
2022-03-26,56.857557682535685\r
2022-04-05,100.0\r
2022-04-10,100.0\r
2022-04-15,97.29231465198538\r
2022-04-30,69.91887438982427\r
2022-05-05,69.91887438982427\r
2022-05-08,69.91887438982427\r
2022-05-10,69.91887438982427\r
2022-05-15,36.36066591395756\r
2022-05-30,72.22433011939941\r
2022-07-04,48.886489959400244\r
2022-07-07,48.886489959400244\r
2022-07-12,48.886489959400244\r
2022-07-14,48.886489959400244\r
2022-07-19,79.36064323461189\r
2022-07-22,79.36064323461189\r
2022-07-24,100.0\r
2022-08-01,100.0\r
2022-08-03,100.0\r
2022-08-06,74.56645828367066\r
2022-08-08,89.38812689477153\r
2022-08-11,89.38812689477153\r
2022-08-13,72.22433011939941\r
2022-08-28,81.8126565921953\r
2022-08-31,81.8126565921953\r
2022-09-05,81.8126565921953\r
2022-09-12,22.93302884518682\r
2022-09-15,22.93302884518682\r
2022-09-20,22.93302884518682\r
2022-09-22,22.93302884518682\r
2022-10-07,13.54568672668239\r
2022-10-12,13.54568672668239\r
2022-10-15,13.54568672668239\r
2022-10-22,8.907517819215066\r
2022-11-06,16.783375668959494\r
2022-11-11,16.783375668959494\r
2022-11-16,15.66637432608382\r
2022-12-11,22.93302884518682\r
2022-12-16,22.93302884518682\r
2023-01-10,58.94248894429624\r
2023-01-15,58.94248894429624\r
2023-01-18,58.94248894429624\r
2023-01-20,58.94248894429624\r
2023-02-04,56.857557682535685\r
2023-02-09,69.91887438982427\r
2023-02-12,69.91887438982427\r
2023-02-14,58.94248894429624\r
2023-02-17,65.41807120843707\r
2023-02-19,54.809466170954316\r
2023-02-27,58.94248894429624\r
2023-03-01,67.65011373962024\r
2023-03-09,65.41807120843707\r
2023-04-20,41.506566295205104\r
2023-05-30,43.29602926923567\r
2023-06-02,43.29602926923567\r
2023-06-04,43.29602926923567\r
2023-06-07,43.29602926923567\r
2023-06-14,54.809466170954316\r
2023-06-24,54.809466170954316\r
2023-07-14,81.8126565921953\r
2023-07-19,81.8126565921953\r
2023-07-22,81.8126565921953\r
2023-08-08,86.82641911357169\r
2023-08-11,86.82641911357169\r
2023-08-13,86.82641911357169\r
2023-08-18,86.82641911357169\r
2023-08-23,89.38812689477153\r
2023-08-26,89.38812689477153\r
2023-08-31,91.98635863351696\r
2023-09-07,81.8126565921953\r
2023-09-10,81.8126565921953\r
2023-09-15,81.8126565921953\r
2023-10-02,63.22277024466207\r
2023-10-05,63.22277024466207\r
2023-10-07,67.65011373962024\r
2023-10-10,67.65011373962024\r
2023-10-12,61.064234719910736\r
2023-10-15,69.91887438982427\r
2023-11-26,45.122523504350795\r
`;export{n as default};
