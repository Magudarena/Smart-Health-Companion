import { Send, Mic, MicOff, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Witaj! Jestem Twoim asystentem medycznym. Jak mogę Ci dzisiaj pomóc? Możesz zapytać mnie o leki, skutki uboczne lub harmonogram dawkowania.',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);

  const suggestedQuestions = [
    'Czy mogę brać ten lek na czczo?',
    'Co zrobić gdy boli mnie głowa?',
    'Kiedy najlepiej przyjąć Amlodipinę?',
    'Jakie są skutki uboczne?',
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Symulacja odpowiedzi AI
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Dziękuję za pytanie! Amlodipina powinna być przyjmowana o stałej porze dnia, niezależnie od posiłków. **Ważne**: Unikaj grapefruitów i soku grejpfrutowego podczas stosowania tego leku. Czy masz inne pytania?',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="flex flex-col h-screen max-w-screen-md mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007AFF] to-[#0051D5] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Asystent AI</h2>
            <p className="text-sm text-gray-600">Zawsze gotowy do pomocy</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 pb-32">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-3xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString('pl-PL', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))}

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="space-y-2 mt-6">
            <p className="text-sm text-gray-600 px-1">Przykładowe pytania:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-2xl text-sm hover:border-[#007AFF] hover:text-[#007AFF] transition-all"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Voice Mode Indicator */}
      {isListening && (
        <div className="absolute inset-x-0 bottom-32 flex justify-center">
          <div className="bg-[#007AFF] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
            <Mic className="w-5 h-5" />
            <span className="font-medium">Słucham...</span>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
        <div className="max-w-screen-md mx-auto flex items-center gap-3">
          <button
            onClick={toggleListening}
            className={`p-3 rounded-2xl transition-all ${
              isListening
                ? 'bg-[#FF6B6B] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Napisz swoją wiadomość..."
            className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#007AFF] text-gray-900 placeholder-gray-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="p-3 rounded-2xl bg-[#007AFF] text-white hover:bg-[#0051D5] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
