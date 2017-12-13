import axios from 'axios';

const getSeries = () => axios.get('./series.json');
const getSerieById = () => axios.get('../serie.json');
const searchSeriesByTitle = () => axios.get('./search.json');

export { getSeries, searchSeriesByTitle, getSerieById };