import { loader } from "graphql.macro";
import { useQuery } from "@apollo/react-hooks";

const MARS_PHOTOS = loader("../graphql/queries/marsPhotos.graphql");

const useMarsPhotos = options => {
  const {
    loading,
    error,
    data: { search: { photos = [] } = {} } = {}
  } = useQuery(MARS_PHOTOS, options);

  return { loading, error, photos };
};

export default useMarsPhotos;
