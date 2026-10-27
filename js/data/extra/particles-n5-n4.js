/*
 * Extra particle drill sentences (N5 / N4). Appended to DATA.particles.
 * Row: [level, sentence with ＿ as the blank, answer, English, explanation, [optional acceptable alternatives]]
 */
window.DATA = window.DATA || {};
window.DATA.particles = window.DATA.particles || [];

window.DATA.particles.push(
  // ---------- N5 ----------
  // は / が
  [5, "肉は食べますが、魚＿食べません。", "は", "I eat meat, but I don't eat fish.", "は marks contrast: 'as for meat ... but as for fish ...'."],
  [5, "山田さんは来ましたが、鈴木さん＿来ませんでした。", "は", "Mr. Yamada came, but Mr. Suzuki didn't.", "は sets two topics against each other (contrast)."],
  [5, "これは私の本です。それ＿あなたの本です。", "は", "This is my book. That is your book.", "は marks each topic when two things are compared or contrasted."],
  [5, "象は鼻＿長いです。", "が", "Elephants have long trunks.", "Pattern 'A は B が adjective': は = topic, が = the part being described."],
  [5, "昨日、駅で事故＿ありました。", "が", "There was an accident at the station yesterday.", "が introduces new information (a newly reported event)."],
  [5, "だれ＿窓を開けましたか。", "が", "Who opened the window?", "A question word as the subject takes が."],
  [5, "私は新しいかばん＿ほしいです。", "が", "I want a new bag.", "ほしい marks the thing wanted with が.", ["を"]],
  [5, "兄は車の運転＿できます。", "が", "My older brother can drive a car.", "できる marks the skill or thing that can be done with が."],
  [5, "私は妹＿二人います。", "が", "I have two younger sisters.", "いる / ある mark the thing that exists with が."],

  // を
  [5, "毎晩、テレビ＿見ます。", "を", "I watch TV every night.", "を marks the direct object of the verb."],
  [5, "橋＿渡ります。", "を", "I cross the bridge.", "を marks the path or place that you move through (渡る, 歩く, 通る)."],
  [5, "毎朝、七時に家＿出ます。", "を", "I leave the house at seven every morning.", "を marks the place you depart from with 出る."],
  [5, "バス＿降りました。", "を", "I got off the bus.", "降りる marks the vehicle you get off with を (から is also possible).", ["から"]],
  [5, "手＿洗ってください。", "を", "Please wash your hands.", "を marks the object of the action 洗う."],
  [5, "一緒に昼ご飯＿食べませんか。", "を", "Shall we have lunch together?", "を marks the object even in an invitation."],

  // に
  [5, "十二月二十五日＿パーティーがあります。", "に", "There is a party on December 25th.", "に marks a specific date or time."],
  [5, "十二時＿寝ます。", "に", "I go to bed at twelve.", "に marks a specific clock time."],
  [5, "教室＿学生が十人います。", "に", "There are ten students in the classroom.", "に marks the place where a person or animal exists (います)."],
  [5, "冷蔵庫の中＿牛乳があります。", "に", "There is milk in the refrigerator.", "に marks the location of a thing that exists (あります)."],
  [5, "テーブルの上＿りんごが三つあります。", "に", "There are three apples on the table.", "に marks the location of existence."],
  [5, "トイレは二階＿あります。", "に", "The restroom is on the second floor.", "に marks where something is located."],
  [5, "妹＿プレゼントをあげました。", "に", "I gave my younger sister a present.", "に marks the recipient of あげる."],
  [5, "友達＿お金を貸しました。", "に", "I lent money to a friend.", "に marks the person you lend something to."],
  [5, "友達＿メールを送りました。", "に", "I sent an email to a friend.", "に marks the recipient of the thing sent."],
  [5, "先生＿質問しました。", "に", "I asked the teacher a question.", "質問する takes に for the person asked."],
  [5, "八時の電車＿乗ります。", "に", "I take the eight o'clock train.", "乗る takes に for the vehicle you board."],
  [5, "先生の部屋＿入りました。", "に", "I entered the teacher's room.", "入る takes に for the place you enter."],
  [5, "図書館へ本を借り＿行きます。", "に", "I'm going to the library to borrow books.", "Verb stem + に + 行く expresses the purpose of going."],
  [5, "一週間＿二回、テニスをします。", "に", "I play tennis twice a week.", "A period + に + number expresses frequency."],
  [5, "私は母＿似ています。", "に", "I look like my mother.", "似る takes に for the person you resemble."],
  [5, "田中さんの隣＿座りました。", "に", "I sat down next to Mr. Tanaka.", "座る takes に for the place where you sit."],
  [5, "もう春＿なりました。", "に", "It has become spring already.", "Noun + になる = 'become (noun)'."],

  // で
  [5, "このレストラン＿昼ご飯を食べます。", "で", "I eat lunch at this restaurant.", "で marks the place where an action takes place."],
  [5, "スーパー＿野菜を買います。", "で", "I buy vegetables at the supermarket.", "で marks the place where the action 買う happens."],
  [5, "はし＿ご飯を食べます。", "で", "I eat rice with chopsticks.", "で marks the tool or means."],
  [5, "日本語＿手紙を書きました。", "で", "I wrote a letter in Japanese.", "で marks the language or means used."],
  [5, "この机は木＿できています。", "で", "This desk is made of wood.", "〜でできている marks the material (still recognizable)."],
  [5, "風邪＿学校を休みました。", "で", "I was absent from school because of a cold.", "で marks the cause or reason (noun + で)."],
  [5, "家族＿父が一番背が高いです。", "で", "In my family, my father is the tallest.", "〜で一番 = 'the most among ~'; で marks the range."],
  [5, "全部＿五百円です。", "で", "It's 500 yen in total.", "で marks a total amount."],

  // へ
  [5, "私は来年、アメリカ＿行きます。", "へ", "I'm going to America next year.", "へ shows direction of movement; に also works.", ["に"]],
  [5, "六時に家＿帰ります。", "へ", "I return home at six.", "へ marks the destination of 帰る; に also works.", ["に"]],

  // と
  [5, "母＿買い物に行きました。", "と", "I went shopping with my mother.", "と means 'together with'."],
  [5, "かばんの中に本＿ノートがあります。", "と", "There are a book and a notebook in the bag.", "と connects nouns in a complete list.", ["や"]],
  [5, "先生は「あした休みです」＿言いました。", "と", "The teacher said, 'Tomorrow is a holiday.'", "と marks a quotation before 言う."],
  [5, "明日は晴れる＿思います。", "と", "I think it will be sunny tomorrow.", "と marks the content of a thought before 思う."],

  // も
  [5, "パンを食べました。ケーキ＿食べました。", "も", "I ate bread. I ate cake, too.", "も replaces を and means 'also'."],
  [5, "昼ご飯を食べませんでした。朝ご飯＿食べませんでした。", "も", "I didn't eat lunch. I didn't eat breakfast, either.", "も with a negative verb means 'not ... either'."],

  // の
  [5, "これは先生＿かさです。", "の", "This is the teacher's umbrella.", "の shows possession: 先生のかさ."],
  [5, "日本語＿本を買いました。", "の", "I bought a Japanese-language book.", "の links nouns: 日本語の本 = 'a book about / in Japanese'."],
  [5, "私は料理を作る＿が好きです。", "の", "I like cooking.", "Verb (plain form) + の turns the verb into a noun phrase; 〜のが好き = 'like doing'."],

  // から / まで / より / か / ね / よ
  [5, "この手紙は母＿来ました。", "から", "This letter came from my mother.", "から marks the source or sender ('from')."],
  [5, "夜の十二時＿勉強しました。", "まで", "I studied until midnight.", "まで shows the time up to which something continues."],
  [5, "先生が来る＿、ここで待ちます。", "まで", "I'll wait here until the teacher comes.", "Verb (plain form) + まで = 'until ~'."],
  [5, "今日は昨日＿寒いです。", "より", "Today is colder than yesterday.", "より marks the standard of comparison ('than')."],
  [5, "私は朝、コーヒー＿紅茶を飲みます。", "か", "I drink coffee or tea in the morning.", "か between nouns means 'or'."],
  [5, "パン＿ご飯のどちらがいいですか。", "か", "Which would you like, bread or rice?", "A か B means 'A or B' when offering a choice."],
  [5, "トイレはどこです＿。", "か", "Where is the restroom?", "か at the end of a sentence makes it a question."],
  [5, "今日は寒いです＿。", "ね", "It's cold today, isn't it?", "ね seeks the listener's agreement."],
  [5, "そのカレーは辛いです＿。", "よ", "That curry is spicy, I'm telling you.", "よ gives the listener information they may not know."],

  // ---------- N4 ----------
  // comparison / limits / amounts
  [4, "この問題は思った＿簡単でした。", "より", "This problem was easier than I thought.", "より means 'than', also with clauses like 思った."],
  [4, "今日は昨日＿寒くありません。", "ほど", "Today is not as cold as yesterday.", "A ほど + negative = 'not as ... as A'."],
  [4, "金曜日＿レポートを出してください。", "までに", "Please submit the report by Friday.", "までに marks a deadline ('by'); まで means 'until' for continuing actions."],
  [4, "十時＿帰ります。", "までに", "I'll be home by ten.", "までに marks the deadline by which a one-time action is completed."],
  [4, "私は朝、コーヒー＿飲みます。", "だけ", "I drink only coffee in the morning.", "だけ means 'only'."],
  [4, "この店は土曜日＿開いています。", "だけ", "This shop is open only on Saturdays.", "だけ limits the time to just Saturday."],
  [4, "今朝は、パン＿食べませんでした。", "しか", "This morning I ate only bread.", "しか must be followed by a negative: 'nothing but'."],
  [4, "教室には三人＿いません。", "しか", "There are only three people in the classroom.", "しか + negative stresses that the amount is small."],
  [4, "弟は毎日ゲーム＿しています。", "ばかり", "My younger brother does nothing but play games every day.", "ばかり means 'nothing but; only (and too much)'.", ["ばっかり"]],
  [4, "机の上に本やノート＿があります。", "など", "There are books, notebooks and the like on the desk.", "など = 'and so on; things like'."],
  [4, "毎日、漢字を十個＿覚えます。", "ずつ", "I memorize ten kanji each day.", "Quantity + ずつ = 'each; at a time'."],
  [4, "みんなに一つ＿りんごをあげます。", "ずつ", "I'll give everyone one apple each.", "ずつ shows an equal share per person or time."],
  [4, "昨日は五時間＿寝ました。", "ぐらい", "I slept about five hours yesterday.", "ぐらい / くらい = 'about; approximately'.", ["くらい"]],
  [4, "ケーキを五つ＿食べました。", "も", "I ate as many as five cakes.", "A quantity + も stresses that the amount is large."],
  [4, "冷蔵庫には何＿ありません。", "も", "There is nothing in the refrigerator.", "何も + negative = 'nothing at all'."],
  [4, "教室には誰＿いません。", "も", "There is nobody in the classroom.", "誰も + negative = 'nobody'."],

  // でも
  [4, "ちょっと休んで、お茶＿飲みませんか。", "でも", "Why don't we take a break and have tea or something?", "でも after a noun makes a soft suggestion ('or something')."],
  [4, "あの店は夜中＿開いています。", "でも", "That shop is open even in the middle of the night.", "でも = 'even'; it gives an extreme example."],
  [4, "いつ＿いいですよ。", "でも", "Anytime is fine.", "Question word + でも = 'any ~' (いつでも, 何でも, 誰でも)."],
  [4, "私は何＿食べます。", "でも", "I eat anything.", "何でも = 'anything'."],

  // passive / causative
  [4, "私は母＿起こされました。", "に", "I was woken up by my mother.", "In passive sentences, に marks the person who does the action."],
  [4, "昨日、犬＿かまれました。", "に", "I was bitten by a dog yesterday.", "に marks the agent in the passive."],
  [4, "友達＿足を踏まれました。", "に", "My foot was stepped on by a friend.", "に marks the agent; the sufferer is the subject."],
  [4, "母は私＿野菜を食べさせました。", "に", "My mother made me eat vegetables.", "In causative sentences with an object, the person made to act takes に."],
  [4, "先生は学生＿本を読ませました。", "に", "The teacher had the students read a book.", "The person made to act is marked by に when the verb has an object."],

  // に other
  [4, "駅で先生＿会いました。", "に", "I met my teacher at the station.", "会う takes に for the person you meet (と also works).", ["と"]],
  [4, "タクシー＿乗りました。", "に", "I took a taxi.", "乗る takes に for the vehicle."],
  [4, "ふろ＿入ります。", "に", "I take a bath.", "入る takes に: おふろに入る = 'take a bath'."],
  [4, "彼は有名な歌手＿なりました。", "に", "He became a famous singer.", "Noun + になる = 'become'."],
  [4, "来月、大阪で働くこと＿なりました。", "に", "It has been decided that I'll work in Osaka next month.", "〜ことになる expresses a decision made by circumstances."],
  [4, "友達は私＿花をくれました。", "に", "My friend gave me flowers.", "くれる marks the receiver (me) with に."],
  [4, "夏休みに旅行＿行きます。", "に", "I'm going on a trip during summer vacation.", "Noun + に + 行く shows the purpose of going."],
  [4, "一年＿三回、北海道へ行きます。", "に", "I go to Hokkaido three times a year.", "Period + に + number of times = frequency."],
  [4, "財布をかばん＿入れました。", "に", "I put my wallet in the bag.", "入れる takes に for the destination of the thing put in."],

  // と
  [4, "彼は明日来ない＿言っていました。", "と", "He said that he isn't coming tomorrow.", "と marks reported speech before 言う."],
  [4, "春になる＿、花が咲きます。", "と", "When spring comes, flowers bloom.", "Verb (plain form) + と expresses a natural or automatic result."],
  [4, "私は去年、彼＿結婚しました。", "と", "I got married to him last year.", "結婚する takes と for the partner."],
  [4, "彼女は私＿同じ年です。", "と", "She is the same age as me.", "〜と同じ = 'the same as ~'."],

  // の
  [4, "この傘は姉＿です。", "の", "This umbrella is my sister's.", "Noun + の can stand for 'noun's thing'."],
  [4, "朝早く起きる＿は大変です。", "の", "Getting up early in the morning is hard.", "の makes the verb phrase a noun phrase that can be the topic."],
  [4, "彼が来ない＿を知っていますか。", "の", "Do you know that he isn't coming?", "の nominalizes a clause so it can take を."],

  // が / を / で / から / へ / か / よ
  [4, "私は漢字＿書けます。", "が", "I can write kanji.", "A potential verb can mark its object with が (を is also possible).", ["を"]],
  [4, "これは私＿作ったケーキです。", "が", "This is a cake I made.", "In a modifying clause, the subject takes が (or の).", ["の"]],
  [4, "「誰が窓を割りましたか。」「弟＿割りました。」", "が", "'Who broke the window?' 'My younger brother did.'", "The answer to a 'who' question is the new information, so it takes が."],
  [4, "窓＿開けてもいいですか。", "を", "May I open the window?", "を marks the object of 開ける."],
  [4, "公園＿通って、駅に行きます。", "を", "I go to the station through the park.", "を marks the place you pass through (通る)."],
  [4, "去年、大学＿卒業しました。", "を", "I graduated from university last year.", "卒業する marks the school you leave with を."],
  [4, "日本＿一番長い川は信濃川です。", "で", "The longest river in Japan is the Shinano River.", "で marks the range in superlatives: 日本で一番."],
  [4, "地震＿電車が止まりました。", "で", "The trains stopped because of the earthquake.", "で marks the cause of an event."],
  [4, "三人＿ピザを食べました。", "で", "The three of us ate a pizza.", "Number of people + で shows who does it together."],
  [4, "雨が降っている＿、行きません。", "から", "I won't go because it's raining.", "Clause + から gives the reason ('because')."],
  [4, "これは母＿の手紙です。", "へ", "This is a letter to my mother.", "へ + の modifies a noun: 母への手紙 = 'a letter to Mother'."],
  [4, "雨が降る＿どうか、分かりません。", "か", "I don't know whether it will rain or not.", "〜かどうか = 'whether or not'."],
  [4, "早く行かないと、遅れます＿。", "よ", "If you don't go soon, you'll be late, I'm telling you.", "よ stresses a warning or advice for the listener."]
);
