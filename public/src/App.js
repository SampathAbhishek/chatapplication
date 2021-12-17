import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAT5NkU7WeOcbEef2rDmhNM7dsu5sg50Dk",
  authDomain: "chatapplication-9753c.firebaseapp.com",
  projectId: "chatapplication-9753c",
  storageBucket: "chatapplication-9753c.appspot.com",
  messagingSenderId: "338042893068",
  appId: "1:338042893068:web:09199a5655f4c8cdc48f29",
  measurementId: "G-4JLWLL26MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGl2aW5lLWhhbGwtOSIsImV4cCI6MTYzOTczNjI5NH0.96TMtnThmILni6Z8eLY6_JgO_CZn70PNqX9GuTZz308";

chatClient.connectUser(
  {
    id: "divine-hall-9",
    name: "divine",
    image: "https://getstream.io/random_png/?id=divine-hall-9&name=divine"
  },
  userToken
);

const channel = chatClient.channel("messaging", "custom_channel_id", {
  // add as many custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/react.png",
  name: "ChatApp",
  members: ["divine-hall-9"]
});

const App = () => (
  <Chat client={chatClient} theme="messaging light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
