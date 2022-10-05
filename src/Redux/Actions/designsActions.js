import { data } from "../../components/Data/Data";

export const asyncGetDesigns = () => {
  return {
    type: "SUCCESS",
    payload: data,
  };
};

export const asyncLikeDesign = (id) => {
  return {
    type: "LIKE",
    payload: id,
  };
};

export const asyncRemoveLike = (id) => {
  return {
    type: "REMOVE_LIKE",
    payload: id,
  };
};

export const asyncAddComment = (id) => {
  return {
    type: "COMMENT",
    payload: id,
  };
};
