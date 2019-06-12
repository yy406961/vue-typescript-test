/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory)
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'))
    } else {
        // Browser globals
        factory({}, root.echarts)
    }
})(this, function(exports, echarts) {
    var log = function(msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg)
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded')
        return
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return
    }
    echarts.registerMap('zhuzhou', {
        type: 'FeatureCollection',
        features: [
            {
                type: "Feature",
                id: "430203",
                properties: {
                    name: "芦淞区",
                    cp: [
                        113.155169,
                        27.827246
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@@KO@UIICGDMLECC@CAC@@AACBABABA@ABAACAAAACACCA@CBABEBABA@@@@@@@IFSPUFI@CUG@KA@@GA@FEVCPAD@F@DFLHDJBVDNFFLFZ@TENGJSNIFFD@B@B@D@@BB@@D@BBB@DDTMFEHKBEDGFIBEB@FBB@LAPFLDJDP@L@PGBBPNLDD@B@@@@@HHHFBBB@NHPHLJB@BBD@FAHA@@@@BBB@@BBBBB@AB@D@B@FBFBB@F@B@B@@@BBAD@DAD@D@DAB@@BBB@F@D@B@B@@BB@D@BA@A@C@C@C@A@AB@DAFAFAD@B@D@DADAFADCDCFADAD@B@B@D@DBD@BBB@@@D@DADCFCFCFCBAB@BAB@A@@C@C@A@@BC@QDS@MAK@C@A@CAC@ABA@CB@BCAC@E@AAA@AA@A@A@C@A@C@AAC@@@@@A@@A@AAA@CBABC@AAC@C@A@CB@@ABCBA@C@A@A@CACCI@@AACE@@@@AAC@A@A@A@A@A@@@@@A@CECCAAAAA@@@AAI@A@ABAB@BADAHABABA@C@ABCBCBGHEBEBC@@AAAAA@ABC@CA@AAAACACACAC@CAC@A@ADCBA@ABAD@FAB@BA@AB@@AB@@CBCAA@CAAACCA@AAAACAC@CBC@AB@@ABCDABCDA@@BABADCBADCDCDEBA@GB@@GDMD@@BCBAFE"
                    ],
                    encodeOffsets: [
                        [
                            115939,
                            28441
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430204",
                properties: {
                    name: "石峰区",
                    cp: [
                        113.11295,
                        27.871945
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@AC@@@ABA@@@A@A@@@A@E@C@AACA@@AB@@ABC@@@@B@@@@@@@@@@@@@A@@AAA@AAC@AB@B@B@B@@AAAAAEAGGEIIKCCMBE@ABAH@DED@AOEECIKYS@AA@@@@@@AB@@@AA@@A@@A@@B@@A@@@@@@AA@@@@@@@@@A@AB@@A@@@A@@BA@@@CBA@AA@@A@@AABA@A@AAAAA@@@@@AB@@@@AA@A@@AB@@AA@@BA@@A@@@ABA@@A@AAAA@@AAA@@A@@@AA@@A@@@@ABA@AAA@@@ABA@@@@CAA@@@@@@@A@@@@A@@@A@@@@@AA@A@@A@@A@@A@A@@AAAC@AA@@@@@@@@C@@@AA@@AB@@AA@@@@@A@@CAAAAA@A@@B@B@BA@@@E@@AAA@@CAAAACAAAA@A@@@@@@A@A@A@ABA@@AA@@E@A@AA@@ABABA@@@AA@@AE@G@AAA@@@AB@@@B@B@BAB@BCHCFCFA@A@@AC@@BA@@@A@@AAAAC@C@A@A@AAAA@AECAAEAEAA@A@AAA@AACCA@AAC@@@AA@@@C@A@AECC@EBM@MCI@[F]FSBOAWMAF@@@@@BEJ@B@F@D@B@@A@CB@@AB@D@B@BBBBDDDHF@B@@BNBPJRHJDHDDBJBPDNHRPJFFDAB@@@BBBBBBBB@@BA@CDADEDCDCDCDABADABAD@D@B@B@BCBCBA@ABCDADCBABA@A@ABABCDABAD@DAF@D@FBB@@BBD@D@B@D@DBB@BBB@B@@@BCBC@ABA@ADBD@DABCB@B@B@BBBBBD@D@BBBBBBADADAB@BB@BBD@FBH@BBDDBFBDBDBBB@DBDB@B@DABADC@ABAB@@@DAB@DABABA@@DBBBD@D@BABAB@D@@BBB@FBFBDDB@@@BB@B@B@@@@@@B@@@@@@@@@B@@AB@@A@@A@@AA@@@@@B@@AB@BAB@B@B@BB@@@@@B@@@B@BB@B@@@@BABGFAB@B@DBDBBBBBBDBD@DBD@B@BA@ABAB@H@F@DAB@BAF@FBDBF@HAD@B@BBFN@HBBBB@ABCDCBABADBD@FBB@@@@CBE@AHAL@DA@ABABAB@BBBBDHBBFHB@FA@@B@BE@A@A@A@@"
                    ],
                    encodeOffsets: [
                        [
                            115975,
                            28686
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430223",
                properties: {
                    name: "攸县",
                    cp: [
                        113.345774,
                        27.000071
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@AAB@DAJABA@AACAAAAC@C@GACA@@AAOIIGEEAG@IBKBKHKHKDIFGHAJAHDHDLFL@ZEJGHILINCP@ZBJDJDFDLHDHFFJBH@FCLAFDDDHHLFPFLBJATBJFNBRDNBJCFAHAH@FDFDJFLDPFPDLFHDHDDADCAOAM@GAI@MAIESEKGOEMEIAEAC@C@EFGJ@LCFEBGAICGKIGMESCSAOAMEMEKOOKMKMIOGQGSKOOOQOMOKKEIAG@CACKCMAO@IAMCEGAICMEAMCM@I@QASGIIGGMGKGQEMAM@ICICIGOUOSQMMGKEMCKEMISEGAIAOCICGGIIIIOIMIOKEGAM@KCK@GECK@EFEDGAAGAKEECEMCK@ODQJKHIJE@GDC@E@CCEAKAGCACBADADBB@BABA@AAECCGIECI@[AGBCAI@K@GEEIEI@GAIDKBEBCDCDA@CDCACCAC@GCCI@IBMBI@CEEGAE@EAACBEDKFKDOFMFIDEJCD@L@F@HEFIDGBECEOMCAWBQDGDQDMFKFK@KEKGKMGOCMEOEGGCI@KDIBKN@FBFHDFH@L@HMNEFCH@JBDJHBDABC@MAE@GBA@EBEBEDAF@FAFILGLEDKJCFAH@HA@ADCFAFBDDBH@DAFADDBFBH@FAFCB@BDDH@FBFDFBBFBF@FAFADBDDDJBH@BBFDHJDBFB@F@@DFDF@BCDIBEAC@E@G@G@G@CAEAE@G@CFADCDCD@BEHGFIDA@@F@F@FBFADEDADDH@FBF@BBD@JBBBDAD@B@BABABABC@ABABA@BBB@BDBBB@@D@BBDB@BBD@FBD@FBB@@B@B@B@DABA@ABAAC@ABABABABC@A@A@C@A@C@A@@BA@@@@BB@@BBB@@BB@DABADAB@D@F@@A@A@AAC@CAI@GBA@A@ABBD@DBF@B@D@B@BABA@AB@BB@BB@BB@AB@BABABBD@BABAB@DCB@BAD@BBD@B@BABABA@CBABCDCBADABABC@A@CBA@ADAFADAD@BAB@@A@A@A@ABA@AB@D@B@DBD@B@D@B@DBDBB@BBBAD@BAB@BBD@BD@BBDBD@BBB@@BBBB@BBB@D@D@BBB@BBBBB@D@D@B@@B@@@B@B@B@B@BB@BBBAD@DADADADABCDAFCHAD@B@DDBBBDDBBBFBDBBBB@D@B@@B@@@B@B@B@@B@B@B@BABA@ABCB@B@B@@BBB@B@D@B@D@D@B@BB@BBB@BBBB@@@BBB@B@DB@BBD@B@D@@@@B@DAB@D@DADBDBBB@B@BADADAFABAFAF@D@B@BAD@@BB@@DBD@DBB@D@D@D@DABAD@DAB@B@DA@ABABAD@@AFABADAD@DABAB@@ABABABADABABAB@BADABCDCBCBAB@B@B@D@B@@@B@BCDABADCFADABC@A@C@CAC@CAEAC@C@ABABC@BBB@BDBBBB@B@BBLDRFN@H@FCHABCBCBA@KAAACBABCBABA@A@A@A@ABCFCHCF@DBD@BBBBBBB@D@D@B@D@D@D@BABAFABADCBC@EBA@@B@B@@@BDDDDBB@BBBB@BBD@B@FBBBDBDBDBD@DBD@JBD@F@B@B@DAD@FBFDBBB@BBB@B@F@D@BBD@BDHLDBFNDDDDHJBBB@DBD@BBDBFJBBBDBBDDBBDDDBN@JBHBFJDBDG@E@KDIDGH@L@LDLFLDLAJ@LDFDHPDPBPHLJLJFLBHCHGJAJAJ@LCPGFEJELCL@JAJELGFCHAHBJDFAFCHGHELARBVDLFHLHLDNBL@LHPNFNDLGLEJENEHEHEDCFCH@JB@B@AF@F@D@D@B@DAB@J@H@"
                    ],
                    encodeOffsets: [
                        [
                            116352,
                            28068
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430202",
                properties: {
                    name: "荷塘区",
                    cp: [
                        113.162548,
                        27.833036
                    ],
                    childNum: 2
                },
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [
                        [
                            "@@@@@@@@A@@@@@AD@BA@@BB@BD@B@D@F@B@@@B@B@@AB@B@@BDBA@@BBBB@AB@@@@EAGAC@C@A@@@E@C@@@AAA@@"
                        ],
                        [
                            "@@AAAA@AA@AA@@@@GBEBC@AAA@KIOGMGA@AAGEGG@@@@A@C@KCOMAAOHK@O@ICKCOEKBA@EAA@AFEJCHAFGLEFSNBBB@BBB@B@FBFBBBFD@BBBBBB@B@D@D@BBBB@@@B@@AB@@BD@@@BEBEDGDADA@ABA@A@@@A@@B@@BB@B@HBF@@BB@@B@BABA@@BBB@F@@@BB@@AB@B@B@B@B@@@@B@B@BBDBBBBB@DB@BB@@@F@@ABA@A@@@@BBBBBDB@@@B@@@@BB@@BA@@BB@@D@@@@@@@@@BBD@BB@BB@B@@@@BB@@@@BBB@@@@B@@@B@@@@@@B@@@@@@BB@D@@B@BA@@B@BBB@BA@@@@@BB@@B@@@BB@BB@@BBBBB@@@AB@B@@@BB@@AB@@BA@@BB@B@@B@@A@@B@@@@BBBB@B@BABBB@@@BB@@BAB@D@@AB@@@B@@@BA@@B@B@@@@@@@@BB@@@@@@@BA@@@@BB@@@BB@@A@@B@@@@B@@BZTJLFDPF@BFC@CBGBAF@NADDJLFJHHFBBBBB@BA@A@A@A@@BBD@BBBB@@@@@@@BBB@@@@@@@B@@@@@@@@@@@@@@B@@@@AB@@@D@DBD@DBH@@BBBBBDBCHK@C@AC@@@@ABCDCAA@@AAA@@A@AB@B@DA@ABC@CACAC@EAA@ABABADCBADABABA@A@A@ACAACCA@AAAAC@A@C@C@CBC@AAA@A@@AAA@ABCBABA@A@AAAAACAC@A@ABADCFEDCBCDE@ABA@A@A@A@A@CB@@A@ABAB@BBD@B@D@B@D@DADABABA@ABA@ABA@A@@@AA@C@C@C@ABA@CAA@C@C@AAA@A@@A@A@@BABAD@B@BABABCBC@C@ABC@A@CAEBC@C@CAAACAA@@AAAAACAE@CAA@C@C@A"
                        ]
                    ],
                    encodeOffsets: [
                        [
                            [
                                115976,
                                28667
                            ]
                        ],
                        [
                            [
                                115993,
                                28533
                            ]
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430211",
                properties: {
                    name: "天元区",
                    cp: [
                        113.136252,
                        27.826909
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@JETMHIFM@SEYEKMEUCIAGCEK@C@EBCDOFU@ENSP[FQ@OGQQeEIMYCSEOGM@GBKHOBWD[BMN]BGGKKKECKHC@ECIU][umOEK@ED@FBFBPCHCHOHEHBJHFnLFH@HAFSVajKRB@B@BBDH@BB@BBD@D@BBLBDB@D@B@FABABADCFEDCBCDABCBA@AD@BDH@BDBB@BBD@@DABADABCBABCBG@C@C@KGCACCAAA@C@A@@BA@@BBDAB@BCDABADABABAD@B@HBF@BBBBBB@DDBBBBB@BBDBD@BBDDBDDDBDBBBDBB@BHHDJFJ@@D@F@HAFBD@JBF@BAB@B@B@DHFFBFDL@BA@CB@BEFQLMDKDEDAHDHFHDNAPELGNGPIJA@C@A@AAAA@@A@A@CDCBABC@ABAD@D@JBDBDBBHHHLNLPLNJJHDDLBXNPBTA^E\\EJ@NDN@FAD@"
                    ],
                    encodeOffsets: [
                        [
                            115843,
                            28517
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430221",
                properties: {
                    name: "株洲县",
                    cp: [
                        113.146176,
                        27.705844
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@BA@ACC@@ACBA@CDEBCBA@C@A@A@AACBA@ABAFC@A@@@AAA@@AAA@ABABE@A@A@AAA@AA@AAA@A@AACAAACECACCAAACC@A@ABABC@A@ACGCACCAAA@AAA@C@ABEBABC@C@A@EA@AAA@AAE@ACAC@A@C@AB@@@D@B@@CBQA@@@@C@OA@@@@@@QOISEM@SESIMOMOMQKGMCK@IBKJGJEFCBI@GBMFMFEFIDGDGFEHCFEBECIECGACEEG@ECIEIKICGAOHGFGJELALDNFNFJDH@LEHKDMFSJKHGNIRALAPBP@JCNKJODIHODUHQ@ICAEIGAIAM@CACCAACCAAACAAEICAAAC@CAA@AAGICCCCEMCAGKACC@AAC@E@A@A@AAA@AAECEAC@CBA@A@E@C@IAC@CAC@CACACAAAEAA@C@AAA@AA@AAACCCC@A@@@A@AB@FAD@DABCBABEBA@A@C@C@C@A@C@CAAAAAA@AAC@CDEDGDEBAB@B@B@B@BADABADABBLBB@DADABADG@E@GEMCQAK@A@AAAAAACA@AAA@C@CAC@E@E@E@E@C@C@E@E@C@E@CBC@CBC@C@A@ACCAACCAEAAAC@CBA@CBABABCBADCDADABCDC@CB@BABABABA@A@AAAAACAECCAECEACAEAAAA@CACAE@EAEAEAC@EACAAAAA@CAE@C@C@@BAB@D@B@BAB@BADCDABCD@B@@@@D@@BBBA@@BABABCBCDC@ABABADC@@@C@A@A@CBCBABABBBB@D@BB@@@B@BABADEFADCDADAB@B@BDBB@@BABC@@@@B@BB@BDBB@BBB@BAB@BCBC@A@A@@BABABCB@BCBADABADABABCBC@A@C@CBC@ABABABABC@ABABAB@DADAD@D@D@D@D@BADABABADB@@@B@BBBBBB@B@DBD@D@BABABADCBCBCBCBC@E@A@@B@@@D@@BD@DAD@B@DAB@DBBBB@@B@BBFBDBBDBB@BABABCBABA@ABAB@BADABABA@CDCBCDADADAD@DAB@BBB@BBBBB@DBBADMFMFMLGHALAP@JDT@F@FCBCB@B@D@BADABABA@@@A@CBAD@DAB@J@J@B@FBDAB@BAB@@EAAAEACBA@ABAB@BBBCBABA@@BBBBB@FBBFFHDBBDBBBBB@BBD@DBF@BKFK@GHELFNFPBP@B@@@B@NANCLCNBNPNBB@BDAB@B@D@BBBBBBDFBDB@HBBB@@DDBF@BBDBBD@BBB@@@BD@B@B@BABABCBGBCB@B@@@D@D@B@DAB@B@B@D@@BBDBDBDBB@B@BA@@FEDCJEDAD@LQbiTUBE@GEGmKGEAIFGPGDGDGAOAE@EFCL@PFvn^\\JVFDD@LGFDLLHLAHM^ANC\\AXGPAL@HHNFPDTNZFJRfHR@PERO\\MTHB@@LBH@DVJ@VETOJE@@@@@@B@BAFABADAB@DDDBBBBBBDAB@BABABABBD@BD@DBD@FDNKHCJDVJP@@LEFABAD@@NCHC@@HAB@FADCDCBCDABCBA@AB@DCBADCBA@@BAD@DAD@DBBBBBB@DDBBDBB@DBDA@@BA@@BAB@@ABA@EBCBAB@DABCB@D@DBD@DBDBDBBBBBB@@E"
                    ],
                    encodeOffsets: [
                        [
                            116017,
                            28419
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430281",
                properties: {
                    name: "醴陵市",
                    cp: [
                        113.507157,
                        27.657873
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@B@@CAC@AACAA@ABCBA@ABABCBAD@D@DBBAFCHCJAJEFIHYFSBOBOAQGQWOUSSMSUOOGIIEEGEGBGBKCKCK@@IIKIMKIGIIGQEOEKOQMKOKQIKEECIIEGIOCWBSESAOGQKWMQMW@OBKHMHELCJABADCD@FAD@FAFBFHDFBDBDBBB@B@@AAIBA@@BAB@B@B@@ABG@CECACACAE@@BAFEB@@CA@CCA@CAAACGACGG@A@A@A@CBCEACAK@AAAACE@@CAE@CAA@AADGFIHOAMAS@I@A@AB@BABC@C@ABABADADAB@F@FBF@H@FADABA@C@CACA@G@I@A@CBA@C@C@E@E@@B@AIAG@EDCDGFGFMFIFKFKHMCMEGO@KAKCMGKGKKEUCQAKBGFGHEDEBICGAGBEDKHIFIBK@KDIFEFOHKDI@IBIBGHGDKAIEIKGKAOCOGOECKCI@KBKCKEKCK@G@CHCJ@L@FCH@JGRCVGPCJIPMLIDO@OAKBQBMJGHILETCNGLKFG@ICMEMEKCKBIFEHGHBPDHLJFJDJ@FFHDFHBFDDJAFEFGDEFCHCHEJEFENAN@HAJEDIFIHAL@JDLHNRLPNPNJNFT@TFNJTRP@@@@@@PBD@@@@@RBDA@@@A@C@@BAD@B@D@DB@BBF@BBB@BFBB@D@D@BAFABAD@B@BBB@BBDDDBDH@B@BADAB@B@BDDBBDBBDFDBDBBBD@B@BBB@BBBB@BBB@B@F@BABAB@BB@@BB@B@@@BEDAB@BABBD@B@B@B@DABADCF@DABBD@@DD@BAB@F@DAD@BBBBB@BD@FAFAHGDADABAD@B@BABABGBC@ABABAB@J@BB@@B@BBBBDDDFB@@@@@B@B@B@B@B@D@BB@@@@DFBB@@DJBD@D@B@B@DABAD@BA@@D@B@DBD@BADAB@DBB@B@BB@@@@@D@BBD@B@D@B@B@B@@BBB@B@FBDADA@@DAB@BBD@D@B@DBL@NCT@RAD@@@B@D@DB@FDFBBBF@DBH@F@HBD@FBHA@@D@HAD@B@DBB@FBFBFBDB@BBBBB@DAD@DBB@DBF@DAF@F@B@DAB@D@BBD@@B@@BDBDBBBBBDHD@F@F@FAH@FA@@D@D@F@D@D@DBDBBBDB@@@DAB@D@D@B@DBFBDBDB@BDDBHDDBDBF@DBBBDBBB@BBD@D@DBDBBDBDBB@F@F@HAD@F@F@DBFBD@DBD@D@DBBFDD@D@FAF@B@D@BBB@@B@D@DAD@D@DBFBDBDBD@F@FAD@D@D@FBD@FBDBD@B@DAFABABC@ABCBC@C@A@C@C@C@C@ABC@AAAA@A@AAC@@AA@@A@C@AAAAA@C@A@CBC@ABCBABA@A@A@AAAAC@A@A@ABEBCBCBEBABABAB@DAFADCDABAB@BAB@BB@BBFBFBFBB@F@BCF@B@BBBB@HBB@@@FABAB@DCDCDADADADCDAFCDAF@DADADA@ABCBABCBABADABABABA@A@C@ABAB@DADAD@B@B@B@@D@DBBBBBBB@BBB@DADCFCDCFCF@FAFAF@DADADADAF@DAFBDBDDBBBBDBD@DBDDDBBBDBBBBB@BB@DBDAH@BA"
                    ],
                    encodeOffsets: [
                        [
                            116460,
                            28554
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430224",
                properties: {
                    name: "茶陵县",
                    cp: [
                        113.546509,
                        26.789534
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@@G@CDCDCDCACACCACAACCCAAECGCECGGCCBI@CCC@CDE@CACCACEAGEAECAC@G@CBE@EACCCDGBC@CBCAE@ADG@A@A@@A@K@C@CAE@C@GGAEACCACCACACEGACACCE@GAEEC[[CACCCCACBE@CBEFEBCDC@@HABKBEBCBEDCBCBCAEAEBCBCBC@CAEAC@EBE@EDCBGAEAC@GBCBE@E@IBC@CBCFEBK@C@E@E@CAEACBE@G@E@IAG@CDGDGDCBCCEAAGCCCECACCCCIBC@CDEBCDCBA@ABMEKEIGEGCQAQ@I@OEQEIGEGCMCQIUIMKKICICMAGBGAICICKGGEOEGAI@I@ICOGKEKCICICO@GDIDIJIFIBGCIIAGAECECCEAEAIJGFCACCICE@EBIFCDC@E@@@EAA@@D@BFH@B@DG@IAECI@CBCFADAJCHEJ@DAD@@ADELAPDLDHBJAFMVGFMFEBSDOBOAMCQGIGIQEIECOKECMCGBIDG@EAKAEAE@MAGBCBCHAFEPKVADGDGFGBGHAHDHLDF@FFBF@D@LDFBFFF@JANCJGHGJMHCFBJGFAFCDABQ^CH@FBDFFRDNFDHDDBHFHBFHNHRBFJZDHDLBLEDGDIHGJELAFGLGDMLDFAFCHEJGFE@K@C@IDCFEJENCPELCLAFBDFBF@HBFF@DAJAN@JDJHDD@DBBDCD@DCBCDADAFCLBJ@HFJFJHFL@J@DBHA\\BJ@FDHJDDBF@BABABA@CACBABBDHDLBFBDDF@D@HCF@JILGRIPCL@NDDFFFBLBHHBFCFEL@FD@HDL@LBNFHPLNJPJJJJJHHJDPDJBHBTFNJLFNDLFNHRNPTPVJHJDJDN@NBRFLHNHHHJJTHRBJ@N@NDFBDNBJFHNDJBP@NBLDAG@G@K@ECK@KFIJGHAJ@JFFHFFHFJADODQBUBSDQBKDIDGFCJ@JAJ@JCDGBI@IDCD@J@JBH@FCFOBI@KBOHGHEJIHIDIDGPAVCJCF@FB"
                    ],
                    encodeOffsets: [
                        [
                            116656,
                            27608
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430225",
                properties: {
                    name: "炎陵县",
                    cp: [
                        113.776884,
                        26.489459
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@HBDBHDDADABGBGBI@EBEDCD@FADAHADCBCBCBGBEFELCF@FBFBF@FADAD@HAH@NBF@D@F@DBDBFDDBDCF@F@DCBCFBBDD@DAH@D@D@FBD@F@DCDCJEFCDEFCF@DCACACAC@EDEFAHAJ@HAHCFCDABAZBL@HCJEF@BBF@DCDDHBH@FAHBHAFAHBDA@A@@@A@@@@@@@@@A@@@@@@@@@@B@@@@A@@@@@CACAC@C@CACCECCCCACAACC@A@EBC@AACAAACAAACAAACACCCAABC@ECGAG@G@GCKCE@@AECCCCCCC@@ABC@C@C@ABAB@BBD@D@B@DAFAB@DBBBBBB@BA@@HFDBH@LAD@@EOMGIAA@C@CACCCCCCC@CACBE@EACCEAABCBCBAACAA@C@A@C@AACAA@ABADABCAC@E@CAAACACECCBE@ACCBAFCDG@GCACCCACAAACGECECCC@E@CAAC@CCECECEC@GA@C@CBEDCBCDADABC@CAEAEBABG@G@@DCHEDC@ACEGCAACCCEAEBEBE@E@@BEFA@CAAEAAAECEEGEACAC@CCCACAE@EBEBGBGDCBAFEEAECEAECAAC@C@CAECEAEGGCCAC@EAEAECACCAEEAABEBE@EAECCECCACCBC@CBC@I@EEGECCAGCE@CAE@CCCACEAEAEAECCEAGA@A@@A@IGK@K@CA@KCMECEEKKCECKEGECIEICMEMESEGKGGCCCKAGCCSKIEKEEAG@G@EFAFCJCLEDGDGBGAAAIGIKAKF[@EACAECCEEGEGGMKUMMCGBEBGDGFMNCFGDEHEDADADAHWbCFAJDJFNBLBJ@FFFLFJFRFJHDDFPFLDNBLBP@TCRENEJAF@NAHAFEHIFKFKHOHQHQDIHGLEFEFGDGJCHA@CBCAGCEAEBGBGD[JGBGD@LDHBJAD@F@FBHAFEHMFINCDAFAVAREFAHANELGFCDAD@D@FDL@FCLBFDDHHFDDBBDZ\\BDBJ@JERGRIJILGJ@F@DDDDBHFCJBJDHBDJbFAF@JDDDDBHEJIFBFBDDDFBFBHJJHDJAJEJIJCHCP@JDJDLDLFPHJDJ@J@HBPFHFLHJDJDHBHANBJDJDLLJNJVDRDNFHJHRFPFJ@R@RBHDHFFJFLAN@BABCDADCF@DADDJDDBDFDDDHDBBDF"
                    ],
                    encodeOffsets: [
                        [
                            116601,
                            27293
                        ]
                    ]
                }
            }
        ],
        UTF8Encoding: true
    })
})