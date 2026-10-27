/*
 * Grammar data. Progress is keyed by the pattern name `p`, so keep patterns unique.
 * p: pattern | m: short meaning | s: structure | n: note | ex: [[jp, en], ...]
 * q: quiz cloze { s: sentence with ＿＿ blank, t: translation, a: correct answer, w: [3 wrong answers] }
 */
window.DATA = window.DATA || {};
window.DATA.grammar = {
  5: [
    {
      p: "〜たいです", m: "want to (do)", s: "Verb (ます-stem) + たい(です)",
      n: "たい conjugates like an い-adjective: 食べたくない (don't want to eat), 食べたかった (wanted to eat). The object can take を or が.",
      ex: [["水を飲みたいです。", "I want to drink water."], ["週末は何もしたくないです。", "I don't want to do anything on the weekend."]],
      q: { s: "私は京都に行き＿＿。", t: "I want to go to Kyoto.", a: "たいです", w: ["ましょう", "てください", "ています"] }
    },
    {
      p: "〜てください", m: "please do ~", s: "Verb (て-form) + ください",
      n: "A polite request. For a softer feel, add ちょっと or use 〜ていただけませんか later on.",
      ex: [["ここに名前を書いてください。", "Please write your name here."], ["ゆっくり話してください。", "Please speak slowly."]],
      q: { s: "ちょっと待っ＿＿。", t: "Please wait a moment.", a: "てください", w: ["たいです", "ています", "てはいけません"] }
    },
    {
      p: "〜ている", m: "is doing ~ / state resulting from an action", s: "Verb (て-form) + いる",
      n: "Shows an action in progress (読んでいる) or a resulting state (結婚している, 住んでいる). Often contracted to 〜てる in speech.",
      ex: [["今、テレビを見ています。", "I'm watching TV now."], ["兄は東京に住んでいます。", "My older brother lives in Tokyo."]],
      q: { s: "あの人は今、電話をかけ＿＿。", t: "That person is making a phone call now.", a: "ています", w: ["てください", "たいです", "ましょう"] }
    },
    {
      p: "〜てもいいです", m: "may do ~ (permission)", s: "Verb (て-form) + もいいです",
      n: "Ask permission with 〜てもいいですか. Refuse with 〜てはいけません (or more gently, ちょっと…).",
      ex: [["ここで写真を撮ってもいいですか。", "May I take photos here?"], ["窓を開けてもいいですよ。", "You may open the window."]],
      q: { s: "この本を借り＿＿か。", t: "May I borrow this book?", a: "てもいいです", w: ["てはいけません", "ないでください", "たいです"] }
    },
    {
      p: "〜てはいけません", m: "must not do ~", s: "Verb (て-form) + はいけません",
      n: "A rule or strong prohibition. In casual speech: 〜てはだめ / 〜ちゃだめ.",
      ex: [["ここで走ってはいけません。", "You must not run here."], ["教室で食べてはいけません。", "You must not eat in the classroom."]],
      q: { s: "図書館で大きい声で話し＿＿。", t: "You must not talk loudly in the library.", a: "てはいけません", w: ["てもいいです", "てください", "ましょう"] }
    },
    {
      p: "〜ないでください", m: "please don't ~", s: "Verb (ない-form) + でください",
      n: "A polite negative request.",
      ex: [["忘れないでください。", "Please don't forget."], ["ここに入らないでください。", "Please don't enter here."]],
      q: { s: "ここに荷物を置か＿＿。", t: "Please don't put luggage here.", a: "ないでください", w: ["てください", "たくないです", "ませんでした"] }
    },
    {
      p: "〜ましょう／〜ませんか", m: "let's ~ / won't you ~? (invitation)", s: "Verb (ます-stem) + ましょう / ませんか",
      n: "〜ませんか is a polite invitation; 〜ましょう is 'let's' and also the usual reply.",
      ex: [["一緒に昼ご飯を食べませんか。", "Won't you have lunch with me?"], ["ええ、食べましょう。", "Yes, let's eat."]],
      q: { s: "一緒に行き＿＿。", t: "Let's go together.", a: "ましょう", w: ["たいです", "てください", "ています"] }
    },
    {
      p: "〜から（理由）", m: "because ~ / so ~", s: "Clause 1 + から、 Clause 2",
      n: "から puts the reason first in this order (reason から result). Do not confuse it with から meaning 'from'.",
      ex: [["雨ですから、うちにいます。", "Because it's raining, I'll stay home."], ["時間がありませんから、タクシーで行きます。", "I have no time, so I'll go by taxi."]],
      q: { s: "明日は休みです＿＿、ゆっくり寝ます。", t: "Because tomorrow is a day off, I'll sleep in.", a: "から", w: ["が", "まで", "より"] }
    },
    {
      p: "〜が（逆接）", m: "but ~", s: "Clause 1 + が、 Clause 2",
      n: "Connects two contrasting clauses. Polite sentences usually end in です／ます before が.",
      ex: [["日本語は難しいですが、おもしろいです。", "Japanese is difficult, but interesting."], ["すしは好きですが、てんぷらは食べません。", "I like sushi, but I don't eat tempura."]],
      q: { s: "このレストランは高いです＿＿、おいしいです。", t: "This restaurant is expensive, but delicious.", a: "が", w: ["から", "ので", "ながら"] }
    },
    {
      p: "〜ことができる", m: "can do ~ (ability / possibility)", s: "Verb (dictionary form) + ことができる",
      n: "A formal way to say 'can'. The potential form (話せる) is shorter and more natural for many verbs.",
      ex: [["私は日本語を話すことができます。", "I can speak Japanese."], ["ここで泳ぐことはできません。", "You can't swim here."]],
      q: { s: "私はピアノを弾く＿＿＿。", t: "I can play the piano.", a: "ことができます", w: ["ことがあります", "ことにします", "ようです"] }
    },
    {
      p: "AよりBのほうが〜", m: "B is more ~ than A", s: "A + より + B + のほうが + adjective",
      n: "Comparison of two things. Ask with どちらのほうが〜ですか.",
      ex: [["犬より猫のほうが好きです。", "I like cats more than dogs."], ["電車よりバスのほうが安いです。", "Buses are cheaper than trains."]],
      q: { s: "夏＿＿冬のほうが好きです。", t: "I like winter more than summer.", a: "より", w: ["から", "まで", "ほど"] }
    },
    {
      p: "〜前に", m: "before ~", s: "Verb (dictionary form) + 前に / Noun + の前に",
      n: "The verb before 前に is ALWAYS in dictionary form, even if the main sentence is past tense.",
      ex: [["寝る前に、歯をみがきます。", "I brush my teeth before going to bed."], ["食事の前に、手を洗います。", "I wash my hands before meals."]],
      q: { s: "ご飯を食べる＿＿、手を洗います。", t: "Before I eat, I wash my hands.", a: "前に", w: ["あとで", "ながら", "から"] }
    },
    {
      p: "〜とき", m: "when ~ / at the time of ~", s: "Plain form / い-adj / なadj + な / Noun + の + とき",
      n: "Verb before とき in non-past = action not yet finished; in past = action completed.",
      ex: [["子どものとき、大阪に住んでいました。", "When I was a child, I lived in Osaka."], ["暇なとき、本を読みます。", "When I'm free, I read books."]],
      q: { s: "日本へ来る＿＿、飛行機で来ました。", t: "When I came to Japan, I came by plane.", a: "とき", w: ["まえに", "ながら", "ので"] }
    },
    {
      p: "〜でしょう", m: "probably ~ / right?", s: "Plain form (noun/な-adj without だ) + でしょう",
      n: "Rising intonation asks for agreement ('right?'); falling intonation expresses probability. Weather forecasts use it a lot.",
      ex: [["明日は雨でしょう。", "It will probably rain tomorrow."], ["田中さんはもう家に着いたでしょう。", "Mr. Tanaka has probably arrived home by now."]],
      q: { s: "明日は晴れる＿＿。", t: "It will probably be sunny tomorrow.", a: "でしょう", w: ["ましょう", "てください", "たいです"] }
    },
    {
      p: "〜くなる／〜になる", m: "become ~", s: "い-adj: 〜く + なる | な-adj / Noun: 〜に + なる",
      n: "Drop い and add く for い-adjectives. いい becomes よくなる.",
      ex: [["だんだん寒くなりました。", "It gradually got cold."], ["日本語が上手になりました。", "My Japanese has become good."]],
      q: { s: "毎日練習して、ピアノが上手＿なりました。", t: "I practiced every day and became good at piano.", a: "に", w: ["く", "で", "と"] }
    },
    {
      p: "〜に行く", m: "go in order to ~", s: "Verb (ます-stem) / Noun + に + 行く / 来る / 帰る",
      n: "The purpose comes right before に. Works with 来る and 帰る too.",
      ex: [["図書館へ本を借りに行きます。", "I go to the library to borrow books."], ["友達に会いに行きます。", "I'm going to see a friend."]],
      q: { s: "デパートへ靴を買い＿行きます。", t: "I'm going to the department store to buy shoes.", a: "に", w: ["て", "たい", "ながら"] }
    },
    {
      p: "〜がほしい", m: "want (a thing)", s: "Noun + が + ほしい(です)",
      n: "ほしい is for wanting THINGS. For wanting to DO something use 〜たい. ほしい is an い-adjective.",
      ex: [["新しい車がほしいです。", "I want a new car."], ["今、何がほしいですか。", "What do you want now?"]],
      q: { s: "私は新しいパソコン＿＿ほしいです。", t: "I want a new computer.", a: "が", w: ["に", "で", "へ"] }
    }
  ],
  4: [
    {
      p: "〜たことがある", m: "have done ~ (experience)", s: "Verb (た-form) + ことがある",
      n: "Talks about life experience. Not for things you did yesterday. Negative: 〜たことがない.",
      ex: [["私は富士山に登ったことがあります。", "I have climbed Mt. Fuji."], ["納豆を食べたことがありません。", "I have never eaten natto."]],
      q: { s: "京都へ行っ＿ことがあります。", t: "I have been to Kyoto.", a: "た", w: ["て", "ない", "る"] }
    },
    {
      p: "〜たり〜たりする", m: "do things like ~ and ~", s: "Verb (た-form) + り、Verb (た-form) + り + する",
      n: "Gives examples of actions (non-exhaustive). Tense is shown only on the final する.",
      ex: [["休みの日は、本を読んだり、映画を見たりします。", "On days off, I do things like read books and watch movies."], ["雨が降ったり、やんだりしています。", "It's raining on and off."]],
      q: { s: "週末は買い物をし＿＿、友達と会ったりします。", t: "On weekends I shop, meet friends, and so on.", a: "たり", w: ["て", "ながら", "ので"] }
    },
    {
      p: "〜ながら", m: "while doing ~", s: "Verb (ます-stem) + ながら",
      n: "Two actions at the same time by the same person. The main action comes last.",
      ex: [["音楽を聞きながら、勉強します。", "I study while listening to music."], ["歩きながら、スマホを見てはいけません。", "You must not look at your phone while walking."]],
      q: { s: "コーヒーを飲み＿＿、新聞を読みます。", t: "I read the newspaper while drinking coffee.", a: "ながら", w: ["たり", "ので", "のに"] }
    },
    {
      p: "〜ので", m: "because ~ (softer than から)", s: "Plain form (な-adj / noun + な) + ので",
      n: "Objective, polite reason. Good for explaining to superiors. Can't be followed directly by commands.",
      ex: [["熱があるので、今日は休みます。", "I have a fever, so I'll rest today."], ["道が分からなかったので、人に聞きました。", "I didn't know the way, so I asked someone."]],
      q: { s: "疲れた＿＿、早く寝ます。", t: "I'm tired, so I'll go to bed early.", a: "ので", w: ["のに", "ながら", "ても"] }
    },
    {
      p: "〜のに", m: "even though ~ / despite ~", s: "Plain form (な-adj / noun + な) + のに",
      n: "Expresses surprise, disappointment, or frustration about the contrast.",
      ex: [["勉強したのに、試験に落ちました。", "I studied, yet I failed the exam."], ["春なのに、寒いです。", "Even though it's spring, it's cold."]],
      q: { s: "毎日練習した＿＿、上手になりません。", t: "Even though I practice every day, I'm not getting better.", a: "のに", w: ["ので", "から", "ながら"] }
    },
    {
      p: "〜と思う", m: "I think that ~", s: "Plain form + と思う",
      n: "Use plain form before と. 〜と思います is polite. For adjectives and nouns, だ is dropped or kept before と depending on style.",
      ex: [["明日は雨が降ると思います。", "I think it will rain tomorrow."], ["彼は来ないと思います。", "I don't think he'll come."]],
      q: { s: "田中さんは来る＿＿思います。", t: "I think Mr. Tanaka will come.", a: "と", w: ["が", "を", "に"] }
    },
    {
      p: "〜かもしれない", m: "might ~ / maybe ~", s: "Plain form (noun/な-adj without だ) + かもしれない",
      n: "Lower certainty than でしょう. Polite: かもしれません.",
      ex: [["明日は雪が降るかもしれません。", "It might snow tomorrow."], ["彼は病気かもしれません。", "He might be sick."]],
      q: { s: "道が混んでいるので、遅れる＿＿＿。", t: "The roads are crowded, so I might be late.", a: "かもしれません", w: ["ことにします", "つもりです", "ことがあります"] }
    },
    {
      p: "〜そうだ（様子）", m: "looks ~ / seems about to ~", s: "Verb (ます-stem) / い-adj stem / な-adj + そう",
      n: "Based on appearance. Irregular: いい→よさそう, ない→なさそう. Don't mix up with hearsay 〜そうだ (plain form + そうだ = I heard that).",
      ex: [["このケーキはおいしそうです。", "This cake looks delicious."], ["雨が降りそうです。", "It looks like it's going to rain."]],
      q: { s: "空が暗いですね。雨が降り＿＿ですね。", t: "The sky is dark. It looks like rain.", a: "そう", w: ["やすい", "すぎ", "ながら"] }
    },
    {
      p: "〜すぎる", m: "too much ~ / overdoing ~", s: "Verb (ます-stem) / い-adj stem / な-adj + すぎる",
      n: "Usually a negative nuance. 食べすぎる, 高すぎる, 静かすぎる.",
      ex: [["昨日は食べすぎました。", "I ate too much yesterday."], ["この部屋は暑すぎます。", "This room is too hot."]],
      q: { s: "昨日はお酒を飲み＿＿＿、頭が痛いです。", t: "I drank too much yesterday and have a headache.", a: "すぎて", w: ["やすくて", "たくて", "そうで"] }
    },
    {
      p: "〜やすい／〜にくい", m: "easy to ~ / hard to ~", s: "Verb (ます-stem) + やすい / にくい",
      n: "Both conjugate like い-adjectives. Describes how easy or hard something is to do.",
      ex: [["この靴は歩きやすいです。", "These shoes are easy to walk in."], ["この漢字は書きにくいです。", "This kanji is hard to write."]],
      q: { s: "この辞書は使い＿＿ので、よく使います。", t: "This dictionary is easy to use, so I use it often.", a: "やすい", w: ["にくい", "すぎる", "たい"] }
    },
    {
      p: "〜なければならない", m: "must ~ / have to ~", s: "Verb (ない-form, drop い) + ければならない",
      n: "Same meaning: 〜なくてはいけない, 〜なきゃ (casual). Negative obligation (must not) uses 〜てはいけない.",
      ex: [["毎日薬を飲まなければなりません。", "I must take medicine every day."], ["明日は早く起きなければなりません。", "I have to get up early tomorrow."]],
      q: { s: "宿題を出さ＿＿＿＿。", t: "I have to hand in my homework.", a: "なければなりません", w: ["なくてもいいです", "てはいけません", "ないでください"] }
    },
    {
      p: "〜ても", m: "even if ~", s: "Verb (て-form) / い-adj く / な-adj で + も",
      n: "Concessive. Pairs with 何/いくら/どんなに: いくら食べても太らない.",
      ex: [["雨が降っても、行きます。", "Even if it rains, I'll go."], ["高くても、買いたいです。", "Even if it's expensive, I want to buy it."]],
      q: { s: "忙しく＿＿、朝ご飯は食べます。", t: "Even if I'm busy, I eat breakfast.", a: "ても", w: ["たり", "ので", "ながら"] }
    },
    {
      p: "〜たら", m: "if ~ / when ~ (conditional)", s: "Plain past form + ら",
      n: "Very flexible conditional: 'if', or 'after/when X happens'. Often paired with imperative or request.",
      ex: [["時間があったら、遊びに来てください。", "If you have time, please come visit."], ["家に帰ったら、すぐ電話します。", "When I get home, I'll call right away."]],
      q: { s: "安かっ＿＿、買います。", t: "If it's cheap, I'll buy it.", a: "たら", w: ["ても", "ので", "ながら"] }
    },
    {
      p: "〜ために", m: "in order to ~ / for the sake of ~", s: "Verb (dict. form) / Noun + の + ために",
      n: "Purpose with a controllable action; the subject of both clauses is the same.",
      ex: [["日本語を勉強するために、日本へ来ました。", "I came to Japan in order to study Japanese."], ["健康のために、毎日歩いています。", "I walk every day for my health."]],
      q: { s: "家を買う＿＿＿、お金をためています。", t: "I'm saving money in order to buy a house.", a: "ために", w: ["ながら", "あとで", "ので"] }
    },
    {
      p: "〜てあげる／〜てくれる／〜てもらう", m: "do a favor (give / receive)", s: "Verb (て-form) + あげる / くれる / もらう",
      n: "あげる: I/someone gives a favor outward. くれる: someone does a favor for me. もらう: I receive a favor (giver marked by に).",
      ex: [["友達に本を貸してあげました。", "I lent my friend a book."], ["先生が日本語を教えてくれました。", "The teacher taught me Japanese."], ["私は友達に宿題を手伝ってもらいました。", "A friend helped me with my homework."]],
      q: { s: "母が私に弁当を作っ＿＿＿。", t: "My mother made me a bento.", a: "てくれました", w: ["てあげました", "てもらいました", "ておきました"] }
    },
    {
      p: "〜られる（可能）", m: "can do ~ (potential form)", s: "Group 1: u→eru | Group 2: る→られる | する→できる | 来る→来られる",
      n: "Potential verbs take が for the object: 日本語が話せる. 見える/聞こえる are separate verbs for 'can be seen/heard'.",
      ex: [["私は日本語が話せます。", "I can speak Japanese."], ["納豆は食べられません。", "I can't eat natto."]],
      q: { s: "私は漢字が読＿＿＿。", t: "I can read kanji.", a: "めます", w: ["ませます", "みたいです", "みます"] }
    }
  ],
  3: [
    {
      p: "〜ばかり", m: "just did ~ / only ~ / nothing but ~", s: "Verb (た-form) + ばかり | Verb (て-form) + ばかりいる | Noun + ばかり",
      n: "Vたばかり = has just done; Vてばかりいる = keeps doing (negative nuance); Nばかり = only/nothing but N.",
      ex: [["昼ご飯を食べたばかりです。", "I have just eaten lunch."], ["子どもは遊んでばかりいます。", "The child does nothing but play."]],
      q: { s: "さっき起きた＿＿＿で、まだ眠いです。", t: "I just woke up, so I'm still sleepy.", a: "ばかり", w: ["はず", "ほど", "より"] }
    },
    {
      p: "〜ようになる", m: "come to ~ / get to the point of ~", s: "Verb (dict. / potential, ない-form) + ようになる",
      n: "A gradual change in ability or habit. Negative: 〜なくなる (stops being the case).",
      ex: [["毎日練習して、泳げるようになりました。", "I practiced every day and came to be able to swim."], ["最近、早く起きるようになりました。", "Recently I've started getting up early."]],
      q: { s: "日本に住んで、納豆が食べられる＿＿＿なりました。", t: "After living in Japan, I came to be able to eat natto.", a: "ように", w: ["ために", "ことに", "そうに"] }
    },
    {
      p: "〜ことになる／〜ことにする", m: "it's been decided ~ / I decide to ~", s: "Verb (dict./ない-form) + ことになる / ことにする",
      n: "ことにする = YOUR own decision. ことになる = decision made by circumstances/others (also used to soften your own news).",
      ex: [["来月、大阪に引っ越すことになりました。", "It's been decided that I'll move to Osaka next month."], ["毎日運動することにしました。", "I decided to exercise every day."]],
      q: { s: "私は来年留学する＿＿＿しました。", t: "I decided to study abroad next year.", a: "ことに", w: ["わけに", "はずに", "らしく"] }
    },
    {
      p: "〜はずだ", m: "should be ~ / is expected to ~", s: "Plain form (な-adj + な / noun + の) + はずだ",
      n: "Speaker's logical expectation. Negative 〜はずがない = there's no way that ~.",
      ex: [["彼はもう家に着いたはずです。", "He should have arrived home by now."], ["この道で合っているはずだ。", "This should be the right road."]],
      q: { s: "田中さんは来る＿＿＿です。", t: "Mr. Tanaka is supposed to be coming.", a: "はず", w: ["ばかり", "ほど", "うち"] }
    },
    {
      p: "〜わけではない", m: "it doesn't mean that ~", s: "Plain form (な-adj + な / noun + という) + わけではない",
      n: "Partial negation: denies a natural conclusion. Often follows が/けど.",
      ex: [["嫌いなわけではありませんが、あまり食べません。", "It's not that I dislike it, but I don't eat it much."], ["毎日忙しいわけではない。", "It's not the case that I'm busy every day."]],
      q: { s: "日本語が嫌いな＿＿＿ではありませんが、難しいです。", t: "It's not that I dislike Japanese, but it's hard.", a: "わけ", w: ["はず", "もの", "こと"] }
    },
    {
      p: "〜ところだ", m: "about to / in the middle of / just finished", s: "V-dict + ところ (about to) | V-ている + ところ (in progress) | V-た + ところ (just did)",
      n: "Describes the exact stage of an action. Compare Vたばかり (just did, more subjective, can be a while ago).",
      ex: [["今から出かけるところです。", "I'm just about to leave."], ["ちょうど食べているところです。", "I'm in the middle of eating."], ["今、帰ってきたところです。", "I've just come home."]],
      q: { s: "今、ご飯を食べている＿＿＿です。", t: "I'm in the middle of eating right now.", a: "ところ", w: ["はず", "わけ", "ばかり"] }
    },
    {
      p: "〜にとって", m: "for ~ / from the viewpoint of ~", s: "Noun + にとって",
      n: "Noun is a person/organization with a viewpoint; the sentence expresses a value judgment (important, difficult, etc.).",
      ex: [["私にとって、家族は一番大切です。", "For me, family is the most important thing."], ["子どもにとって、この本は難しいです。", "For children, this book is difficult."]],
      q: { s: "留学生＿＿＿＿、日本の冬は寒すぎます。", t: "For international students, Japanese winters are too cold.", a: "にとって", w: ["について", "によって", "として"] }
    },
    {
      p: "〜によって", m: "depending on ~ / by means of ~ / caused by ~", s: "Noun + によって",
      n: "Three common uses: variation (人によって違う), agent in passive (〜によって書かれた), and cause/means.",
      ex: [["人によって、考え方は違います。", "Ways of thinking differ from person to person."], ["国によって、習慣が違います。", "Customs differ depending on the country."]],
      q: { s: "国＿＿＿＿、食べ物が違います。", t: "Food differs depending on the country.", a: "によって", w: ["にとって", "として", "について"] }
    },
    {
      p: "〜について", m: "about ~ / concerning ~", s: "Noun + について",
      n: "Topic of discussion, research, or thought. Adnominal: 〜についての + noun.",
      ex: [["日本の歴史について調べています。", "I'm researching Japanese history."], ["この問題についてどう思いますか。", "What do you think about this problem?"]],
      q: { s: "将来＿＿＿＿、母と話しました。", t: "I talked with my mother about my future.", a: "について", w: ["にとって", "によって", "として"] }
    },
    {
      p: "〜として", m: "as ~ (in the role of)", s: "Noun + として",
      n: "States the capacity, role, or qualification in which something is done.",
      ex: [["彼は先生として働いています。", "He works as a teacher."], ["お土産として、お菓子を買いました。", "I bought sweets as a souvenir."]],
      q: { s: "私は通訳＿＿＿、会議に参加しました。", t: "I attended the meeting as an interpreter.", a: "として", w: ["について", "にとって", "によって"] }
    },
    {
      p: "〜らしい", m: "I hear ~ / it seems ~ / typical of ~", s: "Plain form (noun/な-adj without だ) + らしい | Noun + らしい",
      n: "1) Hearsay or inference based on evidence. 2) Noun + らしい = befitting that noun (男らしい, 学生らしい).",
      ex: [["田中さんは来月結婚するらしいです。", "I hear Mr. Tanaka is getting married next month."], ["それは彼らしくない行動です。", "That's behavior not typical of him."]],
      q: { s: "ニュースによると、明日は雪が降る＿＿＿です。", t: "According to the news, it seems it will snow tomorrow.", a: "らしい", w: ["ばかり", "ほど", "くらい"] }
    },
    {
      p: "〜おかげで／〜せいで", m: "thanks to ~ / because of ~ (negative)", s: "Plain form (な-adj + な / noun + の) + おかげで／せいで",
      n: "おかげで = positive result; せいで = blame for a negative result.",
      ex: [["先生のおかげで、合格できました。", "Thanks to my teacher, I was able to pass."], ["雨のせいで、試合が中止になりました。", "Because of the rain, the match was cancelled."]],
      q: { s: "友達が手伝ってくれた＿＿＿＿、早く終わりました。", t: "Thanks to my friend helping, it finished early.", a: "おかげで", w: ["せいで", "くせに", "ばかりで"] }
    },
    {
      p: "〜うちに", m: "while ~ / before it changes", s: "Verb (dict./ている/ない-form) / い-adj / な-adj + な / Noun + の + うちに",
      n: "Do something while a condition still holds, before it changes.",
      ex: [["若いうちに、いろいろな経験をしたほうがいいです。", "You should gain many experiences while you're young."], ["熱いうちに食べてください。", "Please eat while it's hot."]],
      q: { s: "温かい＿＿＿＿、どうぞ食べてください。", t: "Please eat while it's warm.", a: "うちに", w: ["たびに", "くせに", "せいで"] }
    },
    {
      p: "〜たびに", m: "every time ~", s: "Verb (dict. form) / Noun + の + たびに",
      n: "Every time A happens, B also happens (a habitual reaction).",
      ex: [["この写真を見るたびに、昔を思い出します。", "Every time I see this photo, I remember the old days."], ["旅行のたびに、お土産を買います。", "Every time I travel, I buy souvenirs."]],
      q: { s: "この歌を聞く＿＿＿、国を思い出します。", t: "Every time I hear this song, I remember my country.", a: "たびに", w: ["うちに", "せいで", "くせに"] }
    },
    {
      p: "〜ようだ／〜みたいだ", m: "seems like ~ / looks as if ~", s: "Plain form (な-adj + な / noun + の) + ようだ | みたいだ (casual)",
      n: "Inference from the speaker's own senses or observation. みたい is the conversational equivalent.",
      ex: [["彼は疲れているようです。", "He seems to be tired."], ["誰か来たみたいだ。", "It seems someone has come."]],
      q: { s: "電気がついていますね。田中さんはまだ会社にいる＿＿＿です。", t: "The light is on. Mr. Tanaka seems to be still at the office.", a: "よう", w: ["ばかり", "ほど", "ごろ"] }
    },
    {
      p: "〜くせに", m: "even though ~ (critical)", s: "Plain form (な-adj + な / noun + の) + くせに",
      n: "Criticism or resentment toward the person. Don't use it about yourself in polite situations.",
      ex: [["彼は知っているくせに、教えてくれません。", "Even though he knows, he won't tell me."], ["子どものくせに、えらそうに言う。", "He talks big, despite being a kid."]],
      q: { s: "高いお金を払った＿＿＿、サービスが悪かった。", t: "Despite paying lots of money, the service was bad.", a: "くせに", w: ["おかげで", "うちに", "たびに"] }
    },
    {
      p: "〜に違いない", m: "must be ~ / no doubt ~", s: "Plain form (noun/な-adj without だ) + に違いない",
      n: "Strong conviction based on grounds. Written/formal tone.",
      ex: [["あの店は人気があるに違いない。", "That shop must be popular."], ["彼が犯人に違いない。", "He must be the culprit."]],
      q: { s: "あんなに練習したのだから、勝つ＿＿＿＿。", t: "Since they practiced so hard, they must win.", a: "に違いない", w: ["わけではない", "ところだ", "たびに"] }
    },
    {
      p: "〜ずに", m: "without doing ~", s: "Verb (ない-form minus ない) + ずに | する→せずに",
      n: "Formal/written equivalent of 〜ないで. Irregular: する → せずに.",
      ex: [["朝ご飯を食べずに、学校へ行きました。", "I went to school without eating breakfast."], ["何も言わずに帰りました。", "He went home without saying anything."]],
      q: { s: "傘を持た＿＿＿、出かけて濡れました。", t: "I went out without an umbrella and got wet.", a: "ずに", w: ["ように", "ばかり", "たびに"] }
    }
  ]
};
