import React, { useState, useEffect } from "react";
import { CSSReset, Container, Button } from "@chakra-ui/react";
import Question from "./components/Question";
import Options from "./components/Options";
import FinalScore from "./components/FinalScore";
import StudentDashboardLayout from "../../components/StudentDashboardLayout";

const PracticeTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch questions. Status: ${response.status}`
          );
        }
        const data = await response.json();
        // Shuffle the array of questions
        const shuffledQuestions = shuffleArray(data);

        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []);

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const currentQuestion = questions[currentQuestionIndex];
      const updatedOptions = currentQuestion.options.map(option => {
        if (option.id === selectedOption) {
          return { ...option, isSelected: true };
        } else {
          return { ...option, isSelected: false };
        }
      });
  
      const selectedOptionObj = updatedOptions.find(option => option.id === selectedOption);
  
      if (selectedOptionObj && selectedOptionObj.isCorrect) {
        setScore(prevScore => prevScore + 1);
      }
  
      setAnsweredQuestions(prev => [...prev, currentQuestionIndex]); // Mark question as answered
      setQuestions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[currentQuestionIndex] = { ...currentQuestion, options: updatedOptions };
        return updatedQuestions;
      });
   
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSelectedOption(null); // Reset selected option for the new question
      }
    } else {
      alert("Please select an option before proceeding.");
    }
  };
  

  const isQuestionAnswered = (index) => answeredQuestions.includes(index);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (answeredQuestions.length === 10) {
    // All questions answered, render FinalScore component
    return (
      <StudentDashboardLayout title="Final Score">
        <CSSReset />
        <Container maxW="container.sm" centerContent>
          <FinalScore score={score} questions={questions} answeredQuestions={answeredQuestions} />
        </Container>
      </StudentDashboardLayout>
    );
  }

  // Render Question and Options components for each question
  return (
    <StudentDashboardLayout title="Practice Test">
      <CSSReset />
      <Container maxW="container.sm"  leftContent>
        <Question
          key={`question-${currentQuestionIndex}`}
          question={questions[currentQuestionIndex]}
          serialNumber={currentQuestionIndex + 1}
        />
        <Options
          key={`options-${currentQuestionIndex}`}
          options={questions[currentQuestionIndex].options}
          selectedOption={selectedOption}
          onChange={(value) => setSelectedOption(value)}
          disabled={isQuestionAnswered(currentQuestionIndex)}
        />
        <Button mt={4} colorScheme="teal" onClick={handleNextQuestion}>
          Next
        </Button>
      </Container>
    </StudentDashboardLayout>
  );
};

export default PracticeTest;
