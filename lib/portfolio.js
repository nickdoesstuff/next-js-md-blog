import data from "../data/portfolio.json";

export const getPortfolioItems = (tagFilter = null) => {
  if (tagFilter) {
    return data.filter((item) => item.tags.includes(tagFilter.toLowerCase()));
  } else {
    return data;
  }
};

export const getPortfolioItemById = (id) => {
  return data.find((item) => item._id === id);
};
