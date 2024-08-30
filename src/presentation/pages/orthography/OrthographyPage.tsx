import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TextMessageBox,
  TypingLoader,
} from "../../components";

interface Message {
  text: string;
  isGpt: boolean;
}

export const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text, isGpt: false }]);

    // TODO: Call UseCase
    setIsLoading(false);

    // TODO: Add isGpt message to true
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessage text="Welcome" />

          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text="This is a GPT message" />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}
          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader className="fade-in" />
            </div>
          )}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Write here what you need"
        disableCorrections={true}
      />
      {/* <TextMessageBoxFile 
        onSendMessage={handlePost}
        placeholder="What we need today?"
      /> */}
      {/* <TextMessageBoxSelect 
        options={[ {id: "1", text: "hola"} , {id: "2", text: "Chao"} ]}
        onSendMessage={console.log}
      /> */}
    </div>
  );
};
