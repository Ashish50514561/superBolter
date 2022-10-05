import { asyncRemoveLike } from "../Actions/designsActions";

const userInitialState = {};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "USER": {
      const user = JSON.parse(localStorage.getItem("user"));
      return user;
    }

    default: {
      return state;
    }
  }
};

const designsInitialState = [];

export const designReducer = (state = designsInitialState, action) => {
  switch (action.type) {
    case "SUCCESS": {
      const designs = JSON.parse(localStorage.getItem("designs"));
      if (designs) return designs;
      else {
        localStorage.setItem("designs", JSON.stringify(action.payload));
        return action.payload;
      }
    }
    case "LIKE": {
      return likeDesign(action.payload);
    }
    case "REMOVE_LIKE": {
      return removeLike(action.payload);
    }
    case "COMMENT": {
      return addComment(action.payload);
    }
    default: {
      return state;
    }
  }
};

function likeDesign(id) {
  console.log({ id });
  const designs = JSON.parse(localStorage.getItem("designs"));
  const user = JSON.parse(localStorage.getItem("user"));
  const updatedDesigns = designs.map((design) => {
    if (design.id === id)
      return { ...design, likes: [...design.likes, user.id] };
    else return design;
  });
  console.log({ updatedDesigns });
  localStorage.setItem("designs", JSON.stringify(updatedDesigns));
  return updatedDesigns;
}

function removeLike(id) {
  const designs = JSON.parse(localStorage.getItem("designs"));
  const user = JSON.parse(localStorage.getItem("user"));
  const updatedDesigns = designs.map((design) => {
    if (design.id === id)
      return {
        ...design,
        likes: design.likes.filter((like) => like != user.id),
      };
    else return design;
  });
  localStorage.setItem("designs", JSON.stringify(updatedDesigns));
  return updatedDesigns;
}

function addComment(post) {
  const designs = JSON.parse(localStorage.getItem("designs"));
  const user = JSON.parse(localStorage.getItem("user"));
  const updatedDesigns = designs.map((design) => {
    if (design.id === post.id)
      return {
        ...design,
        comments: [
          ...design.comments,
          { name: user.name, comment: post.comment, image: user.image },
        ],
      };
    else return design;
  });
  localStorage.setItem("designs", JSON.stringify(updatedDesigns));
  console.log({ post });
  return updatedDesigns;
}
