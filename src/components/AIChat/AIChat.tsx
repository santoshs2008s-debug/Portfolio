import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import "./AIChat.css";
import SuggestedQuestions from "./SuggestedQuestions";
import Typing from "./Typing";
import Message from "./Message";
import api from "../api/api";
interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

export default function AIChat() {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text:
        "👋 Hi! I'm Santosh AI.\n\nAsk me anything about Santosh, his skills, projects, education or experience.",
    },
  ]);

  const sendMessage = async (question?: string) => {

    const text = question || input;

    if(!text.trim()) return;

    setMessages(prev=>[
        ...prev,
        {
            role:"user",
            text
        }
    ]);

    setInput("");

    setLoading(true);

    try{

        const res = await api.post("/ai/chat",{

            message:text

        });

        const answer = res.data.response;

        if(answer==="DOWNLOAD_RESUME"){

            window.open("/resume.pdf","_blank");

        }

        else if(answer==="OPEN_GITHUB"){

            window.open(
                "https://github.com/santoshs2008s-debug",
                "_blank"
            );

        }

        else if(answer==="OPEN_LINKEDIN"){

            window.open(
                "https://www.linkedin.com/in/santosh-s-0283763b0/",
                "_blank"
            );

        }

        else if(answer==="SHOW_PROJECTS"){

            document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior:"smooth"
            });

        }

        else if(answer==="SHOW_SKILLS"){

            document
            .getElementById("skills")
            ?.scrollIntoView({
                behavior:"smooth"
            });

        }

        setMessages(prev=>[
            ...prev,
            {
                role:"assistant",
                text:answer
            }
        ]);

    }

    catch(error){

        setMessages(prev=>[
            ...prev,
            {
                role:"assistant",
                text:"Unable to connect to AI."
            }
        ]);

    }

    finally{

        setLoading(false);

    }

};

  return (
    <>
      <motion.button
        className="ai-button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaRobot />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="ai-chat"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-header">
              <FaRobot />

              <div>
                <h3>Santosh AI</h3>
                <span>● Online</span>
              </div>
            </div>

            <div className="chat-body">
              {messages.map((message, index) => (
                <Message key={index} message={message} />
              ))}

              {loading && <Typing />}
            </div>

            <SuggestedQuestions onSelect={sendMessage} />

            <div className="chat-input">
              <input
                placeholder="Ask anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
              />

              <button onClick={() => sendMessage()}>
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}