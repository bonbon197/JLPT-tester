/*
 * Particle drill sentences and the reference guide.
 * Sentence row: [level, sentence with ＿ as the blank, answer, English, explanation, [optional acceptable alternatives]]
 * Progress is keyed by the sentence text, so only append / edit with care.
 */
window.DATA = window.DATA || {};

window.DATA.particles = [
  // ---------- N5 ----------
  [5, "私＿日本人です。", "は", "I am Japanese.", "は marks the topic of the sentence."],
  [5, "毎朝、コーヒー＿飲みます。", "を", "I drink coffee every morning.", "を marks the direct object of the verb."],
  [5, "明日、学校＿行きます。", "へ", "I'll go to school tomorrow.", "へ (read 'e') shows direction of movement. に also works for destinations.", ["に"]],
  [5, "図書館＿本を読みます。", "で", "I read books at the library.", "で marks the place where an action happens."],
  [5, "友達＿映画を見ました。", "と", "I watched a movie with a friend.", "と means 'together with' a person."],
  [5, "七時＿起きます。", "に", "I get up at seven.", "に marks a specific point in time."],
  [5, "東京＿大阪まで新幹線で行きます。", "から", "I go from Tokyo to Osaka by shinkansen.", "から is the starting point ('from')."],
  [5, "家から学校＿歩いて行きます。", "まで", "I walk from home to school.", "まで is the end point ('to / until')."],
  [5, "電車＿会社に行きます。", "で", "I go to the office by train.", "で marks the means of transportation."],
  [5, "これは私＿本です。", "の", "This is my book.", "の links two nouns, here showing possession."],
  [5, "田中さんはビールを飲みます。私＿ビールを飲みます。", "も", "Mr. Tanaka drinks beer. I drink beer, too.", "も means 'also / too' and replaces は/が/を."],
  [5, "あそこ＿犬がいます。", "に", "There is a dog over there.", "に marks the location where something exists (あります/います)."],
  [5, "私は犬＿好きです。", "が", "I like dogs.", "好き takes が for the thing that is liked."],
  [5, "水＿ください。", "を", "Water, please.", "を marks the object that you are asking for."],
  [5, "日本語＿分かります。", "が", "I understand Japanese.", "分かる takes が for the thing understood."],
  [5, "私は先生＿本をもらいました。", "に", "I received a book from my teacher.", "With もらう, the giver is marked by に (から also works).", ["から"]],
  [5, "犬＿猫のほうが好きです。", "より", "I like cats more than dogs.", "より means 'than' in comparisons."],
  [5, "雨＿降っています。", "が", "It's raining.", "が marks the subject of a natural phenomenon."],
  [5, "鉛筆＿書きます。", "で", "I write with a pencil.", "で marks the tool or instrument."],
  [5, "これはいくらです＿。", "か", "How much is this?", "か at the end of a sentence turns it into a question."],
  [5, "いい天気です＿。", "ね", "It's nice weather, isn't it?", "ね at the end seeks the listener's agreement."],
  [5, "私は毎日六時＿八時まで勉強します。", "から", "I study from six to eight every day.", "から ... まで means 'from ... to ...'."],
  [5, "友達＿手紙を書きます。", "に", "I write a letter to a friend.", "に marks the recipient (indirect object)."],
  [5, "父は銀行＿働いています。", "で", "My father works at a bank.", "働く is an action, so the place is marked by で."],
  [5, "りんご＿みかんを買いました。", "と", "I bought apples and mandarins.", "と connects nouns in a complete list ('and')."],
  [5, "何＿食べますか。", "を", "What will you eat?", "Even with the question word 何, the object is marked by を."],
  [5, "誰＿来ましたか。", "が", "Who came?", "Question words acting as the subject take が (not は)."],
  [5, "駅＿前に銀行があります。", "の", "There's a bank in front of the station.", "の links nouns: 駅の前 = 'the front of the station'."],
  [5, "寝る前＿、歯をみがきます。", "に", "I brush my teeth before bed.", "In 〜前に, に marks the time reference."],
  [5, "母は料理＿上手です。", "が", "My mother is good at cooking.", "上手 / 下手 / 好き / 分かる mark their target with が."],
  [5, "私は一人＿行きます。", "で", "I'll go by myself.", "で marks the manner / number of people doing the action: 一人で, 二人で."],
  [5, "兄＿私より背が高いです。", "は", "My older brother is taller than I am.", "は marks the topic being compared.", ["が"]],

  // ---------- N4 ----------
  [4, "先生＿ほめられました。", "に", "I was praised by the teacher.", "In passive sentences, に marks the person who performs the action.", ["から"]],
  [4, "彼女＿会うのは三年ぶりです。", "に", "It's been three years since I saw her.", "会う takes に for the person you meet."],
  [4, "この本は子ども＿読めます。", "でも", "Even a child can read this book.", "でも = 'even'. It suggests an extreme example."],
  [4, "ビール＿ワインなどがあります。", "や", "There are things like beer and wine.", "や lists examples non-exhaustively (and so on)."],
  [4, "一日＿三回、薬を飲みます。", "に", "I take medicine three times a day.", "に after a period marks frequency per that period."],
  [4, "財布に百円＿ありません。", "しか", "I only have 100 yen in my wallet.", "しか + negative = 'nothing but; only'."],
  [4, "駅の近く＿大きい公園があります。", "に", "There's a big park near the station.", "に marks the location of existence."],
  [4, "毎日、三時間＿勉強します。", "も", "I study as many as three hours every day.", "A quantity + も stresses that the amount is large."],
  [4, "医者＿なりたいです。", "に", "I want to become a doctor.", "なる takes に for what someone becomes."],
  [4, "駅＿友達を待っています。", "で", "I'm waiting for a friend at the station.", "で marks the place of an ongoing action."],
  [4, "日本語は難しい＿、おもしろいです。", "が", "Japanese is difficult, but interesting.", "が can be a conjunction meaning 'but'."],
  [4, "彼は走る＿が速いです。", "の", "He is fast at running.", "の turns a verb phrase into a noun phrase."],
  [4, "母＿作った料理はおいしいです。", "が", "The food my mother made is delicious.", "Inside a modifying clause, the subject is marked by が (or の).", ["の"]],
  [4, "電気＿つけたまま寝ました。", "を", "I slept with the light on.", "を marks the object of つける."],
  [4, "この仕事は二時間＿終わります。", "で", "This job will be finished in two hours.", "で marks an amount of time, money, or people needed."],
  [4, "このクラスには女の学生＿います。", "だけ", "There are only female students in this class.", "だけ means 'only / just'."],
  [4, "友達＿相談しました。", "に", "I consulted a friend.", "相談する takes に (or と) for the person consulted.", ["と"]],
  [4, "京都＿行ったことがありますか。", "へ", "Have you been to Kyoto?", "へ / に mark the destination of 行く.", ["に"]],
  [4, "ここから空港まで一時間＿かかります。", "ぐらい", "It takes about an hour from here to the airport.", "ぐらい / くらい = 'about; approximately'.", ["くらい"]],

  // ---------- N3 ----------
  [3, "日本の歴史＿、レポートを書きました。", "について", "I wrote a report about Japanese history.", "について = 'about; concerning'."],
  [3, "人＿、考え方は違います。", "によって", "Ways of thinking differ depending on the person.", "によって = 'depending on; by'."],
  [3, "私＿、家族は一番大切です。", "にとって", "For me, family is the most important thing.", "にとって = 'for (someone); from the viewpoint of'."],
  [3, "彼は通訳＿、会議に参加しました。", "として", "He attended the meeting as an interpreter.", "として = 'as (a role)'."],
  [3, "子ども＿、やさしく話してください。", "に対して", "Please speak gently to children.", "に対して = 'toward; in regard to (a person/thing)'."],
  [3, "天気予報＿、明日は雨です。", "によると", "According to the weather forecast, it will rain tomorrow.", "によると = 'according to (a source)'."],
  [3, "彼女は歌＿、ダンスも上手です。", "だけでなく", "She is good not only at singing but also dancing.", "だけでなく〜も = 'not only ~ but also ~'."],
  [3, "この道＿まっすぐ行くと、駅があります。", "を", "If you go straight along this road, you'll find the station.", "を marks the path along which you move."],
  [3, "先生＿勧められて、留学しました。", "に", "I studied abroad because my teacher recommended it.", "に marks the agent in a passive sentence.", ["から"]],
  [3, "彼＿ことは、よく知りません。", "の", "I don't know much about him.", "N + の + こと = 'matters concerning N'."],
  [3, "時間＿あれば、手伝います。", "が", "If I have time, I'll help.", "ある marks the thing that exists with が."],
  [3, "日本に来て＿、三年になります。", "から", "It's been three years since I came to Japan.", "〜てから = 'since / after doing'."],
  [3, "彼＿違って、私は静かな性格です。", "と", "Unlike him, I have a quiet personality.", "〜と違って = 'unlike ~'."],
  [3, "試験＿向けて、毎日勉強しています。", "に", "I'm studying every day toward the exam.", "〜に向けて = 'aimed at; in preparation for'."],
  [3, "雨＿かかわらず、試合は行われます。", "に", "The match will be held regardless of the rain.", "〜にかかわらず = 'regardless of ~'."],
  [3, "駅＿近いので、この部屋は便利です。", "に", "This room is convenient because it's close to the station.", "近い takes に for the reference point (が is also possible).", ["が"]],
  [3, "病気＿、会社を休みました。", "で", "I took a day off work because of illness.", "で can mark the cause or reason."]
];

/*
 * Reference guide for the particle cheat-sheet.
 * {p, name, lv, uses: [[usage, japanese example, english]]}
 */
window.DATA.particleGuide = [
  { p: "は", name: "Topic marker (pronounced “wa”)", lv: 5, uses: [
    ["Marks what the sentence is about", "私は学生です。", "I am a student."],
    ["Contrast ('as for X ...')", "肉は食べますが、魚は食べません。", "I eat meat, but (as for) fish I don't."]
  ]},
  { p: "が", name: "Subject marker", lv: 5, uses: [
    ["New information / emphasized subject", "誰が来ましたか。", "Who came?"],
    ["Target of 好き, 分かる, できる, ほしい, 上手", "私は犬が好きです。", "I like dogs."],
    ["Natural phenomena / existence", "雨が降っています。", "It's raining."]
  ]},
  { p: "を", name: "Object marker", lv: 5, uses: [
    ["Direct object", "パンを食べます。", "I eat bread."],
    ["Path moved through", "道を歩きます。", "I walk along the road."],
    ["Place left", "家を出ます。", "I leave the house."]
  ]},
  { p: "に", name: "Time / target / location of existence", lv: 5, uses: [
    ["Specific time", "七時に起きます。", "I wake up at seven."],
    ["Destination or target", "学校に行きます。", "I go to school."],
    ["Location of existence", "机の上に本があります。", "There is a book on the desk."],
    ["Recipient / giver", "友達に手紙を書きます。", "I write a letter to a friend."],
    ["Purpose of going", "買い物に行きます。", "I go shopping."],
    ["Agent in passive", "先生にほめられました。", "I was praised by the teacher."]
  ]},
  { p: "で", name: "Place of action / means / reason", lv: 5, uses: [
    ["Place where an action happens", "図書館で勉強します。", "I study at the library."],
    ["Means or tool", "バスで行きます。", "I go by bus."],
    ["Cause or reason", "病気で休みました。", "I was absent due to illness."],
    ["Total amount", "全部で千円です。", "It's 1,000 yen in total."]
  ]},
  { p: "へ", name: "Direction (pronounced “e”)", lv: 5, uses: [
    ["Direction of movement", "日本へ行きます。", "I'm going to Japan."]
  ]},
  { p: "と", name: "With / and / quotation", lv: 5, uses: [
    ["Together with", "友達と映画を見ます。", "I watch a movie with a friend."],
    ["Complete list 'and'", "パンと卵を買いました。", "I bought bread and eggs."],
    ["Quotation / thought", "明日は雨だと思います。", "I think it will rain tomorrow."]
  ]},
  { p: "も", name: "Also / even", lv: 5, uses: [
    ["Also / too", "私も行きます。", "I'm going too."],
    ["Emphasizing a large amount", "三時間も待ちました。", "I waited as long as three hours."]
  ]},
  { p: "の", name: "Possession / modification / nominalizer", lv: 5, uses: [
    ["Possession / belonging", "私の本です。", "It's my book."],
    ["Noun modifies noun", "日本語の先生", "Japanese-language teacher"],
    ["Turns a verb into a noun", "泳ぐのが好きです。", "I like swimming."]
  ]},
  { p: "から", name: "From / because", lv: 5, uses: [
    ["Starting point", "九時から始まります。", "It starts from nine."],
    ["Reason (clause + から)", "寒いから、窓を閉めます。", "Because it's cold, I'll close the window."],
    ["After doing", "食べてから、行きます。", "I'll go after eating."]
  ]},
  { p: "まで", name: "Until / up to", lv: 5, uses: [
    ["End point in time or space", "五時まで働きます。", "I work until five."]
  ]},
  { p: "より", name: "Than", lv: 5, uses: [
    ["Comparison", "電車よりバスのほうが安いです。", "Buses are cheaper than trains."]
  ]},
  { p: "や", name: "And (non-exhaustive list)", lv: 4, uses: [
    ["Examples among others", "りんごやみかんを買いました。", "I bought apples, mandarins, and so on."]
  ]},
  { p: "か", name: "Question / or", lv: 5, uses: [
    ["Question marker", "学生ですか。", "Are you a student?"],
    ["Or", "コーヒーか紅茶を飲みます。", "I'll drink coffee or tea."]
  ]},
  { p: "ね／よ", name: "Sentence-final particles", lv: 5, uses: [
    ["ね: seeking agreement", "いい天気ですね。", "Nice weather, isn't it?"],
    ["よ: informing / emphasizing", "あの店は安いですよ。", "That shop is cheap, you know."]
  ]},
  { p: "だけ", name: "Only / just", lv: 4, uses: [
    ["Limit", "水だけ飲みます。", "I only drink water."]
  ]},
  { p: "しか", name: "Nothing but (with negative)", lv: 4, uses: [
    ["Only (always followed by a negative)", "百円しかありません。", "I only have 100 yen."]
  ]},
  { p: "でも", name: "Even / or something", lv: 4, uses: [
    ["Even", "子どもでも分かります。", "Even a child understands."],
    ["Suggestion ('why not … or something')", "お茶でも飲みませんか。", "Would you like some tea or something?"]
  ]},
  { p: "ぐらい／くらい", name: "About / approximately", lv: 4, uses: [
    ["Approximate amount", "一時間ぐらいかかります。", "It takes about an hour."]
  ]},
  { p: "について", name: "About / concerning", lv: 3, uses: [
    ["Topic", "歴史について調べます。", "I research (about) history."]
  ]},
  { p: "として", name: "As (a role)", lv: 3, uses: [
    ["Role / capacity", "留学生として来ました。", "I came as an international student."]
  ]},
  { p: "によって", name: "Depending on / by", lv: 3, uses: [
    ["Variation", "国によって違います。", "It differs by country."],
    ["Agent / means", "地震によって、電車が止まりました。", "Trains stopped due to the earthquake."]
  ]},
  { p: "にとって", name: "For (someone)", lv: 3, uses: [
    ["Viewpoint", "私にとって大切です。", "It's important to me."]
  ]},
  { p: "に対して", name: "Toward / in contrast to", lv: 3, uses: [
    ["Target of an attitude or action", "客に対して失礼です。", "That's rude toward customers."]
  ]},
  { p: "によると", name: "According to", lv: 3, uses: [
    ["Information source", "ニュースによると、雨が降るそうです。", "According to the news, it's going to rain."]
  ]}
];
