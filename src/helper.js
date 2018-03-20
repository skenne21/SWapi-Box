const cleanYear = (date) => {
    const dates = date.split('-');
    return dates[0];
};

const cleanMovie = (apiData)  => {
  return {
    title: apiData.title,
    opening: apiData.opening_crawl,
    release: cleanYear(apiData.release_date)
  };
}

export default {
  cleanMovie
};
