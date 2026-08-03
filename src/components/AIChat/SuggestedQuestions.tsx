interface Props {
  onSelect: (question: string) => void;
}

const questions = [
  "Who are you?",
  "Show your projects",
  "What technologies do you know?",
  "Download Resume",
  "Contact Information",
];

export default function SuggestedQuestions({ onSelect }: Props) {
  return (
    <div className="suggestions">
      {questions.map((question) => (
        <button
          key={question}
          onClick={() => onSelect(question)}
        >
          {question}
        </button>
      ))}
    </div>
  );
}