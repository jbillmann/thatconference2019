import { loader } from "graphql.macro";
import { useMutation } from "@apollo/react-hooks";

const ADD_USER = loader("../graphql/mutations/addUser.graphql");
const USERS = loader("../graphql/queries/users.graphql");

const useAddUser = user => {
  const [addUser] = useMutation(ADD_USER, {
    variables: { input: { name: `${user.firstName} ${user.lastName}` } },
    // refetchQueries: [{ query: USERS }],
    update: (proxy, { data: { addUser } }) => {
      const newUser = {
        __typename: "User",
        id: addUser.id,
        first_name: addUser.name.split(" ")[0],
        last_name: addUser.name.split(" ")[1]
      };

      const data = proxy.readQuery({ query: USERS });
      proxy.writeQuery({
        query: USERS,
        data: {
          ...data,
          userResult: {
            ...data.userResult,
            total: data.total + 1,
            data: [...data.userResult.data, newUser]
          }
        }
      });
    }
  });
  return addUser;
};

export default useAddUser;
