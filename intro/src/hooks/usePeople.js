import { loader } from "graphql.macro";
import { useQuery } from "@apollo/react-hooks";

const PEOPLE = loader("../graphql/queries/people.graphql");

const usePeople = options => {
  const {
    loading,
    error,
    data: { people: { results = [] } = {} } = {}
  } = useQuery(PEOPLE, options);
  return { loading, error, results };
};

export default usePeople;
