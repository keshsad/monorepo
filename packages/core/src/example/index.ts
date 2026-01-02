import { Effect } from "effect";

// example: simulating a user retrieval operation
interface User {
  readonly id: number;
  readonly name: string;
}

// mocked function to simulate fetching a user form a db
const getUser = (userId: number): Effect.Effect<User, Error> => {
  // mock implementation
  const userDb: Record<number, User> = {
    1: { id: 1, name: "Kailey Christiansen" },
    2: { id: 2, name: "Sasha Mraz" },
  };

  // check if user exists
  const user = userDb[userId];
  if (user) {
    return Effect.succeed(user);
  } else {
    return Effect.fail(new Error("User not found"));
  }
};

// when executed, this will successfully return the user with id 1
export const exampleUserEffect = getUser(1);
