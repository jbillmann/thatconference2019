import { loader } from "graphql.macro";
import { useQuery } from "@apollo/react-hooks";

const USERS = loader("../graphql/queries/users.graphql");

const useUsers = () => {
  const {
    loading,
    error,
    data: { userResult: { data = [] } = {} } = {}
  } = useQuery(USERS);
  return { loading, error, data };
};

export default useUsers;
