import { nanoid } from "nanoid";

const CONTACTS = [
  {
    id: "1",
    name: "John",
    surname: "Doe",
    avatarURL:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    online: true,
    messageHistory: [
      {
        id: nanoid(),
        userId: "1",
        message: "Hi Bob",
        timestamp: "27/09/2022, 00:00:00",
      },
      {
        id: nanoid(),
        userId: "1",
        message: "How are you doing today?",
        timestamp: "27/09/2022, 00:00:01",
      },
      {
        id: nanoid(),
        userId: "0",
        message: "I'm doing great, thanks! How about you?",
        timestamp: "27/09/2022, 00:00:01",
      },
      {
        id: nanoid(),
        userId: "1",
        message: "I'm doing fine as well. Thanks for asking!",
        timestamp: "27/09/2022, 00:00:02",
      },
    ],
  },
  {
    id: "2",
    name: "Jane",
    surname: "Doe",
    avatarURL:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
    online: false,
    messageHistory: [
      {
        id: nanoid(),
        userId: "2",
        message: "Hi Bob, are we still going to the movie after work?",
        timestamp: "27/09/2022, 00:00:02",
      },
      {
        id: nanoid(),
        userId: "0",
        message: "Hi Jane, yes we are. See you at 6:00pm.",
        timestamp: "27/09/2022, 00:00:05",
      },
      {
        id: nanoid(),
        userId: "2",
        message: "Ok, see you then!",
        timestamp: "27/09/2022, 00:00:07",
      },
    ],
  },
  {
    id: "3",
    name: "Derek",
    surname: "Brown",
    avatarURL:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    online: false,
    messageHistory: [
      {
        id: nanoid(),
        userId: "0",
        message: "Hey Derek!",
        timestamp: "27/09/2022, 00:00:04",
      },
      {
        id: nanoid(),
        userId: "0",
        message: "Do you want to come to the movie at 6:00pm today?",
        timestamp: "27/09/2022, 00:00:06",
      },
      {
        id: nanoid(),
        userId: "3",
        message: "Hey Bob! Sure thing, I'll be there.",
        timestamp: "27/09/2022, 00:00:07",
      },
    ],
  },
];

export default CONTACTS;
