const chatData = [
  {
    avatar: "/next.svg",
    name: "Devid Heilo",
    text: "How are you?",
    time: "12 min",
    textCount: 3,
    dot: 3,
  },
  {
    avatar: "/next.svg",
    name: "Henry Fisher",
    text: "I am waiting for you",
    time: "5:54 PM",
    textCount: 0,
    dot: 1,
  },
  {
    avatar: "/next.svg",
    name: "Wilium Smith",
    text: "Where are you now?",
    time: "10:12 PM",
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/next.svg",
    name: "Henry Kon",
    text: "I am waiting for you",
    time: "Oct 23",
    textCount: 0,
    dot: 6,
  },
  {
    avatar: "/next.svg",
    name: "Jhon Doe",
    text: "What's up?",
    time: "Oct 24",
    textCount: 2,
    dot: 3,
  },
];

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-base-300 bg-base-100 py-6 shadow-sm xl:col-span-4">
      <h4 className="mb-6 px-8 text-xl font-semibold text-base-content">
        Chats
      </h4>

      <div>
                {chatData.map((chat) => (
                  <div
                    className="flex items-center gap-5 py-3 px-8 hover:bg-base-200 cursor-pointer"
                    key={chat.name}
                  >
        
            <div className="relative h-14 w-14 rounded-full overflow-hidden border border-base-300">
              <div className="flex items-center justify-center h-full w-full bg-base-300">
                <span className="text-xs font-bold">{chat.name.charAt(0)}</span>
              </div>
              <span
                className={`absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-base-100 ${
                  chat.dot === 6
                    ? "bg-success"
                    : chat.dot === 3
                      ? "bg-warning"
                      : "bg-error"
                }`}></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-base-content">{chat.name}</h5>
                <p>
                  <span className="text-sm text-base-content/70">
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time}</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-primary-content">
                    {chat.textCount}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
