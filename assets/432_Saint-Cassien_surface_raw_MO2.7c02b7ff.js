const n=`date,value\r
2017-02-16,2821100\r
2017-02-19,2813700\r
2017-02-26,2782400\r
2017-03-01,2822800\r
2017-03-08,2836600\r
2017-03-11,2895100\r
2017-03-21,2864400\r
2017-03-28,3139500\r
2017-03-31,3139500\r
2017-04-07,3180300\r
2017-04-10,3180000\r
2017-04-17,3170600\r
2017-04-20,3214300\r
2017-04-30,3246400\r
2017-05-07,3235100\r
2017-05-10,3237200\r
2017-05-17,3236200\r
2017-05-27,3261700\r
2017-05-30,3268400\r
2017-06-06,3268400\r
2017-06-09,3222400\r
2017-06-19,3273600\r
2017-06-26,3271400\r
2017-06-29,3279800\r
2017-07-01,3301800\r
2017-07-04,3286400\r
2017-07-06,3286300\r
2017-07-11,3274800\r
2017-07-14,3280900\r
2017-07-26,3187900\r
2017-07-29,3187900\r
2017-07-31,3198800\r
2017-08-03,3198800\r
2017-08-05,3128300\r
2017-08-08,3173200\r
2017-08-13,3113500\r
2017-08-15,3113000\r
2017-08-18,3066000\r
2017-08-20,3066000\r
2017-08-23,3013500\r
2017-08-25,3019200\r
2017-08-30,3033100\r
2017-09-02,2944700\r
2017-09-04,2883000\r
2017-09-14,2828500\r
2017-09-17,2785900\r
2017-09-19,2785900\r
2017-09-22,2786800\r
2017-10-07,2401600\r
2017-10-09,2399600\r
2017-10-12,2413100\r
2017-10-14,2415600\r
2017-10-17,2426500\r
2017-10-19,2435100\r
2017-10-22,2447200\r
2017-10-24,2443600\r
2017-10-27,2447400\r
2017-10-29,2429400\r
2017-11-01,2411900\r
2018-03-13,2878100\r
2018-03-16,2912900\r
2018-03-21,2970300\r
2018-03-23,2925600\r
2018-04-17,3175900\r
2018-04-20,3188100\r
2018-04-22,3156800\r
2018-04-25,3170900\r
2018-04-27,3174900\r
2018-04-30,3186500\r
2018-06-01,3252300\r
2018-06-09,3296700\r
2018-06-14,3275900\r
2018-06-16,3279600\r
2018-06-19,3280700\r
2018-06-21,3267500\r
2018-06-24,3272400\r
2018-06-26,3267000\r
2018-06-29,3284900\r
2018-07-01,3297200\r
2018-07-04,3294100\r
2018-07-06,3280600\r
2018-07-09,3278600\r
2018-07-14,3276000\r
2018-07-19,3278300\r
2018-07-21,3248100\r
2018-07-24,3216800\r
2018-07-26,3200400\r
2018-07-29,3200300\r
2018-07-31,3192700\r
2018-08-03,3172300\r
2018-08-05,3168500\r
2018-08-08,3173400\r
2018-08-10,3155900\r
2018-08-15,3133400\r
2018-08-18,3086700\r
2018-08-20,3098700\r
2018-08-23,3107200\r
2018-08-25,3048000\r
2018-08-28,2950200\r
2018-08-30,2930000\r
2018-09-02,2922900\r
2018-09-04,2922900\r
2018-09-07,2962700\r
2018-09-12,2841600\r
2018-09-14,2784900\r
2018-09-19,2803600\r
2018-09-22,2621600\r
2018-09-24,2632200\r
2018-09-27,2559300\r
2018-09-29,2556300\r
2018-10-02,2503300\r
2018-10-04,2493200\r
2018-10-09,2475100\r
2018-10-12,2463000\r
2018-10-14,2501600\r
2018-10-19,2524300\r
2018-10-22,2524100\r
2018-10-24,2393700\r
2018-11-01,2432200\r
2018-11-03,2396400\r
2019-02-11,2387000\r
2019-02-14,2235900\r
2019-02-16,2153500\r
2019-02-19,2214200\r
2019-02-21,2163900\r
2019-03-01,2140100\r
2019-03-03,2170800\r
2019-03-08,2207300\r
2019-03-11,2226700\r
2019-03-13,2216200\r
2019-03-16,2245000\r
2019-03-18,2261900\r
2019-03-21,2321900\r
2019-03-23,2323000\r
2019-03-26,2347300\r
2019-03-28,2364900\r
2019-03-31,2437200\r
2019-04-02,2470800\r
2019-04-05,2457400\r
2019-04-07,2506400\r
2019-04-10,2506500\r
2019-04-15,2665100\r
2019-04-17,2661600\r
2019-04-20,2660600\r
2019-04-22,2733100\r
2019-04-27,2914000\r
2019-04-30,2894900\r
2019-05-02,3050700\r
2019-05-05,3059800\r
2019-05-07,3059800\r
2019-05-10,3110400\r
2019-05-12,3133200\r
2019-05-15,3163000\r
2019-05-30,3384200\r
2019-06-01,3380500\r
2019-06-04,3292000\r
2019-06-06,3292500\r
2019-06-11,3292200\r
2019-06-19,3371500\r
2019-06-21,3358500\r
2019-06-24,3329900\r
2019-06-26,3267700\r
2019-06-29,3306100\r
2019-07-01,3277200\r
2019-07-04,3264800\r
2019-07-06,3256900\r
2019-07-11,3251900\r
2019-07-14,3310400\r
2019-07-16,3240300\r
2019-07-19,3183900\r
2019-07-21,3174900\r
2019-07-24,3206100\r
2019-07-26,3170300\r
2019-07-29,3178000\r
2019-07-31,3158500\r
2019-08-03,3180500\r
2019-08-05,3165200\r
2019-08-08,3180500\r
2019-08-10,3122600\r
2019-08-15,3097200\r
2019-08-18,3136900\r
2019-08-20,3108300\r
2019-08-23,3096600\r
2019-08-25,3076200\r
2019-08-28,3090500\r
2019-08-30,3050700\r
2019-09-02,2950100\r
2019-09-04,2948300\r
2019-09-07,2953100\r
2019-09-12,2856600\r
2019-09-14,2854500\r
2019-09-17,2908200\r
2019-09-19,2908600\r
2019-09-24,2695500\r
2019-09-27,2868800\r
2019-09-29,2836500\r
2019-10-02,2677200\r
2019-10-04,2677200\r
2019-10-07,2751100\r
2019-10-14,2655000\r
2019-10-17,2786300\r
2019-10-19,2730100\r
2019-10-27,2590900\r
2019-10-29,2590900\r
2019-11-06,2704300\r
2019-11-08,2704300\r
2019-11-13,2702200\r
2019-11-16,2816100\r
2020-02-09,2857500\r
2020-02-11,2816000\r
2020-02-14,2767900\r
2020-02-16,2718600\r
2020-02-19,2717900\r
2020-02-21,2776100\r
2020-02-24,2804000\r
2020-02-26,2763800\r
2020-03-07,2944200\r
2020-03-10,2898200\r
2020-03-12,2743000\r
2020-03-15,2743000\r
2020-03-17,2743000\r
2020-03-20,2837300\r
2020-03-22,2837300\r
2020-04-04,2916000\r
2020-04-06,2892800\r
2020-04-09,2885100\r
2020-04-11,2898900\r
2020-04-14,2863400\r
2020-04-24,3034700\r
2020-04-26,2957400\r
2020-04-29,3133500\r
2020-05-04,3204300\r
2020-05-06,3194100\r
2020-05-09,3206900\r
2020-05-11,3266900\r
2020-05-14,3272400\r
2020-05-21,3239000\r
2020-05-24,3243900\r
2020-05-26,3127500\r
2020-05-31,3128700\r
2020-06-03,3149400\r
2020-06-05,3140000\r
2020-06-08,3320500\r
2020-06-10,3122800\r
2020-06-15,3174900\r
2020-06-23,3373400\r
2020-06-25,3373400\r
2020-06-28,3370600\r
2020-06-30,3349400\r
2020-07-03,3352100\r
2020-07-05,3328800\r
2020-07-08,3327800\r
2020-07-10,3318700\r
2020-07-15,3291900\r
2020-07-20,3306900\r
2020-07-23,3326300\r
2020-07-30,3213500\r
2020-08-02,3294800\r
2020-08-04,3187500\r
2020-08-07,3211900\r
2020-08-09,3147800\r
2020-08-12,3174600\r
2020-08-14,3177100\r
2020-08-17,3200100\r
2020-08-19,3187300\r
2020-08-22,3203800\r
2020-08-24,3212000\r
2020-08-27,3233800\r
2020-09-01,3238100\r
2020-09-03,3203600\r
2020-09-06,3205200\r
2020-09-08,3170100\r
2020-09-13,3153300\r
2020-09-16,3083200\r
2020-09-18,3063700\r
2020-09-21,3061400\r
2020-09-23,3059500\r
2020-09-26,3011100\r
2020-09-28,2949600\r
2020-10-01,2824700\r
2020-10-03,2778900\r
2020-10-08,2861400\r
2020-10-13,2929900\r
2020-10-16,2991600\r
2020-10-18,3033900\r
2020-10-21,3047100\r
2020-10-28,3005900\r
2020-11-02,2812900\r
2020-11-05,2796900\r
2020-11-07,2793800\r
2020-11-10,2806600\r
2020-11-12,2806600\r
2020-11-15,2877500\r
2020-11-17,2777600\r
2020-11-20,2861000\r
2020-11-22,2853000\r
2021-02-08,3096600\r
2021-02-10,3107500\r
2021-02-15,3081200\r
2021-02-18,3081200\r
2021-02-20,3054400\r
2021-02-23,3131500\r
2021-02-25,3108800\r
2021-02-28,3149700\r
2021-03-02,3117500\r
2021-03-05,3157900\r
2021-03-07,3145900\r
2021-03-10,3152100\r
2021-03-12,3121900\r
2021-03-15,2962900\r
2021-03-17,2960900\r
2021-03-20,2947400\r
2021-03-22,2909600\r
2021-03-25,2910400\r
2021-03-27,2909800\r
2021-03-30,2918600\r
2021-04-01,2913900\r
2021-04-04,2906400\r
2021-04-06,2920400\r
2021-04-09,2902200\r
2021-04-16,2892500\r
2021-05-26,3234300\r
2021-05-29,3234300\r
2021-05-31,3333000\r
2021-06-03,3294600\r
2021-06-05,3310700\r
2021-06-08,3307800\r
2021-06-10,3314900\r
2021-06-13,3310600\r
2021-06-15,3306200\r
2021-06-18,3304700\r
2021-06-25,3316400\r
2021-06-28,3322400\r
2021-06-30,3312500\r
2021-07-03,3312300\r
2021-07-05,3259100\r
2021-07-08,3290200\r
2021-07-10,3264800\r
2021-07-13,3255200\r
2021-07-15,3255200\r
2021-07-18,3251900\r
2021-07-20,3270900\r
2021-07-23,3249800\r
2021-07-25,3242400\r
2021-07-28,3242400\r
2021-07-30,3248600\r
2021-08-02,3241000\r
2021-08-07,3227600\r
2021-08-09,3229000\r
2021-08-12,3232100\r
2021-08-14,3166100\r
2021-08-17,3133200\r
2021-08-19,3149500\r
2021-08-22,3147300\r
2021-08-24,3147300\r
2021-08-27,3143000\r
2021-08-29,3174500\r
2021-09-06,3091200\r
2021-09-08,3091200\r
2021-09-11,3066200\r
2021-09-13,2915600\r
2021-09-18,2837100\r
2021-09-21,2850800\r
2021-09-23,2696800\r
2021-09-28,2645000\r
2021-10-01,2627500\r
2021-10-06,2585100\r
2021-10-11,2564400\r
2021-10-13,2489800\r
2021-10-16,2507600\r
2021-10-18,2446800\r
2021-10-23,2386400\r
2021-10-26,2402600\r
2021-10-28,2377400\r
2021-11-02,2532500\r
2021-11-05,2617000\r
2022-02-08,2804300\r
2022-02-10,2858200\r
2022-02-13,2897200\r
2022-02-15,2892100\r
2022-02-18,2938500\r
2022-02-20,2933200\r
2022-02-23,2970800\r
2022-02-25,2973900\r
2022-02-28,3042000\r
2022-03-02,3039200\r
2022-03-07,3089200\r
2022-03-10,3089200\r
2022-03-22,3144700\r
2022-03-25,3165400\r
2022-04-01,3255300\r
2022-04-04,3253900\r
2022-04-09,3284400\r
2022-04-11,3284400\r
2022-04-14,3269600\r
2022-04-16,3290500\r
2022-04-19,3290500\r
2022-04-24,3271300\r
2022-04-26,3273900\r
2022-04-29,3243100\r
2022-05-01,3243100\r
2022-05-04,3253500\r
2022-05-09,3284700\r
2022-05-11,3286500\r
2022-05-14,3276800\r
2022-05-16,3306300\r
2022-05-19,3318400\r
2022-05-21,3304300\r
2022-05-24,3317600\r
2022-05-26,3323200\r
2022-05-29,3309000\r
2022-05-31,3296800\r
2022-06-10,3301200\r
2022-06-13,3301200\r
2022-06-18,3312200\r
2022-06-20,3269300\r
2022-06-25,3234200\r
2022-07-03,3285800\r
2022-07-05,3243400\r
2022-07-08,3231700\r
2022-07-10,3237600\r
2022-07-13,3229100\r
2022-07-15,3212500\r
2022-07-18,3196600\r
2022-07-20,3166900\r
2022-07-23,3168600\r
2022-07-25,3146500\r
2022-07-28,3161300\r
2022-07-30,3082600\r
2022-08-02,3009800\r
2022-08-04,2999200\r
2022-08-07,2998800\r
2022-08-09,2986600\r
2022-08-12,2952400\r
2022-08-14,2924100\r
2022-08-19,2891500\r
2022-08-22,2855900\r
2022-08-24,2868200\r
2022-08-27,2842400\r
2022-08-29,2827300\r
2022-09-01,2824800\r
2022-09-28,2419100\r
2022-10-01,2417400\r
2022-10-03,2417400\r
2022-10-06,2396800\r
2022-10-18,2235100\r
2022-10-26,2235100\r
2022-10-28,2293300\r
2022-10-31,2231200\r
2022-11-02,2231200\r
2022-11-05,2292200\r
2022-11-10,2238700\r
2023-02-08,2751000\r
2023-02-10,2713100\r
2023-02-13,2707000\r
2023-02-15,2664500\r
2023-02-18,2668600\r
2023-02-20,2645400\r
2023-03-05,2776600\r
2023-03-07,2755200\r
2023-03-10,2760000\r
2023-03-12,2747600\r
2023-03-15,2749500\r
2023-03-17,2753300\r
2023-03-20,2767000\r
2023-03-22,2819100\r
2023-03-25,2848700\r
2023-03-27,2822900\r
2023-03-30,2852500\r
2023-04-01,2852500\r
2023-04-04,2834600\r
2023-04-06,2901300\r
2023-04-09,2892200\r
2023-04-14,2905700\r
2023-04-16,2947400\r
2023-04-19,2941500\r
2023-04-24,2904600\r
2023-04-26,2904500\r
2023-05-04,2908700\r
2023-05-06,2928000\r
2023-05-11,2964900\r
2023-05-16,3023000\r
2023-05-24,3019600\r
2023-05-26,3115600\r
2023-06-03,3153100\r
2023-06-23,3326800\r
2023-06-25,3297300\r
2023-06-28,3324400\r
2023-07-03,3341000\r
2023-07-05,3281700\r
2023-07-08,3242600\r
2023-07-10,3265200\r
`;export{n as default};