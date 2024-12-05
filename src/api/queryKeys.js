const queryKeys = {
  pokemon: {
    list: (offset = 0, limit = 20) => ["pokemon", { offset, limit }],
    byId: (id) => ["pokemon", id],
  },
  digimon: {
    list: () => ["digimon"],
    byId: (id) => ["digimon", id],
  },
};

export default queryKeys;
