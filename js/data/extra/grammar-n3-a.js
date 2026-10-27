/*
 * Extra N3 grammar (slice A): expectations, inference & evidence, degree, aspect, and
 * related connective patterns. Appends to DATA.grammar[3].
 */
window.DATA = window.DATA || {};
window.DATA.grammar = window.DATA.grammar || { 5: [], 4: [], 3: [] };
window.DATA.grammar[3] = window.DATA.grammar[3] || [];
window.DATA.grammar[3].push(
  {
    p: "〜に決まっている", m: "is bound to ~ / surely ~", s: "Plain form (noun / な-adj without だ) + に決まっている",
    n: "The speaker's firm, almost emotional conviction ('of course it's so'). More colloquial and more assertive than 〜に違いない, and it often sounds like 'obviously'.",
    ex: [["あんなに勉強したのだから、合格するに決まっている。", "He studied so hard, so he's bound to pass."], ["夜中にコーヒーを飲んだら、眠れないに決まっています。", "If you drink coffee in the middle of the night, you're bound not to sleep."]],
    q: { s: "そんなに食べたら、おなかが痛くなる＿＿＿＿＿＿。", t: "If you eat that much, you'll surely get a stomachache.", a: "に決まっている", w: ["ことにする", "ところだ", "わけにはいかない"] }
  },
  {
    p: "〜はずがない", m: "there's no way that ~ / can't possibly ~", s: "Plain form (な-adj + な / noun + の) + はずがない",
    n: "Strong denial based on logic or knowledge. Also said はずはない. It states the speaker's judgment, so it is not used for your own plans or wishes.",
    ex: [["こんな簡単な問題を、彼が間違えるはずがない。", "There's no way he would get such an easy question wrong."], ["まだ習っていないから、できるはずがありません。", "We haven't learned it yet, so there's no way I can do it."]],
    q: { s: "あの人が嘘をつく＿＿＿＿＿。", t: "There's no way he would lie.", a: "はずがない", w: ["ことにする", "ところだ", "たびに"] }
  },
  {
    p: "〜っぽい", m: "~ish / -like / tends to ~", s: "Noun / Verb (ます-stem) / い-adj stem + っぽい",
    n: "Describes a quality that something resembles or a habitual tendency (子どもっぽい, 忘れっぽい, 水っぽい). It conjugates like an い-adjective and often has a slightly negative or casual feel.",
    ex: [["あの子は年のわりに大人っぽいですね。", "That child is quite grown-up for his age."], ["彼は忘れっぽいので、よくメモをとります。", "He is forgetful, so he often takes notes."]],
    q: { s: "このジュースは水＿＿＿ので、おいしくありません。", t: "This juice is watery, so it doesn't taste good.", a: "っぽい", w: ["がち", "気味", "かけ"] }
  },
  {
    p: "〜がち", m: "tend to ~ / be prone to ~", s: "Verb (ます-stem) / Noun + がち",
    n: "A tendency that is usually undesirable. 遅れがち, 忘れがち, 病気がち. Describes people or situations in general, not a one-time event.",
    ex: [["雨の日は、気持ちが暗くなりがちです。", "On rainy days one tends to feel down."], ["母は病気がちで、よく入院します。", "My mother is often ill and is hospitalized frequently."]],
    q: { s: "冬は風邪をひき＿＿＿です。", t: "In winter, people tend to catch colds.", a: "がち", w: ["かけ", "きり", "ながら"] }
  },
  {
    p: "〜気味", m: "a touch of ~ / feeling slightly ~", s: "Noun / Verb (ます-stem) + 気味",
    n: "A slight, not-very-pleasant sign or feeling (風邪気味, 疲れ気味, 太り気味). Read ぎみ. It describes a mild condition you are currently in.",
    ex: [["昨日から風邪気味で、頭が少し痛いです。", "I've had a touch of a cold since yesterday, and my head hurts a little."], ["最近、太り気味なので、運動を始めました。", "I've been putting on a little weight lately, so I started exercising."]],
    q: { s: "今朝から風邪＿＿で、のどが少し痛いです。", t: "Since this morning I've had a touch of a cold, and my throat hurts a little.", a: "気味", w: ["たて", "おき", "ずつ"] }
  },
  {
    p: "〜かける", m: "half-done ~ / about to ~", s: "Verb (ます-stem) + かける",
    n: "An action started but not finished or just about to happen. Often used as a modifier: 読みかけの本 (a half-read book). Also 死にかける (nearly die).",
    ex: [["読みかけの本が机の上にあります。", "A half-read book is on the desk."], ["彼は何か言いかけて、やめました。", "He started to say something, then stopped."], ["食べかけのパンを袋に入れた。", "I put the half-eaten bread in the bag."]],
    q: { s: "手紙を書き＿＿＿とき、電話が鳴りました。", t: "I was in the middle of writing a letter when the phone rang.", a: "かけた", w: ["きった", "すぎた", "やすかった"] }
  },
  {
    p: "〜きる", m: "do ~ completely / to the end", s: "Verb (ます-stem) + きる",
    n: "Finish something completely or use something up (食べきる, 使いきる). Negative potential 〜きれない means 'cannot do it all'. With a feeling word it means 'extremely' (疲れきる).",
    ex: [["マラソンを最後まで走りきりました。", "I ran the marathon all the way to the end."], ["この量は一人では食べきれません。", "I can't finish this amount alone."], ["彼女は疲れきった顔をしていた。", "She had a totally exhausted look."]],
    q: { s: "マラソンで最後まで走り＿＿ことができた。", t: "I was able to run all the way to the end of the marathon.", a: "きる", w: ["かける", "だす", "すぎる"] }
  },
  {
    p: "〜だす", m: "suddenly start ~ / burst into ~", s: "Verb (ます-stem) + だす",
    n: "Marks the beginning of an action, often sudden or unplanned (泣きだす, 降りだす, 走りだす). 〜はじめる is more neutral and works for planned actions.",
    ex: [["突然、赤ちゃんが泣きだしました。", "Suddenly the baby burst into tears."], ["雨が降りだしたので、かさをさしました。", "It started to rain, so I put up my umbrella."]],
    q: { s: "急に雨が降り＿＿＿＿＿。", t: "Suddenly it started to rain.", a: "だしました", w: ["きりました", "すぎました", "がちでした"] }
  },
  {
    p: "〜たとたん(に)", m: "just as ~ / the moment ~", s: "Verb (た-form) + とたん(に)",
    n: "Something unexpected happens right after an action. The second clause is in the past and describes something the speaker did not plan, so no commands or intentions.",
    ex: [["ベッドに入ったとたん、寝てしまいました。", "I fell asleep the moment I got into bed."], ["先生が教室に入ってきたとたん、みんなが静かになった。", "The moment the teacher came in, everyone went quiet."]],
    q: { s: "家を出た＿＿＿＿、雨が降ってきました。", t: "The moment I left the house, it started to rain.", a: "とたんに", w: ["ついでに", "うちに", "たびに"] }
  },
  {
    p: "〜ばかりか", m: "not only ~ but also ~", s: "Plain form (な-adj + な / noun) + ばかりか、〜も",
    n: "Adds a further, often stronger, item. The second part is usually marked with も, まで, or さえ. Similar to 〜だけでなく, but more formal.",
    ex: [["この店は安いばかりか、料理もおいしいです。", "This restaurant is not only cheap, the food is delicious too."], ["彼女は歌が上手なばかりか、ダンスも上手です。", "She's not only good at singing, she's good at dancing too."], ["昨日は雨ばかりか、風も強かった。", "Yesterday it was not only rainy, the wind was strong too."]],
    q: { s: "彼は英語＿＿＿＿、中国語も話せます。", t: "He can speak not only English but also Chinese.", a: "ばかりか", w: ["にとって", "について", "によると"] }
  },
  {
    p: "〜ほど", m: "to the extent that ~ / so ~ that ~", s: "Verb (plain) / い-adj / Noun + ほど",
    n: "Shows the degree of a state by an extreme example (泣くほど, 驚くほど). Also used in 〜ば〜ほど (the more ~, the more ~), and in 〜ほど〜ない for comparison.",
    ex: [["足が痛くて、歩けないほどでした。", "My leg hurt so much that I could hardly walk."], ["この町は、びっくりするほど静かです。", "This town is surprisingly quiet."], ["練習すればするほど、上手になります。", "The more you practice, the better you get."]],
    q: { s: "涙が出る＿＿＿うれしかった。", t: "I was so happy that tears came out.", a: "ほど", w: ["くせに", "せいで", "ために"] }
  },
  {
    p: "〜くらい／ぐらい（程度）", m: "about as much as ~ / so ~ that ~ / at least ~", s: "Verb (plain) / い-adj / Noun + くらい／ぐらい",
    n: "Gives an example showing the degree of something, like ほど. It can also say that something is trivial (それぐらい自分でやりなさい). Many speakers use ぐらい and くらい interchangeably.",
    ex: [["その店は、並ばないと入れないくらい人気です。", "That shop is so popular you can't get in without queuing."], ["それぐらい、自分でやりなさい。", "Do something like that by yourself."]],
    q: { s: "声が出ない＿＿＿、のどが痛いです。", t: "My throat hurts so much that I can't speak.", a: "くらい", w: ["ように", "ために", "うちに"] }
  },
  {
    p: "〜さえ", m: "even ~", s: "Noun (+ で/に etc.) + さえ | Noun + さえ + V-ば / 〜ば",
    n: "Gives an extreme example: if even this is so, the rest is certain. Usually with a negative (時間さえない). Particles は/が/を are replaced by さえ; others stay (でさえ). With a conditional it means 'if only ~' (お金さえあれば).",
    ex: [["彼は自分の名前さえ書けません。", "He can't even write his own name."], ["子どもでさえ知っています。", "Even a child knows that."], ["お金さえあれば、何でもできる。", "If I only had money, I could do anything."]],
    q: { s: "忙しくて、食事をする時間＿＿＿ありません。", t: "I'm so busy that I don't even have time to eat.", a: "さえ", w: ["だけ", "ばかり", "ほど"] }
  },
  {
    p: "〜わけがない", m: "there's no reason that ~ / no way ~", s: "Plain form (な-adj + な / noun + の) + わけがない",
    n: "Strong denial: logically impossible. Also 〜わけはない. Close to 〜はずがない but more emotional. Not the same as 〜わけではない (it doesn't mean that ~).",
    ex: [["こんなに高い時計を、学生が買えるわけがない。", "There's no way a student can buy such an expensive watch."], ["彼がそんなことを言うわけがありません。", "There's no way he would say such a thing."]],
    q: { s: "あの人が一人でこんなに難しい仕事を終えられる＿＿＿＿＿。", t: "There's no way he can finish such a difficult job alone.", a: "わけがない", w: ["ことはない", "ざるを得ない", "ついでに"] }
  },
  {
    p: "〜わけにはいかない", m: "can't (for social / moral reasons)", s: "Verb (dictionary form) + わけにはいかない",
    n: "You cannot do it because of circumstances, duty, or common sense—not because of ability. Polite: わけにはいきません.",
    ex: [["車で来たので、お酒を飲むわけにはいきません。", "I came by car, so I can't drink alcohol."], ["仕事が残っているので、帰るわけにはいきません。", "I still have work left, so I can't go home."]],
    q: { s: "明日は試験なので、今夜は遊ぶ＿＿＿＿＿。", t: "I have an exam tomorrow, so I can't afford to play tonight.", a: "わけにはいかない", w: ["はずがない", "ことはない", "ざるを得ない"] }
  },
  {
    p: "〜ないわけにはいかない", m: "can't not do ~ / have to ~", s: "Verb (ない-form) + わけにはいかない",
    n: "A double negative meaning 'I cannot avoid doing it' because of duty or circumstances. Similar to 〜なければならない but with a reluctant tone.",
    ex: [["上司に誘われたので、行かないわけにはいかない。", "My boss invited me, so I can't not go."], ["苦いが、薬を飲まないわけにはいかない。", "It's bitter, but I can't avoid taking the medicine."]],
    q: { s: "大事な会議なので、出席し＿＿＿＿＿＿＿。", t: "It's an important meeting, so I can't not attend.", a: "ないわけにはいかない", w: ["なくてもいい", "ないことにする", "なければよかった"] }
  },
  {
    p: "〜ざるを得ない", m: "have no choice but to ~", s: "Verb (ない-form minus ない) + ざるを得ない | する→せざるを得ない",
    n: "A formal, written way to say that you are forced to do something against your wishes. する becomes せざるを得ない.",
    ex: [["病気なので、旅行をあきらめざるを得ませんでした。", "Because I was ill, I had no choice but to give up the trip."], ["お金がないので、アルバイトをせざるを得ない。", "I have no money, so I have no choice but to work part-time."]],
    q: { s: "風邪をひいたので、今日は会社を休ま＿＿＿＿＿＿。", t: "I caught a cold, so I have no choice but to take the day off work.", a: "ざるを得ない", w: ["なくてもいい", "ないでください", "ないつもりだ"] }
  },
  {
    p: "〜ことはない", m: "there's no need to ~", s: "Verb (dictionary form) + ことはない",
    n: "Tells someone that an action is unnecessary, often to reassure them (心配することはない). Don't confuse it with 〜たことがない (have never done).",
    ex: [["試験はまだ先ですから、心配することはありません。", "The exam is still a way off, so there's no need to worry."], ["わざわざ行くことはないよ。メールで十分だ。", "There's no need to go all that way. An email is enough."]],
    q: { s: "まだ時間があるから、急ぐ＿＿＿＿＿。", t: "There's still time, so there's no need to hurry.", a: "ことはない", w: ["ことにする", "ざるを得ない", "ばかりだ"] }
  },
  {
    p: "〜ものだ", m: "used to ~ / should ~ / how ~ it is!", s: "Verb (plain) / い-adj / な-adj + な + ものだ",
    n: "Three uses: (1) Vたものだ = fond memories of a past habit; (2) Vるものだ = general rule or what one should do; (3) strong feeling (早いものですね).",
    ex: [["若いころは、毎日遅くまで働いたものです。", "When I was young, I used to work late every day."], ["人に会ったら、あいさつをするものだ。", "When you meet someone, you should greet them."], ["月日がたつのは早いものですね。", "How quickly time passes!"]],
    q: { s: "子どものころは、よく川で遊んだ＿＿＿。", t: "When I was a child, I used to play by the river often.", a: "ものだ", w: ["わけだ", "はずだ", "ことだ"] }
  },
  {
    p: "〜ものか", m: "as if I would ~! (strong denial)", s: "Plain form + ものか (casual: ものですか／もんか)",
    n: "A strong emotional denial; not a real question. Falling intonation. It sounds rough in speech, so it is mostly used among friends or in writing for emphasis.",
    ex: [["あんな店、二度と行くものか。", "I'll never go to a place like that again!"], ["誰が負けるものか。", "Like I'd lose!"], ["彼に私の気持ちが分かるものですか。", "As if he could understand my feelings."]],
    q: { s: "あんな人の言うことなんか、信じる＿＿＿。", t: "I'm not going to believe anything that person says!", a: "ものか", w: ["ものだ", "ばかりだ", "ところだ"] }
  },
  {
    p: "〜というより", m: "rather than ~ / more like ~ than ~", s: "Plain form / Noun + というより",
    n: "Says that a different description fits better than the first one: 'not so much A as B'. The first part is the one rejected.",
    ex: [["今日は涼しいというより、寒いです。", "Today is not so much cool as cold."], ["彼女は先生というより、友達のような人です。", "She's more like a friend than a teacher."]],
    q: { s: "彼女は優しい＿＿＿＿＿＿、おとなしいだけだと思う。", t: "I think she's not so much kind as just quiet.", a: "というより", w: ["にしたがって", "に対して", "をもとに"] }
  },
  {
    p: "〜といっても", m: "even though I say ~ / although ~", s: "Plain form / Noun + といっても",
    n: "Used to correct the impression the first part gives: 'I say A, but actually it's only a small degree.' The second clause explains the real, modest situation.",
    ex: [["海外旅行をしたといっても、韓国に一回行っただけです。", "I say I've traveled abroad, but I've only been to Korea once."], ["日本語が話せるといっても、あいさつ程度です。", "I say I can speak Japanese, but it's only greeting level."]],
    q: { s: "料理が得意＿＿＿＿＿＿、簡単なものしか作れません。", t: "Although I say I'm good at cooking, I can only make simple things.", a: "といっても", w: ["とともに", "に比べて", "に対して"] }
  },
  {
    p: "〜とは限らない", m: "not necessarily ~", s: "Plain form + とは限らない",
    n: "Denies that something is always true: 'it isn't always the case'. Often paired with 必ずしも or いつも. Partial negation, not a complete denial.",
    ex: [["有名な店がいつもおいしいとは限りません。", "A famous restaurant isn't necessarily delicious."], ["努力すれば必ず成功するとは限らない。", "Effort doesn't always lead to success."]],
    q: { s: "高い物がいつもいい物＿＿＿＿＿＿。", t: "Expensive things are not always good things.", a: "とは限らない", w: ["ざるを得ない", "ことはない", "わけがない"] }
  },
  {
    p: "〜に関して／〜に関する", m: "concerning ~ / regarding ~", s: "Noun + に関して / Noun + に関する + Noun",
    n: "Formal 'about'. Similar to について but slightly stiffer and used for broader topics. As a modifier: 〜に関する情報 (information about ~).",
    ex: [["日本の歴史に関して、本を書いています。", "I'm writing a book about Japanese history."], ["この事件に関する情報は、まだありません。", "There is no information about this incident yet."]],
    q: { s: "この問題＿＿＿＿＿＿、ご意見をお聞かせください。", t: "Please tell us your opinion regarding this problem.", a: "に関して", w: ["に比べて", "に加えて", "をはじめ"] }
  },
  {
    p: "〜に対して", m: "toward ~ / in contrast to ~", s: "Noun + に対して | Plain form (な-adj + な / noun + の) + のに対して",
    n: "Two uses: the target of an attitude or action (客に対して失礼だ), and a contrast between two things (A に対して B).",
    ex: [["先生に対して、そんな言い方は失礼です。", "That way of speaking is rude toward a teacher."], ["兄はおとなしいのに対して、弟はとても活発です。", "My older brother is quiet, whereas my younger brother is very lively."]],
    q: { s: "お客様＿＿＿＿＿＿、失礼なことを言ってはいけません。", t: "You must not say rude things to customers.", a: "に対して", w: ["にしたがって", "をもとに", "を中心に"] }
  },
  {
    p: "〜に比べて", m: "compared to ~", s: "Noun / Plain form + の + に比べて",
    n: "Compares the topic with a standard: 'compared to A, B is ~'. Written/neutral. Also 〜と比べて.",
    ex: [["東京は他の都市に比べて、物価が高いです。", "Prices in Tokyo are high compared to other cities."], ["昔に比べて、生活は便利になりました。", "Life has become convenient compared to the past."]],
    q: { s: "去年＿＿＿＿＿、今年は雪が少ないです。", t: "Compared with last year, there is less snow this year.", a: "に比べて", w: ["に関して", "をもとに", "をはじめ"] }
  },
  {
    p: "〜に加えて", m: "in addition to ~", s: "Noun / Plain form + の + に加えて",
    n: "Adds one more item to something already mentioned, usually of the same kind (often bad things piling up). A formal 'on top of ~'.",
    ex: [["彼女は日本語に加えて、韓国語も話せます。", "In addition to Japanese, she can speak Korean."], ["宿題に加えて、レポートも出さなければなりません。", "On top of homework, I have to hand in a report too."]],
    q: { s: "寒さ＿＿＿＿＿、雪も降ってきました。", t: "On top of the cold, it has started to snow as well.", a: "に加えて", w: ["に対して", "に関して", "にしたがって"] }
  },
  {
    p: "〜によると／〜によれば", m: "according to ~", s: "Noun + によると / によれば + ~そうだ・らしい・ということだ",
    n: "Gives the source of information. The sentence usually ends with hearsay forms such as そうだ, らしい, ということだ. Do not use it to give your own opinion.",
    ex: [["天気予報によると、明日は雨だそうです。", "According to the weather forecast, it will rain tomorrow."], ["友達の話によれば、あの店はおいしいらしい。", "According to my friend, that shop is good."]],
    q: { s: "ニュース＿＿＿＿＿、昨日駅の近くで事故があったそうです。", t: "According to the news, there was an accident near the station yesterday.", a: "によると", w: ["にとって", "に関して", "に比べて"] }
  },
  {
    p: "〜をもとに", m: "based on ~", s: "Noun + をもとに(して)",
    n: "Uses something (a fact, story, data) as the basis for creating or deciding something new. Often followed by 作る, 書く, 判断する.",
    ex: [["この映画は実際にあった話をもとにしています。", "This movie is based on a true story."], ["調査の結果をもとに、計画を立てます。", "We'll make a plan based on the survey results."]],
    q: { s: "この小説は、作者の子どものころの思い出＿＿＿＿＿書かれた。", t: "This novel was written based on the author's childhood memories.", a: "をもとに", w: ["に対して", "にしたがって", "に加えて"] }
  },
  {
    p: "〜を中心に", m: "centering on ~ / mainly ~", s: "Noun + を中心に(して)",
    n: "Something spreads or happens with a place, group, or topic as its center: 駅を中心に, 若者を中心に. The center is usually where the activity is greatest.",
    ex: [["駅を中心に、新しい店が増えています。", "New shops are increasing around the station."], ["台風は九州を中心に、大雨を降らせました。", "The typhoon brought heavy rain, mainly around Kyushu."], ["授業は会話を中心に進めます。", "The lessons will focus on conversation."]],
    q: { s: "この雑誌は二十代の女性＿＿＿＿＿＿、よく読まれています。", t: "This magazine is widely read, mainly by women in their twenties.", a: "を中心に", w: ["に比べて", "にしたがって", "に関して"] }
  },
  {
    p: "〜をはじめ", m: "starting with ~ / ~ and others", s: "Noun + をはじめ(として)",
    n: "Names the most representative example, then implies many others of the same kind follow: 'A and the rest'. Used for people, places, and things; usually positive.",
    ex: [["京都をはじめ、日本には古いお寺がたくさんあります。", "Japan has many old temples, starting with Kyoto."], ["田中さんをはじめ、クラスの皆さんが手伝ってくれました。", "Everyone in the class, beginning with Mr. Tanaka, helped me."]],
    q: { s: "この店は、りんご＿＿＿＿、いろいろな果物を売っています。", t: "This shop sells various fruits, starting with apples.", a: "をはじめ", w: ["に対して", "に関して", "にしたがって"] }
  },
  {
    p: "〜にしたがって", m: "as ~ / in accordance with ~", s: "Verb (dictionary form) / Noun + にしたがって",
    n: "Two uses: (1) as one thing changes, another changes along with it; (2) following rules, instructions, or a person (指示にしたがう). Written style.",
    ex: [["山を登るにしたがって、寒くなりました。", "As we climbed the mountain, it got colder."], ["説明書にしたがって、組み立ててください。", "Please assemble it according to the instructions."]],
    q: { s: "人口が増える＿＿＿＿＿＿、家の値段が上がっています。", t: "As the population increases, house prices are rising.", a: "にしたがって", w: ["に対して", "をもとに", "に比べて"] }
  },
  {
    p: "〜につれて", m: "as ~ (gradual change)", s: "Verb (dictionary form) / Noun + につれて",
    n: "As one thing gradually changes, another changes in step with it. Both clauses describe natural changes; it can't be followed by commands or the speaker's intentions.",
    ex: [["日本語が上達するにつれて、日本の生活が楽しくなりました。", "As my Japanese improved, life in Japan became more enjoyable."], ["夜が深まるにつれて、寒くなってきた。", "As the night deepened, it got colder."]],
    q: { s: "年をとる＿＿＿＿＿、体力が落ちてきました。", t: "As I get older, my physical strength has been declining.", a: "につれて", w: ["に関して", "をはじめ", "に加えて"] }
  },
  {
    p: "〜とともに", m: "together with ~ / as ~ (along with a change)", s: "Noun / Verb (dictionary form) + とともに",
    n: "Two uses: (1) doing something together with a person (家族とともに); (2) a change happening along with another (時代の変化とともに). Formal.",
    ex: [["彼は家族とともに日本へ来ました。", "He came to Japan together with his family."], ["技術の進歩とともに、生活は便利になりました。", "Life became convenient along with the progress of technology."]],
    q: { s: "時代の変化＿＿＿＿＿、人々の考え方も変わりました。", t: "Along with the changing times, people's way of thinking changed too.", a: "とともに", w: ["に関して", "に対して", "をもとに"] }
  },
  {
    p: "〜ついでに", m: "while I'm at it / on the occasion of ~", s: "Verb (dictionary / た-form) / Noun + の + ついでに",
    n: "You do a second, minor action while carrying out a main one, taking advantage of the opportunity. The main action comes first.",
    ex: [["散歩のついでに、パンを買ってきました。", "I bought some bread while I was out for a walk."], ["東京へ出張したついでに、友達に会いました。", "While I was in Tokyo on business, I also met a friend."]],
    q: { s: "買い物に行った＿＿＿＿、郵便局にも寄ってきた。", t: "While I was out shopping, I also stopped by the post office.", a: "ついでに", w: ["うちに", "とたんに", "末に"] }
  },
  {
    p: "〜かわりに", m: "instead of ~ / in exchange for ~", s: "Noun + の + かわりに | Verb / い-adj (plain) + かわりに",
    n: "Three uses: replacement (私のかわりに), exchange of favors (教えてもらうかわりに), and trade-off between good and bad points (高いかわりにおいしい).",
    ex: [["母のかわりに、私が料理を作りました。", "I cooked instead of my mother."], ["この店は高いかわりに、サービスがいいです。", "This shop is expensive, but in return the service is good."]],
    q: { s: "今日は私＿＿＿＿＿＿、弟が行きます。", t: "My younger brother will go instead of me today.", a: "のかわりに", w: ["のたびに", "のついでに", "のとたんに"] }
  },
  {
    p: "〜最中に", m: "in the middle of ~", s: "Noun + の + 最中に | Verb (ている) + 最中に",
    n: "At the very peak of an activity, something unexpected happens (an interruption or trouble). Read さいちゅう. Also used as 〜の最中だ.",
    ex: [["食事をしている最中に、地震がありました。", "An earthquake happened in the middle of the meal."], ["授業の最中に、眠くなってしまいました。", "I got sleepy in the middle of class."]],
    q: { s: "会議の＿＿＿＿、携帯電話が鳴ってしまった。", t: "My cell phone rang in the middle of the meeting.", a: "最中に", w: ["ついでに", "かわりに", "ばかりに"] }
  },
  {
    p: "〜末に", m: "after (a long process of) ~", s: "Verb (た-form) / Noun + の + 末に",
    n: "After a long process of effort, worry, or discussion, a final result comes. The result is usually a decision or an outcome that matters. Also written 〜た末、〜の末.",
    ex: [["悩んだ末に、会社を辞めることにしました。", "After agonizing over it, I decided to quit my job."], ["苦労の末、彼は夢をかなえました。", "After much hardship, he achieved his dream."]],
    q: { s: "何度も迷った＿＿＿＿、この大学に決めました。", t: "After hesitating many times, I decided on this university.", a: "末に", w: ["最中に", "ついでに", "かわりに"] }
  },
  {
    p: "〜つつある", m: "is in the process of ~ (gradual change)", s: "Verb (ます-stem) + つつある",
    n: "A change is gradually progressing right now. Formal and written, common in news and reports. Not used for ordinary actions (食べつつある is unnatural).",
    ex: [["世界の人口は増えつつあります。", "The world's population is increasing."], ["経済は回復しつつある。", "The economy is in the process of recovering."]],
    q: { s: "この町は、少しずつ変わり＿＿＿＿＿＿。", t: "This town is gradually changing.", a: "つつあります", w: ["きりです", "たいです", "すぎです"] }
  }
);
