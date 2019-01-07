import axios from 'axios';

const forgeKey = 'mFtJ9elrcPsjqexv1Aky0zdqsWsQs4jk';

export const calculateUsdPerPip = async (pair) => {
  const response = await axios.get("https://forex.1forge.com/1.0.1/quotes?pairs="+pair+"&api_key="+forgeKey);
  const { symbol, price } = response.data[0];
  if (symbol !== pair) return null;
  const currentPrice = parseFloat(price);
  return ((0.0001/currentPrice) * 100000) * currentPrice
};

