
var QuestionBank = [
    //general Questions
    {
        question: 'Who is the president of Nigeria?',
        options: ['Obasanjo', 'Thomas Muller', 'Moses Blioss', 'Bola Ahmed Tinubu'],
        answer: 'Bola Ahmed Tinubu'
    },
    {
        question: 'What is the capital of Nigeria?',
        options: ['Ibadan', 'Abuja', 'Lagos', 'Togo'],
        answer: 'Abuja'
    },
    // Food Microbiology Questions
    {
        question: 'What temperature range is considered the "danger zone" for foodborne pathogens?',
        options: ['Below 4°C', 'Between 5°C and 60°C', 'Above 70°C', 'Between 20°C and 40°C'],
        answer: 'Between 5°C and 60°C'
    },
    {
        question: 'Which bacteria is commonly associated with food poisoning from improperly canned foods?',
        options: ['Escherichia coli', 'Staphylococcus aureus', 'Clostridium botulinum', 'Listeria monocytogenes'],
        answer: 'Clostridium botulinum'
    },
    {
        question: 'What is the primary cause of foodborne illness from consuming undercooked poultry?',
        options: ['Salmonella spp.', 'Listeria monocytogenes', 'Campylobacter jejuni', 'Clostridium perfringens'],
        answer: 'Campylobacter jejuni'
    },
    {
        question: 'Which of the following is not a common method for food preservation?',
        options: ['Canning', 'Pasteurization', 'Fermentation', 'Autoclaving'],
        answer: 'Autoclaving'
    },
    {
        question: 'Which food product is most commonly associated with botulism?',
        options: ['Canned vegetables', 'Raw meat', 'Soft cheese', 'Honey'],
        answer: 'Canned vegetables'
    },
    {
        question: 'What is the optimal pH range for most pathogenic bacteria to grow?',
        options: ['Acidic (pH < 4)', 'Neutral (pH 7)', 'Alkaline (pH > 9)', 'Slightly acidic (pH 5-7)'],
        answer: 'Neutral (pH 7)'
    },
    {
        question: 'Which of the following is a common method to inhibit bacterial growth in food products?',
        options: ['High sugar concentration', 'Low temperature', 'High salt concentration', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'What type of bacteria are responsible for causing yogurt fermentation?',
        options: ['Lactic acid bacteria', 'Coliform bacteria', 'Acidophilic bacteria', 'Sulfur bacteria'],
        answer: 'Lactic acid bacteria'
    },
    {
        question: 'Which of the following microorganisms is used in the production of cheese?',
        options: ['Saccharomyces cerevisiae', 'Penicillium spp.', 'Lactobacillus spp.', 'Aspergillus niger'],
        answer: 'Lactobacillus spp.'
    },
    {
        question: 'What is the primary mode of transmission of Salmonella contamination in eggs?',
        options: ['Airborne transmission', 'Direct contact transmission', 'Vertical transmission', 'Fecal-oral transmission'],
        answer: 'Fecal-oral transmission'
    },
    {
        question: 'Which bacteria are commonly associated with food poisoning from rice dishes that are left at room temperature for too long?',
        options: ['Salmonella spp.', 'Bacillus cereus', 'Escherichia coli', 'Listeria monocytogenes'],
        answer: 'Bacillus cereus'
    },
    {
        question: 'What is the primary cause of foodborne illness from consuming raw or undercooked shellfish?',
        options: ['Vibrio parahaemolyticus', 'Salmonella enterica', 'Clostridium perfringens', 'Listeria monocytogenes'],
        answer: 'Vibrio parahaemolyticus'
    },
    {
        question: 'Which of the following is a common method used to control bacterial growth in food processing?',
        options: ['High humidity', 'Low pH', 'Low temperature', 'High oxygen levels'],
        answer: 'Low temperature'
    },
    {
        question: 'What is the primary cause of foodborne illness from consuming contaminated raw fruits and vegetables?',
        options: ['Norovirus', 'Salmonella enterica', 'Escherichia coli O157:H7', 'Listeria monocytogenes'],
        answer: 'Salmonella enterica'
    },
    // Medical Microbiology Questions
    
    {
        question: 'Which virus causes the common cold?',
        options: ['Influenza virus', 'Rhinovirus', 'Coronavirus', 'Adenovirus'],
        answer: 'Rhinovirus'
    },
    {
        question: 'Which bacterium is responsible for causing urinary tract infections primarily in sexually active women?',
        options: ['Escherichia coli', 'Staphylococcus saprophyticus', 'Klebsiella pneumoniae', 'Proteus mirabilis'],
        answer: 'Staphylococcus saprophyticus'
    },
//     {
//         question: 'What is the primary mode of transmission of hepatitis C virus (HCV)?',
//         options: ['Fecal-oral transmission', 'Sexual transmission', 'Bloodborne transmission', 'Airborne transmission'],
//         answer: 'Bloodborne transmission'
//     },
//     {
//         question: 'Which bacterium is commonly associated with causing infections in burn wounds?',
//         options: ['Pseudomonas aeruginosa', 'Staphylococcus aureus', 'Escherichia coli', 'Acinetobacter baumannii'],
//         answer: 'Pseudomonas aeruginosa'
//     },
//     {
//         question: 'What is the primary cause of bacterial meningitis in newborns?',
//         options: ['Group B Streptococcus', 'Haemophilus influenzae', 'Neisseria meningitidis', 'Streptococcus pneumoniae'],
//         answer: 'Group B Streptococcus'
//     },
//     {
//         question: 'Which virus is responsible for causing genital herpes?',
//         options: ['Herpes simplex virus type 1', 'Herpes simplex virus type 2', 'Varicella-zoster virus', 'Human papillomavirus'],
//         answer: 'Herpes simplex virus type 2'
//     },
//     {
//         question: 'What is the primary mode of transmission of Epstein-Barr virus (EBV)?',
//         options: ['Respiratory droplets', 'Direct contact with lesions', 'Sexual transmission', 'Blood transfusion'],
//         answer: 'Direct contact with lesions'
//     },
//  {
//         question: 'Which bacterium causes pneumonia in immunocompromised individuals?',
//         options: ['Streptococcus pneumoniae', 'Klebsiella pneumoniae', 'Haemophilus influenzae', 'Pseudomonas aeruginosa'],
//         answer: 'Pseudomonas aeruginosa'
//     },
//     {
//         question: 'What is the primary mode of transmission of HIV/AIDS?',
//         options: ['Airborne transmission', 'Vector-borne transmission', 'Sexual transmission', 'Fecal-oral transmission'],
//         answer: 'Sexual transmission'
//     },
//     {
//         question: 'Which bacterium is responsible for causing tuberculosis?',
//         options: ['Staphylococcus aureus', 'Mycobacterium tuberculosis', 'Clostridium difficile', 'Escherichia coli'],
//         answer: 'Mycobacterium tuberculosis'
//     },
//     {
//         question: 'What is the causative agent of syphilis?',
//         options: ['Treponema pallidum', 'Neisseria gonorrhoeae', 'Chlamydia trachomatis', 'Haemophilus ducreyi'],
//         answer: 'Treponema pallidum'
//     },
//     {
//         question: 'Which virus causes genital warts?',
//         options: ['Human papillomavirus', 'Herpes simplex virus', 'Hepatitis B virus', 'Cytomegalovirus'],
//         answer: 'Human papillomavirus'
//     },
//     {
//         question: 'What is the most common cause of bacterial meningitis in adults?',
//         options: ['Streptococcus pneumoniae', 'Neisseria meningitidis', 'Haemophilus influenzae', 'Listeria monocytogenes'],
//         answer: 'Streptococcus pneumoniae'
//     },
//     {
//         question: 'Which protozoan parasite is responsible for causing toxoplasmosis?',
//         options: ['Toxoplasma gondii', 'Entamoeba histolytica', 'Giardia lamblia', 'Plasmodium falciparum'],
//         answer: 'Toxoplasma gondii'
//     },
//     {
//         question: 'What is the primary mode of transmission of hepatitis A virus?',
//         options: ['Fecal-oral transmission', 'Bloodborne transmission', 'Airborne transmission', 'Sexual transmission'],
//         answer: 'Fecal-oral transmission'
//     },
//     {
//         question: 'Which virus is responsible for causing infectious mononucleosis?',
//         options: ['Epstein-Barr virus', 'Cytomegalovirus', 'Varicella-zoster virus', 'Human herpesvirus 6'],
//         answer: 'Epstein-Barr virus'
//     },
//     {
//         question: 'What is the primary mode of transmission of Clostridium difficile infection?',
//         options: ['Fecal-oral transmission', 'Airborne transmission', 'Sexual transmission', 'Vector-borne transmission'],
//         answer: 'Fecal-oral transmission'
//     },
//     {
//         question: 'Which bacterium is responsible for causing urinary tract infections?',
//         options: ['Escherichia coli', 'Staphylococcus aureus', 'Pseudomonas aeruginosa', 'Klebsiella pneumoniae'],
//         answer: 'Escherichia coli'
//     },
//     {
//         question: 'What is the primary mode of transmission of Helicobacter pylori infection?',
//         options: ['Fecal-oral transmission', 'Airborne transmission', 'Sexual transmission', 'Foodborne transmission'],
//         answer: 'Fecal-oral transmission'
//     },
//     {
//         question: 'Which parasite is responsible for causing malaria in humans?',
//         options: ['Plasmodium vivax', 'Plasmodium falciparum', 'Plasmodium ovale', 'Plasmodium malariae'],
//         answer: 'Plasmodium falciparum'
//     },
//     {
//         question: 'What is the primary cause of bacterial gastroenteritis in the United States?',
//         options: ['Salmonella spp.', 'Campylobacter jejuni', 'Escherichia coli', 'Vibrio cholerae'],
//         answer: 'Campylobacter jejuni'
//     },
//     {
//         question: 'Which virus is responsible for causing severe acute respiratory syndrome (SARS)?',
//         options: ['Coronavirus', 'Influenza virus', 'Rhinovirus', 'Adenovirus'],
//         answer: 'Coronavirus'
//     },
//     {
//         question: 'What is the primary mode of transmission of the Zika virus?',
//         options: ['Mosquito bites', 'Sexual transmission', 'Blood transfusion', 'Airborne transmission'],
//         answer: 'Mosquito bites'
//     },
//     {
//     question: 'Which bacterium is responsible for causing Lyme disease?',
//     options: ['Borrelia burgdorferi', 'Treponema pallidum', 'Leptospira interrogans', 'Bartonella henselae'],
//     answer: 'Borrelia burgdorferi'
//     },
//     {
//     question: 'What is the primary mode of transmission of rabies virus to humans?',
//     options: ['Bite from infected animals', 'Airborne transmission', 'Sexual transmission', 'Blood transfusion'],
//     answer: 'Bite from infected animals'
//     },
//     {
//     question: 'Which virus is responsible for causing dengue fever?',
//     options: ['Dengue virus', 'Chikungunya virus', 'West Nile virus', 'Yellow fever virus'],
//     answer: 'Dengue virus'
//     },
//     {
//     question: 'What is the primary cause of bacterial pneumonia in infants and young children?',
//     options: ['Haemophilus influenzae', 'Streptococcus pneumoniae', 'Moraxella catarrhalis', 'Klebsiella pneumoniae'],
//     answer: 'Haemophilus influenzae'
//     },
//     {
//     question: 'Which protozoan parasite is responsible for causing sleeping sickness?',
//     options: ['Trypanosoma cruzi', 'Toxoplasma gondii', 'Trypanosoma brucei', 'Leishmania donovani'],
//     answer: 'Trypanosoma brucei'
//     },
//     {
//     question: 'What is the primary mode of transmission of Schistosoma infections?',
//     options: ['Mosquito bites', 'Contaminated water exposure', 'Sexual transmission', 'Airborne transmission'],
//     answer: 'Contaminated water exposure'
//     },
//     {
//     question: 'Which bacterium is responsible for causing whooping cough?',
//     options: ['Haemophilus influenzae', 'Bordetella pertussis', 'Streptococcus pneumoniae', 'Moraxella catarrhalis'],
//     answer: 'Bordetella pertussis'
//     },
//     {
//     question: 'What is the causative agent of leprosy?',
//     options: ['Mycobacterium leprae', 'Mycobacterium tuberculosis', 'Mycobacterium avium', 'Mycobacterium marinum'],
//     answer: 'Mycobacterium leprae'
//     }
];


// DOM connection
var question = document.getElementById('question');
var option0 = document.querySelector('.option0');
var option1 = document.querySelector('.option1');
var option2 = document.querySelector('.option2');
var option3 = document.querySelector('.option3');
var i = 0;
var next = document.querySelector('.next');
var stat = document.getElementById('stat');
var previous = document.getElementById('previous');
var darkIcon = document.querySelector('.dark-icon');
var container = document.querySelector('.main-container');
var questionCount = QuestionBank.length;
var scoreBoard = document.getElementById('score-board');
var quizContainer = document.getElementById('quiz-container');
var score = 0;
var answers = document.getElementById('answers');
var selectedOption = null;
var reloadBtn = document.getElementById('reload-btn');

// Functions
function displayQuestion() {
    question.innerHTML = 'Q.' + (i + 1) + ' ' + QuestionBank[i].question;
    option0.innerHTML = QuestionBank[i].options[0];
    option1.innerHTML = QuestionBank[i].options[1];
    option2.innerHTML = QuestionBank[i].options[2];
    option3.innerHTML = QuestionBank[i].options[3];
    stat.innerHTML = `Question ${i + 1} of ${QuestionBank.length}`;
    
    // Reset option styles and re-enable them
    option0.className = 'option option0';
    option1.className = 'option option1';
    option2.className = 'option option2';
    option3.className = 'option option3';
    selectedOption = null;
}

// Next question function
function nextQuestion() {
    if (selectedOption === null) {
        alert("Please select an option before proceeding.");
        return;
    }
    if (i < QuestionBank.length - 1) {
        i++;
        displayQuestion();
    } else {
        quizContainer.style.display = 'none';
        scoreBoard.style.display = 'block';
        document.getElementById('score').innerHTML = score + '/' + QuestionBank.length;
    }
}

function backtoQuiz() {
    scoreBoard.style.display = 'none';
    quizContainer.style.display = 'block';
}

for (var a = 0; a < QuestionBank.length; a++) {
    var list = document.createElement('li');
    list.innerHTML = QuestionBank[a].answer;
    answers.appendChild(list);
}

// Next button event listener
next.addEventListener('click', nextQuestion);

// Previous button function
function goBack() {
    if (i > 0) {
        i--;
        displayQuestion();
    }
}

previous.addEventListener('click', goBack);

// Calculate score function
function CalculateScore(optionElement) {
    if (selectedOption !== null) {
        return;
    }

    selectedOption = optionElement;
    var selectedAnswer = optionElement.textContent;

    if (selectedAnswer === QuestionBank[i].answer) {
        optionElement.classList.add('correct');
        score++;
    } else {
        optionElement.classList.add('wrong');
        // Highlight the correct answer
        if (option0.textContent === QuestionBank[i].answer) option0.classList.add('correct');
        if (option1.textContent === QuestionBank[i].answer) option1.classList.add('correct');
        if (option2.textContent === QuestionBank[i].answer) option2.classList.add('correct');
        if (option3.textContent === QuestionBank[i].answer) option3.classList.add('correct');
    }
}

// Add click event listeners to options
option0.addEventListener('click', function() { CalculateScore(option0); });
option1.addEventListener('click', function() { CalculateScore(option1); });
option2.addEventListener('click', function() { CalculateScore(option2); });
option3.addEventListener('click', function() { CalculateScore(option3); });

// Update date and time
function updateDateTime() {
    var now = new Date();
    var dateTimeElement = document.getElementById("date-time");
    dateTimeElement.textContent = now.toLocaleString();
}

setInterval(updateDateTime, 1000);

// Reload quiz function
function reloadQuiz() {
    i = 0;
    score = 0;
    displayQuestion();
    quizContainer.style.display = 'block';
    scoreBoard.style.display = 'none';
}

reloadBtn.addEventListener('click', reloadQuiz);

// JavaScript for toggling dark/light mode
// const darkModeToggle = document.getElementById('dark-mode-toggle');
// const body = document.body;

// darkModeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     if (body.classList.contains('dark-mode')) {
//         body.style.backgroundColor = 'black';
//         darkModeToggle.textContent = 'Light Mode';
//     } else {
//         body.style.backgroundColor = 'white';
//         darkModeToggle.textContent = 'Dark Mode';
//     }
// });

displayQuestion();
