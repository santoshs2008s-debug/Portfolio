interface Props {
  message: {
    role: "user" | "assistant";
    text: string;
  };
}

export default function Message({ message }: Props) {
  return (
    <div
      className={
        message.role === "user"
          ? "message user-message"
          : "message ai-message"
      }
    >
      <p>{message.text}</p>
    </div>
  );
}