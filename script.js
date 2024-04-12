// alert("Começou o Quiz!");

const quizData = 
[
    {
        question: "1 - Qual dos conceitos abaixo diz respeito a juro?",
        a: "Porcentagem do salário de um funcionário.",
        b: "Valor mensal gasto por uma empresa.",
        c: "Renda ou rendimento de capital investido.",
        d: "Compra à vista no cartão de débito.",
        e: "Imposto de renda cobrado pelo governo.",
        correct: "c",
    },
    {
        question: "2 - O que é uma fração?",
        a: "Uma divisão entre dois números inteiros.",
        b: "Uma figura geométrica com no mínimo 2 lados.",
        c: "Uma coleção com no mínimo 5 elementos.",
        d: "É uma parcela de um todo.",
        e: "É um número elevado a outro número.",
        correct: "d",
    },
    {
        question: "3 - Fazer uma estimativa significa...",
        a: "Prestar um favor a uma pessoa que estimamos.",
        b: "Traçar uma figura usando uma régua.",
        c: "Fazer um cálculo aproximado de algo.",
        d: "Somar duas matrizes.",
        e: "Calcular a altura de um retângulo.",
        correct: "c",
    },
    {
        question: "4 - Chamamos de perímetro...",
        a: "Uma medida maior que quatro metros.",
        b: "A medida do contorno de uma figura geométrica plana.",
        c: "Um instrumento usado para medir.",
        d: "A base vezes a altura de um retângulo.",
        e: "O tamanho de um periquito.",
        correct: "b",
    },
    {
        question: "5 - Quantas faces tem um cubo?",
        a: "Quatro faces quadradas.",
        b: "Quatro faces redondas.",
        c: "Seis faces quadradas.",
        d: "Seis faces redondas.",
        e: "Cubo não tem faces.",
        correct: "c",
    },
    {
        question: "6 - Enumerar é o mesmo que...",
        a: "Numerar.",
        b: "Multiplicar.",
        c: "Somar.",
        d: "Subtrair.",
        e: "Dividir.",
        correct: "a",
    },
    {
        question: "7 - O que é um compasso?",
        a: "Instrumento usado para medir o tamanho dos passos de uma pessoa",
        b: "É uma trena com aproximadamente 3 metros de comprimento",
        c: "Instrumento de desenho usado para traçar circunferências",
        d: "Um relógio analógico antigo",
        e: "Um medidor de pressão arterial",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() 
{
    deselectAnswrs();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function deselectAnswrs() 
{
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() 
{
    let answer;
    answerEls.forEach(answerEl => 
    {
        if (answerEl.checked) 
        {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => 
{
    const answer = getSelected();

    if (answer) 
    {
        if (answer === quizData[currentQuiz].correct)
        {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length)
        {
            loadQuiz();
        }
        else
        {
            quiz.innerHTML = `
            <h2>Respondeu ${score}/${quizData.length} questões corretamente</h2>

            <button onClick="location.reload()">Repetir</button>
            `
            if(score == quizData.length)
            {
                alert('PARABÉNS você conseguiu!!!');
            }
            else{
                alert('Vamos novamente, a próxima está na mão!')
            }
            
        }
    }
})