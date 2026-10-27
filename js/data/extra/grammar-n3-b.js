/* Extra N3 grammar (set B): voice, conditionals, purpose, giving/receiving & politeness, nominalisation, set expressions. */
window.DATA = window.DATA || {};
window.DATA.grammar = window.DATA.grammar || {5: [], 4: [], 3: []};
window.DATA.grammar[3] = window.DATA.grammar[3] || [];
window.DATA.grammar[3].push(
  {
    p: "〜させられる", m: "be made to do ~ (causative-passive)", s: "Verb (causative) + られる | Group 1: ない-stem + される (書く→書かされる) | Group 2: 食べさせられる | する→させられる",
    n: "Expresses doing something against your will because someone made you. The person who forces you is marked by に. Group 1 verbs usually contract: 書かせられる → 書かされる (not for す-ending verbs like 話す → 話させられる).",
    ex: [["子どものころ、よく廊下に立たされました。", "When I was a child, I was often made to stand in the hallway."], ["昨日は上司に夜遅くまで働かされました。", "Yesterday I was made to work late into the night by my boss."], ["嫌いな野菜を食べさせられた。", "I was made to eat vegetables I dislike."]],
    q: { s: "昨日は上司に夜遅くまで働か＿＿＿＿。", t: "Yesterday I was made to work until late at night by my boss.", a: "されました", w: ["せました", "れました", "せたいです"] }
  },
  {
    p: "〜(さ)せてください", m: "please let me do ~", s: "Verb (causative: ない-stem + せる / 〜させる) + てください",
    n: "A request for permission to do something yourself. Group 1: 書く→書かせて, Group 2: 食べる→食べさせて, する→させて. More polite: 〜(さ)せていただけませんか.",
    ex: [["この仕事を私にやらせてください。", "Please let me do this job."], ["ちょっと考えさせてください。", "Please let me think about it for a moment."], ["明日は休ませてください。", "Please let me take tomorrow off."]],
    q: { s: "すみません、今日は早く帰ら＿＿＿＿＿＿。", t: "Excuse me, please let me go home early today.", a: "せてください", w: ["れてください", "せられました", "せたいです"] }
  },
  {
    p: "〜(さ)せていただく", m: "humbly do ~ (with the listener's permission)", s: "Verb (causative: 〜(さ)せて) + いただく",
    n: "Very polite way for the speaker to do something, as if receiving permission. Common in business and announcements: 説明させていただきます. Don't overuse it for things that need no permission.",
    ex: [["それでは、私から説明させていただきます。", "Then, allow me to explain first."], ["明日は休ませていただきたいのですが。", "I would like to take tomorrow off, if I may."], ["本日は早退させていただきます。", "I will leave early today, if you will allow me."]],
    q: { s: "それでは、私から説明さ＿＿＿＿＿＿＿。", t: "Then, allow me to explain first.", a: "せていただきます", w: ["せてくださいます", "れていただきます", "せてあげます"] }
  },
  {
    p: "〜ていただけませんか／〜てもらえませんか", m: "could you please ~ ?", s: "Verb (て-form) + いただけませんか (polite) / もらえませんか (less formal)",
    n: "Negative-potential questions make a request softer than 〜てください. いただけませんか is more polite than もらえませんか; 〜てくれませんか is plain and casual.",
    ex: [["すみませんが、写真を撮っていただけませんか。", "Excuse me, could you take a photo for me?"], ["駅までの道を教えてもらえませんか。", "Could you tell me the way to the station?"], ["少し静かにしていただけませんか。", "Could you please be a little quieter?"]],
    q: { s: "すみません、この荷物を持っ＿＿＿＿＿＿＿＿。", t: "Excuse me, could you carry this luggage for me?", a: "ていただけませんか", w: ["てあげませんか", "てさしあげませんか", "ておきませんか"] }
  },
  {
    p: "〜てくださる", m: "(someone higher) kindly does ~ for me", s: "Verb (て-form) + くださる (ます-form: くださいます)",
    n: "Honorific version of 〜てくれる, used when the giver is a teacher, boss or customer. Subject is the other person; the receiver is me or my side. Don't use it for your own actions.",
    ex: [["先生が推薦状を書いてくださいました。", "My teacher kindly wrote a letter of recommendation for me."], ["社長が駅まで送ってくださいました。", "The president kindly drove me to the station."], ["お客様が、お礼を言ってくださった。", "The customer kindly thanked us."]],
    q: { s: "先生が私に本を貸し＿＿＿＿＿＿＿。", t: "My teacher kindly lent me a book.", a: "てくださいました", w: ["てさしあげました", "ていただきました", "てあげました"] }
  },
  {
    p: "〜ようにする", m: "make an effort to ~ / try to ~", s: "Verb (dict. form / ない-form) + ようにする",
    n: "Shows continuing effort or a habit you try to keep: 毎日歩くようにしている. Different from ことにする (a one-time decision). Also used in requests: 〜ようにしてください.",
    ex: [["毎日野菜を食べるようにしています。", "I try to eat vegetables every day."], ["約束の時間に遅れないようにします。", "I'll make sure not to be late for the appointment."], ["なるべく階段を使うようにしている。", "I try to use the stairs as much as possible."]],
    q: { s: "健康のために、毎日歩く＿＿＿しています。", t: "For my health, I try to walk every day.", a: "ように", w: ["ために", "そうに", "ばかりに"] }
  },
  {
    p: "〜ように言う／頼む", m: "tell / ask (someone) to ~", s: "Verb (dict. form / ない-form) + ように + 言う / 頼む / 注意する",
    n: "Reports an indirect command or request. The person told is marked by に. Passive 〜ように言われる is common: 医者に休むように言われた.",
    ex: [["先生に、廊下を走らないように言われました。", "The teacher told me not to run in the hallway."], ["友達に静かにするように頼みました。", "I asked my friend to be quiet."], ["母に早く寝るように言われた。", "My mother told me to go to bed early."]],
    q: { s: "先生は学生に宿題を出す＿＿＿言いました。", t: "The teacher told the students to hand in their homework.", a: "ように", w: ["ことに", "ところに", "ながら"] }
  },
  {
    p: "〜ように（目的）", m: "so that ~ / in order that ~", s: "Verb (dict. / potential / ない-form) + ように",
    n: "Purpose clause with a non-volitional verb (potential, ない-form, 見える, なる) or when the two clauses have different subjects. ために goes with volitional verbs and the same subject: 日本へ行くために / 忘れないように.",
    ex: [["忘れないように、メモしておきます。", "I'll write a note so that I don't forget."], ["後ろの人にも見えるように、大きく書きました。", "I wrote it big so that people in the back can see it too."], ["赤ちゃんが起きないように、静かに歩きました。", "I walked quietly so that the baby wouldn't wake up."]],
    q: { s: "赤ちゃんが起きない＿＿＿、静かに歩きました。", t: "I walked quietly so that the baby would not wake up.", a: "ように", w: ["ことに", "ところに", "ばかりに"] }
  },
  {
    p: "〜べきだ", m: "should ~ / ought to ~", s: "Verb (dict. form) + べきだ / べきではない",
    n: "Moral or common-sense obligation, often stronger than ほうがいい. する can be するべき or すべき. 〜べきではない = should not. Not usually used for advice to a superior.",
    ex: [["学生は毎日勉強するべきだ。", "Students should study every day."], ["約束は守るべきです。", "You should keep your promises."], ["人の悪口を言うべきではありません。", "You should not speak ill of others."]],
    q: { s: "困っている人がいたら、助ける＿＿＿です。", t: "If someone is in trouble, you should help them.", a: "べき", w: ["ほど", "ばかり", "つもり"] }
  },
  {
    p: "〜ないことはない", m: "it's not that ~ not (= can / is, somewhat)", s: "Verb (ない-form) / い-adj く / な-adj で + ないことはない",
    n: "Double negative that means 'it's possible, but...' — a reserved, hesitant positive. Often followed by が／けど and a reservation.",
    ex: [["行けないことはないが、あまり行きたくない。", "It's not that I can't go, but I don't really want to."], ["難しいけど、できないことはありません。", "It's difficult, but it isn't impossible."], ["この料理は食べられないことはない。", "I can eat this dish if I have to."]],
    q: { s: "その仕事は、やれ＿＿＿＿＿＿＿＿が、あまりやりたくない。", t: "It's not that I can't do that job, but I don't much want to.", a: "ないことはない", w: ["ないでください", "なくてもいい", "ないようにする"] }
  },
  {
    p: "〜てはじめて", m: "only after ~ / not until ~", s: "Verb (て-form) + はじめて",
    n: "Realization or change that happens only after an experience. The second clause is usually a discovery or new state (分かった, 知った, 気づいた), not a plan or command.",
    ex: [["病気になってはじめて、健康のありがたさが分かった。", "Only after getting sick did I realize how precious health is."], ["外国に住んではじめて、自分の国の良さを知りました。", "Only after living abroad did I learn the good points of my country."], ["失敗してはじめて、自分の間違いに気づいた。", "It was only after failing that I noticed my mistake."]],
    q: { s: "病気になっ＿＿＿＿、健康のありがたさが分かった。", t: "Only after getting sick did I realize how precious health is.", a: "てはじめて", w: ["ても", "ながら", "たばかり"] }
  },
  {
    p: "〜てからでないと", m: "unless ~ first / not until ~", s: "Verb (て-form) + からでないと + negative / impossible",
    n: "Something can't be done unless another step is completed first. Also 〜てからでなければ. The ending is typically a negative or 'can't' sentence.",
    ex: [["親に聞いてからでないと、返事ができません。", "I can't answer unless I ask my parents first."], ["食事をしてからでないと、この薬は飲めません。", "You can't take this medicine until after you've eaten."], ["上司に相談してからでないと、決められない。", "I can't decide until I've consulted my boss."]],
    q: { s: "親に聞い＿＿＿＿＿＿＿＿、返事ができません。", t: "Unless I ask my parents first, I can't answer.", a: "てからでないと", w: ["てからでも", "てばかりで", "ながらでは"] }
  },
  {
    p: "〜たところ", m: "when I did ~, (I found that) ~", s: "Verb (た-form) + ところ、 result",
    n: "Describes a result or discovery after an action was tried; the result is a fact (past or state) that the speaker did not control. Don't confuse with 〜たところだ (just did).",
    ex: [["店に電話したところ、今日は休みだと言われました。", "When I called the shop, I was told it's closed today."], ["先生に相談したところ、いい本を教えてくれました。", "When I consulted my teacher, he told me about a good book."], ["試してみたところ、思ったより簡単だった。", "When I tried it, it was easier than I thought."]],
    q: { s: "店に電話し＿＿＿＿、今日は休みだと言われました。", t: "When I called the shop, I was told it's closed today.", a: "たところ", w: ["ているところ", "るところ", "たばかり"] }
  },
  {
    p: "〜なら", m: "if (it's the case that) ~ / if you're going to ~", s: "Plain form (noun / な-adj without だ) + なら",
    n: "Takes a topic or situation from the context or listener and gives advice or comment on it. Unlike 〜たら, the なら-clause is already assumed to be true or planned. Often 〜なら、〜がいい／おすすめだ.",
    ex: [["旅行に行くなら、沖縄がおすすめですよ。", "If you're going on a trip, I recommend Okinawa."], ["そんなに安いなら、私も買いたいです。", "If it's that cheap, I want to buy one too."], ["日本語を勉強するなら、この本がいいですよ。", "If you're going to study Japanese, this book is good."]],
    q: { s: "旅行に行く＿＿＿、沖縄がおすすめですよ。", t: "If you're going on a trip, I recommend Okinawa.", a: "なら", w: ["ので", "ながら", "ても"] }
  },
  {
    p: "〜ば〜ほど", m: "the more ~, the more ~", s: "Verb (ば-form) + Verb (dict. form) + ほど | い-adj (ければ) + い-adj + ほど | な-adj なら + な-adj + なほど",
    n: "Repeat the same word: first in the ば-form, then in the dictionary form, followed by ほど. The result describes a proportional change.",
    ex: [["練習すればするほど、上手になります。", "The more you practice, the better you get."], ["このお茶は、飲めば飲むほどおいしい。", "The more you drink this tea, the more delicious it is."], ["部屋は広ければ広いほどいい。", "The bigger the room, the better."]],
    q: { s: "日本語は勉強すれば＿＿＿、おもしろくなります。", t: "The more you study Japanese, the more interesting it becomes.", a: "するほど", w: ["するより", "するまで", "するたびに"] }
  },
  {
    p: "〜ながらも", m: "although ~ / while still ~", s: "Verb (ます-stem) / い-adj / な-adj (stem) / Noun + ながらも",
    n: "A formal or written concessive: 'in spite of'. Often seen in set phrases such as 狭いながらも、わかっていながらも, 残念ながら. Different from the simultaneous ながら (Vながら = while doing).",
    ex: [["この部屋は狭いながらも、住みやすいです。", "This room is small, but it's comfortable to live in."], ["彼は忙しいながらも、毎日日記を書いている。", "Although he is busy, he writes a diary every day."], ["失敗すると知りながらも、やってみた。", "Even though I knew I'd fail, I tried it."]],
    q: { s: "この部屋は狭い＿＿＿＿、住みやすいです。", t: "This room is small, but it's comfortable to live in.", a: "ながらも", w: ["うちに", "たびに", "ばかりに"] }
  },
  {
    p: "〜つつ", m: "while ~ / even while ~ (although)", s: "Verb (ます-stem) + つつ",
    n: "Literary: either 'while doing' (景色を楽しみつつ歩く) or, more often, 'although I know/think ~' (悪いと思いつつ…). The concessive use commonly follows 思う, 知る, 分かる and is followed by an action you shouldn't do.",
    ex: [["悪いと思いつつ、友達の日記を読んでしまった。", "Although I knew it was wrong, I ended up reading my friend's diary."], ["体に悪いと知りつつ、毎晩お酒を飲んでしまう。", "Knowing it's bad for me, I end up drinking every night."], ["景色を楽しみつつ、ゆっくり歩いた。", "I walked slowly, enjoying the scenery."]],
    q: { s: "ダイエット中だと分かり＿＿＿、ケーキを食べてしまった。", t: "Although I knew I was on a diet, I ended up eating cake.", a: "つつ", w: ["たり", "すぎ", "ましょう"] }
  },
  {
    p: "〜たがる／〜たがっている", m: "(someone else) wants to ~", s: "Verb (ます-stem) + たがる / たがっている",
    n: "〜たい shows the speaker's own wish; for a third person's observed desire use 〜たがる (usually 〜たがっている). 〜がる conjugates as a godan verb: たがらない, たがった.",
    ex: [["弟は新しいゲームをやりたがっています。", "My younger brother wants to play the new game."], ["子どもは何でも触りたがる。", "Children want to touch everything."], ["娘は犬を飼いたがっている。", "My daughter wants to keep a dog."]],
    q: { s: "弟は新しいゲームを買い＿＿＿＿＿＿。", t: "My younger brother wants to buy a new game.", a: "たがっています", w: ["たいです", "にくいです", "ませんでした"] }
  },
  {
    p: "〜ことだ", m: "you should ~ (advice)", s: "Verb (dict. form / ない-form) + ことだ",
    n: "Gives the speaker's own advice, often after 〜たければ／〜なら. Sounds a bit preachy; don't use it with a superior. Not the same as ことだ meaning 'it is a matter of'.",
    ex: [["上手になりたければ、毎日少しずつ練習することだ。", "If you want to get good, practice a little every day."], ["風邪をひきたくなければ、よく寝ることです。", "If you don't want to catch a cold, get enough sleep."], ["人に迷惑をかけないことだ。", "You should not cause trouble for others."]],
    q: { s: "健康になりたければ、毎日運動する＿＿＿。", t: "If you want to be healthy, you should exercise every day.", a: "ことだ", w: ["わけだ", "ばかりだ", "ところだ"] }
  },
  {
    p: "〜ことに（感情）", m: "what is ~ is that ... (emotion)", s: "Verb (た-form) / い-adj / な-adj + な + ことに、 fact",
    n: "States the speaker's feeling first, then the fact. Typical words: 驚いたことに, 残念なことに, うれしいことに, 困ったことに, 不思議なことに. Not the same as ことにする／ことになる.",
    ex: [["残念なことに、雨で試合が中止になりました。", "Unfortunately, the game was cancelled because of rain."], ["驚いたことに、彼は日本語が話せなかった。", "To my surprise, he couldn't speak Japanese."], ["うれしいことに、第一志望に合格した。", "To my delight, I passed my first-choice school."]],
    q: { s: "不思議な＿＿＿、その犬は人の言葉が分かるようだ。", t: "Strangely, that dog seems to understand human words.", a: "ことに", w: ["わけに", "ところに", "ものに"] }
  },
  {
    p: "〜というのは", m: "~ means / ~ is (definition, explanation)", s: "Noun / Quote + というのは、 explanation",
    n: "Introduces a definition or explanation of a word or concept. Spoken version: って. Also leads into a reason: 〜というのは、〜からだ (the reason is that ~).",
    ex: [["「お疲れさま」というのは、仕事のあとに使うあいさつです。", "'Otsukaresama' is a greeting used after work."], ["「ボランティア」というのは、お金をもらわずに人を助ける人のことです。", "A 'volunteer' is a person who helps others without being paid."], ["遅れてすみません。というのは、電車が止まったからです。", "Sorry I'm late. The reason is that the train stopped."]],
    q: { s: "「花見」＿＿＿＿＿＿、桜を見ながら食事をすることです。", t: "'Hanami' means eating while looking at cherry blossoms.", a: "というのは", w: ["というのに", "というよりは", "といっても"] }
  },
  {
    p: "〜ということだ", m: "I hear that ~ / that means ~", s: "Plain form + ということだ",
    n: "1) Hearsay: 'it is said that ~' (the source is often named with によると). 2) Explains what something means: 返事がないということは、断られたということです。 Less formal than とのことだ for reports.",
    ex: [["友達の話では、あの店は先月閉まったということだ。", "According to my friend, that shop closed last month."], ["返事がないということは、断られたということです。", "No reply means that we have been turned down."], ["山田さんは来月アメリカへ行くということです。", "I hear Mr. Yamada is going to America next month."]],
    q: { s: "ニュースによると、来週から値段が上がる＿＿＿＿＿＿＿。", t: "According to the news, prices will go up from next week.", a: "ということです", w: ["ようにします", "つもりでした", "ことにしました"] }
  },
  {
    p: "〜とのことだ", m: "I'm told that ~ (formal hearsay)", s: "Plain form / Noun + とのことだ / とのことです",
    n: "A polite, slightly formal way to report what a specific person told or wrote to you (letters, emails, messages). Often used in business: 部長は〜とのことです. Not used for your own opinions.",
    ex: [["部長は、会議は三時からとのことです。", "I'm told by the manager that the meeting is from three."], ["先生は、明日お休みとのことです。", "I hear the teacher is off tomorrow."], ["社長は今日は出張で戻れないとのことです。", "I'm told that the president can't return today because of a business trip."]],
    q: { s: "社長は、今日は出張で戻れない＿＿＿＿＿＿＿。", t: "I'm told that the president can't return today because of a business trip.", a: "とのことです", w: ["とのわけです", "というはずです", "とのつもりです"] }
  },
  {
    p: "〜ように見える", m: "looks as if ~ / appears to ~", s: "Plain form (な-adj + な / noun + の) + ように見える",
    n: "Appearance judged by sight: 'seems that ~'. More objective and observational than 〜そうだ. Can be followed by a correction (見えたが、実は…).",
    ex: [["彼は何か悩んでいるように見えます。", "He looks like he's worried about something."], ["あの二人は仲が悪いように見える。", "Those two look like they're on bad terms."], ["雨がやんだように見えたが、まだ降っていた。", "It looked as if the rain had stopped, but it was still falling."]],
    q: { s: "彼は何か悩んでいる＿＿＿見えます。", t: "He looks like he is worried about something.", a: "ように", w: ["ほどに", "ところに", "ことに"] }
  },
  {
    p: "〜に見える", m: "look (like) ~ / appear ~", s: "Noun + に見える | い-adj (く) / な-adj (に) + 見える",
    n: "How something looks, describing the visible impression. Often compares with the reality: 年より若く見える. Note the form change: 広い → 広く見える, 元気な → 元気に見える.",
    ex: [["この部屋は鏡があるので、広く見えます。", "This room looks big because it has a mirror."], ["父は年よりずっと若く見える。", "My father looks much younger than his age."], ["彼女は大学生に見えます。", "She looks like a college student."]],
    q: { s: "この服を着ると、実際より背が高＿＿＿見えます。", t: "When I wear these clothes, I look taller than I really am.", a: "く", w: ["に", "で", "の"] }
  },
  {
    p: "〜てたまらない", m: "can't stand ~ / extremely ~", s: "Verb (て-form) / い-adj (く) / な-adj (で) + たまらない",
    n: "A strong physical or emotional feeling that is hard to bear. Used for the speaker's own feelings (暑くてたまらない, 気になってたまらない). Compare 〜てしかたがない.",
    ex: [["のどがかわいてたまらない。", "I'm so thirsty I can't stand it."], ["試験の結果が気になってたまりません。", "I'm dying to know my exam result."], ["夏の暑さがいやでたまらない。", "I can't stand the summer heat."]],
    q: { s: "今日は朝から何も食べていないので、おなかがすい＿＿＿＿＿＿。", t: "I haven't eaten anything since morning, so I'm unbearably hungry.", a: "てたまらない", w: ["てはいけない", "てもいい", "てばかりいる"] }
  },
  {
    p: "〜てしかたがない", m: "can't help ~ / extremely ~", s: "Verb (て-form) / い-adj (く) / な-adj (で) + しかたがない",
    n: "Feeling is so strong it can't be controlled. Same meaning as 〜てたまらない, but also used for slightly reasoned feelings like 心配, 気になる, 不安. Variants: しょうがない, しかたない.",
    ex: [["子どもの帰りが遅くて、心配でしかたがない。", "My child is late coming home and I'm extremely worried."], ["昨日の試合に負けて、悔しくてしかたがない。", "I lost yesterday's match and I'm terribly frustrated."], ["この仕事はつまらなくてしかたがない。", "This job is so boring I can't stand it."]],
    q: { s: "来週のデートが楽しみ＿＿＿＿＿＿＿＿。", t: "I'm looking forward to next week's date so much I can't help it.", a: "でしかたがない", w: ["でもかまわない", "でなければならない", "ではいけない"] }
  },
  {
    p: "〜ない限り", m: "unless ~ / as long as ~ not", s: "Verb (ない-form) + 限り | Noun + でない限り",
    n: "Unless a condition is satisfied, the result continues to hold. The main clause is usually negative or states that the situation stays unchanged. Positive version: 〜限り (as long as).",
    ex: [["雨が降らない限り、試合は行われます。", "Unless it rains, the match will be held."], ["自分で努力しない限り、日本語は上手になりません。", "Unless you make an effort yourself, your Japanese won't improve."], ["本人が来ない限り、手続きはできません。", "The procedure can't be done unless the person comes in."]],
    q: { s: "自分で努力し＿＿＿＿＿、日本語は上手になりません。", t: "Unless you make an effort yourself, your Japanese won't improve.", a: "ない限り", w: ["ないうちに", "なくても", "ないくせに"] }
  },
  {
    p: "〜次第", m: "as soon as ~ / depending on ~", s: "Verb (ます-stem) + 次第 | Noun + 次第(だ／で)",
    n: "Vます-stem + 次第 = as soon as ~; the main clause is a future or intentional action (連絡します, お知らせします), never a past fact. Noun + 次第 = depends on: 値段次第 / 天気次第で.",
    ex: [["結果が分かり次第、お知らせします。", "I will let you know as soon as the results are known."], ["空港に着き次第、電話してください。", "Please call me as soon as you arrive at the airport."], ["行くかどうかは、天気次第です。", "Whether we go depends on the weather."]],
    q: { s: "空港に着き＿＿＿、電話します。", t: "I'll call as soon as I arrive at the airport.", a: "次第", w: ["ながら", "ばかり", "たびに"] }
  },
  {
    p: "〜とおりに", m: "as ~ / just like ~", s: "Verb (dict. / た-form) + とおり(に) | Noun + の + とおり(に)",
    n: "Do or be exactly as stated, instructed, or expected. Also noun forms: 説明書のとおり, 思ったとおり. The verb before とおり is usually 言う, 思う, 聞く, 書く, 教える.",
    ex: [["先生が言ったとおりに、やってみました。", "I tried to do it exactly as the teacher said."], ["説明書のとおりに、机を組み立てます。", "I'll assemble the desk following the manual."], ["思ったとおり、試験は簡単でした。", "As I thought, the exam was easy."]],
    q: { s: "私が言った＿＿＿＿＿＿、やってください。", t: "Please do it just as I said.", a: "とおりに", w: ["うちに", "たびに", "せいに"] }
  },
  {
    p: "〜ばよかった／〜たらよかった", m: "should have ~ / I wish I had ~", s: "Verb (ば-form / た-form + ら) + よかった | Verb (ない-form → なければ) + よかった",
    n: "Regret about something you did or didn't do. Negative: 食べなければよかった (I shouldn't have eaten). To say it casually, add な: 〜ばよかったな.",
    ex: [["もっと勉強すればよかった。", "I should have studied more."], ["傘を持ってくればよかったです。", "I should have brought an umbrella."], ["あんなに食べなければよかった。", "I shouldn't have eaten so much."]],
    q: { s: "財布を忘れた。もっと早く確認すれ＿＿＿＿＿＿。", t: "I forgot my wallet. I should have checked earlier.", a: "ばよかった", w: ["ばいい", "ばよくなる", "たらいい"] }
  },
  {
    p: "〜にしては", m: "for ~ / considering that ~ (unexpected)", s: "Noun / Plain form (な-adj, noun without だ) + にしては",
    n: "Evaluating something against the standard you'd expect from the stated fact. The result is better or worse than expected. Compare 〜わりに (degree-based).",
    ex: [["彼は初心者にしては、上手に歌う。", "For a beginner, he sings well."], ["このレストランは、駅から遠いにしては客が多い。", "For being far from the station, this restaurant has a lot of customers."], ["子どもにしては、しっかりした意見を持っている。", "For a child, he has a firm opinion."]],
    q: { s: "このレストランは、駅から遠い＿＿＿＿＿、客が多いですね。", t: "For a restaurant far from the station, there are a lot of customers.", a: "にしては", w: ["せいで", "ように", "ついでに"] }
  },
  {
    p: "〜わりに(は)", m: "considering ~ / in spite of ~ (unexpectedly)", s: "Plain form (な-adj + な / noun + の) + わりに(は)",
    n: "The result is not in proportion to what you'd expect from the first clause. Both positive and negative: 安いわりにおいしい (surprisingly good), 勉強したわりに点が悪い (worse than expected). Do not confuse with 代わりに.",
    ex: [["この店は安いわりにおいしい。", "This restaurant is cheap, but surprisingly good."], ["彼は年のわりに若く見える。", "He looks young for his age."], ["勉強したわりには、点数がよくなかった。", "Considering how much I studied, my score wasn't good."]],
    q: { s: "この本は値段が高い＿＿＿＿、内容が薄い。", t: "This book is expensive, yet the content is thin.", a: "わりに", w: ["うちに", "たびに", "おかげで"] }
  },
  {
    p: "〜だらけ", m: "full of ~ / covered with ~", s: "Noun + だらけ",
    n: "Lots of something undesirable: ごみ, 間違い, 傷, 借金, 泥. Always negative nuance. 'Noun だらけの + noun' or 'Noun だらけだ/になる'.",
    ex: [["部屋がごみだらけです。", "The room is full of trash."], ["このレポートは間違いだらけだ。", "This report is full of mistakes."], ["子どもは泥だらけになって帰ってきた。", "The child came home covered in mud."]],
    q: { s: "この作文は間違い＿＿＿＿で、直すのが大変だ。", t: "This composition is full of mistakes, so it's hard to correct.", a: "だらけ", w: ["ぎみ", "っぽい", "まみれ"] }
  },
  {
    p: "〜まみれ", m: "covered in ~ (sticky or dirty stuff)", s: "Noun + まみれ",
    n: "Covered thoroughly in a substance like 汗, 泥, 血, 油, ほこり, often something that sticks or soils. More about being coated than 〜だらけ (full of).",
    ex: [["ランニングで、シャツが汗まみれになった。", "My shirt became drenched in sweat from running."], ["子どもたちは泥まみれになって遊んでいた。", "The children were playing, covered in mud."], ["手が油まみれだ。", "My hands are covered in oil."]],
    q: { s: "ランニングで、シャツが汗＿＿＿＿になった。", t: "From running, my shirt became drenched in sweat.", a: "まみれ", w: ["ぎみ", "がち", "っぽい"] }
  },
  {
    p: "〜どころか", m: "far from ~ / let alone ~", s: "Plain form (な-adj / noun without だ) + どころか",
    n: "Denies the first statement and gives something stronger or the opposite. Often followed by も: 〜どころか〜もできない. The result is the opposite (休むどころか…) or a more extreme case.",
    ex: [["彼は漢字どころか、ひらがなも読めない。", "He can't even read hiragana, let alone kanji."], ["忙しくて、休むどころか、食事をする時間もない。", "I'm so busy that I don't even have time to eat, let alone rest."], ["上手どころか、全然できません。", "Far from being good, I can't do it at all."]],
    q: { s: "彼は漢字＿＿＿＿＿、ひらがなも読めない。", t: "He can't even read hiragana, let alone kanji.", a: "どころか", w: ["ばかり", "ついでに", "おかげで"] }
  },
  {
    p: "〜はともかく", m: "setting ~ aside / ~ is another matter", s: "Noun + はともかく(として)、 main point",
    n: "'Never mind X, (let's focus on Y)'. X is regarded as less important or uncertain, and the speaker highlights Y. Also: 〜かどうかはともかく.",
    ex: [["味はともかく、見た目はきれいです。", "Never mind the taste, it looks pretty."], ["結果はともかく、よく頑張ったね。", "Results aside, you did your best."], ["値段はともかく、品物はいい。", "Price aside, the goods are good."]],
    q: { s: "料理の味＿＿＿＿＿＿、この店は雰囲気がとてもいい。", t: "Setting the taste of the food aside, this restaurant has a really nice atmosphere.", a: "はともかく", w: ["にしては", "のおかげで", "どおりに"] }
  },
  {
    p: "〜ところに／〜ところへ", m: "just when ~ (something happened)", s: "Verb (ている / 辞書形 / た-form) + ところに／ところへ",
    n: "A new event happens at the exact moment of a situation: 'just as ~'. The second event is often an interruption or perfect timing. Distinct from ところだ (stage of action).",
    ex: [["ご飯を食べているところに、友達が遊びに来ました。", "Just as I was eating, a friend came by."], ["困っているところへ、田中さんが助けてくれた。", "Just when I was in trouble, Mr. Tanaka helped me."], ["出かけようとしたところに、電話がかかってきた。", "Just as I was about to leave, a phone call came."]],
    q: { s: "ご飯を食べている＿＿＿＿＿、友達が遊びに来ました。", t: "Just as I was eating, a friend came to visit.", a: "ところに", w: ["ばかりに", "わけに", "はずに"] }
  },
  {
    p: "〜ようなら", m: "if it turns out that ~ / if it looks like ~", s: "Plain form (な-adj + な / noun + の) + ようなら",
    n: "Conditional used when judging a situation as it develops: 'if it appears that ~'. The main clause is advice, instruction or a plan. Softer than plain 〜たら.",
    ex: [["熱が下がらないようなら、病院へ行ってください。", "If your fever doesn't go down, please go to the hospital."], ["雨がひどいようなら、中止にします。", "If the rain is heavy, we'll cancel."], ["無理なようなら、早めに連絡してください。", "If it looks impossible, please contact me early."]],
    q: { s: "明日も頭が痛い＿＿＿＿＿、医者に行ったほうがいいです。", t: "If your head still hurts tomorrow, you should see a doctor.", a: "ようなら", w: ["ようで", "ようだ", "ように"] }
  }
);
