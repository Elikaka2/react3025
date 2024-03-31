const Item = ()=>{

    // let name = "Roman";

    const arr =[{
        'id': '1',
        'description': "Без рук, без ног, а ворота открывает",
        'option1': 'Папа',
        'option2': 'Слон',
        'option3': 'Ветер',
        'option4': 'Птица',
        'correct': 'Ветер'},

        {'id': '2',
            'description': "Что выше леса поднимается да без огня горит?",
            'option1': 'Солнце',
            'option2': 'Факел',
            'option3': 'Жар-птица',
            'option4': 'Фейерферк',
            'correct': 'Солнце'},

        {'id': '3',
            'description': "На дворе горой, а в избе водой",
            'option1': 'Масло',
            'option2': 'Снег',
            'option3': 'Дождь',
            'option4': 'Водопад',
            'correct': 'Снег'},

        {'id': '4',
            'description': "Ах, не трогайте меня! Обожгу и без огня",
            'option1': 'Ромашка',
            'option2': 'Одуванчик',
            'option3': 'Каркаде',
            'option4': 'Крапива',
            'correct': 'Крапива'},

        {'id': '5',
            'description': "Раскаленная стрела дуб свалила у села.",
            'option1': 'Ракета',
            'option2': 'Пуля',
            'option3': 'Молния',
            'option4': 'Булыжник',
            'correct': 'Молния'},
    ];
    const content = arr.map(
        (intttt)=>{

            //let doubEl = intttt*2;
            return(
                <>
                    <h1>Загадка {intttt.id}</h1>
                    <h3>{intttt.description}</h3>
                    <input type="radio" id='option1' name="option" value={intttt.option1}/>
                    <label htmlFor="option1">{intttt.option1}</label>
                    <br/>
                    <input type="radio" id='option2' name="option" value={intttt.option2}/>
                    <label htmlFor="option2">{intttt.option2}</label>
                    <br/>
                    <input type="radio" id='option3' name="option" value={intttt.option3}/>
                    <label htmlFor="option3">{intttt.option3}</label>
                    <br/>
                    <input type="radio" id='option4' name="option" value={intttt.option4}/>
                    <label htmlFor="option4">{intttt.option4}</label>
                    <br/>
                </>
            )

        }


    )



    return(
        content

    )



}

export default Item;