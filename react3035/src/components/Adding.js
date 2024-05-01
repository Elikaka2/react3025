import React, {useState} from "react";
const QuestionForm = () => {
    const [formData, setFormData] = useState({ question: '', answers: ['', '', '', ''], correctAnswer: '' });
    const [questions, setQuestions] = useState([]);

    const handleChange = (e, type) => {
        const newData = { ...formData };
        if (type === 'question') {
            newData.question = e.target.value;
        } else if (type === 'answer') {
            newData.answers[e.target.dataset.index] = e.target.value;
        } else if (type === 'correctAnswer') {
            newData.correctAnswer = e.target.value;
        }
        setFormData(newData);
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, formData]);
        setFormData({ question: '', answers: ['', '', '', ''], correctAnswer: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно обработать отправку формы, например, отправить данные на сервер или выполнить другие действия
        console.log('Отправленные данные:', questions);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Введите текст загадки: </label>
                <input
                    type="text"
                    name="question"
                    value={formData.question}
                    onChange={(e) => handleChange(e, 'question')}
                />
            </div>
            {formData.answers.map((answer, i) => (
                <div key={i}>
                    <label>Введите ответ {i + 1}: </label>
                    <input
                        type="text"
                        name="answer"
                        data-index={i}
                        value={answer}
                        onChange={(e) => handleChange(e, 'answer')}
                    />
                </div>
            ))}
            <div>
                <label>Введите номер правильного ответа: </label>
                <input
                    type="text"
                    name="correctAnswer"
                    value={formData.correctAnswer}
                    onChange={(e) => handleChange(e, 'correctAnswer')}
                />
            </div>
            <button type="button" onClick={handleAddQuestion}>
                Добавить вопрос
            </button>
            {/* Новый код для отображения списка вопросов и ответов с радиокнопками */}
            <div>
                {questions.map((question, index) => (
                    <div key={`question-${index}`}>
                        <h1>Новая загадка</h1>
                        <h3>{question.question}</h3>
                        {question.answers.map((answer, i) => (
                            <div key={`answer-${i}`}>
                                <input
                                    type="radio"
                                    id={`question-${index}-answer-${i}`}
                                    name={`question-${index}-answers`}
                                    value={i}
                                />
                                <label htmlFor={`question-${index}-answer-${i}`}>{answer}</label>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </form>
    );
};

export default QuestionForm;