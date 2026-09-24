import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'How many years have I been a student at Horace Mann?',
        answer: '12', 
    },
    {
        points: 200,
        question:
            'Which country is the city of Toldeo located?',
        imgSrc: "static/toledo.png",
        answer: 'Spain', //visited last spring break
    },
    {
        points: 300,
        question:
            'An estimated 5% to 9% of people will have what organ removed after it becomes inflamed?',
        answer: 'appendix', //had appendicitis
    },
    {
        points: 400,
        question: 'Which book character is imprisoned in the Château d\'If for 14 years?',
        answer: 'The Count of Monte Cristo', //favorite book i read this summer
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'Which French king is famously known as the Sun King?',
                imgSrc: 'static/king.webp',
            answer: 'Louis XIV', //one of my favorite history subjects
        },
        {
            points: 200,
            question:
                'Which US state was the skateboard invented in?',
            answer: 'California', //dont skateboard but visit california a lot for family
        },
        {
            points: 300,
            question: 'What is the name of this alphabet?',
            imgSrc: 'static/cyrillic.png',
            answer: 'Cyrillic', //speak russian
        },
        {
            points: 400,
            question:
                'The rebellion against against ballet led to which dance style?',
            answer: 'contemporary', //i dance this style
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'Who is the author of the book "1984"?',
        answer: 'George Orwell', //book i am trying to get my brother to read
    },
    {
        points: 200,
        question:
            'A kip-up is a famous trick in which dance style?',
        answer: 'hip-hop', //am learning this trick
    },
    {
        points: 300,
        question:
            'What is the capital of Illinois?',
        answer: 'Springfield', //sister is in chicago for college 
    },
    {
        points: 400,
        question:
            'Which school in the Ivy Preparatory School League\'s mascot is a hornet?',
        answer: 'Hackley',//best friend goes to hackley and i plan to visit her soon
    }
]);


const categories = [
    {
        title: 'Iva\'s Past',
        questions: pastQuestions
    },
    {
        title: `Iva's Present`,
        questions: presentQuestions
    },
    {
        title: "Iva's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}