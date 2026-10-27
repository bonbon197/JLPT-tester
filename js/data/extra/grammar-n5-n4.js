/*
 * Extra grammar lessons for N5 and N4 (appended to DATA.grammar).
 * Same format as js/data/grammar.js.
 */
window.DATA = window.DATA || {};
window.DATA.grammar = window.DATA.grammar || { 5: [], 4: [], 3: [] };

window.DATA.grammar[5].push(
  {
    p: "〜と一緒に", m: "together with ~", s: "Noun (person) + と一緒に + Verb",
    n: "と marks the companion. 一緒に alone also works as 'together' (一緒に行きましょう).",
    ex: [["友達と一緒に映画を見ます。", "I watch a movie with a friend."], ["家族と一緒に晩ご飯を食べました。", "I ate dinner together with my family."], ["私と一緒に行きませんか。", "Won't you go with me?"]],
    q: { s: "友達＿＿一緒に映画を見ます。", t: "I watch a movie together with a friend.", a: "と", w: ["を", "へ", "まで"] }
  },
  {
    p: "〜で一番", m: "the most ~ in/among ~", s: "Place / Group (+ の中) + で + 一番 + adjective",
    n: "で marks the range of the comparison. With 好き, use が: 果物の中でりんごが一番好きです. Ask with 何/誰/どこが一番〜ですか.",
    ex: [["このクラスで一番背が高いのは田中さんです。", "The tallest person in this class is Mr. Tanaka."], ["果物の中で、りんごが一番好きです。", "Among fruits, I like apples the most."], ["日本で一番高い山は富士山です。", "The highest mountain in Japan is Mt. Fuji."]],
    q: { s: "このクラス＿＿一番背が高いのは田中さんです。", t: "The tallest person in this class is Mr. Tanaka.", a: "で", w: ["を", "へ", "より"] }
  },
  {
    p: "〜ましょうか", m: "shall I ~? / shall we ~?", s: "Verb (ます-stem) + ましょうか",
    n: "Offers to do something for someone (荷物を持ちましょうか) or suggests doing something together. Accept with お願いします; decline with 大丈夫です.",
    ex: [["荷物を持ちましょうか。", "Shall I carry your bag?"], ["少し休みましょうか。", "Shall we take a short break?"], ["ドアを開けましょうか。", "Shall I open the door?"]],
    q: { s: "重そうですね。荷物を持ち＿＿。", t: "That looks heavy. Shall I carry your bag?", a: "ましょうか", w: ["ましたか", "ませんでしたか", "たいですか"] }
  },
  {
    p: "〜だけ", m: "only ~ / just ~", s: "Noun / Quantity / Verb (plain form) + だけ",
    n: "Neutral 'only'. Often replaces は/が/を (今日は水だけ飲みました). Compare しか〜ない, which stresses that there is too little.",
    ex: [["昨日は水だけ飲みました。", "Yesterday I drank only water."], ["ひらがなだけ読めます。", "I can read only hiragana."], ["一つだけください。", "Just one, please."]],
    q: { s: "昨日は水＿＿飲みました。", t: "Yesterday I drank only water.", a: "だけ", w: ["しか", "ほど", "ごろ"] }
  },
  {
    p: "〜ごろ", m: "around ~ (a point in time)", s: "Time word + ごろ",
    n: "Approximate POINT in time (7時ごろ, 3月ごろ). For amounts or durations use ぐらい (10分ぐらい).",
    ex: [["毎朝七時ごろ起きます。", "I get up around seven every morning."], ["昨日は十一時ごろ寝ました。", "I went to bed around eleven yesterday."], ["三月ごろ、日本へ行きます。", "I'll go to Japan around March."]],
    q: { s: "私は毎朝六時＿＿起きます。", t: "I get up around six every morning.", a: "ごろ", w: ["まで", "ずつ", "だけ"] }
  },
  {
    p: "〜ぐらい／〜くらい", m: "about ~ (amount / duration)", s: "Quantity / Duration + ぐらい",
    n: "Rough amount, number or length of time. ぐらい and くらい are the same. Do not use for clock times (use ごろ).",
    ex: [["駅まで歩いて十分ぐらいです。", "It's about ten minutes on foot to the station."], ["りんごを三つぐらい買いました。", "I bought about three apples."], ["日本語を二年ぐらい勉強しました。", "I studied Japanese for about two years."]],
    q: { s: "学校まで電車で三十分＿＿かかります。", t: "It takes about thirty minutes to school by train.", a: "ぐらい", w: ["ごろ", "まで", "に"] }
  },
  {
    p: "〜も（数量）", m: "as many/much as ~ (emphasis on amount)", s: "Quantity + も",
    n: "Shows the speaker finds the amount large. The negative 一つも〜ない means 'not even one'.",
    ex: [["昨日は十時間も寝ました。", "Yesterday I slept as long as ten hours."], ["ケーキを三つも食べました。", "I ate as many as three cakes."], ["友達が十人も来ました。", "As many as ten friends came."]],
    q: { s: "昨日は十時間＿＿寝ました。", t: "Yesterday I slept as long as ten hours.", a: "も", w: ["しか", "だけ", "ずつ"] }
  },
  {
    p: "〜や〜（など）", m: "~ and ~ (among others)", s: "Noun + や + Noun (+ など)",
    n: "Lists examples of a larger set. と gives a complete list; や implies there are more. 'など' can follow to make this explicit.",
    ex: [["机の上に本やペンがあります。", "On the desk there are books, pens and so on."], ["公園で犬や猫を見ました。", "I saw dogs, cats and so on in the park."], ["りんごやみかんなどを買いました。", "I bought apples, mandarins and the like."]],
    q: { s: "冷蔵庫に牛乳＿＿卵などがあります。", t: "There are things like milk and eggs in the fridge.", a: "や", w: ["より", "を", "へ"] }
  },
  {
    p: "〜の（名詞の代わり）", m: "~'s / the one that ~", s: "Noun / い-adjective + の",
    n: "の replaces a noun that is already understood: 私の (mine), 赤いの (the red one). It cannot replace a person in polite speech about someone's status.",
    ex: [["この傘は私のです。", "This umbrella is mine."], ["赤いのをください。", "Please give me the red one."], ["大きいのと小さいの、どちらがいいですか。", "The big one or the small one, which is better?"]],
    q: { s: "その鞄は田中さん＿＿ですか。", t: "Is that bag Mr. Tanaka's?", a: "の", w: ["が", "に", "を"] }
  },
  {
    p: "疑問詞＋か", m: "something / someone / somewhere", s: "何 / 誰 / どこ / いつ + か",
    n: "Adding か to a question word makes it indefinite: 何か (something), 誰か (someone), どこか (somewhere). The particle が/を can be dropped: 何か食べましょう.",
    ex: [["疲れましたね。何か飲みませんか。", "You must be tired. Shall we drink something?"], ["今度の休みは、どこか行きたいです。", "On the next holiday, I want to go somewhere."], ["部屋に誰かいますか。", "Is someone in the room?"]],
    q: { s: "部屋に誰＿＿いますか。", t: "Is someone in the room?", a: "か", w: ["も", "を", "へ"] }
  },
  {
    p: "疑問詞＋も〜ない", m: "nothing / no one / nowhere", s: "何 / 誰 / どこ + も + Verb (negative)",
    n: "Always with a negative verb. With どこ and 誰 + particle, put も after it: どこへも行かない, 誰とも話さない.",
    ex: [["今日は何も食べませんでした。", "I didn't eat anything today."], ["部屋には誰もいません。", "There is nobody in the room."], ["日曜日はどこへも行きません。", "I won't go anywhere on Sunday."]],
    q: { s: "部屋には誰＿＿いません。", t: "There is nobody in the room.", a: "も", w: ["か", "が", "を"] }
  },
  {
    p: "〜はどうですか", m: "how about ~? / how is ~?", s: "Noun + は + どうですか",
    n: "Makes a suggestion ('how about ~') or asks about condition ('how is ~'). A more polite version is 〜はいかがですか.",
    ex: [["日曜日はどうですか。", "How about Sunday?"], ["このシャツはどうですか。", "How about this shirt?"], ["お仕事はどうですか。", "How is your work?"]],
    q: { s: "お茶＿＿。", t: "How about some tea?", a: "はどうですか", w: ["をください", "がありますか", "ではありません"] }
  },
  {
    p: "〜をください", m: "please give me ~", s: "Noun + をください",
    n: "Asks for a thing (not an action: that is 〜てください). When a quantity is given it comes right before ください with no particle: コーヒーを二つください.",
    ex: [["すみません、水をください。", "Excuse me, please give me some water."], ["このりんごを三つください。", "Please give me three of these apples."], ["切符を二枚ください。", "Two tickets, please."]],
    q: { s: "すみません、メニュー＿＿。", t: "Excuse me, the menu, please.", a: "をください", w: ["をしてください", "をほしいです", "にください"] }
  },
  {
    p: "〜があります／〜います", m: "there is ~ (existence)", s: "Place + に + Thing + が + あります | Place + に + Person / Animal + が + います",
    n: "あります is for inanimate things (and plants); います is for people and animals. To say where something is, use Thing + は + Place + に + あります.",
    ex: [["机の上に本があります。", "There is a book on the desk."], ["公園に子どもがいます。", "There are children in the park."], ["駅の近くに銀行があります。", "There is a bank near the station."]],
    q: { s: "部屋に猫＿＿。", t: "There is a cat in the room.", a: "がいます", w: ["があります", "がいません", "がありません"] }
  },
  {
    p: "〜から〜まで", m: "from ~ to ~", s: "Time / Place + から + Time / Place + まで",
    n: "Marks the start and the end of a range. Each can also be used alone: 九時から (from nine), 駅まで (as far as the station).",
    ex: [["九時から五時まで働きます。", "I work from nine to five."], ["東京から大阪まで新幹線で行きます。", "I go from Tokyo to Osaka by bullet train."], ["月曜日から金曜日まで学校があります。", "There is school from Monday to Friday."]],
    q: { s: "朝八時＿＿夜五時まで働きます。", t: "I work from 8 a.m. to 5 p.m.", a: "から", w: ["まで", "を", "へ"] }
  },
  {
    p: "〜に〜回", m: "~ times per (period)", s: "Period + に + Number + 回",
    n: "Frequency: 一週間に二回 (twice a week), 一日に三回 (three times a day), 月に一回 (once a month).",
    ex: [["一週間に二回、プールに行きます。", "I go to the pool twice a week."], ["一日に三回、薬を飲みます。", "I take medicine three times a day."], ["月に一回、母に電話します。", "I call my mother once a month."]],
    q: { s: "一週間＿＿二回、テニスをします。", t: "I play tennis twice a week.", a: "に", w: ["を", "へ", "が"] }
  },
  {
    p: "〜てから", m: "after doing ~", s: "Verb (て-form) + から",
    n: "A then B, in that order. The first action is finished before the second begins. Do not confuse with the reason 〜から.",
    ex: [["手を洗ってから、ご飯を食べます。", "After washing my hands, I eat."], ["宿題をしてから、遊びます。", "I play after doing my homework."], ["仕事が終わってから、友達に会います。", "After work is over, I will meet a friend."]],
    q: { s: "手を洗っ＿＿、ご飯を食べます。", t: "After washing my hands, I eat.", a: "てから", w: ["ながら", "ないで", "ために"] }
  },
  {
    p: "〜あとで", m: "after ~", s: "Verb (た-form) / Noun + の + あとで",
    n: "Like 〜てから, but the verb before あとで is in the た-form. The mirror of 〜前に.",
    ex: [["食事のあとで、薬を飲みます。", "I take medicine after meals."], ["映画を見たあとで、お茶を飲みました。", "After watching the movie, we had tea."], ["授業が終わったあとで、図書館へ行きます。", "After class ends, I go to the library."]],
    q: { s: "仕事が終わった＿＿、飲みに行きましょう。", t: "Let's go for a drink after work is over.", a: "あとで", w: ["前に", "ながら", "ても"] }
  },
  {
    p: "〜が好きです／上手です", m: "like / be good at ~", s: "Noun + が + 好き / 嫌い / 上手 / 下手 / 分かる / できる",
    n: "The thing liked, disliked or mastered is marked by が, not を. The same applies to 分かる and できる.",
    ex: [["私は音楽が好きです。", "I like music."], ["妹は料理が上手です。", "My younger sister is good at cooking."], ["私は日本語が少し分かります。", "I understand a little Japanese."]],
    q: { s: "私は料理＿＿上手です。", t: "I am good at cooking.", a: "が", w: ["を", "に", "へ"] }
  },
  {
    p: "〜にします", m: "I'll choose ~ / I'll have ~", s: "Noun + に + します",
    n: "Expresses a choice or decision among options, e.g. when ordering. Ask 何にしますか (What will you have?).",
    ex: [["私はコーヒーにします。", "I'll have coffee."], ["昼ご飯はラーメンにしましょう。", "Let's have ramen for lunch."], ["飲み物は何にしますか。", "What will you have to drink?"]],
    q: { s: "私は紅茶＿＿します。", t: "I'll have tea.", a: "に", w: ["が", "を", "へ"] }
  },
  {
    p: "〜くて／〜で（つなぐ）", m: "and (joining adjectives / nouns)", s: "い-adj: 〜くて | な-adj / Noun: 〜で",
    n: "Connects descriptions into one sentence. い-adjectives change い to くて; the tense is shown only at the end of the sentence. いい becomes よくて.",
    ex: [["この部屋は広くて明るいです。", "This room is spacious and bright."], ["田中さんは親切で、おもしろいです。", "Mr. Tanaka is kind and funny."], ["姉は医者で、母は先生です。", "My older sister is a doctor, and my mother is a teacher."]],
    q: { s: "この店は安＿＿おいしいです。", t: "This shop is cheap and the food is delicious.", a: "くて", w: ["いで", "な", "に"] }
  },
  {
    p: "〜くない", m: "is not ~ (い-adjective negative)", s: "い-adjective (drop い) + くない(です)",
    n: "Polite: 〜くないです or 〜くありません. いい becomes よくない. な-adjectives and nouns use じゃない／ではありません.",
    ex: [["このカレーは辛くないです。", "This curry is not spicy."], ["今日は寒くないです。", "It isn't cold today."], ["この部屋はあまり広くありません。", "This room is not very big."]],
    q: { s: "このカレーは辛＿＿です。", t: "This curry is not spicy.", a: "くない", w: ["くて", "かった", "くなる"] }
  },
  {
    p: "〜かったです", m: "was ~ (い-adjective past)", s: "い-adjective (drop い) + かったです",
    n: "Past negative: 〜くなかったです. いい becomes よかったです. な-adjectives and nouns use でした.",
    ex: [["昨日は寒かったです。", "It was cold yesterday."], ["旅行は楽しかったです。", "The trip was fun."], ["先週は忙しくなかったです。", "I wasn't busy last week."]],
    q: { s: "昨日は寒＿＿。", t: "It was cold yesterday.", a: "かったです", w: ["いです", "くないです", "くなります"] }
  },
  {
    p: "〜普通形＋名詞（名詞を説明する）", m: "noun-modifying clause (the ~ that ...)", s: "Verb / Adjective (plain form) + Noun",
    n: "The modifying clause goes in front of the noun, in plain form (not ます). The subject inside the clause takes が (or の): 私が買った本.",
    ex: [["これは私が昨日買った本です。", "This is the book I bought yesterday."], ["公園で遊んでいる子どもは私の弟です。", "The child playing in the park is my younger brother."], ["私が好きな食べ物はすしです。", "The food I like is sushi."]],
    q: { s: "これは私が昨日買っ＿＿本です。", t: "This is the book I bought yesterday.", a: "た", w: ["て", "ます", "ました"] }
  }
);

window.DATA.grammar[4].push(
  {
    p: "〜つもり", m: "intend to ~", s: "Verb (dictionary / ない-form) + つもりだ",
    n: "Your personal intention. Past つもりだった = I had meant to (but didn't). 〜つもりはない means 'I have no intention of ~'.",
    ex: [["来年、日本へ留学するつもりです。", "I intend to study in Japan next year."], ["今日は何も買わないつもりです。", "I don't intend to buy anything today."], ["夏休みに車の免許を取るつもりです。", "I plan to get a driver's license during summer vacation."]],
    q: { s: "来年、日本へ行く＿＿です。", t: "I intend to go to Japan next year.", a: "つもり", w: ["ところ", "ばかり", "ほど"] }
  },
  {
    p: "〜予定", m: "plan / scheduled to ~", s: "Verb (dictionary form) / Noun + の + 予定だ",
    n: "A fixed schedule or arrangement, more concrete than つもり. Often used for travel, meetings and events.",
    ex: [["来週、大阪へ出張する予定です。", "I'm scheduled to go on a business trip to Osaka next week."], ["結婚式は六月の予定です。", "The wedding is planned for June."], ["明日は友達と会う予定です。", "I'm planning to meet a friend tomorrow."]],
    q: { s: "来週、友達と京都へ行く＿＿です。", t: "I'm scheduled to go to Kyoto with a friend next week.", a: "予定", w: ["ところ", "おかげ", "ばかり"] }
  },
  {
    p: "〜ていく／〜てくる", m: "go/come after doing ~ / change over time", s: "Verb (て-form) + いく / くる",
    n: "1) Do something and then go away/come back (持っていく take, 持ってくる bring). 2) Change over time: 〜てくる = up to now (寒くなってきた), 〜ていく = from now on (増えていく).",
    ex: [["傘を持っていきます。", "I'll take an umbrella with me."], ["友達が自分で作ったお菓子を持ってきました。", "My friend brought sweets she made herself."], ["だんだん寒くなってきました。", "It has gradually gotten colder."]],
    q: { s: "友達が自分で作ったお菓子を持っ＿＿ました。", t: "My friend brought sweets she made herself.", a: "てき", w: ["ていき", "てしまい", "ておき"] }
  },
  {
    p: "〜てしまう", m: "finish ~ completely / end up doing ~ (regret)", s: "Verb (て-form) + しまう",
    n: "Shows completion (全部食べてしまった) or regret about something done by mistake (忘れてしまった). Casual: 〜ちゃう／〜じゃう.",
    ex: [["電車に傘を忘れてしまいました。", "I left my umbrella on the train."], ["宿題はもう全部やってしまいました。", "I have already finished all my homework."], ["財布をなくしてしまいました。", "I've lost my wallet."]],
    q: { s: "大事なカードをなくし＿＿ました。", t: "I lost my important card (unfortunately).", a: "てしまい", w: ["ておき", "てみ", "てあげ"] }
  },
  {
    p: "〜ておく", m: "do ~ in advance / leave ~ as it is", s: "Verb (て-form) + おく",
    n: "Preparation for later (予約しておく) or leaving something in a state (窓を開けておく). Casual: 〜とく.",
    ex: [["旅行の前に、ホテルを予約しておきます。", "Before the trip, I'll book a hotel in advance."], ["暑いので、窓を開けておきましょう。", "It's hot, so let's leave the window open."], ["友達が来るので、部屋を掃除しておきました。", "Since a friend is coming, I cleaned the room beforehand."]],
    q: { s: "パーティーの前に、飲み物を買っ＿＿ました。", t: "I bought drinks in advance of the party.", a: "ておき", w: ["てしまい", "てみ", "てあり"] }
  },
  {
    p: "〜てみる", m: "try doing ~", s: "Verb (て-form) + みる",
    n: "Do something to see what it is like. 〜てみたい = I want to try ~. The みる is written in hiragana.",
    ex: [["一度、日本のお酒を飲んでみたいです。", "I'd like to try Japanese sake once."], ["この服を着てみてもいいですか。", "May I try on these clothes?"], ["新しい店に行ってみました。", "I tried going to the new shop."]],
    q: { s: "この料理は初めてですが、食べ＿＿ます。", t: "I've never had this dish, but I'll try eating it.", a: "てみ", w: ["ておき", "てしまい", "てあげ"] }
  },
  {
    p: "〜てある", m: "has been done (state left by someone)", s: "Noun + が + Verb (transitive, て-form) + ある",
    n: "Describes a state that remains because someone did it on purpose: 窓が開けてある. For states with no intent, use intransitive 〜ている (窓が開いている).",
    ex: [["机の上にメモが置いてあります。", "A memo has been left on the desk."], ["部屋にきれいな花が飾ってあります。", "Beautiful flowers have been put up in the room."], ["ドアに鍵がかけてあります。", "The door has been locked."]],
    q: { s: "窓が開け＿＿ので、寒いです。", t: "The window has been left open, so it's cold.", a: "てある", w: ["ている", "ておく", "てみる"] }
  },
  {
    p: "〜始める／〜終わる／〜続ける", m: "start / finish / continue doing ~", s: "Verb (ます-stem) + 始める / 終わる / 続ける",
    n: "Aspect endings: 読み始める (begin reading), 読み終わる (finish reading), 読み続ける (keep reading). For a sudden start, 〜出す is also used.",
    ex: [["雨が降り始めました。", "It started to rain."], ["この本をやっと読み終わりました。", "I finally finished reading this book."], ["三年間、日本語を勉強し続けています。", "I have kept studying Japanese for three years."]],
    q: { s: "朝からずっと雨が降り＿＿います。", t: "It has been raining continuously since morning.", a: "続けて", w: ["始めて", "終わって", "すぎて"] }
  },
  {
    p: "〜なさい", m: "do ~ (mild command)", s: "Verb (ます-stem) + なさい",
    n: "A command from a parent, teacher or exam instruction. Do not use it to superiors. Casual commands: 〜な (e.g. 早く寝な).",
    ex: [["早く寝なさい。", "Go to bed early."], ["静かにしなさい。", "Be quiet."], ["次の文を読みなさい。", "Read the next sentence."]],
    q: { s: "もう遅いから、早く寝＿＿。", t: "It's late, so go to bed early.", a: "なさい", w: ["たいです", "ています", "すぎます"] }
  },
  {
    p: "〜(ら)れる（受身）", m: "be done (by someone) — passive", s: "Group 1: u→aれる | Group 2: る→られる | する→される | 来る→来られる",
    n: "The person doing the action is marked by に. Passive can also show annoyance when an event affects you (雨に降られた = I got rained on; 友達に来られた).",
    ex: [["私は先生にほめられました。", "I was praised by my teacher."], ["電車で足を踏まれました。", "My foot was stepped on in the train."], ["昨日、雨に降られました。", "I got caught in the rain yesterday."]],
    q: { s: "私は先生にほめ＿＿ました。", t: "I was praised by my teacher.", a: "られ", w: ["させ", "たがり", "すぎ"] }
  },
  {
    p: "〜(さ)せる（使役）", m: "make / let someone do ~ — causative", s: "Group 1: u→aせる | Group 2: る→させる | する→させる | 来る→来させる",
    n: "The person made to act takes に (or を for intransitive verbs: 子どもを遊ばせる). It can mean both 'make' and 'let' depending on context.",
    ex: [["母は子どもに野菜を食べさせます。", "My mother makes her child eat vegetables."], ["先生は学生に作文を書かせました。", "The teacher made the students write compositions."], ["子どもを公園で遊ばせます。", "I let my child play in the park."]],
    q: { s: "母は子どもに野菜を食べ＿＿ました。", t: "My mother made the child eat vegetables.", a: "させ", w: ["たがり", "おわり", "すぎ"] }
  },
  {
    p: "〜ば（条件）", m: "if ~ (conditional)", s: "Verb: u→eば (する→すれば, 来る→来れば) | い-adj: 〜ければ | ない→なければ",
    n: "Emphasizes the condition. When the main clause is an action (request, command, intention), 〜たら is usually safer. Often seen in 〜ばいい and 〜ばよかった.",
    ex: [["急げば、電車に間に合います。", "If you hurry, you'll catch the train."], ["天気がよければ、散歩に行きます。", "If the weather is good, I'll go for a walk."], ["この薬を飲めば、すぐ治ります。", "If you take this medicine, you'll recover soon."]],
    q: { s: "急げ＿＿、電車に間に合います。", t: "If you hurry, you'll catch the train.", a: "ば", w: ["たら", "なら", "と"] }
  },
  {
    p: "〜と（自然な結果）", m: "when ~, (naturally) ~ / if ~, ~", s: "Verb (dictionary / ない-form) / い-adj / な-adj + だ / Noun + だ + と",
    n: "An automatic, natural or habitual result: machines, directions, weather. The main clause cannot be a request, command, invitation or intention.",
    ex: [["春になると、桜が咲きます。", "When spring comes, the cherry blossoms bloom."], ["このボタンを押すと、ドアが開きます。", "If you press this button, the door opens."], ["まっすぐ行くと、右に駅があります。", "If you go straight, the station is on your right."]],
    q: { s: "このボタンを押す＿＿、お茶が出ます。", t: "If you press this button, tea comes out.", a: "と", w: ["ながら", "たり", "ても"] }
  },
  {
    p: "〜し", m: "~, and what's more ~ (listing reasons)", s: "Plain form + し",
    n: "Lists reasons or qualities, implying there are more. Often 〜し、〜し、(それで)〜. A single し can also hint 'among other reasons'.",
    ex: [["この店は安いし、おいしいし、よく来ます。", "This shop is cheap and tasty, so I often come."], ["今日は雨だし、うちにいます。", "It's raining today, so I'll stay home."], ["天気もいいし、散歩に行きましょう。", "The weather is nice, too, so let's go for a walk."]],
    q: { s: "この店は安い＿＿、おいしいです。", t: "This shop is cheap, and what's more, it's delicious.", a: "し", w: ["ても", "たり", "まで"] }
  },
  {
    p: "〜そうだ（伝聞）", m: "I hear that ~", s: "Plain form + そうだ",
    n: "Passes on information heard from someone else. Often with 〜によると. Different from appearance 〜そうだ (stem + そう, e.g. おいしそう).",
    ex: [["天気予報によると、明日は雨だそうです。", "According to the weather forecast, it will rain tomorrow."], ["田中さんは来月、結婚するそうです。", "I hear Mr. Tanaka is getting married next month."], ["あのレストランはおいしいそうです。", "I hear that restaurant is good."]],
    q: { s: "ニュースによると、昨日は大きい地震があった＿＿。", t: "According to the news, there was a big earthquake yesterday.", a: "そうです", w: ["たいです", "ましょう", "てください"] }
  },
  {
    p: "〜という＋名詞", m: "called ~ / named ~", s: "Name + という + Noun",
    n: "Introduces something by name, often when the listener may not know it. 何という〜ですか asks 'What is it called?'.",
    ex: [["「さくら」という名前の犬を飼っています。", "I have a dog named Sakura."], ["山田さんという人から電話がありました。", "There was a call from a person named Yamada."], ["これは何という花ですか。", "What is this flower called?"]],
    q: { s: "山田さん＿＿人から電話がありました。", t: "There was a call from a person named Yamada.", a: "という", w: ["のような", "ための", "ばかりの"] }
  },
  {
    p: "〜と言う（引用）", m: "say that ~ (quotation)", s: "「Sentence」と言う | Plain form + と言う",
    n: "Direct quote: 「…」と言う. Indirect quote: plain form + と言う. Similar frames: と聞く (hear), と書いてある (it says).",
    ex: [["先生は「明日テストがある」と言いました。", "The teacher said, \"There will be a test tomorrow.\""], ["田中さんは明日来ないと言っていました。", "Mr. Tanaka said he won't come tomorrow."], ["母は「早く帰ってきなさい」と言いました。", "My mother said, \"Come home early.\""]],
    q: { s: "田中さんは明日来ない＿＿言っていました。", t: "Mr. Tanaka said he won't come tomorrow.", a: "と", w: ["を", "が", "に"] }
  },
  {
    p: "〜だろう", m: "probably ~ (plain form of でしょう)", s: "Plain form (noun / な-adj without だ) + だろう",
    n: "Plain/written version of でしょう. Before と思う use だろう: だろうと思います (でしょう cannot go before と思う). Question: だろうか.",
    ex: [["明日は雨が降るだろう。", "It will probably rain tomorrow."], ["彼はもう家に着いただろう。", "He has probably arrived home by now."], ["試験は難しいだろうと思います。", "I think the exam will probably be difficult."]],
    q: { s: "明日は雨が降る＿＿と思います。", t: "I think it will probably rain tomorrow.", a: "だろう", w: ["ましょう", "ように", "ことに"] }
  },
  {
    p: "〜でも（例示）", m: "~ or something / even ~", s: "Noun + でも",
    n: "Offers a casual example when inviting or suggesting (お茶でも飲みませんか). It can also mean 'even' for an extreme case: 子どもでも分かる.",
    ex: [["お茶でも飲みませんか。", "Why don't we have tea or something?"], ["暇なとき、映画でも見に行きましょう。", "When we're free, let's go to a movie or something."], ["この問題は子どもでも分かります。", "Even a child can understand this problem."]],
    q: { s: "疲れたでしょう。お茶＿＿飲みませんか。", t: "You must be tired. Shall we have some tea or something?", a: "でも", w: ["まで", "より", "ほど"] }
  },
  {
    p: "疑問詞＋でも", m: "any ~ / whatever ~ / anyone ~", s: "誰 / 何 / いつ / どこ + でも",
    n: "Means 'no matter who/what/when/where'. Used with positive sentences: 誰でもできる (anyone can do it). With どこ + particle: どこへでも, 誰にでも.",
    ex: [["この本は誰でも読めます。", "Anyone can read this book."], ["いつでも電話してください。", "Please call me anytime."], ["私はどこでも寝られます。", "I can sleep anywhere."]],
    q: { s: "この本は誰＿＿読めます。", t: "Anyone can read this book.", a: "でも", w: ["も", "が", "を"] }
  },
  {
    p: "〜かどうか", m: "whether or not ~", s: "Plain form (noun / な-adj without だ) + かどうか",
    n: "Embeds a yes/no question inside a sentence. If there is a question word, use か only (何を食べるか分からない).",
    ex: [["明日雨が降るかどうか分かりません。", "I don't know whether it will rain tomorrow."], ["彼が来るかどうか、聞いてみます。", "I'll ask whether he is coming."], ["このカレーが辛いかどうか、食べてみてください。", "Please try it and see whether this curry is spicy."]],
    q: { s: "明日雨が降る＿＿分かりません。", t: "I don't know whether it will rain tomorrow.", a: "かどうか", w: ["ように", "ながら", "ために"] }
  },
  {
    p: "〜てほしい", m: "want (someone) to do ~", s: "Person + に + Verb (て-form) + ほしい / Verb (ない-form) + でほしい",
    n: "Wanting ANOTHER person to do something. For your own wish, use 〜たい. Negative: 〜ないでほしい.",
    ex: [["友達に手伝ってほしいです。", "I want my friend to help me."], ["子どもに野菜を食べてほしいです。", "I want my child to eat vegetables."], ["私の話を聞いてほしいです。", "I want you to listen to me."]],
    q: { s: "彼にもっと勉強し＿＿。", t: "I want him to study more.", a: "てほしいです", w: ["たいです", "ています", "てはいけません"] }
  },
  {
    p: "〜ようとする", m: "try to ~ / be about to ~", s: "Verb (volitional form) + と + する",
    n: "Volitional: group 1 u→おう, group 2 る→よう. Means an attempt or being on the verge of acting: 出かけようとしたとき (just as I was about to leave). Negative: 〜ようとしない (refuses to).",
    ex: [["出かけようとしたとき、電話が鳴りました。", "Just as I was about to go out, the phone rang."], ["子どもが立ち上がろうとしています。", "The baby is trying to stand up."], ["彼は何も言おうとしませんでした。", "He wouldn't say anything."]],
    q: { s: "家を出＿＿したとき、雨が降り始めました。", t: "When I was about to leave home, it started to rain.", a: "ようと", w: ["てと", "ますと", "たらと"] }
  },
  {
    p: "〜間に", m: "while ~ / during ~ (something happens)", s: "Verb (dictionary / ている) / い-adj / な-adj + な / Noun + の + 間に",
    n: "A one-time event happens within a period. 〜間 (without に) means the state or action continues throughout the whole period.",
    ex: [["私が寝ている間に、地震がありました。", "An earthquake happened while I was sleeping."], ["母が買い物に行っている間に、掃除をしました。", "I cleaned while my mother was out shopping."], ["夏休みの間に、運転免許を取りたいです。", "I want to get a driver's license during the summer vacation."]],
    q: { s: "私が寝ている＿＿、地震がありました。", t: "An earthquake happened while I was sleeping.", a: "間に", w: ["ながら", "前に", "まで"] }
  },
  {
    p: "〜までに", m: "by ~ (deadline)", s: "Time + までに + one-time action",
    n: "Deadline for something done once. Compare まで, which marks how long an action continues (五時まで待つ = wait until five).",
    ex: [["金曜日までに、レポートを出してください。", "Please hand in your report by Friday."], ["五時までに、帰ります。", "I'll be back by five."], ["明日までに、この本を読まなければなりません。", "I have to read this book by tomorrow."]],
    q: { s: "金曜日＿＿、レポートを出してください。", t: "Please hand in your report by Friday.", a: "までに", w: ["を", "へ", "が"] }
  },
  {
    p: "〜ほど〜ない", m: "not as ~ as ~", s: "A は B + ほど + adjective (negative)",
    n: "Always followed by a negative: A is less ~ than B. Positive comparison uses より.",
    ex: [["今年の冬は去年ほど寒くないです。", "This winter is not as cold as last year."], ["日本語は英語ほど難しくないと思います。", "I don't think Japanese is as difficult as English."], ["私は弟ほど背が高くありません。", "I'm not as tall as my younger brother."]],
    q: { s: "今年の夏は去年＿＿暑くないです。", t: "This summer is not as hot as last year.", a: "ほど", w: ["だけ", "ばかり", "ずつ"] }
  },
  {
    p: "〜しか〜ない", m: "only ~ (nothing but ~)", s: "Noun / Quantity + しか + Verb (negative)",
    n: "Always with a negative verb, and stresses that the amount is small or insufficient. Neutral 'only' is だけ.",
    ex: [["財布に百円しかありません。", "I have only 100 yen in my wallet."], ["朝は、コーヒーしか飲みません。", "In the morning, I drink nothing but coffee."], ["今日は一人しか来ませんでした。", "Only one person came today."]],
    q: { s: "財布に百円＿＿ありません。", t: "I have only 100 yen in my wallet.", a: "しか", w: ["ずつ", "ごろ", "まで"] }
  },
  {
    p: "〜ことがある（時々）", m: "sometimes ~ / there are times when ~", s: "Verb (dictionary / ない-form) + ことがある",
    n: "Occasional events. Do not confuse with 〜たことがある (past experience). The verb before ことがある is in the dictionary form.",
    ex: [["休みの日は、朝まで寝ることがあります。", "On days off, I sometimes sleep until morning."], ["忙しくて、昼ご飯を食べないことがあります。", "I'm busy, so sometimes I don't eat lunch."], ["時々、電車が遅れることがあります。", "Sometimes the train is late."]],
    q: { s: "時々、電車が遅れる＿＿。", t: "Sometimes the train is late.", a: "ことがあります", w: ["ことができます", "ことにします", "ようになります"] }
  },
  {
    p: "〜なくてもいい", m: "don't have to ~", s: "Verb (ない-form, drop い) + くてもいい",
    n: "No obligation. Also 〜なくても大丈夫です. Not the same as 〜てはいけません (must not).",
    ex: [["明日は学校へ行かなくてもいいです。", "I don't have to go to school tomorrow."], ["急がなくてもいいですよ。", "You don't have to hurry."], ["今日は傘を持って行かなくてもいいでしょう。", "You probably don't need to take an umbrella today."]],
    q: { s: "明日は日曜日だから、早く起き＿＿。", t: "Tomorrow is Sunday, so I don't have to get up early.", a: "なくてもいいです", w: ["なければなりません", "てはいけません", "ないでください"] }
  },
  {
    p: "〜たほうがいい／〜ないほうがいい", m: "had better ~ / had better not ~", s: "Verb (た-form) + ほうがいい | Verb (ない-form) + ほうがいい",
    n: "Friendly advice. The affirmative usually uses the た-form; the negative uses the ない-form.",
    ex: [["風邪をひいたら、早く寝たほうがいいです。", "If you catch a cold, you should go to bed early."], ["夜は、コーヒーを飲まないほうがいいですよ。", "You'd better not drink coffee at night."], ["傘を持っていったほうがいいですよ。", "You'd better take an umbrella."]],
    q: { s: "薬を飲んだ＿＿いいですよ。", t: "You'd better take the medicine.", a: "ほうが", w: ["ばかりが", "うちが", "せいが"] }
  },
  {
    p: "〜ないで（否定の連用）", m: "without doing ~ / instead of ~", s: "Verb (ない-form) + で",
    n: "Do something WITHOUT doing the first action. The written equivalent is 〜ずに. Do not confuse with 〜なくて (cause) or 〜ないでください (request).",
    ex: [["朝ご飯を食べないで、学校へ行きました。", "I went to school without eating breakfast."], ["辞書を使わないで、この本を読みました。", "I read this book without using a dictionary."], ["何も言わないで、出ていきました。", "He left without saying anything."]],
    q: { s: "朝ご飯を食べ＿＿、学校へ行きました。", t: "I went to school without eating breakfast.", a: "ないで", w: ["なくて", "ないでください", "なければ"] }
  },
  {
    p: "〜の（名詞化）", m: "doing ~ (turns a verb into a noun)", s: "Verb / Adjective (plain form) + の + が / は / を",
    n: "の turns a clause into a noun phrase: 泳ぐのが好き (I like swimming). 見る・聞く・待つ perception verbs also use の: 歌っているのを聞いた.",
    ex: [["私は泳ぐのが好きです。", "I like swimming."], ["朝早く起きるのは大変です。", "Getting up early in the morning is hard."], ["田中さんが歌っているのを聞きました。", "I heard Mr. Tanaka singing."]],
    q: { s: "私は料理をする＿＿好きです。", t: "I like cooking.", a: "のが", w: ["のを", "のに", "ので"] }
  },
  {
    p: "〜くする／〜にする", m: "make ~ (change the state of something)", s: "い-adj: 〜く + する | な-adj / Noun: 〜に + する",
    n: "Changes something on purpose: 小さくする (make smaller), きれいにする (make clean). The intransitive version is 〜くなる／〜になる.",
    ex: [["音を小さくしてください。", "Please turn the sound down."], ["部屋をきれいにしました。", "I cleaned the room (made it clean)."], ["先生はテストを簡単にしました。", "The teacher made the test easier."]],
    q: { s: "音を小さ＿＿してください。", t: "Please turn the sound down.", a: "く", w: ["に", "で", "な"] }
  },
  {
    p: "〜(よ)うと思う", m: "I'm thinking of doing ~", s: "Verb (volitional form) + と思う / と思っている",
    n: "Intention just formed (思います) or an ongoing plan (思っています). Volitional: group 1 u→おう, group 2 る→よう, する→しよう, 来る→来よう.",
    ex: [["来年、日本へ留学しようと思っています。", "I'm thinking of studying in Japan next year."], ["今日は早く寝ようと思います。", "I think I'll go to bed early today."], ["週末は友達と会おうと思っています。", "I'm planning to meet a friend this weekend."]],
    q: { s: "来年、日本へ留学し＿＿思っています。", t: "I'm thinking of studying in Japan next year.", a: "ようと", w: ["てと", "ますと", "ましょうと"] }
  },
  {
    p: "〜のです／〜んです", m: "it's that ~ (explaining / asking for an explanation)", s: "Plain form (な-adj / noun + な) + んです",
    n: "Gives a reason or background, or asks for one: どうしたんですか (What's the matter?). Do not use it for plain neutral facts.",
    ex: [["昨日は休みました。頭が痛かったんです。", "I took a day off yesterday. I had a headache."], ["どうして遅れたんですか。", "Why were you late?"], ["日本語を勉強しているんです。", "You see, I'm studying Japanese."]],
    q: { s: "どうして遅れた＿＿か。", t: "Why were you late?", a: "んです", w: ["ましたです", "ですです", "たいです"] }
  },
  {
    p: "お〜になる（尊敬語）", m: "honorific form (someone esteemed does ~)", s: "お + Verb (ます-stem) + になる | ご + Sino-Japanese noun + になる",
    n: "Raises the other person's action. Do not use for yourself. Verbs with one-syllable stems (見る, 着る) use special forms (ご覧になる).",
    ex: [["社長はもうお帰りになりました。", "The president has already gone home."], ["先生は新聞をお読みになります。", "The teacher reads the newspaper."], ["何時にお着きになりますか。", "What time will you arrive?"]],
    q: { s: "先生は何時にお帰り＿＿か。", t: "What time will the teacher go home?", a: "になります", w: ["します", "ください", "いたします"] }
  },
  {
    p: "お〜する（謙譲語）", m: "humble form (I do ~ for someone esteemed)", s: "お + Verb (ます-stem) + する / いたす | ご + Sino-Japanese noun + する",
    n: "Lowers your own action toward the other person. Never use it for the other person's actions: 持ちます→お持ちします (I'll carry).",
    ex: [["荷物をお持ちします。", "I'll carry your luggage."], ["来週、先生にお会いします。", "I'll meet my teacher next week."], ["後でご連絡します。", "I'll contact you later."]],
    q: { s: "荷物をお持ち＿＿。", t: "I'll carry your luggage.", a: "します", w: ["になります", "ください", "なさいます"] }
  },
  {
    p: "いらっしゃる／おっしゃる／召し上がる／なさる（尊敬語）", m: "special honorific verbs", s: "行く・来る・いる→いらっしゃる | 言う→おっしゃる | 食べる・飲む→召し上がる | する→なさる | くれる→くださる",
    n: "Used for the other person's actions. The ます-forms are irregular: いらっしゃいます, おっしゃいます, なさいます, くださいます. Do not use for yourself.",
    ex: [["先生は明日、学校にいらっしゃいますか。", "Will the teacher be at school tomorrow?"], ["社長はこうおっしゃいました。", "The president said this."], ["どうぞ、召し上がってください。", "Please, help yourself (eat)."]],
    q: { s: "先生は明日、学校に＿＿か。", t: "Will the teacher be at school tomorrow?", a: "いらっしゃいます", w: ["おります", "参ります", "申します"] }
  },
  {
    p: "申す／参る／いたす／おる（謙譲語）", m: "special humble verbs", s: "言う→申す | 行く・来る→参る | する→いたす | いる→おる",
    n: "Used for your own actions (or your own group's) when speaking to someone esteemed. 〜と申します is the standard way to introduce yourself.",
    ex: [["私は田中と申します。", "My name is Tanaka."], ["明日、十時に参ります。", "I'll come at ten tomorrow."], ["私が説明いたします。", "I will explain."]],
    q: { s: "はじめまして。私は田中＿＿。", t: "Nice to meet you. My name is Tanaka.", a: "と申します", w: ["とおっしゃいます", "といらっしゃいます", "とくださいます"] }
  },
  {
    p: "お〜ください", m: "please ~ (honorific request)", s: "お + Verb (ます-stem) + ください | ご + Sino-Japanese noun + ください",
    n: "A polite request used in shops, stations and announcements: お待ちください, ご注意ください, ご覧ください.",
    ex: [["こちらで少しお待ちください。", "Please wait here a moment."], ["どうぞご利用ください。", "Please feel free to use it."], ["足元にご注意ください。", "Please watch your step."]],
    q: { s: "こちらで少しお待ち＿＿。", t: "Please wait here a moment.", a: "ください", w: ["します", "になります", "いたします"] }
  },
  {
    p: "〜たらいい／〜ばいい", m: "you should ~ / how should I ~? (advice)", s: "Verb (た-form + ら / ば-form) + いい(ですか)",
    n: "Asks for or gives advice: どうすればいいですか (What should I do?). Wishes use 〜といいですね. The same meaning in short: 〜たらどう？",
    ex: [["駅へ行くには、どうしたらいいですか。", "How should I go to get to the station?"], ["分からなければ、先生に聞けばいいですよ。", "If you don't understand, you should just ask the teacher."], ["疲れたら、休んだらいいですよ。", "If you're tired, you should rest."]],
    q: { s: "分からないことがあったら、先生に聞い＿＿いいですよ。", t: "If there is something you don't understand, you should ask the teacher.", a: "たら", w: ["ながら", "たり", "ので"] }
  },
  {
    p: "〜(よ)う（意向形）", m: "let's ~ / I'll ~ (plain volitional)", s: "Group 1: u→おう | Group 2: る→よう | する→しよう | 来る→来よう",
    n: "The casual form of 〜ましょう. 〜(よ)うか means 'shall we/I?'. It is also the base of 〜(よ)うと思う and 〜ようとする.",
    ex: [["一緒に帰ろう。", "Let's go home together."], ["今日は早く寝よう。", "I'll go to bed early today."], ["昼ご飯を食べようか。", "Shall we have lunch?"]],
    q: { s: "一緒に帰＿＿。", t: "Let's go home together.", a: "ろう", w: ["った", "って", "ない"] }
  },
  {
    p: "〜とか〜とか", m: "things like ~ and ~", s: "Noun / Verb (plain form) + とか + Noun / Verb + とか",
    n: "A casual way to list examples, like 〜や〜など. The last とか is often attached to the following particle.",
    ex: [["休みの日は、映画とか買い物とかに行きます。", "On days off, I go to things like movies and shopping."], ["果物なら、りんごとかバナナとかが好きです。", "As for fruit, I like things like apples and bananas."], ["疲れたときは、寝るとか音楽を聞くとかします。", "When I'm tired, I do things like sleeping or listening to music."]],
    q: { s: "休みの日は、料理＿＿掃除とかをします。", t: "On days off, I do things like cooking and cleaning.", a: "とか", w: ["より", "を", "まで"] }
  },
  {
    p: "〜ずつ", m: "~ each / ~ at a time", s: "Quantity + ずつ",
    n: "An equal share or repeated amount: 一人に二つずつ (two each). 少しずつ means 'little by little'.",
    ex: [["学生に本を一冊ずつ配ります。", "I hand out one book to each student."], ["毎日、漢字を五つずつ覚えます。", "I memorize five kanji each day."], ["少しずつ日本語が分かるようになりました。", "Little by little I came to understand Japanese."]],
    q: { s: "学生に本を一冊＿＿配ります。", t: "I hand out one book to each student.", a: "ずつ", w: ["ごろ", "しか", "より"] }
  },
  {
    p: "〜がする", m: "(a smell / sound / taste / feeling) is noticeable", s: "Noun (におい / 音 / 味 / 声 / 気 など) + が + する",
    n: "Describes a sensation you perceive: いいにおいがする, 変な音がする. Also in fixed phrases: 頭痛がする, 〜という気がする.",
    ex: [["台所からいいにおいがします。", "A nice smell is coming from the kitchen."], ["外で変な音がしました。", "A strange noise came from outside."], ["このスープは、少し甘い味がします。", "This soup tastes a little sweet."]],
    q: { s: "台所からいいにおい＿＿します。", t: "A nice smell is coming from the kitchen.", a: "が", w: ["へ", "まで", "より"] }
  },
  {
    p: "〜か〜ないか", m: "whether ~ or not", s: "Verb / Adjective (dictionary form) + か + (ない-form) + か",
    n: "An embedded either/or question, nearly the same as 〜かどうか but with the options spelled out.",
    ex: [["行くか行かないか、まだ決めていません。", "I haven't decided yet whether to go or not."], ["できるかできないか、やってみましょう。", "Let's try and see whether we can do it."], ["おいしいかおいしくないか、食べてみないと分かりません。", "I can't tell whether it's tasty until I try it."]],
    q: { s: "行く＿＿行かないか、まだ決めていません。", t: "I haven't decided yet whether to go or not.", a: "か", w: ["が", "と", "を"] }
  },
  {
    p: "〜と同じ／〜と違う", m: "the same as ~ / different from ~", s: "A は B + と + 同じだ／違う",
    n: "と marks the thing compared. Before a noun, 同じ takes no な or の: 同じ会社 (the same company).",
    ex: [["私の傘は姉の傘と同じです。", "My umbrella is the same as my sister's."], ["日本の習慣は私の国と違います。", "Japanese customs are different from those in my country."], ["私は田中さんと同じ会社で働いています。", "I work at the same company as Mr. Tanaka."]],
    q: { s: "私の傘は姉の傘＿＿同じです。", t: "My umbrella is the same as my sister's.", a: "と", w: ["を", "へ", "まで"] }
  },
  {
    p: "〜でございます", m: "is (very polite です)", s: "Noun + でございます | ございます (polite あります)",
    n: "Used by shop and hotel staff when speaking to customers. It lowers the speaker's side and sounds very formal.",
    ex: [["こちらが受付でございます。", "This is the reception desk."], ["お手洗いはあちらでございます。", "The restroom is over there."], ["本日は定休日でございます。", "Today is our regular closing day."]],
    q: { s: "こちらが受付＿＿。", t: "This is the reception desk.", a: "でございます", w: ["でおります", "でいらっしゃいます", "でございません"] }
  }
);
