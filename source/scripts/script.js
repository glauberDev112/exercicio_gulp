function debug_selector (selector) {
    $(selector).each(function hhh() {
        const e = $(this)
        console.log(e.html())
    })
}
$(document).ready(function setup() {
    console.log('uuu')
    const e = [
        ['bird-ga5d9ed257_1920.jpg','treinando a minha coruja'],
        ['birds-g6b63afc7a_1920.jpg','foto que tirei nas ferias'],
        ['butterfly-g7f3546b64_1920.jpg','o que acharam da foto com a minha nova camera?'],
        ['hands-gc143a78ba_1920.png','estou treinando disign vetorial, gostaram?'],
        ['lilies-g19bcb21a4_1920.jpg','digna de capa de revista, ne'],
        ['street-gddeece843_1920.jpg','tirei essa foto com bastante neblina, gostaram?']
    ]
    let main = []
    e.forEach(function fun (t) {
        main.push(`<section>
        <img src="images/${t[0]}">
        <div class="label">
            <h2>${t[1]}</h2>
            <div class="label-feedback">
                <div class='file_votes'>
                    <button type='button' class="fine eval">&#10133;</button>
                    <p class="file-votes cool">0</p>
                </div>
                <div class='file_votes'>
                    <button type='button' class="bad eval">&#10134;</button>
                    <p class="file-votes bad">0</p>
                </div>
                <div class="score">
                    <p>score: <span class="score-num">000</span>%</p>
                </div>
            </div>
        </div>

    </section>`)
    })
    main = $('div.main').html() + main.join('\n\t')
    $('div.main').html(main)
    $('section button.eval').on('click',function fun() {
        const obj = $(this).parent()
        const obj1 = obj.parent()
        const obj_1 = obj.find('p.file-votes')
        let u = parseInt(obj_1.text())
        console.log(u)
        obj_1.text(u+1)
        console.log('u',obj1)
        const votes = obj1.find('div.file_votes')
        const cool = parseInt(votes.find('p.cool').text())
        const bad = parseInt(votes.find('p.bad').text())
        const score = obj1.find('div.score p span.score-num')
        let n = (100/(cool+bad))*cool
        console.log(n,cool,bad)
        score.text(parseInt((100/(cool+bad))*cool))
    })
})